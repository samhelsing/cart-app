import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'
import { CartContext } from '../context/Context'


function Filter() {


    const {
        productDispatch,
        productState: { byStock, byFastDelivery, sort, byRating },
      }  = useContext(CartContext)
// console.log(byStock, byFastDelivery, sort, byRating );
  return (
    <div className='filters'>
        <span className='title'>filter products</span>
        <span>
            <Form.Check
                inline
                label= "Assending"
                name='group1'
                type='radio'
                id={`inline-1`}
                onChange={()=>productDispatch({
                    type: 'SORT_BY_PRICE',
                    payload: 'lowToHigh',
                })}
                checked={sort === 'lowToHigh' ? true : false}
            />
        </span>
        <span>
            <Form.Check
                inline
                label= "dessending"
                name='group1'
                type='radio'
                id={`inline-2`}
                onChange={()=>productDispatch({
                    type: 'SORT_BY_PRICE',
                    payload: 'highToLow',
                })}
                checked={sort === 'highToLow' ? true : false}
            />
        </span>
        <span>
            <Form.Check
                inline
                label= "Include out of stock"
                name='group1'
                type='checkbox'
                id={`inline-3`}
                onChange={()=>productDispatch({
                    type: 'FILTER_BY_STOCK'
                })}
                checked={byStock}
            />
        </span>
        <span>
            <Form.Check
                inline
                label= "fast delivery only"
                name='group1'
                type='checkbox'
                id={`inline-4`}
                onChange={()=>productDispatch({
                    type: 'FILTER_BY_DELIVERY',
                   
                })}
                checked={byFastDelivery}
                
            />
        </span>
        <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating ratting={byRating} 
            handleCLick={(index)=>
                productDispatch({
                    type:"FILTER_BY_RATING",
                    payload: index + 1
                })
            }
        />
            <Button
                onClick={()=>productDispatch({
                type: 'CLEAR_FILTERS'
                })}
                >
                clear filters</Button>
        </span>
    </div>
  )
}

export default Filter