interface Config {
  baseUrl: string;
}

const getBaseUrl = (): string => {
  // Check if we're in production (Vercel sets NODE_ENV automatically)
  if (import.meta.env.PROD || import.meta.env.MODE === "production") {
    return "https://wume-ecommerce-admin.vercel.app";
  }
  return "http://localhost:8000";
};

export const config: Config = {
  baseUrl: getBaseUrl(),
};
