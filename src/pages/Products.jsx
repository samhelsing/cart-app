// import React,{useContext} from 'react'

// import { ContextStore } from '../context/ShopContext'





// export default function Products(props) {
  
//    const {id, productName,price, productImage} = props.data

//    const {addCart, defaultCart} = useContext(ContextStore)

//    const cartItemAmount = defaultCart[id]

//   return (
//     <div>
//         <div className='product'>
//         <img src={productImage} />
//         <div className="description">
//             <p>
//                 <b>{productName}</b>
//             </p>
//             <p> ${price}</p>
//         </div>
//       <button className="addToCartBttn" onClick={()=> addCart(id)} >
//         Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
//       </button>

//         </div>
//     </div>
//   )
// }
