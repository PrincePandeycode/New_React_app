import React, { useState } from 'react'

function Products({naam, data}) {
     var [a,b] = useState(67);
     const [c,d] = useState(false);
  return (
    <>
    <div className="w-full  bg-zinc-700 text-white p-5">
       2. Passing Props
        <h1>{naam}</h1>

        <h1>{data.age}</h1>
        <h1>{data.college}</h1>

</div>
   <div>   
    3. changing state and style based on condition
   <h1 className={`${"bg-blue-100"} ${c === false ? "text-red-600 p-5":"text-blue-600 p-5"}`}> {c === false ? "value is flase" : "The value is true"}</h1>
        
 
        <button className='bg-green-700 px-5 py-3 rounded md'  onClick={()=>d(!c)}>change val</button>
        </div>
        
    
    </>

  )
}

export default Products