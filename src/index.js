import Fastify from "fastify";
import sum from "./routes/sum.js";
import list from "./routes/list.js";
import print from "./routes/print.js";

export const server = Fastify();

const start = async () => {
  try {
    await server.register(sum);
    await server.register(list);
    await server.register(print);

    await server.listen({ port: 3000 });
  } catch (err) {
    process.exit(1);
  }
};

start();
