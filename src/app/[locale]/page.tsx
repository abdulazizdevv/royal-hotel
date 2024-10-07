import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Text } from "@chakra-ui/react";
import HeroSection from "./_components/Hero";

export default function HomePage() {
  // const t = useTranslations("homePage");
  return (
    <div>
      <HeroSection />
    </div>
  );
}
