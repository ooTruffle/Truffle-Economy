const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
const { unbemote } = require('../config.json');
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
module.exports = {
    name: 'ally',
    description: 'allys paycheck',
    async execute(message) {
        if(!message.member.roles.cache.has("780199373001850910")) return message.channel.send("Sorry your not a ally so you cant run this command ||become one by dming the Server Owner ||")
        var cooldown = getCooldown("ally", message.guild.id, message.author.id);
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
        const payout = random(200,400);
        await message.client.unb.editUserBalance(message.guild.id, message.author.id, {cash:payout}, "For being a awesome ally")//tells the api to increase the users cash balence
        addCooldown("ally", message.guild.id, message.author.id, 48 * 3600); //adds a cooldown to the DB 
        const ally = new Discord.MessageEmbed()
        .setColor('#93bfe6')
        .setDescription(`Thanks for being a awesome server ally here's ${payout} ${unbemote}`)
        .setTimestamp()
		.setFooter('Reply by ReubenDollmanYT#4106', 'https://cdn.discordapp.com/avatars/781305692371157034/a40155300210c15023ed94378f502e4c.png?size=1024' );
        message.channel.send({ embeds: [ally] });
    },
}; 