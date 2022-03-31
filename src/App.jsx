import "./styles/main.scss";
import Characters from './pages/Characters/Characters'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Finder from "./pages/Finder/Finder";

function App() {
  let numbers = [];
    for (let i=1; i<826; i++) {
      numbers = [...numbers, i]
    }
  const url = 'https://rickandmortyapi.com/api/character/'+numbers;
  return (
    <>
    <Router>
        <Navbar/>
      <Routes>
        <Route path="characters" element={<Characters/>}/>
        <Route path="finder" element={<Finder url = {url}/>}/>
        <Route path="*" element={<Navigate to="characters"/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

