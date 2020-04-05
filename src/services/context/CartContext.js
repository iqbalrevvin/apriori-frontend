import createDataContext from './CreateDataContext'
// import {API} from '../api/AprioriiApi'

const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_CART':
            return [
                ...state, 
                {
                    id: action.payload.id,
                    title: action.payload.title
                }
            ]
        case 'DELETE_CART':
            return state.filter((food)=> food.id !== action.payload)
        default:
            return state
    }
}

const addCart = dispatch  => {
    return (id, title) => {
        dispatch({type: 'ADD_CART', payload: {id, title}})
    }
}

const deleteCart = dispatch => {
    return (id) => {
        dispatch({type: 'DELETE_CART', payload: id})
    }
}

export const {Provider, Context} = createDataContext(
    cartReducer,
    {addCart, deleteCart},
    []
)