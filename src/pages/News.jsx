import { Link } from 'react-router-dom'
import { Article, Breadcrumb } from '../component'
import { Articles } from '../store/data'

const News = () => {
   return (
      <>
         <Breadcrumb pageName='تازه ترین مقالات' title='بروزتریـــــــن اطلاعـــــــات' />

         {/* <!-- latest news --> */}
         <div className="latest-news mt-150 mb-150">
            <div className="container">
               <div className="row">
                  {Articles.slice(0, 6).map((item) => (
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
                  <div className="container">
                     <div className="row">
                        <div className="col-lg-12 text-center">
                           <div className="pagination-wrap">
                              <ul>
                                 <li><Link to="#">بعدی</Link></li>
                                 <li><Link to="#">3</Link></li>
                                 <li><Link to="#" className="active">2</Link></li>
                                 <li><Link to="#">1</Link></li>
                                 <li><Link to="#">قبلی</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end latest news --> */}
      </>
   )
}

export default News