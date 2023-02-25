const Discord = require("discord.js")

const TOKEN = "MTA3ODc2NzY4MzMwODM2Nzg4Mg.GQ6Via.hHjJQhBIYZCe0fiT36yQrc5B6Zcpae9rU-_HAg"

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ],
})

client.on("ready", () => {
    console.log(`Logged In As ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "babagril"){
        message.reply("kuss")
    }
})

client.login(TOKEN)

