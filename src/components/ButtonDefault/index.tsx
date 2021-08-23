import { Container, ButtonProps } from './styles';

const ButtonDefault: React.FC<ButtonProps> = props => {
  return <Container {...props}>{props.children}</Container>;
};

export default ButtonDefault;
