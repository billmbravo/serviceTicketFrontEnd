import React from 'react';
import UserStore from '../stores/UserStore';
import LoginForm from './LoginForm';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import NavBar from './NavBar';
import CreateTicketForm from './CreateTicketForm';
import RegisterUser from './RegisterUser';

class App extends React.Component {
	async componentDidMount() {}

	render() {
		return (
			<div className="container-fluid p-0">
				<NavBar />
				<RegisterUser />
				{/* <LoginForm /> */}
				{/* <CreateTicketForm /> */}
			</div>
		);
	}
}

export default App;
