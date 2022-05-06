export class NotAuthorizedError extends Error {
	constructor(message) {
		super(message);

		Object.setPrototypeOf(this, NotAuthorizedError.prototype);
	}
}
