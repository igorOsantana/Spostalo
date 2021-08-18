import styled from 'styled-components';

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }
  > div {
    margin-left: 1.5rem;
    > strong {
      font-size: 1.25rem;
      font-weight: 600;
      text-transform: capitalize;
      color: ${props => props.theme.colors.colorTitle};
    }
    > p {
      font-size: 1rem;
      margin-top: 0.5rem;
      > img {
        margin-right: 0.5rem;
      }
    }
  }

  & > :last-child {
    position: absolute;
    top: 0;
    right: -10px;
  }
`;
