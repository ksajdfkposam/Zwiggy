import { Link } from "react-router-dom"
export const QuickD=(props)=>{
console.log("props", props)

    const listMeal=({mealData})=>{
        console.log("meald",{mealData})
      //  const l={mealD}
         if(mealData){
            return mealData.map((items)=>{
                return(
                    <Link key={items._id} to={`/listing/${items.mealtype_id}`}>
                    <div  className="f-1 bg-warning">
                    <img className="i-1" src={items.meal_image} alt={items.mealtype}/>
                    
                        <div className=" bg-white p-3 ">
                           
                        <div> <h6  className="quick fw-bold h-6 text-decoration-none">{items.mealtype}</h6></div>
                        <div>
                        <p className="quick-1 h-6">{items.content}</p>
                    </div>   
                     </div>
                     </div>
</Link>


                )
            })
         }


    }
    









    return (
        <>
             {listMeal(props)}        </>
    )
}