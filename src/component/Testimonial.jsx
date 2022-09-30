import { Testimonials } from '../store/data';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
   return (
      <div className="testimonail-section mt-150 mb-150">
         <div className="container">
            <div className="row">
               <div className="col-lg-10 offset-lg-1 text-center">
                  <div className="testimonial-sliders" dir='ltr'>
                     <OwlCarousel className='owl-theme' loop margin={10} items={1}>
                        {Testimonials.map((item) => (
                           <div
                              key={item.id}
                              id={item.id}
                              className="single-testimonial-slider"
                              dir='rtl'
                           >
                              <div className="client-avater">
                                 <img src="assets/img/avaters/avatar1.png" alt="" />
                              </div>
                              <div className="client-meta">
                                 <h3>{item.title}<span>{item.caption}</span></h3>
                                 <p className="testimonial-body">
                                    {item.description}
                                 </p>
                                 <div className="last-icon">
                                    <i className="fas fa-quote-right"></i>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </OwlCarousel>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Testimonial