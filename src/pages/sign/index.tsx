import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {
  authUser,
  createUser,
  handleExistUser,
  isTokenValid,
  setToken,
  setUserID,
  TOKEN_KEY,
  USER_ID,
} from '../../services/auth';
import { signInWithGoogle } from '../../services/firebase';

import InputWithValidate from '../../components/Input';
import Loader from '../../components/Loader';

import {
  Body,
  Container,
  FormContent,
  ButtonsContainer,
  Button,
  BtnSignInGoogle,
} from '../../styles/pages/sign.styles';

type SignPageProps = {
  isLogged: boolean;
};

type SignInProps = {
  email: string;
  password: string;
};

export default function Sign({ isLogged }: SignPageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();

  const initialValues: SignInProps = {
    email: '',
    password: '',
  };

  const schemaSignInValidation = Yup.object({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string()
      .min(6, 'Senha deve conter ao menos 6 caracteres')
      .required('Campo obrigatório'),
  });

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

  const handleSubmit = async (
    { email, password }: SignInProps,
    { setSubmitting }: FormikHelpers<SignInProps>
  ) => {
    setIsLoading(true);
    const isAuth = await authUser({ email, password });
    setIsLoading(false);
    setSubmitting(false);
    if (isAuth) route.push('/home');
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
        <FormContent>
          <Formik
            initialValues={initialValues}
            validationSchema={schemaSignInValidation}
            onSubmit={handleSubmit}
          >
            <Form>
              <h1>Spostalo</h1>
              <p>
                Mantenha o <strong>foco</strong> nos seus objetivos com{' '}
                <strong>saúde</strong>
              </p>
              <InputWithValidate
                name='email'
                placeholder='Email'
                type='email'
              />
              <InputWithValidate
                name='password'
                placeholder='Senha'
                type='password'
              />
              <ButtonsContainer>
                <Link href='/register'>Não tenho conta</Link>
                <Button>{isLoading ? 'Entrando' : 'Entrar'}</Button>
              </ButtonsContainer>
              <BtnSignInGoogle type='button' onClick={handleAuthGoogle}>
                Entrar com <span>Google</span>
              </BtnSignInGoogle>
            </Form>
          </Formik>
        </FormContent>
      </Container>
      {isLoading && <Loader />}
    </Body>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const userToken = ctx.req.cookies[TOKEN_KEY];
  const userID = ctx.req.cookies[USER_ID];

  if (userToken && userID) {
    const authUserData = await isTokenValid(userToken);

    if (!authUserData.error)
      return {
        redirect: { permanent: false, destination: '/home' },
      };
  }

  return {
    props: {},
  };
};
