module.exports = (app) => {
  const findAll = (req, res) => {
    app.services.account
      .findAll()
      .then((result) => res.json(result).status(200));
  };
  const create = async (req, res) => {
    const result = await app.services.account.save(req.body);

    return res.status(201).json(result[0]);
  };

  return { create, findAll };
};
