const request = require("supertest");

const app = require("../../src/app");

const mail = `${Date.now()}@mail.com`;
test("Deve listar todos os usuarios", async () =>
  request(app)
    .get("/users")
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    }));

test("Deve inserir usuario com sucesso", async () =>
  request(app)
    .post("/users")
    .send({ name: "Walter White", mail, passwd: "12345" })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe("Walter White");
    }));

test("Não deve inserir usuário sem nome", async () =>
  request(app)
    .post("/users")
    .send({ mail: "walter@mail.com", passwd: "12345" })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe("Nome é um atributo obrigatório");
    }));

test("Não deve inserir usuário sem e-mail", async () => {
  const result = await request(app)
    .post("/users")
    .send({ name: "Walter White", passwd: "12345" });

  expect(result.status).toBe(400);
  expect(result.body.error).toBe("Email é um atributo obrigatório");
});

test("Não deve inserir usuário sem senha", (done) => {
  request(app)
    .post("/users")
    .send({ name: "Walter White", mail: "walter@mail.com" })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe("Senha é um atributo obrigatório");
      done();
    });
});

test("Não deve inserir usuário com email já existente", () =>
  request(app)
    .post("/users")
    .send({ name: "Walter White", mail, passwd: "12345" })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe("Já existe um usuario com esse email");
    }));
