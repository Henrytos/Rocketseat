import { prisma } from "@/lib/prisma"
import { Prisma } from "@prisma/client"
import { SnacksRepository } from "./snacks-repository"

export class PrismaSnacksRepository implements SnacksRepository{
    async create(data:Prisma.SnackCreateInput){
        const snack = await prisma.snack.create({
            data
        })
        return snack
    }
    async  findAllSnacks(session_id:string){
        const snacks = await prisma.snack.findMany({
            where:{
                session_id,
            }
        })
        return snacks
    }
    async updateSnackById(id: string, session_id: string, data: Prisma.SnackUpdateInput) {
        const snack = await prisma.snack.update({
            where:{
                id,
                session_id
            },
            data
        })
        return snack
    }

    async findSnackById(id: string,session_id:string){ {
        const snack = await prisma.snack.findFirst({
            where:{
                id,
                session_id
            }
        })
        return snack
    }
   
    
    
}}