module.exports = {
    name: 'restart',
    description: 'restarts the bot',
    async execute(message) {
        if(!message.member.roles.cache.has("838556717318144070")) return message.channel.send("Sorry your not a staff member you cant run this command")
        message.channel.send("Restarting bot Please wait").then(() => process.exit(0))
    },
}; 