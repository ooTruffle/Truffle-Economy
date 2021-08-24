const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
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
            return;
        }
		const payout = random(100,200);
		await message.client.unb.editUserBalance(message.guild.id, message.author.id, {cash:payout}, "Waited 1 Hour")
        addCooldown("hourly", message.guild.id, message.author.id, 60 * 60);
        const hourly = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setDescription(`You waited 1 Hour for ${payout} <a:Beachball:727421930873028638> ||What a rip off||`)
        .setTimestamp()
		.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/4f25f6d9d083ecae69d6f931e5b0b4ac.webp?size=256' );
        message.channel.send(hourly);

    },
}; 
