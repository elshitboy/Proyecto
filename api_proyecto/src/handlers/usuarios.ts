import { Request, Response } from "express"
import bcrypt from "bcryptjs"
import  Jwt  from "jsonwebtoken"
import Usuario from "../models/Usuario" // Ajusta la ruta según la ubicación real del modelo


//para el acceso al modelo de usuario para interactuar con  la tabla 
// const Usuario = db.Usuario

//clave secreta para firmar los tokens 
const JWT_SECRET = process.env.JWT_SECRET || 'secret_key'

//1 manejador para inicio de sesion 
// endpoint: POST /api/usuarios/login
export const login = async (request: Request, response: Response) => {
    try{
        const { email, password } = request.body

        //validacion de email y password no pueden estar vacios
        if(!email || !password){
            return response.status(400).json({message: 'email y password son obligatorios'})
        }

        //buscamos email en el base de datos
        const usuario = await Usuario.findByPk(email)
        //esto es para si el usuario no existe o la contraseña es incorrecta
        if(!usuario){
            return response.status(401).json({message: 'usuario o contraseña incorrectas'})
        }

        //comparamos la contraseña ingresada con la hasheada en la base de datos
        const contraseñaValida = await bcrypt.compare(password, usuario.password)

        if(!contraseñaValida){
            return response.status(401).json({message: 'usuario o contraseña incorrectas'})
        }

        //si las credenciales son correctas, se genera un token JWT
        //este token se enviara el cliente y se usara para autenticar las solicitudes futuras
        const token= Jwt.sign({ email: usuario.email,}, JWT_SECRET , {expiresIn: '1h'})

        response.status(200).json({message: 'inicio de sesion exitoso', token})

    }catch (error){
        console.error('error en login: ', error)
        response.status(500).json({message: 'error en el servidor'})
    }
}



//2 manejar de para crear un nuevo usuario
// endpoint: POST /api/usuarios
export const crearUsuario = async (request: Request, response: Response) =>{
    try {
        const {email, password} = request.body

        //validacion para email y contraseña no sean vacias
        if(!email || !password){
            return response.status(400).json({message: 'email y password son obligatorios'})
        }

        //validar que la contraseña tenga al menos 6 caracteres
        if(password.length < 6){
            return response.status(400).json({message: 'la contraseña debe tener al menos 6 caracteres'})
        }

        //verificar si el email ya existe
        const usuarioExiste = await Usuario.findByPk(email)
        if(usuarioExiste){
            return response.status(409).json({message:'el email ya existe'})
        }

        //hasheamos la contraseña antes de guardarla en la base de datos
        const hasheoPassword = await bcrypt.hash(password, 10)

        //crea el nuevo usuario en la base de datos
        const nuevoUsuario = await Usuario.create({
            email: email,
            password: hasheoPassword // guardamos la contraseña hasheada
        })

        response.status(201).json({message: 'usuario creado exitosamente'})

    } catch (error) {
        console.error('error al crear usuario: ', error)
        response.status(500).json({message: 'error en el servidor'})
    }
}

//3 manejar para cambiar la contraseña (del propio usuario)
// Endpoint: PUT /api/usuarios/cambiar-contraseña
export const cambiarContraseña = async (request: Request, response:Response) =>{
    try {
        const {email, actualContraseña, nuevaContraseña} = request.body

        //validacion de los campos no esten blancos
        if(!email || !actualContraseña || !nuevaContraseña){
            return response.status(400).json({message: 'todos los campos son obligatorios '})
        }

        //minimo de caracteres en la contraseña nueva al ser creada 
        if(nuevaContraseña.length < 6){
            return response.status(400).json({message:'la nueva contraseña debe tener 6 caracteres minimo'})
        }

        const usuario = await Usuario.findByPk( email)
        //validacion si existe el usuario con ese email
        if(!usuario){
            return response.status(404).json({message: 'usuario no encontrado'})
        }

        //verificar la contraseña actual
        const esContraseñaValida = await bcrypt.compare(actualContraseña, usuario.password)
        if(!esContraseñaValida){
            return response.status(401).json({message: 'la contraseña actual es incorrecta'})
        }

        //hasheamos la nueva contraseña y la guardamos 
        const hasheoNuevaContraseña = await bcrypt.hash(nuevaContraseña, 10)
        usuario.password = hasheoNuevaContraseña
        await usuario.save()

        response.status(200).json({message: 'contraseña cambiada perfectamente'})
        
    } catch (error) {
        console.error('error en el cambiar la contraseña', error)
        response.status(500).json({message: 'error en el servidor'})
    }
}

//4 manejador de cerrar sesion
// Endpoint POST /api/usuarios/salir
export const logout = async (request:Request, response:Response) =>{
    response.status(200).json({message: 'sesion cerrada exitosamente'})
}
