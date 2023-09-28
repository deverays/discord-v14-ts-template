import client from "../index"
import fs from "fs"

for (const event of fs.readdirSync("./src/events")) {

    if (event.endsWith(".ts")) {

        import(`../events/${event}`).then(e => e.default(client))
    }
}