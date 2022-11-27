import React, { useEffect, useState } from 'react'
import { FaThList } from "react-icons/fa";
import './OrderList.css'
import Tables from './Tables';
import { Link } from "react-router-dom";
import axios from 'axios';
import DownloadExcel from './DownloadExcel';


function OrderList() {
  const [selectionModel, setSelectionModel] = useState([])
  const url= 'https://ddeok-jumun.herokuapp.com/orders/';
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
        qt: '',
        orderTots: ''
    }]
    }])


    const [rows, setRows] = useState([])
    const excelData = JSON.stringify(order)
    const [date1,setDate1] = useState('')
    const [date2,setDate2] = useState('')

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
    axios.delete('https://ddeok-jumun.herokuapp.com/'+id)
    .then(res => {
      getData();
    })
    .catch(err => {
      console.log(err)

    })
  }

  const handleClick = () => {
    const parse_date1 = Date.parse(date1)
    const parse_date2 = Date.parse(date2)
    console.log(parse_date1,parse_date2)
    console.log(Date.parse(rows[0].date))

    const newDate = order.filter((item) => 
      Date.parse(item.date) >= parse_date1 && Date.parse(item.date) <= parse_date2
    )

    setRows(newDate)

    

    

  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    if (name === 'date1'){
      setDate1(value)
    }
    if (name === 'date2'){
      setDate2(value)
    }

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
              <input type="date" name='date1' id='date-from' onChange={handleChange} value={date1}/>
              <p>~</p>
              <input type="date" name="date2" id="date-to" onChange={handleChange} value={date2} />
              <div className="btn" onClick={handleClick}>검색</div>
            </form>

            <DownloadExcel excelData={excelData} fileName={"주문일지"}/>
          </div>

          <div className="right">
          <div className="edit-container"> 
              <Link to='/input_order'> <div className="add btn">추가</div> </Link>
              {/*<div className="edit btn">수정</div>*/}
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