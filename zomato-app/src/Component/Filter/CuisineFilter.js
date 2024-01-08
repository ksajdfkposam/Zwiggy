import React, { Component } from 'react';

import axios from 'axios';

const curl="http://localhost:8900/filter";



class CuisineFilter extends Component {

   filterCuisine=(event)=>{
    const mealId=this.props.mealD;
    console.log(mealId);
    let cuisineId = event.target.value;
    console.log(cuisineId);
    let CuisineUrl;
    if(CuisineUrl === "")
    {
      CuisineUrl=`${curl}/${mealId}`;
    }
    else{
      CuisineUrl=`${curl}/${mealId}?cuisineId=${cuisineId}`
    }
    
  axios.get(`${CuisineUrl}`,{method:'GET'})
  .then((res)=>this.props.resPerCuisine(res.data))
    
  }

    render() {
        return (
            <>
         <div>
              <p className="filler">Filter</p>
             
              
               
<div onChange={this.filterCuisine}>
  <div className="fill-1">Cuisine</div>
  <div className="type-1">
      <input className="type-2" type="checkbox" name="North Indian" id="1"  value=""/>
      <label value="1">All</label>
  </div>
  <div className="type-1">
      <input className="type-2" type="checkbox" name="North Indian" id="1"  value="1"/>
      <label value="1">North Indian</label>
  </div>
  <div className="type-1">
    <input type="checkbox" name="South Indian" value="2"/>
      <label value="2">South Indian</label>
  </div>
  <div className="type-1">
    <input type="checkbox" name="Chinese" value="3"/>
      <label value="3">Chinese</label>
  </div>
  <div className="type-1">
    <input type="checkbox" name="Fast Food" value="4"/>
      <label value="4">Fast Food</label>
  </div>
  <div className="type-1">
    <input type="checkbox" name="Street Food" value="5"/>
      <label value="5">Street Food</label>
  </div>
  </div>

 
              

            


          </div>
            </>
        );
    }
}

export default CuisineFilter;
