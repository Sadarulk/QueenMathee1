const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "tsd1",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/episode?url=${q}`)

        return reply(`*Quality -* ${mv_info.result.data.dl_links[0].quality}\n\n*Size -* ${mv_info.result.data.dl_links[0].size}\n\n*Link -* ${mv_info.result.data.dl_links[0].link}`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "tsd2",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/episode?url=${q}`)

        return reply(`*Quality -* ${mv_info.result.data.dl_links[1].quality}\n\n*Size -* ${mv_info.result.data.dl_links[1].size}\n\n*Link -* ${mv_info.result.data.dl_links[1].link}`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "tsd3",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/episode?url=${q}`)

        return reply(`*Quality -* ${mv_info.result.data.dl_links[2].quality}\n\n*Size -* ${mv_info.result.data.dl_links[2].size}\n\n*Link -* ${mv_info.result.data.dl_links[2].link}`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "tsd4",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/episode?url=${q}`)

        return reply(`*Quality -* ${mv_info.result.data.dl_links[3].quality}\n\n*Size -* ${mv_info.result.data.dl_links[3].size}\n\n*Link -* ${mv_info.result.data.dl_links[3].link}`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "tsd5",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/episode?url=${q}`)

        return reply(`*Quality -* ${mv_info.result.data.dl_links[4].quality}\n\n*Size -* ${mv_info.result.data.dl_links[4].size}\n\n*Link -* ${mv_info.result.data.dl_links[4].link}`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "tsd6",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/episode?url=${q}`)

        return reply(`*Quality -* ${mv_info.result.data.dl_links[5].quality}\n\n*Size -* ${mv_info.result.data.dl_links[5].size}\n\n*Link -* ${mv_info.result.data.dl_links[5].link}`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "tsd7",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/episode?url=${q}`)

        return reply(`*Quality -* ${mv_info.result.data.dl_links[6].quality}\n\n*Size -* ${mv_info.result.data.dl_links[6].size}\n\n*Link -* ${mv_info.result.data.dl_links[6].link}`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "tsd8",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/episode?url=${q}`)

        return reply(`*Quality -* ${mv_info.result.data.dl_links[7].quality}\n\n*Size -* ${mv_info.result.data.dl_links[7].size}\n\n*Link -* ${mv_info.result.data.dl_links[7].link}`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "tsd9",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/episode?url=${q}`)

        return reply(`*Quality -* ${mv_info.result.data.dl_links[8].quality}\n\n*Size -* ${mv_info.result.data.dl_links[8].size}\n\n*Link -* ${mv_info.result.data.dl_links[8].link}`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "tsd10",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/episode?url=${q}`)

        return reply(`*Quality -* ${mv_info.result.data.dl_links[9].quality}\n\n*Size -* ${mv_info.result.data.dl_links[9].size}\n\n*Link -* ${mv_info.result.data.dl_links[9].link}`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
