import { combineReducers } from "redux";
import {INC_VIEWS} from './action'; 
const INITIAL_STATE = {
  views: 0,
};


const stateManager = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INC_VIEWS : return {...state, views: ++action.payload} 
        default : return state; 
    }
}

export default combineReducers({
    stateManager
}); 
