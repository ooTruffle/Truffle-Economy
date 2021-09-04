const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
const client = new Discord.Client();
function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
module.exports = {
    name: 'test',
    description: 'A command for testing new fectures',
    async execute(message) {
		client.on('ready', () => {
			client.user.setActivity(`eeeeeeeee|| rd!help`, { type: 'WATCHING' });
			});
    },
}; 