module.exports = {
	name: 'ping',
	helpTitle: 'Ping',
	category: 'info',
	usage: 'ping',
	description: 'Check response latency',
	isDangerous: false,
	mainServerOnly: false,
	isHidden: false,
    permissions: [],
    devOnly: false,
	aliases: ['delay', 'latency'],
	cooldown: 5,
	run: async ({client, message, args}) => {
		const msg = await message.reply('Pinging...');
		msg.edit(`Latency is: ${Math.floor(msg.createdAt - message.createdAt)}ms`);
	},
};

module.exports.name = "ping"