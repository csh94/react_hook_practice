import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
/*
useRef 를 하는데 reference 란 뭘까?
reference는 기본적으로 우리의 component의 어떤 부분을 
선택할 수 있는 방법인데, document.getElementByID() 와 동등해.
<input ref={potato} /> 이건,
    input 에게 potato 를 참조하라고 하는 거야.

const App = () => {
    const potato = useRef();
    
    setTimeout(() => console.log(potato), 3000);
    return (
        <div>
            <div>Hi</div>
            <input ref={potato} placeholder="swan" />
        </div>
    );
};
    
*/
const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if(element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if(element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };      
    }, []);

    if(typeof onClick !== "function") {
        return;
    }

    return element;
}
/*dependency 가 [] 이면 무조건 mount 생성될 때 한번만. 
sayHello 를 가진 useClick 이 mount 되었을 때, click 이벤트를 추가할거야.
이제는 뭔가 update 되었을때는 고려하지 않아도 되는 거지.
*/
const App = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);
    return (
        <div>
            <h1 ref={title}>Hi</h1>
        </div>
    );
};
/*
return element;
    reference를 return 해서 title 에 넣어주었고,
useEffect(() => { ~~~ });
    에서 eventListener 를 추가해주었어.

하! 지! 만! 여기서 중요한 것은 클린업 해줘야 한다는 거야.
componentWillUnmount 될 때 eventListener를 지워야 한다는 거지.
useEffect 는 알다시피 componentDidmount 상태에 동작해.
즉, component 가 mount 되었을 때 event 가 추가되는 거지.
그 후에 componentWillUnMount 일때 event 발생 뒤 정리할 필요가 있어.
그래서 지금부터 function 을 return 할꺼야.

지금까지는 어떤 function 도 return 하지 않았지만, 이제는 할 필요가 있어.
useEffect를 return 받은 그 함수는 componentWillUnMount 때 호출될거야.
*/
export default App;