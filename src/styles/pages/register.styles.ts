import styled from 'styled-components';
import { shake } from '../animations';

type LoadingProps = {
  isLoading: boolean;
};

export const Body = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  background-image: url(${'/images/background_register_light.jpg'});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  padding: 1rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentForm = styled.div<LoadingProps>`
  margin: 2rem;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: min-content;
  width: 100%;
  max-width: 700px;
  border: 1px solid ${({ theme: { colors } }) => colors.colorGrayLine};
  border-radius: 5px;
  -webkit-background-color: ${({ theme: { colors } }) =>
    colors.colorWhiteAlpha};
  background-color: ${({ theme: { colors } }) => colors.colorWhiteAlpha};
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;

  h1 {
    white-space: nowrap;
    align-self: flex-start;
    margin-bottom: 1rem;
    font-size: max(1.5rem, 2vw);
  }

  p {
    font-size: min(1.25rem, 4vw);
    text-align: center;
    margin: 0 0 1rem 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
  }
`;

export const AvatarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 1rem;
`;

export const ImageAvatar = styled.img`
  width: min(100vw * 0.2, 15vh);
  height: min(100vw * 0.2, 15vh);
  border-radius: 50%;
`;

export const FileAvatar = styled.label`
  width: 60%;
  height: min-content;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  color: ${({ theme: { colors } }) => colors.colorWhite};
  background-color: ${({ theme: { colors } }) => colors.text};
  font-size: min(1rem, 5vw);
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.colorTitle};
  }

  &:active {
    transform: translateY(5px);
  }

  input[type='file'] {
    display: none;
  }
`;

export const Button = styled.button`
  align-self: flex-end;
  margin: 1rem 0;
  padding: 0.5rem 2rem;
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.colorBlueTwitter};
  color: #fff;
  transition: all 0.3s;

  &:hover {
    filter: opacity(0.8);
  }

  &:active {
    transform: translateY(5px);
  }
`;

export const ErrorOnSubmit = styled.span`
  color: red;
  font-size: min(1.25rem, 4vw);
  font-weight: bold;
  text-align: center;
  margin: 0.5rem 0 auto;
  animation: ${shake} 0.5s linear;
`;
