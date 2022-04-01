import "./styles/main.scss";
import Characters from './pages/Characters/Characters'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Finder from "./pages/Finder/Finder";
import Home from "./pages/Home/Home";
import DetailedChar from "./pages/DetailedChar/DetailedChar";
import AvatarProvider from "./context/AvatarContext/AvatarContext";

function App() {
  
  return (
    <>
    <Router>
      <AvatarProvider>
        <Navbar/>
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="characters" element={<Characters/>}/>
          <Route path="finder" element={<Finder/>}/>
          <Route path="characters/character:id" element={<DetailedChar/>}/>
          <Route path="*" element={<Navigate to="home"/>}/>
        </Routes>
      </AvatarProvider>
    </Router>
    </>
  );
}

export default App;

