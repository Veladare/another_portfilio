import React from 'react';
import Home from "./pages/home";
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header/>

          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
