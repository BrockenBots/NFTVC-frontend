"use server";

import { cookies } from "next/headers";

export const setTokens = ({
  access_token,
  refresh_token,
}: {
  access_token: string;
  refresh_token: string;
}) => {
  localStorage.setItem("access_token", access_token);
  cookies().set("refresh_token", refresh_token, { secure: true });
};
