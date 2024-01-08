import React, { Component } from 'react';
import axios from 'axios';

const co_url="http://localhost:8900/filter";
class CostFilter extends Component {
  filterCost=(event)=>{
    const mealId=this.props.mealD;
    console.log(mealId);
    let cost = event.target.value.split("-");
    console.log(cost);
    let CostUrl;
    let l = cost[0];
    let h = cost[1];
    //http://localhost:8900/filter/1?lcost=300&hcost=500
    if(CostUrl === "")
    {
      CostUrl=`${co_url}/${mealId}`
      console.log("dfdfdddfd")
    }
    else{
    
    CostUrl=`${co_url}/${mealId}?lcost=${l}&hcost=${h}`;
    console.log("llklklkl")
    }
    
    axios.get(CostUrl).then((res) => {
      this.props.restPerCost(res.data);
    });
    
  }

    render() {
    
        return (
            <>
             <div onChange={this.filterCost}>
    <p className="fill-1">Cost for two</p>
    <div className="type-1">
        <input type="radio" name="N" value=""/>
        <label >ALL</label>
    </div>
    <div className="type-1">
      <input type="radio" name="N" value="100-300"/>
        <label>100-300</label>
    </div>
    <div className="type-1">
      <input type="radio" name="N" value="301-600"/>
        <label>301 to 600</label>
    </div>
    <div className="type-1">
      <input type="radio" name="N" value="601-1001"/>
        <label>601-999</label>
    </div>
    <div className="type-1">
      <input type="radio" name="N" value="1002-2000"/>
        <label>1000-2000</label>
    </div>
    </div>

    <div>
      <div className="fill-2">Sort</div>
      <div className="type-1">
          <input type="radio" name="s" id="11"/>
          <label value="11">Price high to low</label>
      </div>
      <div className="type-1">
        <input type="radio" name="s" id="12"/>
          <label value="12">Price low to high</label>
      </div>
      </div>
            
            
            </>
           
        );
    }
}

export default CostFilter;