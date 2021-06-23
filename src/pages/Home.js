import React from 'react'
import Button from '../components/Button';
import  '../css/Home.css'
import {useHistory} from 'react-router-dom'

 const Home = () => {
   const history  = useHistory();
   const navigateTo = function(url){
       history.push(url)
   }

    return (
        <div className='home' >
            <Button text = 'ADD NEW ENTRY'onClickFunction={()=>{navigateTo('/newEntry')}} />
            <Button text = 'VIEW ALL ENTRIES' onClickFunction={()=>{navigateTo('/entries')}}/>
           
        </div>
    )
}
export default Home