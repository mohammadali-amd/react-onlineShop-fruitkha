import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../store/cart-context';

const Navbar = () => {
   const cartCtx = useContext(CartContext);

   // Change nav color when scrolling 
   const [color, setColor] = useState(false);
   const changeColor = () => {
      if (window.scrollY >= 90) {
         setColor(true)
      } else {
         setColor(false)
      }
   };

   window.addEventListener('scroll', changeColor);

   const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount
   }, 0)

   return (
      <nav className={`fixed-top ${color ? 'navbar-scroll-bg' : ''}`}>
         <nav className="container align-items-center pt-2">
            <nav className="navbar navbar-expand-lg navbar-dark py-2">
               <div className="container-fluid">
                  {/* <!-- logo --> */}
                  <Link to="/">
                     <img src="assets/img/logo.png" alt="" style={{ width: '160px', paddingBottom: '1rem' }} />
                  </Link>
                  {/* <!-- logo --> */}
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                     data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                     aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarColor02">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                           <Link to="/" className="nav-link" id="navbarDropdownMenuLink" role="button"
                              data-bs-toggle="dropdown">
                              صفحه اصلی
                           </Link>
                           <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li><Link to="/" className="dropdown-item">صفحه اصلی استاتیک</Link></li>
                              <li><Link to="/slider-home" className="dropdown-item">صفحه اصلی با اسلایدر</Link></li>
                           </ul>
                        </li>
                        <li className="nav-item">
                           <Link to="/about" className="nav-link" aria-current="page">
                              درباره ما
                           </Link>
                        </li>
                        <li className="nav-item dropdown">
                           <Link to="/" className="nav-link" id="navbarDropdownMenuLink" role="button"
                              data-bs-toggle="dropdown">
                              صفحه ها
                           </Link>
                           <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li><Link className="dropdown-item" to="/404_page">صفحه 404</Link></li>
                              <li><Link className="dropdown-item" to="/about">درباره ما</Link></li>
                              <li><Link className="dropdown-item" to="/cart">سبد خرید</Link></li>
                              <li><Link className="dropdown-item" to="/checkout">صفحه پرداخت</Link></li>
                              <li><Link className="dropdown-item" to="/contact">تماس با ما</Link></li>
                              <li><Link className="dropdown-item" to="/news">مقالات</Link></li>
                              <li><Link className="dropdown-item" to="/shop">فروشگاه</Link></li>
                           </ul>
                        </li>
                        <li className="nav-item dropdown">
                           <Link to="/news" className="nav-link" id="navbarDropdownMenuLink" role="button"
                              data-bs-toggle="dropdown">
                              مقالات
                           </Link>
                           <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li><Link to="/news" className="dropdown-item">مقالات</Link></li>
                              <li><Link to="/single-news" className="dropdown-item">صفحه مقالات</Link></li>
                           </ul>
                        </li>
                        <li className="nav-item">
                           <Link to='/contact' className="nav-link" aria-current="page">
                              تماس با ما
                           </Link>
                        </li>
                        <li className="nav-item dropdown">
                           <Link to="/shop" className="nav-link" id="navbarDropdownMenuLink" role="button"
                              data-bs-toggle="dropdown">
                              فروشگاه
                           </Link>
                           <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li><Link to="/shop" className="dropdown-item">فروشگاه</Link></li>
                              <li><Link to="/product" className="dropdown-item">صفحه محصول</Link></li>
                              <li><Link to="/cart" className="dropdown-item">سبد خرید</Link></li>
                              <li><Link to="/checkout" className="dropdown-item">صفحه پرداخت</Link></li>
                           </ul>
                        </li>
                     </ul>

                     <div>
                        <div className="header-icons">
                           <Link className="shopping-cart" to="/cart"> <sup>{numberOfCartItem > 0 && numberOfCartItem} </sup><i className="fas fa-shopping-cart"></i></Link>
                           <Link className="mobile-hide search-bar-icon" to="#"><i className="fas fa-search"></i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </nav>
         </nav>
      </nav>
   )
}

export default Navbar