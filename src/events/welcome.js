//events getting reworked in future days. This is too tiring.
module.exports = {
    name: "welcome",
    run: async (bot) => {
        const welcChannelID= "1017037262661374042"
        client.on("guildMemberAdd", async (member) => {
        const img = await generateImage(member)
        member.guild.channels.cache.get(welcChannelId).send({
        content: `<@${member.id}> Welcome to the club!`,
        files: [img]
    })
})
    }
}