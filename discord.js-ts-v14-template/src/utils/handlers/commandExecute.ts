export type Interaction = import("discord.js").Interaction
export type Message = import("discord.js").Message
import { Colors } from "discord.js"
import { cooldownCheck } from "../cooldown"
import { t } from "i18next"

const prefix: any = process.env.PREFIX

const applicationCommands = async (interaction: any) => {

    const { commandName, locale } = interaction
    const command: any = interaction.client.appCommands.get(commandName)

    if (!command) return console.log('There is no such command')

    if (command.permissions) {
        if (command.permissions.some((p: any) => !interaction.member.permissions.has(p))) return
    }

    const cooldown = cooldownCheck(command, interaction.user.id)

    if (cooldown) return interaction.reply({
        embeds: [{
            description: t("cooldown", { ns: "common", lng: locale, cooldown }),
            color: Colors.Yellow
        }]
    }).then((msg: any) => {
        setTimeout(() => {
            msg.delete().catch(() => { })
        }, 7000)
    })

    try { command.execute(interaction) } catch { return }
}

const messageCommands = async (message: any) => {
    if (!message.content.startsWith(process.env.PREFIX)) return

    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()
    const command: any = message.client.messageCommands.get(commandName)

    if (!command) return

    if (command.permissions) {
        if (command.permissions.some((p: any) => !message.member.permissions.has(p))) return
    }

    const cooldown = cooldownCheck(command, message.author.id)

    if (cooldown) return message.reply({
        embeds: [{
            description: t("cooldown", { ns: "common", lng: message.guild.preferredLocale, cooldown }),
            color: Colors.Yellow
        }]
    }).then((msg: any) => {
        setTimeout(() => {
            msg.delete().catch(() => { })
        }, 7000)
    })

    try { command.execute(message, args) } catch { return }
}

export { applicationCommands, messageCommands }