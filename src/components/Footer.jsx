import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterSection = styled(motion.footer)`
  background-color: #f8f8f8;
  color: #111827;
  padding: 4rem 1rem;
  text-align: center;

  &.dark {
    background-color: #1a202c;
    color: #e2e8f0;
  }

  @media (min-width: 640px) {
    padding: 5rem 1rem;
  }
`;

const FooterContent = styled.div`
  max-width: 76rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const SocialLink = styled.a`
  color: #4b5563;
  transition: color 0.3s ease;

  .dark & {
    color: #a0aec0;
  }

  &:hover {
    color: #3b82f6;

    .dark & {
      color: #93c5fd;
    }
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const CopyrightText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;

  .dark & {
    color: #9ca3af;
  }
`;

export const Footer = () => {
  const isDarkMode = document.documentElement.classList.contains('dark');

  return (
    <FooterSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={isDarkMode ? 'dark' : ''}
    >
      <FooterContent>
        <SocialLinks
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SocialLink
            href="https://github.com/bekzodhuseinov"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={isDarkMode ? 'dark' : ''}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/bekzod-huseinov"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={isDarkMode ? 'dark' : ''}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/bekzod_huseinov"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className={isDarkMode ? 'dark' : ''}
          >
            <FaTwitter />
          </SocialLink>
        </SocialLinks>
        <CopyrightText className={isDarkMode ? 'dark' : ''}>&copy; {new Date().getFullYear()} Bekzod Huseinov. All rights reserved.</CopyrightText>
      </FooterContent>
    </FooterSection>
  );
}; 