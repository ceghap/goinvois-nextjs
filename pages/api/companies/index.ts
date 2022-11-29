import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
const prisma = new PrismaClient();

interface Company {
  name: string;
  email: string;
  address: string;
  phone: string;
  userId?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.send({
      error:
        'You must be signed in to view the protected content on this page.',
    });
  }

  if (req.method === 'POST') {
    try {
      const { name, email, address, phone }: Company = req.body;
      const company: Company = await prisma.company.create({
        data: { name, email, address, phone, userId: session?.user.id },
      });

      res.status(200).json(company);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
