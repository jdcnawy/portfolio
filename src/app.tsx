import React from 'react';
import Header from './app/layouts/header';
import About from './app/components/about';
import Skills from './app/components/skills';
import Projects from './app/components/projects';
import Contact from './app/components/contact';
import Footer from './app/layouts/footer';

interface AppProps {
  toggleDarkMode: () => void;
}

const App: React.FC<AppProps> = ({ toggleDarkMode }) => {
  return (
    <div>
      <Header toggleDarkTheme={toggleDarkMode} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;