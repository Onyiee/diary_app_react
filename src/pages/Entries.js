import { useState,useEffect } from "react";
const axios = require('axios').default;
const getRoute ="http://localhost:8080/api/v1/diary/allEntries";


const Entries = ()=> {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const getEntries = () => {
        axios.get(getRoute, {params: {diaryId:1}})
        .then((response)=>{
            setEntries(response.data)
            setLoading(false)
        })
        .catch(()=>{
            setHasError(true);
            setErrorMessage("something went wrong, try again.")
        })
    }
    useEffect(() => {
        getEntries()
    }, [])
    return(
    <div>
        <h2>Entries in this diary include </h2>
       {hasError && <p>{errorMessage}</p>}
       {loading && <p>Loading ....</p>}
       {!loading && 
        entries.map((entry, index)=>{
            return(
                <div key={index}>
                    <p>Title : {entry.title}</p>
                    <p>Body : {entry.body}</p>
                </div>
            )
        })
       
       }
    </div>
    )
}

export default Entries;