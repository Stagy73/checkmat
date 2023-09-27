const CloudManager = require("../models/CloudManager");
// Adjust the path as needed
const cloudManager = new CloudManager();

const browse = (req, res) => {
  cloudManager
    .readAll()
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error("Error in browse:", err);
      res.status(500).send("Internal Server Error");
    });
};

const read = (req, res) => {
  const cloudId = req.params.id;

  cloudManager
    .read(cloudId)
    .then((cloud) => {
      if (!cloud) {
        res.sendStatus(404); // Cloud not found
      } else {
        res.send(cloud);
      }
    })
    .catch((err) => {
      console.error("Error in read:", err);
      res.status(500).send("Internal Server Error");
    });
};

const edit = (req, res) => {
  const cloud = req.body;

  // TODO: Implement validations (length, format...)

  cloud.id = req.params.id;

  cloudManager
    .update(cloud)
    .then((result) => {
      if (result === "Cloud updated successfully") {
        res.sendStatus(204); // Cloud updated successfully
      } else {
        res.sendStatus(404); // Cloud not found
      }
    })
    .catch((err) => {
      console.error("Error in edit:", err);
      res.status(500).send("Internal Server Error");
    });
};

const add = (req, res) => {
  const cloud = req.body;

  // TODO: Implement validations (length, format...)

  cloudManager
    .create(cloud)
    .then((cloudId) => {
      res.location(`/clouds/${cloudId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error("Error in add:", err);
      res.status(500).send("Internal Server Error");
    });
};

const destroy = (req, res) => {
  const cloudId = req.params.id;

  cloudManager
    .delete(cloudId)
    .then((result) => {
      if (result === "Cloud deleted successfully") {
        res.sendStatus(204); // Cloud deleted successfully
      } else {
        res.sendStatus(404); // Cloud not found
      }
    })
    .catch((err) => {
      console.error("Error in destroy:", err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
