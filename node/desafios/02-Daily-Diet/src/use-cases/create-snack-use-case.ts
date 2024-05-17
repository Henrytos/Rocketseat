import { SnacksRepository } from "@/repositories/snacks-repository";

interface CreateSnackParams {
    name: string;
    description: string;
    date_and_time: Date;
    is_inside: boolean;
    session_id: string;
}

export class CreateSnackUseCase{
    constructor(private snacksRepository:SnacksRepository){}
    async execute(data:CreateSnackParams){
        const snack = await this.snacksRepository.create(data)
        return snack
    }
}