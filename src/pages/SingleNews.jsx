import { Link } from 'react-router-dom'
import { Breadcrumb } from '../component'

const SingleNews = () => {
   return (
      <>
         <Breadcrumb pageName='صفحه مقاله' title='جزئیـــات را مطالعه کنید' />
         {/* <!-- single article section --> */}
         <div className="mt-150 mb-150">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="single-article-section">
                        <div className="single-article-text">
                           <div className="single-artcile-bg"></div>
                           <p className="blog-meta">
                              <span className="author"><i className="fas fa-user"></i> مدیر</span>
                              <span className="date"><i className="fas fa-calendar"></i> 27 اردیبهشت ، 1400</span>
                           </p>
                           <h2>لورم ایپسوم متن ساختگی</h2>
                           <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                           <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                           <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                           <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                        </div>

                        <div className="comments-list-wrap">
                           <h3 className="comment-count-title">نظرات 3</h3>
                           <div className="comment-list">
                              <div className="single-comment-body">
                                 <div className="comment-user-avater">
                                    <img src="assets/img/avaters/avatar1.png" alt="" />
                                 </div>
                                 <div className="comment-text-body">
                                    <h4>شخص شماره 1 <span className="comment-date">شهریور ، 07 1401</span> <a href="#">پاسخ</a></h4>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                 </div>
                                 <div className="single-comment-body child">
                                    <div className="comment-user-avater">
                                       <img src="assets/img/avaters/avatar3.png" alt="" />
                                    </div>
                                    <div className="comment-text-body">
                                       <h4>شخص شماره 2 <span className="comment-date">مرداد ، 27 1399</span> <a href="#">پاسخ</a></h4>
                                       <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="single-comment-body">
                                 <div className="comment-user-avater">
                                    <img src="assets/img/avaters/avatar2.png" alt="" />
                                 </div>
                                 <div className="comment-text-body">
                                    <h4>شخص شماره 3 <span className="comment-date">آذر ، 30 1398</span> <a href="#">پاسخ</a></h4>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="comment-template">
                           <h4>نظر شما</h4>
                           <p>نظر خود را با ما در میان بگذارید.</p>

                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="sidebar-section">
                        <div className="recent-posts">
                           <h4>جدیدترین مقالات</h4>
                           <ul>
                              <li><Link to="/single-news">متن آزمایشی عنوان مقاله شماره 1</Link></li>
                              <li><Link to="/single-news">متن آزمایشی عنوان مقاله شماره 2</Link></li>
                              <li><Link to="/single-news">متن آزمایشی عنوان مقاله شماره 3</Link></li>
                              <li><Link to="/single-news">متن آزمایشی عنوان مقاله شماره 4</Link></li>
                              <li><Link to="/single-news">متن آزمایشی عنوان مقاله شماره 5</Link></li>
                           </ul>
                        </div>
                        <div className="archive-posts">
                           <h4>آرشیو مقالات</h4>
                           <ul>
                              <li><Link to="/single-news">تیر 1399 (3)</Link></li>
                              <li><Link to="/single-news">مرداد 1399 (5)</Link></li>
                              <li><Link to="/single-news">شهریور 1399 (4)</Link></li>
                              <li><Link to="/single-news">آبان 1399 (4)</Link></li>
                              <li><Link to="/single-news">بهمن 1399 (3)</Link></li>
                           </ul>
                        </div>
                        <div className="tag-section">
                           <h4>تگ ها</h4>
                           <ul>
                              <li><Link to="single-news">سیب</Link></li>
                              <li><Link to="/single-news">توت فرنگی</Link></li>
                              <li><Link to="/single-news">انگور</Link></li>
                              <li><Link to="/single-news">پرتقال</Link></li>
                              <li><Link to="/single-news">لیمو</Link></li>
                              <li><Link to="/single-news">موز</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end single article section --> */}
      </>
   )
}

export default SingleNews