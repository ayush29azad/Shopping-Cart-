import React from 'react';
import CartItem from './CartItem'
import Cart from './Cart'
import Navbar from './Navbar'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { orderBy } from '@firebase/firestore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [],
        loading:true
    }
    this.db = firebase.firestore();
}

componentDidMount (){
/*
  firebase
  .firestore()
  .collection('products')
   .get()
   .then((snapshot)=>{
     
  snapshot.docs.map((doc)=>{
  console.log(doc.data);

  })
  const products = snapshot.docs.map((doc)=>{
    const data = doc.data();
    data['id']= doc.id;
    return data;
  })
  this.setState({
    products: products,
    loading:false
  })

 })
 */


this.db
.collection('products')
//.where('price' ,  '>',9)
.orderBy('price','desc')
 .onSnapshot((snapshot)=>{
   console.log(snapshot);

snapshot.docs.map((doc)=>{
console.log(doc.data);

});

const products = snapshot.docs.map((doc)=>{
  const data = doc.data();
  data['id']= doc.id;
  return data;
})
this.setState({
  products: products,
  loading:false
})

})

}



handleIncreaseQuantity=(product)=>{
const { products } = this.state;

const index = products.indexOf(product);
//products[index].qty+=1;
//this.setState({ 
 //   products :products
//})

const docRef = this.db.collection('products').doc(products[index].id);
docRef
.update({ 
 
  qty:products[index].qty+1

})
.then (()=>{

  console.log('Updated Suceesfully');
})
.catch((error)=>{
console.log(error);
})

}

handleDecreaseQuantity=(product)=>{
  const { products } = this.state;

  const index = products.indexOf(product);
  //products[index].qty+=1;
  //this.setState({ 
   //   products :products
  //})
  
  const docRef = this.db.collection('products').doc(products[index].id);
  docRef
  .update({ 
   
    qty:products[index].qty-1
  
  })
  .then (()=>{
  
    console.log('Updated Suceesfully');
  })
  .catch((error)=>{
  console.log(error);
  })

}

handleDeleteProduct=(id)=>{
  const { products } = this.state;

  //const index = products.indexOf(product);
  //products[index].qty+=1;
  //this.setState({ 
   //   products :products
  //})
  
  const docRef = this.db.collection('products').doc(id);
  docRef
 .delete()
  .then (()=>{
  
    console.log('Deleted Suceesfully' , id);
  })
  .catch((error)=>{
  console.log(error);
  })
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
return '';

  })
  return cartTotal;
}

addProduct =()=>{
  this.db
  .collection('products') 
  .add({ 
    
  img : '',
  price : 900 ,
  qty :  3,
  title :'washing machine'

  })
  .then((docRef)=>{
console.log('Product has been added',docRef);
  })
  .catch((error)=>{
    console.log('Error ',error);
  })

}

render(){
  const {products,loading} = this.state;
  return (
    <div className="App">
      <header className="App-header">
      <Navbar count ={this.getCartCount()}/>
     {/* <button onClick ={this.addProduct} style ={{padding:20,fontSize:20}}>Add a product</button>*/}

        <Cart 
            products ={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
         />
         {loading  && <h1>Loading Products...</h1>}

      </header>
      <div style ={{fontSize:20, padding:10}}>TOTAL:{this.getCartTotal()}</div>
    </div>
  );
}

}

export default App;
