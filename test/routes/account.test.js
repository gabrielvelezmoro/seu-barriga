const request = require("supertest");
const app = require("../../src/app");

const MAIN_ROUTE = "/accounts";
let user;

beforeAll(async () => {
  const res = await app.services.user.save({
    name: "User Account",
    mail: `${Date.now()}@mail.com`,
    passwd: "123456",
  });

  user = { ...res[0] };
});

test("Deve inserir uma conta com sucesso", () =>
  request(app)
    .post(MAIN_ROUTE)
    .send({ name: "acc 1", user_id: user.id })
    .then((result) => {
      expect(result.status).toBe(201);
      expect(result.body.name).toBe("acc 1");
    }));

test("Deve listar todas as contas", () =>
  app
    .db("accounts")
    .insert({ name: "Acc List", user_id: user.id })
    .then(() =>
      request(app)
        .get(MAIN_ROUTE)
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.length).toBeGreaterThan(0);
        }),
    ));
