import styled from 'styled-components';

export const HeaderExperienceBar = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 3rem;
  justify-content: space-between;

  span {
    font-size: 1rem;
  }
  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.colors.colorGrayLine};
    margin: 0 1.5rem;
    position: relative;

    > div {
      height: 4px;
      border-radius: 4px;
      background: ${props => props.theme.colors.colorGreen};
    }
  }
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
  font-size: 0.8rem;
  font-weight: bold;
`;
