const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
const { unbemote } = require('../config.json');
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
module.exports = {
    name: 'partner',
    description: 'partners paycheck',
    async execute(message) {
        if(!message.member.roles.cache.has("804282910541611008")) return message.channel.send("Sorry you need to be a server partner to run this command")
        var cooldown = getCooldown("partner", message.guild.id, message.author.id);
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
        const payout = random(200,400);
        await message.client.unb.editUserBalance(message.guild.id, message.author.id, {cash:payout}, "For being a awesome partner")
        addCooldown("partner", message.guild.id, message.author.id, 48 * 3600);
        const partner = new Discord.MessageEmbed()
        .setColor('#dcfc19')
        .setDescription(`Thanks for partnering with the server here's ${payout} ${unbemote}`)
        .setTimestamp()
		.setFooter('Reply by ooTruffle', 'https://cdn.discordapp.com/avatars/781305692371157034/a6e13267c3a1ef4814d1524a8808b226.png' );
        message.channel.send({ embeds: [partner], reply: {
    messageReference: message,
    failIfNotExists: false
}, allowedMentions: {
    repliedUser: false
} });
    },
}; 