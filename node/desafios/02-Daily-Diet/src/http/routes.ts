import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { checkInSessionIdExits } from "./middlewares/check-session-id-exits";

export async function routesApp(app:FastifyInstance){
    app.post('/',async (request,reply)=>{

        const bodyRequestSchema = z.object({
            name: z.string(),
            description:z.string(),
            date_and_time:z.coerce.date(),
            is_inside:z.boolean()
        }) 
        
        let session_id = request.cookies['session_id'];
        if (!session_id) {
            session_id = randomUUID().toString();
            reply.setCookie('session_id', session_id, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7 // 7 days
            });
        }
        const { name,description,date_and_time,is_inside } = bodyRequestSchema.parse(request.body)
        
        await prisma.snack.create({
            data:{
                name,
                description,
                date_and_time,
                is_inside,
                session_id,
            }
        })

        return reply.status(201).send()
    })
    
    app.get('/',{
        preHandler:[checkInSessionIdExits]
    },async(request,reply)=>{
        const {session_id} = request.cookies
        const snacks = await prisma.snack.findMany({
            where:{
                session_id
            }
        })
        return reply.status(200).send({snacks})
    })
    
    app.get('/:id',{
        preHandler:[checkInSessionIdExits]
    },async (request,reply)=>{    

        const { session_id  } = request.cookies

        const paramsRequestSchema= z.object({
            id:z.string().cuid()
        })
        const {id} = paramsRequestSchema.parse(request.params)
         if(session_id){
            
         const snack = await prisma.snack.findFirst({
             where:{
                 id,
                 session_id,
             }
         })
         if(snack){
             return reply.status(200).send({snack})
         }
            return reply.status(404).send({message:'Snack not found'})
         }
    })

    app.put('/:id',{
        preHandler:[checkInSessionIdExits]
    },async (request,reply)=>{
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
         await prisma.snack.update({
                  where:{
                        id,
                        session_id
                  },
                  data:{
                        name,
                        description,
                        date_and_time,
                        is_inside
                  }
         })
         return reply.status(204).send()
    })
    app.delete('/:id',{
        preHandler:[checkInSessionIdExits]
    },async (request,reply)=>{
        const {session_id} = request.cookies
        
        const paramsRequestSchema= z.object({
            id:z.string().cuid()
        })

        const {id} = paramsRequestSchema.parse(request.params)
        await prisma.snack.delete({
            where:{
                id,
                session_id
            }
        })
        return reply.status(204).send()
        
    })
    app.get('/summary',async (request,reply)=>{
        const { session_id }=request.cookies
        const snacks = await prisma.snack.findMany({
            where:{
                session_id
            }
        })
        const quanitySnack = snacks.length
        const quanitySnackInside = snacks.filter(snack=>snack.is_inside).length
        const quanitySnackOutside = snacks.filter(snack=>!snack.is_inside).length
        return reply.status(200).send({
            quanitySnack,
            quanitySnackInside,
            quanitySnackOutside
        })
    })
}