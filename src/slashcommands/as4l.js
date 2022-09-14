const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder()
    .setName("as4l")
    .setDescription("Represent the hood 🔫"),
	isDangerous: false,
	mainServerOnly: false,
	isHidden: false,
    run: async ({ interaction }) => {
        await interaction.editReply('Fo\' sho\'!');
    },
};
