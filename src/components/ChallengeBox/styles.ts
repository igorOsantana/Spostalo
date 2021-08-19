import styled, { keyframes } from 'styled-components';

const btnHoverAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

export const ChallengeBoxContainer = styled.div`
  height: 100%;

  background: ${props => props.theme.colors.colorWhite};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
    }
  }
`;

export const ChallengeActive = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  header {
    color: #5297e8;
    font-weight: 600;
    font-size: 1.5rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.colorGrayLine};
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    strong {
      font-weight: 600;
      font-size: 2rem;
      color: ${props => props.theme.colors.colorTitle};
      margin: 1.5rem 0 1rem;
    }
    p {
      line-height: 1.5;
    }
  }
  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button {
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid transparent;
      border-radius: 5px;

      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.3s ease;

      svg {
        font-size: 1.25rem;
      }

      &:hover svg {
        animation: ${btnHoverAnimation} 1s ease forwards;
      }
    }
  }
`;
export const ChallengeFailedButton = styled.button`
  background: ${props => props.theme.colors.colorRed};
`;
export const ChallengeSucceededButton = styled.button`
  background: ${props => props.theme.colors.colorGreen};
`;
