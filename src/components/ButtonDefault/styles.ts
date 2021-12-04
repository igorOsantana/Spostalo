import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
};

export const Container = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: ${({ color, theme: { colors } }) =>
    color ? color : colors.colorRed};
  color: #fff;
  transition: all 0.3s;

  &:hover {
    filter: opacity(0.8);
  }

  &:active {
    transform: translateY(5px);
  }
`;
