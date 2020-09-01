import React from 'react';
import { Link } from 'react-router-dom';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import SelectField from './SelectField';
import TextArea from './TextArea';
const statusesUrl = 'http://127.0.0.1:8000/api/statuses';
const agentsUrl = 'http://127.0.0.1:8000/api/agents';
class EditTicket extends React.Component {
	setInputValue(property, val) {
		val = val;
		this.setState({
			[property]: val
		});
	}
	cargarTicket = async () => {
		const response = await fetch(`http://127.0.0.1:8000/api/admin/ticket/${this.props.match.params.id}`);
		const data = await response.json();
		this.setState({
			ticket: data.data,
			status_id: data.data.status_id,
			assigned_to_user_id: data.data.assigned_to_user_id
		});
	};
	cargarStatuses = async () => {
		const response = await fetch(statusesUrl);
		const data = await response.json();
		this.setState({
			statuses: data
		});
	};
	cargarAgentes = async () => {
		const response = await fetch(agentsUrl);
		const data = await response.json();
		this.setState({
			agents: data
		});
	};
	UpdateTicket = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'appliation/json' },
			body: JSON.stringify({
				autor: this.state.ticket.autor,
				servicio: this.state.ticket.servicio,
				priority_id: this.state.ticket.priority_id,
				descripcion: this.state.ticket.descripcion,
				status_id: this.state.status_id,
				assigned_to_user_id: this.state.assigned_to_user_id
			})
		};
		fetch(`http://127.0.0.1:8000/api/admin/ticket/${this.props.match.params.id}`, requestOptions)
			.then((res) => res.json())
			.catch((error) => console.error('Error:', error))
			.then((response) => console.log('success:', response));
	};
	constructor(props) {
		super(props);
		this.state = {
			ticket: {
				status: {},
				assigned_to_user: {},
				priority: {}
			},
			assigned_to_user_id: '3',
			status_id: null,
			buttonDisabled: false,
			statuses: [],
			agents: []
		};
	}
	render() {
		return (
			<div>
				<fieldset disabled>
					<InputField type="text" placeholder="Autor" value={this.state.ticket.autor} />
					<InputField type="text" placeholder="Servicio" value={this.state.ticket.servicio} />
					<InputField type="text" placeholder="Prioridad" value={this.state.ticket.priority.name} />
					<InputField type="text" placeholder="Status" value={this.state.ticket.status.name} />
					<InputField
						type="text"
						placeholder="Agente"
						value={this.state.ticket.assigned_to_user ? this.state.ticket.assigned_to_user.name : ''}
					/>
					<TextArea value={this.state.ticket.descripcion} />
				</fieldset>
				<SelectField
					value={this.state.status_id ? this.state.status_id : ''}
					onChange={(val) => this.setInputValue('status_id', val)}
					data={this.state.statuses}
					text="status"
					type="name"
				/>
				<SelectField
					value={this.state.assigned_to_user_id ? this.state.assigned_to_user_id : ''}
					onChange={(val) => this.setInputValue('assigned_to_user_id', val)}
					data={this.state.agents}
					text="agente"
					type="name"
				/>
				<Link to="/Tickets">
					<SubmitButton
						text="Enviar"
						disabled={this.state.buttonDisabled}
						onClick={() => this.UpdateTicket()}
					/>
				</Link>
			</div>
		);
	}

	componentDidMount() {
		this.cargarAgentes();
		this.cargarStatuses();
		this.cargarTicket();
	}
}
export default EditTicket;
