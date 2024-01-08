import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {DetailsDisplay} from './Detaildis'
import MenuDis from './Menudis'
import Header from '../../Header';
import Footer from '../../Footer';
const durl="http://localhost:8900"



class Details extends Component {

    constructor(props) {
        console.log(props,"props")
        super();
        this.state = {
          details: "",
          menuList: "",
          mealId:sessionStorage.getItem("mealId"),
          userItem:""
        };
    }

    addToCart = (data) => {
        console.log(data,"data in add")
        this.setState({ userItem: data });
        console.log(this.state.userItem,"addto");
    }

    proceed=()=> {
    console.log(this.state.userItem,"user")
 sessionStorage.setItem("menuItem",this.state.userItem)
 console.log(this.state.details)
    this.props.history.push(
       `/placeOrder/${this.state.details[0].restaurant_name}`
    )
   }



    render() {
      
        return (
            <>
         <Header/>
      
      <div className='container mt-5 mb-5'>
        <DetailsDisplay data={this.state.details}/>
<div className='d-flex justify-content-center mt-4'>
<Link to={`/listing/${this.state.mealId}`} className='btn btn-outline-dark'>BACK</Link>
<button className='btn btn-outline-success text-dark' onClick={this.proceed}>PROCEED</button>
</div>
      
      <div className='container  ms-5 me-5 mt-5'>

      <MenuDis MenuData={this.state.menuList}   finalOrder={(data) => {
                  this.addToCart(data);
                }}/>
      </div>
      </div>
      <Footer/>
 
            </>
        );
    }

 componentDidMount=async ()=>{
    const resId=this.props.location.search.split("=");
    console.log(resId[1]);
   let res=await axios.get(`${durl}/details/${resId[1]}`,{method:"GET"})
   let menu=await axios.get(`${durl}/me/${resId[1]}`,{method:"GET"})

   console.log(menu.data,"menu")
   this.setState({menuList:menu.data})
   console.log(res.data[0],'RES');
   this.setState({details:res.data})

}


}

export default Details;