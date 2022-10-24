import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegHandPointRight } from "react-icons/fa";
import './Menu.css'
function Menu() {
  return (
    <div className='menu-container'>
        <div className="title">
           <AiOutlineMenu/> 메뉴
        </div> 

        <div className="menu-body">
            <ul className='menu-items'>
                <li><span className='active'><FaRegHandPointRight/></span>주문 입력</li>
                <li>주문 기록 확인</li>
                <li>dashboard</li>
            </ul>
        </div>
    </div>
  )
}

export default Menu