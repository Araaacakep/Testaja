let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • dana [085323176492]
│ • Gopay [085323176492]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285323176492
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
