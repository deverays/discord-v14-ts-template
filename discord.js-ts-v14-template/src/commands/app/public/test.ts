const data = {
    name: "test",
    description: "test",
    cooldown: 10,
    permissions: ["Administrator"],
    execute(interaction: any) {

        console.log(interaction)
    }
}

const slashData = {
    name: data.name,
    description: data.description
}

export { data, slashData }