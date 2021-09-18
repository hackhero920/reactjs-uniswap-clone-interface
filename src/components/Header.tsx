import { ReactNode } from "react";
import { Flex, Menu, Image } from "@chakra-ui/react";

import logo from "../assets/logo.svg";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Menu>
      <Flex
        d="flex"
        alignItens="center"
        justifyContent="space-between"
        maxW="83.43rem"
        mx="auto"
        mt="1.5rem">
        <Image
          boxSize="1.56rem"
          src={logo}
          alt="Uniswap Logo" />
        {children}
      </Flex>
    </Menu>
  );
}
