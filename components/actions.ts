"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export async function createConversion(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    throw new Error("You must be logged in to create a conversation");
  }

  const currency = formData.get('currency') as string;
  const value = parseFloat(formData.get('value') as string);
  const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?symbols=${currency}&vs_currencies=usd,brl&include_last_updated_at=true&x_cg_demo_api_key=` + process.env.COINGECKO_KEY);
  const data = await response.json();
  const usdPrice = data[currency].usd;
  const brlPrice = data[currency].brl;

  const conversion = await prisma.convertion.create({
    data: {
      currency: currency,
      value: value,
      value_usd: usdPrice * value,
      value_brl: brlPrice * value,
      user_id: session.user.id
    }
  });

  redirect(`/conversion/${conversion.id}`);
}
