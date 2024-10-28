const { fetchJson } = require('../lib/functions');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "mvsearch",
    desc: "search movies",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, reply }) => {
    try {
        // Check if the user provided a movie name (query)
        if(!q) return reply("Please give me a movie name");

        // Properly format the fetchJson URL request
        const mv = await fetchJson(`https://dark-yasiya-api-new.vercel.app/movie/sinhalasub/search?text=${q}`);

        // Assuming mv.result.data is an array
        const array = mv.result.data;

        // Loop through the array and log the movie titles and links
        for(let index = 0; index < array.length; index++) {

const msg = `*Movie Name:* ${array[index].title}\n*Link:* ${array[index].link}\n\n`
            
await conn.sendMessage(from, { text: msg }, {quoted: mek})
            
            console.log(`Movie ${index + 1}:`);
            console.log(`Title: ${array[index].title}`);
            console.log(`Link: ${array[index].link}`);
        }

    } catch(e) {
        // Log any errors that occur during the fetch or processing
        console.log(e)
        reply(`${e}`)
    }
})

