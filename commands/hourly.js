const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
const { unbemote } = require('../config.json');
function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
module.exports = {
    name: 'hourly',
    description: 'hourly',
    async execute(message) {
        var cooldown = getCooldown("hourly", message.guild.id, message.author.id);
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
		const payout = random(100,200);
		await message.client.unb.editUserBalance(message.guild.id, message.author.id, {cash:payout}, "Waited 1 Hour")
        addCooldown("hourly", message.guild.id, message.author.id, 60 * 60);
        const hourly = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setDescription(`You waited 1 Hour for ${payout} ${unbemote} ||What a rip off||`)
        .setTimestamp()
		.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/a40155300210c15023ed94378f502e4c.png?size=1024' );
        message.channel.send({ embeds: [hourly] });

    },
}; 
