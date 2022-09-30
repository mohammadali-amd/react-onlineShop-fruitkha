import { useRef } from 'react';
import Input from './Input';

const ProductCardButton = (props) => {
   const amountInputRef = useRef();

   const submitHandler = (event) => {
      event.preventDefault();

      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;

      props.onAddToCart(enteredAmountNumber)
   };

   return (
      <form onSubmit={submitHandler}>
         <Input
            ref={amountInputRef}
            input={{
               id: 'amount_' + props.id,
               type: 'number',
               min: '1',
               max: '5',
               step: '1',
               defaultValue: '1',
            }}
         />
         <button
            id={props.id}
            className="cart-btn"
         >
            <i className="fas fa-shopping-cart"></i> افزودن به سبد خرید
         </button>
      </form>
   );
};

export default ProductCardButton;