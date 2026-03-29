import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Tab from './components/Tab'
import Cart from './components/Cart'

const getProducts = async() => {
  const res = await fetch('/products.json');
  return res.json();
}

function App() {
  
  const [models, setModels] = useState("models");
  const [cart, setCart] = useState([]);

  const productPromise = getProducts();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Tab setModels={setModels} cart={cart}></Tab>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        {models === "models" && (
          <Products productPromise={productPromise} cart={cart} setCart={setCart}></Products>
        )}
      </Suspense>
      {models === "cart" && <Cart cart={cart} setCart={setCart}></Cart>}

      <Footer></Footer>
    </>
  );
}

export default App
