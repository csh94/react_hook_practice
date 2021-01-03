import React, { useState } from 'react';
import ReactDOM from "react-dom";

const contents = [
    {
        tab: "section 1",
        content: "I'm the Section 1"
    },
    {
        tab: "section 2",
        content: "I'm the Section 2"
    }
];
/*
useState의 
첫번째는 state를 초기화 시켜주고,
두번째는 1번째 아이템인 currentIndex는 index가 될꺼고,
그리고 2번째 아이템인 setCurrentIndex는 value를 바꿔줄꺼야. 그게 전부야.
*/
const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};
/*
useState가 항상 initialTab를 갖는 거야.
현재 선택한 content의 인덱스를 얻고 싶다면
예를 들어 useTabs(0) 이면 content(0)이 얻고 싶다는 거고.
그래서 내가 할 일은 어떤걸 return 해줘야 한다는 건데,
그걸 currentItem이라고 하고, 이게 allTabs[currentIndex] 가 될꺼야.
currentItem 은 allTabs를 가지고 리턴될거고 currentIndex를 인덱스 값으로 가져.
*/
const App = () => {
    const {currentItem, changeItem} = useTabs(0, contents);
    return(
        <div>
            {contents.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
        
            <div>{currentItem.content}</div>
        </div>
    );
};

export default App;