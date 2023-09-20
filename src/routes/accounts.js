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

  const get = (req, res) => {
    app.services.account
      .find({ id: req.params.id })
      .then((result) => res.json(result).status(200));
  };

  const update = (req, res) => {
    app.services.account
      .update(req.params, req.body)
      .then((result) => res.json(result[0]).status(200));
  };

  return { create, findAll, get, update };
};
