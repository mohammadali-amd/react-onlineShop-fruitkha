import { Link } from 'react-router-dom'
import { Breadcrumb } from '../component'

const NotFound = () => {
   return (
      <>
         <Breadcrumb pageName='404 - Not Found' title='Fresh adn Organic' />
         {/* <!-- error section --> */}
         <div className="full-height-section error-section" style={{ marginBlock: '6rem' }}>
            <div className="full-height-tablecell">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="error-text">
                           <i className="far fa-sad-cry"></i>
                           <h1>ارور 404!!!</h1>
                           <p>صفحه مورد نظر شما یافت نشد!</p>
                           <Link to="/" className="boxed-btn">بازگشت به صفحه اصلی</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end error section --> */}
      </>
   )
}

export default NotFound