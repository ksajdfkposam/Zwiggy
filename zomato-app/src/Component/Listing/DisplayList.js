import {Link} from 'react-router-dom'
import './Listing.css'
import { useState } from 'react'
import Pagination from './pagination'



export const Display=(props)=>{
 const {displayData}=props
 console.log(displayData,"length",displayData.length);
 const perPage=2;
const [startIndex,setStart]=useState(0);


function handleChange(start){
setStart(start)
console.log(startIndex,startIndex+perPage)

}

console.log(startIndex,startIndex+perPage)

const newArr = displayData.slice(startIndex,startIndex+perPage);
 













  
   console.log("props",props)
   const listItem=(arr)=>{
   
      if(arr){
         return arr.map((items)=>{
           return(
             <div className="sec-sub-4 " key={items._id}>
                 <div className="sec-sub-5">
                 <div className="">
                   <img className="sec-sub-6" src={items.restaurant_thumb}  alt={items.restaurant_name}/>     
                     </div>
                 <div className="sec-sub-7">
                   <Link to={`/details?resId=${items.restaurant_id}`}>
                    
                   <p className="filler-1"  >{items.restaurant_name}</p>
                   </Link>
                   <p className="fill-3">Cost: `₹{items.cost}`</p>
                   <p className="fill-1">{items.address}</p>
   
   
                 </div>
                 </div>
   
                 <div className="div-1"></div>
   
               <div className="div-sub">
                 <div className="div-sub-1">
                   <p >CUISINES:</p>
                     <p> MEALTYPE:</p>
                 </div>
                 <div className="div-sub-2">
                   <div className="par-1"> 
                   <button className="me-2 btn btn-info" >{items.cuisines[0].cuisine_name}</button>
                   <button className="me-2 btn btn-danger">{items.cuisines[1].cuisine_name}</button>
                   
                   </div>
                     <div>
                     <button className="me-2 btn btn-primary" >{items.mealTypes[0].mealtype_name}</button>
                   <button className="me-2 btn btn-secondary">{items.mealTypes[1].mealtype_name}</button>
                     </div>
                 </div>
               </div>
               </div>
           )
         })
   
   
       }
   


   }


   return (

    <div className="sec-sub-3 mb-5">
 {listItem(newArr)}
<Pagination perPage={perPage} length={displayData.length} func={handleChange} />


    </div>
);
}


      


