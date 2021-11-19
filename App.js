import logo from './logo.svg';
import './App.css';
import MyFirstComponent from "./MyFirstComponent";
import MySecondComponent from "./MySecondComponent";
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

function App() {
  const name = "vanu";
  const name1 = "sheba";
   return (
     <div>
       <h1>hello {name && name.length ?  name : "World"}</h1>
        {/* <h2>{1+2}</h2> */}
       <MyFirstComponent name ={name} age={20}/>
       <MySecondComponent name ={name1} age={24}/>
     </div>
   );
};

export default App;
