import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma"

export async function getAllPromptsRoute(app: FastifyInstance) { // fastify pede que seja assíncrona
    app.get("/prompts", async () => {
        const prompts = await prisma.prompt.findMany()
        return prompts
    })
}