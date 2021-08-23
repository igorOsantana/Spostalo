import Cookies from 'js-cookie';
import { auth, database, storage } from './firebase';
import {
  displayNotificationError,
  displayNotificationSuccess,
} from './notifications';

type SignProps = {
  email: string;
  password: string;
};

type CreateUserProps = {
  userId: string;
  email: string;
  username: string;
  photoFile: File | string;
};

type RegisterUserProps = {
  email: string;
  password: string;
  username: string;
  photoFile?: File;
};

export const TOKEN_KEY = 'spostalo-token';
export const USER_ID = 'spostalo-userID';

export const getToken = () => Cookies.get(TOKEN_KEY);

export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token);
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};

export const isTokenValid = async (token: string) => {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ idToken: token }),
    }
  );
  return await response.json();
};

export const handleExistUser = async (userId: string) => {
  const existUser = await database.ref().child('users').child(userId).get();
  return existUser.exists();
};

export const createUser = async ({
  userId,
  email,
  username,
  photoFile,
}: CreateUserProps) => {
  const avatar =
    !!photoFile && typeof photoFile === 'string' ? photoFile : null;

  await database
    .ref()
    .child('users/' + userId)
    .set({
      email,
      username,
      photoUrl: avatar,
      level: 0,
      currentExperience: 0,
      challengesCompleted: 0,
    });

  if (typeof photoFile !== 'string')
    await storage.ref().child(`images/users/${userId}/avatar`).put(photoFile);

  console.log('TYPE OF = ', typeof photoFile);
  console.log('AVATAR = ', photoFile);
};

export const registerUser = async ({
  email,
  password,
  username,
  photoFile,
}: RegisterUserProps) => {
  try {
    const response = await auth.createUserWithEmailAndPassword(email, password);
    const userID = response.user.uid;

    await createUser({ userId: userID, email, username, photoFile });
    displayNotificationSuccess('Conta criada com sucesso.');

    await authUser({ email, password });
    return true;
  } catch (error) {
    const { message } = error;
    console.log('ERROR = ', message);
    switch (message) {
      case 'The email address is already in use by another account.':
        displayNotificationError('Esse email já está em uso');
        break;
      case 'INVALID_EMAIL':
        displayNotificationError('Email inválido');
        break;
      default:
        displayNotificationError('Algo deu errado, tente mais tarde');
    }
    return false;
  }
};

export const authUser = async ({ email, password }: SignProps) => {
  try {
    const response = await auth.signInWithEmailAndPassword(email, password);
    const idToken = await response.user.getIdToken();

    setToken(idToken);

    displayNotificationSuccess('Acesso liberado. Redirecionando...');
    return true;
  } catch (error) {
    const { message } = error;

    switch (message) {
      case 'EMAIL_NOT_FOUND':
        displayNotificationError('Email ou senha incorretos');
      case 'INVALID_EMAIL':
        displayNotificationError('Email inválido');
      default:
        displayNotificationError('Algo deu errado, tente mais tarde');
    }
    return false;
  }
};
