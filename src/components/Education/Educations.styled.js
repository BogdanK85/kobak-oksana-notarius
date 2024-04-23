import { styled } from 'styled-components';
import { keyframes } from 'styled-components';

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
export const TimeLine = styled.ul`
  position: relative;
  list-style-type: none;
  margin: 1em 0;
  padding: 1em;
`;

export const TimeLineItem = styled.li`
  padding: 0 0 2em 2em;
  border-left: 1px solid var(--accent-blue);
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -6px;
    padding: 4px;
    border-radius: 50%;
    background-color: var(--accent-blue);
    border: 2px solid var(--accent-blue);
  }
  p {
    opacity: 0.7;
  }

  ul {
    padding: 0 1em;
  }
`;

export const ButtonWrap = styled.button`
  position: absolute;
  list-style: none;
  right: 1px;
  top: -10px;
  z-index: 1;
`;

export const HighlightedLinkSertificate = styled.a`
  background-color: var(--accent-blue);
  font-family: 'Anta', sans-serif;
  text-decoration: none;
  padding: 0.6em 1.2em;
  border-radius: 4px;
  color: white;
  display: flex;
  width: 200px;
  height: 46px;
  position: absolute;
  right: 15px;
  top: 50px;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5em;

  @media screen and (max-width: 1440px) {
    right: 1px;
    width: 200px;
  }
  @media screen and (max-width: 620px) {
    right: 1px;
    top: 100px;
    width: 180px;
    padding: 0.1em 0.5em;
    height: 36px;
  }
  @media screen and (max-width: 437px) {
    right: 1px;
    top: 135px;
    width: 180px;
    padding: 0.1em 0.5em;
    height: 36px;
  }
  @media screen and (max-width: 390px) {
    right: 1px;
    top: 175px;
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

  svg {
    margin-left: 8px;
  }

  /* :hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  } */
`;

export const EducationHeader = styled.div`
display: flex;
gap: 50px;
align-items: center;
justify-content: space-between;
position: relative:
top: -10px;

h3 {
    font-weight: 400;
}

small {
    opacity: 0.9;
}

@media screen and ( max-width: 768px) {
    display: block;
}
`;

export const Knowlege = styled.p`
  color: var(--para-gray-color);
`;
export const SliderWrapper = styled.div`
  position: relative;
  margin: 2em 0;
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
`;
