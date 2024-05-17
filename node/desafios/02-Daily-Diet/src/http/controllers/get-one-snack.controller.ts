import { PrismaSnacksRepository } from "@/repositories/prisma-snacks-repository"
import { GetOneSnacksUseCase } from "@/use-cases/get-one-snack-use-case"
import { FastifyReply, FastifyRequest } from "fastify"
import{z} from 'zod'

export async function getOneSnackController(request:FastifyRequest,reply:FastifyReply){    

    const { session_id  } = request.cookies

    const paramsRequestSchema= z.object({
        id:z.string().cuid()
    })
    const {id} = paramsRequestSchema.parse(request.params)
     if(session_id){
        
    const prismaSnacksRepository= new PrismaSnacksRepository()
    const getOneSnackUseCase = new GetOneSnacksUseCase(prismaSnacksRepository)
    const snack = await getOneSnackUseCase.execute(id,session_id)
     if(snack){
         return reply.status(200).send({snack})
     }
        return reply.status(404).send({message:'Snack not found'})
     }
}