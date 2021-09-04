const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
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
			.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/4f25f6d9d083ecae69d6f931e5b0b4ac.webp?size=256' );
			message.channel.send(cooldown)
            return;
        }
		const payout = random(1000,2000);
		await message.client.unb.editUserBalance(message.guild.id, message.author.id, {cash:payout}, "Waited 1 Day")
        addCooldown("daily", message.guild.id, message.author.id,  24 * 3600);
		const daily = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setDescription(`You waited 24 Hours for ${payout} <a:Beachball:727421930873028638> ||Thats more then i get paid||`)
		.setTimestamp()
		.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/4f25f6d9d083ecae69d6f931e5b0b4ac.webp?size=256' );
        message.channel.send(daily)
	},
};