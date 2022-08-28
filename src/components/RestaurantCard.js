import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function RestaurantCard({item}) {   //destructure
  return (

    //string interpolation
    <Link to={`/details/${item.id}`}>  
        <Card className='my-3 p-3 rounded cards'>
      <Card.Img variant="top" className='p-3' src={item.photograph} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
            <p>{item.neighborhood}</p>
        </Card.Text>
        <p>Cuisine:{item.cuisine_type}</p>
      </Card.Body>
    </Card>
    </Link>
    
  )
}

export default RestaurantCard