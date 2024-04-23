import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const FooterWraper = styled.footer`
  border-top: 1px solid var(--line);
  padding: 1em 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5em;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;
export const Column = styled.div`
  width: 100%;
`;
export const ColumnTitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 0.5em;
`;

export const SiteLink = styled.a`
  display: block;
  width: fit-content;
  text-decoration: none;
  margin: 0.2em 0;
  &:hover {
    opacity: 0.9;
  }
`;
export const SiteRouterLink = styled(Link)`
  display: block;
  width: fit-content;
  text-decoration: none;
  margin: 0.2em 0;
  &:hover {
    opacity: 0.9;
  }
`;

export const Attribution = styled.div`
  display: flex;
  align-items: center;
  margin: 2em 0;
  margin-top: 0;
  gap: 7px;
`;
