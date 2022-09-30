import { Breadcrumb } from '../component'
import Iframe from 'react-iframe'

const Contact = () => {
   return (
      <>
         <Breadcrumb pageName='تماس با ما' title='پشتیبانـــی 24 ساعته 7 روز هفته' />

         {/* <!-- contact form --> */}
         <div class="contact-from-section mt-150 mb-150">
            <div class="container">
               <div class="row">
                  <div class="col-lg-8 mb-5 mb-lg-0">
                     <div class="form-title">
                        <h2>با ما در ارتباط باشید...</h2>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                     </div>
                     <div id="form_status"></div>
                     <div class="contact-form">
                        <form>
                           <p>
                              <input type="text" placeholder="نام" name="name" id="name" />
                              <input type="email" placeholder="ایمیل" name="email" id="email" />
                           </p>
                           <p>
                              <input type="tel" placeholder="تلفن" name="phone" id="phone" />
                              <input type="text" placeholder="موضوع" name="subject" id="subject" />
                           </p>
                           <p><textarea name="message" id="message" cols="30" rows="10" placeholder="پیام..."></textarea></p>
                           <input type="hidden" name="token" value="FsWga4&@f6aw" />
                           <p><input type="submit" value="ارسال" /></p>
                        </form>
                     </div>
                  </div>
                  <div class="col-lg-4">
                     <div class="contact-form-wrap">
                        <div class="contact-form-box">
                           <h4><i class="fas fa-map"></i>آدرس فروشگاه</h4>
                           <p>خیابان انقلاب - پلاک xxx <br />تهران<br />ایران</p>
                        </div>
                        <div class="contact-form-box">
                           <h4><i class="far fa-clock"></i>ساعات کاری</h4>
                           <p>شنبه تا چهارشنبه: 8:00 الی 17:00 </p>
                        </div>
                        <div class="contact-form-box">
                           <h4><i class="fas fa-address-book"></i> تماس با ما</h4>
                           <p>تلفن: 3333 222 111 00+<br /> ایمیل: support@fruitkha.com</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end contact form --> */}


         {/* <!-- find our location --> */}
         <div className="find-location blue-bg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 text-center">
                     <p> <i className="fas fa-map-marker-alt"></i> مکان ما را در نقشه پیدا کنید!</p>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end find our location --> */}

         {/* <!-- google map section --> */}
         <div class="embed-responsive embed-responsive-21by9">
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26432.42324808999!2d-118.34398767954286!3d34.09378509738966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1576846473265!5m2!1sen!2sbd"
               width="1518px"
               height="620px"
               className="embed-responsive-item"
            />
         </div>
         {/* <!-- end google map section --> */}
      </>
   )
}

export default Contact