/**
 * Génère les icônes PWA à partir du logo CMCIEA-France.
 * Usage :
 *   npm install sharp --save-dev   (une seule fois)
 *   node generate-pwa-icons.js
 *
 * Résultat : src/assets/icons/icon-{taille}x{taille}.png
 */

const sharp  = require('sharp');
const path   = require('path');
const fs     = require('fs');

const LOGO_PATH  = path.join(__dirname, 'src/assets/images/logo-cmciea-france.png');
const OUTPUT_DIR = path.join(__dirname, 'src/assets/icons');
const BG_COLOR   = { r: 29, g: 84, b: 108, alpha: 1 };   // #1D546C
const SIZES      = [72, 96, 128, 144, 152, 192, 384, 512];
const PADDING_PCT = 0.15;   // 15 % de marge autour du logo

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

(async () => {
  for (const size of SIZES) {
    const inner = Math.round(size * (1 - PADDING_PCT * 2));
    const offset = Math.round(size * PADDING_PCT);

    // 1. Redimensionner le logo (en conservant la transparence éventuelle)
    const logoResized = await sharp(LOGO_PATH)
      .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    // 2. Créer le fond coloré et composite avec le logo centré
    await sharp({
      create: {
        width:      size,
        height:     size,
        channels:   4,
        background: BG_COLOR,
      },
    })
      .composite([{ input: logoResized, top: offset, left: offset }])
      .png()
      .toFile(path.join(OUTPUT_DIR, `icon-${size}x${size}.png`));

    console.log(`✓ icon-${size}x${size}.png`);
  }

  console.log('\nToutes les icônes générées dans src/assets/icons/');
})();
