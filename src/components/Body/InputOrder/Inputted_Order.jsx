import React from 'react'
import { AiOutlineEdit,AiFillDelete } from "react-icons/ai";

function Inputted_Order() {
  return (
    <div className="order-inputted">
    <input type="text" value='앙' className='ord' />
    <input type="number" value='2' className='ord' />
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