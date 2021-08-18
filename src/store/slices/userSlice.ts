import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import { setToken } from '../../services/auth';
import {
  displayNotificationError,
  displayNotificationSuccess,
} from '../../services/notifications';

type SignProps = {
  email: string;
  password: string;
};

export type UserDataProps = {
  username: string;
  photoAvatar: string;
  level?: number;
  currentExperience?: number;
  challengesCompleted?: number;
};

type InitialStateProps = {
  isLogged: boolean;
  isLoading: boolean;
  msgError: string;
  userData: UserDataProps;
};

const initialState: InitialStateProps = {
  isLogged: false,
  isLoading: false,
  msgError: '',
  userData: {
    username: '',
    photoAvatar: '',
    level: 0,
    currentExperience: 0,
    challengesCompleted: 0,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: state => {
      state.isLogged = true;
    },
    logOut: state => {
      state.isLogged = false;
    },
    setLoading: state => {
      state.isLoading = true;
    },
    removeLoading: state => {
      state.isLoading = false;
    },
    setMsgError: (state, { payload }: PayloadAction<string>) => {
      state.msgError = payload;
    },
    removeMsgError: state => {
      state.msgError = '';
    },
    setDatauser: (state, { payload }: PayloadAction<UserDataProps>) => {
      state.userData = payload;
    },
  },
});

export const registerUser = ({ email, password }: SignProps) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading());
    dispatch(removeMsgError());
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application / json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json();

    if (response.status === 200 && response.ok) {
      displayNotificationSuccess('Conta criada com sucesso. Redirecionando...');
      const { idToken } = data;
      setToken(idToken);
      dispatch(logIn());
    } else if (response.status !== 200 && response.ok === false) {
      const {
        error: { message },
      } = data;
      switch (message) {
        case 'EMAIL_EXISTS':
          dispatch(setMsgError('Esse email já esta em uso'));
          break;
        case 'INVALID_EMAIL':
          dispatch(setMsgError('Email inválido'));
          break;
        default:
          displayNotificationError('Algo deu errado, tente mais tarde');
      }
    }
    dispatch(removeLoading());
  };
};

export const authUser = ({ email, password }: SignProps) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading());
    dispatch(removeMsgError());

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application / json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json();

    if (response.status === 200 && response.ok) {
      const { idToken } = data;
      setToken(idToken);
      dispatch(logIn());
    } else if (response.status !== 200 && response.ok === false) {
      const {
        error: { message },
      } = data;
      switch (message) {
        case 'EMAIL_NOT_FOUND':
          dispatch(setMsgError('Email ou senha incorretos'));
          break;
        case 'INVALID_EMAIL':
          dispatch(setMsgError('Email inválido'));
          break;
        default:
          dispatch(setMsgError('Algo deu errado, tente mais tarde'));
      }
    }
    dispatch(removeLoading());
  };
};

export const {
  logIn,
  logOut,
  setLoading,
  removeLoading,
  setMsgError,
  removeMsgError,
  setDatauser,
} = userSlice.actions;

export default userSlice.reducer;
