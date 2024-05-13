const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
const { unbemote } = require('../config.json');
function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
module.exports = {
	name: 'daily',
	description: 'Daily Paycheck for everyone',
	async execute(message) {
		var cooldown = getCooldown("daily", message.guild.id, message.author.id);
        if(cooldown != null){
            //There is still a cooldown, tell the user something
            //The cooldown variable is the date when the cooldown ends
			const cooldown = new Discord.MessageEmbed()
			.setColor('#00bfff')
			.setDescription(`Sorry you still have a cooldown`)
			.setTimestamp()
			.setFooter('Reply by ooTruffle', 'https://cdn.discordapp.com/avatars/781305692371157034/a6e13267c3a1ef4814d1524a8808b226.png' );
			message.channel.send({ embeds: [cooldown], reply: {
    messageReference: message,
    failIfNotExists: false
}, allowedMentions: {
    repliedUser: false
} });
            return;
        }
		const payout = random(100,200);
		await message.client.unb.editUserBalance(message.guild.id, message.author.id, {cash:payout}, "Waited 1 Day")
        addCooldown("daily", message.guild.id, message.author.id,  24 * 3600);
		const daily = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setDescription(`You waited 24 Hours for ${payout} ${unbemote} ||Thats more then i get paid||`)
		.setTimestamp()
		.setFooter('Reply by ooTruffle', 'https://cdn.discordapp.com/avatars/781305692371157034/a6e13267c3a1ef4814d1524a8808b226.png' );
        message.channel.send({ embeds: [daily], reply: {
    messageReference: message,
    failIfNotExists: false
}, allowedMentions: {
    repliedUser: false
} });
	},
};