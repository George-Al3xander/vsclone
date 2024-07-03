import { Metadata } from "next";
import { LANGUAGES } from "@/constants/consts";
import { metadata, titles } from "@/constants/data";

export async function genPageMetadata({
  params: { lang = LANGUAGES },
}: {
  params: { lang?: readonly string[] };
}): Promise<Metadata> {
  const [language] = lang;
  const { title, description } = metadata;

  // const { title } = pagesMetaData[postType];
  // const { description } = pagesMetaData[postType];
  // const ogSearchParams = new URLSearchParams();

  //ogSearchParams.set("title", title);
  //ogSearchParams.set("description", description);

  return {
    title: `${title} | ${titles[language as "cpp"]}`,
    description,
    authors: { name: "George V." },
    // openGraph: {
    //   title,
    //   description,
    //   type: "article",
    //   url: `posts${postType == "all" ? "" : `${slug}`}`,
    //   images: [
    //     {
    //       url: `/api/og?${ogSearchParams.toString()}`,
    //       width: 1230,
    //       height: 630,
    //       alt: title,
    //     },
    //   ],
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title,
    //   description,
    //   images: [`/api/og?${ogSearchParams.toString()}`],
    // },
  };
}
