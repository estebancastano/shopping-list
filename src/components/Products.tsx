import React, { useState } from "react";

const ProductForm: React.FC = () => {
    const [product, setProduct] = useState({
        name: "",
        quantity: "",
        price: "",
        unity: "",
    });

    // Manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    // Manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!product.name || !product.unity) {
            alert("Por favor, completa todos los campos requeridos.");
            return;
        }

        console.log("Producto registrado:", product);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg sm:w-96 md:w-3/4 lg:w-1/2">
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
                        <label className="block text-sm font-medium text-gray-700">Cantidad</label>
                        <input
                            type="number"
                            min={1}
                            name="quantity"
                            value={product.quantity}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Unidad</label>
                        <input
                            name="unity"
                            value={product.unity}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-gray-700 bg-indigo-700 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Registrar Producto
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
