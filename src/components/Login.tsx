import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg sm:w-96 md:w-3/4 lg:w-1/2">
                <h2 className="text-3xl font-bold text-center text-indigo-600">
                    Bienvenido
                </h2>
                <p className="mt-2 text-sm text-center text-gray-600">
                    Inicia sesión para continuar
                </p>


                <div className="flex justify-center mt-4">
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            console.log("Login Exitoso:", credentialResponse);
                        }}
                        onError={() => {
                            console.log("Login con Google falló");
                        }}
                    />
                </div>

                <div className="relative flex items-center justify-center w-full mt-6">
                    <span className="absolute px-2 text-gray-500 bg-white">o</span>
                    <hr className="w-full border-gray-300" />
                </div>


                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Correo Electrónico
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Contraseña
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Iniciar Sesión
                    </button>
                </form>

                <p className="mt-4 text-sm text-center text-gray-600">
                    ¿No tienes cuenta?{" "}
                    <a href="/register" className="text-indigo-600 hover:underline">
                        Regístrate
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
