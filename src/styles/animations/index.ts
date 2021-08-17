import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0%{ opacity: 0; filter: blur(10px) }
  25%{ opacity: 0.3; filter: blur(8px) }
  50%{ opacity: 0.5; filter: blur(4px) }
  75%{ opacity: 0.8; filter: blur(2px) }
  100%{ opacity: 1; filter: blur(0px) }
`;

export const fadeOut = keyframes`
  0%{ opacity: 0; filter: blur(0px) }
  25%{ opacity: 0.3; filter: blur(2px) }
  50%{ opacity: 0.5; filter: blur(4px) }
  75%{ opacity: 0.8; filter: blur(8px) }
  100%{ opacity: 1; filter: blur(10px) }
`;

export const fadeInLeft = keyframes`
  0%{ opacity: 0; transform: translateX(-10vw); filter: blur(10px) }
  25%{ opacity: 0.3; transform: translateX(-7vw); filter: blur(8px) }
  50%{ opacity: 0.5; transform: translateX(-5vw); filter: blur(4px) }
  75%{ opacity: 0.8; transform: translateX(-2vw); filter: blur(2px) }
  100%{ opacity: 1; transform: translateX(0vw); filter: blur(0px) }
`;

export const fadeInRight = keyframes`
  0%{ opacity: 0; transform: translateX(10vw); filter: blur(10px) }
  25%{ opacity: 0.3; transform: translateX(7vw); filter: blur(8px) }
  50%{ opacity: 0.5; transform: translateX(5vw); filter: blur(4px) }
  75%{ opacity: 0.8; transform: translateX(2vw); filter: blur(2px) }
  100%{ opacity: 1; transform: translateX(0vw); filter: blur(0px) }
`;

export const fadeInUp = keyframes`
  0%{ opacity: 0; transform: translateY(-10vw); filter: blur(10px) }
  25%{ opacity: 0.3; transform: translateY(-7vw); filter: blur(8px) }
  50%{ opacity: 0.5; transform: translateY(-5vw); filter: blur(4px) }
  75%{ opacity: 0.8; transform: translateY(-2vw); filter: blur(2px) }
  100%{ opacity: 1; transform: translateY(0vw); filter: blur(0px) }
`;

export const fadeInDown = keyframes`
  0%{ opacity: 0; transform: translateY(10vw); filter: blur(10px) }
  25%{ opacity: 0.3; transform: translateY(7vw); filter: blur(8px) }
  50%{ opacity: 0.5; transform: translateY(5vw); filter: blur(4px) }
  75%{ opacity: 0.8; transform: translateY(2vw); filter: blur(2px) }
  100%{ opacity: 1; transform: translateY(0vw); filter: blur(0px) }
`;

export const fadeOutUp = keyframes`
  0%{ opacity: 1; transform: translateY(0vw); filter: blur(0px) }
  25%{ opacity: 0.8; transform: translateY(-2vw); filter: blur(2px) }
  50%{ opacity: 0.5; transform: translateY(-5vw); filter: blur(4px) }
  75%{ opacity: 0.3; transform: translateY(-7vw); filter: blur(8px) }
  100%{ opacity: 0; transform: translateY(10vw); filter: blur(10px) }
`;

export const shake = keyframes`
  0%{ transform: translateX(-10px); }
  10%{ transform: translateX(10px); }
  20%{ transform: translateX(-10px); }
  30%{ transform: translateX(10px); }
  40%{ transform: translateX(-10px); }
  50%{ transform: translateX(10px); }
  60%{ transform: translateX(-10px); }
  70%{ transform: translateX(10px); }
  80%{ transform: translateX(-10px); }
  90%{ transform: translateX(10px); }
  100%{ transform: translateX(0px); }
`;
