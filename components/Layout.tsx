import Head from 'next/head';
import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren<{}>> = (props) => {
  return (<div className=" w-full h-100vh bg-emerald-550">
    <Head>
      <title>AnimeFlix</title>
      <meta name="description" content="Place where you can watch all the greatest creation" />
      <link rel="icon" href="/anilogo.ico" />
    </Head>
    {props.children}
  </div>)
}

export default Layout