import React from 'react';
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
					type={this.props.type}
				>
					{this.props.data.map((e) => {
						if (this.props.type === 'name') {
							return (
								<option value={e.id} key={e.id}>
									{e.id}. {e.name}
								</option>
							);
						} else if (this.props.type === 'title') {
							return (
								<option value={e.id} key={e.id}>
									{e.id}. {e.title}
								</option>
							);
						} else return null;
					})}
				</select>
			</div>
		);
	}
}

export default SelectField;
