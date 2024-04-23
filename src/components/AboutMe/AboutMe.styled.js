import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 2em 0;
  margin: 2em 0;
  min-height: 50vh;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 2em;
  }
`;

export const Description = styled.div`
  flex-grow: 1;
`;

export const MainTitle = styled.h1`
  font-size: 3em;
  line-height: 1.2;
  font-family: 'Anta', sans-serif;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 2.5em;
  }
`;

export const Title = styled.p`
  font-family: 'Anta', sans-serif;
  font-size: 1.2em;
  font-weight: 500;
`;

export const Bio = styled.p`
  color: var(--other-para-color);
  font-family: 'Anta', sans-serif;
  font-size: 0.9em;
  margin-bottom: 1em;
`;

export const MyImg = styled.img`
  display: block;
  width: 90%;
  max-width: 200px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    margin-bottom: 1.5em;
    max-width: 250px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 1em;
`;

export const Icon = styled.a`
  color: var(--para-color);
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4em;

  &:hover {
    color: var(--accent-blue);
  }
`;
