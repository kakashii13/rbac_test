import Server from "./index";

(async () => {
  const server = new Server();
  await server.initializeServer();
})();
