const initialState = false

function toggleProjectMenu(state = initialState, action){
	if ( action.type === 'TOGGLE_PROJECT_MENU' ){
		return !state
	}
	if ( action.type === 'HIDE_PROJECT_MENU' ){
		return false
	}
	return false
}

export default toggleProjectMenu