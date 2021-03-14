import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import { ReactNode } from "react";


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen w-screen bg-yellow-400">
        <Head>
          <title>Mambo's Chicken</title>
        </Head>
        <div>
          {children}
        </div>

    </div>
  );
};

export default Layout;
