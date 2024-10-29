const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "Get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
search: '',
download: '',
ai: '',
owner: '',
movie: '',
other: ''
};

 for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `│► ${config.PREFIX}${commands[i].pattern}\n`;
 }
}   

let madeMenu = `*👋 HELLO ${pushname}*

「 ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴇɴᴜ 」

╭──────────●
│❯ MAIN COMMANDS ❮
│   ───────
${menu.main}╰───────────●
╭───────────●
│❯ DOWNLOAD COMMANDS ❮
│   ───────
${menu.download}╰───────────●
╭───────────●
│❯ SEARCH COMMANDS ❮
│   ───────
${menu.search}╰───────────●
╭───────────●
│❯ AI COMMANDS ❮
│   ───────
${menu.ai}╰───────────●
╭───────────●
│❯ OWNER COMMANDS ❮
│   ───────
${menu.owner}╰───────────●
╭───────────●
│❯ MOVIE COMMANDS ❮
│   ───────
${menu.movie}╰───────────●
╭───────────●
│❯ OTHER COMMANDS ❮
│   ───────
${menu.other}╰───────────●

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
