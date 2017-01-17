import React from 'react'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'

class ProjectMenu extends React.Component{

	editProject(){
		if (this.props.currentProjectId === undefined){
			this.props.onNtfNeedSelectProject('At first need select project')
		} else {
			this.props.onHideProjectMenu()
			hashHistory.push(`/projects/edit/${this.props.currentProjectId}`)
		}
	}

	deleteProject(){
		if (this.props.currentProjectId === undefined){
			this.props.onNtfNeedSelectProject('At first need select project')
		} else {
			this.props.onDeleteProject(this.props.currentProjectId)
			hashHistory.push('/')
		}		
	}

	render(){
		return(
			<div className = { 'project_menu_cnt' + (this.props.toggleProjectMenu ? ' active' : '') }>
				<ul>
					<li onClick = {this.editProject.bind(this) }><span>Редактировать</span></li>
					<li onClick = {this.deleteProject.bind(this) } ><span>Удалить</span></li>
				</ul>
			</div>
		)
	}
}

export default connect(
	state => ({
		history: state.history,
		toggleProjectMenu: state.toggleProjectMenu,
		currentProjectId: state.currentProject.id
	}),
	dispatch => ({
		onDeleteProject: (currentProjectId) => { 
			dispatch({type: 'DELETE_PROJECT', currentProjectId: currentProjectId }),
			dispatch({type: 'DELETE_TASKS_GROUP', currentProjectId: currentProjectId })
		},
		onNtfNeedSelectProject: (message) => {
			dispatch({ type: 'NEW_NOTIFICATION', message: message})
		},
		onHideProjectMenu: () => {
			dispatch({ type: 'HIDE_PROJECT_MENU'})
		}
	})
)(ProjectMenu) 