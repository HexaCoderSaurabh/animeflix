import { getUser } from "@/services/auth";
import { useUserStore } from "@/store/user/user.store";
import { User } from "@/store/user/usre.types";
import { getUserFromCookie } from "@/utils/auth";
import { GetServerSidePropsContext } from "next";
import React, { Fragment, useEffect } from "react";


const Login: React.FC<{user: User}> = ({user}) => {
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);
  const userData = useUserStore(state => state.user)

  useEffect(() => {
    user ? setUser(user) : clearUser()
  }, [user, setUser]);



  return (
    <Fragment>
      <div className="" onClick={() => {
        getUser(userData?.email ?? '')
      }}>
        WELCOME USER
      </div>
    </Fragment>
  );
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const user: User = getUserFromCookie(context) as User;

  if (!user) {
    return {
      redirect: {
        destination: '/login',
      }
    }
  }
  return {
    props: {
      user
    }
  }
}

export default Login;
