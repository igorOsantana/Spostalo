import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${props => props.theme.colors.colorTitle};

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${props => props.theme.colors.colorWhite};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    @media (max-width: 450px) {
      font-size: 5rem;
    }

    span {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      min-height: 7rem;

      &:first-child {
        border-right: 1px solid ${props => props.theme.colors.background};
      }
      &:last-child {
        border-left: 1px solid ${props => props.theme.colors.background};
      }
    }
  }
  > span {
    font-size: 6.25rem;
    margin: 0 0.25rem;
  }
`;

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${props => props.theme.colors.colorBlue};
  color: #fff;

  font-size: 1.25rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &:not(:disabled):hover {
    filter: brightness(90%);
  }
  &:disabled {
    background: ${props => props.theme.colors.colorWhite};
    color: ${props => props.theme.colors.text};
    cursor: not-allowed;
  }
`;

export const CountdownButtonActive = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  font-size: 1.25rem;
  font-weight: 600;

  transition: all 0.3s ease;

  background-color: ${props => props.theme.colors.colorWhite};
  color: ${props => props.theme.colors.colorTitle};

  &:not(:disabled):hover {
    filter: brightness(90%);
  }
`;
