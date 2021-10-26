import React, { Component } from 'react'
import CartItem from './CartItem'

class Cart extends Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id :1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id :2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
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




    render() {
        const { products } = this.state;

        return (
            <div className="cart">
                {
                 products.map((i) => {
                 return<CartItem product ={i} key ={i.id} 
                 onIncreaseQuantity={this.handleIncreaseQuantity}
                 onDecreaseQuantity={this.handleDecreaseQuantity}
                 onDeleteProduct={this.handleDeleteProduct}
                 />
                  
                })
               }
            </div>
        )
    }
}

export default Cart
