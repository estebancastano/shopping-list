import React, { useState } from "react";

const ProductForm: React.FC = () => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: null as File | null,
    });

    // Manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    // Manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!product.name || !product.price || !product.stock) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        console.log("Producto registrado:", product);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-indigo-600">Registrar Producto</h2>

                <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Descripción</label>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Precio</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Stock</label>
                        <input
                            type="number"
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Registrar Producto
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
