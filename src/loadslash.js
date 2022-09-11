require("dotenv").config()
const dotenv = require("dotenv")

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const Discord = require('discord.js')
const { Client, Intents, Collections, GatewayIntentBits } = require('discord.js');

const LOAD_SLASH = process.argv[2] == "load"

const fs = require('node:fs');
const path = require('node:path');

const client = new Discord.Client({ intents: [
    GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildMembers,
    ] 
})

let bot = {
    client,
}

const guildID = "950932792651423775"

client.on("ready", () => {
    // Get all ids of the servers
    const guild_ids = client.guilds.cache.map(guild => guild.id);
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.slashcommands = new Discord.Collection();


client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)
client.loadSlashCommands(bot, false)

client.on("ready", async () => {
    const guild = client.guilds.cache.get(guildID)
    if (!guild)
        return console.error("Target guild not found")

    await guild.commands.set([...client.slashcommands.values()])
    console.log('Successfully loaded in ${client.slashcommands.size} slash commands')
    process.exit(0);
})


client.login(process.env.TOKEN);