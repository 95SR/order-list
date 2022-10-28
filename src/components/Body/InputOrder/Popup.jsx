import React from 'react'
import './popup.css'
import {AiOutlineCloseCircle} from "react-icons/ai";

function Popup({closeBtn}) {

    

   
  return (
    <div className='popup-container'>
        <h3>접수되었습니다.</h3>
        <div className='close-btn' onClick={closeBtn}><AiOutlineCloseCircle/></div>

        <div className="btn-container">
            <div className="btn" onClick={closeBtn}>새로 입력</div>
            <a className="btn-scd" href="/order_list" >목록 확인</a>
        </div>

        
    </div>
  )
}

export default Popup