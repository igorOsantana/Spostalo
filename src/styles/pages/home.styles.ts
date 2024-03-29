import styled from 'styled-components';
import { fadeIn } from '../animations';

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  min-height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: ${fadeIn} 0.6s linear forwards;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-content: center;

    > div {
      width: 90%;
      margin: 0 auto;
    }
  }

  @media (max-width: 800px) {
    section {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
