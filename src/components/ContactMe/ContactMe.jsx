import gmail from '../../assets/social/gmail.png';
import linkedin from '../../assets/social/linkedin.png';
import facebook from '../../assets/social/facebook.png';
import contact from '../../assets/contact.png';
import telegram from '../../assets/social/telegram.png';
import viber from '../../assets/social/viber.png';
import whatsapp from '../../assets/social/whatsapp.png';
import { Container } from 'styles/GlobalStyles';
import {
  Heading,
  IconLink,
  IconsBox,
  IconsWrap,
  Image,
  ImageWrap,
  Text,
  TextWrap,
  Wrapper,
} from './ContactMe.styled';

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
  {
    url: telegram,
    linkTo: 'https://t.me/@BogdanKobak',
    altText: 'telegram',
  },
  {
    url: viber,
    linkTo: 'viber://chat?number=+380977496885',
    altText: 'viber',
  },
  {
    url: whatsapp,
    linkTo: 'https://api.whatsapp.com/send?phone=38099746885',
    altText: 'whatsapp',
  },
];

const container = {
  hidden: { opacity: 0, y: 300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
  transition: 0.5,
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const ContactMe = () => {
  return (
    <Container>
      <Wrapper
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TextWrap>
          <Heading>Contact Me</Heading>

          <Text>
            I'm currently seeking frontend internship opportunities at startups.
            Do you have any openings? Please feel free to reach out to me
          </Text>

          <IconsWrap variants={container} initial="hidden" animate="visible">
            <IconsBox>
              {contactIcons.map((icon, i) => (
                <IconLink
                  href={icon.linkTo}
                  key={i}
                  variants={item}
                  target="_blank"
                >
                  <img src={icon.url} alt={icon.altText} />
                </IconLink>
              ))}
            </IconsBox>
          </IconsWrap>
          <p>Tel: +380977496885</p>
        </TextWrap>
        <ImageWrap>
          <Image src={contact} alt="contact" />
        </ImageWrap>
      </Wrapper>
    </Container>
  );
};

export default ContactMe;
