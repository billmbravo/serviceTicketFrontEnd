import React from 'react';
import { reaction } from 'mobx';

class UserTicketView extends React.Component {
	cargarTicket = async () => {
		const response = await fetch(`http://127.0.0.1:8000/api/admin/ticket/${this.props.match.params.id}`);
		const data = await response.json();
		this.setState({
			ticket: data.data
		});
	};
	constructor(props) {
		super(props);
		this.state = {
			ticket: {
				assigned_to_user: {}
			}
		};
	}

	render() {
		return (
			<div className="pt-3">
				<div className="card text-white bg-dark mb-3" style={{ maxWidth: '18rem' }}>
					<div className="card-header">{this.state.ticket.servicio}</div>
					<div className="card-body">
						<h5 className="card-title">Autor: {this.state.ticket.autor}</h5>
						<p className="card-text">Descripcion: {this.state.ticket.descripcion}</p>
						<p className="card-text">
							Agente:{' '}
							{this.state.ticket.assigned_to_user ? (
								this.state.ticket.assigned_to_user.name
							) : (
								'Sin asignar'
							)}
						</p>
					</div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		this.cargarTicket();
	}
}

export default UserTicketView;
