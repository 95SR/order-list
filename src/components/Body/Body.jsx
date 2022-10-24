import React from 'react'
import Input_Order from './InputOrder/Input_Order'
import Menu from './Menu/Menu'
import OrderList from './OrderList/OrderList'
import './Body.css'

function Body() {
  return (
    <div className="body">
        <div className='body-container'>
            <Menu/>
            <div className="content-container">
                <Input_Order/>
                <OrderList/>
            </div>
            
        </div>

    </div>
    
  )
}

export default Body