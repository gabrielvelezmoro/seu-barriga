module.exports = (app) => {
  const findAll = (req, res) => {
    app.services.user.findAll().then((result) => res.json(result).status(200));
  };

  const create = async (req, res) => {
    const result = await app.services.user.save(req.body);
    res.status(201).json(result[0]);
  };

  return { findAll, create };
};