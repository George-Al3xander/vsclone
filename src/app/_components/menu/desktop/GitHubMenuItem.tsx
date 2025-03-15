import { env } from "@/configs/env";
import { DropdownMenuItem } from "@/ui/components/organisms/DropdownMenu";
import { GithubIcon } from "@/ui/icons";
import Link from "next/link";

export const GitHubMenuItem = () => {
    return (
        <DropdownMenuItem asChild>
            <Link href={env.NEXT_PUBLIC_GITHUB_URL} target="_blank">
                <GithubIcon />
                <span>GitHub repo</span>
            </Link>
        </DropdownMenuItem>
    );
};
