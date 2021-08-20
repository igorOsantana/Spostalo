import { Container, LoaderProps } from './styles';

const Loader: React.FC<LoaderProps> = props => {
  return (
    <Container {...props}>
      <div />
    </Container>
  );
};

export default Loader;
