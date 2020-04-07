import createDataContext from './CreateDataContext'
import {API} from '../api/AprioriiApi'

const aprioriReducer = (state, action) => {
    switch(action.type){
        case 'LOADING':
            return{
                ...state,
                loading: true
            }
        case 'GET_APRIORI':
            return{
                ...state,
                loading: false,
                data: action.payload
            }
        case 'UNGET_APRIORI':
            return{
                ...state,
                loading: false,
                data: []
            }
        default:
            return state
    }
}

const getAprioriData = dispatch => async () => {
    dispatch({type: 'LOADING'})
    try{
        let response =  await fetch(`${API}/api/transaction`);
        let json = await response.json();
        let json_sort = json.sort((a, b) =>b.confidence - a.confidence);
        dispatch({type: 'GET_APRIORI', payload: json_sort})

    }catch(error){
        // console.log(error)
    }
}

const unGetAprioriData = dispatch => async () => {
    dispatch({type: 'UNGET_APRIORI'})
}

export const {Provider, Context} = createDataContext(
    aprioriReducer,
    {getAprioriData, unGetAprioriData},
    {loading: false, data: []}
)