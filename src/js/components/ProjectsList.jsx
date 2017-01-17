import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Profile from './Profile.jsx'
import ProjectForm from './forms/ProjectForm.jsx'
import Notification from './Notification.jsx'

class ProjectsList extends React.Component{
	selectProject(project){
		this.props.onSelectProject(project)
		this.props.onResetSearch()
	}

	render(){
		return(
			<div className = 'projects_cnt'>
				<Notification />
				<Profile />
				<div className = 'projects_cnt_inner'>
					<ProjectForm />
					<ul>
						{this.props.projects.map( (project, ind) => 
							<Link to = {`/projects/${project.id}`} key = {project.id}>
								<li onClick = {this.selectProject.bind(this, project)} >{project.name}</li>
							</Link>
						)}
					</ul>
				</div>
			</div>
		)
	}
}

export default connect(
	state => ({
		projects: state.projects
	}),
	dispatch => ({
		onSelectProject: (project) => { dispatch({type: 'SELECT_PROJECT', project: project}) },
		onResetSearch: () => { dispatch({type: 'SEARCH_TASKS', searchValue: ''}) }
	})
)(ProjectsList) 