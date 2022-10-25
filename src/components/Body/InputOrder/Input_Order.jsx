import React from 'react'
import { BsFillCartPlusFill } from "react-icons/bs";
import './Input_Order.css'

function Input_Order() {
  return (
    <div className='main-container'>

        <div className="title">
        <BsFillCartPlusFill/>주문 입력
        </div>

        <div className="input-body">
          <form action="">
            <div className="input-items">
              <div className="form-item">
                <label htmlFor="name">고객명</label>
                <input type='text' name='name' id='name'></input>
              </div>

              <div className="form-item">
                <label htmlFor="phone">전화번호</label>
                <input type='number' name='phone' id='phone'></input>
              </div>
            </div>

            <div className="input-items prod-container">
              <div className="btn-container">
                <div className="btn-scd apply">
                    적용
                  </div>
              </div>
                
              
              <div className="input-items-cont">
              <div className="form-item">
                <label htmlFor="product">제품</label>
                <select name="product" id="product">
                  <option value="앙">앙</option>
                  <option value="무">무</option>
                  <option value="숙">숙</option>
                  <option value="밤">밤</option>
                </select>
              </div> 

              <div className="form-item">
                <label htmlFor="qt">수량</label>
                <input type="number" name='qt' id='qt'/>              
              
              </div>
              </div>
                         
            </div>  


            <div className="form-item">
                <label htmlFor="택배">택배</label>
                <select name="택배" id="delivery">
                  <option value="yes">네</option>
                  <option value="no">아니요</option>
                  
                </select>              
              
            </div> 

            <div className="input-items">
              <div className="form-item">
                <label htmlFor="pay-mthd">결제방법</label>
                <select name="pay-mthd" id="pay-mthd">
                  <option value="trf">은행</option>
                  <option value="cash">현금</option>
                </select>
              </div>

              <div className="form-item">
                <label htmlFor="amount">결제금액</label>
                <input type="number" name='amount' />
              </div>
            </div>

            <div className="input-items">
              <div className="form-item">
                <label htmlFor="add">주소</label>
                <input type="text" name='add'/>
              </div>

              <div className="btn">
                검색
              </div>
            </div>  

            <div className="form-item">
              <label htmlFor="date">작성 일</label>
              <input type="date" name="date" id="date" />
            </div>

            <div className="btn-container input-items">
              <button className='btn'>Submit</button>
              <button className='btn-scd'>Cancel</button>
            </div>

            
          </form>
        </div>
      
      
      </div>
  )
}

export default Input_Order