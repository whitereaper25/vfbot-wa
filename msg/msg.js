const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('config.json'))

exports.notRegistered = (pushname) => {
    return `Hai ${pushname}\nKamubelum terdaftar di database\nketik ${prefix}register untuk melakukan pendaftaran`
}

exports.wait = () => {
    return 'Mohon tunggu sebentar...'
}

exports.linkDetected = () => {
    return `*...:* *ANTI GROUP LINK*\n\nAnda terdeteksi mengirimkan link group lain\nAnda akan dikick otomatis!`
}

exports.groupOnly = () => {
    return `Perintah ini hanya bisa digunakan didalam grup!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu!`
}

exports.adminOnly = () => {
    return `Perintah ini hanya bisa digunakan oleh admin grup!`
}

exports.menu = (pushname) => {
    return `
╠══★〘 black trigger -WA 〙★══
║
╠☞ Nama: *${pushname}*
║
║★══★══★══★══★══★

╔══★〘 DOWNLOADER 〙★══
║
╠☞ *${prefix}igtv*
╠☞ *${prefix}igdl*
╠☞ *${prefix}play*
╠☞ *${prefix}ytmp3*
╠☞ *${prefix}ytmp4*
║
╠══★〘 STALKER 〙★══
║
╠☞ *${prefix}igstalk*
╠☞ *${prefix}twtprof*
╠☞ *${prefix}github*
║
╠══★〘 STICKER 〙★══
║
╠☞ *${prefix}sticker*
╠☞ *${prefix}stickergif*
╠☞ *${prefix}sgifwm*
╠☞ *${prefix}takestick*
╠☞ *${prefix}emot*
║
╠══★〘 FUN 〙★══
║
╠☞ *${prefix}simi*
╠☞ *${prefix}hilih*
╠☞ *${prefix}balikhuruf*
╠☞ *${prefix}hitunghuruf*
║
╠══★〘 EDUCATION 〙★══
║
╠☞ *${prefix}wiki*
╠☞ *${prefix}wikien*
╠☞ *${prefix}kbbi*
╠☞ *${prefix}covidindo*
╠☞ *${prefix}randomquran*
╠☞ *${prefix}kisahnabi*
║
╠══★〘 MUSIC 〙★══
║
╠☞ *${prefix}chord*
╠☞ *${prefix}lirik*
║
╠══★〘 SPAMMER 〙★══
║
╠☞ *${prefix}email*
╠☞ *${prefix}call*
║
╠══★〘 RANDOM 〙★══
║
╠☞ *${prefix}fakta*
╠☞ *${prefix}quotes*
╠☞ *${prefix}nekonime*
╠☞ *${prefix}animequotes*
║
╠══★〘 OTHERS 〙★══
║
╠☞ *${prefix}npm*
╠☞ *${prefix}ip*
╠☞ *${prefix}filmapik*
╠☞ *${prefix}kodepos*
╠☞ *${prefix}nulis*
║
║══★〘 black trigger BOT 〙★══
`
}
exports.menuAdmin = () => {
    return `
*...:* *ADMIN MENU* *:...   
-❁ *${prefix}antilink*
-❁ *${prefix}antivirtext*
`
}
