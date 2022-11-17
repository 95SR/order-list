import React, { useEffect, useState } from 'react'
import { FaThList } from "react-icons/fa";
import './OrderList.css'
import Tables from './Tables';
import { Link } from "react-router-dom";
import axios from 'axios';
import DownloadExcel from './DownloadExcel';


function OrderList() {
  const [selectionModel, setSelectionModel] = useState([])
  const url= 'http://localhost:5000/orders/';
    const [order,setOrder] = useState([{
        name: '',
    phone: '',
    parcel: '',
    paymentMthd: '',
    payment: '',
    add:'',
    date:'',
    order:[{
        product: '',
        qt: ''
    }]
    }])


    const [rows, setRows] = useState([])
    const excelData = [
{"_id":"6369b858acf50387eec4d19f","name":"최태영","phone":1066662222,"parcel":"네","paymentMthd":"이체","payment":30000,"add":"대전","date":"2022-11-07T00:00:00.000Z","order":[{"product":"앙","qt":1,"_id":"6369b858acf50387eec4d1a0"},{"product":"숙","qt":3,"_id":"6369b858acf50387eec4d1a1"}],"__v":0},
{"_id":"6375d03444943a354b21215e","name":"리리","phone":1067231774,"parcel":"네","paymentMthd":"현금","payment":20000,"add":"서울","date":"2022-11-17T00:00:00.000Z","order":[{"product":"앙","qt":2,"_id":"6375d03444943a354b21215f"},{"product":"무","qt":4,"_id":"6375d03444943a354b212160"}],"__v":0}
]

  const getData = () => {
    axios.get(`${url}`)
    .then((res) => {
        const orderData = res.data ;
        
        setOrder(orderData)
        setRows(orderData)
        
        
    })
    .catch(error => console.error(`Error: ${error}`))
  }

useEffect(()=> {
  getData();
  
},[])

const multipleDelete = async () => {

  try {
    selectionModel.forEach((id)=> {
      deleteOrder(id)
    })
    return alert("삭제되었습니다");
  } catch (error) {
    return alert("실패했습니다");
  }
  
}


  const deleteOrder = (id) => {
    axios.delete('http://localhost:5000/orders/'+id)
    .then(res => {
      getData();
    })
    .catch(err => {
      console.log(err)

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

           {/*<DownloadExcel excelData={excelData} fileName={"주문일지"}/>*/ } 
          </div>

          <div className="right">
          <div className="edit-container"> 
              <Link to='/input_order'> <div className="add btn">추가</div> </Link>
              <div className="edit btn">수정</div>
              <div className="del btn" onClick={multipleDelete}>삭제</div>
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
        
        <Tables setSelectionModel={setSelectionModel} rows={rows} />
        

        

       

        

        

        
      </div>
      
    </div>
  )
}

export default OrderList