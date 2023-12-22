exports.getProducts = (req, res, next) => {
    res.render('admin/products', {
        pageTitle: 'Add Product',
        path: '/admin/products',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
  };