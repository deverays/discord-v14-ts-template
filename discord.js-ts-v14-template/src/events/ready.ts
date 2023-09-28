export type Client = import('discord.js').Client
import { applicationCommandSet } from "../handlers/commandHandler"
import { Events } from "discord.js"

export default async (client: Client): Promise<void> => {

    client.once(Events.ClientReady, () => {

        console.log("The bot successfully joined the server")
        
        applicationCommandSet()
    })

    client.login(process.env.TOKEN)
}