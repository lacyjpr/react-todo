import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from 'actions';

export class Todo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			editable: false
		};

		this.renderTodo = this.renderTodo.bind(this);
		this.renderButton = this.renderButton.bind(this);
	} 
	
	renderTodo = () => {
		var {text, completed} = this.props;
		if(this.state.editable && !completed) {
			return <input className="edit-input" type="text" defaultValue={text} ref="editTodoText"/>;
		} else {
			return <p>{text}</p>;
		}
	};

	renderButton = () => {
		var {id, completed, dispatch} = this.props;
		if (!completed) {
			if (!this.state.editable) {
				return <button className="small button expanded hollow" ref="editTodoBtn" onClick={() => {
					this.setState({editable: !this.state.editable});
				}}>Edit</button>;
			} else {
				return <button className="small success button expanded hollow" ref="saveEditBtn" onClick={() => {
					var newText = this.refs.editTodoText.value;
					this.refs.editTodoText.value = '';
					if (newText.length > 0) {
						dispatch(actions.startSaveEditedTodo(id, newText));
					}
					this.setState({editable: false}); 	
				}}>Save</button>;
			}
		}
	};
	render() {
		var {id, completed, createdAt, completedAt, edited, editedAt, dispatch} = this.props;
		var todoClassName = completed ? 'todo todo-completed' : 'todo';
		var renderDate = () => {
			var message = 'Created ';
			var timestamp = createdAt;

			if (edited) {
				message = 'Edited ';
				timestamp = editedAt;

			}

			if (completed) {
				message = 'Completed ';
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
		};

		return (
			<div className={todoClassName}> 
				<div>
					<input type="checkbox" checked={completed} ref="toggler" onClick={() => {
						dispatch(actions.startToggleTodo(id, !completed));
					}} onChange={()=>{}}/>
				</div>
				<div>
					{this.renderTodo()}
					<p className="todo_subtext">{renderDate()}</p>
				</div>
				<div className="controls">
					{this.renderButton()}
					<button className="small expanded button alert hollow" ref="deleteTodoBtn" onClick={() => {
						dispatch(actions.startDeleteTodo(id));
					}}>Delete</button>
				</div>
			</div>
		);
	} 
}

export default connect()(Todo);

