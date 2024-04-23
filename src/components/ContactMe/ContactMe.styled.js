import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Wrapper = styled(motion.div)`
  min-height: 70vh;
  display: flex;
  justify-content: space-between;
  gap: 4em;
  padding: 2em 0;

  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

export const TextWrap = styled.div`
  padding: 2em 0;
  flex: 0.5;

  img {
    display: block;
    width: 48px;
    height: 48px;
  }
`;
export const IconsWrap = styled(motion.div)`
  display: flex;
  width: 250px;
  flex-wrap: wrap;
  margin: 1em 0;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 250px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 2em;
  }
`;
export const IconsBox = styled(motion.div)`
  display: flex;
  gap: 25px;
  width: 250px;
  flex-wrap: wrap;
  margin: 1em;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 250px;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
    align-items: center;
    margin: 1em;
  }
`;

export const IconLink = styled(motion.a)`
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.25);
  }
`;

export const Heading = styled.h1`
  font-size: 2em;
  line-height: 1.4;
  margin-bottom: 0.6em;
`;

export const Text = styled.p`
  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const ImageWrap = styled.div`
  flex: 0.5;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  max-width: 480px;
  margin: 0 auto;
`;
