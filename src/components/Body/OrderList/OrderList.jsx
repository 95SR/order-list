import React from 'react'
import { FaThList } from "react-icons/fa";
import './OrderList.css'
import {AiOutlineSearch } from "react-icons/ai";
import Table from './Table';

function OrderList() {
  return (
    <div>
      <div className="title">
        <FaThList/>주문 목록
      </div>

      <div className="input-body">
        <div className="config">
        <div className="left">
          <form action="" className='date-filter'>
            <label htmlFor="date">기간</label>
            <input type="date" name='date' id='date-from'  />
            <p>~</p>
            <input type="date" name="date" id="date-to" />
          </form>

          <div className="edit-container">
            <div className="add btn">추가</div>
            <div className="edit btn">수정</div>
            <div className="del btn">삭제</div>
          </div>
        </div>
        
        <div className="right">
          <div className="search-container">
            <div className="category">
              <label htmlFor="phone">전화번호</label>
              <input type="number" name='phone' />
              <div className="search-icon">
                <AiOutlineSearch/>
              </div>
            </div>

            <div className="category">
              <label htmlFor="name">고객명</label>
              <input type="text" name='text' />
              <div className="search-icon">
                <AiOutlineSearch/>
              </div>
            </div>
          </div>
        </div>


        </div>
        
        <Table/>

        

        

        
      </div>
      
    </div>
  )
}

export default OrderList