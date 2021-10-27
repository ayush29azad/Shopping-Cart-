import React from 'react';
import CartItem from './CartItem'
import Cart from './Cart'
import Navbar from './Navbar'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                id :1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                id :2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                id :3
            }
        ]
    }
}
handleIncreaseQuantity=(product)=>{
const { products } = this.state;

const index = products.indexOf(product);
products[index].qty+=1;
this.setState({ 
    products :products
})

}
handleDecreaseQuantity=(product)=>{
const { products } = this.state;

const index = products.indexOf(product);
products[index].qty-=1;
this.setState({ 
    products :products
})

}
handleDeleteProduct=(id)=>{
const { products } = this.state;
const items = products.filter((item)=>item.id!==id); // array procts whose id is not eqal to id that is passed
this.setState({products: items});
}


getCartCount=()=>{
  const {products} = this.state;
  let count =0;

products.forEach((i)=>{
 count+=i.qty; 
})

  return count;
}

getCartTotal=()=>{
  const {products} = this.state;
  let cartTotal =0;
  products.map((i)=>{
  cartTotal +=i.qty * i.price


  })
  return cartTotal;
}


render(){
  const {products} = this.state;
  return (
    <div className="App">
      <header className="App-header">
      <Navbar count ={this.getCartCount()}/>
        <h1>CART</h1>
        <Cart 
            products ={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
   
         />
      </header>
      <div style ={{fontSize:20, padding:10}}>TOTAL:{this.getCartTotal()}</div>
    </div>
  );
}

}

export default App;
