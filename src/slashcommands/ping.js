const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Checks response latency'),
	category: 'info',
	usage: 'help',
	isDangerous: false,
	mainServerOnly: false,
	isHidden: false,
    permissions: [],
    devOnly: false,
	aliases: ['delay', 'latency'],
	cooldown: 5,
	
	async execute(interaction) {
		const msg = await interaction.reply('Pinging...');
		msg.edit(`Latency is: ${Math.floor(msg.createdAt - message.createdAt)}ms`);
	}

};

module.exports.name = "ping"