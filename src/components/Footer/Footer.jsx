import { AiFillHeart } from 'react-icons/ai';
const { Container } = require('styles/GlobalStyles');
const {
  FooterWraper,
  Row,
  Column,
  ColumnTitle,
  SiteLink,
  SiteRouterLink,
  Attribution,
} = require('./Footer.styled');

const Footer = () => {
  return (
    <Container>
      <FooterWraper>
        <Row>
          <Column>
            <ColumnTitle>Socials</ColumnTitle>
            <SiteLink
              href="https://github.com/BogdanK85"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </SiteLink>
            <SiteLink
              href="https://www.linkedin.com/in/bogdan-kobak-421773296/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </SiteLink>
            <SiteLink
              href="https://djinni.co/q/ec8a29cb7e/"
              rel="noreferrer"
              target="_blank"
            >
              Djinni
            </SiteLink>
          </Column>
          <Column>
            <ColumnTitle>Quick Links</ColumnTitle>
            <SiteRouterLink to="/">Home</SiteRouterLink>
            <SiteRouterLink to="/about">About</SiteRouterLink>
            <SiteRouterLink to="/projects">Projects</SiteRouterLink>
            <SiteRouterLink to="/education">Education</SiteRouterLink>
            <SiteRouterLink to="/contact">Contact</SiteRouterLink>
          </Column>
        </Row>
      </FooterWraper>
      <Attribution>
        Made with <AiFillHeart color="red" /> by{' '}
        <a href="https://github.com/BogdanK85" rel="noreferrer" target="_blank">
          Bohdan Kobak
        </a>
      </Attribution>
    </Container>
  );
};

export default Footer;
