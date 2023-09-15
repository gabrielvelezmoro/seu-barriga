module.exports = (app) => {
  const save = async (account) => app.db("accounts").insert(account, "*");

  return { save };
};
