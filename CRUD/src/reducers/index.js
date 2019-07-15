import {combineReducers} from 'redux'
import FormReducer from './Form'
import NotesReducer from './Note'
export default combineReducers({
    form: FormReducer,
    notes: NotesReducer
})