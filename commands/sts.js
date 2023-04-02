const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');


let characterImage = new MessageAttachment('assets/images/relics/cultistmask.png')
const characters = require("../assets/json/characters.json")

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sts')
    .setDescription('Returns a Slay the Spire character to play.'),
  async execute(interaction) {
    let char = getCharacter()
    let embed = buildEmbed(char);
    await interaction.reply({ embeds: [embed], files: [characterImage] });
  },
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getCharacter() {
  let character = characters[getRandomIntInclusive(0, characters.length - 1)];
  return character;
}

function buildEmbed(character) {
  let imagePath = `./assets/images/characters/${character.image}`.toString();
  characterImage = new MessageAttachment(imagePath);
  let attachmentString = `attachment://${character.image}`.toString();
  let embeddedMessage = new MessageEmbed()
    .setTitle(`${character.name}`)
    .setColor(`${character.color}`)
    .setURL(`${character.url}`)
    .setDescription(`${character.description}`)
    .setThumbnail(`${attachmentString}`)
    
  return embeddedMessage;
}