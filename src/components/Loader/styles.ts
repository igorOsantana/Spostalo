import styled, { keyframes } from 'styled-components';

export type LoaderProps = {
  small?: boolean;
};

const rotate = keyframes`
  to { transform: rotate( 360deg ); }
`;

export const Container = styled.div<LoaderProps>`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  background-color: rgba(175, 175, 175, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    border: ${({ small }) => (small ? '2px' : '5px')} solid white;
    border-left-color: ${({ theme: { colors } }) => colors.colorRed};
    border-radius: 50%;
    width: ${({ small }) => (small ? '1.25rem' : '3rem')};
    height: ${({ small }) => (small ? '1.25rem' : '3rem')};
    animation: ${rotate} 1s linear infinite;
  }
`;
