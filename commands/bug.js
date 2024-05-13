const Discord = require('discord.js');
module.exports = {
	name: 'bug',
	description: 'Think your found a bug?',
	async execute(message) {
		const bug = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setTitle('Report a bug')
        .addFields(
            { name: 'Think you have found a bug', value: 'Keep in mind the cooldowns not working is a bug im currently working on fixing **dont report it**', inline: true },
			{ name: '\u200B', value: '\u200B' },// adds a gap betwen the next line
			{ name: 'Make a issue on the offical repo', value: 'https://github.com/ooTruffle/Truffle-Economy/issues', inline: true },     
		)
		.setTimestamp()
		message.channel.send({ embeds: [bug] });
	},
};