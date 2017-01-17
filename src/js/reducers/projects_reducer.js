const initialState = [
	{id: 0, name: 'Project 1'},
	{id: 1, name: 'Project 2'},
	{id: 2, name: 'Project 3'},
	{id: 3, name: 'Project 4'}
]

function projects(state = initialState, action){
	if ( action.type === 'ADD_PROJECT' ){
		return [...state, action.project]
	}
	if ( action.type === 'EDIT_PROJECT' ){
		let newProject = {}
		state.find( p => { newProject = p.id === action.idProject ? p : newProject } )
		newProject.name = action.newName
		return state.map( p => { if( p.id === newProject.id ){ return newProject } return p })
	}
	if ( action.type === 'DELETE_PROJECT' ){
		return [...state].filter( (el) => { return el.id !== action.currentProjectId } )
	}
	return state
}

export default projects