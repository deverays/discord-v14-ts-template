import mongoose from "mongoose"

dbConnection()

async function dbConnection() {
    await mongoose.connect(process.env.DATABASE as string)
    .then(() => console.log("I have successfully connected to the database"))
    .catch((e) => e)
}