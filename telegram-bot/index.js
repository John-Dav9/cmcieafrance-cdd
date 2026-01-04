require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_GROUP_ID = process.env.ADMIN_GROUP_ID; // ex: -1001234567890
const GROUP_INVITE_LINK = process.env.GROUP_INVITE_LINK;

if (!BOT_TOKEN) {
  console.error('BOT_TOKEN manquant dans .env');
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

// 1) Dès qu’un message arrive dans un groupe, on peut afficher le chat_id (pour setup)
bot.on('message', async (ctx, next) => {
  try {
    const chatType = ctx.chat?.type;
    if (chatType === 'group' || chatType === 'supergroup') {
      console.log('Group chat_id =', ctx.chat.id);
    }
  } catch (e) {}
  return next();
});

// 2) Démarrage depuis ton site: https://t.me/cmciea_notif_bot?start=join
bot.start(async (ctx) => {
  // ✅ Payload fiable même si ctx.startPayload est vide
  const text = ctx.message?.text || ''; // ex: "/start join"
  const startPayload = text.split(' ').slice(1).join(' ').trim(); // "join"

  // ✅ Message de bienvenue toujours affiché
  await ctx.reply(
`🙏 Bienvenue et merci pour ton intérêt !

Tu es en contact avec l’équipe de
CMCIEA-FRANCE — Chercheurs de Dieu.

Nous sommes heureux de t’accueillir 🤍

👉 Tu as exprimé le désir de :
« Rejoindre le groupe Telegram »

Ce court échange nous permet simplement de :
• t’accueillir personnellement
• t’orienter correctement
• rester disponibles si tu as des questions ou un besoin de prière

⛪ Nos temps forts :
• Cultes en ligne sur Telegram
• Prière chaque mercredi à 12h
• Rencontre en présentiel une fois par mois à Paris

👇 Pour continuer, choisis une option :`
  );

  // Si la personne ne vient pas via ?start=join, on propose de continuer quand même
  if (startPayload !== 'join') {
    return ctx.reply(
      "Astuce : pour démarrer automatiquement depuis le site, utilise le bouton « Rejoindre en ligne ».\n\nSinon, tu peux continuer ici :",
      Markup.keyboard(['Continuer']).oneTime().resize()
    );
  }

  // Flow normal quand payload === "join"
  return ctx.reply(
    "Souhaites-tu partager ton numéro pour faciliter l’accueil ?",
    Markup.keyboard([
      Markup.button.contactRequest('Partager mon numéro'),
      'Continuer sans numéro'
    ]).oneTime().resize()
  );
});

// Permet de lancer le flow même sans payload join
bot.hears('Continuer', async (ctx) => {
  return ctx.reply(
    "Souhaites-tu partager ton numéro pour faciliter l’accueil ?",
    Markup.keyboard([
      Markup.button.contactRequest('Partager mon numéro'),
      'Continuer sans numéro'
    ]).oneTime().resize()
  );
});

// 3) Si l’utilisateur partage son contact
bot.on('contact', async (ctx) => {
  const user = ctx.from || {};
  const contact = ctx.message.contact;

  const firstName = user.first_name || '';
  const lastName = user.last_name || '';
  const username = user.username || '';
  const userId = user.id;

  const phone = contact.phone_number || '';

  // Notifie le groupe admin
  if (ADMIN_GROUP_ID) {
    await ctx.telegram.sendMessage(
      ADMIN_GROUP_ID,
      [
        "🟢 Nouvelle demande d'accès (site)",
        `Nom : ${(firstName + ' ' + lastName).trim()}`,
        `Username : ${username || '(aucun)'}`,
        `Téléphone : ${phone || '(non fourni)'}`,
        `ID Telegram : ${userId}`
      ].join('\n')
    );
  } else {
    await ctx.reply(
      "⚠️ ADMIN_GROUP_ID n’est pas encore configuré. Regarde la console pour récupérer le chat_id du groupe."
    );
  }

  await ctx.reply(
`Merci 🙏
Ta demande a bien été transmise à l’équipe.
Nous sommes heureux de t’accueillir parmi nous.

👉 Voici le lien pour rejoindre le groupe Telegram officiel :`,
    Markup.removeKeyboard()
  );

  return ctx.reply(GROUP_INVITE_LINK);
});

// 4) Continuer sans numéro
bot.hears('Continuer sans numéro', async (ctx) => {
  const user = ctx.from || {};
  const firstName = user.first_name || '';
  const lastName = user.last_name || '';
  const username = user.username || '';
  const userId = user.id;

  if (ADMIN_GROUP_ID) {
    await ctx.telegram.sendMessage(
      ADMIN_GROUP_ID,
      [
        "🟡 Nouvelle demande d'accès (sans numéro)",
        `Nom : ${(firstName + ' ' + lastName).trim()}`,
        `Username : ${username || '(aucun)'}`,
        `Téléphone : (non fourni)`,
        `ID Telegram : ${userId}`
      ].join('\n')
    );
  } else {
    await ctx.reply(
      "⚠️ ADMIN_GROUP_ID n’est pas encore configuré. Regarde la console pour récupérer le chat_id du groupe."
    );
  }

  await ctx.reply(
`Merci 🙏
Ta demande a bien été transmise à l’équipe.
Même sans numéro, tu es le/la bienvenu(e).

👉 Voici le lien pour rejoindre le groupe Telegram officiel :`,
    Markup.removeKeyboard()
  );

  return ctx.reply(GROUP_INVITE_LINK);
});

bot.launch().then(() => console.log('✅ Bot lancé (polling)'));

// Stop propre
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
