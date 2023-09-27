const { Op } = require("sequelize");

const models = require("../models");

const browse = (req, res) => {
  models.category
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.category
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const category = req.body;

  // TODO validations (length, format...)

  category.id = parseInt(req.params.id, 10);

  models.category
    .update(category)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const category = req.body;

  // TODO validations (length, format...)

  models.category
    .insert(category)
    .then(([result]) => {
      res.location(`/categories/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.category
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const search = (req, res) => {
  const query = req.query.query;
  console.log("Received query:", query); // Get the query parameter from the request URL

  // Implement the logic to search for categories based on the query parameter
  models.category
    .findAll({
      where: {
        // Define your search criteria here, for example, searching in the 'name' or 'description' fields
        // You can customize this based on your database schema
        [Op.or]: [
          { name: { [Op.like]: `%${query}%` } }, // Example: search in 'name' field
          { description: { [Op.like]: `%${query}%` } }, // Example: search in 'description' field
        ],
      },
    })
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  search,
};
