import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import GlobalStyles from './styles/GlobalStyles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faReact, faJs, faHtml5, faCss3, faNodeJs, faGit, faPython } from '@fortawesome/free-brands-svg-icons';
import { faShield, faBrain } from '@fortawesome/free-solid-svg-icons';

library.add(faReact, faJs, faHtml5, faCss3, faNodeJs, faGit, faPython, faShield, faBrain);

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
