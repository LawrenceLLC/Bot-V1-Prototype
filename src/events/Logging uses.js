const dotenv = require("dotenv")
require("dotenv").config()

// Message log in console
module.exports = {
    name: "msgConsolLog",
    run: async ({ messageCreate }) => {
            console.log(`[${messageCreate.author.tag}]: ${messageCreate.content}`);
    }
};

// Deleted message logger. For now i'll have the id in dotenv for no particular reason.
module.exports = {
    name: "DelMsgLog",
    run: async () => {
        client.on("messageDelete", (messageDelete) => {
            client.channels.cache.get(process.env.LOG_ID).send(`${messageDelete.author.tag}'s Message: "${messageDelete.content}" was deleted.`)
    }
)}
};

// These events don't function here btw