//implementing Redux
                                          //to apply m/w
import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { restaurantListReducer } from './reducers/restaurantReducers'

//there may be many reducers so to combine these reducers into single unit in  store combineReducers is used
//combineReducers are used to handle reducers in store.js
const reducers=combineReducers({    //object created
    
    //key:value
    restaurantReducer:restaurantListReducer  //reducer saves the state to store using this stmt


});

const initialState={};

const middleware=[thunk]   //syntax 

const store=createStore(reducers,initialState,applyMiddleware(...middleware));  //to create a store


export default store