import styled from 'styled-components';

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

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
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
