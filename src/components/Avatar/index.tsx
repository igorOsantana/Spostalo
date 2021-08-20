import { Container, Image } from './styles';

type AvatarProps = {
  image?: string;
};

const Avatar: React.FC<AvatarProps> = ({ image }) => {
  return <Container urlAvatar={image} />;
};

export default Avatar;
