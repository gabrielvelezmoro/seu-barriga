test("Devo conhecer as principais assertivas do jest", () => {
  const number = 10;
  expect(number).not.toBe(null);
  expect(number).toBeGreaterThan(1);
  expect(number).toBeLessThan(11);
});

test("Devo saber trabalhar com objetos", () => {
  const obj = { name: "john", email: "john@mail.com" };
  expect(obj).toHaveProperty('name')
  expect(obj.name).toBe( 'john')
  
  const obj2 = { name: "john", email: "john@mail.com" };

  expect(obj).toEqual(obj2)
});
