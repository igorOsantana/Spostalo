import styled, { keyframes } from 'styled-components';

const fadeInDown = keyframes`
  0%{
    opacity: 0;
    transform: blur(10px);
  }
  10%{
    opacity: 0.1;
    transform: blur(9px);
  }
  20%{
    opacity: 0.2;
    transform: blur(8px);
  }
  30%{
    opacity: 0.3;
    transform: blur(7px);
  }
  40%{
    opacity: 0.4;
    transform: blur(6px);
  }
  50%{
    opacity: 0.5;
    transform: blur(5px);
  }
  60%{
    opacity: 0.6;
    transform: blur(4px);
  }
  70%{
    opacity: 0.7;
    transform: blur(3px);
  }
  80%{
    opacity: 0.8;
    transform: blur(2px);
  }
  90%{
    opacity: 0.9;
    transform: blur(1px);
  }
  100%{
    opacity: 1;
    transform: blur(0px);
  }
`;

export const ButtonConfigNotSelected = styled.button`
  height: 2rem;
  width: 2rem;

  border: ${props => props.theme.colors.background} solid 1px;
  border-radius: 50%;
  outline: none;

  background: ${props => props.theme.colors.background};
  background-image: ${({ title }) => {
    if (title === 'light') {
      return 'url("/icons/configLight.png")';
    } else {
      return 'url("/icons/configDark.png")';
    }
  }};
  background-repeat: no-repeat;
  background-size: 1.3rem;
  background-position: center;

  padding: 1rem;

  transition: all 0.4s;

  &:hover {
    filter: invert(20%);
  }

  &:active {
    transform: translateY(5px);
  }
`;
export const ButtonConfigIsSelected = styled.button`
  height: 2rem;
  width: 2rem;

  border: ${props => props.theme.colors.background} solid 1px;
  border-radius: 50%;
  outline: none;

  background: ${props => props.theme.colors.background};
  background-image: ${({ title }) =>
    title === 'light'
      ? 'url("/icons/configLight.png")'
      : 'url("/icons/configDark.png")'};
  background-repeat: no-repeat;
  background-size: 1.3rem;
  background-position: center;

  padding: 1rem;

  transition: all 0.4s;
  filter: invert(20%);
`;

export const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: 1.25rem;
  opacity: 0;

  min-width: 20rem;

  margin: 1rem;

  background: ${props => props.theme.colors.colorGrayLine};
  border-radius: 3px;

  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);

  animation: ${fadeInDown} 0.3s ease forwards;

  ul {
    list-style-type: none;
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    max-height: 50px;
    cursor: pointer;
    transition: all 0.2s;

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme: { colors } }) => colors.text};
    }

    &:hover {
      background-color: ${props => props.theme.colors.text};
      color: ${props => props.theme.colors.colorWhite};
    }
  }

  ul li label {
    flex-grow: 1;
    white-space: nowrap;
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.75rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.text};
`;
