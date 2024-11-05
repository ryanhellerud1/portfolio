import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faHtml5, faCss3, faNodeJs, faGit, faPython, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faShield, faBrain } from '@fortawesome/free-solid-svg-icons';

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SkillCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  animation: ${fadeIn} 0.5s ease forwards;
  opacity: 0;
  animation-delay: ${props => props.delay}s;
`;

const SkillIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #0077b6;
`;

const SkillName = styled.h3`
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const skills = [
  { name: 'React', icon: faReact, description: 'Building interactive UIs' },
  { name: 'Vue.js', icon: faVuejs, description: 'Progressive JavaScript framework' },
  { name: 'JavaScript', icon: faJs, description: 'Dynamic web applications' },
  { name: 'HTML5', icon: faHtml5, description: 'Structuring web content' },
  { name: 'CSS3', icon: faCss3, description: 'Styling and animations' },
  { name: 'Node.js', icon: faNodeJs, description: 'Server-side JavaScript' },
  { name: 'Git', icon: faGit, description: 'Version control' },
  { name: 'Python', icon: faPython, description: 'Versatile programming language' },
  { name: 'Software Security', icon: faShield, description: 'Implementing secure coding practices' },
  { name: 'AI', icon: faBrain, description: 'Artificial Intelligence and Machine Learning' },
];

function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <SkillsContainer ref={ref}>
      <h2>My Skills</h2>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} delay={index * 0.1} style={{ animationPlayState: inView ? 'running' : 'paused' }}>
            <SkillIcon icon={skill.icon} />
            <SkillName>{skill.name}</SkillName>
            <SkillDescription>{skill.description}</SkillDescription>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
}

export default Skills;