module.exports = (app) => {
  const save = async (account) => app.db("accounts").insert(account, "*");
  const findAll = (filter = {}) => app.db("accounts").where(filter).select();
  const find = (filter = {}) => app.db("accounts").where(filter).first();
  const update = (id, account) =>
    app.db("accounts").where(id).update(account, "*");
  const remove = (id) => app.db("accounts").where(id).delete();

  return { save, findAll, find, update, remove };
};
