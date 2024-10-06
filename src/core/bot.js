const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const channels = {
  fozilovas: "@fozilovasblog",
  eloras: "@englishwithelora",
};

const channelsArr = ["@fozilovasblog", "@englishwithelora"];

bot.start(async (ctx) => {
  try {
    for (const channel of channelsArr) {
      const member = await bot.telegram.getChatMember(channel, ctx.from.id);
      if (
        member.status === "member" ||
        member.status === "creator" ||
        member.status === "administrator"
      ) {
        return ctx.reply(
          `Assalomu alaykum <a href="tg://user?id=${ctx.from.id}" >${ctx.from.first_name}</a>\n<b>Listening webinar</b> yopiq kanaliga qo'shilish uchun havola:\nhttps://t.me/+ByvUDF13wZ1iOWQ6`,
          { parse_mode: "HTML", protect_content: true }
        );
      } else {
        return ctx.reply(
          `Assalomu alaykum <a href="tg://user?id=${ctx.from.id}" >${ctx.from.first_name}</a>\nIltimos yopiq kanal havolasini olish uchun avval barcha kanallarga obuna bo'ling! 👇`,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Birinchi kanal",
                    url: `https://t.me/englishwithelora`,
                  },
                ],
                [
                  {
                    text: "Ikkinchi kanal",
                    url: `https://t.me/fozilovasblog`,
                  },
                ],
                [{ text: "Tekshirish 🔄", callback_data: "check" }],
              ],
            },
          }
        );
      }
    }
  } catch (err) {
    console.error(err);
    ctx.reply(
      "Noma'lum xatolik yuzaga keldi ❌\nYana bir bor urining yoki @umidxon_polatxonov'ga murojaat qiling!"
    );
  }
});

bot.action("check", async (ctx) => {
  ctx.answerCbQuery();
  try {
    for (const channel of channelsArr) {
      const member = await bot.telegram.getChatMember(channel, ctx.from.id);
      if (
        member.status === "member" ||
        member.status === "creator" ||
        member.status === "administrator"
      ) {
        return ctx.reply(
          `<b>Listening webinar</b> yopiq kanaliga qo'shilish uchun havola:\nhttps://t.me/+ByvUDF13wZ1iOWQ6`,
          { parse_mode: "HTML", protect_content: true }
        );
      } else {
        return ctx.reply(
          `Hurmatli <a href="tg://user?id=${ctx.from.id}" >${ctx.from.first_name}</a>\nIltimos yopiq kanal havolasini olish uchun avval barcha kanallarga obuna bo'ling! 👇`,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Birinchi kanal",
                    url: `https://t.me/englishwithelora`,
                  },
                ],
                [
                  {
                    text: "Ikkinchi kanal",
                    url: `https://t.me/fozilovasblog`,
                  },
                ],
                [{ text: "Tekshirish 🔄", callback_data: "check" }],
              ],
            },
          }
        );
      }
    }
  } catch (err) {
    console.error(err);
    ctx.reply(
      "Noma'lum xatolik yuzaga keldi ❌\nYana bir bor urining yoki @umidxon_polatxonov'ga murojaat qiling!"
    );
  }
});

bot.command("get_link", async (ctx) => {
  try {
    for (const channel of channelsArr) {
      const member = await bot.telegram.getChatMember(channel, ctx.from.id);
      if (
        member.status === "member" ||
        member.status === "creator" ||
        member.status === "administrator"
      ) {
        return ctx.reply(
          `<b>Listening webinar</b> yopiq kanaliga qo'shilish uchun havola:\nhttps://t.me/+ByvUDF13wZ1iOWQ6`,
          { parse_mode: "HTML", protect_content: true }
        );
      } else {
        return ctx.reply(
          `Hurmatli <a href="tg://user?id=${ctx.from.id}" >${ctx.from.first_name}</a>\nIltimos yopiq kanal havolasini olish uchun avval barcha kanallarga obuna bo'ling! 👇`,
          {
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Birinchi kanal",
                    url: `https://t.me/englishwithelora`,
                  },
                ],
                [
                  {
                    text: "Ikkinchi kanal",
                    url: `https://t.me/fozilovasblog`,
                  },
                ],
                [{ text: "Tekshirish 🔄", callback_data: "check" }],
              ],
            },
          }
        );
      }
    }
  } catch (err) {
    console.error(err);
    ctx.reply(
      "Noma'lum xatolik yuzaga keldi ❌\nYana bir bor urining yoki @umidxon_polatxonov'ga murojaat qiling!"
    );
  }
});

bot.launch(() => {
  console.log("Bot is running...");
});

module.exports = bot;
