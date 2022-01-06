const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'Tempoary',
	async execute(message) {
		const info = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setTitle('Help')
        .setDescription(`Bot's Current Commands`)
        .addFields(
            { name: '`c!ping`', value: 'Displays the bots Ping', inline: true },
            { name: '`c!help`', value: 'Displays this', inline: true },
			{ name: '`c!index`', value: 'cooldowns', inline: true },
			{ name: '`c!info`', value: 'Displays info for the bot', inline: true },
        )
        const unb = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setDescription(`Unb giveing Commands`)
        .addFields(
            { name: '`c!extra_work`', value: 'Ever 30M', inline: true },
            { name: '`c!daily`', value: 'Ever 24H', inline: true },
            { name: '`c!hourly`', value: 'Ever 1H', inline: true },
            { name: '`c!ally`', value: 'Ever 24H', inline: true },
            { name: '`c!partner`', value: 'Ever 24H', inline: true },
            { name: '`c!staffpay`', value: 'Ever 24H', inline: true },
        ) //add's a gap between each command
		.setTimestamp()
		.setFooter('Prefix is c!' );
        message.channel.send({ embeds: [info, unb] });
	},
};