import React, { Component } from 'react'
import CartItem from './CartItem'

const Cart = (props) => {

    const { products } = props;

    return (
        <div className="cart">
            {
                products.map((i) => {
                    return <CartItem 
                        product={i} key={i.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                    />

                }) }
        </div>
    );
}

export default Cart
