module.exports = (app) => {
  const save = async (account) => app.db("accounts").insert(account, "*");
  const findAll = (filter = {}) => app.db("accounts").where(filter).select();
  const find = (filter = {}) => app.db("accounts").where(filter).first();

  return { save, findAll, find };
};
