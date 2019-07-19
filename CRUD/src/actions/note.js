import { Actions } from 'react-native-router-flux'
import axios from 'axios'
import { UPDATE_FORM, CREATE_NOTE, READ_NOTES, UPDATE_NOTE, DELETE_NOTE } from './types'
const API = 'https://teckmaster-crud.herokuapp.com'

export const updateForm = ({ prop, value }) => {
    return {
        type: UPDATE_FORM,
        payload: { prop, value }
    }
}

export const createNote = ({ title, body }) => {
    return dispatch => {
        axios.post(`${API}/notes`, { title, body })
            .then(response => {
                dispatch({
                    type: CREATE_NOTE,
                    payload: response.data
                })
                Actions.List({ type: 'reset' })
            })
            .catch(error => console.log(error.message))
    }
}
export const readNotes = () => {
    return dispatch => {
        fetch(`${API}/notes`)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                dispatch({
                    type: READ_NOTES,
                    payload: responseJson
                })
            })
            .catch(error => console.error(error))
    }
}
export const updateNote = ({ _id, title, body }) => {
    return dispatch => {
        axios.put(`${API}/notes/${_id}`, { title, body })
            .then(response => {
                dispatch({
                    type: UPDATE_NOTE,
                    payload: response.data
                })
                Actions.List({ type: 'reset' })
            })
            .catch(error => console.log(error.message))
    }
}
export const deleteNote = (_id) => {
    return dispatch => {
        axios.delete(`${API}/notes/${_id}`)
            .then(response => {
                dispatch({
                    type: UPDATE_NOTE,
                    payload: response.data
                })
                Actions.List({ type: 'reset' })
            })
            .catch(error => console.log(error.message))
    }
}