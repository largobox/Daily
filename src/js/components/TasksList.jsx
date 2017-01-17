import React from 'react'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'

class TasksList extends React.Component{

	deleteTask(deleteTaskId){
		this.props.onDeleteTask(deleteTaskId)
	}

	goToAddTask(){
		if (isNaN(this.props.idProject)){
			this.props.onNtfNeedSelectProject('At first need select project')
			return
		}
		hashHistory.push(`/projects/${this.props.idProject}/tasks/new`)
	}

	dateParse(d){
		return `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
	}

	putDateDivider(d){
		d = this.dateParse(d)

		if (d !== this.dateDivider){
			this.dateDivider = d
			return (
				<div className = 'task_header'>
					<p>{this.dateDivider}</p>
				</div>
			)
		}
	}

	render(){
		if (this.props.tasks[0] !== undefined){
					this.dateDivider = this.dateParse(this.props.tasks[0].dateDeadline)
			this.fisrtCaptonDate = this.dateParse(this.props.tasks[0].dateDeadline)
		}

		return(
			<div className = 'content_cnt'>
				<div className = 'tasks_cnt_inner'>
					<div className = 'tasks_list_cnt'>
						<ul>
							<div className = 'task_header'>
								{this.props.tasks.length ? <p>{this.fisrtCaptonDate}</p> : <p></p>} 
							</div>
							{ this.props.tasks.map( (task) => {
									return (
										<li key = {task.id}>
											{this.putDateDivider(task.dateDeadline)}
											<div className = 'task_body'>
												<div className = 'task_solve_btn_cnt'>
													<div className = 'task_solve_btn' onClick = {this.deleteTask.bind(this, task.id)} ></div>
												</div>
												<div className = 'task_desc'>{task.body}</div>																			
											</div>									
										</li>
									)
								}) 
							}
						</ul>
					</div>
					<div className = 'task_add_btn'>
						<a className = 'svg_hlp' onClick = {this.goToAddTask.bind(this)} >
							<object data = './dist/img/icons/plus.svg'></object>					
						</a> 
					</div>
				</div>
			</div>
		)
	}
}

export default connect(
	(state, ownProps) => ({
		idProject: Number(ownProps.params.id),
		tasks: state.tasks.filter( (task) => { return task.projectId === Number(ownProps.params.id) && task.body.toLowerCase().includes(state.searchTasks) } )
	}),
	dispatch => ({
		onNtfNeedSelectProject: (message) => {
			dispatch({ type: 'NEW_NOTIFICATION', message: message})
		},
		onDeleteTask: (deleteTaskId) => { dispatch({type: 'DELETE_TASK', deleteTaskId: deleteTaskId }) }
	})
)(TasksList) 