import { styled } from 'styled-components';

export const Skill = styled.div``;

export const SkillImage = styled.img`
  aspect-ratio: 1;
  max-width: 48px;
  margin: 0 auto;
`;

export const SkillTitle = styled.h3`
  font-family: 'Anta', sans-serif;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.8em;
  }
`;
