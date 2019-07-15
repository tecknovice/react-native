import { READ_NOTES } from '../actions/types'
const INITIAL_STATE = []
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case READ_NOTES:
            return action.payload
        default:
            return state
    }
}