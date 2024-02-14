const ProductModel = require("../models/product.model.js")

class ProductManager {
    async addProduct({ title, description, price, img, code, stock, category, thumbnails }) {
        try {
    
          if (!title || !description || !price || !code || !stock || !category) {
            console.log("Todos los campos son obligatorios");
            return;
          }
    
          const existeProducto = await ProductModel.findOne({code:code})
          if(existeProducto) {
            console.log("El codigo debe ser unico")
          }
    
          const newProduct = new ProductModel ({
            title,
            description,
            price,
            img,
            code,
            stock,
            category,
            status: true,
            thumbnails: thumbnails || []
          });

          await newProduct.save();
    
        } catch (error) {
          console.log("Error al agregar producto", error);
          throw error; 
        }
      }

      async getProducts() {
        try {
            const productos = await ProductModel.find();
            return productos
        } catch (error) {
            console.log("error en getPr")
        }
      }

      async getProductById(id) {
        try {
            const producto = await ProductModel.findById(id);
            if(!producto){
                console.log("Prodcuto no existe")
                return null
            }

            console.log("Producto Encontrado")
            return producto

        } catch (error) {
            console.log("error en Id")
        }
      }


      async updateProduct(id, productoActualizado) {
        try {
    
            const updatePR = await ProductModel.findByIdAndUpdate(id, productoActualizado )

            if(!updatePR){
                console.log("No se encontro")
                return null
            }

            console.log("Producto actualizado")
            return updatePR

         
        } catch (error) {
          console.log("Error al actualizar el producto", error);
        }
      }


      async deleteProduct(id) {
        try {
          
            const deletePr = await ProductModel.findByIdAndDelete(id)

            if(!deletePr){
                console.log("No se encontro el producto con ese ID")
                return null
            }
            console.log("Producto eliminated")
          
        } catch (error) {
          console.log("Error al eliminar el producto", error);
          throw error;
        }
      }
}

module.exports = ProductManager