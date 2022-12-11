const Product = require('../model/ProductModel');

const getProducts = async (req, res, next) => {
  try {
    // find product from server req
    const query = req.query;
    // find product with server req from database
    const products = await Product.find(query);
    // return res
    console.log(products);
    return res.json(products);
    
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getProducts,
};