import Head from 'next/head';
import Link from 'next/link';
import ButtonDefault from '../components/ButtonDefault';

import {
  Container,
  BackgroundImage,
  Body,
  Description,
} from '../styles/pages/welcome.styles';

export default function Welcome() {
  return (
    <Container>
      <Head>
        <title>Bem-vindo | Spostalo</title>
      </Head>
      <Body>
        <Description>
          <h1>Spostalo</h1>
          <h2>Técnica de pomodoro</h2>
          <p>
            Uma técnica desenvolvida para{' '}
            <strong>aumentar sua produtividade</strong>, que basea-se em
            gerenciar sua concentração e foco durante seus estudos ou trabalho.
            <a
              href='https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro'
              target='_blank'
            >
              Saiba mais
            </a>
          </p>
          <p>
            Inicie um ciclo e <strong>foque</strong> no que importa durante o
            tempo determinado. Ao fim do ciclo, complete o{' '}
            <strong>desafio</strong> e faça um breve descanço antes de começar
            outro ciclo.
          </p>
          <ButtonDefault>
            <Link href='/sign'>Conhecer</Link>
          </ButtonDefault>
        </Description>
        <BackgroundImage />
      </Body>
    </Container>
  );
}
