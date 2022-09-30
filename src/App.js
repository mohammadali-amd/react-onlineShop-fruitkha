import { Routes, Route } from "react-router-dom";
import { Home, Home2, About, Cart, Checkout, Contact, News, SingleNews, Shop, Product, NotFound } from "./pages";
import { Navbar, Footer } from "./component";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider-home" element={<Home2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/404_page" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/single-news" element={<SingleNews />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;