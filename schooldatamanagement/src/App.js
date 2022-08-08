import './App.css';
import  Home,{Navbar} from './Home'
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom"


function App() {
  return (
    <div className="App"> 
      <Navbar/>
    </div>
  );
}

export default App;
