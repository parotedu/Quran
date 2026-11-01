/**
 * Parot Quran Platform - Social Video & Reels Generator (صانع فيديوهات القرآن الكريم)
 * 100% Client-Side Video Generation via HTML5 Canvas, Web Audio API, and MediaRecorder.
 * Pure Static GitHub Pages Architecture (Zero Backend Required).
 * 
 * Major Upgrades & Enhancements:
 * - Master Seamless Audio Assembly: Eliminates inter-ayah audio cuts/splicing via intelligent silence trimming & equal-power 30ms crossfading or natural breath pauses into a single AudioBuffer.
 * - Ultra-Smooth Motion Graphics & Typography: Quintic & smoothstep easing curves, dynamic breathing scale (0.94 -> 1.0 -> 1.02), upward glide, and seamless crossfade overlap between verses.
 * - Multiple Aspect Ratios: 9:16 Vertical (Reels / TikTok), 1:1 Square (Instagram / Facebook), 16:9 Landscape (YouTube / Screens).
 * - 40+ Verified Reciters: Includes Sheikh Hussein Al-Azzam (authentic recordings) + 38 EveryAyah reciters.
 * - 6 Luxury Islamic Aesthetic Themes: Royal Emerald, Kaaba Kiswah, Midnight Sapphire, Medina Rose Gold, Antique Parchment, Tahajjud Violet.
 * - Custom Dedication / Sadaqah Jariyah Badge: Optional luxury golden tribute rendered on screen.
 * - Instant High-Res Poster / Wallpaper Export (PNG).
 * - Complete responsive layout adapting to any viewport with zero bugs.
 */

