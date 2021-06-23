import React, {useState} from 'react'

 const Input = ({label, setData, dataKey}) => {
     const [text, setText] = useState('')

     const updateText=(value) => {
        if (dataKey){           
             setData(dataKey, value)
        }
        setText(value)
     }
    return (
        <div>
            <label htmlFor="text">{label}</label>
            <input type="text" value={text} onChange= { 
                (e)=> {updateText(e.target.value)
                }
                }/>
        </div>
    )
}
export default Input