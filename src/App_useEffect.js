import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";

const App = () => {
    const sayHello = () => console.log("hello");
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);

    useEffect(sayHello, [number]);
    return (
        <div>
            <div>Hi</div>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
        </div>
    );
};

export default App;
/*
useEffect 는 'componentDidmount' 의 역할을 해서
새로고침을 하면 sayHello()를 실행하지.
그렇지만 'componentDidUpdate' 의 역할도 해서
클릭을 하면 또 sayHello()를 실행하지.
이게 useEffect .

useEffect는 2개의 인자를 받는데 
첫번째 인자는 function 으로써의 effect야. (sayHello 말야.)
두번째 인자는 dependency 야. 만약 deps가 있다면 effect는 
그 deps 리스트에 있는 값일때만 값이 변하도록 활성화될거야.
즉 만약 너가 dependency 자리에 어떤 것을 넣고 
그게 상태가 바뀐다면 sayHello 는 다시 실행 될거야.
슈퍼 심플. 슈퍼 파워풀.

한가지 더 'ComponentWillUnmount' 의 역할도 하지만
이번 코딩에선 unmount 된게 없어서 못봐.
기억만 해놓고 다른 코딩에서 해보자.
*/