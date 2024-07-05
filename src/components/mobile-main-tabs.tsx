import React, { ReactNode } from "react";
import EditorWindow from "@/components/editor-window";
import Output from "@/components/output";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useGetCurrLang from "@/hooks/use-get-curr-lang";
import { LANGUAGE_FILE_EXTENSIONS } from "@/constants/consts";
import { cn } from "@/lib/utils";
import { roundedGlassStyle } from "@/constants/data";
import { TMobileTab } from "@/types/types";
import useMobileTabs from "@/hooks/use-mobile-tabs";

function MobileMainTabs() {
  const { tab, onTabChange } = useMobileTabs();
  const currLang = useGetCurrLang();
  const ext = LANGUAGE_FILE_EXTENSIONS[currLang];
  const menuTabs: { value: TMobileTab; content: ReactNode; title: string }[] = [
    {
      value: "editor",
      title: `main${ext}`,
      content: <EditorWindow />,
    },
    {
      value: "output",
      title: "Output",
      content: <Output />,
    },
  ];
  return (
    <main className={"sm:hidden"}>
      <Tabs value={tab} onValueChange={onTabChange}>
        <TabsList
          className={cn("mx-auto flex w-[min-content]", roundedGlassStyle)}
        >
          {menuTabs.map(({ value, title }) => (
            <TabsTrigger value={value} key={value}>
              {title}
            </TabsTrigger>
          ))}
        </TabsList>

        {menuTabs.map(({ value, content }) => (
          <TabsContent value={value} key={value}>
            {content}
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}

export default MobileMainTabs;
