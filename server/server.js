import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';

import db from './app/models/index.js';
import applyDotenv from './app/lambdas/applyDotenv.js';
import { errorHandler } from './app/middlewares/error-handler.js';
import { RouteNotFoundError } from './app/errors/route-not-found-error.js';
import { userRouter } from './app/routes/user.js';

async function startServer() {
	const app = express();
	const { mongoUri, port, jwtSecret, cookieSecret } = applyDotenv(dotenv);
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	// app.set('trust proxy', true);
	app.use(
		cookieSession({
			secret: cookieSecret,
		})
	);

	app.use(userRouter);
	app.get('*', () => {
		throw new RouteNotFoundError();
	});

	app.use(errorHandler);
	db.mongoose
		.connect(mongoUri)
		.then(() => {
			console.log(' ### 몽고DB 연결 성공 ### ');
		})
		.catch((err) => {
			console.log(' 몽고DB와 연결 실패', err);
			process.exit();
		});

	app.listen(port, () => {
		console.log('***************** ***************** *****************');
		console.log('********** 서버가 정상적으로 실행되고 있습니다 *********');
		console.log('***************** ***************** *****************');
	});
}
startServer();
