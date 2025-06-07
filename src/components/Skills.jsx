import React from 'react';
import styled from 'styled-components';
import SkillIcon from './SkillIcon';

const SkillsSection = styled.section`
  padding: 4rem 1rem;
  background-color: ${props => props.theme === 'dark' ? '#1F2937' : '#F9FAFB'};
  transition: background-color 0.3s ease;

  @media (min-width: 640px) {
    padding: 6rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: ${props => props.theme === 'dark' ? '#F9FAFB' : '#111827'};

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme === 'dark' ? '#D1D5DB' : '#4B5563'};

  @media (min-width: 640px) {
    font-size: 1.25rem;
    margin-bottom: 4rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillCategory = styled.div`
  background-color: ${props => props.theme === 'dark' ? '#374151' : '#FFFFFF'};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme === 'dark' ? '#F9FAFB' : '#111827'};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme === 'dark' ? '#4B5563' : '#F3F4F6'};
  border-radius: 9999px;
  font-size: 0.875rem;
  color: ${props => props.theme === 'dark' ? '#F9FAFB' : '#374151'};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme === 'dark' ? '#6B7280' : '#E5E7EB'};
  }
`;

export const Skills = ({ translations }) => {
  const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';

  if (!translations || !translations.technical || !translations.technical.categories) {
    return null;
  }

  return (
    <SkillsSection theme={theme} id="skills">
      <Container>
        <Title theme={theme}>{translations.title}</Title>
        <Subtitle theme={theme}>{translations.subtitle}</Subtitle>
        <SkillsGrid>
          {Object.entries(translations.technical.categories).map(([key, category]) => (
            <SkillCategory key={key} theme={theme}>
              <CategoryTitle theme={theme}>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, index) => (
                  <SkillItem key={index} theme={theme}>
                    <SkillIcon name={skill} theme={theme} />
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
          {translations.soft && (
            <SkillCategory theme={theme}>
              <CategoryTitle theme={theme}>{translations.soft.title}</CategoryTitle>
              <SkillsList>
                {translations.soft.skills.map((skill, index) => (
                  <SkillItem key={index} theme={theme}>
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          )}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
}; 