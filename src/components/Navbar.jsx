import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavLink = styled.a`
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #3b82f6;
  }

  .dark & {
    color: #a0aec0;

    &:hover {
      color: #93c5fd;
    }
  }
`;

const NavContainer = styled(motion.nav)`
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;

  &.dark {
    background-color: #1a202c;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 640px) {
    padding: 0 2rem;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  text-decoration: none;

  .dark & {
    color: #ffffff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none; // Hide on small screens, will be handled by a mobile menu
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #111827;
  z-index: 1001; // Ensure it's above the mobile menu

  .dark & {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%; // Adjust as needed
  max-width: 300px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;

  .dark & {
    background-color: #1a202c;
    box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
  }

  ${NavLink} {
    width: fit-content; // Allow links to take only necessary width
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.5rem; // Adjust gap for mobile
  }
`;

export const Navbar = ({ translations: { navbar: navbarTranslations = {} } = {}, currentLang, setLang, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);
  const isDarkMode = document.documentElement.classList.contains('dark');

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - navbarHeight - 20; // Added extra 20px padding
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      closeMobileMenu(); // Close mobile menu after clicking a link
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <NavContainer
      ref={navbarRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
      className={isDarkMode ? 'dark' : ''}
    >
      <NavContent>
        <Logo href="#hero" className={isDarkMode ? 'dark' : ''}>Bekzod Huseinov</Logo>
        <RightSection>
          <NavLinks>
            <NavLink onClick={() => handleScrollToSection('about')} className={isDarkMode ? 'dark' : ''}>{navbarTranslations.about}</NavLink>
            <NavLink onClick={() => handleScrollToSection('work-experience')} className={isDarkMode ? 'dark' : ''}>{navbarTranslations.workExperience}</NavLink>
            <NavLink onClick={() => handleScrollToSection('skills')} className={isDarkMode ? 'dark' : ''}>{navbarTranslations.skills}</NavLink>
            <NavLink onClick={() => handleScrollToSection('projects')} className={isDarkMode ? 'dark' : ''}>{navbarTranslations.projects}</NavLink>
            <NavLink onClick={() => handleScrollToSection('contact')} className={isDarkMode ? 'dark' : ''}>{navbarTranslations.contact}</NavLink>
          </NavLinks>
          <ThemeSwitcher setIsDarkMode={setIsDarkMode} />
          <LanguageSwitcher currentLang={currentLang} setLang={setLang} />
          <HamburgerButton onClick={toggleMobileMenu} className={isDarkMode ? 'dark' : ''}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </HamburgerButton>
        </RightSection>
      </NavContent>

      {isMobileMenuOpen && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className={isDarkMode ? 'dark' : ''}
        >
          <NavLink onClick={() => handleScrollToSection('about')} className={isDarkMode ? 'dark' : ''}>{navbarTranslations.about}</NavLink>
          <NavLink onClick={() => handleScrollToSection('work-experience')} className={isDarkMode ? 'dark' : ''}>{navbarTranslations.workExperience}</NavLink>
          <NavLink onClick={() => handleScrollToSection('skills')} className={isDarkMode ? 'dark' : ''}>{navbarTranslations.skills}</NavLink>
          <NavLink onClick={() => handleScrollToSection('projects')} className={isDarkMode ? 'dark' : ''}>{navbarTranslations.projects}</NavLink>
          <NavLink onClick={() => handleScrollToSection('contact')} className={isDarkMode ? 'dark' : ''}>{navbarTranslations.contact}</NavLink>
          <ThemeSwitcher setIsDarkMode={setIsDarkMode} />
          <LanguageSwitcher currentLang={currentLang} setLang={setLang} />
        </MobileMenu>
      )}
    </NavContainer>
  );
}; 