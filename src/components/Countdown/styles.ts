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
      font-size: min(5rem, 10vh);
    }

    span {
      flex: 1;
      padding: 0 10px;

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
  color: ${props => props.theme.colors.colorTextHighlight};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;
  &:not(:disabled):hover {
    background: ${props => props.theme.colors.colorBlueDark};
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

  transition: background-color 0.2s;

  background-color: ${props => props.theme.colors.colorWhite};
  color: ${props => props.theme.colors.colorTitle};

  &:not(:disabled):hover {
    background: ${props => props.theme.colors.colorRed};
    color: ${props => props.theme.colors.colorTextHighlight};
  }
`;
