import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';


function App() {
  return (
    <BrowserRouter>
      <Link to="/">HomePage</Link>
 {/*      <Link to="/product_details">GloveDetails</Link> */}
      <Link to="/checkout">ShoppingCart</Link>


      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/checkout" element={<Checkout/>}/>

        <Route path="/product_details" element={<ProductDetail/>}>
          <Route path=":id" element={<ProductDetail/>} />
        </Route>

        <Route path="*" element={<p>404NotFound</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
