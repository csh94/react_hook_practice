import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { isElementOfType } from 'react-dom/test-utils';

const useFullscreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullscreen();
            if(callback && typeof callback === "function"){
                callback(true);
            }
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if(callback && typeof callback === "function"){
            callback(false);
        }
    };
    return {element, triggerFull, exitFull};
};
const App = () => {
    const onFulls = (isFull) => {
        console.log(isFull ? "We are full" : "not full");
    };
    const {element, triggerFull, exitFull} = useFullscreen(onFulls);
    return (
        <div className="App" style={{height: "1000vh"}}>
            <div ref={element}>
            <img 
                src="https://images.unsplash.com/photo-1592800919958-65678f3d80d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
            <button onClick={exitFull}>Exit Fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make Fullscreen</button>
        </div>
    );
};

export default App;