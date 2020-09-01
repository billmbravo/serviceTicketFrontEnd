import React from 'react';
import { Link } from 'react-router-dom';
const navStyle = {
	color: 'white'
};
class NavBar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-column flex-md-row">
				<a className="navbar-brand">Service Ticket</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to="/">
								<a className="nav-link">
									Inicio <span className="sr-only" />
								</a>
							</Link>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Opciones
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<Link to="/Register">
									<a className="dropdown-item">Registrar usuario</a>
								</Link>
								<Link to="/Tickets">
									<a className="dropdown-item">Ver Tickets</a>
								</Link>
								<Link to="/CreateTicket">
									<a className="dropdown-item">Ingresar Ticket</a>
								</Link>
							</div>
						</li>
					</ul>
					<ul className="navbar-nav">
						<Link to="/Login">
							<li className="nav-item">
								<a className="nav-link">Log In</a>
							</li>
						</Link>
						<Link to="/">
							<li className="nav-item">
								<a className="nav-link">Log Out</a>
							</li>
						</Link>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar;
