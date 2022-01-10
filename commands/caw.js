const { SlashCommandBuilder } = require('@discordjs/builders');
let caws = ['CAW!', 'CAAW!', 'CAW! CAAW!'];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('caw')
		.setDescription('My power is unmatched!'),
	async execute(interaction) {
		await interaction.reply(`${caws[getRandomIntInclusive(0, 2)]}`);
	},
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}