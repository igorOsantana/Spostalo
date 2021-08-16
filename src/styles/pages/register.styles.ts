import styled from 'styled-components';

export const Body = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  background-image: url(${'/images/background_register.jpg'});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  padding: 2.5rem 2rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: min-content;
  width: 100%;
  max-width: 700px;
  border: 1px solid ${({ theme: { colors } }) => colors.colorGrayLine};
  border-radius: 5px;
  background-color: #fff;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  opacity: 0.9;

  h1 {
    white-space: nowrap;
    align-self: flex-start;
    margin-bottom: 1rem;
    font-size: max(1.5rem, 2vw);
  }

  p {
    font-size: min(1.25rem, 4vw);
    font-weight: bold;
    text-align: center;
    margin: 0 0 1rem 0;
    color: ${({ theme: { colors } }) => colors.colorRed};
  }

  label {
    width: 90%;
    padding: 0.75rem 1rem;
    margin: 1rem;
    border-radius: 5px;
    color: #fff;
    background-color: ${({ theme: { colors } }) => colors.text};
    font-size: min(1rem, 5vw);
    text-align: center;
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
  }
`;

export const Input = styled.input`
  padding: 0.5rem 0.75rem;
  margin: 0.25rem 0;
  width: 90%;
  height: 3rem;
  background-color: transparent;
  border: 2px solid ${({ theme: { colors } }) => colors.colorGrayLine};
  border-radius: 5px;
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
  align-self: flex-end;
  margin: 1rem 5%;
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
