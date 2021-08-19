import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  80% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  background-color: rgba(175, 175, 175, 0.5);
`;

export const Loading = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: ${load} 1.8s infinite ease-in-out;
  color: ${({ theme: { colors } }) => colors.colorBlueTwitter};
  font-size: min(0.5rem, 2vw);
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0) translate(-50%, -50%);
  animation-delay: -0.16s;

  &:before {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: ${load} 1.8s infinite ease-in-out;
    content: '';
    position: absolute;
    top: 0;

    left: -3.5em;
    animation-delay: -0.32s;
  }

  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: ${load} 1.8s infinite ease-in-out;
    content: '';
    position: absolute;
    top: 0;
    left: 3.5em;
  }
`;
