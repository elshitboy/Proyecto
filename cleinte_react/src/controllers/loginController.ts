import { cambiarContra, loginService, crearUser} from "../services/authService";

export const loginController = async (
    email: string,
    password: string,
    onSuccess: () => void,
    onError: (msg: string) => void
) => {
    try {
        const data = await loginService(email, password);

        if (data.token) {
            localStorage.setItem("token", data.token);
            onSuccess();
        } else {
            onError("Token no recibido.");
        }
    } catch (error) {
        console.error(error);
        onError("Credenciales incorrectas o error en el servidor.");
    }
};

export const cambiarContras = async (
    email: string,
    password1: string,
    password2: string,
    onSuccess: () => void,
    onError: (msg: string) => void
) => {
    try {
        const data = await cambiarContra(email, password1, password2);

        if (data.message) {
            onSuccess();
        } else {
            onError("contraseña actual inconrrecta.");
        }
    } catch (error) {
        console.error(error);
        onError("fallo en: " + error );
    }

    

};

export const crearCuenta = async (
    email: string,
    password: string,
    onSuccess: () => void,
    onError: (msg: string) => void
) => {
    try {
        const data = await crearUser(email, password);

        if (data.message) {
            onSuccess();
        } else {
            onError("No se pudo crear el usuario.");
        }
    } catch (error) {
        console.error(error);
        onError("Error en." + error);
    }
};
