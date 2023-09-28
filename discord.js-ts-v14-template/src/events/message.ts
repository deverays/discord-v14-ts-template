export type Client = import('discord.js').Client
import { messageCommands } from "../utils/handlers/commandExecute"
import { Events } from "discord.js"

export default async (client: Client): Promise<void> => {

    client.on(Events.MessageCreate, (message) => {

        if (message.type == 0) return messageCommands(message)
    })
}