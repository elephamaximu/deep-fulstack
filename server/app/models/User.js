import bcrypt from 'bcrypt';
export default function UserModel(mongoose) {
	const userSchema = mongoose.Schema(
		{
			email: { type: String, required: true, trim: true, unique: 1 },
			password: { type: String, required: true },
		},
		{
			timestamps: true,
			toJSON: {
				transform(_doc, ret) {
					ret.id = ret._id;
					delete ret._id;
					delete ret.password;
					delete ret.__v;
					delete ret.createdAt;
					delete ret.updatedAt;
				},
			},
		}
	);
	userSchema.pre('save', function (next) {
		let user = this;
		const saltRounds = 10;

		bcrypt.genSalt(saltRounds, function (err, salt) {
			if (err) return next(err);
			bcrypt.hash(user.password, salt, function (err, hash) {
				if (err) return next(err);
				user.password = hash;
				next();
			});
		});
	});

	userSchema.methods.comparePassword = async function (password) {
		try {
			return await bcrypt.compare(password, this.password);
		} catch (error) {
			return false;
		}
	};

	return mongoose.model('User', userSchema);
}
