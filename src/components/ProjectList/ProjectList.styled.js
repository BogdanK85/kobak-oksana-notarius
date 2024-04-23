import { styled } from 'styled-components';

export const ProjectsWrapper = styled.div`
  margin: 2em 0;
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
