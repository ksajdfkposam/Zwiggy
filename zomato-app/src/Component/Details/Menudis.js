import React, { Component } from 'react';
import './menu.css'
let cost=0;

class Menudis extends Component {
   order=[];
   addOrder=(key,val)=>{
    this.order.push(key);
    cost+=Number(val);
    //console.log(cost,"Cost")
    //console.log(this.order);
    this.props.finalOrder(this.order);
    //console.log(this.props.finalOrder,"final");
    sessionStorage.setItem("TotalCost",cost)
   
   }

  
   removeOrder=(key,val)=>{
    if (this.order.indexOf(key) > -1) {
        this.order.splice(this.order.indexOf(key), 1);
        if(cost>0){
          cost-=Number(val)
        }

      }
      
      console.log(cost,"Cost")
    console.log(this.order)
    sessionStorage.setItem("TotalCost",cost)
    this.props.finalOrder(this.order);
    console.log(this.props.finalOrder,"finalRemove");
    
   }
 

   showOrder = (orders) => {
    console.log(orders,"order")
    if (orders) {
      return orders.map((item, index) => {
        return <b key={index}>{item}, </b>;
      });
    }
     
    
  };
    




    details=({MenuData})=>{


if(MenuData){
return MenuData.map((item)=>{
    return (
<div className='border border-2 border-danger w-25  d-flex box' key={item._id}>
    <div className='position-relative d-flex'>
       
 <img className=" rounded float-start img_1 w-100  " src={item.menu_image}  alt={item.menu_name}/>
 <p className='position-absolute  translate-middle-y ms-3 btn btn-danger badge top-100 me-5 p-1' onClick={() => {
                    this.addOrder(item.menu_id,item.menu_price);}}> Add Item</p>
<p className='position-absolute top-100 start-50 translate-middle badge btn btn-danger  ms-5 p-1' onClick={()=>{this.removeOrder(item.menu_id,item.menu_price)}}>Remove Item</p>
 </div>

   

 <div className=' ms-2 mt-3 mb-3 w-50 '>
    <h6 className='fw-bolder'> {item.menu_name}</h6>
    <h6 className='fw-bold'>  ₹{item.menu_price}</h6>
   
 </div>
                       </div>
    )
})
}

    }
    render() {

        return (
            <div className='' >
                <div className='  d-flex  gap-4 justify-content-around flex-wrap box_1'>
                  {console.log("hey there")}
                {this.details(this.props)}
     
                   
                </div>
                <div>
               <div className='mt-5 bg-dark d-flex justify-content-center '>
                <h1 className='text-light fw-bold'>Item Cart</h1>
               </div>
               <div className='bg-danger d-flex ms-5 me-5'>
                <h3 className='text-light fw-bold'>Added Items:{this.showOrder(this.order)}</h3></div>
               
               </div>
            
            </div>
        );
    }
}

export default Menudis;