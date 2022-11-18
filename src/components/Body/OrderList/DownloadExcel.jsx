import React, {useState, useEffect} from 'react'
import * as FileSaver from 'file-saver'
import XLSX from 'sheetjs-style';

function DownloadExcel({excelData, fileName}) {
   
    const [order,setOrder] = useState([])
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    const fileExtension = '.xlsx';
    const jsData = JSON.parse(excelData)
    {/*console.log(jsData[0].order.length)*/}
    

   {/*} useEffect(()=> {
        const transformData = (data) => {
            
            const orderItem = data.order
            

            orderItem.forEach((ord)=> {
                let prod = ord.product
            let qt = ord.qt
            
            setOrder(current => [...current, {prod:prod, qt:qt}])
            
            console.log(prod)
            })
            
            
        }
        
        jsData.forEach((data) => transformData(data))
    },[]) 
*/}
const transformData = (data) => {
    const orderItem = data.order
    
    console.log(data)
    orderItem.forEach((ord)=> {
        
        const basic = {name: data.name, 
            phone: data.phone,
            parcel: data.parcel,
            paymentMthd: data.paymentMthd,
            payment: data.payment,
            add:data.add,
            date:data.date}
        

        setOrder({...order, basic,ord})
        console.log(order)
    })
    

    
}
    const handleClick = () => {
    jsData.forEach((data) =>  transformData(data))
    }
   

    

    


    const exportToExcel = async () => {
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = {Sheets: {'data': ws}, SheetNames: ['data']};
        const excelBuffer = XLSX.write(wb,{bookType: 'xlsx', type: 'array'})
        const data = new Blob([excelBuffer], {type:fileType})
        FileSaver.saveAs(data, fileName + fileExtension)
    }
  return (
    <div className="btn download" onClick={handleClick}>Download Excel</div>
  )
}

export default DownloadExcel