import { randomUUID } from "node:crypto";
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const tasks = database.select_all_task();
      return res.end(JSON.stringify(tasks));
    },
  },
  {
    method: "GET",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;
      const task = database.select_task(id);
      if (!task) {
        return res.writeHead(404);
      }
      return res.writeHead(200).end(task);
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const task = req.body;
      console.log(task);

      return res.writeHead(204).end();
    },
  },
];
