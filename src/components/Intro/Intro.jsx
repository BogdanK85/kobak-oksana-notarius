import { Container } from '../../styles/GlobalStyles';
import me from '../../assets/me.jpg';
import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import {
  AboutMeBtn,
  Bio,
  Description,
  Icon,
  IconsWrapper,
  MainTitle,
  MyImg,
  Title,
  Wrapper,
} from './Intro.styled';

const Intro = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 1500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Wrapper>
          <MyImg src={me} alt="Bohdan Kobak" loading="lazy" />
          <Description>
            <Title>Приватний нотаріус</Title>
            <MainTitle>Кобак Оксана Володимирівна</MainTitle>
            <Title>Професійні нотаріальні послуги</Title>
            <Bio>
              Надаємо усі види нотаріальних послуг у м. Дрогобич та м. Стебник.
            </Bio>
            <Bio>ДОСВІД - ЦЕ НАША ПЕРЕВАГА!</Bio>
            <AboutMeBtn to="/contact">Консультація</AboutMeBtn>
            <IconsWrapper>
              <Icon href="https://github.com/BogdanK85" target="_blank">
                <BsGithub />
              </Icon>
              <Icon
                href="https://www.linkedin.com/in/bogdan-kobak-421773296/"
                target="_blank"
              >
                <BsLinkedin />
              </Icon>
            </IconsWrapper>
          </Description>
        </Wrapper>
      </motion.div>
    </Container>
  );
};

export default Intro;
