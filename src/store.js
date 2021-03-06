import {createStore} from 'redux'

const initialState = {
    properties: []
        
}

export const GET_HOUSES = 'GET_HOUSES'
export const CREATE_HOUSE = 'CREATE_HOUSE'
export const DELETE_HOUSE = 'DELETE_HOUSE'

function reducer(state = initialState, action) {
    let {type, payload} = action;
    
    
    switch(type) {
        case GET_HOUSES:
            return{ 
                ...state,
                properties:[...payload ]           
            }
        
        case CREATE_HOUSE:
            return {
                ...state,
                properties: [...payload]
            }
        case DELETE_HOUSE:
            return {
                ...state,
                properties: [...payload]
            }
        default:
            return {...state};
    }
}

export default createStore(reducer)