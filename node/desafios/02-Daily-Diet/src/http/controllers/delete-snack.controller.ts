import { PrismaSnacksRepository } from "@/repositories/prisma-snacks-repository";
import { DeleteSnackUseCase } from "@/use-cases/delete-snack-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod'

export async function deleteSnackController(request:FastifyRequest,reply:FastifyReply) {
        const {session_id} = request.cookies
        const paramsRequestSchema= z.object({
            id:z.string().cuid()
        })
        
        const prismaSnacksRepository= new PrismaSnacksRepository()
        const deleteSnackUseCase  = new DeleteSnackUseCase(prismaSnacksRepository)
        const {id} = paramsRequestSchema.parse(request.params)
        if(session_id){
            await deleteSnackUseCase.execute(id,session_id)
            return reply.status(204).send()
        }   
        return reply.status(404).send({message:'Snack not found'})
}