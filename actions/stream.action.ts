"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";


const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET

export const tokenProvider = async () => {
      const user = await currentUser();
      if (!user) throw new Error("user tidak ada")
      if (!apiKey) throw new Error("key tidak ada")
      if (!apiSecret) throw new Error("key tidak ada")

      const client = new StreamClient(apiKey, apiSecret)
      // exp is optional (by default the token is valid for an hour)
      const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
      const issued = Math.floor(Date.now() / 1000) - 60;

      const token = client.createToken(user.id, exp, issued);

      return token;
}