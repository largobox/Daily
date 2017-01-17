const initialState = {}

function selectProject(state = initialState, action){
	if ( action.type === 'SELECT_PROJECT' ){
		const selectedProject = { id: action.project.id, name: action.project.name }
		return selectedProject
	}
	return state
}

export default selectProject