import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import NavBar from './NavBar';
import CreateTicketForm from './CreateTicketForm';
import RegisterUser from './RegisterUser';
import Tickets from './Tickets';
import EditTicket from './EditTicket';
import UserTicketView from './UserTicketView';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Router>
				<div className="container-fluid p-0">
					<NavBar />
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="d-flex justify-content-center">
									<Switch>
										<Route path="/" exact component={Home} />
										<Route path="/Login" component={LoginForm} />
										<Route path="/Register" component={RegisterUser} />
										<Route path="/CreateTicket" component={CreateTicketForm} />
										<Route path="/Tickets" exact component={Tickets} />
										<Route path="/Tickets/:id" exact component={EditTicket} />
										<Route path="/Ticket/:id" exact component={UserTicketView} />
									</Switch>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

const Home = () => <h1 className="mt-5">Bienvenido a service ticket</h1>;

export default App;
