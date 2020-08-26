import React from 'react';

class Option extends React.Component {
	render() {
		return (
			<option value={this.props.value} onChange={(e) => this.props.onChange(e.target.value)}>
				{this.props.id}. {this.props.field}
			</option>
		);
	}
}

export default Option;