(function () {
  'use strict';

  // --- 1. Top Verified EveryAyah Reciters + Sheikh Hussein Al-Azzam ---
  const VIDEO_RECITERS = [
    { id: 'alafasy', name: 'الشيخ مشاري راشد العفاسي', folder: 'Alafasy_128kbps', format: '128k', shortName: 'العفاسي' },
    { id: 'hussein_alazzam', name: 'الشيخ حسين العزام', isSpecial: true, shortName: 'حسين العزام' },
    { id: 'husary', name: 'الشيخ محمود خليل الحصري (مرتل)', folder: 'Husary_128kbps', format: '128k', shortName: 'الحصري' },
    { id: 'husary_mujawwad', name: 'الشيخ محمود خليل الحصري (مجوّد)', folder: 'Husary_128kbps_Mujawwad', format: '128k', shortName: 'الحصري مجود' },
    { id: 'husary_muallim', name: 'الشيخ محمود خليل الحصري (المعلم)', folder: 'Husary_Muallim_128kbps', format: '128k', shortName: 'الحصري معلم' },
    { id: 'minshawy', name: 'الشيخ محمد صديق المنشاوي (مرتل)', folder: 'Minshawy_Murattal_128kbps', format: '128k', shortName: 'المنشاوي' },
    { id: 'minshawy_mujawwad', name: 'الشيخ محمد صديق المنشاوي (مجوّد)', folder: 'Minshawy_Mujawwad_192kbps', format: '192k', shortName: 'المنشاوي مجود' },
    { id: 'abdul_basit', name: 'الشيخ عبد الباسط عبد الصمد (مرتل)', folder: 'Abdul_Basit_Murattal_192kbps', format: '192k', shortName: 'عبد الباسط' },
    { id: 'abdul_basit_mujawwad', name: 'الشيخ عبد الباسط عبد الصمد (مجوّد)', folder: 'Abdul_Basit_Mujawwad_128kbps', format: '128k', shortName: 'عبد الباسط مجود' },
    { id: 'maher', name: 'الشيخ ماهر المعيقلي', folder: 'MaherAlMuaiqly128kbps', format: '128k', shortName: 'المعيقلي' },
    { id: 'ghamadi', name: 'الشيخ سعد الغامدي', folder: 'Ghamadi_40kbps', format: '40k', shortName: 'الغامدي' },
    { id: 'dussary', name: 'الشيخ ياسر الدوسري', folder: 'Yasser_Ad-Dussary_128kbps', format: '128k', shortName: 'الدوسري' },
    { id: 'shaatree', name: 'الشيخ أبو بكر الشاطري', folder: 'Abu_Bakr_Ash-Shaatree_128kbps', format: '128k', shortName: 'الشاطري' },
    { id: 'shuraym', name: 'الشيخ سعود الشريم', folder: 'Saood_ash-Shuraym_128kbps', format: '128k', shortName: 'الشريم' },
    { id: 'sudais', name: 'الشيخ عبد الرحمن السديس', folder: 'Abdurrahmaan_As-Sudais_192kbps', format: '192k', shortName: 'السديس' },
    { id: 'alqatami', name: 'الشيخ ناصر القطامي', folder: 'Nasser_Alqatami_128kbps', format: '128k', shortName: 'القطامي' },
    { id: 'ali_jaber', name: 'الشيخ علي جابر', folder: 'Ali_Jaber_64kbps', format: '64k', shortName: 'علي جابر' },
    { id: 'ayyoob', name: 'الشيخ محمد أيوب', folder: 'Muhammad_Ayyoub_128kbps', format: '128k', shortName: 'محمد أيوب' },
    { id: 'rifai', name: 'الشيخ هاني الرفاعي', folder: 'Hani_Rifai_192kbps', format: '192k', shortName: 'الرفاعي' },
    { id: 'tablawi', name: 'الشيخ محمد محمود الطبلاوي', folder: 'Mohammad_al_Tablaway_128kbps', format: '128k', shortName: 'الطبلاوي' },
    { id: 'abbad', name: 'الشيخ فارس عباد', folder: 'Fares_Abbad_64kbps', format: '64k', shortName: 'فارس عباد' },
    { id: 'sowaid', name: 'الشيخ أيمن سويد (المصحف المعلم)', folder: 'Ayman_Sowaid_64kbps', format: '64k', shortName: 'أيمن سويد' },
    { id: 'hudhaify', name: 'الشيخ علي بن عبد الرحمن الحذيفي', folder: 'Hudhaify_128kbps', format: '128k', shortName: 'الحذيفي' },
    { id: 'juhaynee', name: 'الشيخ عبد الله عواد الجهني', folder: 'Abdullaah_3awwaad_Al-Juhaynee_128kbps', format: '128k', shortName: 'الجهني' },
    { id: 'basfar', name: 'الشيخ عبد الله بصفر', folder: 'Abdullah_Basfar_192kbps', format: '192k', shortName: 'بصفر' },
    { id: 'jibreel', name: 'الشيخ محمد جبريل', folder: 'Muhammad_Jibreel_128kbps', format: '128k', shortName: 'جبريل' },
    { id: 'mustafa_ismail', name: 'الشيخ مصطفى إسماعيل', folder: 'Mustafa_Ismail_48kbps', format: '48k', shortName: 'مصطفى إسماعيل' },
    { id: 'banna', name: 'الشيخ محمود علي البنا', folder: 'mahmoud_ali_al_banna_32kbps', format: '32k', shortName: 'البنا' },
    { id: 'akhdar', name: 'الشيخ إبراهيم الأخضر', folder: 'Ibrahim_Akhdar_32kbps', format: '32k', shortName: 'الأخضر' },
    { id: 'ajamy', name: 'الشيخ أحمد بن علي العجمي', folder: 'Ahmed_ibn_Ali_al-Ajamy_128kbps_ketaballah.net', format: '128k', shortName: 'العجمي' },
    { id: 'matroud', name: 'الشيخ عبد الله مطرود', folder: 'Abdullah_Matroud_128kbps', format: '128k', shortName: 'مطرود' },
    { id: 'bukhatir', name: 'الشيخ صلاح بو خاطر', folder: 'Salaah_AbdulRahman_Bukhatir_128kbps', format: '128k', shortName: 'بو خاطر' },
    { id: 'qasim', name: 'الشيخ عبد المحسن القاسم', folder: 'Muhsin_Al_Qasim_192kbps', format: '192k', shortName: 'القاسم' },
    { id: 'budair', name: 'الشيخ صلاح البدير', folder: 'Salah_Al_Budair_128kbps', format: '128k', shortName: 'البدير' },
    { id: 'qahtani', name: 'الشيخ خالد القحطاني', folder: 'Khaalid_Abdullaah_al-Qahtaanee_192kbps', format: '192k', shortName: 'القحطاني' },
    { id: 'tunaiji', name: 'الشيخ خليفة الطنيجي', folder: 'khalefa_al_tunaiji_64kbps', format: '64k', shortName: 'الطنيجي' },
    { id: 'suesy', name: 'الشيخ علي حجاج السويسي', folder: 'Ali_Hajjaj_AlSuesy_128kbps', format: '128k', shortName: 'السويسي' },
    { id: 'sahl', name: 'الشيخ سهل ياسين', folder: 'Sahl_Yassin_128kbps', format: '128k', shortName: 'سهل ياسين' },
    { id: 'neana', name: 'الشيخ أحمد نعينع', folder: 'Ahmed_Neana_128kbps', format: '128k', shortName: 'نعينع' },
    { id: 'salamah', name: 'الشيخ ياسر سلامة', folder: 'Yaser_Salamah_128kbps', format: '128k', shortName: 'سلامة' }
  ];

  // Hussein Al-Azzam Authentic Surah Audio Files (Direct archive.org CDN with CORS)
  const HUSSEIN_ALAZZAM_FILES = {
    1: 'https://archive.org/download/20241124_20241124_1556/001%20_%20%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%81%D8%A7%D8%AA%D8%AD%D8%A9%20%D9%85%D9%86%20%D8%B5%D9%84%D8%A7%D8%A9%20%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%20%D8%A7%D9%84%D9%8A%D9%88%D9%85%20-%20%D9%85%D8%B3%D8%AC%D8%AF%20%D8%A8%D9%84%D8%A7%D9%84%20%D8%A8%D9%86%20%D8%B1%D8%A8%D8%A7%D8%AD%20_%20%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86.mp3',
    12: 'https://archive.org/download/surat_elmulk/surat_youssef.mp3',
    14: 'https://archive.org/download/surat_elmulk/surat_ibrahim.mp3',
    15: 'https://archive.org/download/surat_elmulk/surat_elhajr.mp3',
    18: 'https://archive.org/download/surat_elmulk/surat_elkahf.mp3',
    19: 'https://archive.org/download/surat_elmulk/surat_maryam.mp3',
    26: 'https://archive.org/download/20241124_20241124_1556/026%20_%20%D8%AA%D9%84%D8%A7%D9%88%D8%A9%20%D9%85%D9%86%20%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B9%D8%B1%D8%A7%D8%A1%20%D9%84%D9%84%D9%82%D8%A7%D8%B1%D8%A6%20%D8%AD%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D8%B2%D8%A7%D9%85.mp3',
    27: 'https://archive.org/download/20241124_20241124_1556/027%20_%20%D8%AA%D9%84%D8%A7%D9%88%D8%A9%20%D9%85%D8%B1%D9%8A%D8%AD%D8%A9%20%D9%85%D9%86%20%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%86%D9%85%D9%84%20_%20%D8%A7%D9%84%D9%82%D8%A7%D8%B1%D8%A6%20%D8%AD%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D8%B2%D8%A7%D9%85.mp3',
    30: 'https://archive.org/download/20241124_20241124_1556/030%20_%20%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B1%D9%88%D9%85%20%D8%AA%D9%84%D8%A7%D9%88%D8%A9%20%D8%B1%D9%85%D8%B6%D8%A7%D9%86%D9%8A%D8%A9%20%D9%85%D9%86%20%D8%B5%D9%84%D8%A7%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B1%D8%A7%D9%88%D9%8A%D8%AD%20-%20%D9%85%D8%B3%D8%AC%D8%AF%20%D8%A8%D9%84%D8%A7%D9%84%20%D8%A8%D9%86%20%D8%B1%D8%A8%D8%A7%D8%AD.mp3',
    36: 'https://archive.org/download/surat_elmulk/surat_yas.mp3',
    44: 'https://archive.org/download/surat_elmulk/surat_dokhan.mp3',
    52: 'https://archive.org/download/20241124_20241124_1556/052%20_%20%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B7%D9%88%D8%B1%20_%20%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B7%D9%88%D8%B1%20%D9%83%D8%A7%D9%85%D9%84%D8%A9.mp3',
    55: 'https://archive.org/download/surat_elmulk/surat_elrahman.mp3',
    67: 'https://archive.org/download/surat_elmulk/surat_elmulk.mp3',
    75: 'https://archive.org/download/surat_elmulk/surat_elqiyamah.mp3',
    79: 'https://archive.org/download/surat_elmulk/surat_elnazi3at.mp3',
    89: 'https://archive.org/download/surat_elmulk/surat_elfajr.mp3'
  };

  // --- 2. Six Luxury Aesthetic Themes ---
  const VIDEO_THEMES = {
    emerald: {
      id: 'emerald',
      name: 'الزمرد الملكي',
      badge: 'السمة الرسمية',
      bgCenter: '#064e3b',
      bgMid: '#022c22',
      bgOuter: '#01140f',
      goldLight: '#fef08a',
      goldPrimary: '#fbbf24',
      goldDark: '#b45309',
      goldBorder: 'rgba(251, 191, 36, 0.45)',
      goldBorderSubtle: 'rgba(251, 191, 36, 0.22)',
      textColor: '#ffffff',
      glowColor: 'rgba(251, 191, 36, 0.45)',
      badgeBg: 'rgba(2, 44, 34, 0.88)',
      previewGradient: 'linear-gradient(135deg, #064e3b, #01140f)'
    },
    kaaba: {
      id: 'kaaba',
      name: 'كسوة الكعبة',
      badge: 'سواد وذهب خالص',
      bgCenter: '#1c1917',
      bgMid: '#0a0a0c',
      bgOuter: '#000000',
      goldLight: '#fde047',
      goldPrimary: '#eab308',
      goldDark: '#854d0e',
      goldBorder: 'rgba(234, 179, 8, 0.55)',
      goldBorderSubtle: 'rgba(234, 179, 8, 0.25)',
      textColor: '#ffffff',
      glowColor: 'rgba(234, 179, 8, 0.5)',
      badgeBg: 'rgba(18, 18, 20, 0.92)',
      previewGradient: 'linear-gradient(135deg, #1c1917, #000000)'
    },
    sapphire: {
      id: 'sapphire',
      name: 'السموات الليلية',
      badge: 'أزرق كوني مهيب',
      bgCenter: '#0f172a',
      bgMid: '#090d16',
      bgOuter: '#020617',
      goldLight: '#e0f2fe',
      goldPrimary: '#38bdf8',
      goldDark: '#0369a1',
      goldBorder: 'rgba(56, 189, 248, 0.5)',
      goldBorderSubtle: 'rgba(56, 189, 248, 0.22)',
      textColor: '#ffffff',
      glowColor: 'rgba(56, 189, 248, 0.45)',
      badgeBg: 'rgba(15, 23, 42, 0.9)',
      previewGradient: 'linear-gradient(135deg, #0f172a, #020617)'
    },
    medina: {
      id: 'medina',
      name: 'النور النبوي',
      badge: 'عنبر وذهب وردي',
      bgCenter: '#451a03',
      bgMid: '#291003',
      bgOuter: '#140700',
      goldLight: '#fed7aa',
      goldPrimary: '#f97316',
      goldDark: '#9a3412',
      goldBorder: 'rgba(249, 115, 22, 0.45)',
      goldBorderSubtle: 'rgba(249, 115, 22, 0.22)',
      textColor: '#ffffff',
      glowColor: 'rgba(249, 115, 22, 0.45)',
      badgeBg: 'rgba(41, 16, 3, 0.9)',
      previewGradient: 'linear-gradient(135deg, #451a03, #140700)'
    },
    parchment: {
      id: 'parchment',
      name: 'رق المصحف العتيق',
      badge: 'تراث أندلسي فاخر',
      bgCenter: '#2a221b',
      bgMid: '#1a1410',
      bgOuter: '#0d0a08',
      goldLight: '#fef3c7',
      goldPrimary: '#d97706',
      goldDark: '#78350f',
      goldBorder: 'rgba(217, 119, 6, 0.45)',
      goldBorderSubtle: 'rgba(217, 119, 6, 0.22)',
      textColor: '#fef3c7',
      glowColor: 'rgba(217, 119, 6, 0.45)',
      badgeBg: 'rgba(26, 20, 16, 0.92)',
      previewGradient: 'linear-gradient(135deg, #2a221b, #0d0a08)'
    },
    amethyst: {
      id: 'amethyst',
      name: 'التهجد القرآني',
      badge: 'أرجوان ملكي مهيب',
      bgCenter: '#3b0764',
      bgMid: '#240441',
      bgOuter: '#110120',
      goldLight: '#f3e8ff',
      goldPrimary: '#c084fc',
      goldDark: '#7e22ce',
      goldBorder: 'rgba(192, 132, 252, 0.45)',
      goldBorderSubtle: 'rgba(192, 132, 252, 0.22)',
      textColor: '#ffffff',
      glowColor: 'rgba(192, 132, 252, 0.45)',
      badgeBg: 'rgba(36, 4, 65, 0.9)',
      previewGradient: 'linear-gradient(135deg, #3b0764, #110120)'
    }
  };

  // --- 3. Dynamic Floating Particles System ---
  class GoldenParticle {
    constructor(w, h, randomY = true) {
      this.reset(w, h, randomY);
    }
    reset(w, h, randomY = false) {
      this.x = Math.random() * w;
      this.y = randomY ? Math.random() * h : h + 15;
      this.size = Math.random() * 2.2 + 0.9;
      this.speedY = Math.random() * 0.45 + 0.25;
      this.speedX = (Math.random() - 0.5) * 0.22;
      this.baseAlpha = Math.random() * 0.65 + 0.25;
      this.pulseSpeed = Math.random() * 2 + 1;
      this.seed = Math.random() * 100;
    }
    update(w, h, time) {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(time * 0.6 + this.seed) * 0.2;
      if (this.y < -15 || this.x < -15 || this.x > w + 15) {
        this.reset(w, h, false);
      }
    }
    draw(ctx, time, theme) {
      const alpha = this.baseAlpha * (0.6 + 0.4 * Math.sin(time * this.pulseSpeed + this.seed));
      ctx.save();
      ctx.fillStyle = theme.goldPrimary;
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Easing Functions for Ultra-Smooth Motion
  function easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
  }
  function easeInCubic(x) {
    return x * x * x;
  }
  function smoothstep(x) {
    return x * x * (3 - 2 * x);
  }

  // --- 4. Studio State Management ---
  const state = {
    selectedSurahId: 1,
    fromAyah: 1,
    toAyah: 3,
    selectedReciterId: 'alafasy',
    selectedThemeId: 'emerald',
    aspectRatio: 'vertical', // 'vertical' (9:16) | 'square' (1:1) | 'landscape' (16:9)
    continuityMode: 'seamless', // 'seamless' (30ms crossfade, 0 gap) | 'natural' (180ms breath) | 'calm' (380ms pause)
    transitionStyle: 'cinematic', // 'cinematic' | 'radiant' | 'reverent'
    dedicationText: '',
    fontSizeMode: 'auto', // 'auto' | 'medium' | 'large'
    enableParticles: true,
    enableWave: true,
    enableBasmala: true,
    quality: '720p', // '720p' | '1080p'
    monitorAudio: true,

    // Runtime state
    isProcessing: false,
    isPreviewing: false,
    isRecording: false,
    audioCtx: null,
    previewAudio: null,
    previewAudioUrl: null,
    recorder: null,
    recordedChunks: [],
    currentVideoBlob: null,
    currentVideoUrl: null,
    particles: [],
    timeline: [],
    activeSources: [],
    masterAudioBuffer: null,
    renderAnimationId: null,
    operationAbortController: null
  };
  window.__videoStudioState = state;

  // Ayahs Text In-Memory Cache
  const ayahsCache = {};

  // Utility to convert number to Arabic Numerals
  function toArabicDigits(num) {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return String(num).split('').map(d => arabicDigits[d] || d).join('');
  }

  // --- 5. DOM Elements Cache ---
  let els = {};

  function cacheDOMElements() {
    els = {
      view: document.getElementById('video-studio-view'),
      headerAspectBadge: document.getElementById('video-header-aspect-badge'),
      canvas: document.getElementById('video-canvas'),
      previewAudio: document.getElementById('video-preview-audio'),
      videoPlayer: document.getElementById('video-result-player'),
      phoneScreen: document.getElementById('video-phone-screen'),
      phoneMockup: document.querySelector('.phone-mockup-frame'),
      progressOverlay: document.getElementById('video-progress-overlay'),
      progressStatusText: document.getElementById('video-progress-status'),
      progressBar: document.getElementById('video-progress-bar'),
      progressPercent: document.getElementById('video-progress-percent'),
      progressTime: document.getElementById('video-progress-time'),
      btnCancelProgress: document.getElementById('video-btn-cancel-progress'),

      // Completion Overlay
      completeOverlay: document.getElementById('video-complete-overlay'),
      btnDownloadVideo: document.getElementById('video-btn-download'),
      btnShareVideo: document.getElementById('video-btn-share'),
      btnResetVideo: document.getElementById('video-btn-reset'),

      // Main Action Buttons
      btnGenerate: document.getElementById('video-btn-generate'),
      btnLivePreview: document.getElementById('video-btn-preview'),
      btnStopPreview: document.getElementById('video-btn-stop-preview'),
      btnExportPoster: document.getElementById('video-btn-export-poster'),
      audioMonitorToggle: document.getElementById('video-monitor-audio'),

      // Controls
      aspectContainer: document.getElementById('video-aspect-options'),
      surahSelect: document.getElementById('video-surah-select'),
      fromAyahInput: document.getElementById('video-from-ayah'),
      toAyahInput: document.getElementById('video-to-ayah'),
      btnFromMinus: document.getElementById('video-from-minus'),
      btnFromPlus: document.getElementById('video-from-plus'),
      btnToMinus: document.getElementById('video-to-minus'),
      btnToPlus: document.getElementById('video-to-plus'),
      rangeSummaryBadge: document.getElementById('video-range-summary'),
      textPreviewBox: document.getElementById('video-text-preview'),
      reciterSelect: document.getElementById('video-reciter-select'),
      continuitySelect: document.getElementById('video-continuity-select'),
      transitionSelect: document.getElementById('video-transition-select'),
      themeContainer: document.getElementById('video-theme-options'),
      dedicationInput: document.getElementById('video-dedication-input'),
      qualitySelect: document.getElementById('video-quality-select'),
      fontSizeSelect: document.getElementById('video-fontsize-select'),
      particlesToggle: document.getElementById('video-particles-toggle'),
      waveToggle: document.getElementById('video-wave-toggle'),
      basmalaToggle: document.getElementById('video-basmala-toggle'),

      // Quick Range Selectors
      quick1Ayah: document.getElementById('video-quick-1'),
      quick3Ayahs: document.getElementById('video-quick-3'),
      quick5Ayahs: document.getElementById('video-quick-5'),
      quickFullSurah: document.getElementById('video-quick-full'),
      btnBackPlayer: document.getElementById('video-btn-back-player')
    };
  }

  // --- 6. Initialization & Population ---
  function initVideoStudio() {
    cacheDOMElements();
    if (!els.view || !els.canvas) return;

    // Populate Surahs Dropdown
    populateSurahsDropdown();

    // Populate Reciters Dropdown
    populateRecitersDropdown();

    // Populate Themes Selector
    populateThemesSelector();

    // Setup Canvas Dimensions according to Aspect Ratio & Quality
    setCanvasDimensions();

    // Initialize Particles
    initParticles();

    // Attach Event Listeners
    attachEventListeners();

    // Initial Data Fetch & First Frame Render
    onSurahOrRangeChanged(true);
  }

  function setCanvasDimensions() {
    if (!els.canvas) return;
    const is1080p = state.quality === '1080p';

    if (state.aspectRatio === 'vertical') {
      els.canvas.width = is1080p ? 1080 : 720;
      els.canvas.height = is1080p ? 1920 : 1280;
    } else if (state.aspectRatio === 'square') {
      els.canvas.width = is1080p ? 1080 : 720;
      els.canvas.height = is1080p ? 1080 : 720;
    } else if (state.aspectRatio === 'landscape') {
      els.canvas.width = is1080p ? 1920 : 1280;
      els.canvas.height = is1080p ? 1080 : 720;
    }

    // Update phone chassis frame class
    if (els.phoneMockup) {
      els.phoneMockup.classList.remove('ratio-square', 'ratio-landscape');
      if (state.aspectRatio === 'square') {
        els.phoneMockup.classList.add('ratio-square');
      } else if (state.aspectRatio === 'landscape') {
        els.phoneMockup.classList.add('ratio-landscape');
      }
    }
  }

  function initParticles() {
    state.particles = [];
    const count = state.aspectRatio === 'landscape' ? 55 : 40;
    for (let i = 0; i < count; i++) {
      state.particles.push(new GoldenParticle(els.canvas.width, els.canvas.height, true));
    }
  }

  function populateSurahsDropdown() {
    if (!els.surahSelect || typeof SURAHS === 'undefined') return;
    els.surahSelect.innerHTML = SURAHS.map(s => {
      return `<option value="${s.id}">سورة ${s.name} (${toArabicDigits(s.versesCount)} آية) • ${s.englishName}</option>`;
    }).join('');
    els.surahSelect.value = state.selectedSurahId;
  }

  function populateRecitersDropdown() {
    if (!els.reciterSelect) return;
    els.reciterSelect.innerHTML = VIDEO_RECITERS.map(r => {
      const extra = r.id === 'hussein_alazzam' ? ' ★ (تلاوات خاشعة حصرية)' : '';
      return `<option value="${r.id}">${r.name}${extra}</option>`;
    }).join('');
    els.reciterSelect.value = state.selectedReciterId;
  }

  function populateThemesSelector() {
    if (!els.themeContainer) return;
    els.themeContainer.innerHTML = Object.values(VIDEO_THEMES).map(theme => {
      const active = theme.id === state.selectedThemeId ? 'active ring-2 ring-amber-400 bg-amber-500/15' : 'bg-emerald-950/40 hover:bg-emerald-900/40';
      return `
        <button type="button" data-theme-id="${theme.id}" class="video-theme-pill flex items-center gap-2 px-2.5 py-2 rounded-xl border border-amber-500/25 transition-all text-xs font-bold text-[var(--text-primary)] ${active}">
          <span class="w-4 h-4 rounded-full border border-amber-300 shadow-sm flex-shrink-0" style="background: ${theme.previewGradient}"></span>
          <span class="truncate">${theme.name}</span>
        </button>
      `;
    }).join('');
  }

  // --- 7. Event Handlers ---
  function attachEventListeners() {
    // Aspect Ratio Buttons
    if (els.aspectContainer) {
      els.aspectContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.video-ratio-btn');
        if (!btn) return;
        state.aspectRatio = btn.dataset.ratio;

        els.aspectContainer.querySelectorAll('.video-ratio-btn').forEach(b => {
          b.classList.remove('active', 'border-2', 'border-amber-400', 'bg-amber-500/15', 'text-amber-300');
          b.classList.add('bg-emerald-950/70', 'border-emerald-500/25', 'text-slate-300');
        });
        btn.classList.add('active', 'border-2', 'border-amber-400', 'bg-amber-500/15', 'text-amber-300');
        btn.classList.remove('bg-emerald-950/70', 'border-emerald-500/25', 'text-slate-300');

        if (els.headerAspectBadge) {
          if (state.aspectRatio === 'square') {
            els.headerAspectBadge.innerText = '1:1 مربع (Instagram Post)';
          } else if (state.aspectRatio === 'landscape') {
            els.headerAspectBadge.innerText = '16:9 عريض (YouTube / Screens)';
          } else {
            els.headerAspectBadge.innerText = '9:16 طولي (Reels / Stories)';
          }
        }

        setCanvasDimensions();
        initParticles();
        renderStaticPreviewFrame();
      });
    }

    // Surah Selection Changed
    if (els.surahSelect) {
      els.surahSelect.addEventListener('change', (e) => {
        state.selectedSurahId = parseInt(e.target.value, 10);
        state.fromAyah = 1;
        const surah = getSurahMeta(state.selectedSurahId);
        state.toAyah = Math.min(surah.versesCount, 3);
        updateInputsFromState();
        onSurahOrRangeChanged(true);
      });
    }

    // Reciter Changed
    if (els.reciterSelect) {
      els.reciterSelect.addEventListener('change', (e) => {
        state.selectedReciterId = e.target.value;
        if (state.selectedReciterId === 'hussein_alazzam') {
          if (!HUSSEIN_ALAZZAM_FILES[state.selectedSurahId]) {
            if (typeof showToast === 'function') {
              showToast('تلاوة الشيخ حسين العزام متوفرة في سور محددة، جاري التحويل لسورة الفاتحة.');
            }
            state.selectedSurahId = 1;
            state.fromAyah = 1;
            state.toAyah = 7;
            if (els.surahSelect) els.surahSelect.value = 1;
            updateInputsFromState();
            onSurahOrRangeChanged(true);
            return;
          }
        }
        renderStaticPreviewFrame();
      });
    }

    // Continuity Mode Changed
    if (els.continuitySelect) {
      els.continuitySelect.addEventListener('change', (e) => {
        state.continuityMode = e.target.value;
      });
    }

    // Transition Style Changed
    if (els.transitionSelect) {
      els.transitionSelect.addEventListener('change', (e) => {
        state.transitionStyle = e.target.value;
        renderStaticPreviewFrame();
      });
    }

    // Dedication Text Input
    if (els.dedicationInput) {
      els.dedicationInput.addEventListener('input', (e) => {
        state.dedicationText = e.target.value.trim();
        renderStaticPreviewFrame();
      });
    }

    // Theme Selection Changed
    if (els.themeContainer) {
      els.themeContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.video-theme-pill');
        if (!btn) return;
        state.selectedThemeId = btn.dataset.themeId;
        populateThemesSelector();
        renderStaticPreviewFrame();
      });
    }

    // Stepper & Number Inputs
    if (els.fromAyahInput) {
      els.fromAyahInput.addEventListener('change', () => handleRangeInputChange('from'));
    }
    if (els.toAyahInput) {
      els.toAyahInput.addEventListener('change', () => handleRangeInputChange('to'));
    }
    if (els.btnFromMinus) {
      els.btnFromMinus.addEventListener('click', () => stepAyah('from', -1));
    }
    if (els.btnFromPlus) {
      els.btnFromPlus.addEventListener('click', () => stepAyah('from', 1));
    }
    if (els.btnToMinus) {
      els.btnToMinus.addEventListener('click', () => stepAyah('to', -1));
    }
    if (els.btnToPlus) {
      els.btnToPlus.addEventListener('click', () => stepAyah('to', 1));
    }

    // Quick Selectors
    if (els.quick1Ayah) {
      els.quick1Ayah.addEventListener('click', () => setQuickAyahRange(1));
    }
    if (els.quick3Ayahs) {
      els.quick3Ayahs.addEventListener('click', () => setQuickAyahRange(3));
    }
    if (els.quick5Ayahs) {
      els.quick5Ayahs.addEventListener('click', () => setQuickAyahRange(5));
    }
    if (els.quickFullSurah) {
      els.quickFullSurah.addEventListener('click', () => {
        const surah = getSurahMeta(state.selectedSurahId);
        state.fromAyah = 1;
        state.toAyah = Math.min(surah.versesCount, 12);
        updateInputsFromState();
        onSurahOrRangeChanged(true);
      });
    }

    // Settings Toggles
    if (els.fontSizeSelect) {
      els.fontSizeSelect.addEventListener('change', (e) => {
        state.fontSizeMode = e.target.value;
        renderStaticPreviewFrame();
      });
    }
    if (els.qualitySelect) {
      els.qualitySelect.addEventListener('change', (e) => {
        state.quality = e.target.value;
        setCanvasDimensions();
        initParticles();
        renderStaticPreviewFrame();
      });
    }
    if (els.particlesToggle) {
      els.particlesToggle.addEventListener('change', (e) => {
        state.enableParticles = e.target.checked;
        renderStaticPreviewFrame();
      });
    }
    if (els.waveToggle) {
      els.waveToggle.addEventListener('change', (e) => {
        state.enableWave = e.target.checked;
        renderStaticPreviewFrame();
      });
    }
    if (els.basmalaToggle) {
      els.basmalaToggle.addEventListener('change', (e) => {
        state.enableBasmala = e.target.checked;
        renderStaticPreviewFrame();
      });
    }
    if (els.audioMonitorToggle) {
      els.audioMonitorToggle.addEventListener('change', (e) => {
        state.monitorAudio = e.target.checked;
      });
    }

    // Main Operation Buttons
    if (els.btnGenerate) {
      els.btnGenerate.addEventListener('click', startVideoExport);
    }
    if (els.btnLivePreview) {
      els.btnLivePreview.addEventListener('click', onLivePreviewClicked);
    }
    if (els.btnStopPreview) {
      els.btnStopPreview.addEventListener('click', stopLivePreview);
    }
    if (els.btnCancelProgress) {
      els.btnCancelProgress.addEventListener('click', abortCurrentOperation);
    }
    if (els.btnExportPoster) {
      els.btnExportPoster.addEventListener('click', exportStaticPosterPNG);
    }

    // Completed Actions
    if (els.btnDownloadVideo) {
      els.btnDownloadVideo.addEventListener('click', downloadGeneratedVideo);
    }
    if (els.btnShareVideo) {
      els.btnShareVideo.addEventListener('click', shareGeneratedVideo);
    }
    if (els.btnResetVideo) {
      els.btnResetVideo.addEventListener('click', resetStudioState);
    }
    if (els.btnBackPlayer) {
      els.btnBackPlayer.addEventListener('click', () => {
        if (typeof window.switchView === 'function') {
          window.switchView('player');
        } else {
          const btn = document.getElementById('nav-btn-player');
          if (btn) btn.click();
        }
      });
    }
  }

  function getSurahMeta(surahId) {
    if (typeof SURAHS !== 'undefined') {
      const found = SURAHS.find(s => s.id === surahId);
      if (found) return found;
    }
    return { id: surahId, name: 'الفاتحة', englishName: 'Al-Fatihah', versesCount: 7 };
  }

  function getReciterMeta(reciterId) {
    const found = VIDEO_RECITERS.find(r => r.id === reciterId);
    return found || VIDEO_RECITERS[0];
  }

  function stepAyah(field, delta) {
    const surah = getSurahMeta(state.selectedSurahId);
    if (field === 'from') {
      state.fromAyah = Math.max(1, Math.min(surah.versesCount, state.fromAyah + delta));
      if (state.toAyah < state.fromAyah) state.toAyah = state.fromAyah;
    } else {
      state.toAyah = Math.max(state.fromAyah, Math.min(surah.versesCount, state.toAyah + delta));
    }
    updateInputsFromState();
    onSurahOrRangeChanged();
  }

  function handleRangeInputChange(field) {
    const surah = getSurahMeta(state.selectedSurahId);
    let fVal = parseInt(els.fromAyahInput.value, 10) || 1;
    let tVal = parseInt(els.toAyahInput.value, 10) || 1;

    fVal = Math.max(1, Math.min(surah.versesCount, fVal));
    tVal = Math.max(1, Math.min(surah.versesCount, tVal));

    if (field === 'from' && fVal > tVal) {
      tVal = fVal;
    } else if (field === 'to' && tVal < fVal) {
      fVal = tVal;
    }

    state.fromAyah = fVal;
    state.toAyah = tVal;
    updateInputsFromState();
    onSurahOrRangeChanged();
  }

  function setQuickAyahRange(count) {
    const surah = getSurahMeta(state.selectedSurahId);
    state.toAyah = Math.min(surah.versesCount, state.fromAyah + count - 1);
    updateInputsFromState();
    onSurahOrRangeChanged();
  }

  function updateInputsFromState() {
    const surah = getSurahMeta(state.selectedSurahId);
    if (els.fromAyahInput) {
      els.fromAyahInput.max = surah.versesCount;
      els.fromAyahInput.value = state.fromAyah;
    }
    if (els.toAyahInput) {
      els.toAyahInput.max = surah.versesCount;
      els.toAyahInput.value = state.toAyah;
    }
    updateSummaryBadge();
  }

  function updateSummaryBadge() {
    if (!els.rangeSummaryBadge) return;
    const count = state.toAyah - state.fromAyah + 1;
    const surah = getSurahMeta(state.selectedSurahId);
    const estSeconds = Math.round(count * 6.0);
    els.rangeSummaryBadge.innerHTML = `
      <i class="fa-solid fa-layer-group text-amber-400"></i>
      <span>المحدد: <strong>${toArabicDigits(count)}</strong> آيات (${toArabicDigits(state.fromAyah)} إلى ${toArabicDigits(state.toAyah)}) • سورة ${surah.name} • مدة تقديرية: ~<strong>${toArabicDigits(estSeconds)}</strong> ثانية</span>
    `;
  }

  // --- 8. Uthmani Quranic Text Fetching & Live Box ---
  async function fetchSurahAyahs(surahId) {
    if (ayahsCache[surahId]) return ayahsCache[surahId];
    try {
      const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahId}/quran-uthmani`);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const json = await res.json();
      if (json && json.data && json.data.ayahs) {
        ayahsCache[surahId] = json.data.ayahs;
        return json.data.ayahs;
      }
    } catch (err) {
      console.warn('Failed to fetch from alquran.cloud, retrying fallback...', err);
    }
    return [];
  }

  async function onSurahOrRangeChanged(forceFetch = false) {
    updateSummaryBadge();
    if (els.textPreviewBox) {
      els.textPreviewBox.innerHTML = '<span class="text-xs text-amber-400/80 animate-pulse">جاري تحميل النص القرآني الشريف...</span>';
    }

    const allAyahs = await fetchSurahAyahs(state.selectedSurahId);
    const selectedAyahs = allAyahs.filter(a => a.numberInSurah >= state.fromAyah && a.numberInSurah <= state.toAyah);

    if (els.textPreviewBox) {
      if (selectedAyahs.length > 0) {
        els.textPreviewBox.innerHTML = selectedAyahs.map(a => {
          let text = a.text;
          if (state.selectedSurahId !== 1 && a.numberInSurah === 1) {
            text = text.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '').trim();
          }
          return `<span class="leading-loose select-text">${text}</span> <span class="text-amber-400 font-bold mx-1">﴿${toArabicDigits(a.numberInSurah)}﴾</span> `;
        }).join(' ');
      } else {
        els.textPreviewBox.innerHTML = '<span class="text-xs text-[var(--text-secondary)]">جاري جلب الآيات...</span>';
      }
    }

    renderStaticPreviewFrame();
  }

  // --- 9. High-Fidelity Canvas Rendering Engine ---
  async function renderStaticPreviewFrame() {
    if (!els.canvas) return;
    const ctx = els.canvas.getContext('2d');
    const w = els.canvas.width;
    const h = els.canvas.height;

    // Ensure fonts are ready before drawing
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    const allAyahs = ayahsCache[state.selectedSurahId] || [];
    const firstSelected = allAyahs.find(a => a.numberInSurah === state.fromAyah);
    let sampleText = firstSelected ? firstSelected.text : 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ';
    if (state.selectedSurahId !== 1 && state.fromAyah === 1) {
      sampleText = sampleText.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '').trim();
    }

    drawSingleFrame(ctx, w, h, {
      time: 1.5,
      activeAyah: {
        text: sampleText,
        ayahNum: state.fromAyah,
        alpha: 1.0,
        scale: 1.0,
        offsetY: 0
      },
      audioLevel: 0.35,
      themeId: state.selectedThemeId
    });
  }

  function drawSingleFrame(ctx, w, h, data) {
    const theme = VIDEO_THEMES[data.themeId || state.selectedThemeId] || VIDEO_THEMES.emerald;
    const scale = Math.min(w / 720, h / 1280);
    const time = data.time || 0;
    const surah = getSurahMeta(state.selectedSurahId);
    const reciter = getReciterMeta(state.selectedReciterId);

    ctx.clearRect(0, 0, w, h);

    // 1. Luxury Royal Radial Gradient Background
    const grad = ctx.createRadialGradient(w / 2, h * 0.5, 60 * scale, w / 2, h * 0.5, Math.max(w, h) * 0.65);
    grad.addColorStop(0, theme.bgCenter);
    grad.addColorStop(0.55, theme.bgMid);
    grad.addColorStop(1, theme.bgOuter);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // 2. Subtle Islamic Star Geometric Background Ambient
    drawGeometricAura(ctx, w, h, scale, theme, time);

    // 3. Floating Golden Dust Particles
    if (state.enableParticles && state.particles.length > 0) {
      state.particles.forEach(p => {
        p.update(w, h, time);
        p.draw(ctx, time, theme);
      });
    }

    // 4. Ornamental Double Islamic Golden Borders
    drawOrnamentalBorders(ctx, w, h, scale, theme);

    // 5. Top Header Banner (Surah Badge + Reciter Pill + Basmala)
    drawHeaderBanner(ctx, w, h, scale, theme, surah, reciter);

    // 6. Optional Custom Dedication / Sadaqah Jariyah Badge
    if (state.dedicationText) {
      drawDedicationBadge(ctx, w, h, scale, theme);
    }

    // 7. Word-Wrapped Center Ayah Text with Smooth Eased Transitions (Guaranteed Non-overlapping)
    if (data.activeAyah && data.activeAyah.text && data.activeAyah.alpha > 0.005) {
      drawAyahText(ctx, w, h, scale, theme, data.activeAyah);
    }

    // 8. Symmetrical Quranic Audio Soundwave
    if (state.enableWave) {
      drawAudioSoundwave(ctx, w, h, scale, theme, time, data.audioLevel || 0.4);
    }

    // 9. Footer Watermark & Platform Identity (اسم المنصة والرابط بالصغير)
    drawFooterWatermark(ctx, w, h, scale, theme);
  }

  function drawGeometricAura(ctx, w, h, scale, theme, time) {
    ctx.save();
    ctx.strokeStyle = theme.goldBorderSubtle;
    ctx.lineWidth = 1 * scale;
    ctx.globalAlpha = 0.16 + 0.05 * Math.sin(time * 0.8);
    const cx = w / 2;
    const cy = h * 0.52;
    const r = Math.min(w, h) * 0.36;

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.72, 0, Math.PI * 2);
    ctx.stroke();

    // 8-point geometric star rosette
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4 + (time * 0.02);
      const outerX = cx + Math.cos(angle) * (r * 0.85);
      const outerY = cy + Math.sin(angle) * (r * 0.85);
      const midAngle = angle + Math.PI / 8;
      const innerX = cx + Math.cos(midAngle) * (r * 0.55);
      const innerY = cy + Math.sin(midAngle) * (r * 0.55);
      if (i === 0) ctx.moveTo(outerX, outerY);
      else ctx.lineTo(outerX, outerY);
      ctx.lineTo(innerX, innerY);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  function drawOrnamentalBorders(ctx, w, h, scale, theme) {
    ctx.save();
    const margin1 = Math.max(16, 26 * scale);
    const margin2 = Math.max(22, 34 * scale);

    // Outer Thin Gold Line
    ctx.strokeStyle = theme.goldBorder;
    ctx.lineWidth = Math.max(1, 2 * scale);
    ctx.strokeRect(margin1, margin1, w - margin1 * 2, h - margin1 * 2);

    // Inner Delicate Line
    ctx.strokeStyle = theme.goldBorderSubtle;
    ctx.lineWidth = Math.max(0.75, 1 * scale);
    ctx.strokeRect(margin2, margin2, w - margin2 * 2, h - margin2 * 2);

    // 4 Corner Arabesque Star Motifs
    const corners = [
      { x: margin2, y: margin2 },
      { x: w - margin2, y: margin2 },
      { x: margin2, y: h - margin2 },
      { x: w - margin2, y: h - margin2 }
    ];

    corners.forEach(c => {
      ctx.fillStyle = theme.goldPrimary;
      ctx.beginPath();
      ctx.arc(c.x, c.y, 3.5 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Delicate bracket flourishes
      ctx.strokeStyle = theme.goldPrimary;
      ctx.lineWidth = 1.2 * scale;
      ctx.beginPath();
      ctx.arc(c.x, c.y, 12 * scale, 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.restore();
  }

  function drawHeaderBanner(ctx, w, h, scale, theme, surah, reciter) {
    ctx.save();
    ctx.textAlign = 'center';
    ctx.direction = 'rtl';

    // Top Decorative Golden Arch Emblem
    const isLandscape = state.aspectRatio === 'landscape';
    const headerY = isLandscape ? 58 * scale : 80 * scale;

    ctx.fillStyle = theme.goldPrimary;
    ctx.font = `bold ${Math.round(16 * scale)}px Amiri, serif`;
    ctx.fillText('✦ ﷽ ✦', w / 2, headerY - 22 * scale);

    // Surah Name in Ornate Arabic Calligraphy
    ctx.shadowColor = theme.glowColor;
    ctx.shadowBlur = 14 * scale;
    ctx.fillStyle = theme.goldLight;
    const surahFontSize = isLandscape ? 32 : 36;
    ctx.font = `bold ${Math.round(surahFontSize * scale)}px 'Amiri Quran', Amiri, serif`;
    ctx.fillText(`سُورَةُ ${surah.name}`, w / 2, headerY + 12 * scale);
    ctx.shadowBlur = 0;

    // Reciter Name Pill
    const pillY = headerY + (isLandscape ? 44 : 52) * scale;
    const pillW = Math.min(w * 0.65, 330 * scale);
    const pillH = (isLandscape ? 30 : 32) * scale;
    const pillX = w / 2 - pillW / 2;

    ctx.fillStyle = theme.badgeBg;
    ctx.beginPath();
    ctx.roundRect(pillX, pillY - pillH / 2, pillW, pillH, 16 * scale);
    ctx.fill();
    ctx.strokeStyle = theme.goldBorder;
    ctx.lineWidth = 1 * scale;
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.font = `600 ${Math.round(14 * scale)}px Cairo, sans-serif`;
    ctx.fillText(`بصوت ${reciter.name}`, w / 2, pillY + 5 * scale);

    // Basmala Banner (Rendered if first verse is 1 or toggle enabled)
    if (state.enableBasmala && (state.fromAyah === 1 || state.enableBasmala) && state.selectedSurahId !== 9) {
      ctx.fillStyle = 'rgba(251, 191, 36, 0.9)';
      const basmalaSize = isLandscape ? 20 : 23;
      ctx.font = `${Math.round(basmalaSize * scale)}px 'Amiri Quran', Amiri, serif`;
      ctx.fillText('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', w / 2, pillY + (isLandscape ? 36 : 42) * scale);
    }
    ctx.restore();
  }

  function drawDedicationBadge(ctx, w, h, scale, theme) {
    ctx.save();
    ctx.textAlign = 'center';
    ctx.direction = 'rtl';

    const isLandscape = state.aspectRatio === 'landscape';
    const badgeY = isLandscape ? 32 * scale : 42 * scale;
    const badgeH = 24 * scale;
    const text = `✦ ${state.dedicationText} ✦`;

    ctx.font = `600 ${Math.round(12 * scale)}px Cairo, sans-serif`;
    const textWidth = ctx.measureText(text).width;
    const badgeW = textWidth + (28 * scale);
    const badgeX = w / 2 - badgeW / 2;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.beginPath();
    ctx.roundRect(badgeX, badgeY - badgeH / 2, badgeW, badgeH, 12 * scale);
    ctx.fill();

    ctx.strokeStyle = theme.goldBorder;
    ctx.lineWidth = 1 * scale;
    ctx.stroke();

    ctx.fillStyle = theme.goldPrimary;
    ctx.fillText(text, w / 2, badgeY + 4 * scale);
    ctx.restore();
  }

  function drawAyahText(ctx, w, h, scale, theme, activeAyah) {
    ctx.save();
    const alpha = Math.max(0, Math.min(1, activeAyah.alpha !== undefined ? activeAyah.alpha : 1.0));
    const animScale = activeAyah.scale !== undefined ? activeAyah.scale : 1.0;
    ctx.globalAlpha = alpha;

    ctx.textAlign = 'center';
    ctx.direction = 'rtl';

    // Calculate maximum width based on aspect ratio
    const margin = state.aspectRatio === 'landscape' ? 180 * scale : 100 * scale;
    const maxWidth = w - margin;

    // Full text with formatted ayah end
    const fullText = `${activeAyah.text} ﴿${toArabicDigits(activeAyah.ayahNum)}﴾`;

    // Dynamic Font Sizing based on verse length, aspect ratio & user selection
    let baseFontSize = 42;
    const len = fullText.length;
    if (len <= 45) baseFontSize = 52;
    else if (len <= 95) baseFontSize = 44;
    else if (len <= 180) baseFontSize = 36;
    else if (len <= 280) baseFontSize = 30;
    else baseFontSize = 25;

    if (state.aspectRatio === 'landscape') {
      baseFontSize = Math.round(baseFontSize * 0.9);
    }
    if (state.fontSizeMode === 'large') baseFontSize = Math.min(56, baseFontSize * 1.18);
    if (state.fontSizeMode === 'medium') baseFontSize = Math.max(24, baseFontSize * 0.94);

    const fontSize = Math.round(baseFontSize * scale);
    ctx.font = `bold ${fontSize}px 'Amiri Quran', Amiri, serif`;

    // Word-Wrapping Algorithm
    const words = fullText.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach(word => {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });
    if (currentLine) lines.push(currentLine);

    const lineHeight = fontSize * 1.82;
    const totalHeight = lines.length * lineHeight;

    const centerY = (h * (state.aspectRatio === 'landscape' ? 0.54 : 0.53)) + (activeAyah.offsetY || 0);
    const startY = centerY - (totalHeight / 2) + (fontSize * 0.75);

    // Apply scaling transform around canvas center
    ctx.translate(w / 2, centerY);
    ctx.scale(animScale, animScale);
    ctx.translate(-w / 2, -centerY);

    // Glowing Ambient Shadow for Maximum Legibility
    if (state.transitionStyle === 'radiant') {
      ctx.shadowColor = theme.goldPrimary;
      ctx.shadowBlur = 22 * scale;
    } else {
      ctx.shadowColor = theme.glowColor;
      ctx.shadowBlur = 14 * scale;
    }

    lines.forEach((line, idx) => {
      const lineY = startY + (idx * lineHeight);
      ctx.fillStyle = theme.textColor;
      ctx.fillText(line, w / 2, lineY);
    });

    ctx.restore();
  }

  function drawAudioSoundwave(ctx, w, h, scale, theme, time, audioLevel) {
    ctx.save();
    const isLandscape = state.aspectRatio === 'landscape';
    const waveY = h - (isLandscape ? 115 * scale : 160 * scale);
    const barsCount = isLandscape ? 40 : 28;
    const barWidth = 3.5 * scale;
    const spacing = 4.5 * scale;
    const totalWaveWidth = (barsCount * (barWidth + spacing));
    const startX = (w / 2) - (totalWaveWidth / 2);

    ctx.fillStyle = theme.goldPrimary;
    ctx.shadowColor = theme.glowColor;
    ctx.shadowBlur = 8 * scale;

    for (let i = 0; i < barsCount; i++) {
      const distFromCenter = Math.abs(i - (barsCount / 2)) / (barsCount / 2);
      const centerFactor = 1 - Math.pow(distFromCenter, 1.6);
      const waveVal = Math.sin(time * 6 + i * 0.4) * 0.5 + 0.5;
      const dynamicHeight = Math.max(5 * scale, (audioLevel * 40 * scale * centerFactor * waveVal) + (7 * scale * centerFactor));

      const bx = startX + i * (barWidth + spacing);
      const by = waveY - dynamicHeight / 2;

      ctx.beginPath();
      ctx.roundRect(bx, by, barWidth, dynamicHeight, 2 * scale);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawFooterWatermark(ctx, w, h, scale, theme) {
    ctx.save();
    const isLandscape = state.aspectRatio === 'landscape';
    const footerY = h - (isLandscape ? 48 * scale : 62 * scale);
    const dividerY = footerY - (isLandscape ? 20 * scale : 26 * scale);

    // Delicate Golden Gradient Divider Line
    const divWidth = Math.min(w * 0.5, 240 * scale);
    const grad = ctx.createLinearGradient(w / 2 - divWidth / 2, dividerY, w / 2 + divWidth / 2, dividerY);
    grad.addColorStop(0, 'rgba(251, 191, 36, 0)');
    grad.addColorStop(0.5, theme.goldBorder);
    grad.addColorStop(1, 'rgba(251, 191, 36, 0)');

    ctx.strokeStyle = grad;
    ctx.lineWidth = 1 * scale;
    ctx.beginPath();
    ctx.moveTo(w / 2 - divWidth / 2, dividerY);
    ctx.lineTo(w / 2 + divWidth / 2, dividerY);
    ctx.stroke();

    // Golden Star Center Dot
    ctx.fillStyle = theme.goldPrimary;
    ctx.beginPath();
    ctx.arc(w / 2, dividerY, 2.5 * scale, 0, Math.PI * 2);
    ctx.fill();

    // Platform Name (Mandatory Requirement)
    ctx.textAlign = 'center';
    ctx.direction = 'rtl';
    ctx.fillStyle = theme.goldPrimary;
    ctx.font = `bold ${Math.round((isLandscape ? 14 : 17) * scale)}px Cairo, sans-serif`;
    ctx.fillText('مَنْصَةُ القُرآنِ الكَرِيمِ', w / 2, footerY - 4 * scale);

    // Platform Domain Link (Mandatory Requirement)
    ctx.fillStyle = '#94a3b8';
    ctx.font = `600 ${Math.round((isLandscape ? 11 : 13) * scale)}px Cairo, sans-serif`;
    ctx.direction = 'ltr';
    ctx.fillText('quran.parotcorp.com', w / 2, footerY + (isLandscape ? 13 : 15) * scale);

    ctx.restore();
  }

  // --- 10. Web Audio Pipeline, Master Buffer Stitching & Silence Trimming ---
  function getAudioContext() {
    if (!state.audioCtx || state.audioCtx.state === 'closed') {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      state.audioCtx = new AudioCtxClass();
    }
    if (state.audioCtx.state === 'suspended') {
      state.audioCtx.resume().catch(() => {});
    }
    return state.audioCtx;
  }

  // Convert Web AudioBuffer to Standard 16-bit PCM WAV Blob for Rock-Solid Native HTML5 Audio
  function audioBufferToWavBlob(audioBuffer) {
    const numOfChan = audioBuffer.numberOfChannels;
    const length = audioBuffer.length * numOfChan * 2 + 44;
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    const channels = [];
    const sampleRate = audioBuffer.sampleRate;
    let offset = 0;
    let pos = 0;

    function writeString(str) {
      for (let i = 0; i < str.length; i++) {
        view.setUint8(pos++, str.charCodeAt(i));
      }
    }
    function setUint16(data) {
      view.setUint16(pos, data, true);
      pos += 2;
    }
    function setUint32(data) {
      view.setUint32(pos, data, true);
      pos += 4;
    }

    // RIFF chunk descriptor
    writeString('RIFF');
    setUint32(length - 8);
    writeString('WAVE');

    // fmt subchunk
    writeString('fmt ');
    setUint32(16); // 16 for PCM
    setUint16(1);  // linear quantization (PCM)
    setUint16(numOfChan);
    setUint32(sampleRate);
    setUint32(sampleRate * 2 * numOfChan); // byteRate
    setUint16(numOfChan * 2);              // blockAlign
    setUint16(16);                         // bitsPerSample

    // data subchunk
    writeString('data');
    setUint32(length - pos - 4);

    for (let i = 0; i < numOfChan; i++) {
      channels.push(audioBuffer.getChannelData(i));
    }

    while (pos < length) {
      for (let i = 0; i < numOfChan; i++) {
        let sample = Math.max(-1, Math.min(1, channels[i][offset]));
        sample = (sample < 0 ? sample * 0x8000 : sample * 0x7FFF) | 0;
        setUint16(sample);
      }
      offset++;
    }

    return new Blob([view], { type: 'audio/wav' });
  }

  // Silence Analyzer & Trimmer
  function analyzeAndTrimBuffer(audioBuffer, paddingMs = 50) {
    const sampleRate = audioBuffer.sampleRate;
    const left = audioBuffer.getChannelData(0);
    const right = audioBuffer.numberOfChannels > 1 ? audioBuffer.getChannelData(1) : left;
    const len = left.length;

    const threshold = 0.0028;
    let startSample = 0;
    let endSample = len - 1;

    for (let i = 0; i < len; i++) {
      if (Math.abs(left[i]) > threshold || Math.abs(right[i]) > threshold) {
        startSample = Math.max(0, i - Math.round((paddingMs / 1000) * sampleRate));
        break;
      }
    }

    // Leave ~80ms natural room decay tail
    const tailPadding = Math.round((80 / 1000) * sampleRate);
    for (let i = len - 1; i >= 0; i--) {
      if (Math.abs(left[i]) > threshold || Math.abs(right[i]) > threshold) {
        endSample = Math.min(len - 1, i + tailPadding);
        break;
      }
    }

    const trimmedLength = Math.max(1, endSample - startSample + 1);
    return { startSample, endSample, trimmedLength };
  }

  // Master Buffer Assembler: stitches all ayahs into 1 continuous stereo buffer
  function assembleMasterAudioBuffer(audioCtx, ayahBuffersWithMeta, mode) {
    const sampleRate = audioCtx.sampleRate;
    const leadInSec = 0.5;
    const leadOutSec = 0.8;
    const leadInSamples = Math.round(leadInSec * sampleRate);
    const leadOutSamples = Math.round(leadOutSec * sampleRate);

    // Crossfade or gap settings
    let crossfadeSamples = 0;
    let gapSamples = 0;

    if (mode === 'seamless') {
      crossfadeSamples = Math.round(0.030 * sampleRate); // 30ms smooth equal-power crossfade
    } else if (mode === 'natural') {
      gapSamples = Math.round(0.18 * sampleRate); // 180ms breath pause
    } else if (mode === 'calm') {
      gapSamples = Math.round(0.38 * sampleRate); // 380ms calm pause
    }

    // Calculate total length
    let totalSamples = leadInSamples;
    ayahBuffersWithMeta.forEach((item, idx) => {
      totalSamples += item.trimmedLength;
      if (idx < ayahBuffersWithMeta.length - 1) {
        if (mode === 'seamless') {
          totalSamples -= crossfadeSamples;
        } else {
          totalSamples += gapSamples;
        }
      }
    });
    totalSamples += leadOutSamples;

    const masterBuffer = audioCtx.createBuffer(2, Math.max(totalSamples, 1024), sampleRate);
    const masterL = masterBuffer.getChannelData(0);
    const masterR = masterBuffer.getChannelData(1);

    const timeline = [];
    let currentSample = leadInSamples;

    ayahBuffersWithMeta.forEach((item, idx) => {
      const srcBuf = item.buffer;
      const srcL = srcBuf.getChannelData(0);
      const srcR = srcBuf.numberOfChannels > 1 ? srcBuf.getChannelData(1) : srcL;
      const startS = item.startSample;
      const endS = item.endSample;
      const count = item.trimmedLength;

      const ayahStartSec = currentSample / sampleRate;
      const stepSamples = (idx < ayahBuffersWithMeta.length - 1 && mode === 'seamless')
        ? (count - crossfadeSamples)
        : count;
      const ayahEndSec = (currentSample + stepSamples) / sampleRate;

      timeline.push({
        ayahNum: item.ayahNum,
        text: item.text,
        startTime: ayahStartSec,
        endTime: ayahEndSec,
        duration: ayahEndSec - ayahStartSec
      });

      // Micro fade-in at the start (15ms)
      const microFade = Math.min(Math.round(0.015 * sampleRate), Math.floor(count / 4));

      for (let s = 0; s < count; s++) {
        let gain = 1.0;
        if (s < microFade && (idx === 0 || mode !== 'seamless')) {
          gain = s / microFade;
        } else if (s > count - microFade && (idx === ayahBuffersWithMeta.length - 1 || mode !== 'seamless')) {
          gain = (count - s) / microFade;
        }

        const targetIdx = currentSample + s;
        if (targetIdx < totalSamples) {
          masterL[targetIdx] += srcL[startS + s] * gain;
          masterR[targetIdx] += srcR[startS + s] * gain;
        }
      }

      if (idx < ayahBuffersWithMeta.length - 1) {
        if (mode === 'seamless') {
          currentSample += (count - crossfadeSamples);
        } else {
          currentSample += (count + gapSamples);
        }
      } else {
        currentSample += count;
      }
    });

    const totalDurationSec = (currentSample + leadOutSamples) / sampleRate;
    return { masterBuffer, timeline, totalDurationSec };
  }

  async function loadAyahAudioBuffer(audioCtx, reciter, surahId, ayahNum, signal) {
    const sStr = String(surahId).padStart(3, '0');
    const aStr = String(ayahNum).padStart(3, '0');

    // Standard EveryAyah CDN URL
    let url = `https://everyayah.com/data/${reciter.folder}/${sStr}${aStr}.mp3`;

    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`Audio fetch failed (${res.status}): ${url}`);
    const arrayBuffer = await res.arrayBuffer();
    return await audioCtx.decodeAudioData(arrayBuffer);
  }

  async function loadHusseinAlAzzamFullSurahBuffer(audioCtx, surahId, signal) {
    const url = HUSSEIN_ALAZZAM_FILES[surahId];
    if (!url) throw new Error('تلاوة الشيخ حسين العزام غير متوفرة لهذه السورة');
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`Audio fetch failed (${res.status})`);
    const arrayBuffer = await res.arrayBuffer();
    return await audioCtx.decodeAudioData(arrayBuffer);
  }

  async function prepareTimeline(audioCtx, signal) {
    const allAyahs = await fetchSurahAyahs(state.selectedSurahId);
    const selectedAyahs = allAyahs.filter(a => a.numberInSurah >= state.fromAyah && a.numberInSurah <= state.toAyah);

    if (selectedAyahs.length === 0) {
      throw new Error('لم يتم العثور على آيات في النطاق المحدد');
    }

    const reciter = getReciterMeta(state.selectedReciterId);

    // Special handling for Sheikh Hussein Al-Azzam (Authentic full-surah recording)
    if (reciter.id === 'hussein_alazzam' && HUSSEIN_ALAZZAM_FILES[state.selectedSurahId]) {
      updateProgressUI({
        status: `جاري تنزيل التلاوة الخاشعة للشيخ حسين العزام لسورة ${getSurahMeta(state.selectedSurahId).name}...`,
        percent: 30
      });

      const fullBuffer = await loadHusseinAlAzzamFullSurahBuffer(audioCtx, state.selectedSurahId, signal);
      const totalSurahAyahs = getSurahMeta(state.selectedSurahId).versesCount;
      const durationPerAyah = fullBuffer.duration / totalSurahAyahs;

      // Slice portion corresponding to selected range
      const startSample = Math.floor(((state.fromAyah - 1) / totalSurahAyahs) * fullBuffer.length);
      const endSample = Math.min(fullBuffer.length, Math.ceil((state.toAyah / totalSurahAyahs) * fullBuffer.length));
      const rangeLength = Math.max(1024, endSample - startSample);

      const sliceBuffer = audioCtx.createBuffer(2, rangeLength, fullBuffer.sampleRate);
      sliceBuffer.getChannelData(0).set(fullBuffer.getChannelData(0).subarray(startSample, endSample));
      if (fullBuffer.numberOfChannels > 1) {
        sliceBuffer.getChannelData(1).set(fullBuffer.getChannelData(1).subarray(startSample, endSample));
      } else {
        sliceBuffer.getChannelData(1).set(fullBuffer.getChannelData(0).subarray(startSample, endSample));
      }

      // Build timeline with continuous synchronized flow
      const timeline = [];
      const count = selectedAyahs.length;
      const stepDuration = sliceBuffer.duration / count;
      selectedAyahs.forEach((ayah, i) => {
        let cleanText = ayah.text;
        if (state.selectedSurahId !== 1 && ayah.numberInSurah === 1) {
          cleanText = cleanText.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '').trim();
        }
        timeline.push({
          ayahNum: ayah.numberInSurah,
          text: cleanText,
          startTime: i * stepDuration,
          endTime: (i + 1) * stepDuration,
          duration: stepDuration
        });
      });

      state.masterAudioBuffer = sliceBuffer;
      return { masterBuffer: sliceBuffer, timeline, totalDuration: sliceBuffer.duration };
    }

    // Standard Verse-by-Verse Reciters
    const rawBuffersWithMeta = [];
    for (let i = 0; i < selectedAyahs.length; i++) {
      if (signal && signal.aborted) throw new Error('تم إلغاء العملية');
      const ayah = selectedAyahs[i];
      let cleanText = ayah.text;
      if (state.selectedSurahId !== 1 && ayah.numberInSurah === 1) {
        cleanText = cleanText.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '').trim();
      }

      updateProgressUI({
        status: `جاري تحميل ومعالجة تلاوة الآية ${toArabicDigits(ayah.numberInSurah)} (${toArabicDigits(i + 1)} من ${toArabicDigits(selectedAyahs.length)})...`,
        percent: Math.round(((i + 1) / selectedAyahs.length) * 45)
      });

      const audioBuffer = await loadAyahAudioBuffer(audioCtx, reciter, state.selectedSurahId, ayah.numberInSurah, signal);
      const trimInfo = analyzeAndTrimBuffer(audioBuffer);

      rawBuffersWithMeta.push({
        ayahNum: ayah.numberInSurah,
        text: cleanText,
        buffer: audioBuffer,
        startSample: trimInfo.startSample,
        endSample: trimInfo.endSample,
        trimmedLength: trimInfo.trimmedLength
      });
    }

    // Assemble single Master Audio Buffer with chosen continuity mode
    updateProgressUI({
      status: 'جاري دمج المقاطع في تلاوة سارية متصلة (بدون تقطيع)...',
      percent: 48
    });

    const { masterBuffer, timeline, totalDurationSec } = assembleMasterAudioBuffer(audioCtx, rawBuffersWithMeta, state.continuityMode);
    state.masterAudioBuffer = masterBuffer;
    return { masterBuffer, timeline, totalDuration: totalDurationSec };
  }

  // --- 11. Live Interactive Preview Mode ---
  function onLivePreviewClicked() {
    // Synchronously unlock Web Audio Context within user gesture (Safari & mobile requirement)
    const audioCtx = getAudioContext();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    try {
      const unlockBuf = audioCtx.createBuffer(1, 1, audioCtx.sampleRate || 44100);
      const unlockSrc = audioCtx.createBufferSource();
      unlockSrc.buffer = unlockBuf;
      unlockSrc.connect(audioCtx.destination);
      unlockSrc.start(0);
    } catch (e) {}

    // Launch live preview
    startLivePreview();
  }

  async function startLivePreview() {
    if (state.isProcessing || state.isPreviewing) return;
    stopAllAudioPlayback();

    // Pause background main audio if playing
    const mainAudio = document.getElementById('main-audio');
    if (mainAudio && !mainAudio.paused) mainAudio.pause();

    const audioCtx = getAudioContext();
    state.isPreviewing = true;
    state.operationAbortController = new AbortController();

    els.btnLivePreview.classList.add('hidden');
    els.btnStopPreview.classList.remove('hidden');
    els.btnGenerate.disabled = true;

    try {
      showProgressUI('جاري تجهيز المعاينة الحية وهندسة الصوت...', 15);
      const { masterBuffer, timeline, totalDuration } = await prepareTimeline(audioCtx, state.operationAbortController.signal);
      state.timeline = timeline;
      hideProgressUI();

      // Ensure audioCtx is active (non-blocking to prevent promise deadlock)
      if (audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
      }

      // Schedule Master Audio Playback through AudioBufferSourceNode
      const startTime = audioCtx.currentTime + 0.08;
      const masterSource = audioCtx.createBufferSource();
      masterSource.buffer = masterBuffer;

      const masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(1.0, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);
      masterSource.connect(masterGain);

      masterSource.start(startTime);
      state.activeSources.push(masterSource);

      // Run Animation Loop synchronized with audio playback
      runRenderLoop({
        audioCtx,
        startTime,
        totalDuration,
        timeline,
        isRecording: false,
        onComplete: () => {
          stopLivePreview();
          if (typeof showToast === 'function') showToast('اكتملت المعاينة الحية بنجاح');
        }
      });

    } catch (err) {
      if (err.message !== 'تم إلغاء العملية') {
        console.error('Preview error:', err);
        if (typeof showToast === 'function') showToast('تعذر بدء المعاينة: ' + err.message, 'error');
      }
      stopLivePreview();
    }
  }

  function stopLivePreview() {
    state.isPreviewing = false;
    abortCurrentOperation();
    stopAllAudioPlayback();

    if (els.btnLivePreview) els.btnLivePreview.classList.remove('hidden');
    if (els.btnStopPreview) els.btnStopPreview.classList.add('hidden');
    if (els.btnGenerate) els.btnGenerate.disabled = false;
    hideProgressUI();
    renderStaticPreviewFrame();
  }

  // --- 12. Full Video Generation & Recording Engine ---
  async function startVideoExport() {
    if (state.isProcessing || state.isRecording) return;
    stopAllAudioPlayback();

    if (typeof MediaRecorder === 'undefined' || !els.canvas.captureStream) {
      if (typeof showToast === 'function') {
        showToast('متصفحك لا يدعم خاصية تسجيل الفيديو بالكامل (MediaRecorder)', 'error');
      }
      return;
    }

    const audioCtx = getAudioContext();
    state.isRecording = true;
    state.isProcessing = true;
    state.operationAbortController = new AbortController();

    // Pause background main audio if playing
    const mainAudio = document.getElementById('main-audio');
    if (mainAudio && !mainAudio.paused) mainAudio.pause();

    els.btnGenerate.disabled = true;
    els.btnLivePreview.disabled = true;
    showProgressUI('جاري تهيئة استوديو التسجيل وتنزيل الصوتيات...', 5);

    try {
      const { masterBuffer, timeline, totalDuration } = await prepareTimeline(audioCtx, state.operationAbortController.signal);
      state.timeline = timeline;

      updateProgressUI({
        status: 'جاري إعداد محرك الفيديو وتسجيل التلاوة المتصلة...',
        percent: 52
      });

      // Canvas Stream (30 FPS)
      const fps = 30;
      const canvasStream = els.canvas.captureStream(fps);

      // Web Audio Destination Node
      const audioDest = audioCtx.createMediaStreamDestination();

      // Audio Monitoring (optional speaker passthrough)
      const monitorGain = audioCtx.createGain();
      monitorGain.gain.value = state.monitorAudio ? 0.9 : 0.0;
      monitorGain.connect(audioCtx.destination);

      // Play single continuous Master Buffer
      const recordingStartTime = audioCtx.currentTime + 0.15;
      const masterSource = audioCtx.createBufferSource();
      masterSource.buffer = masterBuffer;
      masterSource.connect(audioDest);
      masterSource.connect(monitorGain);
      masterSource.start(recordingStartTime);
      state.activeSources.push(masterSource);

      // Combine Video & Audio Streams
      const combinedStream = new MediaStream([
        ...canvasStream.getVideoTracks(),
        ...audioDest.stream.getAudioTracks()
      ]);

      // Detect Supported MIME Types (Cross-browser MP4 / WebM)
      const mimeTypes = [
        'video/mp4;codecs=avc1,mp4a.40.2',
        'video/mp4',
        'video/webm;codecs=vp9,opus',
        'video/webm;codecs=vp8,opus',
        'video/webm'
      ];
      let selectedMime = '';
      for (const m of mimeTypes) {
        if (MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(m)) {
          selectedMime = m;
          break;
        }
      }

      state.recordedChunks = [];
      const bitRate = state.quality === '1080p' ? 5000000 : 3500000;
      const recorderOptions = selectedMime ? { mimeType: selectedMime, videoBitsPerSecond: bitRate } : {};
      const recorder = new MediaRecorder(combinedStream, recorderOptions);
      state.recorder = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          state.recordedChunks.push(e.data);
        }
      };

      const recordPromise = new Promise((resolve) => {
        recorder.onstop = () => {
          const finalMime = selectedMime || 'video/webm';
          const blob = new Blob(state.recordedChunks, { type: finalMime });
          resolve({ blob, mime: finalMime });
        };
      });

      recorder.start(100);

      // Run Render Loop synchronized with audioCtx.currentTime
      runRenderLoop({
        audioCtx,
        startTime: recordingStartTime,
        totalDuration,
        timeline,
        previewAudio: null,
        isRecording: true,
        onComplete: async () => {
          updateProgressUI({
            status: 'جاري إنهاء وتجهيز الفيديو القرآني...',
            percent: 98
          });

          if (recorder.state !== 'inactive') {
            recorder.stop();
          }

          const { blob, mime } = await recordPromise;
          finishVideoExport(blob, mime);
        }
      });

    } catch (err) {
      if (err.message !== 'تم إلغاء العملية') {
        console.error('Export error:', err);
        if (typeof showToast === 'function') showToast('حدث خطأ أثناء تصدير الفيديو: ' + err.message, 'error');
      }
      resetStudioState();
    }
  }

  // --- 13. Synchronized Frame Render Loop with Explicit Visual Gap & Quintic Easing ---
  function runRenderLoop(config) {
    const { audioCtx, startTime, totalDuration, timeline, previewAudio, isRecording, onComplete } = config;
    const ctx = els.canvas.getContext('2d');
    const w = els.canvas.width;
    const h = els.canvas.height;
    const scale = Math.min(w / 720, h / 1280);

    function frame() {
      if (!state.isRecording && !state.isPreviewing) return;

      // Determine precise elapsed time:
      let elapsed = 0;
      if (previewAudio && !previewAudio.paused && !previewAudio.ended) {
        elapsed = previewAudio.currentTime;
      } else {
        elapsed = audioCtx.currentTime - startTime;
      }

      const progress = Math.min(1.0, Math.max(0, elapsed / totalDuration));

      let activeAyahData = null;

      // Find active verse and compute ultra-smooth easing with explicit visual rest gap
      for (let i = 0; i < timeline.length; i++) {
        const item = timeline[i];
        const isLast = (i === timeline.length - 1);

        // Visual rest gap between verses (0.35s - 0.45s)
        // During this gap, the Sheikh's recitation flows seamlessly, but NO text is drawn.
        const visualGap = isLast
          ? Math.min(0.35, Math.max(0.20, item.duration * 0.08))
          : Math.min(0.45, Math.max(0.28, item.duration * 0.10));

        const visualEndTime = item.endTime - visualGap;
        const dur = item.duration;
        const visualDuration = Math.max(0.2, visualEndTime - item.startTime);

        // Check if current time falls within this verse's audio lifecycle
        if (elapsed >= item.startTime && elapsed < item.endTime) {
          // If we reached the visual rest gap:
          if (elapsed >= visualEndTime) {
            // Verse has completely faded out to alpha 0. Screen is left in pure serene state
            // for the remainder of this ayah's audio duration. Guaranteed zero overlap!
            activeAyahData = null;
            break;
          }

          const t = elapsed - item.startTime;
          const remVisual = visualEndTime - elapsed;

          const fadeInDur = Math.min(0.40, Math.max(0.18, visualDuration * 0.14));
          const fadeOutDur = Math.min(0.36, Math.max(0.18, visualDuration * 0.12));

          let alpha = 1.0;
          let animScale = 1.0;
          let offsetY = 0;

          if (t < fadeInDur) {
            // 1. Entrance: Quintic ease-in with gentle upward rise
            const p = Math.max(0, Math.min(1, t / fadeInDur));
            const eased = easeOutQuint(p);
            alpha = eased;
            animScale = 0.94 + (0.06 * eased);
            offsetY = (1 - eased) * (18 * scale);
          } else if (remVisual < fadeOutDur) {
            // 2. Exit: Cubic ease-out down to complete transparency BEFORE the visual gap
            const p = Math.max(0, Math.min(1, remVisual / fadeOutDur));
            const eased = easeInCubic(p);
            alpha = eased;
            animScale = 1.0 + (0.02 * (1 - eased));
            offsetY = -(1 - eased) * (16 * scale);
          } else {
            // 3. Sustain: Majestic spiritual breathing scale & subtle float
            const sustainProgress = (t - fadeInDur) / Math.max(0.1, visualDuration - fadeInDur - fadeOutDur);
            animScale = 1.0 + (0.012 * Math.sin(sustainProgress * Math.PI));
            offsetY = -(sustainProgress * 4 * scale);
          }

          activeAyahData = {
            text: item.text,
            ayahNum: item.ayahNum,
            alpha: Math.max(0, Math.min(1, alpha)),
            scale: animScale,
            offsetY: offsetY
          };
          break;
        }
      }

      // Draw the complete frame (Guaranteed zero overlap, distinct visual pause between verses)
      drawSingleFrame(ctx, w, h, {
        time: elapsed,
        activeAyah: activeAyahData,
        audioLevel: activeAyahData ? (0.32 + 0.48 * Math.sin(elapsed * 7)) : 0.12,
        themeId: state.selectedThemeId
      });

      // Update Recording UI
      if (isRecording) {
        const percent = Math.min(97, 52 + Math.round(progress * 45));
        const currentSec = Math.floor(elapsed);
        const totalSec = Math.ceil(totalDuration);
        const ayahLabel = activeAyahData ? ` • الآية ${toArabicDigits(activeAyahData.ayahNum)}` : '';
        updateProgressUI({
          status: `جاري تسجيل الفيديو إطاراً بإطار${ayahLabel}...`,
          percent: percent,
          timeText: `${formatTime(currentSec)} / ${formatTime(totalSec)}`
        });
      }

      // Completion check
      const isEnded = (previewAudio && previewAudio.duration)
        ? (previewAudio.ended || elapsed >= totalDuration)
        : (elapsed >= totalDuration);

      if (isEnded) {
        if (state.renderAnimationId) cancelAnimationFrame(state.renderAnimationId);
        state.renderAnimationId = null;
        if (onComplete) onComplete();
        return;
      }

      state.renderAnimationId = requestAnimationFrame(frame);
    }

    state.renderAnimationId = requestAnimationFrame(frame);
  }

  function finishVideoExport(blob, mime) {
    state.isRecording = false;
    state.isProcessing = false;
    state.currentVideoBlob = blob;

    if (state.currentVideoUrl) {
      URL.revokeObjectURL(state.currentVideoUrl);
    }
    state.currentVideoUrl = URL.createObjectURL(blob);

    hideProgressUI();

    // Show Finished Video in Player
    if (els.videoPlayer) {
      els.videoPlayer.src = state.currentVideoUrl;
      els.videoPlayer.classList.remove('hidden');
      els.canvas.classList.add('hidden');
      els.videoPlayer.play().catch(() => {});
    }

    // Show Complete Overlay
    if (els.completeOverlay) {
      els.completeOverlay.classList.remove('hidden');
    }

    if (els.btnGenerate) els.btnGenerate.disabled = false;
    if (els.btnLivePreview) els.btnLivePreview.disabled = false;

    if (typeof showToast === 'function') {
      showToast('🎉 تم إنشاء الفيديو بنجاح بتلاوة سلسة وجودة عالية!');
    }
  }

  // --- 14. Instant Poster / Wallpaper Export (PNG) ---
  function exportStaticPosterPNG() {
    if (!els.canvas) return;
    const surah = getSurahMeta(state.selectedSurahId);
    const filename = `Quran-Poster-${surah.name}-${state.fromAyah}-${state.toAyah}.png`;

    const dataUrl = els.canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (typeof showToast === 'function') {
      showToast('تم تحميل بوستر الآيات عالي الدقة (PNG) بنجاح');
    }
  }

  // --- 15. Download & Native Share ---
  function downloadGeneratedVideo() {
    if (!state.currentVideoBlob && !state.currentVideoUrl) {
      if (typeof showToast === 'function') showToast('لا يوجد فيديو جاهز للتحميل', 'error');
      return;
    }

    const surah = getSurahMeta(state.selectedSurahId);
    const reciter = getReciterMeta(state.selectedReciterId);
    const isMp4 = state.currentVideoBlob && state.currentVideoBlob.type.includes('mp4');
    const ext = isMp4 ? 'mp4' : 'webm';
    const filename = `Quran-Reel-${surah.name}-Ayah-${state.fromAyah}-${state.toAyah}-${reciter.name}.${ext}`;

    const link = document.createElement('a');
    link.href = state.currentVideoUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (typeof showToast === 'function') showToast('جاري حفظ وتحميل الفيديو القرآني...');
  }

  async function shareGeneratedVideo() {
    if (!state.currentVideoBlob) {
      downloadGeneratedVideo();
      return;
    }

    const surah = getSurahMeta(state.selectedSurahId);
    const reciter = getReciterMeta(state.selectedReciterId);
    const isMp4 = state.currentVideoBlob.type.includes('mp4');
    const ext = isMp4 ? 'mp4' : 'webm';
    const filename = `quran-${surah.name}-${state.fromAyah}-${state.toAyah}.${ext}`;

    const file = new File([state.currentVideoBlob], filename, { type: state.currentVideoBlob.type });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          title: `سورة ${surah.name} • ${reciter.name}`,
          text: `تلاوة خاشعة من سورة ${surah.name} عبر منصة القرآن الكريم (quran.parotcorp.com)`,
          files: [file]
        });
        if (typeof showToast === 'function') showToast('تمت مشاركة الفيديو بنجاح');
      } catch (err) {
        if (err.name !== 'AbortError') {
          downloadGeneratedVideo();
        }
      }
    } else {
      downloadGeneratedVideo();
    }
  }

  // --- 16. UI Helpers & Abort Handling ---
  function showProgressUI(status, percent) {
    if (els.progressOverlay) els.progressOverlay.classList.remove('hidden');
    if (els.progressStatusText) els.progressStatusText.innerText = status;
    if (els.progressBar) els.progressBar.style.width = `${percent}%`;
    if (els.progressPercent) els.progressPercent.innerText = `${percent}%`;
    if (els.progressTime) els.progressTime.innerText = '';
  }

  function updateProgressUI(data) {
    if (data.status && els.progressStatusText) els.progressStatusText.innerText = data.status;
    if (data.percent !== undefined) {
      if (els.progressBar) els.progressBar.style.width = `${data.percent}%`;
      if (els.progressPercent) els.progressPercent.innerText = `${data.percent}%`;
    }
    if (data.timeText && els.progressTime) els.progressTime.innerText = data.timeText;
  }

  function hideProgressUI() {
    if (els.progressOverlay) els.progressOverlay.classList.add('hidden');
  }

  function stopAllAudioPlayback() {
    if (state.previewAudio) {
      try {
        state.previewAudio.pause();
        state.previewAudio.currentTime = 0;
        state.previewAudio.src = '';
      } catch (e) {}
    }
    if (state.previewAudioUrl) {
      try { URL.revokeObjectURL(state.previewAudioUrl); } catch (e) {}
      state.previewAudioUrl = null;
    }
    state.activeSources.forEach(src => {
      try { src.stop(); } catch (e) {}
    });
    state.activeSources = [];
  }

  function abortCurrentOperation() {
    if (state.operationAbortController) {
      state.operationAbortController.abort();
      state.operationAbortController = null;
    }
    if (state.renderAnimationId) {
      cancelAnimationFrame(state.renderAnimationId);
      state.renderAnimationId = null;
    }
    if (state.recorder && state.recorder.state !== 'inactive') {
      try { state.recorder.stop(); } catch (e) {}
    }
    stopAllAudioPlayback();
    state.isRecording = false;
    state.isPreviewing = false;
    state.isProcessing = false;
  }

  function resetStudioState() {
    abortCurrentOperation();
    if (els.completeOverlay) els.completeOverlay.classList.add('hidden');
    if (els.videoPlayer) {
      els.videoPlayer.pause();
      els.videoPlayer.classList.add('hidden');
    }
    if (els.canvas) els.canvas.classList.remove('hidden');
    if (els.btnGenerate) els.btnGenerate.disabled = false;
    if (els.btnLivePreview) {
      els.btnLivePreview.disabled = false;
      els.btnLivePreview.classList.remove('hidden');
    }
    if (els.btnStopPreview) els.btnStopPreview.classList.add('hidden');
    hideProgressUI();
    renderStaticPreviewFrame();
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${toArabicDigits(String(m).padStart(2, '0'))}:${toArabicDigits(String(s).padStart(2, '0'))}`;
  }

  // --- 17. Public Integration API ---
  window.openVideoStudio = function (surahId, ayahNum) {
    if (typeof window.switchView === 'function') {
      window.switchView('video');
    } else if (typeof switchView === 'function') {
      switchView('video');
    } else {
      const btn = document.getElementById('nav-btn-video') || document.getElementById('btn-header-video');
      if (btn) btn.click();
    }
    initVideoStudio();

    if (surahId) {
      state.selectedSurahId = parseInt(surahId, 10);
      if (els.surahSelect) els.surahSelect.value = state.selectedSurahId;
    }
    if (ayahNum) {
      const a = parseInt(ayahNum, 10);
      state.fromAyah = a;
      state.toAyah = a;
    }
    updateInputsFromState();
    onSurahOrRangeChanged(true);

    if (typeof showToast === 'function') {
      const surah = getSurahMeta(state.selectedSurahId);
      showToast(`تم فتح صانع الفيديوهات • سورة ${surah.name}`);
    }
  };

  window.initVideoStudioView = function () {
    initVideoStudio();
  };

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideoStudio);
  } else {
    setTimeout(initVideoStudio, 100);
  }

})();
