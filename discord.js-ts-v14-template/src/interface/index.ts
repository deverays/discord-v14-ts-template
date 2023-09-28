import fs from "fs"
import "./language/index"

for (const component of fs.readdirSync("./src/interface/components")) {

    if (component.endsWith(".ts")) {

        import(`./components/${component}`)
    }
}