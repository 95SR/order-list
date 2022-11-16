import React from 'react'
import { useState, useEffect } from 'react';
import Input_Order from './InputOrder/Input_Order'
import Menu from './Menu/Menu'
import OrderList from './OrderList/OrderList'
import './Body.css'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


function Body() {
  
  

  return (
    <div className="body">
      
        <div className='body-container'>
          
        <BrowserRouter>
        
        <Menu />
        
          

          <div className="content-container">
            <Routes>
                <Route path='/input_order' element={<Input_Order/>}/>
                <Route path='/order_list' element={<OrderList/>}/>
            </Routes>   
          </div>
        </BrowserRouter>   
        </div>
        
    </div>
    
  )
}

export default Body