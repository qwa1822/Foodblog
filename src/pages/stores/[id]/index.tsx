import { useRouter } from "next/router";
import React from "react";

type Props = {};
  return <div>StoreDetail{id}</div>;
}

export default function StoreDetail({}: Props) {
  const router = useRouter();

  const { id } = router.query;
