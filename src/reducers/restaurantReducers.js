import {
    RESTAURANT_LIST_SUCCESS,
    RESTAURANT_LIST_FAIL
    // RESTAURANT_LIST_REQUEST
} from '../constants/restaurantConstant'
                                                    //later payload is pushed in empty state
                                                   //empty state,action
export const restaurantListReducer = (state = { restaurants: [] },action)=>{
    switch(action.type){  //type from action.js is checked here
        case RESTAURANT_LIST_SUCCESS:
            return { restaurants:action.payload }  //if success, the reducers empty state(restaurant:[]) new state in payload will put in it
    
        case RESTAURANT_LIST_FAIL:
            return { restaurants:action.error }

        default:
            return state
    
        }


}