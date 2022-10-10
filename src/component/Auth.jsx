import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './Auth.module.css';

const Backdrop = (props) => {
   return <div className={styles.backdrop} onClick={props.onClose} />
}

const Auth = (props) => {
   return (
      <form className={styles.modal}>
         <button onClick={props.onClose} className={styles.close}>x</button>

         <label className={styles.text} for="username">نام کاربری:</label><br />
         <input className={styles.inputStyle} type="text" id="username" name="username" placeholder="نام کاربری" /><br />

         <label className={styles.text} for="lastname">رمز ورود:</label><br />
         <input className={styles.inputStyle} type="text" id="lastname" name="lastname" placeholder="رمز ورود" /><br /><br />

         <input className={styles.btn} type="submit" value="ورود" />
      </form>
   );
};

const AuthModal = (props) => {
   return (
      <Fragment>
         {ReactDOM.createPortal(
            <Backdrop onClose={props.onClose} />,
            document.getElementById('backdrop-root')
         )}

         {ReactDOM.createPortal(
            <Auth
               email={props.email}
               username={props.title}
               password={props.message}
               onClose={props.onClose}
            />,
            document.getElementById('auth')
         )}
      </Fragment>
   );
};

export default AuthModal;