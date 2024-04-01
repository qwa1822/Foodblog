import { StoreType } from "@/interface";
import React from "react";

import Image from "next/image";
type Props = {};

export default function StoreListPage({ stores }: { stores: StoreType[] }) {
  console.log(stores);

  return (
    <div className="px-4 md:max-w-5xl mx-auto py-8">
      <h2>hello</h2>
      <ul role="list" className="divide-y divide-gray-100">
        {stores?.map(item => (
          <li className="flex justify-between gap-x-6 py-6">
            <div className="flex gap-x-4">
              <Image
                alt="아이콘 이미지"
                width={48}
                height={48}
                src={
                  item?.bizcnd_code_nm
                    ? `/images/markers/${item?.bizcnd_code_nm}.png`
                    : `/images/markers/default.png`
                }
              />
              <div>
                <div className="text-sm font-semibold text-gray-900 leading-9">
                  {item?.upso_nm}
                </div>
                <div className="text-sm font-semibold text-slate-500 leading-5">
                  {item?.upso_nm}
                </div>
              </div>
            </div>

            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <div className="text-sm font-semibold leading-6 text-gray-900">
                {item?.rdn_code_nm}
              </div>
              <div className="mt-1 text-xs font-semibold text-gray-500 leading-5">
                {item?.tel_no || "번호없음"} | {item?.crtfc_gbn_nm} |{" "}
                {item?.bizcnd_code_nm}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const stores = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
  ).then(res => res.json());

  return {
    props: { stores },
  };
}
