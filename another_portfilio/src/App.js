import React from 'react';
import Home from "./pages/home";

import Picture from "./pages/pictures";
import Video from "./pages/videos";


import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>

          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/videos" 
                element={<Video />} 
              />
              <Route 
                path="/pictures" 
                element={<Picture />} 
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
