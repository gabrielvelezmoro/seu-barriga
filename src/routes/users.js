module.exports = (app) => {
  const findAll = (req, res) => {
    app.services.user.findAll().then((result) => res.json(result).status(200));
  };

  const create = async (req, res) => {
    try {
      const result = await app.services.user.save(req.body);
      return res.status(201).json(result[0]);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

  return { findAll, create };
};
