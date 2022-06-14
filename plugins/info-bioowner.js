let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : 𝐑𝐈𝐄𝐋𝐆𝐀𝐍𝐒 𖣘
*✉️ Nama RL* : 🇷 🇮 🇪 🇱 ㋛︎
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 3 𝐣𝐮𝐥𝐢 2006
*🎨 Umur* : 15 𝐭𝐡
*🧮 Kelas* : 9 𝐞𝐬𝐦𝐩𝐞
*🧩 Hobby* : 𝐍𝐨𝐧𝐭𝐨𝐧 𝐲𝐨𝐮𝐭𝐮𝐛𝐞 𝐠𝐣𝐥𝐬🗿, Chatting, Recode script bot
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik, ga suka keluar rumah🗿
*🗺️ Tinggal* : 𝐢𝐧𝐝𝐨,𝐤𝐚𝐥𝐭𝐢𝐦 , 𝐬𝐚𝐦𝐚𝐫𝐢𝐧𝐝𝐚, 𝐓𝐞𝐧𝐠𝐠𝐚𝐫𝐨𝐧𝐠
*❤️ Suka* : warnah kuning & biru, Hanime, waifu, loli, trap, furry, kucing
*💔 Benci* : autis, anak 𝐞𝐩𝐞𝐩,

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @𝐑𝐢𝐞𝐥𝐠𝐚𝐧𝐬12
*🇫  Facebook* : 𝐧𝐨𝐭 𝐟𝐨𝐮𝐧𝐝
*🏮 Chanel Youtube* : 𝐠𝐚𝐝𝐚 𝐜𝐨𝐤🗿
*🐈 Github:* https://github.com/Rieltod
`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["𝐃𝐎𝐍𝐀𝐒𝐈 𝐂𝐎𝐊🐤", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
