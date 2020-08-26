import React from 'react';

class SubmitButton extends React.Component {
	render() {
		return (
			<div className="submitButton">
				<button
					type="button"
					className="btn btn-dark"
					disabled={this.props.disabled}
					onClick={() => this.props.onClick()}
				>
					{this.props.text}
				</button>
			</div>
		);
	}
}

export default SubmitButton;
