import { totalList } from "../utils.js";

export default async function (fastify) {
  fastify.get("/list", async (request) => {
    const { size } = request.query;
    const arraySize = parseInt(size) || 1;
    const result = totalList(arraySize);

    return { result };
  });
}
