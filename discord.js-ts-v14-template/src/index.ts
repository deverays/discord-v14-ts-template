import { Client, GatewayIntentBits } from "discord.js"
import "dotenv/config"
import "./utils/database/dbConnection"
import "./interface/index"
import "colors"

const intents = [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent]
const client: any = new Client({ intents })

export default client