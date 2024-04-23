import { styled } from 'styled-components';

export const Header = styled.header`
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: sticky;
  top: 0;
  background-color: var(--bg-blur);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
`;

export const BurgerMenu = styled.button`
  font-size: 1.5em;
  background-color: transparent;
  border: none;
  outline: none;
  justify-content: center;
  aling-items: center;
  font-weight: 200;
  display: none;
  color: var(--text-color);

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const MobileNavLinks = styled.div`
  list-style-type: none;
  position: fixed;
  top: 12vh;
  left: 0;
  width: 100%;
  z-index: 1000;
  min-weight: 88vh;
  backdrop-color: var(--bg-color);
  backdrop-filter: blur(10px);
  display: none;
  padding: 0 5%;

  &.open {
    display: block;
    background-color: var(--bg-color);
    height: 100vh;
  }

  li a {
    margin-right: 0;
    padding: 1em 0;
    border-bottom: 1px solid var(--line);
    color: var(--link-color);
    text-decoration: none;
    display: block;

    :hover {
      color: var(--link-active-color);
    }
  }

  li a.active {
    color: var(--link-active-color);
  }

  li a.active::after {
    width: 100%;
    background-color: var(--linc-active-color);
  }

  @media screen and (min-width: 768px) {
    display: none;

    &.open {
      display: none;
    }
  }
`;
