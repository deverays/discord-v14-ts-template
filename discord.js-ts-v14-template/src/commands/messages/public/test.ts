const data = {
    name: "test",
    cooldown: 10,
    permissions: ["Administrator"],
    execute(message: any, args: any) {

        console.log(message)
    }
}

export { data }