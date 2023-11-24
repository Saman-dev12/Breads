import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import Comments from "../components/Comments";

const Postpage = () => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex>
        <Flex w="full" alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" size={"md"} name="Mark zukerberg" />
          <Flex alignItems={"center"}>
            <Text fontSize={"sm"} fontWeight="bold">
              markzukerberg
            </Text>
            <Image src="/verified.png" w={4} h={4} ml={2} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems="center">
          <Text fontSize={"sm"} color="gray.light">
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>
      <Text my="3">Let's talk about Threads.</Text>
      <Box
        borderRadius={6}
        overflow="hidden"
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src="/post1.png" w="full" />
      </Box>
      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color="gray.light" fontSize={"sm"}>
          238 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius="full" bg="gray.light"></Box>
        <Text color="gray.light" fontSize={"sm"}>
          {2448 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />
      <Comments
        comment="Bhai aag lgadi"
        createdAt="2d"
        likes={100}
        username="johndoe"
        avatar="https://bit.ly/dan-abramov"
      />
      <Comments
        comment="Dhua tha diaa"
        createdAt="1d"
        likes={33}
        username="Brownboy"
        avatar="https://bit.ly/prosper-baba"
      />
      <Comments
        comment="Classic pic"
        createdAt="4d"
        likes={43}
        username="oaoaoa"
        avatar="https://bit.ly/code-beast"
      />
    </>
  );
};

export default Postpage;
