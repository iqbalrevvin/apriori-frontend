import createDataContext from './CreateDataContext'
import {API} from '../api/AprioriiApi'

const productReducer = (state, action) => {
    switch(action.type){
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_PRODUCT':
            return{
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state
    }
}

const getListProduct = dispatch => async () => {
    dispatch({type: 'LOADING'})
    try{
        let response =  await fetch(`${API}/api/product`);
        let json = await response.json();
        dispatch({type: 'GET_PRODUCT', payload: json.data})

    }catch(error){
        // console.log(error)
    }
}

export const {Provider, Context} = createDataContext(
    productReducer,
    {getListProduct},
    {loading: false, data: []}
)