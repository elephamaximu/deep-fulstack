import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import applyDotenv from '../lambdas/applyDotenv.js';

const { jwtSecret } = applyDotenv(dotenv);
export const currentUser = (req, res, next) => {
	if (!req.session.jwt) {
		return next();
	}

	try {
		const payload = jwt.verify(req.session.jwt, jwtSecret);
		req.currentUser = payload;
	} catch (error) {}

	next();
};
