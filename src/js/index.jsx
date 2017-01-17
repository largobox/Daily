import '../css/all.sass'
import _ from 'lodash'
import React 																			from 'react'
import ReactDOM 																	from 'react-dom'
import { Provider } 															from 'react-redux'
import { createStore } 														from 'redux'
import reducer 																		from './reducers/combine_reducers.js'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } 									from 'react-router-redux' 
import ProjectsList 	 from './components/ProjectsList.jsx'
import ProjectMenu 		 from './components/ProjectMenu.jsx'
import MenuBar 				 from './components/MenuBar.jsx'
import TasksList 			 from './components/TasksList.jsx'
import ProjectEditForm from './components/forms/ProjectEditForm.jsx'
import TaskAddForm from './components/forms/TaskAddForm.jsx'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const history = syncHistoryWithStore(hashHistory, store)

const App = (props) => <div className = 'app_cnt'>
	<ProjectMenu />
	<ProjectsList />
	<MenuBar />
  {props.children}
</div>

ReactDOM.render(
	<Provider store = {store}>
		<Router history = {history}>
			<Route path = '/' component = {App}>
				<IndexRoute component = {TasksList} />
				<Route path ='/projects/edit/:id' component = {ProjectEditForm} />
				<Route path ='/projects/:id' component = {TasksList} />
				<Route path ='/projects/:id/tasks/new' component = {TaskAddForm} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('wrap')
)












// store.subscribe( () => {
// 	console.log('subscribe work', store.getState())
// })