import { useContext } from 'react'
import { Breadcrumb } from '../component'
import CartContext from '../store/cart-context'
import CartItem from '../component/CartItem'
import { NavLink } from 'react-router-dom'

const Cart = () => {
   const cartCtx = useContext(CartContext)
   const totalAmount = cartCtx.totalAmount;

   const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
   };

   const cartItemAddHandler = (item) => {
      cartCtx.addItem(item);
   };

   return (
      <>
         <Breadcrumb pageName='سبد خرید' title='از اعتمـــاد شما سپاس گذاریم' />
         {/* <!-- cart --> */}
         <div className="cart-section mt-150 mb-150">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 col-md-12">
                     <div className="cart-table-wrap">
                        <table className="cart-table">
                           <thead className="cart-table-head">
                              <tr className="table-head-row">
                                 <th className="product-remove"></th>
                                 <th className="product-image">تصویر محصول</th>
                                 <th className="product-name">نام</th>
                                 <th className="product-price">قیمت</th>
                                 <th className="product-total">تعداد</th>
                              </tr>
                           </thead>
                           <tbody>
                              {cartCtx.items.map((item) => (
                                 <CartItem
                                    key={item.id}
                                    name={item.name}
                                    amount={item.amount}
                                    image={item.image}
                                    price={item.price}
                                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                                    onAdd={cartItemAddHandler.bind(null, item)}
                                 />
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>

                  <div className="col-lg-4">
                     <div className="total-section">
                        <table className="total-table">
                           <thead className="total-table-head">
                              <tr className="table-total-row">
                                 <th>مجموع</th>
                                 <th>قیمت</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr className="total-data">
                                 <td><strong>قیمت محصولات: </strong></td>
                                 <td>{totalAmount} تومان</td>
                              </tr>
                              <tr className="total-data">
                                 <td><strong>حمل و نقل: </strong></td>
                                 <td>50 هزار تومان</td>
                              </tr>
                              <tr className="total-data">
                                 <td><strong>مجموع: </strong></td>
                                 <td>{totalAmount + 50} تومان</td>
                              </tr>
                           </tbody>
                        </table>
                        <div className="cart-buttons">
                           <NavLink to="/shop" className="boxed-btn">ادامه خرید</NavLink>
                           <NavLink to="/checkout" className="boxed-btn black">پرداخت</NavLink>
                        </div>
                     </div>

                     <div className="coupon-section">
                        <h3>کد تخفیف</h3>
                        <div className="coupon-form-wrap">
                           <form onSubmit={e => e.preventDefault()}>
                              <p><input type="text" placeholder="کد تخفیف را وارد کنید..." /></p>
                              <p><input type="submit" value="تایید" /></p>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end cart --> */}
      </>
   )
}

export default Cart