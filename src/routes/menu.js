const { application } = require("express");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const menuContoller = require("../controllers/menu");

router.get("/", menuContoller.getAllMenu);
router.post(
  "/",
  [
    body("nama").isLength({ min: 2 }).withMessage("incorrect value"),
    body("harga").isLength({ min: 2 }).withMessage("incorrect value"),
    body("kategori").isLength({ min: 2 }).withMessage("incorrect value"),
    body("deskripsi").isLength({ min: 2 }).withMessage("incorrect value"),
  ],
  menuContoller.createMenu
);

module.exports = router;
