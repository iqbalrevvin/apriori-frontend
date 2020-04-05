import createDataContext from './CreateDataContext'
import {API} from '../api/AprioriiApi'

const productReducer = (state, action) => {
    switch(action.type){
        case 'GET_PRODUCT':
            return{
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

const getListProduct = dispatch => async () => {
    try{
        let response =  await fetch(`${API}/product`);
        let json = await response.json();
        dispatch({type: 'GET_PRODUCT', payload: json.data})

    }catch(error){
        console.log(error)
    }
}

export const {Provider, Context} = createDataContext(
    productReducer,
    {getListProduct},
    {data: []}
)