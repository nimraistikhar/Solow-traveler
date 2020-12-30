import React from 'react'
import { GlobalStyles } from './globalstyles';
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero';
import Product from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Product heading='Choose your favorite' data={productData} />
      <Feature />
      <Product heading='Choose your favorite' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
