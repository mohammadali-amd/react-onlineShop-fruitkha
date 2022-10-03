import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../store/cart-context';
import ProductCardButton from './ProductCardButton';

const ProductCard = (product) => {
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
      <div className={`col-lg-4 col-md-6 text-center ${product.name.toLowerCase()}`}>
         <div className="single-product-item">
            <div className="product-image">
               <Link to="/product" ><img src={product.image} alt={product.name} /></Link>
            </div>
            <h3>{product.name}</h3>
            <p className="product-price"><span>کیلویی</span> {product.price} هزار تومان</p>
            <ProductCardButton id={product.id} onAddToCart={addToCartHandler} />
         </div>
      </div>
   );
};

export default ProductCard;