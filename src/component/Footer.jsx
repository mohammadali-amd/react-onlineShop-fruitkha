import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Footer = () => {
   return (
      <>
         {/* <!-- logo carousel --> */}
         <div className="logo-carousel-section">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="logo-carousel-inner" dir='ltr'>
                        <OwlCarousel className='owl-theme' loop margin={10} dots={false}>
                           <div className="single-logo-item">
                              <img src="assets/img/company-logos/1.png" alt="" />
                           </div>
                           <div className="single-logo-item">
                              <img src="assets/img/company-logos/2.png" alt="" />
                           </div>
                           <div className="single-logo-item">
                              <img src="assets/img/company-logos/3.png" alt="" />
                           </div>
                           <div className="single-logo-item">
                              <img src="assets/img/company-logos/4.png" alt="" />
                           </div>
                           <div className="single-logo-item">
                              <img src="assets/img/company-logos/5.png" alt="" />
                           </div>
                        </OwlCarousel>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end logo carousel --> */}

         {/* <!-- footer --> */}
         <footer className="footer-area">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-md-6">
                     <div className="footer-box about-widget">
                        <h2 className="widget-title">درباره ما</h2>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="footer-box get-in-touch">
                        <h2 className="widget-title">با ما در تماس باشید</h2>
                        <ul>
                           <li>ایران، تهران، خیابان انقلاب</li>
                           <li>support@fruitkha.com</li>
                           <li>3333 222 111 00+</li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="footer-box pages">
                        <h2 className="widget-title">صفحات کاربردی</h2>
                        <ul>
                           <li><Link to="/">صفحه اصلی</Link></li>
                           <li><Link to="/about">درباره ما</Link></li>
                           <li><Link to="/shop">فروشگاه</Link></li>
                           <li><Link to="/news">مقالات</Link></li>
                           <li><Link to="/contact">تماس با ما</Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="footer-box subscribe">
                        <h2 className="widget-title">ما را دنبال کنید...</h2>
                        <p>با عضویت در شبکه های اجتماعی ما از آخرین تخفیف ها و اطلاعیه های فروشگاه با خبر شوید.</p>
                        <form action="index.html">
                           <input type="email" placeholder="ایمیل" />
                           <button type="submit"><i className="fas fa-paper-plane"></i></button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
         {/* <!-- end footer --> */}

         {/* <!-- copyright --> */}
         <div className="copyright">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-12">
                     <p>&copy; تمام حقوق برای <Link to="/#">Fruitkha</Link> محفوظ است.</p>
                  </div>
                  <div className="col-lg-6 text-right col-md-12">
                     <div className="social-icons">
                        <ul>
                           <li><Link to="/#" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                           <li><Link to="/#" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                           <li><Link to="/#" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                           <li><Link to="/#" target="_blank"><i className="fab fa-linkedin"></i></Link></li>
                           <li><Link to="/#" target="_blank"><i className="fab fa-dribbble"></i></Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end copyright --> */}
      </>
   )
}

export default Footer