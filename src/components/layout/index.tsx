import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import { ReactNode } from "react";


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
        <Head>
          <title>Mambo's Chicken</title>
        </Head>
        <Box as="main" marginY={22}>
          {children}
        </Box>

    </Box>
  );
};

export default Layout;
