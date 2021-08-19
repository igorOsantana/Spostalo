import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { database } from '../../services/firebase';
import { setToken, setUserID, TOKEN_KEY } from '../../services/auth';
import { signInWithGoogle } from '../../services/firebase';

import Loader from '../../components/Loader';

import {
  Body,
  Container,
  Form,
  Input,
  Button,
  BtnSignInGoogle,
} from '../../styles/pages/sign.styles';

type CreateUserProps = {
  userId: string;
  email: string;
  username: string;
  photoURL: string;
};

type SignProps = {
  isLogged: boolean;
};

export default function Sign({ isLogged }: SignProps) {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();

  const handleExistUser = async (userId: string) => {
    const existUser = await database.ref().child('users').child(userId).get();
    return existUser.exists();
  };

  const createUser = ({
    userId,
    email,
    username,
    photoURL,
  }: CreateUserProps) => {
    database
      .ref()
      .child('users/' + userId)
      .set({
        email,
        username,
        photoURL,
        level: 0,
        currentExperience: 0,
        challengesCompleted: 0,
      });
  };

  const handleAuthGoogle = () => {
    signInWithGoogle().then(async response => {
      setIsLoading(true);
      const { uid, displayName, photoURL, email } = response.user;

      const idToken = await response.user.getIdToken();
      setToken(idToken);
      setUserID(uid);

      const hasUser = await handleExistUser(uid);
      if (hasUser) {
        route.push('/home');
        return;
      }
      createUser({
        userId: uid,
        email: email,
        username: displayName,
        photoURL: photoURL,
      });
      route.push('/home');
    });
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLogged) route.push('/home');
  }, []);

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
          <BtnSignInGoogle type='button' onClick={handleAuthGoogle}>
            Entrar com <span>Google</span>
          </BtnSignInGoogle>
        </Form>
      </Container>
      {isLoading && <Loader />}
    </Body>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const userToken = ctx.req.cookies[TOKEN_KEY];

  if (userToken)
    return { props: {}, redirect: { permanent: true, destination: '/home' } };

  return {
    props: {
      isLogged: true,
    },
  };
};
