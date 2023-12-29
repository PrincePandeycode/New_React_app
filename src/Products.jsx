import React, { useState } from 'react'

function Products({naam, data}) {
     var [a,b] = useState(67);
  return (
    <div className="w-full  bg-zinc-700 text-white p-5">
        <h1>{naam}</h1>

        <h1>{data.age}</h1>
        <h1>{data.college}</h1>
       </div>

  )
}

export default Products