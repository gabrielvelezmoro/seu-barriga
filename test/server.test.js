const supertest = require("supertest");

const request = supertest("http://localhost:3001");

test("Deve responder na porta 3001", async () =>
  // acessar a url http://localhost:3001

  request.get("/").then((res) => {
    expect(res.status).toBe(200);
  }));
// devo verificar que a resposta foi 200
