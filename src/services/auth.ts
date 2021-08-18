import Cookies from 'js-cookie';

export const TOKEN_KEY = 'spostalo-token';
export const USER_ID = 'spostalo-userID';

export const getToken = () => Cookies.get(TOKEN_KEY);

export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token);
};

export const setUserID = (userID: string) => {
  Cookies.set(USER_ID, userID);
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};

export const isAuthenticated = async (token: string) => {
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
