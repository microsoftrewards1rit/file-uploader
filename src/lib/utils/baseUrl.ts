export const BASE_URL =
  process.env.NODE_ENV === "production" && process.env.BASE_URL
    ? process.env.BASE_URL
    : "http:localhost:3000";
