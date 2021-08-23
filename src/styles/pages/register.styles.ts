import styled from 'styled-components';
import { fadeInRight, shake } from '../animations';

type LoadingProps = {
  isLoading: boolean;
};

export const Body = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  background-image: url(${'/images/background_sign-register.jpg'});
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
  animation: ${fadeInRight} 0.3s ease;
`;

export const ContentForm = styled.div<LoadingProps>`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: min-content;
  width: 100%;
  max-width: 700px;
  border: 1px solid ${({ theme: { colors } }) => colors.colorGrayLine};
  border-radius: 5px;
  background: ${({ theme: { colors } }) => colors.background};
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

    button {
      align-self: flex-end;
      background-color: ${({ theme: { colors } }) => colors.colorBlueTwitter};
    }
  }
`;

export const AvatarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 1rem;
`;

export const FileAvatar = styled.label`
  width: 60%;
  height: min-content;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  color: white;
  background-color: ${({ theme: { colors } }) => colors.colorRed};
  font-size: min(1rem, 5vw);
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
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

export const ErrorOnSubmit = styled.span`
  color: red;
  font-size: min(1.25rem, 4vw);
  font-weight: bold;
  text-align: center;
  margin: 0.5rem 0 auto;
  animation: ${shake} 0.5s linear;
`;
