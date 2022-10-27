import React, { useState } from 'react'
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineEdit,AiFillDelete } from "react-icons/ai";
import './Input_Order.css'
import Inputted_Order from './Inputted_Order';

function Input_Order() {
  
  const [product, setProduct] = useState('ㄷ');
  const [qt, setQt] = useState('2');
  const [updateProduct, setUpdateProduct] = useState(product)
  const [updateQt, setUpdateQt] = useState(qt)

  const initOrder = [{product: product, qt:qt}]
  const [order,setOrder] = useState(initOrder)
  

  const productValue = (e) =>{
    
    setProduct(e.target.value)
  }

  const qtValue = (e) =>{
    
    setQt(e.target.value)
  }

  const applyOrder = () => {
    console.log("clicked")
    
    setOrder(current => [...current,{product: product, qt:qt}])
    setUpdateProduct(product)
    setUpdateQt(qt)
    console.log(order)
  }

 

  return (
    <div >

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
                <div className="btn-scd apply" onClick={applyOrder}>
                    적용
                  </div>
              </div>
                
              
              <div className="input-items-cont input-items">
                <div className="form-item">
                  <label htmlFor="product">제품</label>
                  <select name="product" id="product" onChange={productValue} >
                    <option value="" disabled selected>선택</option>
                    <option value="앙">앙</option>
                    <option value="무">무</option>
                    <option value="숙">숙</option>
                    <option value="밤">밤</option>
                  </select>
                </div> 

                <div className="form-item">
                  <label htmlFor="qt">수량</label>
                  <input type="number" name='qt' id='qt' onChange={qtValue}/>              
                
                </div>
              </div>

              {order.map((element,index) => {
                return (
                  <Inputted_Order key={index} product={element.product} qt={element.qt}/>
                )
              })

              }

              

                     
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
              <div className="form-item-add">
                <label htmlFor="add">주소</label>
                <input type="text" name='add' id='add'/>
              </div>

              <div className="btn">
                검색
              </div>
            </div>  

            <div className="form-item">
              <label htmlFor="date">작성 일</label>
              <input type="date" name="date" id="date" />
            </div>

            <div className="btn-container">
              <button className='btn'>Submit</button>
              <button className='btn-scd'>Cancel</button>
            </div>

            
          </form>
        </div>
      
      
      </div>
  )
}

export default Input_Order