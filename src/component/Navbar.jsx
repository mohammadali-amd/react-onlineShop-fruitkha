import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../store/cart-context';

const Navbar = () => {
   const cartCtx = useContext(CartContext);

   const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount
   }, 0)

   return (
      <div className="top-header-area" id="sticker">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-sm-12 text-center">
                  <div className="main-menu-wrap">
                     {/* <!-- logo --> */}
                     <div className="site-logo">
                        <Link to="/">
                           <img src="assets/img/logo.png" alt="" />
                        </Link>
                     </div>
                     {/* <!-- logo --> */}

                     {/* <!-- menu start --> */}
                     <nav className="main-menu">
                        <ul>
                           <li className="current-list-item"><Link to="/">صفحه اصلی</Link>
                              <ul className="sub-menu">
                                 <li><Link to="/">صفحه اصلی ثابت</Link></li>
                                 <li><Link to="slider-home">صفحه اصلی با اسلایدر</Link></li>
                              </ul>
                           </li>
                           <li><Link to="about">درباره ما</Link></li>
                           <li><Link to="#">صفحه ها</Link>
                              <ul className="sub-menu">
                                 <li><Link to="/404_page">صفحه 404</Link></li>
                                 <li><Link to="/about">درباره ما</Link></li>
                                 <li><Link to="/cart">سبد خرید</Link></li>
                                 <li><Link to="/checkout">صفحه پرداخت</Link></li>
                                 <li><Link to="/contact">تماس با ما</Link></li>
                                 <li><Link to="/news">مقالات</Link></li>
                                 <li><Link to="/shop">فروشگاه</Link></li>
                              </ul>
                           </li>
                           <li><Link to="/news">مقالات</Link>
                              <ul className="sub-menu">
                                 <li><Link to="/news">مقالات</Link></li>
                                 <li><Link to="/single-news">صفحه مقاله</Link></li>
                              </ul>
                           </li>
                           <li><Link to="contact">تماس با ما</Link></li>
                           <li><Link to="shop">فروشگاه</Link>
                              <ul className="sub-menu">
                                 <li><Link to="shop">فروشگاه</Link></li>
                                 <li><Link to="product">صفحه محصول</Link></li>
                                 <li><Link to="cart">سبد خرید</Link></li>
                                 <li><Link to="checkout">صفحه پرداخت</Link></li>
                              </ul>
                           </li>
                           <li>
                              <div className="header-icons">
                                 <Link className="shopping-cart" to="cart"><sup>{numberOfCartItem > 0 && numberOfCartItem} </sup><i className="fas fa-shopping-cart"></i></Link>
                                 <Link className="mobile-hide search-bar-icon" to="#"><i className="fas fa-search"></i></Link>
                              </div>
                           </li>
                        </ul>
                     </nav>
                     <Link className="mobile-show search-bar-icon" to="#"><i className="fas fa-search"></i></Link>
                     <div className="mobile-menu"></div>
                     {/* <!-- menu end --> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Navbar