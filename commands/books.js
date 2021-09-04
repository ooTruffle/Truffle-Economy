const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
module.exports = {
	name: 'books',
	description: 'read some books for some cash',
	async execute(message) {
		var cooldown = getCooldown("books", message.guild.id, message.author.id);
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
		const payout = random(50,100);
		await message.client.unb.editUserBalance(message.guild.id, message.author.id, {cash:payout}, "Read some Books")
        addCooldown("books", message.guild.id, message.author.id,  24 * 1800);
		const books = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setDescription(`You read some books for ${payout} <a:Beachball:727421930873028638>`)
		.setTimestamp()
		.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/4f25f6d9d083ecae69d6f931e5b0b4ac.webp?size=256' );
        message.channel.send(books)
	},
};