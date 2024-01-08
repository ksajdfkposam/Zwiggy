import './detail.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export const DetailsDisplay=(props)=>{

console.log(props,"p");
const NextD=({data})=>{
   console.log("data_1",{data})
   if(data){
return data.map((items)=>{
   return(
       

        <div key={items._id} className="row">
           <div className="col-6  d-flex justify-content-end" >
           <img className="b w-75 me-5 " src={items.restaurant_thumb} alt={items.restaurant_name}/>
     
           </div>
           <div className="col-6 ">
               <h1 >{items.restaurant_name}</h1>
               <h6>200 Customers Has Said {items.rating_text}</h6>
               <h3 className="text-decoration-line-through">Discount of 10%</h3>
               <h3 >Discount of 20%</h3>
               <h2>BestTaste of Fresh and Hot Food at your Doorstep and DineIn </h2>
               <div className='d-flex'>
                   <div className='me-3'>
               <img className="Img_1 " src="https://tse2.mm.bing.net/th?id=OIP.f3Jjw6y6ZauylX2bx_ws_QHaHa&pid=Api&P=0&h=180" alt="veg"/>
           
               <p className='mt-1  fs-6 fw-bold'>Pure Veg</p>
               </div>
               <div>
               <img
                 className="featureIcon"
                 src="https://i.ibb.co/mD3jpgc/sentizied.png"
                 alt="sanitized"
               />
               <p className='mt-1  fs-6 fw-bold'>Fully Sanitized</p>
               </div>
               </div>
               
              <div className='w-50'>
              <Tabs >
   <TabList>
     <Tab>About Us</Tab>
     <Tab>Contact Us</Tab>
   </TabList>

   <TabPanel>
   <p>
                 {items.restaurant_name} with the rating as{" "}
                 {items.average_rating} which is {items.rating_text}
               </p>
   </TabPanel>
   <TabPanel>
   <p>Address: {items.address}</p>
               <p>Contact No: {items.contact_number}</p>
   </TabPanel>
 </Tabs>
              </div>
           </div>
      
        </div>

   
   )
})
   }
}


   return(
       <>
       {NextD(props)}
       </>
   )
}