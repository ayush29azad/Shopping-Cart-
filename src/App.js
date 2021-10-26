import React from 'react';
import CartItem from './CartItem'
import Cart from './Cart'
import Navbar from './Navbar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <h1>CART</h1>

        <Cart/>
      </header>
    </div>
  );
}

export default App;
