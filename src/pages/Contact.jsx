import { Breadcrumb } from '../component'

const Contact = () => {
   return (
      <>
         <Breadcrumb pageName='Contact us' title='Get 24/7 Support' />
         {/* <!-- find our location --> */}
         <div className="find-location blue-bg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 text-center">
                     <p> <i className="fas fa-map-marker-alt"></i> Find Our Location</p>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end find our location --> */}


      </>
   )
}

export default Contact