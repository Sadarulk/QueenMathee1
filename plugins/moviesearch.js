const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "mvsearch",
    desc: "search movies",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
    if(!q) return reply("*_Please give me a movie name_*")

const mv = await fetchJson(`${apilink}/movie/sinhalasub/search?text=${q}`)
       
const array = [mv.result.data]
        
        for(let index = 0; index < array.length; index++)
            
            console.log(array[index].title)
            console.log(array[index].link)

        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
