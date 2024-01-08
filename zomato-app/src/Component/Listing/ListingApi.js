import React, { Component } from 'react';
import axios from 'axios'
import {Display} from './DisplayList'
import Cost from '../Filter/CostFilter'
import Cuisine from '../Filter/CuisineFilter'
import Header from '../../Header'
import './Listing.css';



const murl="http://localhost:8900/restaurant?mealId"

class ListingApi extends Component {

    constructor(){
        super();
        this.state={
            mealData:""
        }
    }

    setD(data){
        console.log("data bank",data)
        this.setState({mealData:data})
    }
    
    render() {
       
        return (
            <>
               <Header/>
               <div>
               <div className="sec-2">
            <div className="sec-sub-2">
               <Cuisine mealD={this.props.match.params.mealId}  resPerCuisine={(data)=>{
                this.setD(data);
               }}/>
              
              <Cost mealD={this.props.match.params.mealId}  restPerCost={(data)=>{
                this.setD(data);
               }}/>


              </div>
              
              <Display displayData={this.state.mealData}/>
              </div>
              </div>
              
             


              
              

            
            </>
            
        );
    }

componentDidMount=()=>{
    const mealId=this.props.match.params.mealId
    console.log("me",mealId)
    sessionStorage.setItem("mealId",mealId)

    axios.get(`${murl}`,{method:"GET"})
    .then((res)=> this.setState({mealData:res.data})


)

}
}

export default ListingApi;