import { PrismaSnacksRepository } from "@/repositories/prisma-snacks-repository"
import { GetAllSnacksUseCase } from "@/use-cases/get-all-snacks-use-case"
import { FastifyReply, FastifyRequest } from "fastify"

export async function getAllSnacksController(request:FastifyRequest,reply:FastifyReply){
        const {session_id} = request.cookies
        const prismaSnacksRepository= new PrismaSnacksRepository()
        const getAllSnackUseCase = new GetAllSnacksUseCase(prismaSnacksRepository)
        if (session_id!=undefined){

            const snacks = await getAllSnackUseCase.execute(session_id)
            return reply.status(200).send({snacks})
        }
}
    
