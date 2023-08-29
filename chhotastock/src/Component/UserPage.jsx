"use client";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function UserDetail() {
  const [data, setData] = useState({});
  const [user_id, setId] = useState("122115785132011857");
  const [Access_token, setToken] = useState(
    "EAAEBDk1IbVkBOZCOCBZAjaTJJODrd9oxFWeBn88tXFtrjzohyZATiofagqPwUooOoZBwmF0rBNUBPL2qF1CaXfysJ4UXyFuaHwvhCGyy7RCFhSZBxR1AOaODaZBPcLM26Sa261SeEa2ZAB9EcSgaEKR9hZAmxWz3nuRAITCyGtfsWQj46V6vyVZBIjezr5p7vMjOB"
  );
  useEffect(() => {
    getData();
  }, [Access_token]);
  const getData = () => {
    fetch(
      `https://graph.facebook.com/${user_id}?fields=id,name,first_name,last_name,picture&access_token=${Access_token}`
    )
      .then((res) => res.json())
      .then((res) => (setData(res), console.log(res)))
      .catch((err) => console.log(err));
  };
  return (
    <Box
      display={{ lg: "flex", md: "grid", sm: "grid" }}
      justifyContent={"center"}
    >
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"lg"} color={"gray.600"}>
              Get Facebook Data on the bases of Access_Token and user_id
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="text">
                <FormLabel>Access_Token</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Access Token"
                  onChange={(e) => setToken(e.target.value)}
                />
              </FormControl>
              <FormControl id="text">
                <FormLabel>User ID</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter User ID"
                  onChange={(e) => setId(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={getData}
                >
                  Fetch Data
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Center py={6}>
        <Box
          maxW={"270px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            h={"120px"}
            w={"full"}
            src={
              "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            objectFit="cover"
            alt="#"
          />
          <Flex justify={"center"} mt={-12}>
            <Avatar
              size={"xl"}
              src={data && data?.picture?.data.url}
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>
          <Heading>User Details</Heading>
          <Flex justify={"center"} mt={-5}></Flex>

          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text color={"gray.500"}>ID :- {data && data?.id}</Text>
              <Text color={"gray.500"}>
                First Name :- {data && data?.first_name}
              </Text>
              <Text color={"gray.500"}>
                Last Name :- {data && data?.last_name}
              </Text>

              <Text color={"gray.500"}>Name :- {data && data?.name}</Text>
            </Stack>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
