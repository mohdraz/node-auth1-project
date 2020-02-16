const router = require("express").Router();

const authRouter = require("../auth/auth-router");
const userRouter = require("../users/user-router");

router.use("/auth", authRouter);
router.use("/users", userRouter);

router.get("/", (req, res) => {
  res.json({ api: "The API is up and running" });
});

module.exports = router;
