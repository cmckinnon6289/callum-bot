const { SlashCommandBuilder, User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nickname')
		.setDescription('Changes the bot\'s nickname. Only Callum can do this.')
        .addStringOption(option =>
            option.setName('Name')
                .setDescription('The desired nickname.')
                .setRequired(true)),
	async execute(interaction) {
        if (interaction.client.id != "160868562284576768") {
		    await interaction.reply({content: 'You do not have permission to do this!', ephermal: true})
        } else {
            const nicknameInput = interaction.options.getString('Name') ?? 'callum bot';
            await Message.guild.me.setNickname(nicknameInput,"requested by bot owner")
            await interaction.reply({content: 'Nickname set successfully.', ephermal: true})
        }
	},
};