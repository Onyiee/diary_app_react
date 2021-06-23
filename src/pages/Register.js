import React from 'react'
import '../css/Register.css'
import Submit from '../components/Submit'
import {useHistory} from 'react-router-dom'
import Input from '../components/Input'

 const Register = () => {
     const data={
         username: '',
         email: '',
         password : '',
         confirmpassword : ''
     }

     const setData =(key, value)=> {
        data[key] = value
     }

     const displayData = ()=> {
         console.log(data)
     }
    const history  = useHistory();
    const navigateTo = function(url){
        history.push(url)}
    return ( 
        <div className='container'>
            <form className='register'>
                <Input label='username' dataKey='username' setData={setData} />
                <Input label='email' dataKey='email' setData={setData} />
                <Input label='password' dataKey='password' setData={setData} />
                <Input label='confirm password' dataKey='confirmpassword' setData={setData} />
               
            </form>
            <Submit className='submit-btn' text='SUBMIT' 
            onClickSubmit={()=>{navigateTo('SubmitPage')}}></Submit> 
        </div>
    )
}

export default Register;