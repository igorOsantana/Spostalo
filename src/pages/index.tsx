import Head from 'next/head';
import Link from 'next/link';

import {
  Body,
  Container,
  Form,
  Input,
  Button,
} from '../styles/pages/sign.styles';

export default function Sign() {
  return (
    <Body>
      <Head>
        <title>Sign | Spostalo</title>
      </Head>
      <Container>
        <Form>
          <h1>Spostalo</h1>
          <p>
            Mantenha o <strong>foco</strong> nos seus objetivos com{' '}
            <strong>saúde</strong>
          </p>
          <Input placeholder='Email' type='email' />
          <Input placeholder='Senha' type='password' />
          <div>
            <Link href='/register'>Não tenho conta</Link>
            <Button>Entrar</Button>
          </div>
        </Form>
      </Container>
    </Body>
  );
}
