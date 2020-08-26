import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import AsyncSelect from 'react-select/async';
import SelectField from './SelectField';
import TextArea from './TextArea';
const urlApiLocal = 'http://127.0.0.1:8000/api/user/ticket';
const urlApi = 'http://apitest2.beatlech.com/public/api/user/ticket';
class CreateTicketForm extends React.Component {
	getPriorities = async () => {
		const response = await fetch('http://127.0.0.1:8000/api/priorities');
		const data = await response.json();
		this.setState({
			priorities: data
		});
	};
	createTicket = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'appliation/json' },
			body: JSON.stringify({
				autor: this.state.autor,
				servicio: this.state.servicio,
				priority_id: this.state.priority_id,
				descripcion: this.state.descripcion
			})
		};
		fetch(urlApiLocal, requestOptions)
			.then((res) => res.json())
			.catch((error) => console.error('Error:', error))
			.then((response) => console.log('success:', response))
			.then(this.resetForm());
	};

	constructor(props) {
		super(props);
		this.state = {
			autor: '',
			servicio: '',
			priority_id: 1,
			descripcion: '',
			priorities: [],
			buttonDisabled: false
		};
	}

	setInputValue(property, val) {
		val = val;
		this.setState({
			[property]: val
		});
	}

	resetForm() {
		this.setState({
			autor: '',
			servicio: '',
			priority_id: 1,
			descripcion: '',
			buttonDisabled: false
		});
	}

	render() {
		return (
			<div>
				<InputField
					type="text"
					placeholder="Autor"
					value={this.state.autor ? this.state.autor : ''}
					onChange={(val) => this.setInputValue('autor', val)}
				/>
				<InputField
					type="text"
					placeholder="Servicio"
					value={this.state.servicio ? this.state.servicio : ''}
					onChange={(val) => this.setInputValue('servicio', val)}
				/>
				<SelectField
					value={this.state.priority_id ? this.state.priority_id : ''}
					onChange={(val) => this.setInputValue('priority_id', val)}
					data={this.state.priorities}
					text="Prioridad"
					type="priority"
				/>
				<TextArea
					value={this.state.descripcion ? this.state.descripcion : ''}
					dafaultValue="Escriba aqui la descripcion de su solicitud"
					onChange={(val) => this.setInputValue('descripcion', val)}
				/>
				<SubmitButton text="Enviar" disabled={this.state.buttonDisabled} onClick={() => this.createTicket()} />
			</div>
		);
	}
	componentDidMount() {
		this.getPriorities();
	}
}

export default CreateTicketForm;
