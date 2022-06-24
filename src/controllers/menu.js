const { validationResult } = require("express-validator");
const MenuPost = require("../models/product/productModel");

exports.getAllMenu = (req, res, next) => {
  res.json({ status: 200, message: "Success get all data" });
  next();
};

exports.createMenu = (req, res, next) => {
  const errors = validationResult(req);
  //   validation
  if (!errors.isEmpty()) {
    const err = new Error("Invalid value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
    // res.status(400).json({
    //   message: "resquest error",
    //   data: null,
    // });
  }

  const menuDb = new MenuPost({
    nama: req.body.nama,
    harga: req.body.harga,
    kategori: req.body.kategori,
    deskripsi: req.body.deskripsi,
  });

  menuDb
    .save()
    .then((result) => {
      res.status(201).json({
        status: 201,
        message: "Success create new menu",
        data: result,
      });
    })
    .catch((err) => {
      console.log("Database gagal di buat", err);
    });

  // const result = {
  //   message: "Create menu success",
  //   data: {
  //     menu_id: 1,
  //     nama: req.body.nama,
  //     harga: req.body.harga,
  //     kategori: req.body.kategori,
  //     deskripsi: req.body.deskripsi,
  //     Image: "image.png",
  //     body: req.body.body,
  //   },
  // };

  // res.status(201).json(result);
  // console.log("request body :", req.body)
  // res.json({status: 200, message: "Success create data data"})
  // next();
};
