import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({ params: { locale } }: any) {
  try {
    const t = await getTranslations({ locale, namespace: "seo" });
    const tAbout = await getTranslations({ locale, namespace: "langs" });

    const title = tAbout("contact");
    const description = t("main_text");

    return {
      title,
      description,
      // alternates: {
      //   canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
      //   languages: {
      //     en: `${process.env.NEXT_PUBLIC_DOMAIN}/en/about`,
      //     ru: `${process.env.NEXT_PUBLIC_DOMAIN}/ru/about`,
      //     uz: `${process.env.NEXT_PUBLIC_DOMAIN}/uz/about`,
      //   },
      // },
    };
  } catch (_error: any) {
    return {
      title: "Royal garden",
      description: "Royal garden",
    };
  }
}

const ContactsPage = () => {
  const t = useTranslations("langs");

  return (
    <>
      <Box bg={"dark.500"} textAlign={"center"} color={"#fff"}>
        <Heading textTransform={"uppercase"} py={{ base: 4, md: 8 }}>
          {t("contact")}
        </Heading>
      </Box>
      <Container py={{ base: "40px", md: "80px" }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} mt={8} gap={8}>
          <Flex gap={5} flexDirection={"column"}>
            <FormControl shadow={"md"}>
              <Input
                height={"58px"}
                rounded={0}
                type="text"
                placeholder={t("name")}
              />
            </FormControl>
            <FormControl shadow={"md"}>
              <Input
                rounded={0}
                height={"58px"}
                type="email"
                placeholder={t("email")}
              />
            </FormControl>
            <FormControl shadow={"md"}>
              <Input
                rounded={0}
                height={"58px"}
                type="tel"
                placeholder={t("phone_number")}
              />
            </FormControl>
            <FormControl shadow={"md"}>
              <Textarea
                rounded={0}
                height={"165px"}
                placeholder={t("message")}
              ></Textarea>
            </FormControl>
            <Button
              mt={5}
              bg="black"
              color="white"
              _hover={{ bg: "gray.700" }}
              _active={{ bg: "gray.800" }}
              padding={5}
              height={"52px"}
              w={"152px"}
              borderRadius={"full"}
              textTransform={"uppercase"}
            >
              {t("send")}
            </Button>
          </Flex>
          <Box>
            <iframe
              src="https://yandex.uz/map-widget/v1/-/CDXgAZ2b"
              className="max-w-[600px] w-full"
              height="400"
              loading="lazy"
            ></iframe>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ContactsPage;
