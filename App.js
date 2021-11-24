import logo from './logo.svg';
import './App.css';
import ParentComponent from './ParentComponent';
import ListComponent from './ListComponent';
import FormComponent from './FormComponent';

function App() {
  const name = "vannu";
  return (
    <div>
  {/* //  <ParentComponent/>
  // <ListComponent/> */}
  <h1> From app </h1>
 <FormComponent/>
 </div>
  );
}

export default App;
