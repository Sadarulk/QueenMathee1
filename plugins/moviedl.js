const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "mvd1",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

// Input URL
const url = `${mv_info.result.data.dl_links[0].link}`;

// Replace '/u/' with '/api/file/'
const updatedUrl = url.replace('/u/', '/api/file/');



       await conn.sendMessage(from,{document: {url: updatedUrl },mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
    
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd2",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        
        
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

        // Input URL
const url = `${mv_info.result.data.dl_links[1].link}`;

// Replace '/u/' with '/api/file/'
const updatedUrl = url.replace('/u/', '/api/file/');

        await conn.sendMessage(from,{document: {url: updatedUrl },mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd3",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        
        
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

// Input URL
const url = `${mv_info.result.data.dl_links[2].link}`;

// Replace '/u/' with '/api/file/'
const updatedUrl = url.replace('/u/', '/api/file/');

        await conn.sendMessage(from,{document: {url:updatedUrl},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd31",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

        
        
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

// Input URL
const url = `${mv_info.result.data.dl_links[3].link}`;

// Replace '/u/' with '/api/file/'
const updatedUrl = url.replace('/u/', '/api/file/');

        await conn.sendMessage(from,{document: {url:updatedUrl},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd4",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

                
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

        await conn.sendMessage(from,{document: {url:mv_info.result.data.dl_links[3].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd5",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

                
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

        await conn.sendMessage(from,{document: {url:mv_info.result.data.dl_links[4].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd6",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

                
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

        await conn.sendMessage(from,{document: {url:mv_info.result.data.dl_links[5].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd7",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

                
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

        await conn.sendMessage(from,{document: {url:mv_info.result.data.dl_links[6].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd8",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

                
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

        await conn.sendMessage(from,{document: {url:mv_info.result.data.dl_links[7].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd9",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

                
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

        await conn.sendMessage(from,{document: {url:mv_info.result.data.dl_links[8].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd10",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

                
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

        await conn.sendMessage(from,{document: {url:mv_info.result.data.dl_links[9].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd11",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

                
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

        await conn.sendMessage(from,{document: {url:mv_info.result.data.dl_links[10].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd12",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

                
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

        await conn.sendMessage(from,{document: {url:mv_info.result.data.dl_links[11].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd13",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

                
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

        await conn.sendMessage(from,{document: {url:mv_info.result.data.dl_links[12].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd14",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

                
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

        await conn.sendMessage(from,{document: {url:mv_info.result.data.dl_links[13].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "mvd15",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    if (!q && !q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

                
const msg = `*_🎬 QUEEN MATHEE MOVIE DOWNLOADER 🎬_*

🍟 *Movie Name :* ${mv_info.result.data.title}

🧿 *Release Date :* ${mv_info.result.data.date}

🌍 *Country :* ${mv_info.result.data.country}

⏱ *Duration :* ${mv_info.result.data.runtime}

🎀 *Categories :* ${mv_info.result.data.category}

⭐ *IMDB Rate :* ${mv_info.result.data.imdbRate}

🔮 *IMDB Count:* ${mv_info.result.data.imdbVoteCount}

🤵‍♂ *Director* : ${mv_info.result.data.director}

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: mv_info.result.data.images[0]},caption:msg},{quoted:mek})

        await conn.sendMessage(from,{document: {url:mv_info.result.data.dl_links[14].link},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption:"> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴍᴏᴠɪᴇ ᴅʟ"},{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
