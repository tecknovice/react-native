import { UPDATE_FORM, CREATE_NOTE, READ_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actions/types'
const INITIAL_STATE = {
    title: '',
    body: ''
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_FORM:
            return { ...state, [action.payload.prop]: action.payload.value }
        case CREATE_NOTE:
            return INITIAL_STATE
        case UPDATE_NOTE:
            return INITIAL_STATE
        case DELETE_NOTE:
            return INITIAL_STATE
        default:
            return state
    }
}