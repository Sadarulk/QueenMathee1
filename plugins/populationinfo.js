const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "population",
    desc: "get population in world",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchJson(`https://api.nexoracle.com/details/population?apikey=d2d02440c70a98a415`)

let news = `*_QUEEN MATHEE POPULATION INFO 👥_*

■ *Total population :* ${data.result.current.total}
 
■ *Male population :* ${data.result.current.male}

■ *Female population :* ${data.result.current.female}

■ *This year 👇*

*Births :* ${data.result.this_year.births}

*Deaths :* ${data.result.this_year.deaths}

■ *Today 👇*

*Births :* ${data.result.today.births}

*Deaths :* ${data.result.today.deaths}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{text: news},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)

}
})
