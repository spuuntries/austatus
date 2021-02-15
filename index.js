const DiscordRPC = require("discord-rpc");
const randomCoordinates = require("random-coordinates");
const Acro = require("acronymresolver");
const rpc = new DiscordRPC.Client({ transport: "ipc" });

rpc.login({ clientId: "803244093970055198" });

rpc.on("ready", () => {
  console.log("RPC ready");
  console.log(`RPC-ing ${rpc.user.username}#${rpc.user.discriminator}`);
  function start() {
    var acroh = Acro(`AU`);
    rpc.setActivity({
      details: `Fart Onion`,
      state: `${randomCoordinates({
        fixed: 0,
      })}. HELPMP PLEA-`,
      buttons: [
        { label: "Join ples ;-;", url: "https://discord.gg/bqcsVNF" },
        { label: `AU, ${acroh}`, url: "https://thisisartunion.github.io" },
      ],
      largeImageKey: `logo1`,
      instance: false,
    });
    console.log(`AU, ${acroh}`);
    setTimeout(() => {
      start();
    }, 5000);
  }
  start();
});
