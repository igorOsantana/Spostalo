import React, { useState } from 'react';
import Head from 'next/head';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import InputWithValidate from '../../components/Input';

import {
  Body,
  Container,
  ContentForm,
  Button,
  AvatarContent,
  ImageAvatar,
  FileAvatar,
  ErrorOnSubmit,
} from '../../styles/pages/register.styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { registerUser } from '../../store/slices/authSlice';

type RegisterFormProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const [avatarImg, setAvatarImg] = useState<File>();
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const msgError = useAppSelector(state => state.auth.msgError);

  const dispatch = useAppDispatch();

  const initialValues: RegisterFormProps = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const schemaRegisterValidation = Yup.object({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email().required('Campo obrigatório'),
    password: Yup.string()
      .min(6, 'Senha deve conter ao menos 6 caracteres')
      .required('Campo obrigatório'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Senhas distintas')
      .required('Campo obrigatório'),
  });

  const handleInputFile = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAvatarImg(e.currentTarget.files[0]);

  const handleSubmit = (
    values: RegisterFormProps,
    { setSubmitting }: FormikHelpers<RegisterFormProps>
  ) => {
    dispatch(registerUser(values));
    setSubmitting(false);
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
              {msgError.length > 0 && <ErrorOnSubmit>{msgError}</ErrorOnSubmit>}
              <AvatarContent>
                <ImageAvatar
                  src={
                    !!avatarImg
                      ? URL.createObjectURL(avatarImg)
                      : '/icons/avatar-icon.png'
                  }
                  alt='Avatar profile'
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
              <Button type='submit'>Salvar</Button>
            </Form>
          </Formik>
        </ContentForm>
      </Container>
    </Body>
  );
}
