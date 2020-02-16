const router = require("express").Router();
const Users = require("./users-model.js");

const authMiddleware = require("../auth/auth-required-middleware");

router.get("/", authMiddleware, (req, res) => {
  Users.getUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "error getting users" });
    });
});

module.exports = router;
