export type Client = import('discord.js').Client
import { applicationCommands } from "../utils/handlers/commandExecute"
import { Events } from "discord.js"

export default async (client: Client): Promise<void> => {

    client.on(Events.InteractionCreate, (interaction: any) => {

        if (interaction.isChatInputCommand()) return applicationCommands(interaction)
    })
}