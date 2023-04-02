import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { CartContext } from '../context/Context'



export default function CartItems({data}) {
    // const{id, productName, price, productIamge} = data
    const {state:{cart}, dispatch} = useContext(CartContext)
    console.log({cart})
  return (
    <div className='products'>
        <Card>
            <Card.Img variant='top' src={data.image} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
            <Card.Subtitle>
            <span>₹ {data.price}</span>
            {data.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating  ratting={data.ratings} />
            </Card.Subtitle>
            {cart.some((item) => item.id === data.id) ? 
              (<Button
                onClick={()=> {
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: data
                    });
                    }} variant='danger'>Remove from cart</Button>):
                    (<Button 
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: data,
                        })
                      }
                          disabled={!data.inStock} 
                          >
                        { !data.inStock ? 'Out of stock': 'Add to cart'}</Button>)  
            }
            
            
            </Card.Body>
        </Card>
    </div>
  )
}
