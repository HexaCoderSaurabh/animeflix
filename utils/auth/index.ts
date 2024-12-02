import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import { GetServerSidePropsContext } from 'next';
import { User } from '@/store/user/usre.types';

export const decodeJWT = (token: string) => {
  try {
    return jwt.decode(token);
  } catch (error) {
    return null;
  }
};

export const getUserFromCookie = (context: GetServerSidePropsContext) => {
  const cookies = nookies.get(context);
  const user = decodeJWT(cookies.access_token ?? cookies.refresh_token ?? '');

  if (!user) {
    return null;
  }
  return user as User;
};