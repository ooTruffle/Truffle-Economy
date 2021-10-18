const Discord = require("discord.js");
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag} on Discord`);
		client.channels.cache.get('889344944395911198').send('Bot Has Successfully Started')
	},
};