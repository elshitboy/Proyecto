// src/services/authService.ts
import axios from "axios";

interface LoginResponse {
    token: string;
    usuario: {
        id: number;
        email: string;
    };
}
export const loginService = async (email: string, password: string): Promise<LoginResponse> => {
    const response = await axios.post("http://localhost:3000/api/usuarios/login", {
        email,
        password
    });

    return response.data;
};

interface cambiarContra {
    message: string;
    usuario: {
        email: string;
        password1: string;
        password2: string;
    };
}

interface crearUser {
    message: string;
    usuario: {
        email: string;
        password: string;
    };
}




export const cambiarContra = async (email: string, actualContraseña: string, nuevaContraseña: string): Promise<cambiarContra> => {
    const response = await axios.put("http://localhost:3000/api/usuarios/cambiar-contrasena", {
        email,
        actualContraseña,
        nuevaContraseña
    });

    return response.data;
};

export const crearUser = async (email: string, password: string): Promise<crearUser> => {
    const response = await axios.post("http://localhost:3000/api/usuarios", {
        email,
        password,
    });

    return response.data;
};
