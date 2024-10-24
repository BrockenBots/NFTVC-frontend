import { Api as AuthApi } from "./typed-api/AuthApi";
import { Api as ProfilesApi } from "./typed-api/ProfilesApi";

export const authApi = new AuthApi({
  baseUrl: "http://localhost:8081",
});

export const profilesApi = new ProfilesApi({
  baseUrl: "http://localhost:8082",
});
