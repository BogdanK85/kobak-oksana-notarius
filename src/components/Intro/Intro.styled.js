import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: 2em 0;
  margin: 1em 0;
  min-height: 50vh;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 12em;
  }
`;

export const Description = styled.div`
  flex-grow: 1;
  position: relative;
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
  font-size: 1.3em;
  font-weight: 500;
  margin: 0.25em 0;
`;

export const Bio = styled.p`
  color: var(--other-para-color);
  font-family: 'Anta', sans-serif;
  font-size: 0.9em;
  margin-bottom: 1em;
`;

export const MyImg = styled.img`
  display: block;
  width: 70%;
  max-width: 160px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    margin-bottom: 1.5em;
    max-width: 150px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 4em;
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

const swipe = keyframes`
 0% {
    left: -64px;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  100% {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;
export const AboutMeBtn = styled(Link)`
  background-color: var(--accent-blue);
  font-family: 'Anta', sans-serif;
  text-decoration: none;
  border: none;
  text-aline: center;
  padding: 0.6em 1.2em;
  border-radius: 4px;
  color: white;
  display: flex;
  width: 180px;
  height: 46px;
  position: absolute;
  left: 0;
  top: 215px;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;
  @media screen and (max-width: 1440px) {
    right: 1px;
    width: 200px;
  }
  @media screen and (max-width: 768px) {
    right: 1px;
    top: 200px;
    width: 180px;
    padding: 0.1em 0.5em;
    height: 46px;
  }
  @media screen and (max-width: 500px) {
    top: 220px;
    width: 180px;
    padding: 0.1em 0.5em;
    height: 36px;
  }
  @media screen and (max-width: 457px) {
    top: 280px;
    width: 180px;
    padding: 0.1em 0.5em;
    height: 36px;
  }
  @media screen and (max-width: 437px) {
    top: 280px;
    width: 180px;
    padding: 0.1em 0.5em;
    height: 36px;
  }
  @media screen and (max-width: 390px) {
    right: 1px;
    top: 285px;
    width: 180px;
    padding: 0.1em 0.5em;
    height: 36px;
  }
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -64px;
    width: 32px;
    height: 64px;
    background-color: aqua;
    opacity: 0.5;
    filter: blur(10px);
    transform: rotate(40deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    animation-name: ${swipe};
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
`;
