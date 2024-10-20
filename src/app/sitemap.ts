import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl: any = process.env.NEXT_PUBLIC_DOMAIN;

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/uz/about`,
    },
    {
      url: `${baseUrl}/ru/about`,
    },
    {
      url: `${baseUrl}/en/about`,
    },
    {
      url: `${baseUrl}/uz/room`,
    },
    {
      url: `${baseUrl}/ru/room`,
    },
    {
      url: `${baseUrl}/en/room`,
    },
    {
      url: `${baseUrl}/uz/gallery`,
    },
    {
      url: `${baseUrl}/uz/contact`,
    },
    {
      url: `${baseUrl}/ru/contact`,
    },
    {
      url: `${baseUrl}/en/contact`,
    },
  ];
}
