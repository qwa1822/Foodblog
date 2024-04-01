import { useRouter } from "next/router";
import React from "react";

export default function StoreDetail({}) {
  const router = useRouter();

  const { id } = router.query;

  return <div>Detail</div>;
}
