
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';


const LOAD_MEATS = ()=> {
    return {
        type: "LOAD_MEATS"
    }
}

const CREATE_MEATS = ()=> {
    return {
        type: "CREATE_MEATS"
    }
}


const DELETE_MEATS = ()=> {
    return {
        type: "DELETE_MEATS"
    }
}


const reducer = (state=[], action) => {
    if (action.type === LOAD_MEATS) {
        return action.meats
    }
    if (action.type === CREATE_MEATS) {
        return [...state, action.meat]
      
    }
    
    if (action.type === DELETE_MEATS) {
        return state.filter(meat => meat.id !== action.meat.id);
    }
    
    return state;
}



const getMeats = ()=> {
  return async()=> {
    let response = await axios.get('/api/meats');
    store.dispatch({ type: LOAD_MEATS, meats: response.data});
  };
};

const addMeats = ()=> {
  return async(dispatch)=> {
    let response = await axios.post('/api/meats');
    store.dispatch({ type: CREATE_MEATS, meat: response.data});
  };
};

const removeMeat = (meat)=> {  
  return async(dispatch)=> {
     await axios.delete(`/api/meats/${meat.id}`);
    store.dispatch({ type: DELETE_MEATS, meat});
  };
};



const store = createStore(reducer, applyMiddleware(thunk));

 export {getMeats,addMeats, removeMeat}
export default store

