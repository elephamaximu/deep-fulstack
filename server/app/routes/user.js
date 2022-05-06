import express from 'express';
import { body, validationResult } from 'express-validator';
import { currentUser } from '../middlewares/current-user.js';
import { jwtGuard } from '../middlewares/jwt-guard.js';
import UserService from '../services/user.js';

const router = express.Router();

router.post(
	'/user/signup',
	[
		body('email').isEmail().withMessage('올바른 이메일 형식이 아닙니다.'),
		body('password').trim().notEmpty(),
	],
	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw new Error('이메일 또는 비밀번호가 잘못되었습니다.');
		}

		next();
	},
	UserService().signup
);

router.post(
	'/user/signin',
	[
		body('email').isEmail().withMessage('올바른 이메일 형식이 아닙니다.'),
		body('password').trim().notEmpty(),
	],
	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw new Error('이메일 또는 비밀번호가 잘못되었습니다.');
		}

		next();
	},
	UserService().signin
);

router.post('/user/signout', (req, res) => {
	req.session = null;

	res.send({});
});

router.get('/user/currentuser', currentUser, jwtGuard, (req, res) => {
	res.send({ currentUser: req.currentUser || null });
});

export { router as userRouter };
