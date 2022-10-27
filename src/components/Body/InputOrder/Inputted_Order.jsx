import React from 'react'
import { AiOutlineEdit,AiFillDelete } from "react-icons/ai";

function Inputted_Order({key,product,qt,delOrder}) {
  return (
    <div className="order-inputted" id={key}>
    <input type="text" value={product} className='ord' />
    <input type="number" value={qt} className='ord' />
    <p>{key}{product}{qt}</p>
    
    <div className="delete" onClick={(e)=>console.log(key)}>
    <AiFillDelete/>
    </div>
    
    
  </div>   
  )
}

export default Inputted_Order