import React from 'react'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'

class ProjectEditForm extends React.Component{

	editProject(){
		this.props.onEditProject(this.props.project.id, this.inputValue.value)
		hashHistory.goBack()
	}

	closeForm(){
		hashHistory.goBack()
	}

	render(){
		return(
			<div className = 'content_cnt'>
				<div className = 'project_edit_cnt animation_target'>
					<div className = 'project_edit_header'>
						<span>Project edit</span>
						<a className = 'svg_hlp' onClick = {this.closeForm} >
							<object data = './dist/img/icons/close.svg'></object>					
						</a>
					</div>
					<div className = 'project_edit_body'>
						<label>Name</label>
						<input ref = { input => this.inputValue = input } defaultValue = {this.props.project.name} />
						<button onClick = {this.editProject.bind(this)}>Edit</button>
					</div>

				</div>
			</div>
		)
	}
}

export default connect(
	(state, ownProps) => ({
		project: state.projects.find( project =>  project.id === Number(ownProps.params.id))
	}),
	dispatch => ({
		onEditProject: (idProject, newName) => {
			dispatch({type: 'EDIT_PROJECT', idProject: idProject, newName: newName})
		}
	})
)(ProjectEditForm) 

