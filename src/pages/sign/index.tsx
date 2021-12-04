import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Formik, Form, FormikHelpers } from 'formik';
import { firebaseAdmin } from '../../services/firebase_admin';
import * as Yup from 'yup';
import {
  authUser,
  createUser,
  handleExistUser,
  setToken,
  TOKEN_KEY,
} from '../../services/auth';
import { signInWithGoogle } from '../../services/firebase';

import InputWithValidate from '../../components/Input';
import Loader from '../../components/Loader';
import ButtonDefault from '../../components/ButtonDefault';

import {
  Body,
  Container,
  FormContent,
  ButtonsContainer,
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

      const hasUser = await handleExistUser(uid);
      if (hasUser) {
        setIsLoading(false);
        route.push('/home');
        return;
      }
      createUser({
        userId: uid,
        email: email,
        username: displayName,
        photoFile: photoURL,
      });
      setIsLoading(false);
      route.push('/home');
    });
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
              <h1>Entrar</h1>
              <BtnSignInGoogle type='button' onClick={handleAuthGoogle}>
                com <span>Google</span>
              </BtnSignInGoogle>
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
                <ButtonDefault>
                  {isLoading ? 'Entrando' : 'Entrar'}
                </ButtonDefault>
              </ButtonsContainer>
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

  if (userToken) {
    try {
      await firebaseAdmin.auth().verifyIdToken(userToken);

      return {
        redirect: { permanent: false, destination: '/home' },
      };
    } catch (error) {
      return {
        props: {} as never,
      };
    }
  }

  return {
    props: {} as never,
  };
};
