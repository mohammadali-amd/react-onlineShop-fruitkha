import { Link } from 'react-router-dom'
import { Breadcrumb, Testimonial } from '../component'

const About = () => {
   return (
      <>
         <Breadcrumb pageName='درباره ما' title='We sale fresh fruits' />
         {/* <!-- featured section --> */}
         <div className="feature-bg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-7">
                     <div className="featured-text">
                        <h2 className="pb-3">چرا باید <span className="orange-text">ما</span> را انتخاب کنید؟</h2>
                        <div className="row">
                           <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                              <div className="list-box d-flex">
                                 <div className="list-icon">
                                    <i className="fas fa-shipping-fast"></i>
                                 </div>
                                 <div className="content">
                                    <h3>ارسال سریع کالا</h3>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                              <div className="list-box d-flex">
                                 <div className="list-icon">
                                    <i className="fas fa-money-bill-alt"></i>
                                 </div>
                                 <div className="content">
                                    <h3>بهترین قیمت ها</h3>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                              <div className="list-box d-flex">
                                 <div className="list-icon">
                                    <i className="fas fa-briefcase"></i>
                                 </div>
                                 <div className="content">
                                    <h3>بسته های سفارشی</h3>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6">
                              <div className="list-box d-flex">
                                 <div className="list-icon">
                                    <i className="fas fa-sync-alt"></i>
                                 </div>
                                 <div className="content">
                                    <h3>ضمانت اصالت کالا</h3>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end featured section --> */}

         {/* <!-- shop banner --> */}
         <section className="shop-banner">
            <div className="container">
               <h3>فروش مهر ماه آغاز شد! <br /> با بیشترین <span className="orange-text">تخفیف ها...</span></h3>
               <div className="sale-percent"><span>بشتابید! <br /> با بیش از </span> 50% <span>تخفیف</span></div>
               <Link to="/shop" className="cart-btn btn-lg">همین حالا خرید کنید!</Link>
            </div>
         </section>
         {/* <!-- end shop banner --> */}

         {/* <!-- team section --> */}
         <div className="mt-150">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-center">
                     <div className="section-title">
                        <h3>تیم <span className="orange-text">ما</span></h3>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-4 col-md-6">
                     <div className="single-team-item">
                        <div className="team-bg team-bg-1"></div>
                        <h4>شخص شماره 1 <span>برنامه نویس</span></h4>
                        <ul className="social-link-team">
                           <li><Link href="#" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                           <li><Link href="#" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                           <li><Link href="#" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="single-team-item">
                        <div className="team-bg team-bg-2"></div>
                        <h4>شخص شماره 2 <span>طراح</span></h4>
                        <ul className="social-link-team">
                           <li><Link href="#" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                           <li><Link href="#" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                           <li><Link href="#" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                     <div className="single-team-item">
                        <div className="team-bg team-bg-3"></div>
                        <h4>شخص شماره 3 <span>مدیر محصول</span></h4>
                        <ul className="social-link-team">
                           <li><Link href="#" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                           <li><Link href="#" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                           <li><Link href="#" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end team section --> */}

         {/* <!-- testimonail-section --> */}
         <Testimonial />
         {/* <!-- end testimonail-section --> */}
      </>
   )
}

export default About