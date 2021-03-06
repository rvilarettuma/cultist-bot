const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

const Fuse = require('fuse.js')
const relics = require("./RelicsList/relicList");



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
		await interaction.reply({embeds: [embed]});
	},
};

function buildEmbed(relic) {
  let embeddedMessage = new MessageEmbed()
      .setTitle(`${relic.item.name}`)
      .addField('Rarity:', `${relic.item.rarity}`)
      .setDescription(`${relic.item.description}`)
      .addField('Flavor:', `${relic.item.flavor}`)

  return embeddedMessage
}

function findRelic(userInput) {

  const options = {
    includeScore: true,
    keys: ["name"]
  }
  const fuse = new Fuse(relics, options)
  const result = fuse.search(userInput)

  return result[0]
}