import React, {useEffect,useState} from 'react'
import axios from 'axios'

function Table() {
    const url= 'http://localhost:5000/orders';
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
    const [orderItem,setOrderItem] = useState([{
        product: '',
        qt : ''
    }])



    const getData = () => {
        axios.get(`${url}`)
        .then((res) => {
            const orderData = res.data ;
            
            setOrder(orderData)
            setOrderItem(orderData.order)
            console.log(orderData)
        })
        .catch(error => console.error(`Error: ${error}`))
    }

    useEffect(()=> {
        getData();
    },[])




    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>제품</th>
                    <th>수량</th>
                    <th>택배</th>
                    <th>결제방법</th>
                    <th>결제금액</th>
                    <th>주소</th>
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
                
                {order.map(item => 
                <tr>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{orderItem.map(product => <tr>{product.product}</tr>)}</td>
                </tr>   
                    )}
                
            </tbody>
        </table>
        
        <p>sss</p></div>
  )
}

export default Table