const Discord = require('discord.js');
const {prefix} = require('../config.json');
module.exports = {
	name: 'help',
	description: 'Tempoary',
	async execute(message) {
		const info = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setTitle('Help')
        .setDescription(`Bot's Current Commands`)
        .addFields(
            { name: prefix + 'ping', value: 'Displays the bots Ping', inline: true },
            { name: prefix + 'help', value: 'Displays this', inline: true },
			{ name: prefix + 'index', value: 'cooldowns', inline: true },
			{ name: prefix + 'info', value: 'Displays info for the bot', inline: true },
        )
        const unb = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setDescription(`Unb giveing Commands`)
        .addFields(
            { name: prefix + 'work', value: 'Ever 30M', inline: true },
            { name: prefix + 'daily', value: 'Ever 24H', inline: true },
            { name: prefix + 'hourly', value: 'Ever 1H', inline: true },
            { name: prefix + 'ally', value: 'Ever 24H', inline: true },
            { name: prefix + 'partner', value: 'Ever 24H', inline: true },
            { name: prefix + 'staffpay', value: 'Ever 24H', inline: true },
        ) //add's a gap between each command
		.setTimestamp()
		.setFooter('Prefix is ' + prefix );
        message.channel.send({ embeds: [info, unb] });
	},
};