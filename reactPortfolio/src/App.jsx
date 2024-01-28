import { useState } from 'react'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import *as bootstrap from 'bootstrap';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery';
// import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <NavBar />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projectGallery" element={<ProjectGallery />} />
      <Route path="contact/*" element={<Contact />} />
    </Routes>
  </Router>
  )
}

export default App
