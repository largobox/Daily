import React from 'react'
import { connect } from 'react-redux'

class ProjectForm extends React.Component{

	addProject(){
		if (this.newProjectName.value === ''){
			this.props.onShowNotification('Project name can`t be empty')
			// need setTimeout function
		} 
		else {
			this.props.onAddProject(this.newProjectName.value)	
			this.newProjectName.value = ''
		} 
	}

	render(){
		return(
			<div className = 'project_add_cnt'>
				<div className = 'project_add_el'>
					<input ref = { (input) => this.newProjectName = input } placeholder = 'new project name' />
				</div>
				<div className = 'project_add_el'>
					<a className = 'svg_hlp' onClick = {this.addProject.bind(this)}>
						<object data = './dist/img/icons/plus.svg'></object>					
					</a>
				</div>
			</div>
		)
	}
}

export default connect(
	state => ({
	}),
	dispatch => ({
		onAddProject: (name) => {
			const project = { id: Date.now(), name: name }
			dispatch({ type: 'ADD_PROJECT', project: project })
		},
		onShowNotification: (message) => {
			dispatch({ type: 'NEW_NOTIFICATION', message: message})
		}
	})
)(ProjectForm) 

