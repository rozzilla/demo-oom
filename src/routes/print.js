export default async function (fastify) {
  fastify.get("/print", async (request) => {
    const { val } = request.query;
    return { value: `${val}!` };
  });
}
