import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { translations } from './translations';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import { Navbar } from './components/Navbar';

const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111827;
  background-color: #ffffff;
  transition: background-color 0.3s ease, color 0.3s ease;

  &.dark {
    background-color: #111827;
    color: #ffffff;
  }
`;

function App() {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('lang');
    return savedLang || 'en';
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const currentTranslations = translations[lang] || translations.en;

  return (
    <AppContainer className={isDarkMode ? 'dark' : ''}>
      <Navbar 
        translations={currentTranslations} 
        currentLang={lang} 
        setLang={setLang} 
        setIsDarkMode={setIsDarkMode}
      />
      <main>
        <Hero translations={currentTranslations.hero} />
        <About translations={currentTranslations.about} />
        <Skills translations={currentTranslations.skills} />
        <Projects translations={currentTranslations.projects} />
        <Contact translations={currentTranslations.contact} />
      </main>
      <Footer />
    </AppContainer>
  );
}

export default App;
