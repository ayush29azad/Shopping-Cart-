import React from 'react';

const CartItem = (props) => {
    /*  increaseQuantity=()=>{
        //console.log(this.state);
       // this.setState({qty:this.state.qty+1})
       this.setState((prevState)=>{
       return {qty:prevState.qty+1}
   //    },()=>{
  //console.log('this.state',this.state);
       });
      }
  
      decreaseQuantity=()=>{
          //console.log(this.state);
         // this.setState({qty:this.state.qty+1})
         const {qty} = this.state;
         if(qty==0)
         {
             return ;
         }
         this.setState((prevState)=>{
         return {qty:prevState.qty-1}
         })
        }
  */

    const { price, title, qty } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src ={product.img} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>₹{price}</div>
                <div style={{ color: '#777' }}>  {title} </div>
                <div style={{ color: '#777' }}>Qty:{qty}</div>
                <div className="cart-item-actions">
                    <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/983/983952.png" onClick={() => onIncreaseQuantity(product)} ></img>
                    <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1665/1665765.png" onClick={() => onDecreaseQuantity(product)} ></img>
                    <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/216/216658.png" onClick={() => onDeleteProduct(product.id)} ></img>
                </div>
            </div>

        </div>
    )
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}
export default CartItem;