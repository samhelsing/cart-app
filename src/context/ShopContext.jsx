// import React, { createContext, useState } from 'react'
// import Cart from '../pages/cart'
// import {PRODUCTS} from '../products'
// export const ContextStore = createContext(null)

// const defaultCart = () => {
//   let cart = {};
//   for (let i = 1; i < PRODUCTS.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };


//   export const  ShopContext = (props)=> {

//   const[newCart, setNewCart]  = useState(defaultCart())
//   console.log(newCart)



//   const addCart = (id)=>{
//     setNewCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  
//   }


//   const removeCart = (id)=>{
//     setNewCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));

//   }
//   const contextValue = {defaultCart, addCart, removeCart}

//   return (
//     <ContextStore.Provider value={contextValue}>
//       {props.children}
//     </ContextStore.Provider>
   
//   )
// }

