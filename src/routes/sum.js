export default async function (fastify) {
  fastify.get("/sum", async (request) => {
    const { a, b } = request.query;

    const sum = parseInt(a) + parseInt(b);
    return { sum };
  });
}
