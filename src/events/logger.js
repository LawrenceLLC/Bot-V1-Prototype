module.exports = {
    name: "message-logger",
    run: async ({client, message, args}) => {
        client.on('messageCreate', messageCreate => {
            console.log(`[${messageCreate.author.tag}]: ${messageCreate.content}`);
        })
    }
}