interface Config {
  baseUrl: string;
}
const checkConfig = (server: string): Config | Record<string, never> => {
  let config: Config | Record<string, never> = {};
  switch (server) {
    case "production":
      config = {
        // production url
        baseUrl: "",
      };
      break;
    case "local":
      config = {
        baseUrl: "http://localhost:8000",
      };
      break;
    default:
      break;
  }
  return config;
};

export const selectServer = "local";
export const config = checkConfig(selectServer) as Config;
