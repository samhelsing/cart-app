// import React, { useContext } from 'react'
// import { ContextStore } from '../context/ShopContext'

// import {PRODUCTS} from '../products'

// import CartItem from './CartItem'




// export const Cart = () => {
//   const { newCart, getTotalCartAmount, checkout } = useContext(ContextStore);
//   // const totalAmount = getTotalCartAmount();

//   // const navigate = useNavigate();

//   return (
//     <div className="cart">
//       <div>
//         <h1>Your Cart Items</h1>
//       </div>
//       <div className="cart">
//         {PRODUCTS.map((product) => {
//           if (newCart[product.id] !== 0) {
//             return <CartItem data={product} />;
//           }
//         })}
//       </div>

//       {totalAmount > 0 ? (
//         <div className="checkout">
//           <p> Subtotal: ${totalAmount} </p>
//           <button onClick={() => navigate("/")}> Continue Shopping </button>
//           <button
//             onClick={() => {
//               checkout();
//               navigate("/checkout");
//             }}
//           >
//             {" "}
//             Checkout{" "}
//           </button>
//         </div>
//       ) : (
//         <h1> Your Shopping Cart is Empty</h1>
//       )}
//     </div>
//   );
// };

