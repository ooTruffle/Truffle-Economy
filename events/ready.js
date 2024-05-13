const Discord = require("discord.js");
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag} on Discord`);
		client.channels.cache.get('807872325848399903').send('Bot Has Successfully Started')
		client.user.setActivity(`People Empty there balance || te!help`, { type: 'WATCHING' });
	},
};