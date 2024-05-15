import { randomUUID } from "node:crypto";
import fs from "node:fs/promises";

const databasePath = new URL("../db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(databasePath, "utf8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database));
  }

  create_task(title, description) {
    const task = {
      id: randomUUID,
      title,
      description,
      completed_at: null,
      created_at: new Date(),
      update_at: new Date(),
    };

    if (this.#database.tasks) {
      this.#database.tasks.push(task);
    } else {
      this.#database.tasks = [task];
    }
    this.#persist();
  }

  select_all_task() {
    return this.#database.tasks ?? [];
  }

  select_task(id) {
    if (this.#database.tasks) {
      console.log(this.#database.tasks);
      const tasks = this.#database.tasks.filter((row) => row.id === id);
      return tasks;
    }
    return [];
  }
}
