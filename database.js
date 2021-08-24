const db = require('better-sqlite3')('database.sqlite');
db.prepare(`CREATE TABLE IF NOT EXISTS cooldown (
    commandname text NOT NULL, 
    guildid text NOT NULL, 
    userid text NOT NULL, 
    endsat text NOT NULL
)`).run();

function getCooldown(commandname, guildid, userid){
  db.prepare("DELETE FROM cooldown WHERE endsat < date('now')").run();
  return db.prepare('SELECT endsat FROM cooldown WHERE `commandname`=? AND `guildid`=? AND `userid`=? ORDER BY `endsat` DESC LIMIT 1').get(commandname, guildid, userid);
}

function addCooldown(commandname, guildid, userid, seconds){ //Cooldown in seconds
  return db.prepare("INSERT INTO cooldown (commandname, guildid, userid, endsat) VALUES (?, ?, ?, date('now',?))").run(commandname, guildid, userid, "+"+seconds+" second").changes
}
module.exports = {
    db:db,
    getCooldown:getCooldown,
    addCooldown:addCooldown
}
