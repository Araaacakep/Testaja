let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085249231619]
│ • Gopay [085249231619]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285249231619
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
