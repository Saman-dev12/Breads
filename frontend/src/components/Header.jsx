import { Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const currentUser = useRecoilValue(userAtom);
  return (
    <Flex justifyContent={"space-between"} mt={6} mb="12">
      {currentUser && (
        <RouterLink to="/">
          <AiFillHome size={24} />
        </RouterLink>
      )}

      <Image
        cursor={"pointer"}
        alt="logo"
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleColorMode}
        w={6}
      />

      {currentUser && (
        <RouterLink to={`/${currentUser.username}`}>
          <RxAvatar size={24} />
        </RouterLink>
      )}
    </Flex>
  );
};

export default Header;
