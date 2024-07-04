import { LANGUAGES } from "@/constants/consts";
import { notFound } from "next/navigation";
import React from "react";
import EditorOutputArea from "@/components/editor-output-area";
import { genPageMetadata } from "@/lib/og-data";
import TemplateWrapper from "@/components/template-wrapper";
export const generateMetadata = genPageMetadata;
export default function Home({
  params: { lang = LANGUAGES },
}: {
  params: { lang?: readonly string[] };
}) {
  const [language] = lang;

  if (!LANGUAGES.includes(language as "cpp")) notFound();

  return (
    <TemplateWrapper>
      <EditorOutputArea />
    </TemplateWrapper>
  );
}
