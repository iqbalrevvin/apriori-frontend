import createDataContext from './CreateDataContext'
import {API} from '../api/AprioriiApi'
import axios from 'axios'

const authReducer = (state, action) => {
    switch(action.type){
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'LOGIN_SUCCES':
            return {
                ...state,
                loading: false,
                redirectToReferrer: true,
                openAlert: true,
                typeAlert: 'success',
                messageAlert: 'Login Success, Redirecting page...'
            }
        case 'ERROR':
            return {
                ...state,
                loading: false,
                openAlert: true,
                typeAlert: 'error',
                messageAlert: action.payload
            }
        default:
            return state
    }
}

const setToken = (data) => {
    if(typeof window !== 'undefined'){
        localStorage.setItem('Token', JSON.stringify(data))
    }
}
const setCredential = (data) => {
    if(typeof window !== 'undefined'){
        localStorage.setItem('Credential', JSON.stringify(data))
    }
}


const signin = dispatch => ({email, password}) => {
    dispatch({type: 'LOADING'})
    axios.get(`${API}/sanctum/csrf-cookie`).then(response => { 
        axios.post(`${API}/api/login`, {
            email: email,
            password: password
        }).then(response2 => {
            dispatch({type: 'LOGIN_SUCCES'})
            console.log(response2)
            setToken(response2.data.token)
            setCredential(response2.data.user)
            window.location.reload();
        }).catch(error => {
            dispatch({type: 'ERROR', payload: error.message})
            console.log(error)

        })
    });
}


export const {Provider, Context} = createDataContext(
    authReducer,
    {signin},
    {
        name: '',
        email: '',
        password: '',
        loading: false,
        redirectToReferrer: false,
        vertical: 'bottom',
        horizontal: 'left',
        openAlert: false,
        typeAlert: '',
        messageAlert: ''
    }
)