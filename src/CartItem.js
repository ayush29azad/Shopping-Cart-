import React from 'react';


class CartItem extends React.Component 
{
    
    constructor(){
        super();
        this.state={
            price:999,
            title:'MobilePhone',
            qty:1,
            img:''
        }
    }
    increaseQuantity=()=>{
      
    }
    
render(){
    const {price,title,qty}= this.state;
return (
    <div className ="cart-item">
    <div className="left-block">
   <img style ={styles.image}  />
    </div>
    <div className="right-block">
        <div style ={{fontSize:25}}>{title}</div>
        <div style ={{color:'#777'}}> ₹ {price} </div>
        <div style  ={{color:'#777'}}>Qty:{qty}</div>
       <div className="cart-item-actions">
        <img alt ="increase" className ="action-icons" src ="https://cdn-icons-png.flaticon.com/512/983/983952.png" onClick={this.increaseQuantity}></img>
        <img alt ="decrease" className ="action-icons" src ="https://cdn-icons.flaticon.com/png/512/3357/premium/3357585.png?token=exp=1635059023~hmac=63ca3ba3cab2e55506584eec0b378d37"></img>
        <img alt ="delete" className ="action-icons" src ="https://cdn-icons-png.flaticon.com/512/216/216658.png"></img>

       </div>
    </div>

    </div>
)
}




}
const styles ={
    image:{
      height:110,
      width :110,
      borderRadius:4  
    }
}
export default CartItem;