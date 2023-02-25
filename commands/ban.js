const { SlashCommandBuilder } = require('discord.js');
const { AuditLog } = require('./config.json')
const channel = client.channels.cache.get(AuditLog);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans a user.')
		.addUserOption(option =>
            option.setName('Target')
                .setDescription('The user you are banning.')
                .setRequired(true))
		.addStringOption(option =>
            option.setName('Reason')
                .setDescription('The reason for ban.')
                .setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('Target')
		const reason = interaction.options.getString('Reason')
		await Guild.members.ban(user,reason)
		await channel.send(`User ${user} has been banned by <@${message.author.id}>.\n**Reason:** ${reason}.`)
	},
};  