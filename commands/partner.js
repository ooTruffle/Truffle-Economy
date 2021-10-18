const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
module.exports = {
    name: 'partner',
    description: 'partners paycheck',
    async execute(message) {
        if(!message.member.roles.cache.has("804282910541611008")) return message.channel.send("Sorry you need to be a server partner to run this command This command will only work here https://discord.gg/sBFWp6ZfMb at this point in time")
        var cooldown = getCooldown("partner", message.guild.id, message.author.id);
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
        }
        const payout = random(200,400);
        await message.client.unb.editUserBalance(message.guild.id, message.author.id, {cash:payout}, "For being a awesome partner")
        addCooldown("partner", message.guild.id, message.author.id, 24 * 3600);
        const partner = new Discord.MessageEmbed()
        .setColor('#dcfc19')
        .setDescription(`Thanks for partnering with the server here's ${payout} <a:Beachball:727421930873028638>`)
        .setTimestamp()
		.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/4f25f6d9d083ecae69d6f931e5b0b4ac.webp?size=256' );
        message.channel.send({ embeds: [partner] });
    },
}; 