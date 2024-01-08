import React from 'react';

function Pagination(props) {
    console.log(props)
const arr=[];
    const {perPage,length,func}=props;

 
  for(let i=1;i<Math.ceil(length/perPage)+1;i++){
arr.push(i);
    }

    function handlePage(itm){
       func(itm)
    }

    return (
        <div>
            {
                arr.map((val,i)=>{
                    return(

<span key={i}>
<button className='btn btn-secondary text-bg-light m-2'  onClick={()=>handlePage(i)}>{val}</button>
</span>



                    )
                })
            }
        </div>
    );
}

export default Pagination;