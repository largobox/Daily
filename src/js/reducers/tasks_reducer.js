const today = new Date()
const tomorrow = new Date()
const afterTomorrow = new Date()

tomorrow.setDate(tomorrow.getDate() + 1)
afterTomorrow.setDate(afterTomorrow.getDate() + 2)

const initialState = [
	{id: 0, body: 'Do homework', projectId: 0, dateDeadline: today},
	{id: 1, body: 'Walk with my dog', projectId: 0, dateDeadline: tomorrow},
	{id: 2, body: 'Tale a cap of tea', projectId: 0, dateDeadline: tomorrow},
	{id: 3, body: 'Go to the center of town', projectId: 1, dateDeadline: afterTomorrow},
	{id: 4, body: 'See how sunrising', projectId: 1, dateDeadline: tomorrow},
	{id: 5, body: 'Learn englis...', projectId: 2, dateDeadline: today},
	{id: 7, body: 'Hey mamba', projectId: 1, dateDeadline: afterTomorrow},
	{id: 8, body: 'You think this bad neiborhood?', projectId: 3, dateDeadline: tomorrow},
	{id: 9, body: 'Well..', projectId: 3, dateDeadline: tomorrow},
	{id: 10, body: 'You think this bad neiborhood?', projectId: 3, dateDeadline: tomorrow},
	{id: 62, body: 'Well..', projectId: 3, dateDeadline: afterTomorrow},
	{id: 82, body: 'You think this bad neiborhood?', projectId: 3, dateDeadline: tomorrow},
	{id: 83, body: 'You think this bad neiborhood?', projectId: 3, dateDeadline: afterTomorrow},
	{id: 63, body: 'Well..', projectId: 3, dateDeadline: today},
	{id: 64, body: 'Well..', projectId: 3, dateDeadline: afterTomorrow},
]

const sortedState = _.sortBy(initialState, ['dateDeadline'])

function tasks(state = sortedState, action){
	if ( action.type === 'ADD_TASK' ){
		return _.sortBy([...state, action.task], ['dateDeadline'])
	}
	if ( action.type === 'DELETE_TASK' ){
		return [...state].filter( (el) => { return el.id !== action.deleteTaskId } )
	}
	if ( action.type === 'DELETE_TASKS_GROUP' ){
		return [...state].filter( (el) => { return el.projectId !== action.currentProjectId } )
	}
	return state
}

export default tasks