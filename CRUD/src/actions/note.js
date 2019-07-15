import { NavigationActions } from 'react-navigation'
import { UPDATE_FORM, CREATE_NOTE, READ_NOTES, UPDATE_NOTE, DELETE_NOTE } from './types'
const API = 'https://teckmaster-crud.herokuapp.com'

export const updateForm = ({ prop, value }) => {
    return {
        type: UPDATE_FORM,
        payload: { prop, value }
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
export const createNote = ({ title, body }) => {
    return dispatch => {
        fetch(`${API}/notes`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, body })
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                dispatch({
                    type: CREATE_NOTE,
                    payload: responseJson
                })
                NavigationActions.navigate('List')
            })
            .catch(error => console.error(error))
    }
}