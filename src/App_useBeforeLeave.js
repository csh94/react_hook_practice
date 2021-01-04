import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const useBeforeLeave = (onBefore) => {
    
    const handle = (event) => {
        const {clientY} = event;
        if(clientY <= 0){onBefore();}
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
    
    if(typeof onBefore !== "function"){
        return;
    }
};

const App = () => {
    const begForLife = () => console.log("Plz, don't leave");
    useBeforeLeave(begForLife);
    return (
        <div>
            <h1>Hi</h1>
        </div>
    );
}

export default App;