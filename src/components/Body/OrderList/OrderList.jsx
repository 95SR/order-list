import React from 'react'
import { FaThList } from "react-icons/fa";
import './OrderList.css'
function OrderList() {
  return (
    <div>
      <div className="title">
        <FaThList/>주문 목록
      </div>

      <div className="input-body">
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
    </div>
  )
}

export default OrderList