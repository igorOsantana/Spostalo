import styled from 'styled-components';

type AvatarProps = {
  urlAvatar: string;
};

export const Container = styled.div<AvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(100vw * 0.2, 12vh);
  height: min(100vw * 0.2, 12vh);
  border-radius: 50%;
  background-image: url(${({ urlAvatar }) => urlAvatar});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Image = styled.img``;
