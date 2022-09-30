import { Link } from 'react-router-dom'
import { Breadcrumb, ProductCard } from '../component'
import { Products } from '../store/data'
const Shop = () => {
   return (
      <>
         <Breadcrumb pageName='فروشگاه' title='بهتریـــن کیفیت با نازلترین قیمت ها' />
         {/* <!-- products --> */}
         <div className="product-section mt-150 mb-150">
            <div className="container">

               <div className="row">
                  <div className="col-md-12">
                     <div className="product-filters">
                        <ul>
                           <li className="active" data-filter="*">همه</li>
                           <li data-filter=".strawberry">توت فرنگی</li>
                           <li data-filter=".berry">انگور</li>
                           <li data-filter=".lemon">لیمو</li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div className="row product-lists">
                  {Products.map((item) => (
                     <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                     />
                  ))}
               </div>

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
         {/* <!-- end products --> */}
      </>
   )
}

export default Shop