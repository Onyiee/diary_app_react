import React, { useState,useEffect } from 'react'
import '../css/NewEntry.css'
import Submit from '../components/Submit'
import {useHistory} from 'react-router-dom'

const postRoute = "http://localhost:8080/api/v1/diary/addNewEntry";

const axios = require('axios').default;

const NewEntry = () => {
    const history  = useHistory();
    let [entry , setEntry] = useState('');
    let [title, setTitle] = useState('');
    let [hasError, setHasError] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');
            
    const navigateTo = (url) => {
        history.push(url)
    }
    const submit = ()=>{
        const newEntry = {
            title : title,
            body : entry
        }
        axios.post(postRoute,newEntry, {params: {diaryId:1}})
        .then(()=>{
            navigateTo("/success")}
        )
        .catch(()=>{
            setHasError(true)
            setErrorMessage('Something went wrong, please try again')
        })
    }

  
    return (
        <div>  
            { hasError && <p>{errorMessage}</p>}
            <form className='newEntry'>
                <h1>New Entry</h1>
                   <div className='entry-title'>
                    <label>
                            Entry Title
                    </label>
                        <input type='text' value={title} onChange={(event)=>{
                            let newTitle = event.target.value
                            setTitle(newTitle)
                        }} />
                   </div>
                   <div className='entry-text'>
                        <textarea value={entry} onChange={(event)=>{
                            let newEntry = event.target.value
                            setEntry(newEntry)
                        }} placeholder='Enter your entry here...'/>
                   </div>
                   <Submit text='SUBMIT' onClickSubmit={submit}></Submit>   
            </form>   
            <div>
               
            </div>    
        </div>

      
    )
  
}


export default NewEntry