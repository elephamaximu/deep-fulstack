export class RouteNotFoundError extends Error {
	constructor(message) {
		super(message);

		Object.setPrototypeOf(this, RouteNotFoundError.prototype);
	}
}
