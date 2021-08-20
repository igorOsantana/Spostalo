import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Formik, Form, FormikHelpers } from 'formik';
import {
  isTokenValid,
  registerUser,
  TOKEN_KEY,
  USER_ID,
} from '../../services/auth';
import * as Yup from 'yup';

import InputWithValidate from '../../components/Input';
import Loader from '../../components/Loader';
import Avatar from '../../components/Avatar';

import {
  Body,
  Container,
  ContentForm,
  Button,
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

  const handleSubmit = async (
    { email, password, name: username }: RegisterFormProps,
    { setSubmitting }: FormikHelpers<RegisterFormProps>
  ) => {
    setIsLoading(true);
    const isCreated = await registerUser({
      email,
      password,
      username,
      photoFile: avatarImg
        ? avatarImg
        : new File(['/icons/avatar-icon.png'], 'Avatar image'),
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
              <Button type='submit'>{isLoading ? 'Salvando' : 'Salvar'}</Button>
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
    const authUserData = await isTokenValid(userToken);

    if (!authUserData.error)
      return {
        redirect: { permanent: false, destination: '/home' },
      };
  }

  return {
    props: {} as never,
  };
};
