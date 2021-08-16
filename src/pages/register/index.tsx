import {
  Body,
  Container,
  Form,
  Input,
  Button,
} from '../../styles/pages/register.styles';

export default function Register() {
  return (
    <Body>
      <Container>
        <Form>
          <h1>Criar conta</h1>
          <p>Se cadastrar é simples e rápido.</p>
          <Input placeholder='Nome' />
          <Input placeholder='Email' type='email' />
          <Input placeholder='Senha' type='password' />
          <Input placeholder='Confirmar senha' type='password' />
          <label htmlFor='input-file'>
            <span>Escolher foto de perfil</span>
            <Input id='input-file' placeholder='Foto de perfil' type='file' />
          </label>
          <Button>Salvar</Button>
        </Form>
      </Container>
    </Body>
  );
}
