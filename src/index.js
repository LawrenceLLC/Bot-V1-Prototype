require("dotenv").config();
const Discord = require("discord.js")
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
    ]
})

//Bot login
client.on("ready", () => {
    console.log(`${client.user.tag} is on a roll!`);
});

//message logger
client.on('messageCreate', messageCreate => {
    console.log(`[${messageCreate.author.tag}]: ${messageCreate.content}`);
})

//deleted message logger
  client.on("messageDelete", (messageDelete) => {
    client.channels.cache.get('1016716808402776105').send(`${messageDelete.author.tag}'s Message: 
    "${messageDelete.content}" was deleted.`)
});





client.login(process.env.DISCORD_BOT_TOKEN);