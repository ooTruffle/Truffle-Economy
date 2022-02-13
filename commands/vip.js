const amari = new (require('amaribot.js').AmariBot)({amari token})
const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
const { unbemote } = require('../config.json');
function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
module.exports = {
	name: 'vip',
	description: 'Daily Paycheck for everyone',
	async execute(message) {
		var payout = 0;
		if(cooldown != null){
            //There is still a cooldown, tell the user something
            //The cooldown variable is the date when the cooldown ends
			const cooldown = new Discord.MessageEmbed()
			.setColor('#00bfff')
			.setDescription(`Sorry you still have a cooldown`)
			.setTimestamp()
			.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/a40155300210c15023ed94378f502e4c.png?size=1024' );
			message.channel.send({ embeds: [cooldown] });
            return;
        }
		if (user.level >= 1) {
 			 payout = 10000;
  		if(user.level >= 5) {
   			 payout += 50000;
 		 }
 		 if(user.level >= 10) {
   			 payout += 50000;
  }
  	await message.client.unb.editUserBalance(message.guild.id, message.author.id, {cash:payout}, "Waited 1 Day")
 	 addCooldown("daily", message.guild.id, message.author.id,  24 * 3600);
  	const daily = new Discord.MessageEmbed()
  	.setColor('#00bfff')
  	.setDescription(`You waited 24 Hours for ${payout} ${unbemote} ||Thats more then i get paid||`)
  	.setTimestamp()
  	.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/a40155300210c15023ed94378f502e4c.png?size=1024' );
  	message.channel.send({ embeds: [daily] });
},
}
else {
  // Say you can't use this command or something like that
  const no = new Discord.MessageEmbed()
  	.setColor('#00bfff')
 	.setDescription(`Sorry wou dont have atleast level 1 so this command wont work`)
  	.setTimestamp()
 	.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/a40155300210c15023ed94378f502e4c.png?size=1024' );
	 message.channel.send({ embeds: [no] });
}