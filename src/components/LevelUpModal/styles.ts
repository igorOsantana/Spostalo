import styled from 'styled-components';
import { fadeInUp } from '../../styles/animations';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: ${({ theme: { title, colors } }) =>
    title === 'light' ? colors.colorTextHighlight : colors.colorWhite};
  width: 100%;
  max-width: 600px;
  padding: 2rem 3rem;
  margin: auto 1rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
  animation: ${fadeInUp} 0.4s linear;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${props => props.theme.colors.colorGrayChallenges};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }
  strong {
    font-size: 2.25rem;
    color: ${props => props.theme.colors.colorGrayChallenges};
  }
  p {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.colorGrayChallenges};
    margin-top: 0.25rem;
  }
  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    border: 0;
    background-color: transparent;
    color: ${props => props.theme.colors.colorGrayChallenges};
    font-size: 2rem;
  }
`;
