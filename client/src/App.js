
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Auth from "./pages/Auth"
import Error from "../src/components/Error"
import Success from './components/Success';
import Approve from './components/Approve';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/auth" element={<Auth/>  }/>
          <Route path='/error' element={<Error/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/approve' element={<Approve/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
