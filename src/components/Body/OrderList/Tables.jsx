import React, {useEffect,useState} from 'react'
import axios from 'axios';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from "@material-ui/core/Paper";

function Tables() {
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
    



    const getData = () => {
        axios.get(`${url}`)
        .then((res) => {
            const orderData = res.data ;
            
            setOrder(orderData)
            
            console.log(orderData)
        })
        .catch(error => console.error(`Error: ${error}`))
    }

    useEffect(()=> {
        getData();
    },[])




    return (
    <div>
         <TableContainer component={Paper}>
            <Table aria-label="simple table" stickyHeader style={{ width: 1200 }}>
                <TableHead>
                    <TableRow>
                        <TableCell >이름</TableCell>
                        <TableCell>전화번호</TableCell>
                        <TableCell>제품</TableCell>
                        <TableCell>수량</TableCell>
                        <TableCell>택배</TableCell>
                        <TableCell>결제방법</TableCell>
                        <TableCell>결제금액</TableCell>
                        <TableCell>주소</TableCell>
                        <TableCell>작성일</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {order.map(item =>
                        <TableRow>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.phone}</TableCell>
                            <TableCell>{item.order.map(prod => 
                                <TableRow>{prod.product}</TableRow>)}</TableCell>
                            <TableCell>{item.order.map(prod => 
                                <TableRow>{prod.qt}</TableRow>)}</TableCell>
                            <TableCell>{item.parcel}</TableCell>
                            <TableCell>{item.paymentMthd}</TableCell>
                            <TableCell>{item.payment}</TableCell>
                            <TableCell>{item.add}</TableCell>
                            <TableCell>{item.date}</TableCell>

                        </TableRow>)}
                </TableBody>

            </Table>


        </TableContainer>
        
        </div>
  )
}

export default Tables