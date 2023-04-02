import React, { useContext } from 'react'
import { CartContext } from '../context/Context'
import CartItems from  './CartItems'
import Filter from './Filter'

export default function Home() {
    const {state:{products},
          productState:{byStock, byFastDelivery, sort, byRating, searchQuery }          
  } = useContext(CartContext)
    const tranformProducts = ()=>{
      let sortedProducts = products;
      let outOfStock = products
      if(sort){
        sortedProducts = sortedProducts.sort((a,b)=>
          sort === 'lowToHigh' ? a.price - b.price : b.price-a.price
        )
       
      } 
      if(!byStock){
        sortedProducts = sortedProducts.filter((product)=> product.inStock)
      }
      if(byFastDelivery){
        sortedProducts = sortedProducts.filter((product)=> product.fastDelivery)

      }
      if(byRating){
        sortedProducts = sortedProducts.filter((product)=> product.ratings >= byRating)

      }
      if(searchQuery){
        sortedProducts = sortedProducts.filter((product)=>
           product.name.toLowerCase().includes(searchQuery))

      }
      return sortedProducts

     
    }
  return (
    <div className='home'>
        <Filter/>
        <div className='productContainer'>
        {tranformProducts().map((item)=>{
            return <CartItems key={item.id} data={item} />
        })}
        </div>
        
    </div>
  )
}
