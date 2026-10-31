/**
 * Parot Quran Platform - Social Video & Reels Generator (صانع فيديوهات القرآن الكريم)
 * 100% Client-Side Video Generation via HTML5 Canvas, Web Audio API, and MediaRecorder.
 * Pure Static GitHub Pages Architecture (Zero Backend Required).
 * 
 * Features:
 * - 9:16 Vertical Video format optimized for Instagram Stories, Reels, TikTok, YouTube Shorts.
 * - Verse-by-verse (Ayah-by-Ayah) audio synchronization with 19 renowned reciters from EveryAyah.
 * - Smooth Sine-Eased Fade-In and Fade-Out transitions with subtle upward floating motion.
 * - Visual aesthetic echoing the platform's spiritual identity: Royal Emerald, Kaaba Kiswah, Midnight Sapphire.
 * - Platform branding watermark at the bottom: "مَنْصَةُ القُرآنِ الكَرِيمِ • quran.parotcorp.com".
 * - Live interactive smartphone mockup preview before exporting.
 * - High-speed client-side recording with progress tracking, instant download, and native Web Share.
 */

(function () {
  'use strict';

  // --- 1. Top Verified EveryAyah Reciters ---
  const VIDEO_RECITERS = [
    { id: 'alafasy', name: 'الشيخ مشاري راشد العفاسي', folder: 'Alafasy_128kbps', format: '128k' },
    { id: 'husary', name: 'الشيخ محمود خليل الحصري (مرتل)', folder: 'Husary_128kbps', format: '128k' },
    { id: 'minshawy', name: 'الشيخ محمد صديق المنشاوي (مرتل)', folder: 'Minshawy_Murattal_128kbps', format: '128k' },
    { id: 'minshawy_mujawwad', name: 'الشيخ محمد صديق المنشاوي (مجوّد)', folder: 'Minshawy_Mujawwad_192kbps', format: '192k' },
    { id: 'abdul_basit', name: 'الشيخ عبد الباسط عبد الصمد (مرتل)', folder: 'Abdul_Basit_Murattal_192kbps', format: '192k' },
    { id: 'abdul_basit_mujawwad', name: 'الشيخ عبد الباسط عبد الصمد (مجوّد)', folder: 'Abdul_Basit_Mujawwad_128kbps', format: '128k' },
    { id: 'maher', name: 'الشيخ ماهر المعيقلي', folder: 'Maher_AlMuaiqly_64kbps', format: '64k' },
    { id: 'ghamadi', name: 'الشيخ سعد الغامدي', folder: 'Ghamadi_40kbps', format: '40k' },
    { id: 'dussary', name: 'الشيخ ياسر الدوسري', folder: 'Yasser_Ad-Dussary_128kbps', format: '128k' },
    { id: 'shaatree', name: 'الشيخ أبو بكر الشاطري', folder: 'Abu_Bakr_Ash-Shaatree_128kbps', format: '128k' },
    { id: 'shuraym', name: 'الشيخ سعود الشريم', folder: 'Saood_ash-Shuraym_128kbps', format: '128k' },
    { id: 'sudais', name: 'الشيخ عبد الرحمن السديس', folder: 'Abdurrahmaan_As-Sudais_192kbps', format: '192k' },
    { id: 'alqatami', name: 'الشيخ ناصر القطامي', folder: 'Nasser_Alqatami_128kbps', format: '128k' },
    { id: 'ali_jaber', name: 'الشيخ علي جابر', folder: 'Ali_Jaber_64kbps', format: '64k' },
    { id: 'ayyoob', name: 'الشيخ محمد أيوب', folder: 'Muhammad_Ayyoub_128kbps', format: '128k' },
    { id: 'rifai', name: 'الشيخ هاني الرفاعي', folder: 'Hani_Rifai_192kbps', format: '192k' },
    { id: 'tablawi', name: 'الشيخ محمد محمود الطبلاوي', folder: 'Mohammad_al_Tablaway_128kbps', format: '128k' },
    { id: 'abbad', name: 'الشيخ فارس عباد', folder: 'Fares_Abbad_64kbps', format: '64k' },
    { id: 'sowaid', name: 'الشيخ أيمن سويد (المصحف المعلم)', folder: 'Ayman_Sowaid_64kbps', format: '64k' }
  ];

  // --- 2. Luxury Aesthetic Themes (Echoing Parot Quran Visuals) ---
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
      badgeBg: 'rgba(2, 44, 34, 0.85)',
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
      badgeBg: 'rgba(18, 18, 20, 0.9)',
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

  // --- 4. Studio State Management ---
  const state = {
    selectedSurahId: 1,
    fromAyah: 1,
    toAyah: 3,
    selectedReciterId: 'alafasy',
    selectedThemeId: 'emerald',
    fontSizeMode: 'auto', // 'auto' | 'medium' | 'large'
    enableParticles: true,
    enableWave: true,
    enableBasmala: true,
    quality: '720p', // '720p' (720x1280) | '1080p' (1080x1920)
    monitorAudio: true,

    // Runtime state
    isProcessing: false,
    isPreviewing: false,
    isRecording: false,
    audioCtx: null,
    recorder: null,
    recordedChunks: [],
    currentVideoBlob: null,
    currentVideoUrl: null,
    particles: [],
    timeline: [],
    activeSources: [],
    renderAnimationId: null,
    operationAbortController: null
  };

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
      canvas: document.getElementById('video-canvas'),
      videoPlayer: document.getElementById('video-result-player'),
      phoneScreen: document.getElementById('video-phone-screen'),
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
      audioMonitorToggle: document.getElementById('video-monitor-audio'),

      // Controls
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
      themeContainer: document.getElementById('video-theme-options'),
      qualitySelect: document.getElementById('video-quality-select'),
      fontSizeSelect: document.getElementById('video-fontsize-select'),
      particlesToggle: document.getElementById('video-particles-toggle'),
      waveToggle: document.getElementById('video-wave-toggle'),
      basmalaToggle: document.getElementById('video-basmala-toggle'),

      // Quick Range Selectors
      quick1Ayah: document.getElementById('video-quick-1'),
      quick3Ayahs: document.getElementById('video-quick-3'),
      quick5Ayahs: document.getElementById('video-quick-5'),
      quickFullSurah: document.getElementById('video-quick-full')
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

    // Setup Canvas Resolution (720x1280 default)
    setCanvasDimensions();

    // Initialize Particles
    initParticles();

    // Attach Event Listeners
    attachEventListeners();

    // Initial Data Fetch & First Frame Render
    onSurahOrRangeChanged(true);
  }

  function setCanvasDimensions() {
    const is1080p = state.quality === '1080p';
    els.canvas.width = is1080p ? 1080 : 720;
    els.canvas.height = is1080p ? 1920 : 1280;
  }

  function initParticles() {
    state.particles = [];
    const count = 40;
    for (let i = 0; i < count; i++) {
      state.particles.push(new GoldenParticle(els.canvas.width, els.canvas.height, true));
    }
  }

  function populateSurahsDropdown() {
    if (!els.surahSelect || typeof SURAHS === 'undefined') return;
    els.surahSelect.innerHTML = SURAHS.map(s => {
      return `<option value="${s.id}">سورة ${s.name} (${s.versesCount} آية) • ${s.englishName}</option>`;
    }).join('');
    els.surahSelect.value = state.selectedSurahId;
  }

  function populateRecitersDropdown() {
    if (!els.reciterSelect) return;
    els.reciterSelect.innerHTML = VIDEO_RECITERS.map(r => {
      return `<option value="${r.id}">${r.name}</option>`;
    }).join('');
    els.reciterSelect.value = state.selectedReciterId;
  }

  function populateThemesSelector() {
    if (!els.themeContainer) return;
    els.themeContainer.innerHTML = Object.values(VIDEO_THEMES).map(theme => {
      const active = theme.id === state.selectedThemeId ? 'active ring-2 ring-amber-400 bg-amber-500/15' : 'bg-emerald-950/40 hover:bg-emerald-900/40';
      return `
        <button type="button" data-theme-id="${theme.id}" class="video-theme-pill flex items-center gap-2 px-3 py-2 rounded-xl border border-amber-500/25 transition-all text-xs font-bold text-[var(--text-primary)] ${active}">
          <span class="w-4 h-4 rounded-full border border-amber-300 shadow-sm" style="background: ${theme.previewGradient}"></span>
          <span>${theme.name}</span>
        </button>
      `;
    }).join('');
  }

  // --- 7. Event Handlers ---
  function attachEventListeners() {
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

    // Number Inputs & Steppers
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
      els.btnLivePreview.addEventListener('click', startLivePreview);
    }
    if (els.btnStopPreview) {
      els.btnStopPreview.addEventListener('click', stopLivePreview);
    }
    if (els.btnCancelProgress) {
      els.btnCancelProgress.addEventListener('click', abortCurrentOperation);
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
  }

  function getSurahMeta(surahId) {
    if (typeof SURAHS !== 'undefined') {
      const found = SURAHS.find(s => s.id === surahId);
      if (found) return found;
    }
    return { id: surahId, name: 'الفاتحة', englishName: 'Al-Fatiha', versesCount: 7 };
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
    const estSeconds = Math.round(count * 6.5);
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
        offsetY: 0
      },
      audioLevel: 0.35,
      themeId: state.selectedThemeId
    });
  }

  function drawSingleFrame(ctx, w, h, data) {
    const theme = VIDEO_THEMES[data.themeId || state.selectedThemeId] || VIDEO_THEMES.emerald;
    const scale = w / 720;
    const time = data.time || 0;
    const surah = getSurahMeta(state.selectedSurahId);
    const reciter = getReciterMeta(state.selectedReciterId);

    ctx.clearRect(0, 0, w, h);

    // 1. Luxury Royal Radial Gradient Background
    const grad = ctx.createRadialGradient(w / 2, h * 0.5, 60 * scale, w / 2, h * 0.5, h * 0.65);
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

    // 6. Word-Wrapped Center Ayah Text with Smooth Fade Transitions
    if (data.activeAyah && data.activeAyah.text) {
      drawAyahText(ctx, w, h, scale, theme, data.activeAyah);
    }

    // 7. Symmetrical Quranic Audio Soundwave
    if (state.enableWave) {
      drawAudioSoundwave(ctx, w, h, scale, theme, time, data.audioLevel || 0.4);
    }

    // 8. Footer Watermark & Platform Identity (Required: اسم المنصة والرابط بالصغير)
    drawFooterWatermark(ctx, w, h, scale, theme);
  }

  function drawGeometricAura(ctx, w, h, scale, theme, time) {
    ctx.save();
    ctx.strokeStyle = theme.goldBorderSubtle;
    ctx.lineWidth = 1 * scale;
    ctx.globalAlpha = 0.18 + 0.05 * Math.sin(time * 0.8);
    const cx = w / 2;
    const cy = h * 0.52;
    const r = 260 * scale;

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.72, 0, Math.PI * 2);
    ctx.stroke();

    // Subtle 8-point geometric star rosette
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4 + (time * 0.02);
      const outerX = cx + Math.cos(angle) * (r * 0.85);
      const outerY = cy + Math.sin(angle) * (r * 0.85);
      const nextAngle = ((i + 1) * Math.PI) / 4 + (time * 0.02);
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
    const margin1 = 26 * scale;
    const margin2 = 34 * scale;

    // Outer Thin Gold Line
    ctx.strokeStyle = theme.goldBorder;
    ctx.lineWidth = 2 * scale;
    ctx.strokeRect(margin1, margin1, w - margin1 * 2, h - margin1 * 2);

    // Inner Delicate Line
    ctx.strokeStyle = theme.goldBorderSubtle;
    ctx.lineWidth = 1 * scale;
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
      ctx.arc(c.x, c.y, 4 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Delicate bracket flourishes
      ctx.strokeStyle = theme.goldPrimary;
      ctx.lineWidth = 1.5 * scale;
      ctx.beginPath();
      ctx.arc(c.x, c.y, 14 * scale, 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.restore();
  }

  function drawHeaderBanner(ctx, w, h, scale, theme, surah, reciter) {
    ctx.save();
    ctx.textAlign = 'center';
    ctx.direction = 'rtl';

    // 1. Top Decorative Golden Arch Emblem
    const headerY = 82 * scale;
    ctx.fillStyle = theme.goldPrimary;
    ctx.font = `bold ${Math.round(18 * scale)}px Amiri, serif`;
    ctx.fillText('✦ ﷽ ✦', w / 2, headerY - 24 * scale);

    // 2. Surah Name in Ornate Arabic Calligraphy
    ctx.shadowColor = theme.glowColor;
    ctx.shadowBlur = 15 * scale;
    ctx.fillStyle = theme.goldLight;
    ctx.font = `bold ${Math.round(38 * scale)}px 'Amiri Quran', Amiri, serif`;
    ctx.fillText(`سُورَةُ ${surah.name}`, w / 2, headerY + 12 * scale);
    ctx.shadowBlur = 0;

    // 3. Reciter Name Pill
    const pillY = headerY + 54 * scale;
    const pillW = 340 * scale;
    const pillH = 34 * scale;
    const pillX = w / 2 - pillW / 2;

    ctx.fillStyle = theme.badgeBg;
    ctx.beginPath();
    ctx.roundRect(pillX, pillY - pillH / 2, pillW, pillH, 17 * scale);
    ctx.fill();
    ctx.strokeStyle = theme.goldBorder;
    ctx.lineWidth = 1 * scale;
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.font = `600 ${Math.round(15 * scale)}px Cairo, sans-serif`;
    ctx.fillText(`بصوت ${reciter.name}`, w / 2, pillY + 5 * scale);

    // 4. Basmala Banner (Rendered if first verse is 1 or toggle enabled)
    if (state.enableBasmala && (state.fromAyah === 1 || state.enableBasmala) && state.selectedSurahId !== 9) {
      ctx.fillStyle = 'rgba(251, 191, 36, 0.88)';
      ctx.font = `${Math.round(24 * scale)}px 'Amiri Quran', Amiri, serif`;
      ctx.fillText('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', w / 2, pillY + 44 * scale);
    }
    ctx.restore();
  }

  function drawAyahText(ctx, w, h, scale, theme, activeAyah) {
    ctx.save();
    const alpha = Math.max(0, Math.min(1, activeAyah.alpha !== undefined ? activeAyah.alpha : 1.0));
    ctx.globalAlpha = alpha;

    ctx.textAlign = 'center';
    ctx.direction = 'rtl';

    // Text formatting: full verse + verse end bracket with Arabic numeral
    const fullText = `${activeAyah.text} ﴿${toArabicDigits(activeAyah.ayahNum)}﴾`;
    const maxWidth = w - (120 * scale);

    // Dynamic Font Sizing based on verse length & user selection
    let baseFontSize = 44;
    const len = fullText.length;
    if (len <= 50) baseFontSize = 54;
    else if (len <= 110) baseFontSize = 46;
    else if (len <= 200) baseFontSize = 38;
    else if (len <= 300) baseFontSize = 32;
    else baseFontSize = 27;

    if (state.fontSizeMode === 'large') baseFontSize = Math.min(58, baseFontSize * 1.18);
    if (state.fontSizeMode === 'medium') baseFontSize = Math.max(26, baseFontSize * 0.95);

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

    const lineHeight = fontSize * 1.78;
    const totalHeight = lines.length * lineHeight;
    const centerY = (h * 0.53) + (activeAyah.offsetY || 0);
    const startY = centerY - (totalHeight / 2) + (fontSize * 0.75);

    // Glowing Ambient Shadow for Maximum Readability
    ctx.shadowColor = theme.glowColor;
    ctx.shadowBlur = 14 * scale;

    lines.forEach((line, idx) => {
      const lineY = startY + (idx * lineHeight);

      // Slight warm gold halo for the text
      ctx.fillStyle = theme.textColor;
      ctx.fillText(line, w / 2, lineY);
    });

    ctx.restore();
  }

  function drawAudioSoundwave(ctx, w, h, scale, theme, time, audioLevel) {
    ctx.save();
    const waveY = h - (175 * scale);
    const barsCount = 28;
    const barWidth = 3.5 * scale;
    const spacing = 4.5 * scale;
    const totalWaveWidth = (barsCount * (barWidth + spacing));
    const startX = (w / 2) - (totalWaveWidth / 2);

    ctx.fillStyle = theme.goldPrimary;
    ctx.shadowColor = theme.glowColor;
    ctx.shadowBlur = 8 * scale;

    for (let i = 0; i < barsCount; i++) {
      // Symmetrical amplitude from center outward
      const distFromCenter = Math.abs(i - (barsCount / 2)) / (barsCount / 2);
      const centerFactor = 1 - Math.pow(distFromCenter, 1.6);

      // Sinusoidal rhythm combined with audio reactivity
      const waveVal = Math.sin(time * 6 + i * 0.4) * 0.5 + 0.5;
      const dynamicHeight = Math.max(6 * scale, (audioLevel * 45 * scale * centerFactor * waveVal) + (8 * scale * centerFactor));

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
    const footerY = h - (65 * scale);
    const dividerY = footerY - (28 * scale);

    // 1. Delicate Golden Gradient Divider Line
    const divWidth = 240 * scale;
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

    // 2. Small Golden Star Center Ornament
    ctx.fillStyle = theme.goldPrimary;
    ctx.beginPath();
    ctx.arc(w / 2, dividerY, 2.5 * scale, 0, Math.PI * 2);
    ctx.fill();

    // 3. Platform Name (Mandatory Requirement)
    ctx.textAlign = 'center';
    ctx.direction = 'rtl';
    ctx.fillStyle = theme.goldPrimary;
    ctx.font = `bold ${Math.round(18 * scale)}px Cairo, sans-serif`;
    ctx.fillText('مَنْصَةُ القُرآنِ الكَرِيمِ', w / 2, footerY - 5 * scale);

    // 4. Platform Link / Domain (Mandatory Requirement)
    ctx.fillStyle = '#94a3b8';
    ctx.font = `600 ${Math.round(13 * scale)}px Cairo, sans-serif`;
    ctx.direction = 'ltr';
    ctx.fillText('quran.parotcorp.com', w / 2, footerY + 15 * scale);

    ctx.restore();
  }

  // --- 10. Web Audio Pipeline & Audio Loading ---
  function getAudioContext() {
    if (!state.audioCtx || state.audioCtx.state === 'closed') {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      state.audioCtx = new AudioCtxClass();
    }
    if (state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }
    return state.audioCtx;
  }

  async function loadAyahAudioBuffer(audioCtx, reciterFolder, surahId, ayahNum, signal) {
    const sStr = String(surahId).padStart(3, '0');
    const aStr = String(ayahNum).padStart(3, '0');
    const url = `https://everyayah.com/data/${reciterFolder}/${sStr}${aStr}.mp3`;

    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`Audio fetch failed (${res.status}): ${url}`);
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
    const timeline = [];
    const leadIn = 0.55; // Initial breath & theme establish
    const gap = 0.35;    // Inter-ayah pause
    const leadOut = 0.8; // Outro hold
    let cursorTime = leadIn;

    for (let i = 0; i < selectedAyahs.length; i++) {
      if (signal && signal.aborted) throw new Error('تم إلغاء العملية');
      const ayah = selectedAyahs[i];
      let cleanText = ayah.text;
      if (state.selectedSurahId !== 1 && ayah.numberInSurah === 1) {
        cleanText = cleanText.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '').trim();
      }

      updateProgressUI({
        status: `جاري تحميل تلاوة الآية ${toArabicDigits(ayah.numberInSurah)} (${toArabicDigits(i + 1)} من ${toArabicDigits(selectedAyahs.length)})...`,
        percent: Math.round(((i + 1) / selectedAyahs.length) * 45)
      });

      const audioBuffer = await loadAyahAudioBuffer(audioCtx, reciter.folder, state.selectedSurahId, ayah.numberInSurah, signal);
      const duration = audioBuffer.duration;
      const startTime = cursorTime;
      const endTime = startTime + duration;

      timeline.push({
        ayahNum: ayah.numberInSurah,
        text: cleanText,
        audioBuffer: audioBuffer,
        duration: duration,
        startTime: startTime,
        endTime: endTime
      });

      cursorTime = endTime + gap;
    }

    const totalDuration = cursorTime - gap + leadOut;
    return { timeline, totalDuration };
  }

  // --- 11. Live Interactive Preview Mode ---
  async function startLivePreview() {
    if (state.isProcessing || state.isPreviewing) return;
    stopAllAudioPlayback();

    const audioCtx = getAudioContext();
    state.isPreviewing = true;
    state.operationAbortController = new AbortController();

    els.btnLivePreview.classList.add('hidden');
    els.btnStopPreview.classList.remove('hidden');
    els.btnGenerate.disabled = true;

    try {
      showProgressUI('جاري تجهيز المعاينة الحية...', 15);
      const { timeline, totalDuration } = await prepareTimeline(audioCtx, state.operationAbortController.signal);
      state.timeline = timeline;
      hideProgressUI();

      // Schedule Audio Playback
      const startTime = audioCtx.currentTime + 0.1;
      const masterGain = audioCtx.createGain();
      masterGain.gain.value = 1.0;
      masterGain.connect(audioCtx.destination);

      timeline.forEach(item => {
        const src = audioCtx.createBufferSource();
        src.buffer = item.audioBuffer;
        src.connect(masterGain);
        src.start(startTime + item.startTime);
        state.activeSources.push(src);
      });

      // Run Animation Loop
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

    // Check MediaRecorder & captureStream Support
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
      const { timeline, totalDuration } = await prepareTimeline(audioCtx, state.operationAbortController.signal);
      state.timeline = timeline;

      updateProgressUI({
        status: 'جاري إعداد محرك الفيديو والصوت...',
        percent: 50
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

      // Schedule Audio Buffer Sources
      const recordingStartTime = audioCtx.currentTime + 0.15;
      timeline.forEach(item => {
        const src = audioCtx.createBufferSource();
        src.buffer = item.audioBuffer;
        src.connect(audioDest);
        src.connect(monitorGain);
        src.start(recordingStartTime + item.startTime);
        state.activeSources.push(src);
      });

      // Combine Video & Audio Streams into single MediaStream
      const combinedStream = new MediaStream([
        ...canvasStream.getVideoTracks(),
        ...audioDest.stream.getAudioTracks()
      ]);

      // Detect Supported MIME Types (Cross-browser: MP4 on Safari/iOS, WebM on Chromium/Firefox)
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
      const recorderOptions = selectedMime ? { mimeType: selectedMime, videoBitsPerSecond: 3500000 } : {};
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

      recorder.start(100); // collect in 100ms chunks

      // Run Render Loop synchronized with audioCtx.currentTime
      runRenderLoop({
        audioCtx,
        startTime: recordingStartTime,
        totalDuration,
        timeline,
        isRecording: true,
        onComplete: async () => {
          updateProgressUI({
            status: 'جاري إنهاء وضغط الفيديو القرآني...',
            percent: 98
          });

          // Stop recorder
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

  // --- 13. Synchronized Frame Render Loop ---
  function runRenderLoop(config) {
    const { audioCtx, startTime, totalDuration, timeline, isRecording, onComplete } = config;
    const ctx = els.canvas.getContext('2d');
    const w = els.canvas.width;
    const h = els.canvas.height;

    function frame() {
      if (!state.isRecording && !state.isPreviewing) return;

      const elapsed = audioCtx.currentTime - startTime;
      const progress = Math.min(1.0, Math.max(0, elapsed / totalDuration));

      // Calculate which Ayah is active and its exact Fade Alpha
      let activeAyahData = null;
      for (const item of timeline) {
        if (elapsed >= item.startTime && elapsed <= item.endTime) {
          const timeInAyah = elapsed - item.startTime;
          const remainingInAyah = item.endTime - elapsed;
          const fadeDuration = Math.min(0.55, item.duration * 0.22);

          let alpha = 1.0;
          let offsetY = 0;

          if (timeInAyah < fadeDuration) {
            // Smooth Ease-In Fade with upward glide
            const p = timeInAyah / fadeDuration;
            alpha = Math.sin((p * Math.PI) / 2);
            offsetY = (1 - alpha) * (20 * (w / 720));
          } else if (remainingInAyah < fadeDuration) {
            // Smooth Ease-Out Fade with continued upward float
            const p = remainingInAyah / fadeDuration;
            alpha = Math.sin((p * Math.PI) / 2);
            offsetY = -(1 - alpha) * (16 * (w / 720));
          }

          activeAyahData = {
            text: item.text,
            ayahNum: item.ayahNum,
            alpha: alpha,
            offsetY: offsetY
          };
          break;
        }
      }

      // Draw the Complete Video Frame
      drawSingleFrame(ctx, w, h, {
        time: elapsed,
        activeAyah: activeAyahData,
        audioLevel: activeAyahData ? (0.3 + 0.5 * Math.sin(elapsed * 7)) : 0.15,
        themeId: state.selectedThemeId
      });

      // Update Progress UI (Recording Mode)
      if (isRecording) {
        const percent = Math.min(97, 50 + Math.round(progress * 47));
        const currentSec = Math.floor(elapsed);
        const totalSec = Math.ceil(totalDuration);
        const ayahLabel = activeAyahData ? ` • الآية ${toArabicDigits(activeAyahData.ayahNum)}` : '';
        updateProgressUI({
          status: `جاري تسجيل الفيديو إطاراً بإطار${ayahLabel}...`,
          percent: percent,
          timeText: `${formatTime(currentSec)} / ${formatTime(totalSec)}`
        });
      }

      // Check Completion
      if (elapsed >= totalDuration) {
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
      showToast('🎉 تم توليد الفيديو بنجاح بدقة عالية! جاهز للمشاركة والتحميل');
    }
  }

  // --- 14. Download & Native Share ---
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
      // Fallback to Download
      downloadGeneratedVideo();
    }
  }

  // --- 15. UI Helpers & Abort Handling ---
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

  // --- 16. Public Integration API ---
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
