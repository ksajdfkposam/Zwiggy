import React, { Component } from 'react';
import './Quick.css'
import {QuickD} from './QuickDisplay'

const meal="http://localhost:8900/quick"
class Quick extends Component {
    constructor(){
        super();
        this.state={
            mealt:"",
        }
    }


   
    render() {


        return (
            <div className="container-fluid  mt-5">
 <div className="container pad-1">
     <div className="row">
         <div className="col-3 "> 
              <p className=" fw-bold h2 quick">Quick Searches</p>
              <p className="quick-1 h6">Discover restaurants by type of meal</p>
         </div>
     </div>
 </div>


 <div className="container mt-4 pad-1 pb-5 ">
     <div className="row">
         <div className="col-12 d-flex flex-wrap  gap-3 ">
            <QuickD mealData={this.state.mealt}/>
         
           
        

    

 




         </div>
     </div>
 </div>
</div>
        );
    }

    componentDidMount(){
        fetch(`${meal}`,{ method:"GET"  })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
        this.setState({mealt:data});
        }

       
         )
        

    }
}

export default Quick;