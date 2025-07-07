"use server";

import prisma from "@/lib/prisma";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth";
import {revalidatePath} from "next/cache";

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

  revalidatePath(`/conversion/${conversion.id}`);
  redirect(`/conversion/${conversion.id}`);
}


export async function syncFavoritesCrypts(items: string[]) {
  if (!items.length) return;

  const session = await getServerSession(authOptions);
  if (!session?.user) {
    throw new Error("You must be logged in to syncFavoritesCrypts");
  }

  const userId = session.user.id;

  const currentFavorites = await prisma.cryptcurrency.findMany({
    where: { user_id: userId },
    select: { currency: true }
  });

  const currentSet = new Set(currentFavorites.map((c) => c.currency));
  const newSet = new Set(items);

  const toDelete = [...currentSet].filter((currency) => !newSet.has(currency));

  const toAdd = [...newSet].filter((currency) => !currentSet.has(currency));

  if (toDelete.length) {
    await prisma.cryptcurrency.deleteMany({
      where: {
        user_id: userId,
        currency: { in: toDelete }
      }
    });
  }

  if (toAdd.length) {
    const data = toAdd.map((currency) => ({
      currency,
      user_id: userId
    }));
    await prisma.cryptcurrency.createMany({ data });
  }
}

export async function getFavoritesCrypts(){
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    throw new Error("You must be logged in to getFavoritesCrypts");
  }
  const userId = session.user.id;
  const currentFavorites = await prisma.cryptcurrency.findMany({
    where: { user_id: userId },
    select: { currency: true }
  });
  return currentFavorites?.map(item => item.currency) as string[];
}
