import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  const router = useRouter();
  return (
    <div>
      <h1>Routeer</h1>

      <div className="flex flex-col gap-3">
        <button
          onClick={() =>
            router.push({ pathname: "/[slug]", query: { slug: "push" } })
          }
        >
          Click
        </button>

        <Link href="/hello">Hello</Link>
        <Link href="/bye">Bye</Link>
      </div>
    </div>
  );
}
