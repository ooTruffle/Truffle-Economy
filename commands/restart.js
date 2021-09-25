module.exports = {
    name: 'restart',
    description: 'restarts the bot',
    async execute(message) {
        if(!message.member.roles.cache.has("780177134396112896")) return message.channel.send("Sorry your not a Owner you cant run this command")
        message.channel.send("Restarting bot Please wait").then(() => process.exit(0))
    },
}; 