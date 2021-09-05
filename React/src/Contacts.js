import React, { useState, useEffect } from 'react';
import './App.css';



function Contacts() {
    const [message, setMessage] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/customRoute').then(res=>{
            return res.json()}).then(data=>{
            const newData = Object.values(data)
            setMessage(newData)

        })
            }, [])

 return (
 <main>
        {message.map(e =>(
            <>
             <ul>
             <li>{e.name}</li>
             <li>{e.email}</li>
             <li>{e.catchPhrase}</li>
             </ul>
             </>
        )
        )}
 </main>
 );
}

export default Contacts;