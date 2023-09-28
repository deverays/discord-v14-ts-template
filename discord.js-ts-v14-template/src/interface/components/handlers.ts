import fs from "fs"

for (const handler of fs.readdirSync("./src/handlers")) {

    if (handler.endsWith(".ts")) {

        import(`../../handlers/${handler}`)
    }
}