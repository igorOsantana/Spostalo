import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Formik, Form, FormikHelpers } from 'formik';
import { firebaseAdmin } from '../../services/firebase_admin';
import { registerUser, TOKEN_KEY } from '../../services/auth';
import * as Yup from 'yup';

import InputWithValidate from '../../components/Input';
import Loader from '../../components/Loader';
import Avatar from '../../components/Avatar';
import ButtonDefault from '../../components/ButtonDefault';

import {
  Body,
  Container,
  ContentForm,
  AvatarContent,
  FileAvatar,
} from '../../styles/pages/register.styles';
import { GetServerSideProps } from 'next';

type RegisterFormProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const [avatarImg, setAvatarImg] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);

  const route = useRouter();

  const initialValues: RegisterFormProps = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const schemaRegisterValidation = Yup.object({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string()
      .min(6, 'Senha deve conter ao menos 6 caracteres')
      .required('Campo obrigatório'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Senhas distintas')
      .required('Campo obrigatório'),
  });

  const handleInputFile = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAvatarImg(e.currentTarget.files[0]);

  const handleHasNoAvatar = async () => {
    const response = await fetch('/icons/avatar-icon.png');
    const blob = await response.blob();
    return new File([blob], 'avatar-icon.png', blob);
  };

  const handleSubmit = async (
    { email, password, name: username }: RegisterFormProps,
    { setSubmitting }: FormikHelpers<RegisterFormProps>
  ) => {
    setIsLoading(true);
    const isCreated = await registerUser({
      email,
      password,
      username,
      photoFile: avatarImg ? avatarImg : await handleHasNoAvatar(),
    });
    setIsLoading(false);
    setSubmitting(false);
    if (isCreated) route.push('/home');
  };

  return (
    <Body>
      <Head>
        <title>Register | Spostalo</title>
      </Head>
      <Container>
        <ContentForm isLoading={isLoading}>
          <h1>Criar conta</h1>
          <p>Se cadastrar é simples e rápido.</p>
          <Formik
            initialValues={initialValues}
            validationSchema={schemaRegisterValidation}
            onSubmit={handleSubmit}
          >
            <Form>
              <InputWithValidate name='name' placeholder='Nome' />
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
              <InputWithValidate
                name='confirmPassword'
                placeholder='Confirmar senha'
                type='password'
              />
              <AvatarContent>
                <Avatar
                  image={
                    !!avatarImg
                      ? URL.createObjectURL(avatarImg)
                      : '/icons/avatar-icon.png'
                  }
                />
                <FileAvatar htmlFor='input-file'>
                  <span>{avatarImg ? 'Trocar foto' : 'Escolher foto'}</span>
                  <input
                    id='input-file'
                    type='file'
                    accept='image/*'
                    onChange={handleInputFile}
                  />
                </FileAvatar>
              </AvatarContent>
              <ButtonDefault type='submit'>
                {isLoading ? 'Salvando' : 'Salvar'}
              </ButtonDefault>
            </Form>
          </Formik>
        </ContentForm>
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
