import { combineReducers } from 'redux'
import { routerReducer }	 from 'react-router-redux'
import projects 					 from './projects_reducer.js'
import notifications			 from './notifications_reducer.js'
import tasks 					 		 from './tasks_reducer.js'
import toggleProjectMenu	 from './toggle_project_menu_reducer.js'
import currentProject			 from './select_project_reducer.js'
import searchTasks				 from './search_tasks_reducer.js'

const reducers = {
	routing: routerReducer,
	projects,
	notifications,
	tasks,
	toggleProjectMenu,
	currentProject,
	searchTasks
}

export default combineReducers(reducers)