import React from 'react'
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegHandPointRight } from "react-icons/fa";
import './Menu.css'
import { Link } from "react-router-dom";

function Menu() {
  const [active,setActive] = useState(false)

  const handleMenuClick = () => { 
    setActive(!active)
    console.log(active)
  }

  return (
    <div className='menu-container'>
        <div className="title">
           <AiOutlineMenu/> 메뉴
        </div> 

        <div className="menu-body">
            
            <div  className="menu-item" onClick={handleMenuClick}>
            <Link to='/input_order'> <FaRegHandPointRight className={active ? 'pointer' : 'pointer hide'}/> 주문 입력 </Link>
            
            </div>
              
            <div  className="menu-item" onClick={handleMenuClick}>
            <Link to='/order_list'> <FaRegHandPointRight />주문 기록 확인 </Link>
            </div>
            
              
            
            
                
            </div>
        
    </div>
  )
}

export default Menu