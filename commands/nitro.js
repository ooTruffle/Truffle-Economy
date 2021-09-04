const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
module.exports = {
    name: 'nitro',
    description: 'Open a nitro box and win a prize',
    async execute(message) {
        if(!message.member.roles.cache.has("724388249803554890")) return message.channel.send("Sorry you need to be a server booster to run this command")
        var cooldown = getCooldown("nitro", message.guild.id, message.author.id);
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
        const payout = random(200,400);
        await message.client.unb.editUserBalance(message.guild.id, message.author.id, {cash:payout}, "For Boosting the server")
        addCooldown("nitro", message.guild.id, message.author.id, 24 * 3600);
        const nitro = new Discord.MessageEmbed()
        .setColor('#93bfe6')
        .setDescription(`Thanks for being a awesome server Booster here's ${payout} <a:Beachball:727421930873028638>`)
        .setTimestamp()
		.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/4f25f6d9d083ecae69d6f931e5b0b4ac.webp?size=256' );
        message.channel.send(nitro);
    },
}; 