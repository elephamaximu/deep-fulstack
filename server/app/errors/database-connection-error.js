export class DatabaseConnectionError extends Error {
	constructor(message) {
		super(message);

		Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
	}
}
