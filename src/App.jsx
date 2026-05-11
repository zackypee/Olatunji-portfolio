

import React from 'react'
import { DarkModeProvider } from "./components/DarkModeContext";
import NavSection from "./components/NavSection";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <NavSection />
        <main>
          <Profile />
          <About />
          <Experience />
          <Projects/>
          <Contact />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;