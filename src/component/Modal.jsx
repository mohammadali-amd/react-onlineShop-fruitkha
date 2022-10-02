import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const ModalOverlay = (props) => {
   return (
      <div className={styles.modal}>
         <button onClick={props.onConfirm} className={styles.close}>x</button>
         <h5 className={styles.text}>{props.message}</h5>
      </div>
   );
};

const Modal = (props) => {
   return (
      <Fragment>
         {ReactDOM.createPortal(
            <ModalOverlay
               title={props.title}
               message={props.message}
               onConfirm={props.onConfirm}
            />,
            document.getElementById('backdrop-overlay')
         )}
      </Fragment>
   );
};

export default Modal;