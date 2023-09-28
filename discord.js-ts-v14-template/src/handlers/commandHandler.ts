import { Collection } from "discord.js"
import client from "../index"
import fs from "fs"

client.appCommands = new Collection()
client.messageCommands = new Collection()
var applicationCommands: any = []

/* Application Commands */
for (const folder of fs.readdirSync("./src/commands/app")) {

    for (const file of fs.readdirSync(`./src/commands/app/${folder}`)) {

        import(`../commands/app/${folder}/${file}`).then((a: any) => {
            client.appCommands.set(a.data.name, a.data)
            applicationCommands.push(a.slashData)
        })
    }
}

export const applicationCommandSet = () => {

    client.application.commands.set(applicationCommands)
}

/* Message Commands */
for (const folder of fs.readdirSync("./src/commands/messages")) {

    for (const file of fs.readdirSync(`./src/commands/messages/${folder}`)) {

        import(`../commands/messages/${folder}/${file}`).then((a: any) => client.messageCommands.set(a.data.name, a.data))
    }
}