import React from 'react';
import UserStore from '../stores/UserStore';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

const url = 'http://apitest2.beatlech.com/public/api/login';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			buttonDisabled: false
		};
	}

	setInputValue(property, val) {
		val = val.trim();
		this.setState({
			[property]: val
		});
	}

	resetForm() {
		this.setState({
			email: '',
			password: '',
			buttonDisabled: false
		});
	}

	doLogin = async (e) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		};

		fetch(url, requestOptions)
			.then((res) => res.json())
			.catch((error) => console.error('Error:', error))
			.then((response) => console.log('success:', response))
			.then(this.resetForm());
	};

	render() {
		return (
			<div>
				Log in
				<InputField
					type="text"
					placeholder="Email"
					value={this.state.email ? this.state.email : ''}
					onChange={(val) => this.setInputValue('email', val)}
				/>
				<InputField
					type="password"
					placeholder="Contraseña"
					value={this.state.password ? this.state.password : ''}
					onChange={(val) => this.setInputValue('password', val)}
				/>
				<SubmitButton text="Ingresar" disabled={this.state.buttonDisabled} onClick={() => this.doLogin()} />
			</div>
		);
	}
}

export default LoginForm;
