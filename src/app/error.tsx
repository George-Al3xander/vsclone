"use client";

import { Button } from "@/ui/components/atoms/Button";
import { IconTextBlock } from "@/ui/components/molecules/IconTextBlock";
import { MdOutlineReportProblemIcon } from "@/ui/icons";
import { HomeIcon, RotateCcwIcon } from "lucide-react";
import Link from "next/link";

const Error = ({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) => {
    return (
        <section className="roundedGlass flex h-[calc(100vh-12rem)] flex-col items-center justify-center gap-14 p-4 sm:h-[calc(100vh-9rem)]">
            <IconTextBlock
                title={"Unexpected Error"}
                titleProps={{ className: "uppercase sm:text-4xl" }}
                subtitle={error?.message || "Something went wrong!"}
                containerProps={{ className: "gap-2" }}
                icon={MdOutlineReportProblemIcon}
            />

            <ul className="flex flex-col justify-center gap-4 sm:flex-row">
                <li className="basis-full sm:basis-auto">
                    <Button
                        className="bold w-full text-lg uppercase sm:text-xl"
                        size="lg"
                        variant="ghost"
                        asChild
                    >
                        <Link href="/">
                            <HomeIcon className="size-12" />
                            Return Home
                        </Link>
                    </Button>
                </li>
                <li className="basis-full sm:basis-auto">
                    <Button
                        variant="ghost"
                        className="bold w-full text-lg uppercase sm:text-xl"
                        size="lg"
                        onClick={reset}
                    >
                        <RotateCcwIcon className="size-12" />
                        Try again
                    </Button>
                </li>
            </ul>
        </section>
    );
};

export default Error;
