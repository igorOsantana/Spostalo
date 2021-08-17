import styled from 'styled-components';
import { shake } from '../../styles/animations';

type ErrorProps = {
  hasError: boolean;
};

export const Container = styled.div<ErrorProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  > input {
    padding: 0.5rem 0.75rem;
    margin: 0.25rem 0;
    height: 3rem;
    background-color: transparent;
    border: 2px solid
      ${({ hasError, theme: { colors } }) =>
        hasError ? colors.colorRed : colors.colorGrayLine};
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
  }

  > span {
    align-self: flex-end;
    font-size: min(0.75rem, 3vw);
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.colorRed};
    animation: ${shake} 0.5s ease;
  }
`;
