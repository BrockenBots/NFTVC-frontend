import { Api as AuthApi } from "./typed-api/AuthApi";
import { Api as ProfilesApi } from "./typed-api/ProfilesApi";

export const authApi = new AuthApi({
  baseUrl: "http://82.97.253.57:81",
});

export const profilesApi = new ProfilesApi({
  baseUrl: "http://82.97.253.57:81",
});
