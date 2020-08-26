import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import SelectField from './SelectField';

const urlApiLocal = 'http://127.0.0.1:8000/api/register';

class RegisterUser extends React.Component {
	getRole = async () => {
		const response = await fetch('http://127.0.0.1:8000/api/roles');
		const data = await response.json();
		this.setState({
			rolesData: data
		});
	};

	createUser = async () => {
		const formdata = new FormData();
		formdata.append('name', this.state.name);
		formdata.append('email', this.state.email);
		formdata.append('password', this.state.password);
		formdata.append('password_confirmation', this.state.password);
		formdata.append('roles[]', this.state.role);

		const requestOptions = {
			method: 'POST',
			body: formdata
		};

		fetch(urlApiLocal, requestOptions)
			.then((res) => res.json())
			.catch((error) => console.error('Error:', error))
			.then((response) => console.log('success:', response));
	};

	setInputValue(property, val) {
		val = val;
		this.setState({
			[property]: val
		});
	}

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			role: '2',
			rolesData: [],
			buttonDisabled: false
		};
	}

	render() {
		return (
			<div>
				<InputField
					type="text"
					placeholder="Nombre"
					value={this.state.name ? this.state.name : ''}
					onChange={(val) => this.setInputValue('name', val)}
				/>
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
				<SelectField
					value={this.state.role ? this.state.role : ''}
					onChange={(val) => this.setInputValue('role', val)}
					data={this.state.rolesData}
					text="Rol"
					type="roles"
				/>
				<SubmitButton text="Registrar" disabled={this.state.buttonDisabled} onClick={() => this.createUser()} />
			</div>
		);
	}

	componentDidMount() {
		this.getRole();
	}
}
export default RegisterUser;
