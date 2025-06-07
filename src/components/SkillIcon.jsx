import React from 'react';
import styled from 'styled-components';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaDatabase,
  FaServer,
  FaShareAlt,
  FaCogs,
  FaBox,
  FaBolt,
  FaCloud,
  FaBug,
  FaTerminal,
  FaChartBar,
  FaUsers,
  FaLightbulb,
  FaHammer,
  FaRegFileCode,
  FaPlusSquare
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiGraphql, SiMongodb, SiPostgresql, SiNestjs, SiPrisma, SiSupabase, SiExpress, SiJest, SiCypress, SiJira, SiConfluence, SiStyledcomponents } from 'react-icons/si';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.75rem;
  color: ${props => props.theme === 'dark' ? '#60A5FA' : '#2563EB'};
  transition: all 0.3s ease;

  svg {
    width: 1.75rem;
    height: 1.75rem;
  }
`;

const SkillIcon = ({ name, theme = 'light' }) => {
  const icons = {
    // Frontend
    'React.js': <FaReact />,
    'Next.js': <SiNextdotjs />,
    'TypeScript': <SiTypescript />,
    'Tailwind CSS': <SiTailwindcss />,
    'Redux': <SiRedux />,
    'GraphQL': <SiGraphql />,
    'Styled Components': <SiStyledcomponents />,

    // Backend
    'Node.js': <FaNodeJs />,
    'Express': <SiExpress />,
    'MongoDB': <SiMongodb />,
    'PostgreSQL': <SiPostgresql />,
    'REST APIs': <FaServer />,
    'NestJS': <SiNestjs />,
    'Prisma': <SiPrisma />,
    'Supabase': <SiSupabase />,

    // Languages
    'Python': <FaPython />,
    'Java': <FaJava />,
    'HTML': <FaHtml5 />,
    'CSS': <FaCss3Alt />,
    'JavaScript': <FaJsSquare />,

    // Tools & Others
    'Git': <FaGitAlt />,
    'Docker': <FaDocker />,
    'AWS': <FaAws />,
    'Jest': <SiJest />,
    'Cypress': <SiCypress />,
    'Figma': <FaFigma />,
    'Jira': <SiJira />,
    'Confluence': <SiConfluence />,

    // Generic Fallbacks / Concepts
    'Problem Solving': <FaLightbulb />,
    'Team Leadership': <FaUsers />,
    'Agile Methodologies': <FaBolt />,
    'Technical Writing': <FaRegFileCode />,
    'Project Management': <FaCogs />,
    'Client Communication': <FaShareAlt />,
    'Analytisches Denken': <FaChartBar />,
    'Kreativität': <FaLightbulb />,
    'Teamfähigkeit': <FaUsers />,
    'Kommunikationsfähigkeit': <FaShareAlt />,

  };

  return (
    <IconWrapper theme={theme}>
      {icons[name] || <FaPlusSquare /> /* Default icon if not found */}
    </IconWrapper>
  );
};

export default SkillIcon; 