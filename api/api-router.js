const router = require("express").Router();

const authRouter = require("../auth/auth-router");
const userRouter = require("../users/user-router");

const restrictedRouter = require("../restricted/restricted-router.js");
const authMiddleware = require("../auth/auth-required-middleware.js");

router.use("/auth", authRouter);
router.use("/users", userRouter);

router.use("/restricted", authMiddleware, restrictedRouter);

router.get("/", (req, res) => {
  res.json({ api: "The API is up and running" });
});

module.exports = router;
