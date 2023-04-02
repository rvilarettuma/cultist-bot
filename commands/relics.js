const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

const Fuse = require('fuse.js')
const relics = require("../assets/json/relics.json");
const characters = require("../assets/json/characters.json")
let image = new MessageAttachment("./assets/images/relics/cantUseRelic.png");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('relic')
    .setDescription('Returns information for a given relic')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('The name of the relic')
        .setRequired(true)
    ),
  async execute(interaction) {
    let userInput = interaction.options.getString('name');
    let relic = findRelic(userInput)
    let embed = buildEmbed(relic)
    await interaction.reply({ embeds: [embed], files: [image] });
  },
};

function buildEmbed(relic) {

  let imagePath = `./assets/images/relics/${relic.item.image}.png`.toString();
  image = new MessageAttachment(imagePath);
  let attachmentString = `attachment://${relic.item.image}.png`.toString();

  for (let i in characters) {
    if (characters[i].name == relic.item.character) {
      color = characters[i].color
    }
  }

  let embeddedMessage = new MessageEmbed()
    .setTitle(`${relic.item.name}`)
    .setDescription(`${relic.item.description}`)
    .addField(' ', `*${relic.item.flavor}*`)
    .setThumbnail(`${attachmentString}`)
    .setColor(color)

  return embeddedMessage;
}

function findRelic(userInput) {
  const options = {
    includeScore: true,
    keys: ["name"]
  }
  const fuse = new Fuse(relics, options);
  const result = fuse.search(userInput);
  
  return result[0];
}