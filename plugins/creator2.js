const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{


    "displayName": "OWNERβ’SLIME",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:OWNERβ’SLIME\nitem1.TEL;waid=6281354079196:6281354079196\nitem1.X-ABLabel:π Owner\nitem2.EMAIL;type=INTERNET:slimebotz011@gmail.com\nitem2.X-ABLabel:π Email\nitem3.URL:https://github.com/Adri158\nitem3.X-ABLabel:βοΈ Rest Api\nitem4.ADR:;;π―π΅ Jepang;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:π Region | Tokyo π―π΅\nitem5.X-ABLabel:βββββββ[ SLIMEBOT ]βββββββ\nEND:VCARD"
  }, {
    "displayName": "Whatsapp",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Whatsapp\nitem1.TEL;waid=0:0\nitem1.X-ABLabel:π Whatsapp\nitem2.EMAIL;type=INTERNET:Whatsapp@gmail.com\nitem2.X-ABLabel:π Email\nitem3.URL:https://faq.whatsapp.com/\nitem3.X-ABLabel:βοΈ Rest Api\nitem4.ADR:;;β©οΈ Whatsapp;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:π Official Bot Whatsapp\nitem5.X-ABLabel:βββββββ[ By WhatsApp ]βββββββ\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler
