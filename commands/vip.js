const { amaritoken, unbemote } = require('../config.json');
const amari = new (require('amaribot.js').AmariBot)(amaritoken)
const { getCooldown, addCooldown } = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = {
    name: 'vip',
    description: 'Daily Paycheck for everyone',
    async execute(message) {
       const user = await amari.getUserLevel(message.guild.id, message.author.id);
        var payout = 0;
        var cooldown = getCooldown("vip", message.guild.id, message.author.id);
        if (cooldown != null) {
            //There is still a cooldown, tell the user something
            //The cooldown variable is the date when the cooldown ends
            const cooldown = new Discord.MessageEmbed()
                .setColor('#00bfff')
                .setDescription(`Sorry you still have a cooldown`)
                .setTimestamp()
                .setFooter('Reply by ReubenDollmanYT#4106', 'https://images-ext-1.discordapp.net/external/vNk-U4RsiwjXTLQNe9KnTYmQ_B69E4XEyA9bOUgrxRg/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/781305692371157034/06e0739ec3da06c65e2022359317ddf3.png');
            message.channel.send({ embeds: [cooldown], reply: {
    messageReference: message,
    failIfNotExists: false
}, allowedMentions: {
    repliedUser: false
} });
            return;
        }
        if (user != null && user.level >= 1) {
            payout = 100;
            if (user.level >= 5) {
                payout += 50;
            }
            if (user.level >= 10) {
                payout += 50;
            }
            if (user.level >= 20) {
                payout += 50;
            }
            await message.client.unb.editUserBalance(message.guild.id, message.author.id, { cash: payout }, "Level Reward")
            addCooldown("vip", message.guild.id, message.author.id, 5 * 3600);
            const vip = new Discord.MessageEmbed()
                .setColor('#00bfff')
                .setDescription(`You got ${payout} ${unbemote} from your amari level`)
                .setTimestamp()
                .setFooter('Reply by ReubenDollmanYT#4106', 'https://images-ext-1.discordapp.net/external/vNk-U4RsiwjXTLQNe9KnTYmQ_B69E4XEyA9bOUgrxRg/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/781305692371157034/06e0739ec3da06c65e2022359317ddf3.png');
            message.channel.send({ embeds: [vip], reply: {
    messageReference: message,
    failIfNotExists: false
}, allowedMentions: {
    repliedUser: false
} });;
        } else {
            // Say you can't use this command or something like that
            const no = new Discord.MessageEmbed()
                .setColor('#00bfff')
                .setDescription(`Sorry you dont have amari level 1 or higher that is required to be able to run this command`)
                .setTimestamp()
                .setFooter('Reply by ReubenDollmanYT#4106', 'https://images-ext-1.discordapp.net/external/vNk-U4RsiwjXTLQNe9KnTYmQ_B69E4XEyA9bOUgrxRg/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/781305692371157034/06e0739ec3da06c65e2022359317ddf3.png');
            message.channel.send({ embeds: [no], reply: {
    messageReference: message,
    failIfNotExists: false
}, allowedMentions: {
    repliedUser: false
} });
        }
    }
}