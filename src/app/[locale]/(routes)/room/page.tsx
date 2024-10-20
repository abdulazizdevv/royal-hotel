import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Cards from "../../_components/RoomsCard";
import economy from "@/app/[locale]/_assets/images/rooms/ekonom.jpg";
import lukus from "@/app/[locale]/_assets/images/rooms/luuks.jpg";
import polLukus from "@/app/[locale]/_assets/images/rooms/polLuks.jpg";
import standart from "@/app/[locale]/_assets/images/rooms/standart.jpg";
import threeplace from "@/app/[locale]/_assets/images/rooms/threeplace.jpg";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  try {
    const t = await getTranslations({ locale, namespace: "seo" });
    const tAbout = await getTranslations({ locale, namespace: "langs" });

    const title = tAbout("room");
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

const Rooms = () => {
  const t = useTranslations("langs");

  const data = [
    {
      id: 1,
      img: lukus,
      title: t("lux"),
      text: t("lux_text"),
    },
    {
      id: 2,
      img: polLukus,
      title: t("pol_lux"),
      text: t("pol_lux_text"),
    },
    {
      id: 3,
      img: threeplace,
      title: t("triple_room"),
      text: t("triple_room_text"),
    },
    {
      id: 4,
      img: standart,
      title: t("standard"),
      text: t("standard_text"),
    },
    {
      id: 5,
      img: economy,
      title: t("economy"),
      text: t("economy_text"),
    },
  ];
  return (
    <>
      <Box bg={"dark.500"} textAlign={"center"} color={"#fff"}>
        <Heading textTransform={"uppercase"} py={{ base: 4, md: 8 }}>
          {t("room")}
        </Heading>
      </Box>
      <Box
        my={{ base: 8, md: 16 }}
        bg={"gray.300"}
        py={{ base: "30px", md: "60px" }}
      >
        <Container>
          <Box mt={8}>
            <Cards data={data} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Rooms;
