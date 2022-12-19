const express = require("express");
const router = express.Router();

router.use("/", require("./home"));
router.use("/user", require("./user"));
router.use("/charity", require("./user"));
router.use("/contact", require("./contact"));


module.exports = router