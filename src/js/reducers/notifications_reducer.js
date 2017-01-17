const initialState = {show: false, message: ''}

function notifications(state = initialState, action){
	if ( action.type === 'NEW_NOTIFICATION' ){
		const ntf = { show: true, message: action.message }
		return ntf
	}
	if ( action.type === 'CLOSE_NOTIFICATION' ){
		const ntf = { show: false }
		return ntf
	}
	return state
}

export default notifications