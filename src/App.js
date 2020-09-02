import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

// function HookTest() {
//   const [count, setCount] = useState(0)
//   const [userName, setUserName] = useState('张三')
//   const [txt,setTxt] = useState([{text:'Hello'},{text:'aaa'}])
//   return (
//     <div>
//       <p>{count}</p>
//       <p>{userName}</p>
//       <p>{txt[0].text}---{txt[1].text}</p>
//       <button onClick={() => setCount(count + 1)}>单击</button>
//       <button onClick={() => setUserName('李四')}>修改用户名</button>
//       <button onClick={() => setTxt([{text:'你好'},{text:'bbb'}])}>修改文本</button>
//     </div>
//   )
// }

// let countData = 0;
// function HookTest() {
//   let count, setCount;
//   let userName, setUserName;
//   countData += 1;
//   // 偶数情况
//   if (countData % 2 === 0) {
//     [count, setCount] = useState(0);
//     [userName, setUserName] = useState('张三');
//   } else {
//     [userName, setUserName] = useState('张三');
//     [count, setCount] = useState(0);
//   }

//   return (
//     <div>
//       <p>{count}</p>
//       <p>{userName}</p>
//       <button onClick={() => setCount(count + 1)}>单击</button>
//       <button onClick={() => setUserName('李四')}>修改用户名</button>
//     </div>
//   )
// }

function HookTest(props) {
  // const defaultCount = props.defaultCount || 0;
  const [count, setCount] = useState(() => {
    console.log('init')
    return props.defaultCount || 0;
  })
  return (
    <div>
      {count}
      <button onClick={() => setCount(count+1)}>单击</button>
    </div>
  )
}

// class App extends Component{
//   constructor(props) {
//     super(props)
//     this.state = {
//       count:0
//     }
//   }
//   render() {
//     return (
//       <div>
//         {this.state.count}
//         <button onClick={() =>(this.setState({count:this.state.count+1}))}>单击</button>
//       </div>
//     )
//   }
// }



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default HookTest;
