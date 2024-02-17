const ProductModel = require("../models/product-model.js")

class ProductManager {


// Funcion para agregar producto //
    async addProduct({ title, description, price, img, code, stock, category, thumbnails }) {
        try {
    
          if (!title || !description || !price || !code || !stock || !category) {
            console.log("Todos los campos son obligatorios");
            return;
          }
    
          const validProducto = await ProductModel.findOne({code:code})
          if(validProducto) {
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




    //  Funcion para encontrar producto //
      async getProducts( { limit = 10, page = 1, sort, query } = {} ) {
        try { 
            const skip = (page - 1) * limit
            let queryOptions = {}

            if( query ){
              queryOptions = { category : query }
            }

            const sortOptions = {}
            if(sort){
              if (sort === 'asc' || sort === 'desc'){
                sortOptions.price = sort === 'asc' ? 1 : -1
              }
            }

            const productos = await ProductModel
                .find(queryOptions)
                .sort(sortOptions)
                .skip(skip)
                .limit(limit);

            const totalProducts = await ProductModel.countDocuments(queryOptions);

            const totalPages = Math.ceil(totalProducts / limit);
            const hasPrevPage = page > 1;
            const hasNextPage = page < totalPages;

            return {
              docs: productos,
              totalPages,
              prevPage: hasPrevPage ? page - 1 : null,
              nextPage: hasNextPage ? page + 1 : null,
              page,
              hasPrevPage,
              hasNextPage,
              prevLink: hasPrevPage ? `/api/products?limit=${limit}&page=${page - 1}&sort=${sort}&query=${query}` : null,
              nextLink: hasNextPage ? `/api/products?limit=${limit}&page=${page + 1}&sort=${sort}&query=${query}` : null,
          };


        } catch (error) {
            console.log("error en getPr")
            throw error
        }
      }



    //  Funcion para encontrar producto por su ID //
      async getProductById(id) {
        try {
            const product = await ProductModel.findById(id);
            if(!product){
                console.log("Prodcuto no existe")
                return null
            }

            console.log("Producto Encontrado")
            return product

        } catch (error) {
            console.log("error en Id")
        }
      }

      // Funcion para actualizar producto //
      async updateProduct(id, productoActualizado) {
        try {
    
            const updatePr = await ProductModel.findByIdAndUpdate(id, productoActualizado )

            if(!updatePr){
                console.log("No se encontro")
                return null
            }
            console.log("Producto actualizado")
            return updatePr

        } catch (error) {
          console.log("Error al actualizar el producto", error);
        }
      }

    //  Funcion para eliminar producto //
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