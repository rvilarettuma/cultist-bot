const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

const ic_img = new MessageAttachment('assets/images/characters/ironclad.png');
const ironclad =  new MessageEmbed()
  .setColor('#602020')
  .setTitle('Ironclad')
  .setURL('https://slay-the-spire.fandom.com/wiki/Ironclad')
  .setDescription('The remaining soldier of the Ironclads. Sold his soul to harness demonic energies.')
  . setThumbnail('attachment://ironclad.png')
  .addField('Strategies:', 'https://slay-the-spire.fandom.com/wiki/Ironclad#Strategies')

const si_img = new MessageAttachment('assets/images/characters/silent.png');
const silent =  new MessageEmbed()
  .setColor('#008060')
  .setTitle('Silent')
  .setURL('https://slay-the-spire.fandom.com/wiki/Silent')
  .setDescription('A deadly huntress from the foglands. Eradicates foes with daggers and poisons.')
  . setThumbnail('attachment://silent.png')
  .addField('Strategies:', 'https://slay-the-spire.fandom.com/wiki/Silent#Strategy')

const df_img = new MessageAttachment('assets/images/characters/defect.png');
const defect =  new MessageEmbed()
  .setColor('#005c99')
  .setTitle('Defect')
  .setURL('https://slay-the-spire.fandom.com/wiki/Defect')
  .setDescription('Combat automaton which became self-aware. Ancient technology allows manipulation of Orbs.')
  . setThumbnail('attachment://defect.png')
  .addField('Strategies:','https://slay-the-spire.fandom.com/wiki/Defect#Strategy')
  
const wt_img = new MessageAttachment('assets/images/characters/watcher.png');
const watcher =  new MessageEmbed()
  .setColor('#5900b3')
  .setTitle('Watcher')
  .setURL('https://slay-the-spire.fandom.com/wiki/Watcher')
  .setDescription('A blind ascetic who has come to "Evaluate" the Spire. Master of the divine Stances.')
  . setThumbnail('attachment://watcher.png')
  .addField('Strategies:', 'https://slay-the-spire.fandom.com/wiki/Watcher#Strategies')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sts')
		.setDescription('Returns a Slay the Spire character to play.'),
	async execute(interaction) {
    let {char, img} = getCharacter();
		await interaction.reply({embeds: [char], files: [img]} );
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
  let char = "";
  let img = "";

  console.log(character)
  switch (character) {
    case 'ironclad':
      char = ironclad;
      img = ic_img;
      return {char, img};
    case 'silent':
      char = silent;
      img = si_img
      return {char, img};
    case 'defect':
      char = defect;
      img = df_img;
      return {char, img};
    case 'watcher':
      char = watcher;
      img = wt_img;
      return {char, img};
    default:
      break;
  }
}