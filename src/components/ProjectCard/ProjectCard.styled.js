import { styled } from 'styled-components';
import { NormalLink } from 'styles/GlobalStyles';

export const Card = styled.article`
  background: var(--bg-card);
  backdrop-filter: blur(22px);
  border-radius: 6px;
  overflow: hidden;
`;

export const CardImg = styled.img`
  aspect-ratio: 4/3;
`;

export const CardInfo = styled.div`
  padding: 1em;
  line-height: 1.2;
`;

export const CardTitle = styled.h2`
  color: var(--hearing-color);
`;

export const CardDescription = styled.small`
  color: var(--para-gray-color);
`;
export const CardTechnologies = styled.p`
  color: var(--para-gray-color);
`;

export const CardProject = styled.p`
  font-weight: 700;
  color: var(--hearing-color);
  margin-top: 3px;
  margin-left: 50px;
`;

export const CardLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1em;
`;

export const CardLink = styled(NormalLink)`
  padding: 0.5em 1em;
  width: 100%;
  text-aline: center;
  justify-content: center;
  font-size: 0.8em;
  border: 1px solid var(--accent-blue);
  color: var(--accent-blue);
  background: none;
  position: relative;
  overflow: hidden;
  &:hover::after {
    left: 220%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -64px;
    width: 32px;
    height: 64px;
    background-color: red;
    opacity: 0.5;
    filter: blur(10px);
    transform: rotate(30deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

export const CardLinkLive = styled(NormalLink)`
  padding: 0.5em 1em;
  width: 100%;
  text-align: center;
  justify-content: center;
  font-size: 0.8em;
  border: 1px solid var(--accent-blue);
  color: #fff;
  background: var(--accent-blue);
  position: relative;
  overflow: hidden;
  &:hover::after {
    left: 220%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -64px;
    width: 32px;
    height: 64px;
    background-color: red;
    opacity: 0.5;
    filter: blur(10px);
    transform: rotate(30deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;
