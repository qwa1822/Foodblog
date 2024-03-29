import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function StoreEdit({}: Props) {
  const router = useRouter();

  const { id } = router.query;
  return <div>Edit{id}</div>;
}
