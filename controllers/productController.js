const prisma = require("../lib/prisma");

// Validasi body untuk POST dan PUT: name string tidak kosong, price bilangan bulat >= 0
const isValidProductBody = ({ name, price }) =>
  typeof name === "string" &&
  name.trim() !== "" &&
  Number.isInteger(price) &&
  price >= 0;

const INVALID_BODY_MESSAGE =
  "name (string) dan price (bilangan bulat >= 0) wajib diisi";

const getAllProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({ orderBy: { id: "asc" } });
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const product = Number.isInteger(id)
      ? await prisma.product.findUnique({ where: { id } })
      : null;

    if (!product) {
      return res.status(404).json({ message: "Produk tidak ditemukan" });
    }

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const body = req.body || {};

    if (!isValidProductBody(body)) {
      return res.status(400).json({ message: INVALID_BODY_MESSAGE });
    }

    const newProduct = await prisma.product.create({
      data: { name: body.name.trim(), price: body.price },
    });

    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllProducts, getProductById, createProduct };
