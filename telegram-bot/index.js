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
    // Si message dans un groupe/supergroupe, log le chat id
    const chatType = ctx.chat?.type;
    if (chatType === 'group' || chatType === 'supergroup') {
      console.log('Group chat_id =', ctx.chat.id);
    }
  } catch (e) {}
  return next();
});

// 2) Démarrage depuis ton site: https://t.me/TON_BOT?start=join
bot.start(async (ctx) => {
  const startPayload = (ctx.startPayload || '').trim(); // "join"

  if (startPayload !== 'join') {
    return ctx.reply(
      "Bonjour !\nClique sur le bouton depuis le site pour demander à rejoindre le groupe."
    );
  }

  const user = ctx.from || {};
  const firstName = user.first_name || '';
  const lastName = user.last_name || '';
  const username = user.username || ''; // pas de &#64; nécessaire ici
  const userId = user.id;

  // Demande de partage du numéro (optionnel)
  await ctx.reply(
    "✅ Demande reçue : « Je veux rejoindre le groupe Telegram ».\n\nPour accélérer l’accueil, peux-tu partager ton numéro ?",
    Markup.keyboard([
      Markup.button.contactRequest('Partager mon numéro'),
      'Continuer sans numéro'
    ]).oneTime().resize()
  );

  // Stocker le contexte en mémoire (simple)
  ctx.session = { joinRequested: true, firstName, lastName, username, userId };
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
        `Nom : ${firstName} ${lastName}`.trim(),
        `Username : ${username || '(aucun)'}`,
        `Téléphone : ${phone || '(non fourni)'}`,
        `ID Telegram : ${userId}`
      ].join('\n')
    );
  } else {
    await ctx.reply("⚠️ ADMIN_GROUP_ID n’est pas encore configuré. Regarde la console pour récupérer le chat_id du groupe.");
  }

  await ctx.reply(
    "Merci ✅\nVoici le lien pour rejoindre le groupe :",
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
        `Nom : ${firstName} ${lastName}`.trim(),
        `Username : ${username || '(aucun)'}`,
        `Téléphone : (non fourni)`,
        `ID Telegram : ${userId}`
      ].join('\n')
    );
  } else {
    await ctx.reply("⚠️ ADMIN_GROUP_ID n’est pas encore configuré. Regarde la console pour récupérer le chat_id du groupe.");
  }

  await ctx.reply("Merci ✅\nVoici le lien pour rejoindre le groupe :", Markup.removeKeyboard());
  return ctx.reply(GROUP_INVITE_LINK);
});

bot.launch().then(() => console.log('✅ Bot lancé (polling)'));

// Stop propre
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
