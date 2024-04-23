import { styled } from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 300px;
  height: auto;
`;

export const ButtonContainer = styled.div`
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  font-size: 26px;
  color: gray;
  cursor: pointer;
  margin: 0 10px;
`;
