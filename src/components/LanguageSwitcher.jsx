import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LanguageSwitcherContainer = styled(motion.div)`
  display: flex;
  gap: 0.5rem;

  @media (min-width: 640px) {
    top: 1.5rem;
    right: 5rem;
  }
`;

const LanguageButton = styled.button`
  background-color: white;
  color: #1a202c;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #f0f4f8;
    border-color: #cbd5e0;
  }

  &.active {
    background-color: #3b82f6;
    color: white;
    border-color: #3b82f6;
  }

  .dark & {
    background-color: #2d3748;
    color: #e2e8f0;
    border-color: #4a5568;

    &:hover {
      background-color: #4a5568;
      border-color: #6b7280;
    }

    &.active {
      background-color: #3b82f6;
      color: white;
      border-color: #3b82f6;
    }
  }
`;

export const LanguageSwitcher = ({ currentLang, setLang }) => {
  return (
    <LanguageSwitcherContainer
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LanguageButton
        onClick={() => setLang('en')}
        className={currentLang === 'en' ? 'active' : ''}
      >
        EN
      </LanguageButton>
      <LanguageButton
        onClick={() => setLang('de')}
        className={currentLang === 'de' ? 'active' : ''}
      > 
        DE
      </LanguageButton>
    </LanguageSwitcherContainer>
  );
}; 