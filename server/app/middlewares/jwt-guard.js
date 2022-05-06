import { NotAuthorizedError } from '../errors/not-authorized-error.js';

export const jwtGuard = (req, res, next) => {
	if (!req.currentUser) {
		throw new NotAuthorizedError();
	}

	next();
};
