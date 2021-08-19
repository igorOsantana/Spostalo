import styled from 'styled-components';

export const Body = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  background-image: url(${'/images/background_sign_light.jpg'});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  flex: 1;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: min-content;
  width: 100%;
  max-width: 700px;
  border: 1px solid ${({ theme: { colors } }) => colors.colorGrayLine};
  border-radius: 5px;
  background: ${({ theme: { colors } }) => colors.colorWhiteAlpha};
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;

  h1 {
    white-space: nowrap;
    margin-bottom: 1rem;
    font-size: max(2rem, 3vw);
    color: ${({ theme: { colors } }) => colors.colorTitle};
  }

  p {
    text-align: center;
    font-size: min(1.25rem, 4vw);
    margin: 0 0 1rem 0;

    strong {
      color: ${({ theme: { colors } }) => colors.colorRed};
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 1rem;

    a {
      font-size: max(1rem, 1vw);
      color: ${({ theme: { colors } }) => colors.colorTitle};
      text-decoration: underline;
    }
  }
`;

export const Input = styled.input`
  padding: 0.5rem 0.75rem;
  margin: 0.25rem 0;
  background-color: transparent;
  border: 2px solid ${({ theme: { colors } }) => colors.colorGrayLine};
  border-radius: 5px;
  width: 90%;
  height: 3rem;
  outline: none;
  transition: all 0.3s;

  &::placeholder {
    font-size: min(1rem, 5vw);
    color: ${({ theme: { colors } }) => colors.text};
    text-transform: capitalize;
    opacity: 0.7;
    transition: all 0.3s;
  }

  &:focus {
    border-color: ${({ theme: { colors } }) => colors.text};

    &::placeholder {
      font-weight: bold;
    }
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.colorRed};
  color: #fff;
  transition: all 0.3s;

  &:hover {
    filter: opacity(0.8);
  }

  &:active {
    transform: translateY(5px);
  }
`;

export const BtnSignInGoogle = styled.button`
  margin: 1rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  -webkit-box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
  font-size: min(0.9rem, 3vw);
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.text};
  background-color: ${({ theme: { colors } }) => colors.colorWhiteAlpha};
  transition: all 0.3s ease;

  span {
    background: linear-gradient(
      90deg,
      #4285f4 20%,
      #ea4335 25%,
      #fabc07 50%,
      #4285f4 63%,
      #34a853 84%,
      #ea4335 85%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    transform: translateY(3px);
  }
`;
