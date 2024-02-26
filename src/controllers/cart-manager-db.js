// const CartModel = require("../models/cart-model.js")

// class CartManager {
    
//     // Funcion para crear un carrito nuevo vacio //
//     async createCart() {
//         try {
//             const newCart = new CartModel({products: []})
//             await newCart.save()
//             return newCart
//         } catch (error) {
//             console.log("Error al crear carrito")
//         }
//     }

//     // Funcion para obtener un carrito por su ID //
//     async getCartById(cartId){
//         try {
//             const cart = await CartModel.findById(cartId)
//             if(!cart){
//                 console.log("no existe el carrito broky")
//                 return null
//             }
//             return cart
//         } catch (error) {
//             console.log("Error al buscar el carritopor ese ID o no existe")
//         }
//     }

//     // Funcion para agregar un producto al carrito//    
//     async addProductCart(cartId, productId, quantity = 1){
//         try {
//             const cart = await this.addProductCart(cartId)
//             const foundProduct = cart.products.find(item => item.product.toString() === productId)

//             if(foundProduct){
//                 foundProduct.quantity += quantity;

//             }else {
//                 cart.products.push({product: productId, quantity})
//             }

//             cart.markModified("products")
//             await cart.save()
//             return cart

//         } catch (error) {
//             console.log("Error al agregar el producto")
//         }
//     }
    

//     // Funcion para eliminar un producto al carrito//    
//     async deleteProductCart(cartId, productId){
//         try {
//             const cart = await CartModel.findById(cartId);

//             if (!cart) {
//                 throw new Error('Carrito no encontrado');
//             }


//             cart.products = cart.products.filter(item => item.product.toString() !== productId);

//             await cart.save();

//             return cart;
//         } catch (error) {
//             console.error('Error al eliminar el producto del carrito', error);
//             throw error;
//         }
//     }


//     // Funcion para actualizar carrito//      
//     async updateCart(cartId, updatedProducts) {
//         try {
//             const cart = await CartModel.findById(cartId);

//             if (!cart) {
//                 throw new Error('Carrito no encontrado');
//             }

//             cart.products = updatedProducts;

//             cart.markModified('products');

//             await cart.save();

//             return cart;
//         } catch (error) {
//             console.error('Error al actualizar el carrito', error);
//             throw error;
//         }
//     }


//     // Funcion para actualizar cantidad de producto//     
//     async updateQuantityProduct(cartId, productId, newQuantity) {
//         try {
//             const cart = await CartModel.findById(cartId);

//             if (!cart) {
//                 throw new Error('Carrito no encontrado');
//             }

//             const productIndex = cart.products.findIndex(item => item.product.toString() === productId);

//             if (productIndex !== -1) {
//                 cart.products[productIndex].quantity = newQuantity;


//                 cart.markModified('products');

//                 await cart.save();
//                 return cart;
//             } else {
//                 throw new Error('Producto no encontrado en el carrito');
//             }
//         } catch (error) {
//             console.error('Error al actualizar la cantidad del producto en el carrito', error);
//             throw error;
//         }
//     }

//     // Funcion para vaciar el carrito //
//     async cleanCart(cartId) {
//         try {
//             const cart = await CartModel.findByIdAndUpdate(
//                 cartId,
//                 { products: [] },
//                 { new: true }
//             );

//             if (!cart) {
//                 throw new Error('Carrito no encontrado');
//             }

//             return cart;
//         } catch (error) {
//             console.error('Error al vaciar el carrito', error);
//             throw error;
//         }
//     }

// }







// module.exports = CartManager