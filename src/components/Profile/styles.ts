import styled from 'styled-components';
import { flip } from '../../styles/animations';

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & > :first-child {
    animation: ${flip} 0.3s ease 0.5s;
  }

  & > :last-child {
    position: absolute;
    top: 0;
    right: -10px;
  }
`;

export const ProfileData = styled.div`
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
`;
