import { Link } from 'react-router-dom'
import { Breadcrumb } from '../component'

const Checkout = () => {
   return (
      <>
         <Breadcrumb pageName='صفحه پرداخت' title='بازم به مــا سر بزنید...' />
         {/* <!-- check out section --> */}
         <div className="checkout-section mt-150 mb-150">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="checkout-accordion-wrap">
                        <div className="accordion" id="accordionExample">
                           <div className="card single-accordion">
                              <div className="card-header" id="headingOne">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       اطلاعات مورد نیاز
                                    </button>
                                 </h5>
                              </div>

                              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                 <div className="card-body">
                                    <div className="billing-address-form">
                                       <form action="index.html">
                                          <p><input type="text" placeholder="نام و نام خانوادگی" /></p>
                                          <p><input type="email" placeholder="ایمیل" /></p>
                                          <p><input type="text" placeholder="آدرس" /></p>
                                          <p><input type="tel" placeholder="تلفن" /></p>
                                          <p><textarea name="bill" id="bill" cols="30" rows="10" placeholder=" اگر لازم میدانید اطلاعات مورد نیاز را وارد کنید..."></textarea></p>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="card single-accordion">
                              <div className="card-header" id="headingTwo">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       آدرس باربری
                                    </button>
                                 </h5>
                              </div>
                              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                 <div className="card-body">
                                    <div className="shipping-address-form">
                                       <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="card single-accordion">
                              <div className="card-header" id="headingThree">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       محصولات شما
                                    </button>
                                 </h5>
                              </div>
                              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                 <div className="card-body">
                                    <div className="card-details">
                                       <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>

                  <div className="col-lg-4">
                     <div className="order-details-wrap">
                        <table className="order-details">
                           <thead>
                              <tr>
                                 <th>سفارش شما</th>
                                 <th>قیمت</th>
                              </tr>
                           </thead>
                           <tbody className="order-details-body">
                              <tr>
                                 <td>توت فرنگی</td>
                                 <td>85,000 تومان</td>
                              </tr>
                              <tr>
                                 <td>انگور</td>
                                 <td>70,000 تومان</td>
                              </tr>
                              <tr>
                                 <td>لیمو</td>
                                 <td>35,000 تومان</td>
                              </tr>
                           </tbody>
                           <tbody className="checkout-details">
                              <tr>
                                 <td>مجموع محصولات</td>
                                 <td>190,000 تومان</td>
                              </tr>
                              <tr>
                                 <td>حمل و نقل</td>
                                 <td>50,000 تومان</td>
                              </tr>
                              <tr>
                                 <td>مجموع</td>
                                 <td>240,000 تومان</td>
                              </tr>
                           </tbody>
                        </table>
                        <Link to="#" className="boxed-btn">پرداخت نهایی</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end check out section --> */}
      </>
   )
}

export default Checkout