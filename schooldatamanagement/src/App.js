import './App.css';
import  Home from './Home'
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
       <h1>Hello</h1> 
      <Home/>
    </div>
  );
}

export default App;
