import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { registerRequest } from '@/modules/auth/register';
import { Register } from '@/components';

const register = (props) => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const dispatch = useDispatch();
	const onChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(registerRequest(user));
	};
	return (
		<div className='ui container'>
			<Register onChange={onChange} onSubmit={onSubmit} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isRegisterd: state.register.isRegisterd,
});
const registerActions = { registerRequest };

export default connect(mapStateToProps, registerActions)(register);
