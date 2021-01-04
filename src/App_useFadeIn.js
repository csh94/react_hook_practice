import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
        if(element.current){
            const {current} = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);

    if(typeof duration !== "number" || typeof delay !== "number"){
        return;
    }
    
    return {ref: element, style: {opacity: 0}};
};

const App = () => {
    const fadeInH1 = useFadeIn(2, 1);
    const fadeInP = useFadeIn(3, 2);
    return (
        <div>
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>This is hi.</p>    
        </div>
    );
};

export default App;