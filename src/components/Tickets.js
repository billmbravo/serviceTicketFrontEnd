import React from 'react';
import SubmitButton from './SubmitButton';
import { Link } from 'react-router-dom';
const ticketsUrl = 'http://127.0.0.1:8000/api/admin/tickets';
class Tickets extends React.Component {
	getTickets = async () => {
		const response = await fetch(ticketsUrl);
		const data = await response.json();
		this.setState({
			tickets: data.data
		});
	};

	constructor(props) {
		super(props);
		this.state = {
			tickets: [],
			buttonDisabled: false
		};
	}

	render() {
		return (
			<table className="table">
				<thead className="thead-dark">
					<tr>
						<th scope="col">id</th>
						<th scope="col">Autor</th>
						<th scope="col">Servicio</th>
						<th scope="col">Descipccion</th>
						<th scope="col">Estado</th>
						<th scope="col">Agente</th>
						<th scope="col">Editar</th>
					</tr>
				</thead>
				<tbody>
					{this.state.tickets.map((e) => {
						return (
							<tr key={e.id}>
								<th scope="row">{e.id}</th>
								<td>{e.autor}</td>
								<td>{e.servicio}</td>
								<td>{e.descripcion}</td>
								<td>{[ e.status ].map((sub) => sub.name)}</td>
								<td>{[ e.assigned_to_user || {} ].map((sub) => sub.name)}</td>
								<Link to={`/Tickets/${e.id}`}>
									<td>
										<button type="button" class="btn btn-info">
											Editar
										</button>
									</td>
								</Link>
								<Link to={`/Ticket/${e.id}`}>
									<td>
										<button type="button" class="btn btn-info">
											Ver Ticket
										</button>
									</td>
								</Link>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}

	componentDidMount() {
		this.getTickets();
	}
	componentWillMount() {
		this.getTickets();
	}
}

export default Tickets;
