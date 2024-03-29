import Script from "next/script";
import React from "react";

declare global {
  interface Window {
    kakao: any;
  }
}
export default function Map() {
  const loadKakaoMap = () => {
    // kakao로드

    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      new window.kakao.maps.Map(mapContainer, mapOption);
    });
  };

  return (
    <div>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        onReady={loadKakaoMap}
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
      />
      <div id="map" className="w-full h-screen"></div>
    </div>
  );
}
