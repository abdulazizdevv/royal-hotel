"use client";
import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Stack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import logo from "@/app/[locale]/_assets/images/logo.jpg";
import Image from "next/image";
import "./header.scss";
import { Icon } from "@iconify/react";
import { links } from "./utils";
import { Link } from "@/i18n/routing";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMd] = useMediaQuery("(max-width: 768px)");

  return (
    <Stack position={"relative"} borderBottom={"1px solid #eee"} shadow={"sm"}>
      <Container py={2} as="header">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Link href={"/"} className="w-[80px] h-[80px] block relative">
            <Image src={logo} alt="logo" fill />
          </Link>
          {isMd ? (
            <Button variant={"ghost"} onClick={onOpen}>
              <Icon icon="ri:menu-3-line" width="25px" height="25px" />
            </Button>
          ) : (
            <Flex gap={8} fontWeight={600} fontSize={20}>
              {links?.map((el) => (
                <Link key={el.title} className="custom-link" href={el?.link}>
                  {el?.title}
                </Link>
              ))}
            </Flex>
          )}
        </Flex>
      </Container>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Flex flexDir={"column"} gap={4}>
              {links?.map((el) => (
                <Link className="drawer-link" key={el.title} href={el?.link}>
                  {el?.title}
                </Link>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default Header;
