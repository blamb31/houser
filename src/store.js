import {createStore} from 'redux'

const initialState = {
    properties: [
        // {
        //     "name": "shack",
        //     "address": "98 Dump St.",
        //     "city": "Fake Town",
        //     "state": "Utah",
        //     "zipCode": 84556
          
        //   }
    ]
}

export const GET_HOUSES = 'GET_HOUSES'
export const CREATE_HOUSE = 'CREATE_HOUSE'
export const DELETE_HOUSE = 'DELETE_HOUSE'

function reducer(state = initialState, action) {
    let {type, payload} = action;
    
    
    switch(type) {
        case GET_HOUSES:
            console.log(999999999, payload)
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