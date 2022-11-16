import React, { useEffect, useState } from 'react'
import { FaThList } from "react-icons/fa";
import './OrderList.css'
import Tables from './Tables';
import { Link } from "react-router-dom";
import axios from 'axios';


function OrderList() {
  const [selectionModel, setSelectionModel] = useState([])
  
  const deleteOrder = (id) => {
    axios.delete('http://localhost:5000/orders/'+id)
    .then(res => {
      return alert("삭제되었습니다");

      


    })
    .catch(err => {
      console.log(selectionModel)
      return alert("실패했습니다");
      
    })
  }
  
  return (
    <div className='big_container'>
      <div className="title">
        <FaThList/>주문 목록
      </div>

      <div className="input-body order-list">
        <div className="config">
          <div className="left">
            <form action="" className='date-filter'>
              <label htmlFor="date">기간</label>
              <input type="date" name='date' id='date-from'  />
              <p>~</p>
              <input type="date" name="date" id="date-to" />
              <div className="btn">검색</div>
            </form>

            
          </div>

          <div className="right">
          <div className="edit-container"> 
              <Link to='/input_order'> <div className="add btn">추가</div> </Link>
              <div className="edit btn">수정</div>
              <div className="del btn" onClick={() => deleteOrder(selectionModel)}>삭제</div>
            </div>

          </div>
        {/*
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
  */}

        </div>
        
        <Tables setSelectionModel={setSelectionModel} />

        

       

        

        

        
      </div>
      
    </div>
  )
}

export default OrderList