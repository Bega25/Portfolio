import { motion } from 'framer-motion';
import styled from 'styled-components';

// Styled Components for Hero Section
const HeroSection = styled(motion.section)`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  overflow: hidden;
  text-align: center;
  background-color: #ffffff;
  color: #111827;

  &.dark {
    background-color: #1a202c;
    color: #e2e8f0;
  }

  @media (min-width: 640px) {
    padding: 6rem 1rem;
  }
`;

const HeroContainer = styled(motion.div)`
  max-width: 76rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  z-index: 10;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;

  .dark & {
    color: #ffffff;
  }

  @media (min-width: 640px) {
    font-size: 3.5rem;
  }
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  color: #4b5563;

  .dark & {
    color: #a0aec0;
  }

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
`;

const HeroDescription = styled(motion.p)`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.125rem;
  line-height: 1.75rem;
  opacity: 0.8;
  margin-bottom: 3rem;
  color: #374151;

  .dark & {
    color: #cbd5e0;
  }

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const CallToAction = styled(motion.a)`
  display: inline-block;
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
  }
`;

const StatsContainer = styled(motion.div)`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
  color: #111827;

  .dark & {
    color: #e2e8f0;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
`;

const StatNumber = styled.p`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.875rem;
  opacity: 0.7;
  animation: bounce 2s infinite;
  color: #4b5563;

  .dark & {
    color: #a0aec0;
  }

  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-10px); }
  }
`;

const Blob = styled(motion.div)`
  position: absolute;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.6;
  z-index: 0;

  .dark & {
    background: rgba(99, 102, 241, 0.1);
  }
`;

export const Hero = ({ translations }) => {
  return (
    <HeroSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={document.documentElement.classList.contains('dark') ? 'dark' : ''}
    >
      <Blob
        style={{ width: '300px', height: '300px', top: '-50px', left: '-50px' }}
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className={document.documentElement.classList.contains('dark') ? 'dark' : ''}
      />
      <Blob
        style={{ width: '400px', height: '400px', bottom: '-100px', right: '-100px' }}
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className={document.documentElement.classList.contains('dark') ? 'dark' : ''}
      />

      <HeroContainer
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <HeroTitle className={document.documentElement.classList.contains('dark') ? 'dark' : ''}>{translations.title}</HeroTitle>
        <HeroSubtitle className={document.documentElement.classList.contains('dark') ? 'dark' : ''}>{translations.subtitle}</HeroSubtitle>
        <HeroDescription className={document.documentElement.classList.contains('dark') ? 'dark' : ''}>{translations.description}</HeroDescription>
        <CallToAction
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {translations.cta}
        </CallToAction>

        <StatsContainer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className={document.documentElement.classList.contains('dark') ? 'dark' : ''}
        >
          <StatItem>
            <StatNumber>{translations.stats.projects}</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{translations.stats.experience}</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{translations.stats.clients}</StatNumber>
            <StatLabel>Happy Clients</StatLabel>
          </StatItem>
        </StatsContainer>
      </HeroContainer>

      <ScrollIndicator
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, 10, 0], opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className={document.documentElement.classList.contains('dark') ? 'dark' : ''}
      >
        Scroll Down <span role="img" aria-label="down arrow">⬇️</span>
      </ScrollIndicator>
    </HeroSection>
  );
}; 