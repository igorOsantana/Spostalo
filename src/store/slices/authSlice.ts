import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import { setToken } from '../../services/auth';

type SignProps = {
  email: string;
  password: string;
};

const initialState = {
  isLogged: false,
  isLoading: false,
  msgError: '',
};

const playerSlice = createSlice({
  name: 'player',
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
          dispatch(setMsgError('Algo deu errado, tente mais tarde'));
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
} = playerSlice.actions;

export default playerSlice.reducer;
