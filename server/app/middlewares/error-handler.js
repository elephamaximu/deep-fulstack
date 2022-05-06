import { DatabaseConnectionError } from '../errors/database-connection-error.js';
import { NotAuthorizedError } from '../errors/not-authorized-error.js';
import { RouteNotFoundError } from '../errors/route-not-found-error.js';

export const errorHandler = (err, req, res, next) => {
	if (err instanceof DatabaseConnectionError) {
		return res.status(500).send({ message: '데이터베이스 연결 오류' });
	}

	if (err instanceof RouteNotFoundError) {
		return res.status(404).send({ message: 'api가 존재하지 않습니다.' });
	}

	if (err instanceof NotAuthorizedError) {
		return res.status(401).send({ message: '권한이 없습니다.' });
	}
	res.status(400).send({ message: err.message });
};
