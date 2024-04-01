/*global Kakao*/

import Script from "next/script";

import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/Layout";
import Map from "@/components/Map";
import Markers from "@/components/Markers";

import { useState } from "react";
import StoreBox from "@/components/StoreBox";
import { StoreType } from "@/interface";

export default function Home({ stores }: { stores: StoreType[] }) {
  const [map, setMap] = useState(null);

  const [currentStore, setCurrentStore] = useState(null);

  console.log(currentStore);

  return (
    <>
      <Map setMap={setMap} />
      <Markers setCurrentStore={setCurrentStore} stores={stores} map={map} />
      <StoreBox store={currentStore} setStore={setCurrentStore} />
    </>
  );
}

export async function getStaticProps() {
  const stores = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
  ).then(res => res.json());

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
