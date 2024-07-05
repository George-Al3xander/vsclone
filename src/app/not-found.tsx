import React from "react";
import { LANGUAGES, LANGUAGES_REACT_ICONS } from "@/constants/consts";
import { titles } from "@/constants/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHome } from "react-icons/fa";
function NotFound() {
  return (
    <section className="mx-auto flex h-screen w-[min(90%,40rem)] flex-col items-center justify-between gap-4 py-4 text-center">
      <div className="my-auto">
        <h2 className="text-9xl font-bold">404</h2>
        <h1 className="mb-4 text-4xl font-bold">Error: Page Not Found</h1>
        <p className="mb-10 opacity-60">
          Oops! The page you are looking for seems to have gone missing. It
          might have been moved, renamed, or simply never existed.
        </p>
        <Button variant="secondary" asChild>
          <Link href="/">
            <FaHome size={20} className="mr-2" />
            Home
          </Link>
        </Button>
      </div>
      <div>
        <h2 className="mb-4 text-xl font-semibold">
          Here is a list of languages supported in the web editor:
        </h2>
        <ul className={"grid gap-4 sm:grid-cols-4"}>
          {LANGUAGES.map((language) => {
            const Icon = LANGUAGES_REACT_ICONS[language];
            return (
              <li key={language}>
                <Link
                  className="flex gap-2 text-lg opacity-60 transition-all hover:opacity-100"
                  href={`/${language}`}
                >
                  {" "}
                  <Icon size={30} />
                  {titles[language]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default NotFound;
