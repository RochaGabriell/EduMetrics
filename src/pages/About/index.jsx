import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};;
  margin: 1rem 0;
`;

function About() {
  return (
    <AboutContainer>
      <Title>Sobre EduMetrics</Title>
      <Description>
        O EduMetrics é um sistema abrangente desenvolvido para medir e analisar o desempenho de professores, disciplinas e cursos da instituição IFPI - Campus Corrente.
      </Description>
      <Description>
        Nossa missão é fornecer insights valiosos e soluções baseadas em dados para melhorar a experiência educacional na IFPI.
      </Description>
    </AboutContainer>
  );
}

export default About;