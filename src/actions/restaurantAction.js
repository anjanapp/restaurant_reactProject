import{
    RESTAURANT_LIST_REQUEST,
    RESTAURANT_LIST_SUCCESS,
    RESTAURANT_LIST_FAIL
} from '../constants/restaurantConstant'



import axios from 'axios'



export const listRestaurants=() =>async(dispatch)=>{
    try{     //destructure
        const {data} =await axios.get('/restaurants.json')  //instead of fetch axios is used to get data in restaurant.json api store in data variable
       
        dispatch({      
            type:RESTAURANT_LIST_SUCCESS,payload:data.restaurants   //if success payload contain restaurants data
        })
    }catch(error){

        dispatch({
            type:RESTAURANT_LIST_FAIL,payload:error   //if fail payload contain error
        })

    }
}