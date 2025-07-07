import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';

export function verificarToken(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return response.status(401).json({ message: 'Token no proporcionado' })
    }

    const token = authHeader.split(' ')[1];
    const SECRET = process.env.SECRET_KEY

    try {
        const decoded = jwt.verify(token,SECRET)
        ;(request as any).usuario = decoded // Guardar el usuario decodificado en la solicitud
        next()
    } catch (error) {
        console.error('Error al verificar el token:', error)
        return response.status(403).json({ message: 'Token inválido' })
    }
}