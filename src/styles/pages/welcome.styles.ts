import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  width: 100vw;
  height: 100vh;
  background-color: #2e3138;
  opacity: 0.99;
`;

export const BackgroundImage = styled.div`
  flex: 1;
  background-image: url('/images/welcome_background.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 800px) {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.3;
  }
`;

export const Body = styled.div`
  flex: 1;
  max-width: 992px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  color: #dedbd2;

  h1 {
    margin: 1rem 0;
    font-size: 3rem;
    color: ${({ theme: { colors } }) => colors.colorRed};
  }

  h2 {
    white-space: nowrap;
  }

  p {
    margin: 1rem auto;

    a {
      margin-left: 0.5rem;
      white-space: nowrap;
      font-size: 0.75rem;
      color: ${({ theme: { colors } }) => colors.colorBlueTwitter};
    }
  }

  strong {
    color: ${({ theme: { colors } }) => colors.colorRed};
  }

  button {
    align-self: flex-end;
    margin-top: 2rem;

    @media (max-width: 800px) {
      align-self: center;
    }
  }
`;
