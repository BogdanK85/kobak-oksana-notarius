import { styled } from 'styled-components';

export const Wrapper = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: space-between;
  padding: 2em 0;

  @media screen and (max-width: 768px) {
    display: block;
    text-aline: center;
  }
`;

export const TextWrapper = styled.div`
  padding: 2en 0;

  img {
    display: block;
    width: 48px;
    height: 48px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 2em;
  margin: 2em 0;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }
`;
export const IconLink = styled.a`
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.25);
  }
`;
export const Heading = styled.h1`
  font-size: 2em;
  line-height: 1.4;
  margin-bottom: 15px;
`;
export const Text = styled.p`
  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 25px;
  }
`;
export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  margin: 10px auto;
  margin-left: 10px;
`;
