import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegHandPointRight } from "react-icons/fa";
import './Menu.css'
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className='menu-container'>
        <div className="title">
           <AiOutlineMenu/> 메뉴
        </div> 

        <div className="menu-body">
            <ul className='menu-items'>
            <li > 
              <Link to='/input_order'> <FaRegHandPointRight/> 주문 입력 </Link>
            </li>
            
            <li > 
              <Link to='/order_list'> 주문 기록 확인 </Link>
            </li>
            
                <li>dashboard</li>
            </ul>
        </div>
    </div>
  )
}

export default Menu