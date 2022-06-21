import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ContactPage from './pages/contactme';
import AboutPage from './pages/about';
import AchievementsPage from './pages/achievements';
import EducationPage from './pages/education';
import WorkExperiencePage from './pages/workexperience';
import HobbiesPage from './pages/hobbies';

function App() {
  return (
    <Router> 
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/contactme" element={<ContactPage />} exact />      
      <Route path="/about" element={<AboutPage />} exact />
      <Route path="/education" element={<EducationPage />} exact />
      <Route path="/workexperience" element={<WorkExperiencePage />} exact />
      <Route path="/achievements" element={<AchievementsPage />} exact />
      <Route path="/hobbies" element={<HobbiesPage />} exact />

    </Routes>
  </Router>
  );
}

export default App;
