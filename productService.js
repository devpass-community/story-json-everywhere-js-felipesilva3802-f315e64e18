async function getProduct(productId) {
    const apiUrl = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await apiUrl.json()
    return product
}

module.exports = getProduct;
