const { SlashCommandBuilder } = require('@discordjs/builders');
const characters = ['Ironclad', 'Silent', 'Defect', 'Watcher'];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sts')
		.setDescription('Returns a Slay the Spire character to play.'),
	async execute(interaction) {
		await interaction.reply(`${caws[getRandomIntInclusive(0, characters.length - 1)]}`);
	},
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}