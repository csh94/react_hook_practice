import React, { useState } from 'react';
/*
useState 는 항상 2개의 value를 return 해.
첫번째 value에 item 이라는 이름을 주고
두번째 value는 값을 변경하게 하자, setItem .
그리고 useState 는 초기에 state를 initialState를 세팅할 수 있도록 제공해.
useState(1) 이면 1로 초기화 한거야.

생각하기에 useState 는 Array를 return 해야해.
첫번째 두번째 요소가 있는 거지. 
아래와 같이 작성하면 useState를 부른 곳에 값을 return 해줄 수 있어.

*/
const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  
  return(
    <div>
      <h1>{item}</h1>
      <button onClick={incrementItem}>+</button>
      <button onClick={decrementItem}>-</button>
    </div>
  );
};
/* Ugly coding 
class App extends React.Component{
  state = {
    item: 1
  }
  render(){
    const {item} = this.state;
    return(
      <div>
        <h1>{item}</h1>
        <button onClick={this.incrementItem}>+</button>
        <button onClick={this.decrementItem}>-</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      };
    });
  };
  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      };
    });
  };
}
*/
export default App;
