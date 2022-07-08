import ships from "./ships.json";

const port = 4000;

export default {
  port,
  async fetch(req: Request) {
    const query = new URL(req.url).searchParams.get("value");

    const res = !query
      ? ships
      : ships.filter((ship) =>
          ship.heading.toLowerCase().includes(query.toLowerCase())
        );

    const response = JSON.stringify(res);

    return new Response(response, {
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET, POST",
      },
    });
  },
};
