require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_GROUP_ID = process.env.ADMIN_GROUP_ID; // ex: -1001234567890
const GROUP_INVITE_LINK = process.env.GROUP_INVITE_LINK;
const START_TOKEN = process.env.START_TOKEN;
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || 300000);
const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX || 5);
const ADMIN_NOTIFY_WINDOW_MS = Number(process.env.ADMIN_NOTIFY_WINDOW_MS || 600000);

if (!BOT_TOKEN) {
  console.error('BOT_TOKEN manquant dans .env');
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

if (!START_TOKEN) {
  console.warn('START_TOKEN non defini: le lien /start n est pas securise.');
}

const rateLimits = new Map();
const authorizedUsers = new Set();
const adminNotify = new Map();

const nowMs = () => Date.now();
const isPrivateChat = (ctx) => ctx.chat?.type === 'private';

const isRateLimited = (userId) => {
  const now = nowMs();
  const entry = rateLimits.get(userId);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimits.set(userId, { windowStart: now, count: 1 });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }
  entry.count += 1;
  return false;
};

const shouldNotifyAdmin = (userId) => {
  const now = nowMs();
  const last = adminNotify.get(userId) || 0;
  if (now - last < ADMIN_NOTIFY_WINDOW_MS) {
    return false;
  }
  adminNotify.set(userId, now);
  return true;
};

const requireAuthorized = async (ctx) => {
  if (!START_TOKEN) return true;
  const userId = ctx.from?.id;
  if (!userId || !authorizedUsers.has(userId)) {
    await ctx.reply(
      "Lien invalide ou expire. Merci d'utiliser le bouton officiel du site."
    );
    return false;
  }
  return true;
};

bot.use(async (ctx, next) => {
  const userId = ctx.from?.id;
  if (userId && isPrivateChat(ctx) && isRateLimited(userId)) {
    await ctx.reply("Trop de requetes. Reessaie dans quelques minutes.");
    return;
  }
  return next();
});

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

// 2) Demarrage depuis ton site: https://t.me/cmciea_notif_bot?start=join:START_TOKEN
bot.start(async (ctx) => {
  if (!isPrivateChat(ctx)) {
    return ctx.reply("Merci de me contacter en message prive.");
  }
  // ✅ Payload fiable même si ctx.startPayload est vide
  const text = ctx.message?.text || ''; // ex: "/start join"
  const startPayload = text.split(' ').slice(1).join(' ').trim(); // "join"
  const userId = ctx.from?.id;

  if (START_TOKEN) {
    if (startPayload !== `join:${START_TOKEN}`) {
      await ctx.reply("Lien invalide ou expire. Merci d'utiliser le bouton officiel du site.");
      return;
    }
    if (userId) authorizedUsers.add(userId);
  }

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
  if (!START_TOKEN && startPayload !== 'join') {
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
  if (!isPrivateChat(ctx)) {
    return ctx.reply("Merci de me contacter en message prive.");
  }
  if (!(await requireAuthorized(ctx))) return;
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
  if (!isPrivateChat(ctx)) {
    return ctx.reply("Merci de me contacter en message prive.");
  }
  if (!(await requireAuthorized(ctx))) return;
  const user = ctx.from || {};
  const contact = ctx.message.contact;

  const firstName = user.first_name || '';
  const lastName = user.last_name || '';
  const username = user.username || '';
  const userId = user.id;

  const phone = contact.phone_number || '';
  const sharedUserId = contact.user_id;
  const contactMismatch = sharedUserId && sharedUserId !== userId;

  // Notifie le groupe admin
  if (ADMIN_GROUP_ID && shouldNotifyAdmin(userId)) {
    await ctx.telegram.sendMessage(
      ADMIN_GROUP_ID,
      [
        "🟢 Nouvelle demande d'accès (site)",
        `Nom : ${(firstName + ' ' + lastName).trim()}`,
        `Username : ${username || '(aucun)'}`,
        `Téléphone : ${phone || '(non fourni)'}`,
        `ID Telegram : ${userId}`,
        contactMismatch ? "?? Contact ne correspond pas a l utilisateur" : null
      ].join('\n')
    );
  } else if (!ADMIN_GROUP_ID) {
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

  if (!GROUP_INVITE_LINK) {
    return ctx.reply(
      "Le lien d'invitation n'est pas configure. Merci de contacter un administrateur."
    );
  }

  if (!GROUP_INVITE_LINK) {
    return ctx.reply(
      "Le lien d'invitation n'est pas configure. Merci de contacter un administrateur."
    );
  }

  return ctx.reply(GROUP_INVITE_LINK);
});

// 4) Continuer sans numéro
bot.hears('Continuer sans numéro', async (ctx) => {
  if (!isPrivateChat(ctx)) {
    return ctx.reply("Merci de me contacter en message prive.");
  }
  if (!(await requireAuthorized(ctx))) return;
  const user = ctx.from || {};
  const firstName = user.first_name || '';
  const lastName = user.last_name || '';
  const username = user.username || '';
  const userId = user.id;

  if (ADMIN_GROUP_ID && shouldNotifyAdmin(userId)) {
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
  } else if (!ADMIN_GROUP_ID) {
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
