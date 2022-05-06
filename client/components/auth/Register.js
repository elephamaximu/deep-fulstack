export const Register = ({ onChange, onSubmit }) => {
	return (
		<form onSubmit={onSubmit}>
			<br />
			<h1>Sign Up</h1>
			<div className='form-group'>
				<label>이메일</label>
				<input className='form-control' name='email' onChange={onChange} />
			</div>
			<div className='form-group'>
				<label>패스워드</label>
				<input
					type='password'
					className='form-control'
					name='password'
					onChange={onChange}
				/>
			</div>
			<br />
			<button className='btn btn-primary'>Sign Up</button>
		</form>
	);
};
