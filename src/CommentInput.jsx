import React from 'react';
import ReactDOM from 'react-dom';

export default class CommentInput extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			isEditing: false,
			body: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	resetForm() {
		this.setState({body: ''});
	} 

	handleChange(event) {
		this.setState({ body: event.target.value });
	}
	
	handleSubmit(event) {
		event.preventDefault();
		this.props.onSave({ body: this.state.body });
		this.resetForm();
	}

  render() {
    return (
			<form className="comment-input-form" onSubmit={this.handleSubmit}>
				<div>
					<label>Comment: </label>
					<textarea
						name="comment"
						value={this.state.body}
						onChange={this.handleChange}
					/>
				</div>
				<input
					type="submit"
					value="Submit!"
				/>
			</form>
		);
  }
}
