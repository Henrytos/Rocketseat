import { PrismaSnacksRepository } from "@/repositories/prisma-snacks-repository";
import { UpdateSnackUseCase } from "@/use-cases/update-snack-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod'
export async function updateOneSnackController(request: FastifyRequest, reply: FastifyReply) {
    
        const {session_id}= request.cookies
        const paramsRequestSchema= z.object({
               id:z.string().cuid()
        })
        const bodyRequestSchema = z.object({
               name:z.string(),
               description:z.string(),
               date_and_time:z.coerce.date(),
               is_inside:z.boolean()
        })

        const {id}= paramsRequestSchema.parse(request.params)
        const {name,date_and_time,description,is_inside}= bodyRequestSchema.parse(request.body)
        const prismaSnacksRepository= new PrismaSnacksRepository()
        const updateSnackUseCase = new UpdateSnackUseCase(prismaSnacksRepository)

        if(session_id){
            await updateSnackUseCase.execute(id,session_id,{name,date_and_time,description,is_inside})
            return reply.status(204).send()
        }

        return reply.status(404).send({message:'Snack not found'})

}