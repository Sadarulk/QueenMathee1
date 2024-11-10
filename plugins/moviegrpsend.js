const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'
const id = `120363355439809658@g.us`

cmd({
    pattern: "mvs1",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

const url = `${mv_info.result.data.dl_links[0].link}`;

// Replace '/u/' with '/api/file/'
const updatedUrl = url.replace('/u/', '/api/file/');

const cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[0].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`
        
       await conn.sendMessage( id ,{document: {url: updatedUrl },mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`})
    
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs2",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

const url = `${mv_info.result.data.dl_links[1].link}`;

// Replace '/u/' with '/api/file/'
const updatedUrl = url.replace('/u/', '/api/file/');

        const cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[1].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

        await conn.sendMessage( id ,{document: {url: updatedUrl },mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs3",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

const url = `${mv_info.result.data.dl_links[2].link}`;

// Replace '/u/' with '/api/file/'
const updatedUrl = url.replace('/u/', '/api/file/');

        const cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[2].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

        await conn.sendMessage( id ,{document: {url:updatedUrl},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs31",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

const url = `${mv_info.result.data.dl_links[3].link}`;

// Replace '/u/' with '/api/file/'
const updatedUrl = url.replace('/u/', '/api/file/');

        const cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[3].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

        await conn.sendMessage( id ,{document: {url:updatedUrl},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs4",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        const cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[3].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage( id ,{document: {url:mv_info.result.data.dl_links[3].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs5",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        const cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[4].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage( id ,{document: {url:mv_info.result.data.dl_links[4].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs6",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        const cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[5].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage( id ,{document: {url:mv_info.result.data.dl_links[5].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `$[cap}`})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs7",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        const cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[6].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage( id ,{document: {url:mv_info.result.data.dl_links[6].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs8",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        const cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[7].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage( id ,{document: {url:mv_info.result.data.dl_links[7].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:`${cap}`})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs9",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        const cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[8].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage( id ,{document: {url:mv_info.result.data.dl_links[8].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs10",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        const cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[9].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage( id ,{document: {url:mv_info.result.data.dl_links[9].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs11",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        const cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[10].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage( id ,{document: {url:mv_info.result.data.dl_links[10].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs12",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        const cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[11].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage( id ,{document: {url:mv_info.result.data.dl_links[11].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs13",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

await conn.sendMessage( id ,{document: {url:mv_info.result.data.dl_links[12].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs14",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

await conn.sendMessage( id ,{document: {url:mv_info.result.data.dl_links[13].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvs15",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

await conn.sendMessage( id ,{document: {url:mv_info.result.data.dl_links[14].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
