"use server";

import { cookies } from "next/headers";

export const setTokens = (refresh_token: string) => {
  cookies().set("refresh_token", refresh_token, { secure: true });
};
