import React from 'react';
import Router from './Router';
import {Provider as AuthProvider} from './services/context/AuthContext'
import {Provider as ProductProvider} from './services/context/ProductContext'
import {Provider as CartProvider} from './services/context/CartContext'
import {Provider as TransactionProvider} from './services/context/TransactionContext'

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
        <TransactionProvider>
          <Router/>
        </TransactionProvider>
        </CartProvider> 
      </ProductProvider>
    </AuthProvider>
    
  );
}

export default App;
