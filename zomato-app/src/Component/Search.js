import React, { Component } from 'react';
import './Search.css'
const lurl="http://localhost:8900/locations";
const rurl="http://localhost:8900/restaurant?stateId=";


export default class Search extends Component {
    constructor() {
        super();
        this.state = {
          location: "",
          restaurants: ""
        };
    }

    renderCity = (data) => {
      console.log("Dta",data)
        if (data) {
          return data.map((item) => {
            return (
              <option key={item._id} value={item.state_id}>
                {item.state}
              </option>
            );
          });
        }
      };

      renderRES = (data) => {
        if (data) {
          return data.map((item) => {
            return (
              <option  key={item._id}>
                {item.restaurant_name}
              </option>
            );
          });
        }
      };


    handleCity = (event) => {
        const stateId = (event.target.value);
       // console.log(stateId);
        fetch(`${rurl}${stateId}`, { method: "GET" })
          .then((res) => res.json())
          .then((data) => {
         //  console.log(data)
           this.setState({restaurants:data});
          });
        }



    render() {
      
        

          

        return (
            <div className="back-1">
        <div className="row col-12 d-flex justify-content-center  ">
        <span className=" col-1 p-1 m-3 d-flex justify-content-center ">
            <p className="e-1">e!</p>
        </span>
</div>

<div className="container-fluid ">
<div className="container d-flex justify-content-center ">
    <div className="row ">
        <div className="col-12">
        <p className="t-1">Find the best restaurants, cafés, and bars</p>
    </div>
    </div>
</div>
</div>

<div className="container-fluid mt-3">
            <div className="container  d-flex justify-content-center ">
                <div className="row">
                    <div className="col-12">
                    <div className=" gap-3 search-1 p-1"> 
                            <div  >
                           <input className="loc-1 p-3" list="Location" type="text"  placeholder="Please type a location" onChange={this.handleCity}/>
                           <datalist  id="Location" >
                           
                          {this.renderCity(this.state.location)}
                          
                           
                           </datalist>
                      </div>
                      <div>
                        
                        <input  className="loc-2 p-3" type="text" list="Restaurants" placeholder="Search for restaurants"/>
                        <datalist id="Restaurants">
                            {this.renderRES(this.state.restaurants)}
                            </datalist>
                      </div>
                    
                    </div>
                       
                    </div>
                </div>

            </div>
        </div>
</div>
        );
    
}

componentDidMount() {
    fetch(`${lurl}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ location: data });
       // console.log(data);
      });
  }
}

