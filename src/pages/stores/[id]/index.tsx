import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function StoreDetail({}: Props) {
  const router = useRouter();

  const { id } = router.query;
  return <div>StoreDetail{id}</div>;
}
