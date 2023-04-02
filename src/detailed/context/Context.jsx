import React, { createContext, useReducer } from 'react'
import {PRODUCTS} from '../../products'
import {CartReducer, productReducer} from './Reducers';
export const CartContext = createContext()


export default function Context({children}) {
  const rattingArray = [1, 2, 3, 4, 5]
  const stokeArray = [0, 3, 5, 6, 7]

  const products = PRODUCTS.map((product) => ({
    id :product.id,
    name: product.productName,
    price: product.price,
    image: product.productImage,
    inStock: stokeArray[ Math.floor(Math.random() * stokeArray.length) ] ,
    fastDelivery: Boolean(),
    ratings: rattingArray[ Math.floor(Math.random() * rattingArray.length) ]
  }));

//  console.log(products)
  const [ state, dispatch] = useReducer(CartReducer, {products: products, cart:[]})
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });


  return (
    <CartContext.Provider value={{state, dispatch,productState, productDispatch}}>{children}</CartContext.Provider>
  )
}
