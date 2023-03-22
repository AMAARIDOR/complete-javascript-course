const ShoppingCart = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 235;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

ShoppingCart.addToCart('apple', 4);
ShoppingCart.addToCart('pizza', 5);
