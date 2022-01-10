const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sts')
		.setDescription('Returns a Slay the Spire character to play.'),
	async execute(interaction) {
		await interaction.reply({embeds: [getCharacter()]} );
	},
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getCharacter() {
  const characters = ['ironclad', 'silent', 'defect', 'watcher'];
  const character = characters[getRandomIntInclusive(0, characters.length -1)];

  switch (character) {
    case 'ironclad':
      return ironclad;
    case 'silent':
      return silent;
    case 'defect':
      return defect;
    case 'watcher':
      return watcher;
    default:
      break;
  }
}

const ironclad =  new MessageEmbed()
  .setColor('#602020')
  .setTitle('Ironclad')
  .setURL('https://slay-the-spire.fandom.com/wiki/Ironclad')
  .setDescription('The remaining soldier of the Ironclads. Sold his soul to harness demonic energies.')

const silent =  new MessageEmbed()
  .setColor('#008060')
  .setTitle('Silent')
  .setURL('https://slay-the-spire.fandom.com/wiki/Silent')
  .setDescription('A deadly huntress from the foglands. Eradicates foes with daggers and poisons.')

const defect =  new MessageEmbed()
  .setColor('#005c99')
  .setTitle('Defect')
  .setURL('https://slay-the-spire.fandom.com/wiki/Defect')
  .setDescription('Combat automaton which became self-aware. Ancient technology allows manipulation of Orbs.')

const watcher =  new MessageEmbed()
  .setColor('#5900b3')
  .setTitle('Watcher')
  .setURL('https://slay-the-spire.fandom.com/wiki/Watcher')
  .setDescription('A blind ascetic who has come to "Evaluate" the Spire. Master of the divine Stances.')
  
