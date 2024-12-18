import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Room from "@/app/[locale]/_assets/images/blog1.jpg";
import BlogCard from "../../_components/BlogsCard";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  try {
    const t = await getTranslations({ locale, namespace: "seo" });
    const tAbout = await getTranslations({ locale, namespace: "langs" });

    const title = tAbout("blog");
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

const Blogs = () => {
  const data = [
    {
      id: 1,
      img: Room,
      title: "Bed Room",
      subTitle: "The standard chunk",
      text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you ",
    },
    {
      id: 2,
      img: Room,
      title: "Bed Room",
      subTitle: "The standard chunk",
      text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you ",
    },
    {
      id: 3,
      img: Room,
      title: "Bed Room",
      subTitle: "The standard chunk",
      text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you ",
    },
  ];
  return (
    <Box>
      <Box bg={"dark.500"} textAlign={"center"} color={"#fff"}>
        <Heading textTransform={"uppercase"} py={{ base: 4, md: 8 }}>
          Blog
        </Heading>
      </Box>
      <Box
        bgImage="url('/images/blog_bg.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        maxH="auto"
        my={16}
      >
        <Container py={{ base: "40px", md: "80px" }}>
          <Center flexDir={"column"} color={"#fff"}>
            <Text>Lorem Ipsum available, but the majority have suffered</Text>
          </Center>
          <Box mt={8}>
            <BlogCard data={data} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Blogs;
