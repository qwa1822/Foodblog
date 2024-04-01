import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
interface storeBoxProps {
  store: any;
  setStore: Dispatch<SetStateAction<any>>;
}

export default function StoreBox({ store, setStore }: storeBoxProps) {
  return (
    <div
      className="fixed transition-all delay-150 inset-x-0  mx-auto bottom-20  rounded-lg
     shadow-lg max-w-sm md:max-w-2xl w-full z-10 bg-white"
    >
      {store && (
        <>
          <div className="p-8">
            <div className="flex justify-between flex-col items-start">
              <div className="gap-4 relative w-full flex justify-between items-start">
                <Image
                  alt={"아이콘 이미지"}
                  width={80}
                  height={80}
                  src={
                    store?.bizcnd_code_nm
                      ? `/images/markers/${store?.bizcnd_code_nm}.png`
                      : `/images/markers/default.png`
                  }
                ></Image>
                <div className="flex flex-col justify-start w-full  gap-1">
                  <span className="md:text-xl text-lg font-bold ">
                    {store?.upso_nm}
                  </span>
                  <span className="md:text-xl text-lg text-slate-400 font-bold">
                    {store?.cob_code_nm}
                  </span>
                </div>

                <div className="text-xl absolute right-0 -top-5">
                  <button onClick={() => setStore(null)}>❌</button>
                </div>
              </div>

              <div className="my-4  flex gap-2 justify-between items-center w-full">
                <span className="text-xl ">
                  🏳
                  <span className="font-bold ml-2 text-sm md:text-xl">
                    {store?.rdn_code_nm}
                  </span>
                </span>

                <span>❤</span>
              </div>

              <div className="  gap-4 flex w-full  ">
                <span className="text-xl"> 🤳</span>
                <span className="md:text-xl text:sm font-bold ">
                  {store?.tel_no}
                </span>
              </div>

              <div className="w-full my-4 flex flex-row gap-2">
                <div>🥚</div>
                <div className="text-slate-500 font-bold md:text-base">
                  {store?.crtfc_gbn_nm}
                </div>
              </div>

              <div className="w-full flex flex-row gap-3 ">
                <div>✔</div>
                <div className="font-bold text-slate-500 text-base">
                  {store?.bizcnd_code_nm}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => window.alert("상세보기 작업중")}
            className="w-full bg-blue-500 rounded-md px-2 py-4 text-white hover:bg-blue-300 transition-all duration-300"
          >
            상세보기
          </button>
        </>
      )}
    </div>
  );
}
