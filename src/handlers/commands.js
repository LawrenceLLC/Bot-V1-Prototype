const { readdirSync } = require('fs');
const Discord = require('discord.js')
const { getFiles } = require("../util/functions")
const fs = require("fs")

module.exports = (bot, reload) => {
    const {client} = bot 

    fs.readdirSync("./src/commands").forEach((category) => {
        //let commands = getFiles("./src/commands/", ".js")
        let commands = getFiles(`./src/commands/`, ".js")
        commands.forEach((f) => {
            if (reload)
                delete require.cache[require.resolve(`../src/commands/${f}`)]
            const command = require(`../commands/${f}`)
            client.commands.set(command.name, command)
        })
    })
    console.log(`Loaded ${client.commands.size} commands`)
}
