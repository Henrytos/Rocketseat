import { PrismaSnacksRepository } from "@/repositories/prisma-snacks-repository"
import { FastifyReply, FastifyRequest } from "fastify"

export async function getSummarySnacksController(request:FastifyRequest,reply:FastifyReply){
        const { session_id }=request.cookies
        const prismaSnacksRepository= new PrismaSnacksRepository()
        if(session_id){
            const snacks = await prismaSnacksRepository.findAllSnacks(session_id)
    
            const quanitySnack = snacks.length
            const quanitySnackInside = snacks.filter(snack=>snack.is_inside).length
            const quanitySnackOutside = snacks.filter(snack=>!snack.is_inside).length
            return reply.status(200).send({
                quanitySnack,
                quanitySnackInside,
                quanitySnackOutside
            })
        }
}