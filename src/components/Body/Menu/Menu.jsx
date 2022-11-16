import React from 'react'
import { useState, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegHandPointRight } from "react-icons/fa";
import './Menu.css'
import { Link , useLocation} from "react-router-dom";
 

function Menu() {
  const [active,setActive] = useState();
  

  const handleMenuClick = (e) => { 
    
    setActive(e.currentTarget.id)
    
  }

  const activePage = () => {
    
    if (location.pathname == '/input_order') {
      setActive('1')
      
    } else if (location.pathname == '/order_list') {
      setActive('2')
      
    }
  }
  let location = useLocation()
  
  useEffect(()=>{
    activePage();
    

  },[location])

  

  return (
    
      <div className='menu-container'>
        <div className="title">
           <AiOutlineMenu/> 메뉴
        </div> 

        <div className="menu-body">
            
            <div  className="menu-item" onClick={handleMenuClick} id='1' >
            <Link to='/input_order'> <FaRegHandPointRight className={active === '1' ? 'pointer' : 'pointer hide'}/> <span className={active === '1' ? 'font-yellow' : ''}>주문 입력</span> </Link>
            
            </div>
              
            <div  className="menu-item" onClick={handleMenuClick} id='2'>
            <Link to='/order_list'> <FaRegHandPointRight className={active === '2' ? 'pointer' : 'pointer hide'} /><span className={active === '2' ? 'font-yellow' : ''}>주문 기록 확인</span> </Link>
            </div>
               
            </div>
        
      </div>
    
    
  )
}

export default Menu