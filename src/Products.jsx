import React, { useState } from 'react'

function Products() {
     var [a,b] = useState(67);
  return (
    <div className="w-full h-screen bg-zinc-900 text-white p-5">

        <h1>{a}</h1>
        <button onClick={()=>b(a+1) } className='py-4 px-2 m-5 bg-green-600 rounded-md'>click to change</button>
    </div>

  )
}

export default Products