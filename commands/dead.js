const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eventinfo')
		.setDescription('Creates and sends a new embed message with information about an upcoming event.')
        .addStringOption(option =>
            option.setName('location')
                .setDescription('The location of the event.'))
		.addStringOption(option =>
			option.setName('hello')
				.setDescription("burh")),
			
	async execute(interaction) {
		await interaction.reply("dead command");
        
	},
};