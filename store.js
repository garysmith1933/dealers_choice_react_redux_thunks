
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';


const LOAD_MEATS = ()=> {
    return {
        type: "LOAD_MEATS"
    }
}

// const CREATE_MEATS = ()=> {
//     return {
//         type: "LOAD_MEATS"
//     }
// }


// const DELETE_MEATS = ()=> {
//     return {
//         type: "DELETE_MEATS"
//     }
// }


const reducer = (state=[], action) => {
    if (action.type === LOAD_MEATS) {
        return action.meats
    }
    // if (action.type === CREATE_MEATS) {
    //     const state = [...state, action.meat]
    //     return state;
    // }
    
    // if (action.type === DELETE_MEATS) {
    //     const state = state.filter(meat => meat.id !== action.meat.id)
    //     return state;
    // }
    
    return state;
}



const getMeats = (dispatch)=> {
  return async()=> {
    let response = await axios.get('/api/meats');
    store.dispatch({ type: LOAD_MEATS, meats: response.data});
  };
};



const store = createStore(reducer, applyMiddleware(thunk));

 export {getMeats}
export default store

