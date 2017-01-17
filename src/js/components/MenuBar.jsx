import React from 'react'
import { connect } from 'react-redux'

class MenuBar extends React.Component{

	showProjectMenu(){
		this.props.onShowProjectMenu()
	}

	filterTasks(){
		this.props.onFilterTasks(this.searchValue.value)		
	}

	render(){
		return(
			<div className = 'menu_cnt'>
				<div className = 'search_cnt'>
					<div className = 'search_cnt_inner'>
						<div className = 'search_field'>
							<input ref = { (input) => this.searchValue = input } placeholder = '...Search'/>
						</div>
						<div className = 'search_btn'>
							<a className = 'svg_hlp' onClick = {this.filterTasks.bind(this)}>
								<object data = './dist/img/icons/glass.svg'></object>					
							</a>
						</div>
					</div>
				</div>	
				<div className = 'projects_menu_btn'>
					<a className = 'svg_hlp' onClick = { this.showProjectMenu.bind(this) }>
						<object data = './dist/img/icons/dots.svg'></object>					
					</a>
				</div>	
			</div>
		)
	}
}

export default connect(
	state => ({}),
	dispatch => ({
		onShowProjectMenu: () => { dispatch({type: 'TOGGLE_PROJECT_MENU'}) },
		onFilterTasks: (searchValue) => { dispatch({type: 'SEARCH_TASKS', searchValue: searchValue}) }
	})
)(MenuBar) 