const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans a user.'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};