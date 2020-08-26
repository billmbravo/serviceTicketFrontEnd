import React from 'react';
import UserStore from '../stores/UserStore';
import LoginForm from './LoginForm';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import NavBar from './NavBar';
import CreateTicketForm from './CreateTicketForm';

class App extends React.Component {
	async componentDidMount() {}

	render() {
		return (
			<div className="container-fluid p-0">
				<NavBar />
				{/* <LoginForm /> */}
				<CreateTicketForm />
			</div>
		);
	}
}

export default App;
