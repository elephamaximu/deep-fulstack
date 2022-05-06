import { Header } from '@/components/Header';
import Nav from '@/components/Nav';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';

const App = ({ Component }) => {
	return (
		<React.Fragment>
			<Header />
			<Nav />
			<Component />
		</React.Fragment>
	);
};

export default App;
