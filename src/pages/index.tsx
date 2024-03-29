/*global Kakao*/

import Script from "next/script";

import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/Layout";
import Map from "@/components/Map";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Map />
    </>
  );
}
