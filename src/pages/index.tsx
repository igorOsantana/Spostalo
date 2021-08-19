import Head from 'next/head';
import Link from 'next/link';

import {
  Body,
  Container,
  FormContent,
  ButtonsContainer,
  Button,
} from '../styles/pages/sign.styles';

export default function Sign() {
  return (
    <Body>
      <Head>
        <title>Sign | Spostalo</title>
      </Head>
      <Container>
        <FormContent>
          <h1>Spostalo</h1>
          <p>
            Mantenha o <strong>foco</strong> nos seus objetivos com{' '}
            <strong>saúde</strong>
          </p>
          <div>
            <Link href='/register'>Não tenho conta</Link>
            <Button>Entrar</Button>
          </div>
        </FormContent>
      </Container>
    </Body>
  );
}
