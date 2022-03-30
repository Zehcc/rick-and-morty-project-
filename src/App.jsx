import "./styles/main.scss";
import Characters from './pages/Characters/Characters'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <Router>
        <Navbar/>
      <Routes>
        <Route path="characters" element={<Characters/>}/>
        {/* <Route path="character" element={<Character/>}/> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;

