const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('relic')
		.setDescription('Returns information for a given relic')
    .addStringOption(option => 
      option.setName('relic name')
        .setDescription('The name of the relic')
        .setRequired(true)
        .addChoice('Test Choice 1', 'test1')
        .addChoice('Test Choice 2', 'test2')
    ),
	async execute(interaction) {
		await interaction.reply(`Here be relics`);
	},
};