const dotenv = require("dotenv")
require("dotenv").config()
const Discord = require('discord.js')
const fs = require("fs")
const client = new Discord.Client({ intents: [
    "Guilds",
    "GuildMembers",
    "GuildMessages",
    "MessageContent",
    "GuildVoiceStates"
    ] 
})

const CLIENT_ID = "1016670175526920334"
const GUILD_ID = "994618393749630987"
const LOAD_SLASH = process.argv[2] == "load"


let bot = {
    client,
    prefix: "p.",
    owners: ["922832825449857054"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
//client.slashcommands = new Discord.Collection()
//client.buttons = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
//client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
//client.loadButtons = (bot, reload) => require("./handlers/buttons")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)
//client.loadSlashCommands(bot, false)
//client.loadButtons(bot, false)

module.exports = bot


//message logger
client.on('messageCreate', messageCreate => {
    console.log(`[${messageCreate.author.tag}]: ${messageCreate.content}`);
})

//deleted message logger
const logChannelID= "1016716808402776105"
  client.on("messageDelete", (messageDelete) => {
    client.channels.cache.get(logChannelID).send(`${messageDelete.author.tag}'s Message: 
    "${messageDelete.content}" was deleted.`)
});

client.on("messageCreate", (message) => {
    if (message.content == "canyoupleasework"){
        message.reply("no")
    }
})

client.login(process.env.TOKEN);