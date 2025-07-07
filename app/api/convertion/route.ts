import {NextApiRequest, NextApiResponse} from "next";
import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";

const handler = async function( req: NextRequest) {
  console.log(req);
  // const currency = _req.query['currency'] as string;
  // const value = Number(_req.query['value'] as string);
  // const userId = Number(_req.query['user_id'] as string);
  // const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?symbols=${currency}&vs_currencies=usd,brl&include_last_updated_at=true&x_cg_demo_api_key=` + process.env.COINGECKO_API_KEY);
  // const data = await response.json();
  // const usdPrice = data[currency].usd;
  // const brlPrice = data[currency].brl;
  // await prisma.convertion.create({
  //   data: {
  //     currency: currency,
  //     value: value,
  //     value_usd: usdPrice * value,
  //     value_brl: brlPrice * value,
  //     user_id: userId
  //   }
  // });
  return NextResponse.json({
    // value_usd: usdPrice * value,
    // value_brl: brlPrice * value,
  });
}

export {handler as GET};

