const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping') // text for calling command
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
    // place interaction here
		await interaction.reply('Pong!');
	},
};