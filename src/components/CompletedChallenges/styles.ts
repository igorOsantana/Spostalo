import styled from 'styled-components';

export const CompletedChallengesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.colorGrayChallenges};

  font-weight: 500;
  > span {
    &:first-child {
      font-size: 1.25rem;
    }
    &:last-child {
      font-size: 1.5rem;
    }
  }
`;
