import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import NavigationBar from "@/components/NavigationBar";
import { PATHS } from "@/constants";
import { ToastList } from "@/components/Toast"
import { memo } from "react";

const App = memo(({ Component, pageProps }: AppProps) => {

  const { user } = pageProps;

  console.log(pageProps)
  return (
    <Layout>
      <ToastList />
      <div className="flex flex-col w-full h-full bg-emerald-550">
        { user && <NavigationBar paths={PATHS} />}
        <div className="flex-1 overflow-auto">
          <Component {...pageProps}></Component>
        </div>
      </div>
    </Layout>
  );
})

export default App
