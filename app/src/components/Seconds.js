import React, { useState, useEffect } from 'react';


const Seconds = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() =>{
        const timer = setInterval(() =>{
            setCounter(counter => counter + 1);  
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() =>{
        console.log("Everytime!"); 

        return () => {
            console.log("Called before the unmounting");
        }
    },[]);

    return <span>You spent {counter} seconds</span>
}

export default Seconds;