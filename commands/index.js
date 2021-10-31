const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
module.exports = {
    name: 'index',
    description: 'List commands',
    async execute(message) {
    var content = ["daily","hourly","books","code","nitro","ally","partner","staffpay"].map(e=>{
    var cooldown = getCooldown(e, message.guild.id, message.author.id);
    if(cooldown == null) return [0, "🟢 "+e]; // Pass some info into the next part, so it knows how to sort the commands
    else return [1, "🟡 "+e+" - <t:"+Math.floor(new Date(cooldown.endsat).getTime()/1000)+":R>"]; // Showing the cooldown as a Discord timestamp should make this easier
  }).sort((a,b)=>{
    if(a[0] != b[0]) return b[0] - a[0]; // If one of the commands is without cooldown, and the other one has a cooldown, or vice versa, return... this
    a[1].localeCompare(b[1]);
  }).map(e=>e[1]) // Throw away the extra info that we gave to .sort and just save the text
    .join("\n"); // Join the text together with \n
  
  message.channel.send(`${content}`) //D.JS v13 compatible
  message.channel.send(`----------------`)      
  message.channel.send(`🟢 is a command you can run`)
  message.channel.send(`🟡 is a command that still has a cooldown`)
}
}