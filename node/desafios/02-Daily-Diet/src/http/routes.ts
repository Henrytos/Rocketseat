import { FastifyInstance } from "fastify";
import { checkInSessionIdExits } from "./middlewares/check-session-id-exits";
import { createSnackController } from "./controllers/create-snack.controller";
import { getAllSnacksController } from "./controllers/get-all-snacks.controller";
import { getOneSnackController } from "./controllers/get-one-snack.controller";
import { deleteSnackController } from "./controllers/delete-snack.controller";
import { getSummarySnacksController } from "./controllers/get-summary-snacks.controller";
import { updateOneSnackController } from "./controllers/update-one-snack.controller";

export async function routesApp(app:FastifyInstance){
    app.post('/',createSnackController)
    app.get('/',{preHandler:[checkInSessionIdExits]},getAllSnacksController)
    app.get('/:id',{preHandler:[checkInSessionIdExits]},getOneSnackController)
    app.delete('/:id',{preHandler:[checkInSessionIdExits]},deleteSnackController)
    app.get('/summary',{preHandler:[checkInSessionIdExits]},getSummarySnacksController)
    app.put('/:id',{preHandler:[checkInSessionIdExits]},updateOneSnackController)
}