import { Container, HighlightedLink } from '../../styles/GlobalStyles';
import { motion } from 'framer-motion';
import me from '../../assets/me.jpg';
import resume from '../../assets/resume.pdf';
import { FiDownload } from 'react-icons/fi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import {
  Bio,
  Description,
  Icon,
  IconsWrapper,
  MainTitle,
  MyImg,
  Title,
  Wrapper,
} from './AboutMe.styled';

const AboutMe = () => {
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
            <MainTitle>Кобак Оксана Володимирівна</MainTitle>
            <Title>Приватний нотаріус</Title>
            <Bio>
              Наша нотаріальна контора має 25-річний стаж роботи та
              індивідуальний підхід до кожного клієнта. Напрацьований роками
              досвід нотаріусів та їх помічників дозволяє запропонувати найкращі
              рішення з питань купівлі-продажу та дарування нерухомості,
              спадкування, передання майна в заставу (іпотеку), посвідчення
              довіреностей, реєстрації юридичних осіб, оскільки ми якісно та
              професійно здійснюємо весь спектр нотаріальних послуг.
            </Bio>
            <HighlightedLink href={resume} target="_blank">
              Download Resume <FiDownload />
            </HighlightedLink>
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

export default AboutMe;
