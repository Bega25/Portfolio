import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactSection = styled(motion.section)`
  padding: 5rem 1rem;
  background-color: #f8f8f8;
  color: #111827;

  &.dark {
    background-color: #1a202c;
    color: #ffffff;
  }

  @media (min-width: 640px) {
    padding: 7rem 1rem;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5563;

  &.dark {
    color: #a0aec0;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 64rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .dark & {
    background-color: #2d3748;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  @media (min-width: 640px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const SocialLinks = styled(motion.div)`
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .dark & {
    background-color: #2d3748;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  @media (min-width: 640px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const SocialTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1f2937;
  text-align: center;

  .dark & {
    color: #ffffff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;

  @media (min-width: 640px) {
    gap: 1.5rem;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background-color: #2563eb;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (min-width: 640px) {
    width: 3.5rem;
    height: 3.5rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoIcon = styled.div`
  background-color: #3b82f6;
  color: white;
  padding: 0.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.2rem;
  flex-shrink: 0;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media (min-width: 640px) {
    margin-right: 0.5rem;
    min-width: 3rem;
    min-height: 3rem;
    padding: 0.75rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    margin-right: 1rem;
  }
`;

const InfoText = styled.div`
  font-size: 1.125rem;
  color: #374151;
  flex-grow: 1;
  word-break: break-word;
  flex-shrink: 1;
  min-width: 0;

  .dark & {
    color: #e2e8f0;
  }
`;

const InfoLabel = styled.p`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const InfoValue = styled.p`
  font-size: 0.9rem;
`;

const EmailButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #3b82f6;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  margin-top: auto;
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    margin-left: 0.75rem;
  }
`;

export const Contact = ({ translations }) => {
  return (
    <ContactSection
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={document.documentElement.classList.contains('dark') ? 'dark' : ''}
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title>{translations.title}</Title>
          <Subtitle className={document.documentElement.classList.contains('dark') ? 'dark' : ''}>
            {translations.subtitle}
          </Subtitle>
        </SectionHeader>

        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <InfoItem>
              <InfoIcon><FaMapMarkerAlt /></InfoIcon>
              <InfoText>
                <InfoLabel>{translations.location.label}</InfoLabel>
                <InfoValue>{translations.location.value}</InfoValue>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon><FaEnvelope /></InfoIcon>
              <InfoText>
                <InfoLabel>{translations.email.label}</InfoLabel>
                <InfoValue>{translations.email.value}</InfoValue>
              </InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon><FaPhone /></InfoIcon>
              <InfoText>
                <InfoLabel>{translations.phone.label}</InfoLabel>
                <InfoValue>{translations.phone.value}</InfoValue>
              </InfoText>
            </InfoItem>
            <EmailButton href={`mailto:${translations.email.value}`}>
              {translations.emailButton}
              <FaArrowRight />
            </EmailButton>
          </ContactInfo>

          <SocialLinks
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SocialTitle>{translations.social.title}</SocialTitle>
            <SocialIcons>
              <SocialIcon
                href={translations.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translations.social.github.label}
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon
                href={translations.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translations.social.linkedin.label}
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon
                href={translations.social.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translations.social.twitter.label}
              >
                <FaTwitter />
              </SocialIcon>
            </SocialIcons>
          </SocialLinks>
        </ContactContent>
      </div>
    </ContactSection>
  );
}; 