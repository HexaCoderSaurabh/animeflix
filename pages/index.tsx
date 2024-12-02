import React, { useEffect } from "react";
import { getUserFromCookie } from "@/utils/auth";
import { GetServerSidePropsContext } from 'next';
import { useUserStore } from "@/store/user/user.store";
import { User } from "@/store/user/usre.types";

const Login: React.FC<{user: User}> = ({user}) => {

  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  useEffect(() => {
    user ? setUser(user) : clearUser()
  }, [user, setUser]);
  
  return (
    <div>Hi</div>
  );
};
export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const user: User = getUserFromCookie(context) as User;

  return {
    redirect: {
      destination: user ? '/home': '/login',
      permanent: false
    },
    props: {
      user
    }
  }
}

export default Login;
