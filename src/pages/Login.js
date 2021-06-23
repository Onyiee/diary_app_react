import React from 'react'
import '../css/Login.css'
import '../components/Submit'
import Submit from '../components/Submit'
import {useHistory} from 'react-router-dom'


 const Login = () => {
    const history  = useHistory();
    const navigateTo = function(url){
        history.push(url)}

    return (
        <div>   
            <form className='login'>
            <h1>Login</h1>
                <label>Email
                        <input type='text' placeholder='Enter your email...'/>
                </label>
                
                <label>
                    Username
                    <input type='text' placeholder='Enter your username...'/>
                </label>
                
                <label>Password
                        <input type='password' placeholder='Enter your password...'/>
                </label>

               
                <Submit text='SUBMIT' onClickSubmit={()=>{navigateTo('NewEntry')}}></Submit> 
            </form>
          
        </div>
    )
}
export default Login