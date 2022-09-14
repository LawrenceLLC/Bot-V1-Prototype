const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with 'Pong!' and checks the latency"),
	isDMAllowed: true,
	isDangerous: false,
	mainServerOnly: false,
	isHidden: false,
	aliases: ['delay', 'latency'],
	cooldown: 5,
    run: async ({ client, interaction }) => {
        const msg = await interaction.editReply('Pinging...');
		msg.edit(`Pong!\nLatency: ${Math.floor(msg.createdAt - interaction.createdAt)}ms\nAPI Latency (Bot): ${client.ws.ping}ms`);  
    },
};
