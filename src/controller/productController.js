const Product = require('../model/ProductModel');

// get all products
const getProducts = async (req, res, next) => {
  try {
    // find product from server req
    const query = req.body;
    // find product with server req from database
    const products = await Product.find(query);
    // return res
    return res.json(products);

  } catch (error) {
    next(error);
  }
};
// get single product
const getSingleProduct = async (req, res, next) => {
  try {
    // find id from server
    const { id } = req.params;
    // server id use find database id 
    const product = await Product.findOne({ _id: id });
    // check condition
    // if (!product) throw new Error("No product found with this id!");
    return res.json({ product });

  } catch (error) {
    next(error);
  }
};

// post product
const postProduct = async (req, res, next) => {
  try {
    const body = req.body;
    const product = new Product(body);
    await product.save();
    return res.json(product);
  } catch (error) {
    next(error);
  }
};

// delete product
const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params._id;
    const deleteProduct = await Product.deleteOne({ _id: id });
    return res.json(deleteProduct);
  } catch (error) {
    next(error);
  }
  
}


module.exports = {
  getProducts,
  getSingleProduct,
  postProduct,
  deleteProduct
};