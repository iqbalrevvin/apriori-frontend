import React from 'react';
import Router from './Router';
import {Provider as ProductProvider} from './services/context/ProductContext'
import {Provider as CartProvider} from './services/context/CartContext'

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Router/>
      </CartProvider> 
    </ProductProvider>
    
  );
}

export default App;
