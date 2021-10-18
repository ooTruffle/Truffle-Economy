const Discord = require('discord.js');
module.exports = {
	name: 'info',
	description: 'Some infomation on the bot',
	async execute(message) {
		const info = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setTitle('Bot Info')
        .addFields(
            { name: 'Bots Owner', value: '<@!781305692371157034>\nReubenDollmanYT#4106', inline: true },//mentions me plus my username if im not in the server
            { name: 'Bot Prefix', value: '`re!`', inline: true },
			{ name: '\u200B', value: '\u200B' },// adds a gap betwen the next line
			{ name: 'Packages Used', value: '`Discord.js` Version 13.1.0\n `better-sqlite` Version 7.4.3\n `node` Version 16.6.1\n `unb-api` Version 1.2.3 ', inline: true },// /n makes a new line and this is for crediting all packages used
			{ name: 'Open Source Code Used', value: '[Bean Economy](https://github.com/kyle95wm/bean-economy)\n[RogueWorshipLeader](https://github.com/thewilloftheshadow/RogueWorshipLeader)', inline: true },
        )
		.setTimestamp()
		message.channel.send({ embeds: [info] });
	},
};