const router = require("express").Router();
const Users = require("../users/users-model.js");

const authMiddleware = require("../auth/auth-required-middleware");

router.get("/", (req, res) => {
  res.send(`this is a restricted router`);
});
router.get("/users", (req, res) => {
  Users.getUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "error getting users" });
    });
});

module.exports = router;
