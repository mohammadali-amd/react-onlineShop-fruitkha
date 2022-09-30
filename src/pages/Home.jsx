import { Link } from 'react-router-dom'
import { ProductCard, Testimonial, Article } from '../component'
import { Products, Articles } from '../store/data'

const Home = () => {
   return (
      <>
         {/* <!-- hero area --> */}
         <div className="hero-area hero-bg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-9 offset-lg-2 text-center">
                     <div className="hero-text" style={{ marginTop: '18.5rem', marginBottom: '18.5rem' }}>
                        <div className="hero-text-tablecell">
                           <p className="subtitle">تـــــازه و طبیعـــــی</p>
                           <h1>متن عنوان سایت</h1>
                           <div className="hero-btns">
                              <Link to="/shop" className="boxed-btn">فروشگاه</Link>
                              <Link to="/contact" className="bordered-btn">تماس با ما</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end hero area --> */}

         {/* <!-- features list section --> */}
         <div className="list-section pt-80 pb-80">
            <div className="container">

               <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                     <div className="list-box d-flex align-items-center">
                        <div className="list-icon">
                           <i className="fas fa-shipping-fast"></i>
                        </div>
                        <div className="content">
                           <h3>ارسال سریع کالا</h3>
                           <p>به سراسر ایران</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                     <div className="list-box d-flex align-items-center">
                        <div className="list-icon">
                           <i className="fas fa-phone-volume"></i>
                        </div>
                        <div className="content">
                           <h3>پشتیبانی 24 ساعته</h3>
                           <p>7 روز هفته</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="list-box d-flex justify-content-start align-items-center">
                        <div className="list-icon">
                           <i className="fas fa-sync"></i>
                        </div>
                        <div className="content">
                           <h3>ضمانت اصالت کالا</h3>
                           <p>3 روز ضمانت بازگشت</p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
         {/* <!-- end features list section --> */}

         {/* <!-- product section --> */}
         <div className="product-section mt-150 mb-150">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-center">
                     <div className="section-title">
                        <h3><span className="orange-text">محصولات </span>ما</h3>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                     </div>
                  </div>
               </div>

               <div className="row">
                  {Products.slice(0, 3).map((item) => (
                     <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                     />
                  ))}
               </div>
            </div>
         </div>
         {/* <!-- end product section --> */}

         {/* <!-- cart banner section --> */}
         <section className="cart-banner pt-100 pb-100">
            <div className="container">
               <div className="row clearfix">
                  {/* <!--Image Column--> */}
                  <div className="image-column col-lg-6">
                     <div className="image">
                        <div className="price-box">
                           <div className="inner-price">
                              <span className="price">
                                 <strong>30%</strong> <br /> <span style={{ fontFamily: 'Vazirmatn' }}>تخفیف</span>
                              </span>
                           </div>
                        </div>
                        <img src="assets/img/a.jpg" alt="" />
                     </div>
                  </div>
                  {/* <!--Content Column--> */}
                  <div className="content-column col-lg-6">
                     <h3><span className="orange-text">تخفیف</span> شگفت انگیز ماه</h3>
                     <h4>توت فرنگی هیکان</h4>
                     <div className="text"><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p></div>
                     {/* <!--Countdown Timer--> */}
                     <div className="time-counter"><div className="time-countdown clearfix" data-countdown="2020/2/01"><div className="counter-column"><div className="inner"><span className="count">00</span><p>روز</p></div></div> <div className="counter-column"><div className="inner"><span className="count">00</span><p>ساعت</p></div></div>  <div className="counter-column"><div className="inner"><span className="count">00</span><p>دقیقه</p></div></div>  <div className="counter-column"><div className="inner"><span className="count">00</span><p>ثانیه</p></div></div></div></div>
                     <Link to="/cart" className="cart-btn mt-3"><i className="fas fa-shopping-cart"></i> افزودن به سبد خرید</Link>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- end cart banner section --> */}

         {/* <!-- testimonail-section --> */}
         <Testimonial />
         {/* <!-- end testimonail-section --> */}

         {/* <!-- advertisement section --> */}
         <div className="abt-section mb-150">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-12">
                     <div className="abt-bg">
                        <a href="https://www.youtube.com/watch?v=DBLlFWYcIGQ" className="video-play-btn popup-youtube"><i className="fas fa-play"></i></a>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                     <div className="abt-text">
                        <p className="top-sub">از سال 1393</p>
                        <h2>لورم <span className="orange-text">ایپسوم</span></h2>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <Link to="/about" className="boxed-btn mt-4">بیشتر بدانید</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end advertisement section --> */}

         {/* <!-- shop banner --> */}
         <section className="shop-banner">
            <div className="container">
               <h3>فروش مهر ماه آغاز شد! <br /> با بیشترین <span className="orange-text">تخفیف ها...</span></h3>
               <div className="sale-percent"><span>بشتابید! <br /> با بیش از </span> 50% <span>تخفیف</span></div>
               <Link to="/shop" className="cart-btn btn-lg">همین حالا خرید کنید!</Link>
            </div>
         </section>
         {/* <!-- end shop banner --> */}

         {/* <!-- latest news --> */}
         <div className="latest-news pt-150 pb-150">
            <div className="container">

               <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-center">
                     <div className="section-title">
                        <h3><span className="orange-text">مقالات </span>ما</h3>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {Articles.slice(0, 3).map((item) => (
                     <Article
                        key={item.id}
                        title={item.title}
                        author={item.author}
                        date={item.date}
                        image={item.image}
                        caption={item.caption}
                     />
                  ))}
               </div>
               <div className="row">
                  <div className="col-lg-12 text-center">
                     <a href="news.html" className="boxed-btn">مقالات بیشتر</a>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end latest news --> */}
      </>
   )
}

export default Home