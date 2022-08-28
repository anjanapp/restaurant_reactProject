// import React, { useState } from 'react'
//import
import { useEffect } from 'react'
import {Row,Col} from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'

// import Restaurants from './Restaurants'
import { listRestaurants } from '../actions/restaurantAction'
import { useDispatch,useSelector } from 'react-redux'

function Home() { 
    const dispatch = useDispatch()

    const restaurantData = useSelector(state => state.restaurantReducer)

    const { restaurants } = restaurantData

    useEffect(()=>{
        dispatch(listRestaurants())
    },[]);

    console.log(restaurants);

    
        // async function fetchData(){  //async:to make a function asynchronous
            // await fetch('/restaurants.json')  //await:to wait still getting response,fetch:pick data from restaurant.json API
            // .then((data)=>data.json())  // data is any name given, when fetched so many additional data will be there filter the datas that is fetched to json
            // .then((res)=>setRestaurants(res.restaurants))  //restaurants is from restaurant.json declared,the rsponse got is assigned to setRestaurants to modify
        // }
        // useEffect(() =>{
        // fetchData()  //calling function
        // },[])
    // console.log("my data is",restaurants);
  return (
      <>
                  <Row>
                {
                restaurants.map(item=>(
                    <Col sm={12} md={8} lg={6} xl={3}>
                    <RestaurantCard item={item}/>
                    </Col>
                ))
                }
        
            </Row>


      </>
        

    
  );
                }


export default Home