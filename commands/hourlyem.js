const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
module.exports = {
    name: 'hourlyem',
    description: 'hourly but with a embed',
    async execute(message) {
		if(!message.member.roles.cache.has("718451711525781534")) return message.channel.send("Sorry this is a testing command")
		const payout = random(100,200);
		await message.client.unb.editUserBalance(message.guild.id, message.author.id, {cash:payout}, "Waited 1 Hour (test)")
		const daily = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setDescription(`You waited 24 Hours for ${payout} <a:Beachball:727421930873028638>  ||Thats more then i get paid||`)
		.setTimestamp()
		.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/4f25f6d9d083ecae69d6f931e5b0b4ac.webp?size=256' );
        message.channel.send(daily)
    },
}; 