// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

type Data = {
  name: string
}
const prisma = new PrismaClient()
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const allBooks = await prisma.book.findMany({
  })
  res.status(200).json(allBooks)
}
