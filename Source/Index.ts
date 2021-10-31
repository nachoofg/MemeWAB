import { Client, MessageMedia } from "whatsapp-web.js";
import qrRead from "qrcode-terminal";
import { green, red } from "chalk";
import { getMeme } from "../Source/Functions/getMeme";
const bot = new Client({});
bot
  .on("ready", () => {
    console.log(green("Bot iniciado correctamente"));
  })
  .on("auth_failure", (msg) => {
    console.log(red(`Hubo un error: ${msg}`));
  })
  .on("qr", (qr) => {
    console.log(qrRead(qr));
  })
  .on("message", async (msg) => {
    if (msg) {
      switch (msg.body) {
        case "meme":
          {
            const image = await MessageMedia.fromUrl(await getMeme());
            await msg.reply(image);
          }
          break;
      }
    } else {
      return;
    }
  });
bot.initialize();
