import React, { Component } from 'react'


 const Navbar =(props)=> {
   
        return (
            <div  style={ {backgroundColor: "#68FEBA" , width:"100vw" ,height:"50px" ,padding:"8px"}}>
              <div  style={ { float:"right", marginRight:"30px" }}>
               <img src ="https://cdn-icons-png.flaticon.com/512/4290/4290854.png " style={ {height: "40px",width:"40" }}   alt ="cart-icon" />
               <span style={ {backgroundColor: "yellow" , borderRadius: "50px", color:'black' ,padding :"4px"}} >{props.count}</span> 
             </div>
            </div>
        )
}


export default Navbar
