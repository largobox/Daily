const initialState = ''

function searchTasks(state = initialState, action){
	if ( action.type === 'SEARCH_TASKS' ){
		return action.searchValue
	}
	return state
}

export default searchTasks