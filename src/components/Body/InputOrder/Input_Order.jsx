import React, { useState } from 'react'
import axios from 'axios'
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineEdit,AiFillDelete } from "react-icons/ai";
import './Input_Order.css'
import Popup from './Popup';

function Input_Order({active}) {
  
  const [product, setProduct] = useState('');
  const [qt, setQt] = useState('');
  const [order, setOrder] = useState([])
  const [popup, setPopup] = useState(false)
  const [value, setValue] = useState({
    name: '',
    phone: '',
    parcel: '',
    paymentMthd: '',
    payment: '',
    add:'',
    date:''
  })
  const [input, setInput] = useState({
    name: '',
    phone: '',
    parcel: '',
    paymentMthd: '',
    payment: '',
    add:'',
    date:''
  })
  

  const productValue = (e) =>{
    
    setProduct(e.target.value)
    
  }

  const qtValue = (e) =>{
    
    setQt(e.target.value)
    
  }

  const handleOrder =() => {
    
    addOrder(product,qt)
    setProduct('')
    setQt('')  
  }

  const addOrder = (product,qt) => {
    setOrder([...order,{product,qt,id:Math.random()}])
    
  }

  const delOrder = (key) => {
    const newOrder = order.filter(item => item.id !== key)
    setOrder(newOrder)
  }

  const closeBtn = () => {
    
    setPopup(!popup)

    window.location = '/input_order'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      await axios.post('http://localhost:5000/orders/add', input) ;

      setPopup(!popup)
    } catch (error) {
      return alert("Fill all field");
    }


  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    
    setValue(e.target.value)
    

    setInput(prevInput =>{
      return{
        ...prevInput,
        [name]: value,
        order
      }
    })

    
  }

  return (
    <div className='big_container'>

        <div className="title">
        <BsFillCartPlusFill/>주문 입력
        </div>

        <div className="input-body">
          <form action="">
            <div className="input-items">
              <div className="form-item">
                <label htmlFor="name">고객명</label>
                <input type='text' name='name' id='name' onChange={handleChange} value={value.name} required></input>
              </div>

              <div className="form-item">
                <label htmlFor="phone">전화번호</label>
                <input  name='phone' id='phone'   onChange={handleChange} value={value.phone} required></input>
                {/*<span class="validity"></span>  */}
              </div>
            </div>

            <div className="input-items prod-container">
              <div className="btn-container">
                <div className="btn-scd apply" onClick={handleOrder}>
                    적용
                  </div>
              </div>
                
              
              <div className="input-items-cont input-items">
                <div className="form-item">
                  <label htmlFor="product">제품</label>
                  <select name="product" id="product" onChange={productValue} value={product} required>
                    <option value="" disabled selected>선택</option>
                    <option value="앙">앙</option>
                    <option value="무">무</option>
                    <option value="숙">숙</option>
                    <option value="밤">밤</option>
                  </select>
                </div> 

                <div className="form-item">
                  <label htmlFor="qt">수량</label>
                  <input type="number" name='qt' id='qt' value={qt} onChange={qtValue} required/>              
                
                </div>
              </div>   

              {order.map((item) => {
                return(
                  <div className="order-inputted" id={item.id}>
                    <input type="text" value={item.product} className='ord' />
                    <input type="number" value={item.qt} className='ord' />
                    
                    
                    <div className="delete" onClick={(e)=>delOrder(item.id)}>
                      <AiFillDelete/>
                    </div>
    
    
                  </div> 
                  
                )
              })
                
              }        
                     
            </div>  


            <div className="form-item">
                <label htmlFor="parcel">택배</label>
                <select name="parcel" id="delivery" onChange={handleChange} value={value.parcel} required>
                  <option value="" disabled selected>선택</option>
                  <option value="네">네</option>
                  <option value="아니요">아니요</option>
                  
                </select>              
              
            </div> 

            <div className="input-items">
              <div className="form-item">
                <label htmlFor="paymentMthd">결제방법</label>
                <select name="paymentMthd" id="pay-mthd" onChange={handleChange} value={value.paymentMthd} required>
                  <option value="" disabled selected>선택</option>
                  <option value="이체">은행</option>
                  <option value="현금">현금</option>
                </select>
              </div>

              <div className="form-item">
                <label htmlFor="payment">결제금액</label>
                <input type="text" name='payment' onChange={handleChange} value={value.payment} required/>
              </div>
            </div>

            <div className="input-items">
              <div className="form-item-add">
                <label htmlFor="add">주소</label>
                <input type="text" name='add' id='add' onChange={handleChange} value={value.add} required/>
              </div>

              <div className="btn">
                검색
              </div>
            </div>  

            <div className="form-item">
              <label htmlFor="date">작성 일</label>
              <input type="date"   name="date" id="date" onChange={handleChange} value={value.date} required/>
            </div>

            <div className="btn-container">
              <button className='btn' onClick={handleSubmit}>Submit</button>
              <button className='btn-scd' >취소</button>
            </div>

            
          </form>
        </div>

        <div className={popup ? '' : 'popup-hide'}>
          <Popup closeBtn={closeBtn} ></Popup>
        </div>
      
      
      </div>
  )
}

export default Input_Order