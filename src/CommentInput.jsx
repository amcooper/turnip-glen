import React from 'react';
import ReactDOM from 'react-dom';

export default class CommentInput extends React.Component {
  state = {
    isEditing: false,
    body: '',
  };

	resetForm() {
		this.setState({body: ''});
	} 

	handleChange(event) {
		this.setState({ body: event.target.value });
	}
	
	handleSubmit(event) {
		this.props.onSave({ body: this.state.body });
		this.resetForm();
	}

  render() {
    return (
			<form clasName="comment-input-form" onSubmit={this.handleSubmit}>
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
