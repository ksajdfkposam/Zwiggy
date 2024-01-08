import React, { Component } from 'react';
import axios from "axios"
import Footer from '../../Footer';

import Header from '../../Header';
const place="http://localhost:8900/placeOrder";
class placeOrder extends Component {
  constructor(props){
    console.log(props,"props____")
    super(props)
    this.state={
      
orderId: Number(Math.floor(Math.random() * 100000)),
      name: "",
      email: "",
      address : "",
      phone: "",
      cost: sessionStorage.getItem("TotalCost"),
      restName:this.props.match.params.res_name,
      menuItem:sessionStorage.getItem("menuItem")
      
  }
 
  }
 
 
   
  
   

  handleChange=(e)=>{
    //console.log(e)
   // const name_1=e.target.value;
   // console.log(name_1)
    //this.setState({name:name_1})
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.name,'jjj', e.target.value ,"hhh",this.state.name)
    
}

 checkout = () => {
 console.log(this.state,"State")
 
  fetch(place, {
    method: 'POST',
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state),
  })
    .then((this.props.history.push("/viewOrder")))
}



    render() {

        return (
            <>
           
                <Header/>
               
                <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3>Order for {this.props.match.params.res_name}</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-6 form-group">
                <label  className="control-label">Name</label>
                <input className="form-control" id="fname" value={this.state.name}
                  name="name" onChange={this.handleChange} />
              </div>
              <div className="col-md-6 form-group">
                <label  className="control-label">Email</label>
                <input className="form-control" id="email"
                  name="email" onChange={this.handleChange} />
              </div>
              <div className="col-md-6 form-group">
                <label  className="control-label">Phone</label>
                <input className="form-control" id="phone"
                  name="phone" onChange={this.handleChange} />
              </div>
              <div className="col-md-6 form-group">
                <label  className="control-label">Address</label>
                <input className="form-control" id="address"
                  name="address" onChange={this.handleChange} />
              </div>

            </div>
            <div className="row">
              <div className="col-md-12">
                <h2>Total Price is Rs.{this.state.cost} </h2>
              </div>
            </div>
            <button className='btn btn-success'  onClick={this.checkout}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer/>
            </>
        );
    }
}

export default placeOrder;