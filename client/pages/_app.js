import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import PropTypes from 'prop-types';
import { wrapper } from '@/modules/store';
import withReduxSaga from 'next-redux-saga';

const App = ({ Component, pageProps }) => {
	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
};

export default wrapper.withRedux(withReduxSaga(App));
