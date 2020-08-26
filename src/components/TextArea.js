import React from 'react';

class TextArea extends React.Component {
	render() {
		return (
			<textarea
				className="form-control"
				id="descripcion"
				rows={3}
				defaultValue={this.props.defaultValue}
				value={this.props.value}
				onChange={(e) => this.props.onChange(e.target.value)}
			/>
		);
	}
}

export default TextArea;
