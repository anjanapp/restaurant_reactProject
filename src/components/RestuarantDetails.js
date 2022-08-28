import React from 'react'

import { useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import { Row,Col,ListGroup,Image, Card } from 'react-bootstrap'
import Reviews from './Reviews'
import { useSelector } from 'react-redux'

function RestuarantDetails() {
  const [data, setData] = useState([])
  const params = useParams()


  async function fetchData() {  //async:to make a function asynchronous
    await fetch('/restaurants.json')  //await:to wait still getting response,fetch:pick data from restaurant.json API
      .then((data) => data.json())  // data is any name given, when fetched so many additional data will be there filter the datas that is fetched to json
      .then((res) => setData(res.restaurants))  //restaurants is from restaurant.json declared,the rsponse got is assigned to setRestaurants to modify
  }
  useEffect(() => {
    fetchData()  //calling function
  }, [])
  // console.log("my data is",restaurants);

  const restaurantData = data.find((item) => item.id == params.id) //checking id and url id same or not
  // console.log("my detail is", details);

  //redux
  // const restaurantData = useSelector(state=>state.restaurantReducer)

  // const { restaurants } = restaurantData

  // const details = restaurants.find((item)=>item.id==params.id)

  return (
    <>
    <Link className='btn btn-outline-dark my-2 rounded btn-sm' to="/">Back</Link>
    {
      
      restaurantData ? (
        <Row className="my-3">
          <Col md={3}>
            <Image className="img" src={restaurantData.photograph} alt={restaurantData.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup.Item>
              <h2>{restaurantData.name}</h2>
              <p>{restaurantData.neighborhood}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Cuisine Type:{restaurantData.cuisine_type}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Address{restaurantData.address}</p>
            </ListGroup.Item>
          </Col>
          <Col md={4}>
          <ListGroup.Item>
            <h4>Operating hours:</h4>
            <p>Monday:{restaurantData.operating_hours.Monday}</p>
            <p>Tuesday:{restaurantData.operating_hours.Tuesday}</p>
            <p>Wednesday:{restaurantData.operating_hours.Wednesday}</p>
            <p>Thursday:{restaurantData.operating_hours.Thursday}</p>
            <p>Friday:{restaurantData.operating_hours.Friday}</p>
            <p>Saturday:{restaurantData.operating_hours.Saturday}</p>


          </ListGroup.Item>

          </Col>
          <Row>
            <Card className='my-3 mx-3 p-3 rounded card'>
              <Reviews data={restaurantData.reviews} />
            </Card>
          </Row>
        </Row>
      ): 'null'

    }</>
  )
}

export default RestuarantDetails