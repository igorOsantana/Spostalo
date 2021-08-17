import { InputHTMLAttributes } from 'react';
import { Field, ErrorMessage, useField } from 'formik';

import { Container } from './styles';

type InputCustomProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputCustomProps> = props => {
  const [, meta] = useField(props as any);
  return (
    <Container hasError={!!meta.error && meta.touched}>
      <Field {...props} />
      <ErrorMessage component='span' name={props.name} />
    </Container>
  );
};

export default Input;
