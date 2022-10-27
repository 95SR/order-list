import React from 'react'
import { AiOutlineEdit,AiFillDelete } from "react-icons/ai";

function Inputted_Order({product,qt}) {
  return (
    <div className="order-inputted">
    <input type="text" value={product} className='ord' />
    <input type="number" value={qt} className='ord' />
    <div className="edit">
    <AiOutlineEdit/>
    </div>
    
    <div className="delete">
    <AiFillDelete/>
    </div>
    
    
  </div>   
  )
}

export default Inputted_Order