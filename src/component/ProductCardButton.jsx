import { useRef, useState } from 'react';
import Input from './Input';
import Modal from './Modal';

const ProductCardButton = (props) => {
   const amountInputRef = useRef();
   const [modal, setModal] = useState();

   const submitHandler = (event) => {
      event.preventDefault();

      setModal({
         message: 'کالای مورد نظر شما با موفقیت به سبد خرید اضافه شد.'
      });

      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;

      props.onAddToCart(enteredAmountNumber);
   };

   const errorHandler = () => {
      setModal(null);
   }
   setTimeout(errorHandler, 6000)

   return (
      <>
         {modal && <Modal
            message={modal.message}
            onConfirm={errorHandler}
         />}
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
      </>
   );
};

export default ProductCardButton;