import React, { useContext } from 'react'
import CartContext from '../store/cart-context';

const CartItem = (props) => {
   const cartCtx = useContext(CartContext);

   const ItemRemoveHandler = (id) => {
      cartCtx.clearItem(id);
   };

   return (
      <tr className="table-body-row">
         <td className="product-remove">
            <button
               onClick={ItemRemoveHandler.bind(null, props.id)}
               style={{ border: 'none', background: 'none', outline: 'none' }}
            >
               <i className="far fa-window-close"></i>
            </button>
         </td>
         <td className="product-image"><img src={props.image} alt={props.name} /></td>
         <td className="product-name">{props.name}</td>
         <td className="product-price">{props.price} تومان</td>
         <td className="product-quantity">
            <button onClick={props.onRemove} className={"boxed-btn"}>−</button>
            <span style={{ paddingInline: '0.5rem' }}>{props.amount}</span>
            <button onClick={props.onAdd} className={"boxed-btn"}>+</button>
         </td>
      </tr>
   )
}

export default CartItem