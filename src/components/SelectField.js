import React from 'react';
import Option from './Option';
import { Callbacks } from 'jquery';
import Select from 'react-select';
class SelectField extends React.Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor="prioritieSelect">{this.props.text}</label>
				<select
					className="form-control"
					id="prioritieSelect"
					onChange={(e) => this.props.onChange(e.target.value)}
					value={this.props.value}
				>
					{this.props.data.map((e) => {
						return (
							<option value={e.id} key={e.id}>
								{e.id}. {e.name}
							</option>
						);
					})}
				</select>
			</div>
		);
	}
}

export default SelectField;
