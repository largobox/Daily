import React from 'react'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'

class TaskAddForm extends React.Component{

	addTask(){
		const task = { 
			id: Date.now(), 
			body: this.inputValue.value, 
			projectId: this.props.idProject,
			dateDeadline: new Date(this.inputDate.value)
		}
		this.props.onAddTask(task)
		hashHistory.goBack()
	}

	closeForm(){
		hashHistory.goBack()
	}

	render(){
		const t = new Date()
		this.currentDate = `${t.getFullYear()}-0${t.getMonth()+1}-${t.getDate()}`

		return(
			<div className = 'content_cnt'>
				<div className = 'task_add_cnt animation_target'>
					<div className = 'task_add_header'>
						<span>Task add</span>
						<a className = 'svg_hlp' onClick = {this.closeForm}>
							<object data = './dist/img/icons/close.svg'></object>					
						</a>
					</div>
					<div className = 'task_add_body'>
						<div className = 'task_add_field'>
							<label>Name</label>
							<input ref = { input => this.inputValue = input } />
						</div>
						<div className = 'task_add_field'>
							<label>Deadline</label>
							<input ref = { input => this.inputDate = input } type = 'date' min = {this.currentDate} defaultValue = {this.currentDate} />
						</div>
						<button onClick = {this.addTask.bind(this)}>Add</button>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(
	(state, ownProps) => ({
		idProject: Number(ownProps.params.id)
	}),
	dispatch => ({
		onAddTask: (task) => {
			dispatch({type: 'ADD_TASK', task: task})
		}
	})
)(TaskAddForm) 

