import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled(motion.section)`
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

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
  max-width: 64rem;
  margin: 0 auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .dark & {
    background-color: #2d3748;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 14rem;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;

  .dark & {
    color: #ffffff;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  flex-grow: 1;

  .dark & {
    color: #cbd5e0;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: #e0f2fe;
  color: #2563eb;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;

  .dark & {
    background-color: #1e3a8a;
    color: #93c5fd;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

export const Projects = ({ translations }) => {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const projects = [
    {
      title: translations.project1.title,
      description: translations.project1.description,
      image: translations.project1.image,
      tags: ['React', 'Next.js', 'Nest.js', 'Node.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'JavaScript'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: translations.project2.title,
      description: translations.project2.description,
      image: translations.project2.image,
      tags: ['React.js', 'JavaScript', 'Styled components', 'HTML', 'CSS'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: translations.project3.title,
      description: translations.project3.description,
      image: translations.project3.image,
      tags: ['React.js', 'Firebase', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: translations.project4.title,
      description: translations.project4.description,
      image: translations.project4.image,
      tags: ['Python', 'ASP.NET', 'SQL Server'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: translations.project5.title,
      description: translations.project5.description,
      image: translations.project5.image,
      tags: ['Svelte', 'GraphQL', 'Prisma'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: translations.project6.title,
      description: translations.project6.description,
      image: translations.project6.image,
      tags: ['Django', 'Python', 'React Native'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <ProjectsSection
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
          <Subtitle className={isDarkMode ? 'dark' : ''}>
            {translations.subtitle}
          </Subtitle>
        </SectionHeader>

        <ProjectsGrid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className={isDarkMode ? 'dark' : ''}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <CardContent>
                <ProjectTitle className={isDarkMode ? 'dark' : ''}>{project.title}</ProjectTitle>
                <ProjectDescription className={isDarkMode ? 'dark' : ''}>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex} className={isDarkMode ? 'dark' : ''}>{tag}</Tag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  <ProjectLink
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                  <ProjectLink
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </ProjectLink>
                </ProjectLinks>
              </CardContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
}; 