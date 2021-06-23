import React from 'react'
import '../css/Submit.css'

 const Submit = ({text, onClickSubmit}) => {
    return (
     <button className='submit-btn' onClick={(e)=>{
         e.preventDefault()
         onClickSubmit()
         }}>
         {text}
     </button>
    )
}
export default Submit