const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const FA_SVGS_DIR = '/tmp/fa_tmp/package/svgs';
const TAILWIND_CFG = '/Users/sohib/.gemini/antigravity/brain/abd95e46-3157-4c34-9498-139b04fb563b/scratch/tailwind.config.js';
const TAILWIND_IN = '/Users/sohib/.gemini/antigravity/brain/abd95e46-3157-4c34-9498-139b04fb563b/scratch/tailwind.input.css';

function buildIconsCss() {
  if (!fs.existsSync(FA_SVGS_DIR)) {
    console.log('FA SVG dir not found in /tmp, keeping existing css/icons.min.css');
    return fs.readFileSync(path.join(ROOT, 'css/icons.min.css'), 'utf8');
  }
  const files = [
    path.join(ROOT, 'index.html'),
    path.join(ROOT, 'js/surahs.js'),
    path.join(ROOT, 'js/theme.js'),
    path.join(ROOT, 'js/player.js'),
    path.join(ROOT, 'js/secondary-dom.js'),
    path.join(ROOT, 'js/v2-data.js'),
    path.join(ROOT, 'js/video-studio.js')
  ];
  const ignore = new Set(['solid', 'regular', 'brands', 'spin', 'pulse', '2x', '3x', '4x', 'lg', 'xs', 'sm', '1', 'ul', 'ol']);
  const used = new Set();
  for (const f of files) {
    const txt = fs.readFileSync(f, 'utf8');
    const re = /(?<![a-z0-9-])fa-([a-z0-9-]+)/g;
    let m;
    while ((m = re.exec(txt)) !== null) {
      if (!ignore.has(m[1])) used.add(m[1]);
    }
  }

  const encodeSvg = (svgRaw) => {
    const cleaned = svgRaw
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
      .replace(/"/g, "'")
      .trim()
      .replace(/</g, '%3C')
      .replace(/>/g, '%3E')
      .replace(/#/g, '%23');
    return `url("data:image/svg+xml,${cleaned}")`;
  };

  const CORE_ICONS = new Set([
    'play', 'pause', 'heart', 'book-open', 'book-open-reader', 'book-quran',
    'microphone', 'microphone-lines', 'magnifying-glass', 'magnifying-glass-plus',
    'chevron-down', 'shapes', 'gem', 'kaaba', 'mosque',
    'list-ol', 'circle-notch', 'circle-dot', 'circle-down', 'check-double',
    'graduation-cap', 'arrows-spin', 'forward-step', 'backward-step',
    'rotate-left', 'rotate-right', 'repeat', 'shuffle',
    'volume-high', 'share-nodes', 'headphones-simple', 'film', 'sliders', 'moon',
    'eye-slash'
  ]);

  const baseRules = [
    '.fa-solid,.fa-regular,.fas,.far{display:inline-block;width:1em;height:1em;flex-shrink:0;background-color:currentColor;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain;vertical-align:-.125em}',
    '.fa-spin{animation:fa-spin 1.1s linear infinite}@keyframes fa-spin{to{transform:rotate(360deg)}}'
  ];
  const coreChunks = [...baseRules];
  const extraChunks = [];

  // Custom repeat-1 glyph matching FA repeat + subtle 1 badge
  const customIcons = {
    'repeat-1': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96h160v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32v32H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192v-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9S192 492.9 192 480v-32h160c88.4 0 160-71.6 160-160zm-236-76h-20c-8.8 0-16 7.2-16 16s7.2 16 16 16h4v52c0 8.8 7.2 16 16 16s16-7.2 16-16v-68c0-8.8-7.2-16-16-16z"/></svg>'
  };

  for (const name of [...used].sort()) {
    const dest = CORE_ICONS.has(name) ? coreChunks : extraChunks;
    const solidPath = path.join(FA_SVGS_DIR, 'solid', `${name}.svg`);
    const regPath = path.join(FA_SVGS_DIR, 'regular', `${name}.svg`);
    if (customIcons[name]) {
      const uri = encodeSvg(customIcons[name]);
      dest.push(`.fa-${name}{-webkit-mask-image:${uri};mask-image:${uri}}`);
      continue;
    }
    if (fs.existsSync(solidPath)) {
      const uri = encodeSvg(fs.readFileSync(solidPath, 'utf8'));
      dest.push(`.fa-${name}{-webkit-mask-image:${uri};mask-image:${uri}}`);
    }
    if (fs.existsSync(regPath)) {
      const uri = encodeSvg(fs.readFileSync(regPath, 'utf8'));
      if (fs.existsSync(solidPath)) {
        dest.push(`.fa-regular.fa-${name},.far.fa-${name}{-webkit-mask-image:${uri};mask-image:${uri}}`);
      } else {
        dest.push(`.fa-${name}{-webkit-mask-image:${uri};mask-image:${uri}}`);
      }
    }
  }
  const coreCss = coreChunks.join('');
  const secCss = fs.existsSync(path.join(ROOT, 'css/secondary.css'))
    ? fs.readFileSync(path.join(ROOT, 'css/secondary.css'), 'utf8')
    : '';
  const extraRaw = extraChunks.join('') + '\n' + secCss;
  fs.writeFileSync('/tmp/extra_app.css', extraRaw);
  execSync('npx --yes esbuild /tmp/extra_app.css --minify --outfile="' + path.join(ROOT, 'css/icons-extra.min.css') + '"', { stdio: 'inherit' });
  fs.writeFileSync(path.join(ROOT, 'css/icons.min.css'), coreCss);
  console.log(`Generated core icons (${coreChunks.length - 2} icons, ${(coreCss.length / 1024).toFixed(1)} KB) + deferred css/icons-extra.min.css`);
  return coreCss;
}

console.log('1. Rebuilding Tailwind CSS...');
execSync(`npx --yes tailwindcss@3.4.19 -c "${TAILWIND_CFG}" -i "${TAILWIND_IN}" -o "${path.join(ROOT, 'css/tailwind.min.css')}" --minify`, { stdio: 'inherit' });

console.log('2. Building purged SVG-mask icons...');
const iconsCss = buildIconsCss();

console.log('3. Merging & minifying critical inline CSS...');
const twCss = fs.readFileSync(path.join(ROOT, 'css/tailwind.min.css'), 'utf8');
const stCss = fs.readFileSync(path.join(ROOT, 'css/style.css'), 'utf8');
const mergedRawCss = `${twCss}\n${stCss}\n${iconsCss}`;
fs.writeFileSync('/tmp/merged_app.css', mergedRawCss);
execSync('npx --yes esbuild /tmp/merged_app.css --minify --outfile=/tmp/merged_app.min.css', { stdio: 'inherit' });
const mergedMinCss = fs.readFileSync('/tmp/merged_app.min.css', 'utf8');

console.log('4. Inlining CSS into index.html...');
let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
html = html.replace(
  /<!-- INLINE-CSS-START -->[\s\S]*?<!-- INLINE-CSS-END -->/,
  `<!-- INLINE-CSS-START --><style id="app-critical-css">${mergedMinCss}</style><!-- INLINE-CSS-END -->`
);
fs.writeFileSync(path.join(ROOT, 'index.html'), html);

console.log('5. Bundling & minifying core JS, secondary features & lazy video-studio...');
const jsBundleSrc = [
  fs.readFileSync(path.join(ROOT, 'js/surahs.js'), 'utf8'),
  fs.readFileSync(path.join(ROOT, 'js/theme.js'), 'utf8'),
  fs.readFileSync(path.join(ROOT, 'js/player.js'), 'utf8')
].join('\n;\n');
fs.writeFileSync('/tmp/app_bundle_src.js', jsBundleSrc);
execSync(`npx --yes esbuild /tmp/app_bundle_src.js --minify --charset=utf8 --outfile="${path.join(ROOT, 'js/app.min.js')}"`, { stdio: 'inherit' });

const secBundleSrc = [
  fs.readFileSync(path.join(ROOT, 'js/v2-data.js'), 'utf8'),
  fs.readFileSync(path.join(ROOT, 'js/secondary-dom.js'), 'utf8'),
  fs.readFileSync(path.join(ROOT, 'js/secondary-logic.js'), 'utf8')
].join('\n;\n');
fs.writeFileSync('/tmp/secondary_bundle_src.js', secBundleSrc);
execSync(`npx --yes esbuild /tmp/secondary_bundle_src.js --minify --charset=utf8 --outfile="${path.join(ROOT, 'js/secondary.min.js')}"`, { stdio: 'inherit' });

execSync(`npx --yes esbuild "${path.join(ROOT, 'js/video-studio.js')}" --minify --charset=utf8 --outfile="${path.join(ROOT, 'js/video-studio.min.js')}"`, { stdio: 'inherit' });

const statKB = (f) => (fs.statSync(path.join(ROOT, f)).size / 1024).toFixed(1);
console.log(`Done! index.html=${statKB('index.html')}KB, app.min.js=${statKB('js/app.min.js')}KB, secondary.min.js=${statKB('js/secondary.min.js')}KB, video-studio.min.js=${statKB('js/video-studio.min.js')}KB`);
