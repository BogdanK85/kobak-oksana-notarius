import { styled } from 'styled-components';

export const ProgressContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 7px;
  background: rgba(204, 204, 204, 0);
`;

export const ProgressBar = styled.div`
  height: 4px;
  background: var(--accent-blue);
  border-radius: 3px;
`;
