import { useContext } from 'react';
import { Breadcrumb, ProductCard } from '../component'
import ProductCardButton from '../component/ProductCardButton';
import CartContext from '../store/cart-context';
import { Products } from '../store/data'

const Product = (product) => {
   const cartCtx = useContext(CartContext)

   const addToCartHandler = amount => {
      cartCtx.addItem({
         id: product.id,
         name: product.name,
         price: product.price,
         image: product.image,
         amount: amount
      });
   };

   return (
      <>
         <Breadcrumb pageName='صفحه محصول' title='جزئیـــات را مطالعه کنید' />
         {/* <!-- single product --> */}
         <div className="single-product mt-150 mb-150">
            <div className="container">
               <div className="row">
                  <div className="col-md-5">
                     <div className="single-product-img">
                        <img src="assets/img/products/product-img-5.jpg" alt="" />
                     </div>
                  </div>
                  <div className="col-md-7">
                     <div className="single-product-content">
                        <h3>سیب</h3>
                        <p className="single-product-pricing"><span>کیلویی</span> 45,000 تومان</p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                        <div className="single-product-form">
                           <form action="index.html">
                              {/* <input type="number" placeholder="0"> */}
                           </form>
                           <ProductCardButton id={product.id} onAddToCart={addToCartHandler} />
                           <p><strong>دسته بندی ها: </strong>میوه، طبیعی</p>
                        </div>
                        <h4>اشتراک گذاری:</h4>
                        <ul className="product-share">
                           <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                           <li><a href=""><i className="fab fa-twitter"></i></a></li>
                           <li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
                           <li><a href=""><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end single product --> */}

         {/* <!-- more products --> */}
         <div className="more-products mb-150">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-center">
                     <div className="section-title">
                        <h3><span className="orange-text">محصولات</span> مرتبط</h3>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {/* <!-- product section --> */}
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
                  {/* <!-- end product section --> */}
               </div>
            </div>
         </div>
         {/* <!-- end more products --> */}
      </>
   )
}

export default Product