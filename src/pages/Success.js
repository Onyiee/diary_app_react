import React from 'react'
import '../css/SubmitPage.css'
import { useHistory } from 'react-router';
import Button from '../components/Button';

const Success = () => {

   const history  = useHistory();
   const navigateTo = function(url){
       history.push(url)
   }
    return (
        <div>
            <h3>Successful</h3>
            <Button text = 'BACK TO HOME' onClickFunction={()=>{navigateTo('/')}}/>
        </div>
    )
}

export default Success;
