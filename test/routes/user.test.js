const request = require("supertest");

const app = require("../../src/app");

test("Deve listar todos os usuarios", async () =>
  request(app)
    .get("/users")
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    }));

test("Deve inserir usuario com sucesso", async () => {
  const mail = `${Date.now()}@mail.com`;
  return request(app)
    .post("/users")
    .send({ name: "Walter White", mail, passwd: "12345" })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe("Walter White");
    });
});

test("Não deve inserir usuário sem nome", async () => {
  const mail = `${Date.now()}@mail.com`;
  return request(app)
    .post("/users")
    .send({ mail, passwd: "12345" })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe("Nome é um atributo obrigatório");
    });
});
