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
            <ColumnTitle>Контактна інформація</ColumnTitle>
            <SiteLink
              href="https://github.com/BogdanK85"
              rel="noreferrer"
              target="_blank"
            >
              м. Стебник вул. Грушевського ...
            </SiteLink>
            <SiteLink
              href="https://www.linkedin.com/in/bogdan-kobak-421773296/"
              rel="noreferrer"
              target="_blank"
            >
              Email@пошта.ком
            </SiteLink>
            <SiteLink
              href="https://djinni.co/q/ec8a29cb7e/"
              rel="noreferrer"
              target="_blank"
            >
              Tel: +380677778709
            </SiteLink>
          </Column>
          <Column>
            <ColumnTitle>Швидкі посилання</ColumnTitle>
            <SiteRouterLink to="/">Головна</SiteRouterLink>
            <SiteRouterLink to="/about">Про мене</SiteRouterLink>
            <SiteRouterLink to="/projects">Нотаріальні послуги</SiteRouterLink>
            <SiteRouterLink to="/education">
              Сертифікати / Відгуки клієнтів
            </SiteRouterLink>
            <SiteRouterLink to="/contact">Контакти</SiteRouterLink>
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
