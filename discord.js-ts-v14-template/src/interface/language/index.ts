import Backend from "i18next-fs-backend"
import i18next from "i18next"
import fs from "fs"

i18next.use(Backend).init({
    fallbackLng: "en-US",
    preload: fs.readdirSync("./src/interface/language/locales"),
    ns: fs.readdirSync("./src/interface/language/locales/en-US").map(file => file.replace(".json", "")),
    backend: {
        loadPath: "./src/interface/language/locales/{{lng}}/{{ns}}.json"
    }
})