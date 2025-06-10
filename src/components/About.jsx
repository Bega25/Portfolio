import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutSection = styled(motion.section)`
  padding: 5rem 1rem;
  background-color: #ffffff;
  color: #111827;
  
  &.dark {
    background-color: #1a202c;
    color: #e2e8f0;
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
  color: #111827;
  
  .dark & {
    color: #ffffff;
  }

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5563;

  .dark & {
    color: #a0aec0;
  }
`;

const DescriptionBox = styled(motion.div)`
  max-width: 56rem;
  margin: 0 auto 5rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  .dark & {
    background-color: #2d3748;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const DescriptionText = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #374151;

  .dark & {
    color: #e2e8f0;
  }
`;

const TimelineContainer = styled.div`
  max-width: 5xl;
  margin: 0 auto;
`;

const TimelineTitle = styled(motion.h3)`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;
  color: #1f2937;

  .dark & {
    color: #ffffff;
  }
`;

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;

  &::before {
    content: '';
    position: absolute;
    left: 1.25rem;
    top: 0;
    bottom: 0;
    width: 0.25rem;
    background-color: #d1d5db;
    border-radius: 0.25rem;

    .dark & {
      background-color: #4a5568;
    }
  }

  @media (min-width: 768px) {
    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled(motion.div)`
  margin-bottom: 2.5rem;
  display: flex;
  position: relative;
  width: 100%;
  padding-left: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: 1.125rem;
    top: 0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    background-color: #3b82f6;
    border-radius: 50%;
    z-index: 1;
  }

  @media (min-width: 768px) {
    &:nth-child(odd) {
      flex-direction: row-reverse;
      text-align: right;
      padding-left: 0;
      padding-right: 2rem;

      &::before {
        left: auto;
        right: calc(50% - 0.375rem);
      }
    }

    &:nth-child(even) {
      flex-direction: row;
      text-align: left;
      padding-left: 2rem;
      padding-right: 0;

      &::before {
        left: calc(50% - 0.375rem);
      }
    }
    
    width: 50%;
    align-self: ${({ index }) => (index % 2 === 0 ? 'flex-end' : 'flex-start')};
  }
`;

const ItemContent = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 100%;

  .dark & {
    background-color: #2d3748;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const ItemHeader = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;

  .dark & {
    color: #ffffff;
  }
`;

const ItemPeriod = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.75rem;

  .dark & {
    color: #a0aec0;
  }
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.5rem;

  .dark & {
    color: #e2e8f0;
  }
`;

const EducationContainer = styled.div`
  margin-top: 5rem;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const EducationCard = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: center;

  .dark & {
    background-color: #2d3748;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const Degree = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;

  .dark & {
    color: #ffffff;
  }
`;

const School = styled.p`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 0.5rem;

  .dark & {
    color: #a0aec0;
  }
`;

const Period = styled.p`
  font-size: 0.875rem;
  color: #6b7280;

  .dark & {
    color: #9ca3af;
  }
`;

export const About = ({ translations }) => {
  const isDarkMode = document.documentElement.classList.contains('dark');

  return (
    <AboutSection
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={isDarkMode ? 'dark' : ''}
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title className={isDarkMode ? 'dark' : ''}>{translations.title}</Title>
          <Subtitle className={isDarkMode ? 'dark' : ''}>{translations.subtitle}</Subtitle>
        </SectionHeader>

        <DescriptionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={isDarkMode ? 'dark' : ''}
        >
          <DescriptionText className={isDarkMode ? 'dark' : ''}>
            {translations.description}
          </DescriptionText>
        </DescriptionBox>

        <TimelineContainer>
          <TimelineTitle
            id="work-experience"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={isDarkMode ? 'dark' : ''}
          >
            {translations.experience.title}
          </TimelineTitle>
          <TimelineWrapper className={isDarkMode ? 'dark' : ''}>
            {translations.experience.items.map((item, index) => (
              <TimelineItem
                key={index}
                index={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <ItemContent className={isDarkMode ? 'dark' : ''}>
                  <ItemHeader className={isDarkMode ? 'dark' : ''}>{item.role} @ {item.company}</ItemHeader>
                  <ItemPeriod className={isDarkMode ? 'dark' : ''}>{item.period}</ItemPeriod>
                  <ItemDescription className={isDarkMode ? 'dark' : ''}>{item.description}</ItemDescription>
                </ItemContent>
              </TimelineItem>
            ))}
          </TimelineWrapper>
        </TimelineContainer>

        <EducationContainer>
          <TimelineTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={isDarkMode ? 'dark' : ''}
          >
            {translations.education.title}
          </TimelineTitle>
          <EducationGrid>
            {translations.education.items.map((item, index) => (
              <EducationCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={isDarkMode ? 'dark' : ''}
              >
                <Degree className={isDarkMode ? 'dark' : ''}>{item.degree}</Degree>
                <School className={isDarkMode ? 'dark' : ''}>{item.school}</School>
                <Period className={isDarkMode ? 'dark' : ''}>{item.period}</Period>
              </EducationCard>
            ))}
          </EducationGrid>
        </EducationContainer>
      </div>
    </AboutSection>
  );
}; 