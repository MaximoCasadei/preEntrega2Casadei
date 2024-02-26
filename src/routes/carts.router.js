// const express = require("express");
// const router = express.Router();
// const CartManager = require("../controllers/cart-manager-db.js");
// const CartModel = require("../models/cart-model.js");
// const cartManager = new CartManager();


// // Creamos carrito en la ruta //
// router.post("/", async (req, res) => {
//     try {
//         const newCart = await cartManager.createCart();
//         res.json(newCart);
//     } catch (error) {
//         console.error("Error al crear un nuevo carrito", error);
//         res.status(500).json({ error: "Error interno del servidor" });
//     }
// });


// // Listamos los productos del carrito //
// router.get("/:cid", async (req, res) => {
//     const cartId = req.params.cid;

//     try {
//         const cart = await CartModel.findById(cartId);
//         res.json(cart.products);
//     } catch (error) {
//         console.error("Error al obtener el carrito", error);
//         res.status(500).json({ error: "Error interno del servidor" });
//     }
// });


// // Actualizamos los carritos //
// router.post("/:cid/product/:pid", async (req, res) => {
//     const cartId = req.params.cid;
//     const productId = req.params.pid;
//     const quantity = req.body.quantity || 1;

//     try {
//         const updateCart = await cartManager.addProductCart(cartId, productId, quantity);
//         res.json(updateCart.products);
//     } catch (error) {
//         console.error("Error al agregar producto al carrito", error);
//         res.status(500).json({ error: "Error interno del servidor" });
//     }
// });


// // Eliminamos un producto a elegir //
// router.delete('/:cid/product/:pid', async (req, res) => {
//     try {
//         const cartId = req.params.cid;
//         const productId = req.params.pid;

//         const updatedCart = await cartManager.deleteProductCart(cartId, productId);

//         res.json({
//             status: 'Success',
//             message: 'Producto eliminado del carrito correctamente',
//             updatedCart,
//         });
//     } catch (error) {
//         console.error('Error al eliminar el producto', error);
//         res.status(500).json({
//             status: 'Error',
//             error: 'Error interno del servidor',
//         });
//     }
// });


// // Actualizamos productos //
// router.put('/:cid', async (req, res) => {
//     const cartId = req.params.cid;
//     const updatedProducts = req.body;

//     try {
//         const updatedCart = await cartManager.updateCart(cartId, updatedProducts);
//         res.json(updatedCart);
//     } catch (error) {
//         console.error('Error al actualizar el carrito', error);
//         res.status(500).json({
//             status: 'Error',
//             error: 'Error interno del servidor',
//         });
//     }
// });



// // actualizamos la cantidad de productos //
// router.put('/:cid/product/:pid', async (req, res) => {
//     try {
//         const cartId = req.params.cid;
//         const productId = req.params.pid;
//         const newQuantity = req.body.quantity;

//         const updatedCart = await cartManager.updateQuantityProduct(cartId, productId, newQuantity);

//         res.json({
//             status: 'success',
//             message: 'Cantidad del producto actualizada correctamente',
//             updatedCart,
//         });
//     } catch (error) {
//         console.error('Error al actualizar la cantidad del producto en el carrito', error);
//         res.status(500).json({
//             status: 'Error',
//             error: 'Error interno del servidor',
//         });
//     }
// });

// // Vaciamos carrito //
// router.delete('/:cid', async (req, res) => {
//     try {
//         const cartId = req.params.cid;

//         const updatedCart = await cartManager.cleanCart(cartId);

//         res.json({
//             status: 'Success',
//             message: 'Todos los productos del carrito fueron eliminados correctamente',
//             updatedCart,
//         });
//     } catch (error) {
//         console.error('Error al vaciar el carrito', error);
//         res.status(500).json({
//             status: 'error',
//             error: 'Error interno del servidor',
//         });
//     }
// });

// module.exports = router;