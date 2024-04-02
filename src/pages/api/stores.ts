// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { StoreType } from "@/interface";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreType[]>
) {
  const prisma = new PrismaClient();
  const stores = await prisma.store.findMany();
  res.status(200).json(stores);
}
