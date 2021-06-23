import React from 'react'
import '../css/Button.css'

 const Button = ({text, onClickFunction}) => {
    return ( 
      <button className='btn-home' onClick={onClickFunction}>
          {text}
      </button>
    )
}
export default Button