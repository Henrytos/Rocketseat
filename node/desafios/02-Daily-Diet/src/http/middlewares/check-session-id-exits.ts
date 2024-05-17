import { FastifyReply, FastifyRequest } from "fastify";

export async function checkInSessionIdExits(request:FastifyRequest,reply:FastifyReply){
    let {session_id} = request.cookies
    if(!session_id){
        return reply.status(401).send({message: 'Unauthorized'})
    }
    
}