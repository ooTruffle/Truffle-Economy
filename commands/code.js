const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
module.exports = {
	name: 'code',
	description: 'Write some code for some cash',
	async execute(message) {
		var cooldown = getCooldown("code", message.guild.id, message.author.id);
        if(cooldown != null){
            //There is still a cooldown, tell the user something
            //The cooldown variable is the date when the cooldown ends
			const cooldown = new Discord.MessageEmbed()
			.setColor('#00bfff')
			.setDescription(`Sorry you still have a cooldown`)
			.setTimestamp()
			.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/4f25f6d9d083ecae69d6f931e5b0b4ac.webp?size=256' );
			message.channel.send({ embeds: [cooldown] });
            return;
        } //if there is no cooldown contimue with the code if there is send a msg indacateing that they still have a cooldown and stop 
		const payout = random(50,100); //chose a random number between 50 - 100
		await message.client.unb.editUserBalance(message.guild.id, message.author.id, {cash:payout}, "Did some Codeing")
        addCooldown("code", message.guild.id, message.author.id,  24 * 1800);
		const code = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setDescription(`You did some codeing for ${payout} <a:Beachball:727421930873028638>`)
		.setTimestamp()
		.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/4f25f6d9d083ecae69d6f931e5b0b4ac.webp?size=256' );
        message.channel.send({ embeds: [code] });
	},
};