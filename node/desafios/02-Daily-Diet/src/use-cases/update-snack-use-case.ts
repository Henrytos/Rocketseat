import { SnacksRepository } from "@/repositories/snacks-repository";

interface UpdateSnackParams {
    name?: string;
    description?: string;
    date_and_time?: Date;
    is_inside?: boolean;
    session_id?: string;
}

export class UpdateSnackUseCase{
    constructor (private snacksRepository: SnacksRepository) {}
    async execute(id:string,session_id:string,data:UpdateSnackParams){
        await this.snacksRepository.updateSnackById(id,session_id,data)
    }
}