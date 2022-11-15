import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { DataGrid,GridRenderCellParams } from '@mui/x-data-grid';
import './tables.css'

  
  

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

    const [rows, setRows] = useState([])
    



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

    
    
    const columns = [
    
    
        {
            field: 'name',
            headerName: '이름',
            width: 200,
        },
        {
            field: 'phone',
            headerName: '전화번호',
            width: 100
        },
        {
            field: 'order',
            headerName: '주문',
            width: 100,
            renderCell: (params) => (
                <div className='product'>
                    <ul >
                        {params.value.map((item, index) => (
                        <li key={index}>{item.product}</li>
                        ))}
                    </ul>
                    <ul >
                        {params.value.map((item, index) => (
                        <li key={index}>{item.qt}</li>
                        ))}
                    </ul>

                </div>
                
                
            )
        },
        {
            field: 'payment',
            headerName: '결제',
            width: 150
        },
        {
            field: 'paymentMthd',
            headerName: '결제방법',
            width: 100
        },
        {
            field: 'parcel',
            headerName: '택배',
            width: 100
        },
        {
            field: 'add',
            headerName: '주소',
            width: 300
        },
        {
            field: 'date',
            headerName: '날짜',
            width: 150,
            type:'date',
            valueGetter: ({ value }) => new Date(value),
            
        },
       
     
    
        
      ];

    return (
    <div style={{ height: '90%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        getRowId={row => row._id}
        getRowHeight={() => 'auto'}
      />
    </div>
  )
}

export default Tables