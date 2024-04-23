import freelancer from '../../assets/freelancer.jpg';
import gmail from '../../assets/social/gmail.png';
import linkedin from '../../assets/social/linkedin.png';
import facebook from '../../assets/social/facebook.png';
import { Container } from 'styles/GlobalStyles';
import {
  Wrapper,
  TextWrapper,
  Heading,
  Text,
  IconsWrapper,
  IconLink,
  Image,
} from './Frelance.styled';

const contactIcons = [
  {
    url: linkedin,
    linkTo: 'https://www.linkedin.com/in/bogdan-kobak-421773296/',
    altText: 'linkedin',
  },
  {
    url: gmail,
    linkTo: 'mailto:kobakbogdan@gmail.com',
    altText: 'gmail',
  },
  {
    url: facebook,
    linkTo: 'https://www.facebook.com/profile.php?id=100051679776767',
    altText: 'facebook',
  },
];

const Freelance = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Heading>Looking for a Freelance Front-End Developer?</Heading>
          <Text>
            I'm a Front-End Developer ready to take on freelance challenges.
            Let's team up and create something extraordinary together!
          </Text>
          <IconsWrapper>
            {contactIcons.map((icon, i) => (
              <IconLink href={icon.linkTo} key={i} target="_blank">
                <img src={icon.url} alt={icon.altText} />
              </IconLink>
            ))}
          </IconsWrapper>
        </TextWrapper>
        <Image src={freelancer} alt="freelance" />
      </Wrapper>
    </Container>
  );
};

export default Freelance;
