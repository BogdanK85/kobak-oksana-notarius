import { styled } from 'styled-components';

export const SkillsWrapper = styled.div`
  margin: 2em auto;
  width: 90%;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
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
