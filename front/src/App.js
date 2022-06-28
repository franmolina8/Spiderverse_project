import './App.css';
import NavBar from './core/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spidermans from './pages/Spidermans';
import Home from './pages/Home';
import Villans from './pages/Villans';
import Logs from './pages/Logs';
import Register from './pages/Register';
import Caza from './pages/Caza';
import { useState } from "react";
import {  SpiderContextProvider } from './context/context';
import { RequireAuth } from './components/RequireAuth';
import { JwtContext } from "./context/jwtContext";
import SpiderDetail from './pages/SpiderDetail';
import VillanDetail from './pages/VillanDetail';



function App() {
  const [jwt, setJwt] = useState(null);

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
    
    <div className="App">
    <SpiderContextProvider>
    <Router>
      <NavBar  />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route
            path="/spidermans"
            element={
               <RequireAuth>
               
                <Spidermans />
                
              </RequireAuth> 
            }
          />
          <Route path="/spidermans/:name" element={<SpiderDetail />} />
          <Route
            path="/villans"
            element={
              <RequireAuth>
                <Villans />
                </RequireAuth> 
            }
          />
           <Route path="/villans/:name" element={<VillanDetail />} />

          <Route path="/caza" element={<Caza />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/register" element={<Register />} />
          

      </Routes>

    </Router>
    </SpiderContextProvider>
    </div>
    
    </JwtContext.Provider>
  );
}

export default App;
