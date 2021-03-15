import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import { ReactNode } from "react";
import Dock from "../nav/Dock";


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen h-auto lg:h-screen w-screen bg-yellow-400">
        <Head>
          <title>Mambo's Chicken</title>
        </Head>
        <div>
          {children}
        </div>
        <Dock />
    </div>
  );
};

export default Layout;
