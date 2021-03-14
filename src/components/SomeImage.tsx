import { Box, Link, Text } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";

const SomeImage = () => {
  return (
    <>
      <Box marginY={8} maxWidth={400} marginX="auto">
        <Image src="/Launching-amico.svg" width={400} height={400} />
      </Box>
      <Text textAlign="center" fontSize="xs">
        <Link href="https://stories.freepik.com/web" isExternal>
          Illustration by Freepik Stories
        </Link>
      </Text>
    </>
  );
};

export default SomeImage;
