"use client";

import { Editor } from "@/app/_components/editor/Editor";
import { OutputPanel } from "@/app/_components/editor/OutputPanel";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/ui/components/organisms/Tabs";
import React from "react";
import { useMobileTabs } from "../_hooks/use-mobile-tabs";

const menuTabs: {
    value: "editor" | "output";
    content: React.ReactNode;
}[] = [
    {
        value: "editor",
        content: <Editor />,
    },
    {
        value: "output",
        content: <OutputPanel />,
    },
];
export const MobileView = () => {
    const { tab, onTabChange } = useMobileTabs();

    return (
        <Tabs className="sm:hidden" value={tab} onValueChange={onTabChange}>
            <TabsList className={"roundedGlass mx-auto flex w-[min-content]"}>
                {menuTabs.map(({ value }) => (
                    <TabsTrigger
                        className="capitalize"
                        value={value}
                        key={"trigger-" + value}
                    >
                        {value}
                    </TabsTrigger>
                ))}
            </TabsList>

            {menuTabs.map(({ value, content }) => (
                <TabsContent value={value} key={"content-" + value}>
                    {content}
                </TabsContent>
            ))}
        </Tabs>
    );
};
