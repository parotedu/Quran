// Quran Stream Platform - Player & Mushaf Controller
document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const audio = document.getElementById('main-audio');
  const playlistContainer = document.getElementById('playlist-container');
  const playlistSection = document.getElementById('playlist-section');
  const contentSection = document.getElementById('content-section');
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const allCount = document.getElementById('all-count');
  const favCount = document.getElementById('fav-count');
  
  // Filter Tabs
  const tabAll = document.getElementById('tab-all');
  const tabFavorites = document.getElementById('tab-favorites');
  
  // Header Elements
  const reciterSelect = document.getElementById('reciter-select');
  const appSubtitle = document.getElementById('app-subtitle');
  const brandLogo = document.getElementById('brand-logo');
  
  // Navigation Tabs (Desktop & Mobile Glass Navigator)
  const navBtnPlayer = document.getElementById('nav-btn-player');
  const navBtnMushaf = document.getElementById('nav-btn-mushaf');
  const navBtnSpiritual = document.getElementById('nav-btn-spiritual');
  const navBtnPlaylist = document.getElementById('nav-btn-playlist');
  const mNavPlayer = document.getElementById('m-nav-player');
  const mNavMushaf = document.getElementById('m-nav-mushaf');
  const mNavSpiritual = document.getElementById('m-nav-spiritual');
  const mNavMemorial = document.getElementById('m-nav-memorial');
  const mNavPlaylist = document.getElementById('m-nav-playlist');
  const spiritualView = document.getElementById('spiritual-view');

  // Memorial Elements (hydrated lazily with secondary DOM)
  const navBtnMemorial = document.getElementById('nav-btn-memorial');
  const btnHeaderMemorial = document.getElementById('btn-header-memorial');
  const memorialView = document.getElementById('memorial-view');
  let spTabMemorial, memorialGenderBadge, memorialDeceasedName, memorialDedicatedNote,
    btnOpenMemorialCreator, btnCopyMemorialLink, btnWhatsappMemorial, btnDownloadMemorialCard,
    memorialDhikrChips, memorialActiveDhikrText, memorialTapBtn, memorialRoundCount,
    memorialSoundBtn, memorialSoundIcon, memorialResetRoundBtn, memorialDuasGrid,
    memorialSurahsGrid, memorialCreatorModal, btnCloseMemorialModal, memorialInputName,
    memorialGenderBtnM, memorialGenderBtnF, memorialInputNote, memorialPreviewText,
    btnSubmitCreateMemorial, memorialSavedList;

  // V2 Elements (Segmented Search Mode, Player Corner Pills Stay Static; Modals Hydrate Lazily)
  const ayahSingleAudio = document.getElementById('ayah-single-audio');
  const searchTabSurahs = document.getElementById('search-tab-surahs');
  const searchTabAyahs = document.getElementById('search-tab-ayahs');
  const btnHeaderRadio = document.getElementById('btn-header-radio');
  const btnPlayerRadio = document.getElementById('btn-player-radio');
  const playerRadioLabel = document.getElementById('player-radio-label');
  const btnSleepAmbience = document.getElementById('btn-sleep-ambience');
  const sleepTimerBadge = document.getElementById('sleep-timer-badge');
  const btnAbLoop = document.getElementById('btn-ab-loop');
  const abLoopLabel = document.getElementById('ab-loop-label');
  const btnPlayerMemorize = document.getElementById('btn-player-memorize');
  let mushafBtnGotoBookmark, btnDockMemorize, btnToggleMemorizeMode, memorizeStatusDot,
    memorizeModeLabel, memorizeLiveAyahBadge, memorizeLiveAyahText, memorizeRepeatSelect,
    btnMemorizeBlur, btnMemorizeOpenStudio;

  // Player Panel Elements
  const playerView = document.getElementById('player-view');
  const playerSurahNumber = document.getElementById('player-surah-number');
  const playerSurahName = document.getElementById('player-surah-name');
  const playerSurahEnglish = document.getElementById('player-surah-english');
  const playerRevelation = document.getElementById('player-revelation');
  const playerVerses = document.getElementById('player-verses');
  const playerAudioSource = document.getElementById('player-audio-source');
  const playerSourceBadge = document.getElementById('player-source-badge');
  const artworkMandala = document.getElementById('artwork-mandala');
  const artworkGlow = document.getElementById('artwork-glow');
  const micIcon = document.getElementById('mic-icon');
  const waveVisualizer = document.getElementById('wave-visualizer');
  
  // Playback Control Elements
  const btnPlayPause = document.getElementById('btn-play-pause');
  const playIcon = document.getElementById('play-icon');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnSkipBack15 = document.getElementById('btn-skip-back-15');
  const btnSkipForward15 = document.getElementById('btn-skip-forward-15');
  const btnShuffle = document.getElementById('btn-shuffle');
  const btnRepeat = document.getElementById('btn-repeat');
  const seekSlider = document.getElementById('seek-slider');
  const currentTimeLabel = document.getElementById('current-time');
  const totalDurationLabel = document.getElementById('total-duration');
  
  // Speed, Volume, Actions
  const speedSelect = document.getElementById('speed-select');
  const volumeSlider = document.getElementById('volume-slider');
  const volumeVal = document.getElementById('volume-val');
  const btnMute = document.getElementById('btn-mute');
  const volumeIcon = document.getElementById('volume-icon');
  const btnPlayerFav = document.getElementById('btn-player-fav');
  const playerFavIcon = document.getElementById('player-fav-icon');
  const btnReadInMushaf = document.getElementById('btn-read-in-mushaf');
  const btnShare = document.getElementById('btn-share');
  const btnDownload = document.getElementById('btn-download');

  // Mushaf Reader Panel Elements (container in DOM; inner controls hydrated lazily)
  const mushafView = document.getElementById('mushaf-view');
  let mushafSurahBadge, mushafSurahTitle, mushafRevelationBadge, mushafSurahMeta,
    mushafSurahSelect, mushafZoomIn, mushafZoomOut, mushafZoomReset,
    mushafFontSizeLabel, mushafBtnPlayAudio, mushafPlayIcon, mushafScrollArea,
    mushafBasmala, mushafContent;

  // Mini-Player Elements
  const miniPlayer = document.getElementById('mini-player');
  const miniProgressFill = document.getElementById('mini-progress-fill');
  const miniPlayerInfo = document.getElementById('mini-player-info');
  const miniIcon = document.getElementById('mini-icon');
  const miniSurahName = document.getElementById('mini-surah-name');
  const miniReciterName = document.getElementById('mini-reciter-name');
  const miniTimeDisplay = document.getElementById('mini-time-display');
  const miniCurrentTime = document.getElementById('mini-current-time');
  const miniTotalDuration = document.getElementById('mini-total-duration');
  const miniSeekSlider = document.getElementById('mini-seek-slider');
  const miniBtnPrev = document.getElementById('mini-btn-prev');
  const miniBtnPlayPause = document.getElementById('mini-btn-play-pause');
  const miniPlayIcon = document.getElementById('mini-play-icon');
  const miniBtnNext = document.getElementById('mini-btn-next');
  const miniBtnExpand = document.getElementById('mini-btn-expand');

  // Mobile Single Pill stays in playerView; secondary modals hydrate lazily
  const btnOpenPlayerTools = document.getElementById('btn-open-player-tools');
  let playerToolsModal, btnClosePlayerTools, mToolMemorize, mToolAbLoop, mToolAbLabel,
    mToolSleep, mToolRadio, mToolFav, mToolFavIcon, mToolShare, mToolDownload,
    mMushafBadge, mMushafTitle, mMushafRevelation, mMushafMeta, mMushafBtnPlay, mMushafPlayIcon,
    btnOpenMushafOptions, mushafOptionsModal, btnCloseMushafOptions, mOptionsSurahSelect,
    mOptionsBtnJumpBookmark, mOptionsBookmarkText, mOptionsFontLabel, mOptionsZoomOut,
    mOptionsZoomReset, mOptionsZoomIn, mOptionsToggleMemorize, mOptionsRepeatSelect,
    mOptionsBtnBlur, mOptionsBtnStudio, mMemorialName, btnOpenMemorialOptions,
    memorialOptionsModal, btnCloseMemorialOptions, mOptBtnEditMemorial, mOptBtnCopyLink,
    mOptBtnWhatsapp, mOptBtnDownloadCard, mOptBtnToggleSound, mOptSoundIcon,
    mOptSoundText, mOptBtnResetRound;

  // --- State Variables ---
  let currentSurahList = [...SURAHS];
  let currentIndex = 0;
  let isPlaying = false;
  let currentTab = 'all'; // 'all', 'favorites'
  let searchQuery = '';
  let searchMode = 'surahs'; // 'surahs' | 'ayahs'
  let ayahSearchTimer = null;
  function safeJsonParse(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed !== null && parsed !== undefined ? parsed : fallback;
    } catch (e) {
      return fallback;
    }
  }

  let favorites = safeJsonParse('quran_favorites', []);
  let currentReciterId = localStorage.getItem('quran_reciter') || 'hussary';
  let currentView = 'player'; // 'player', 'mushaf', 'spiritual', 'playlist'
  
  // Playback mode: 'repeat-all' (default), 'repeat-one', 'none'
  let repeatMode = localStorage.getItem('quran_repeat_mode') || 'repeat-all';
  let isShuffle = localStorage.getItem('quran_shuffle_mode') === 'true';

  // Mushaf Cache, Zoom, and Bookmark state
  let mushafCache = {};
  let tafsirCache = {};
  let currentMushafSurahId = 1;
  let mushafFontSize = parseInt(localStorage.getItem('quran_mushaf_font_size')) || 100;
  let khatmaBookmark = safeJsonParse('quran_khatma_bookmark', null);
  let listenedSurahs = safeJsonParse('quran_listened_surahs', []);
  let listeningSeconds = parseInt(localStorage.getItem('quran_listening_seconds')) || 0;

  // V2 Audio & Studio State
  let isRadioMode = false;
  let activeRadioStation = null;
  let radioCandidateIndex = 0;
  let activeMiniEngine = 'main'; // 'main' | 'hadr'
  const OFFLINE_AUDIO_CACHE = 'quran-offline-audio';
  let activeOfflineObjectUrl = null;
  const offlineAudioIndex = new Set();
  let isDownloadingSurah = false;
  let currentSurahCandidates = [];
  let currentSurahCandidateIndex = 0;
  let currentAudioLoadToken = 0;
  let audioStallTimer = null;
  let pendingResumeTime = 0;
  let abLoopState = 'off'; // 'off' | 'A' | 'AB'
  let abLoopA = 0;
  let abLoopB = 0;
  let sleepTimerMode = null; // null | 'end' | number (minutes)
  let sleepRemainingSec = 0;
  let sleepIntervalId = null;

  // Smart Memorization & Live Reciter Ayah Hover State
  let isMemorizationMode = localStorage.getItem('quran_memorize_mode') === 'true';
  let isMemorizeBlur = false;
  let memorizeRepeatTarget = 1; // 1 | 2 | 3 | 5 | 99 (infinite)
  let currentAyahRepeatCount = 1;
  let activeHoverAyahNum = null;
  let surahTimestampsCache = {};

  // Web Audio API Nature Ambience State
  let audioCtx = null;
  let ambienceMode = 'none'; // 'none' | 'rain' | 'breeze' | 'night'
  let ambienceGainNode = null;
  let ambienceSourceNodes = [];
  let ambienceVolume = 0.25;

  // Memorial & Gifting State (صدقة جارية V2.5)
  let currentMemorial = {
    name: "مَنْ تُحِبّونَ (فقيدكم الغالي)",
    gender: "m",
    isGeneric: true,
    note: "اللهم اغفر لموتانا وموتى المسلمين واجعل قبورهم روضات من رياض الجنة وأسكنهم الفردوس الأعلى"
  };
  let memorialRoundCounter = 0;
  let isTasbeehSoundEnabled = localStorage.getItem('quran_tasbeeh_sound') !== 'false';
  let savedMemorials = safeJsonParse('quran_saved_memorials', []);

  // V3.0 Golden Edition State Variables (Declared before init() to avoid TDZ)
  let mushafInlineTafsirEdition = localStorage.getItem('quran_inline_tafsir') || 'none';
  let mushafHifzMode = 'off';
  let hifzRevealedCount = 0;
  const surahTafsirCache = {};
  // Hadr Revision Shared Stubs (Full engine mounted lazily in secondary-logic.js)
  let currentHadrReciterId = 'ahmed_deiban';
  let currentHadrSurahId = 1;
  let hadrPlaybackSpeed = 1.0;
  let secApi = {};

  // V4.0 Fast Startup, Playlist Delegation, Reciter Modal & Slow-Motion BG State
  let reciterModalFilter = 'all';
  let playlistDelegated = false;
  let playlistRafId = null;
  let secondaryReady = false;
  let secondaryLoadPromise = null;
  const secondaryQueue = [];
  let quranFontsRequested = false;
  let extraIconsRequested = false;
  const AMBIENT_BG_SCENES = {
    off:   { id: 'off',   label: 'خلفية هادئة', shortLabel: 'خلفية هادئة', src: null, sound: 'none' },
    sea:   { id: 'sea',   label: 'أمواج البحر الهادئة', shortLabel: 'بحر • بطيء', src: 'assets/videos/sea_waves.webm', sound: 'sea' },
    trees: { id: 'trees', label: 'أشجار والنسيم الأخضر', shortLabel: 'أشجار • بطيء', src: 'assets/videos/trees_calm.webm', sound: 'trees' },
    rain:  { id: 'rain',  label: 'غيث المطر الليلي', shortLabel: 'مطر • بطيء', src: 'assets/videos/rain_calm.webm', sound: 'rain' },
    sky:   { id: 'sky',   label: 'سماء الليل والغيوم', shortLabel: 'سماء • بطيء', src: 'assets/videos/sky_clouds.webm', sound: 'night' }
  };
  let activeBgSceneId = 'off';
  let activeBgDeck = 'a';
  let bgSpeed = parseFloat(localStorage.getItem('quran_bg_speed') || '0.55') || 0.55;
  let bgAudioEnabled = localStorage.getItem('quran_bg_audio_enabled') !== 'false';
  let bgAudioVol = parseInt(localStorage.getItem('quran_bg_audio_vol') || '10', 10) || 10;
  let bgHandoffDone = false;
  let bgSceneToken = 0;

  // V4.1 Tablet / iPad Cinema Immersion & Spatial Haram Surround Audio State
  let tabletImmersionActive = false;
  let tabletRestoreTimer = null;
  let spatialEnabled = false; // Strictly OFF by default as requested
  let spatialProfile = localStorage.getItem('quran_spatial_profile') || 'haram';
  let spatialWetLevel = parseInt(localStorage.getItem('quran_spatial_wet') || '56', 10) || 56;
  const spatialSourceMap = new WeakMap();
  const spatialCorsCache = new Map();
  let spatialGraphReady = false;
  let spatialInputBus = null;
  let spatialDryGain = null;
  let spatialWetGain = null;
  let spatialHaloGain = null;
  let spatialConvolver = null;
  let spatialMasterLimiter = null;
  const CORS_SAFE_AUDIO_HOSTS = [
    'cdn.mp3quran.net',
    'server11.mp3quran.net',
    'download.quranicaudio.com',
    'media.way2quran.com',
    'everyayah.com',
    'archive.org',
    'qurango.net'
  ];

  // --- Initial Setup ---
  init();

  function cacheSecondaryDomRefs() {
    spTabMemorial = document.getElementById('sp-tab-memorial');
    memorialGenderBadge = document.getElementById('memorial-gender-badge');
    memorialDeceasedName = document.getElementById('memorial-deceased-name');
    memorialDedicatedNote = document.getElementById('memorial-dedicated-note');
    btnOpenMemorialCreator = document.getElementById('btn-open-memorial-creator');
    btnCopyMemorialLink = document.getElementById('btn-copy-memorial-link');
    btnWhatsappMemorial = document.getElementById('btn-whatsapp-memorial');
    btnDownloadMemorialCard = document.getElementById('btn-download-memorial-card');
    memorialDhikrChips = document.getElementById('memorial-dhikr-chips');
    memorialActiveDhikrText = document.getElementById('memorial-active-dhikr-text');
    memorialTapBtn = document.getElementById('memorial-tap-btn');
    memorialRoundCount = document.getElementById('memorial-round-count');
    memorialSoundBtn = document.getElementById('memorial-sound-btn');
    memorialSoundIcon = document.getElementById('memorial-sound-icon');
    memorialResetRoundBtn = document.getElementById('memorial-reset-round-btn');
    memorialDuasGrid = document.getElementById('memorial-duas-grid');
    memorialSurahsGrid = document.getElementById('memorial-surahs-grid');
    memorialCreatorModal = document.getElementById('memorial-creator-modal');
    btnCloseMemorialModal = document.getElementById('btn-close-memorial-modal');
    memorialInputName = document.getElementById('memorial-input-name');
    memorialGenderBtnM = document.getElementById('memorial-gender-btn-m');
    memorialGenderBtnF = document.getElementById('memorial-gender-btn-f');
    memorialInputNote = document.getElementById('memorial-input-note');
    memorialPreviewText = document.getElementById('memorial-preview-text');
    btnSubmitCreateMemorial = document.getElementById('btn-submit-create-memorial');
    memorialSavedList = document.getElementById('memorial-saved-list');

    mushafBtnGotoBookmark = document.getElementById('mushaf-btn-goto-bookmark');
    btnDockMemorize = document.getElementById('btn-dock-memorize');
    btnToggleMemorizeMode = document.getElementById('btn-toggle-memorize-mode');
    memorizeStatusDot = document.getElementById('memorize-status-dot');
    memorizeModeLabel = document.getElementById('memorize-mode-label');
    memorizeLiveAyahBadge = document.getElementById('memorize-live-ayah-badge');
    memorizeLiveAyahText = document.getElementById('memorize-live-ayah-text');
    memorizeRepeatSelect = document.getElementById('memorize-repeat-select');
    btnMemorizeBlur = document.getElementById('btn-memorize-blur');
    btnMemorizeOpenStudio = document.getElementById('btn-memorize-open-studio');

    mushafSurahBadge = document.getElementById('mushaf-surah-badge');
    mushafSurahTitle = document.getElementById('mushaf-surah-title');
    mushafRevelationBadge = document.getElementById('mushaf-revelation-badge');
    mushafSurahMeta = document.getElementById('mushaf-surah-meta');
    mushafSurahSelect = document.getElementById('mushaf-surah-select');
    mushafZoomIn = document.getElementById('mushaf-zoom-in');
    mushafZoomOut = document.getElementById('mushaf-zoom-out');
    mushafZoomReset = document.getElementById('mushaf-zoom-reset');
    mushafFontSizeLabel = document.getElementById('mushaf-font-size-label');
    mushafBtnPlayAudio = document.getElementById('mushaf-btn-play-audio');
    mushafPlayIcon = document.getElementById('mushaf-play-icon');
    mushafScrollArea = document.getElementById('mushaf-scroll-area');
    mushafBasmala = document.getElementById('mushaf-basmala');
    mushafContent = document.getElementById('mushaf-content');

    playerToolsModal = document.getElementById('player-tools-modal');
    btnClosePlayerTools = document.getElementById('btn-close-player-tools');
    mToolMemorize = document.getElementById('m-tool-memorize');
    mToolAbLoop = document.getElementById('m-tool-ab-loop');
    mToolAbLabel = document.getElementById('m-tool-ab-label');
    mToolSleep = document.getElementById('m-tool-sleep');
    mToolRadio = document.getElementById('m-tool-radio');
    mToolFav = document.getElementById('m-tool-fav');
    mToolFavIcon = document.getElementById('m-tool-fav-icon');
    mToolShare = document.getElementById('m-tool-share');
    mToolDownload = document.getElementById('m-tool-download');

    mMushafBadge = document.getElementById('m-mushaf-badge');
    mMushafTitle = document.getElementById('m-mushaf-title');
    mMushafRevelation = document.getElementById('m-mushaf-revelation');
    mMushafMeta = document.getElementById('m-mushaf-meta');
    mMushafBtnPlay = document.getElementById('m-mushaf-btn-play');
    mMushafPlayIcon = document.getElementById('m-mushaf-play-icon');
    btnOpenMushafOptions = document.getElementById('btn-open-mushaf-options');
    mushafOptionsModal = document.getElementById('mushaf-options-modal');
    btnCloseMushafOptions = document.getElementById('btn-close-mushaf-options');
    mOptionsSurahSelect = document.getElementById('m-options-surah-select');
    mOptionsBtnJumpBookmark = document.getElementById('m-options-btn-jump-bookmark');
    mOptionsBookmarkText = document.getElementById('m-options-bookmark-text');
    mOptionsFontLabel = document.getElementById('m-options-font-label');
    mOptionsZoomOut = document.getElementById('m-options-zoom-out');
    mOptionsZoomReset = document.getElementById('m-options-zoom-reset');
    mOptionsZoomIn = document.getElementById('m-options-zoom-in');
    mOptionsToggleMemorize = document.getElementById('m-options-toggle-memorize');
    mOptionsRepeatSelect = document.getElementById('m-options-repeat-select');
    mOptionsBtnBlur = document.getElementById('m-options-btn-blur');
    mOptionsBtnStudio = document.getElementById('m-options-btn-studio');

    mMemorialName = document.getElementById('m-memorial-name');
    btnOpenMemorialOptions = document.getElementById('btn-open-memorial-options');
    memorialOptionsModal = document.getElementById('memorial-options-modal');
    btnCloseMemorialOptions = document.getElementById('btn-close-memorial-options');
    mOptBtnEditMemorial = document.getElementById('m-opt-btn-edit-memorial');
    mOptBtnCopyLink = document.getElementById('m-opt-btn-copy-link');
    mOptBtnWhatsapp = document.getElementById('m-opt-btn-whatsapp');
    mOptBtnDownloadCard = document.getElementById('m-opt-btn-download-card');
    mOptBtnToggleSound = document.getElementById('m-opt-btn-toggle-sound');
    mOptSoundIcon = document.getElementById('m-opt-sound-icon');
    mOptSoundText = document.getElementById('m-opt-sound-text');
    mOptBtnResetRound = document.getElementById('m-opt-btn-reset-round');
  }

  function hydrateSecondaryOnce() {
    if (secondaryReady) return;
    if (typeof window.__hydrateSecondaryDom === 'function') {
      window.__hydrateSecondaryDom();
    }
    cacheSecondaryDomRefs();
    if (typeof window.__mountSecondaryLogic === 'function') {
      secApi = window.__mountSecondaryLogic(__secBridge) || {};
    }
    populateMushafSurahSelect();
    applyMushafFontSize();
    initReciterPickerModal();
    attachSecondaryListeners();
    initV2Features();
    secondaryReady = true;
    while (secondaryQueue.length > 0) {
      const fn = secondaryQueue.shift();
      try { fn(); } catch (e) {}
    }
  }

  function ensureSecondaryLoaded(onReady) {
    if (secondaryReady) {
      if (onReady) onReady();
      return;
    }
    if (onReady) secondaryQueue.push(onReady);
    if (typeof window.__hydrateSecondaryDom === 'function') {
      hydrateSecondaryOnce();
      return;
    }
    ensureSecondaryIconsLoaded();
    ensureQuranFontsLoaded();
    if (!secondaryLoadPromise) {
      secondaryLoadPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'js/secondary.min.js?v=4.1';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }
    secondaryLoadPromise.then(() => {
      hydrateSecondaryOnce();
    }).catch(() => {
      secondaryLoadPromise = null;
      showToast('تعذر تحميل الأدوات الإضافية، يرجى التحقق من الاتصال.', 'error');
    });
  }

  function init() {
    // 1. Core Header & Reciters Dropdown (zero blocking on secondary DOM/data)
    populateRecitersDropdown();
    refreshOfflineAudioIndex();
    
    // 2. Setup Statistics
    updateStatistics();
    
    // 3. Fast Progressive Playlist Render (18 immediate cards + rAF tail)
    renderPlaylist();

    // 4. Update Playback Controls UI
    updatePlaybackControlsUI();

    // 5. Restore Volume
    const savedVolume = localStorage.getItem('quran_volume') || '85';
    audio.volume = savedVolume / 100;
    if (volumeSlider) {
      volumeSlider.value = savedVolume;
      volumeVal.innerText = `${savedVolume}%`;
      updateVolumeIcon(savedVolume);
    }

    // 6. Handle URL parameters (e.g. ?surah=18 or ?memorial=أم-السعد&gender=f)
    const urlParams = new URLSearchParams(window.location.search);
    const sharedSurahId = parseInt(urlParams.get('surah'));
    if (sharedSurahId && sharedSurahId >= 1 && sharedSurahId <= 114) {
      const idx = SURAHS.findIndex(s => s.id === sharedSurahId);
      if (idx !== -1) {
        currentIndex = idx;
        loadSurah(SURAHS[currentIndex], false);
        setTimeout(() => scrollToActiveCard(), 500);
      }
    } else {
      loadSurah(SURAHS[currentIndex], false);
    }

    // Check for Memorial query param or hash
    let sharedMemorialName = urlParams.get('memorial') || urlParams.get('pack');
    let sharedMemorialGender = urlParams.get('gender') || 'f';
    let sharedMemorialNote = urlParams.get('note') || '';

    if (!sharedMemorialName && window.location.hash) {
      const hashStr = decodeURIComponent(window.location.hash.replace(/^#\/?/, ''));
      const parts = hashStr.split('/');
      if (parts[0] === 'pack' || parts[0] === 'memorial') {
        if (parts[1]) sharedMemorialName = parts[1].replace(/-/g, ' ');
        if (parts[2]) sharedMemorialGender = parts[2].toLowerCase() === 'm' ? 'm' : 'f';
      }
    }

    if (sharedMemorialName) {
      const cleanName = decodeURIComponent(sharedMemorialName).replace(/-/g, ' ').trim();
      const cleanGender = sharedMemorialGender.toLowerCase() === 'm' ? 'm' : 'f';
      const cleanNote = sharedMemorialNote ? decodeURIComponent(sharedMemorialNote).trim() : '';
      currentMemorial = {
        name: cleanName,
        gender: cleanGender,
        isGeneric: false,
        note: cleanNote || (cleanGender === 'm' ? 'اللهم اغفر له وارحمه وأسكنه الفردوس الأعلى برفقة الصالحين' : 'اللهم اغفر لها وارحمها وأسكنها الفردوس الأعلى برفقة الصالحين')
      };
      if (!savedMemorials.some(m => m.name === currentMemorial.name && m.gender === currentMemorial.gender)) {
        savedMemorials.unshift(currentMemorial);
        try { localStorage.setItem('quran_saved_memorials', JSON.stringify(savedMemorials.slice(0, 10))); } catch (e) {}
      }
      ensureSecondaryLoaded(() => {
        openMemorialPage(currentMemorial.name, currentMemorial.gender, currentMemorial.note, false);
      });
    } else {
      const targetViewParam = urlParams.get('view');
      if (targetViewParam && ['player', 'mushaf', 'spiritual', 'memorial', 'video', 'playlist'].includes(targetViewParam)) {
        setTimeout(() => switchView(targetViewParam), 60);
      }
    }

    // 7. Attach Core Listeners
    attachEventListeners();

    // 8. Setup Media Session for Lock Screen & Background Playback
    setupMediaSessionHandlers();

    // 9. Initial View Responsive Configuration
    handleResize();
    window.addEventListener('resize', handleResize);

    // 10. Preload secondary views/modals, icons & warm active Surah metadata cleanly after window load
    window.addEventListener('load', () => {
      setTimeout(() => {
        ensureSecondaryLoaded();
        if (audio && audio.preload === 'none') {
          audio.preload = 'metadata';
        }
      }, 280);
    });
  }

  // --- Responsive View Switching Logic ---
  function handleResize() {
    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop) {
      playlistSection.classList.remove('hidden');
      if (currentView === 'playlist') {
        currentView = 'player';
      }
      switchView(currentView, false);
    } else {
      switchView(currentView, false);
    }
    if (activeBgSceneId !== 'off') {
      if (isTabletDevice()) {
        if (!tabletImmersionActive) enterTabletImmersion();
      } else if (tabletImmersionActive) {
        exitTabletImmersionWithTransition(false);
      }
    }
  }

  window.switchView = switchView;
  function switchView(targetView, shouldScroll = true) {
    window.switchView = switchView;
    currentView = targetView;
    if (targetView !== 'player' && targetView !== 'playlist') {
      ensureQuranFontsLoaded();
      ensureSecondaryIconsLoaded();
      if (targetView !== 'video' && !secondaryReady) {
        ensureSecondaryLoaded(() => switchView(targetView, shouldScroll));
        return;
      }
    }
    const isDesktop = window.innerWidth >= 1024;

    const tabInactive = 'nav-tab-btn px-2.5 xl:px-3 py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 text-[var(--text-secondary)] hover:text-amber-400 hover:bg-emerald-500/5';
    const tabActive = 'nav-tab-btn px-2.5 xl:px-3 py-1.5 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-all duration-200 bg-amber-500/20 text-amber-400 border border-amber-500/30';

    const navBtnVideo = document.getElementById('nav-btn-video');
    const videoStudioView = document.getElementById('video-studio-view');
    const hadrView = document.getElementById('hadr-view');
    const btnServicesMenu = document.getElementById('btn-services-menu');

    if (navBtnPlayer) navBtnPlayer.className = tabInactive;
    if (navBtnMushaf) navBtnMushaf.className = tabInactive;
    if (navBtnSpiritual) navBtnSpiritual.className = tabInactive;
    if (navBtnPlaylist) navBtnPlaylist.className = tabInactive + ' lg:hidden';

    if (btnServicesMenu) {
      const baseBtn = 'h-7 xs:h-8 sm:h-9 px-1.5 xs:px-2 sm:px-3 rounded-xl glass-panel flex items-center gap-1 sm:gap-1.5 text-xs font-bold transition-all duration-200';
      if (targetView === 'video') {
        btnServicesMenu.className = `${baseBtn} text-amber-300 border border-amber-500/50 bg-amber-500/20 shadow-md shadow-amber-500/10`;
      } else if (targetView === 'memorial') {
        btnServicesMenu.className = `${baseBtn} text-rose-300 border border-rose-500/50 bg-rose-500/20 shadow-md shadow-rose-500/10`;
      } else if (targetView === 'hadr') {
        btnServicesMenu.className = `${baseBtn} text-cyan-300 border border-cyan-500/50 bg-cyan-500/20 shadow-md shadow-cyan-500/10`;
      } else {
        btnServicesMenu.className = `${baseBtn} text-amber-300 hover:text-amber-200 border border-emerald-500/25 hover:border-amber-500/40 hover:scale-105 active:scale-95 shadow-sm`;
      }
    }

    playerView.classList.add('hidden');
    mushafView.classList.add('hidden');
    if (spiritualView) spiritualView.classList.add('hidden');
    if (memorialView) memorialView.classList.add('hidden');
    if (videoStudioView) videoStudioView.classList.add('hidden');
    if (hadrView) hadrView.classList.add('hidden');

    if (isDesktop) {
      if (targetView === 'video' || targetView === 'hadr') {
        playlistSection.classList.add('hidden');
      } else {
        playlistSection.classList.remove('hidden');
      }
      if (contentSection) contentSection.classList.remove('hidden');
    } else {
      if (targetView === 'playlist') {
        if (contentSection) contentSection.classList.add('hidden');
        playlistSection.classList.remove('hidden');
      } else {
        if (contentSection) contentSection.classList.remove('hidden');
        playlistSection.classList.add('hidden');
      }
    }

    // Mini Player stays hidden in full-screen 'player' or 'hadr' (which has its dedicated dock)
    const canShowMini = syncMiniPlayerVisibility(targetView);

    if (targetView === 'mushaf') {
      if (navBtnMushaf) navBtnMushaf.className = tabActive;
      mushafView.classList.remove('hidden');
      if (canShowMini) syncMiniPlayerVisibility(targetView);
      loadSurahMushaf(SURAHS[currentIndex].id);
      if (isMemorizationMode) {
        loadSurahTimestamps(SURAHS[currentIndex].id);
        setTimeout(() => updateLiveMushafAyahHover(), 120);
      }
    } else if (targetView === 'spiritual') {
      if (navBtnSpiritual) navBtnSpiritual.className = tabActive;
      if (spiritualView) spiritualView.classList.remove('hidden');
      if (window.ensurePrayerHubLoaded) window.ensurePrayerHubLoaded();
      updateKhatmaDashboard();
      // Auto-collapse khatma card on mobile when in Sebha panel to focus 100% on Sebha
      const khatmaCard = document.getElementById('khatma-dashboard-card');
      const sebhaPanel = document.getElementById('sp-panel-sebha');
      if (khatmaCard && sebhaPanel && !sebhaPanel.classList.contains('hidden') && window.innerWidth < 1024) {
        khatmaCard.classList.add('hidden');
      }
    } else if (targetView === 'memorial') {
      if (memorialView) memorialView.classList.remove('hidden');
      updateMemorialViewUI();
    } else if (targetView === 'video') {
      if (videoStudioView) videoStudioView.classList.remove('hidden');
      ensureVideoStudioLoaded(() => {
        if (window.initVideoStudioView) window.initVideoStudioView();
      });
    } else if (targetView === 'hadr') {
      if (hadrView) hadrView.classList.remove('hidden');
      initHadrView();
    } else if (targetView === 'playlist' && !isDesktop) {
      if (navBtnPlaylist) navBtnPlaylist.className = tabActive + ' lg:hidden';
    } else {
      if (navBtnPlayer) navBtnPlayer.className = tabActive;
      playerView.classList.remove('hidden');
    }

    // Update Mobile Glass Navigator Tabs
    const mTabs = [
      { id: 'player', el: mNavPlayer },
      { id: 'mushaf', el: mNavMushaf },
      { id: 'spiritual', el: mNavSpiritual },
      { id: 'memorial', el: mNavMemorial },
      { id: 'playlist', el: mNavPlaylist }
    ];
    mTabs.forEach(tab => {
      if (!tab.el) return;
      if (tab.id === targetView) {
        tab.el.classList.add('active');
        tab.el.classList.remove('text-[var(--text-secondary)]');
        tab.el.classList.add('text-amber-400');
      } else {
        tab.el.classList.remove('active');
        tab.el.classList.remove('text-amber-400');
        tab.el.classList.add('text-[var(--text-secondary)]');
      }
    });

    if (!isDesktop && shouldScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // --- Populate Reciter Selector ---
  function populateRecitersDropdown() {
    if (!reciterSelect) return;
    reciterSelect.innerHTML = '';
    
    RECITERS.forEach(reciter => {
      const option = document.createElement('option');
      option.value = reciter.id;
      option.innerText = reciter.name;
      option.className = 'bg-emerald-950 text-white py-1.5';
      if (reciter.id === currentReciterId) {
        option.selected = true;
      }
      reciterSelect.appendChild(option);
    });

    updateHeaderSubtitle();
  }

  function populateMushafSurahSelect() {
    [mushafSurahSelect, mOptionsSurahSelect].forEach(sel => {
      if (!sel) return;
      sel.innerHTML = '';
      SURAHS.forEach(surah => {
        const opt = document.createElement('option');
        opt.value = surah.id;
        opt.innerText = `${surah.id}. سورة ${surah.name}`;
        opt.className = 'bg-emerald-950 text-white';
        sel.appendChild(opt);
      });
    });
  }

  function updateHeaderSubtitle() {
    const reciter = RECITERS.find(r => r.id === currentReciterId) || RECITERS[0];
    if (appSubtitle) {
      appSubtitle.innerText = `المصحف المرتل - ${reciter.name}`;
    }
    const headerReciterName = document.getElementById('header-reciter-name');
    if (headerReciterName && reciter) {
      headerReciterName.innerText = reciter.name;
    }
  }

  // --- Shared Mini-Player Unification (Main + Hadr) ---
  function getActiveHadrAudio() {
    return document.getElementById('hadr-audio');
  }

  function syncHadrToMiniPlayer() {
    if (!miniPlayer) return;
    const hadrAudioEl = getActiveHadrAudio();
    const surah = (typeof SURAHS !== 'undefined' && SURAHS.find(s => s.id === currentHadrSurahId)) || SURAHS[0];
    const hReciters = typeof HADR_RECITERS !== 'undefined' ? HADR_RECITERS : [];
    const hReciter = hReciters.find(r => r.id === currentHadrReciterId) || hReciters[0];

    if (miniSurahName && surah) miniSurahName.innerText = `حدر • سورة ${surah.name}`;
    if (miniReciterName && hReciter) miniReciterName.innerText = hReciter.name;

    const hadrIsPlaying = hadrAudioEl && !hadrAudioEl.paused;
    if (miniPlayIcon) {
      miniPlayIcon.className = hadrIsPlaying
        ? 'fa-solid fa-pause text-sm sm:text-base text-slate-900'
        : 'fa-solid fa-play text-sm sm:text-base mr-0.5 text-slate-900';
    }
    if (miniIcon) {
      miniIcon.className = hadrIsPlaying
        ? 'fa-solid fa-bolt text-xs text-amber-400 animate-pulse'
        : 'fa-solid fa-bolt text-xs text-amber-400';
    }

    if (hadrAudioEl && isFinite(hadrAudioEl.duration) && hadrAudioEl.duration > 0) {
      const dur = Math.floor(hadrAudioEl.duration);
      const cur = Math.floor(hadrAudioEl.currentTime || 0);
      const pct = Math.min(100, Math.max(0, (hadrAudioEl.currentTime / hadrAudioEl.duration) * 100));
      if (miniSeekSlider && !miniSeekSlider.classList.contains('user-dragging')) {
        miniSeekSlider.max = dur;
        miniSeekSlider.disabled = false;
        miniSeekSlider.value = cur;
      }
      if (miniCurrentTime) miniCurrentTime.innerText = formatTime(cur);
      if (miniTotalDuration) miniTotalDuration.innerText = formatTime(dur);
      if (miniTimeDisplay) miniTimeDisplay.innerText = `${formatTime(cur)} / ${formatTime(dur)}`;
      if (miniProgressFill) miniProgressFill.style.width = `${pct}%`;
    }
    syncTabletImmersionPlayState();
  }

  function syncMiniPlayerVisibility(targetView = currentView) {
    if (!miniPlayer) return false;
    const hadrAudioEl = getActiveHadrAudio();
    const hadrHasActivity = activeMiniEngine === 'hadr' && hadrAudioEl && (
      !hadrAudioEl.paused || (hadrAudioEl.currentTime > 0 && !!hadrAudioEl.getAttribute('src'))
    );
    const mainHasActivity = activeMiniEngine === 'main' && (
      isPlaying || (audio.currentTime > 0 && !audio.paused) || isRadioMode
    );
    // Never cover full-screen player or Hadr's own bottom player dock
    const shouldShow = (mainHasActivity || hadrHasActivity) && targetView !== 'player' && targetView !== 'hadr';

    document.body.classList.toggle('mini-player-active', shouldShow);
    miniPlayer.classList.toggle('hidden', !shouldShow);
    if (shouldShow && activeMiniEngine === 'hadr') {
      syncHadrToMiniPlayer();
    }
    return shouldShow;
  }

  // --- Searchable Reciter Picker Modal ---
  function getReciterMeta(reciter) {
    const hasPartial = Array.isArray(reciter.availableSurahs) && reciter.availableSurahs.length < 114;
    const isRiwaya = /ورش|قالون|شعبة|مجود|الدوري|البزي/.test(reciter.name || '');
    return { hasPartial, isRiwaya };
  }

  function renderReciterModalGrid(queryText = '') {
    const grid = document.getElementById('reciter-modal-grid');
    const countEl = document.getElementById('reciter-modal-count');
    if (!grid) return;

    const normQ = normalizeArabic(queryText);
    const qLower = (queryText || '').trim().toLowerCase();

    const filtered = RECITERS.filter(r => {
      const meta = getReciterMeta(r);
      if (reciterModalFilter === 'full' && meta.hasPartial) return false;
      if (reciterModalFilter === 'selection' && !meta.hasPartial) return false;
      if (reciterModalFilter === 'riwayat' && !meta.isRiwaya) return false;
      if (!normQ && !qLower) return true;
      const hayAr = normalizeArabic(`${r.name} ${r.shortName}`);
      const hayEn = `${r.slug || ''} ${r.id || ''}`.toLowerCase();
      return hayAr.includes(normQ) || hayEn.includes(qLower);
    });

    if (countEl) {
      countEl.innerText = `${filtered.length} من ${RECITERS.length}`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="col-span-full py-8 text-center text-xs sm:text-sm text-[var(--text-secondary)]">لم يتم العثور على قارئ مطابق للبحث. جرّب كتابة اسم آخر أو اختر "الكل".</div>`;
      return;
    }

    grid.innerHTML = filtered.map(r => {
      const meta = getReciterMeta(r);
      const isActive = r.id === currentReciterId;
      const countBadge = meta.hasPartial ? `${r.availableSurahs.length} سورة` : 'المصحف الكامل 114';
      const riwayaBadge = meta.isRiwaya ? `<span class="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 font-bold">رواية / مجود</span>` : '';
      return `
        <button type="button" data-reciter-id="${r.id}"
          class="reciter-modal-card ${isActive ? 'active' : ''} w-full p-2.5 sm:p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/20 text-right flex items-center justify-between gap-2.5 cursor-pointer">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-9 h-9 rounded-xl ${isActive ? 'bg-amber-500 text-slate-950' : 'bg-amber-500/15 text-amber-400 border border-amber-500/25'} flex items-center justify-center flex-shrink-0 text-sm">
              <i class="fa-solid ${isActive ? 'fa-volume-high' : 'fa-microphone-lines'}"></i>
            </div>
            <div class="min-w-0">
              <div class="font-bold text-xs sm:text-sm ${isActive ? 'text-amber-300' : 'text-[var(--text-primary)]'} truncate">${r.name}</div>
              <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                <span class="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold">${countBadge}</span>
                ${riwayaBadge}
              </div>
            </div>
          </div>
          ${isActive ? '<i class="fa-solid fa-circle-check text-amber-400 text-base flex-shrink-0"></i>' : '<i class="fa-solid fa-chevron-left text-[10px] text-[var(--text-secondary)] flex-shrink-0"></i>'}
        </button>
      `;
    }).join('');
  }

  function initReciterPickerModal() {
    const modal = document.getElementById('reciter-modal');
    const openBtn = document.getElementById('btn-open-reciter-modal');
    const closeBtn = document.getElementById('btn-close-reciter-modal');
    const searchInput = document.getElementById('reciter-search-input');
    const clearBtn = document.getElementById('btn-clear-reciter-search');
    const grid = document.getElementById('reciter-modal-grid');
    if (!modal || !openBtn) return;

    const filterPills = modal.querySelectorAll('.reciter-filter-pill');
    const closeModal = () => modal.classList.add('hidden');
    const openModal = () => {
      renderReciterModalGrid(searchInput ? searchInput.value : '');
      modal.classList.remove('hidden');
      if (searchInput) setTimeout(() => searchInput.focus(), 50);
    };

    openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        if (clearBtn) clearBtn.classList.toggle('hidden', !searchInput.value.trim());
        renderReciterModalGrid(searchInput.value);
      });
    }
    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.classList.add('hidden');
        renderReciterModalGrid('');
        searchInput.focus();
      });
    }

    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        reciterModalFilter = pill.getAttribute('data-reciter-filter') || 'all';
        filterPills.forEach(p => {
          const isMatch = p === pill;
          p.classList.toggle('active', isMatch);
          p.className = isMatch
            ? 'reciter-filter-pill active px-3 py-1 rounded-xl text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 whitespace-nowrap transition-all'
            : 'reciter-filter-pill px-3 py-1 rounded-xl text-[11px] font-semibold bg-emerald-950/60 text-[var(--text-secondary)] border border-emerald-500/20 hover:text-amber-300 whitespace-nowrap transition-all';
        });
        renderReciterModalGrid(searchInput ? searchInput.value : '');
      });
    });

    if (grid) {
      grid.addEventListener('click', (e) => {
        const card = e.target.closest('[data-reciter-id]');
        if (!card) return;
        const chosenId = card.getAttribute('data-reciter-id');
        if (chosenId && reciterSelect) {
          reciterSelect.value = chosenId;
          reciterSelect.dispatchEvent(new Event('change'));
        }
        closeModal();
      });
    }
  }

  // --- Offline Audio Cache & Fastest Lowest-Data Downloader ---
  function revokeActiveOfflineObjectUrl() {
    if (activeOfflineObjectUrl) {
      try { URL.revokeObjectURL(activeOfflineObjectUrl); } catch (e) {}
      activeOfflineObjectUrl = null;
    }
  }

  function getOfflineCacheKey(reciterId, surahId) {
    return new URL(`./offline-audio/${encodeURIComponent(reciterId)}/${String(surahId).padStart(3, '0')}.mp3`, window.location.href).href;
  }

  async function refreshOfflineAudioIndex() {
    if (!('caches' in window)) return;
    try {
      const cache = await caches.open(OFFLINE_AUDIO_CACHE);
      const reqs = await cache.keys();
      offlineAudioIndex.clear();
      reqs.forEach(req => offlineAudioIndex.add(req.url));
      const activeReciter = RECITERS.find(r => r.id === currentReciterId) || RECITERS[0];
      if (SURAHS[currentIndex] && activeReciter) {
        updateDownloadButtonBadge(activeReciter.id, SURAHS[currentIndex].id);
      }
    } catch (e) {}
  }

  async function getCachedOfflineAudioBlob(reciterId, surahId) {
    if (!('caches' in window)) return null;
    try {
      const key = getOfflineCacheKey(reciterId, surahId);
      const cache = await caches.open(OFFLINE_AUDIO_CACHE);
      const resp = await cache.match(key);
      if (!resp) return null;
      const blob = await resp.blob();
      return blob && blob.size > 10240 ? blob : null;
    } catch (e) {
      return null;
    }
  }

  async function putOfflineAudioBlob(reciterId, surahId, blob) {
    if (!('caches' in window) || !blob || blob.size < 10240) return false;
    try {
      const key = getOfflineCacheKey(reciterId, surahId);
      const cache = await caches.open(OFFLINE_AUDIO_CACHE);
      await cache.put(key, new Response(blob, {
        status: 200,
        headers: {
          'Content-Type': 'audio/mpeg',
          'Content-Length': String(blob.size)
        }
      }));
      offlineAudioIndex.add(key);
      return true;
    } catch (e) {
      return false;
    }
  }

  function updateDownloadButtonBadge(reciterId, surahId) {
    if (!btnDownload || isDownloadingSurah) return;
    const isCached = offlineAudioIndex.has(getOfflineCacheKey(reciterId, surahId));
    btnDownload.innerHTML = isCached
      ? '<i class="fa-solid fa-check-double text-emerald-400"></i> <span>محمّلة</span>'
      : '<i class="fa-solid fa-circle-down"></i> <span>تحميل</span>';
    btnDownload.title = isCached
      ? 'متوفرة محلياً بدون إنترنت (انقر لحفظ نسخة MP3 على جهازك)'
      : 'تحميل سريع بأقل استهلاك للإنترنت + حفظ للاستماع بدون إنترنت';
  }

  function triggerBlobDownload(blob, filename) {
    const objUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = objUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => { try { URL.revokeObjectURL(objUrl); } catch (e) {} }, 15000);
  }

  async function probeBestAudioMirror(urls) {
    const probes = urls.map(async (url, idx) => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3500);
      try {
        const res = await fetch(url, { method: 'HEAD', mode: 'cors', signal: controller.signal });
        clearTimeout(timer);
        if (!res.ok) return null;
        const cl = parseInt(res.headers.get('content-length') || '0', 10);
        const acceptRanges = (res.headers.get('accept-ranges') || '').toLowerCase().includes('bytes');
        return { url, size: isFinite(cl) && cl > 10240 ? cl : 0, acceptRanges, idx };
      } catch (e) {
        clearTimeout(timer);
        return null;
      }
    });
    const results = (await Promise.all(probes)).filter(Boolean);
    if (results.length === 0) return { url: urls[0], size: 0, acceptRanges: false };
    const sized = results.filter(r => r.size > 0).sort((a, b) => a.size - b.size);
    return sized.length > 0 ? sized[0] : results[0];
  }

  async function fetchParallelRangesBlob(url, totalBytes, onProgress) {
    const chunkCount = totalBytes >= 1048576 ? 4 : 2;
    const chunkSize = Math.ceil(totalBytes / chunkCount);
    const loadedPerChunk = new Array(chunkCount).fill(0);
    const report = () => {
      const loaded = loadedPerChunk.reduce((a, b) => a + b, 0);
      onProgress(loaded, totalBytes);
    };

    const parts = await Promise.all(Array.from({ length: chunkCount }, async (_, i) => {
      const start = i * chunkSize;
      const end = Math.min(totalBytes - 1, (i + 1) * chunkSize - 1);
      const res = await fetch(url, { headers: { Range: `bytes=${start}-${end}` }, mode: 'cors' });
      if (res.status !== 206 && !(i === 0 && res.status === 200)) {
        throw new Error(`HTTP ${res.status}`);
      }
      if (res.body && res.body.getReader) {
        const reader = res.body.getReader();
        const subChunks = [];
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          if (value) {
            subChunks.push(value);
            loadedPerChunk[i] += value.byteLength;
            report();
          }
        }
        return new Blob(subChunks);
      }
      const buf = await res.arrayBuffer();
      loadedPerChunk[i] = buf.byteLength;
      report();
      return buf;
    }));
    return new Blob(parts, { type: 'audio/mpeg' });
  }

  async function downloadCurrentSurah() {
    if (isDownloadingSurah) {
      showToast('يوجد تحميل قيد التقدم حالياً، يرجى الانتظار قليلاً...', 'info');
      return;
    }
    const surah = SURAHS[currentIndex];
    const selectedReciter = RECITERS.find(r => r.id === currentReciterId) || RECITERS[0];
    const audioInfo = getSurahAudioUrl(selectedReciter, surah.id);
    const effReciter = audioInfo.isFallback ? audioInfo.fallbackReciter : selectedReciter;
    const padded = String(surah.id).padStart(3, '0');
    const filename = `${padded}_${surah.name}_${effReciter.shortName}.mp3`.replace(/\s+/g, '_');

    const cachedBlob = await getCachedOfflineAudioBlob(effReciter.id, surah.id);
    if (cachedBlob) {
      triggerBlobDownload(cachedBlob, filename);
      updateDownloadButtonBadge(effReciter.id, surah.id);
      showToast(`تم حفظ سورة ${surah.name} من الذاكرة المحلية بدون استهلاك إنترنت!`);
      return;
    }

    const mirrorUrls = audioInfo.candidates
      .filter(c => c.reciter && c.reciter.id === effReciter.id)
      .map(c => c.url);
    const urls = mirrorUrls.length > 0 ? mirrorUrls : [audioInfo.url];

    isDownloadingSurah = true;
    const setBtnProgress = (pctText) => {
      if (btnDownload) {
        btnDownload.innerHTML = `<i class="fa-solid fa-spinner animate-spin text-amber-400"></i> <span>${pctText}</span>`;
      }
    };
    setBtnProgress('تجهيز...');
    showToast(`جاري اختيار أصغر وأسرع مصدر لسورة ${surah.name}...`);

    try {
      const best = await probeBestAudioMirror(urls);
      const sizeMb = best.size > 0 ? ` (${(best.size / (1024 * 1024)).toFixed(1)} MB)` : '';
      let lastPct = -1;
      const onProgress = (loaded, total) => {
        if (total > 0) {
          const pct = Math.min(99, Math.round((loaded / total) * 100));
          if (pct !== lastPct) {
            lastPct = pct;
            setBtnProgress(`${pct}%`);
          }
        } else {
          setBtnProgress(`${(loaded / (1024 * 1024)).toFixed(1)}MB`);
        }
      };

      let blob = null;
      if (best.acceptRanges && best.size > 262144 && best.size <= 125829120) {
        try {
          blob = await fetchParallelRangesBlob(best.url, best.size, onProgress);
        } catch (rangeErr) {
          blob = null;
        }
      }

      if (!blob) {
        const res = await fetch(best.url, { mode: 'cors' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const total = parseInt(res.headers.get('content-length') || String(best.size || 0), 10);
        if (res.body && res.body.getReader) {
          const reader = res.body.getReader();
          const chunks = [];
          let received = 0;
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            if (value) {
              chunks.push(value);
              received += value.byteLength;
              onProgress(received, total);
            }
          }
          blob = new Blob(chunks, { type: 'audio/mpeg' });
        } else {
          blob = await res.blob();
        }
      }

      await putOfflineAudioBlob(effReciter.id, surah.id, blob);
      triggerBlobDownload(blob, filename);
      showToast(`اكتمل تحميل سورة ${surah.name}${sizeMb} وحُفظت للاستماع بدون إنترنت`);
    } catch (err) {
      const a = document.createElement('a');
      a.href = audioInfo.url;
      a.download = filename;
      a.target = '_blank';
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast(`جاري تحميل سورة ${surah.name} عبر المتصفح...`);
    } finally {
      isDownloadingSurah = false;
      updateDownloadButtonBadge(effReciter.id, surah.id);
    }
  }

  // --- Statistics ---
  function updateStatistics() {
    if (allCount) allCount.innerText = SURAHS.length;
    if (favCount) favCount.innerText = favorites.length;
  }

  // --- Normalizing Arabic for Smart Search ---
  function normalizeArabic(text) {
    if (!text) return '';
    return text
      .trim()
      .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '') // Remove diacritics & Quranic marks
      .replace(/[أإآٱ]/g, 'ا')                           // Normalise Alef variants
      .replace(/ة/g, 'ه')                              // Normalise Teh Marbuta
      .replace(/ى/g, 'ي')                              // Normalise Alef Maksura
      .replace(/ؤ/g, 'و')                              // Normalise Waw with hamza
      .replace(/ئ/g, 'ي')                              // Normalise Yeh with hamza
      .toLowerCase();
  }

  // --- Filter and Search Surahs ---
  function getFilteredSurahs() {
    let list = [...SURAHS];
    
    if (currentTab === 'favorites') {
      list = list.filter(s => favorites.includes(s.id));
    }
    
    if (searchQuery) {
      const queryNormal = normalizeArabic(searchQuery);
      list = list.filter(s => {
        const idMatch = s.id.toString() === searchQuery || s.id.toString().padStart(3, '0') === searchQuery;
        const nameNormal = normalizeArabic(s.name);
        const nameMatch = nameNormal.includes(queryNormal);
        const englishMatch = s.englishName.toLowerCase().includes(queryNormal);
        const revelationMatch = normalizeArabic(s.revelationPlace === 'makkah' ? 'مكية' : 'مدنية').includes(queryNormal);
        
        return idMatch || nameMatch || englishMatch || revelationMatch;
      });
    }
    
    return list;
  }

  // --- Render Playlist (Optimized Single-Pass HTML + Event Delegation) ---
  function ensurePlaylistDelegation() {
    if (playlistDelegated || !playlistContainer) return;
    playlistDelegated = true;
    playlistContainer.addEventListener('click', (e) => {
      const card = e.target.closest('.surah-card');
      if (!card) return;
      const sid = parseInt(card.getAttribute('data-id'), 10);
      if (!sid) return;
      const favBtn = e.target.closest('.btn-fav-toggle');
      if (favBtn) {
        e.stopPropagation();
        toggleFavorite(sid);
        return;
      }
      const readBtn = e.target.closest('.btn-card-read');
      const mainIndex = SURAHS.findIndex(s => s.id === sid);
      if (mainIndex === -1) return;
      if (readBtn) {
        e.stopPropagation();
        currentIndex = mainIndex;
        loadSurah(SURAHS[currentIndex], false);
        switchView('mushaf');
        return;
      }
      currentIndex = mainIndex;
      loadSurah(SURAHS[currentIndex], true);
      if (window.innerWidth < 1024 && currentView === 'playlist') {
        switchView('player');
      }
    });
  }

  function renderPlaylist() {
    ensurePlaylistDelegation();
    if (playlistRafId) {
      cancelAnimationFrame(playlistRafId);
      playlistRafId = null;
    }
    currentSurahList = getFilteredSurahs();
    const activeReciter = RECITERS.find(r => r.id === currentReciterId) || RECITERS[0];

    if (currentSurahList.length === 0) {
      playlistContainer.innerHTML = currentTab === 'favorites'
        ? `<div class="flex flex-col items-center justify-center py-16 text-center text-slate-400 glass-panel rounded-2xl p-6">
            <i class="fa-regular fa-heart text-4xl mb-3 text-slate-500"></i>
            <p class="text-sm font-semibold mb-1">قائمة المفضلة فارغة</p>
            <p class="text-xs text-slate-400">انقر فوق أيقونة القلب على أي سورة لحفظها هنا.</p>
          </div>`
        : `<div class="flex flex-col items-center justify-center py-16 text-center text-slate-400 glass-panel rounded-2xl p-6">
            <i class="fa-solid fa-magnifying-glass text-4xl mb-3 text-slate-500"></i>
            <p class="text-sm font-semibold mb-1">لا توجد نتائج مطابقة</p>
            <p class="text-xs text-slate-400">تأكد من كتابة الاسم أو رقم السورة بشكل صحيح.</p>
          </div>`;
      return;
    }

    const activeSurahId = SURAHS[currentIndex].id;
    const availSet = activeReciter.availableSurahs ? new Set(activeReciter.availableSurahs) : null;
    const favSet = new Set(favorites);

    const buildCardsHtml = (slice) => slice.map((surah) => {
      const isFav = favSet.has(surah.id);
      const isCurrent = activeSurahId === surah.id;
      const isAvailable = !availSet || availSet.has(surah.id);
      const revBadge = surah.revelationPlace === 'makkah'
        ? '<i class="fa-solid fa-kaaba text-[8px] text-amber-500"></i> مكية'
        : '<i class="fa-solid fa-mosque text-[8px] text-emerald-400"></i> مدنية';

      return `<div class="surah-card p-3 sm:p-3.5 rounded-2xl flex items-center justify-between cursor-pointer mb-2 ${isCurrent ? 'active' : ''}" data-id="${surah.id}">
        <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div class="surah-number-badge w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shadow-inner flex-shrink-0">${surah.id}</div>
          <div class="min-w-0">
            <div class="flex items-center gap-1.5">
              <h3 class="font-bold text-xs sm:text-sm text-[var(--text-primary)] font-quran truncate">${surah.name}</h3>
              <span class="text-[10px] text-[var(--text-secondary)] opacity-85 flex items-center gap-0.5 flex-shrink-0">${revBadge}</span>
              ${!isAvailable ? '<span class="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20" title="سورة غير مسجلة بصوت القارئ المختار - يتم تشغيل الحصري كبديل">بديل</span>' : ''}
              ${isCurrent && isPlaying ? '<div class="mini-eq mr-1"><span class="mini-eq-bar"></span><span class="mini-eq-bar"></span><span class="mini-eq-bar"></span></div>' : ''}
            </div>
            <p class="text-[10px] sm:text-[11px] text-[var(--text-secondary)] mt-0.5 truncate">${surah.englishName} • ${surah.versesCount} آية</p>
          </div>
        </div>
        <div class="flex items-center gap-1.5 flex-shrink-0">
          <button class="btn-card-read w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-amber-400 hover:bg-emerald-500/10 transition-colors" data-id="${surah.id}" title="قراءة السورة في المصحف">
            <i class="fa-solid fa-book-open text-xs"></i>
          </button>
          <button class="btn-fav-toggle w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors" data-id="${surah.id}" title="إضافة للمفضلة">
            <i class="${isFav ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart text-xs'}"></i>
          </button>
        </div>
      </div>`;
    }).join('');

    if (currentSurahList.length <= 24) {
      playlistContainer.innerHTML = buildCardsHtml(currentSurahList);
    } else {
      playlistContainer.innerHTML = buildCardsHtml(currentSurahList.slice(0, 18));
      const remaining = currentSurahList.slice(18);
      playlistRafId = requestAnimationFrame(() => {
        playlistRafId = null;
        if (!playlistContainer) return;
        playlistContainer.insertAdjacentHTML('beforeend', buildCardsHtml(remaining));
      });
    }
  }

  let videoStudioLoadPromise = null;
  function ensureVideoStudioLoaded(onReady) {
    if (typeof window.initVideoStudioView === 'function') {
      if (onReady) onReady();
      return;
    }
    if (!videoStudioLoadPromise) {
      videoStudioLoadPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'js/video-studio.min.js?v=4.1';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }
    videoStudioLoadPromise.then(() => {
      if (onReady) onReady();
    }).catch(() => {
      videoStudioLoadPromise = null;
      showToast('تعذر تحميل استوديو الفيديو، يرجى المحاولة مرة أخرى.', 'error');
    });
  }

  // --- Audio URL Resolver with Multi-CDN Fallback Chain ---
  function buildSurahAudioCandidates(reciter, surahId) {
    const paddedId = surahId.toString().padStart(3, '0');
    const hussary = RECITERS.find(r => r.id === 'hussary') || RECITERS[0];
    const candidates = [];
    const seen = new Set();

    const pushCandidate = (url, activeReciter, isReciterFallback) => {
      if (!url || seen.has(url)) return;
      seen.add(url);
      candidates.push({ url, reciter: activeReciter, isReciterFallback });
    };

    const hasSurah = !reciter.availableSurahs || reciter.availableSurahs.includes(surahId);

    if (hasSurah) {
      const mappedUrl = reciter.surahFiles && reciter.surahFiles[surahId];
      const tokenFile = (reciter.surahTokens && reciter.surahTokens[surahId - 1] && reciter.surahSuffix)
        ? encodeURIComponent(`${paddedId}  ${reciter.surahTokens[surahId - 1]}${reciter.surahSuffix}`)
        : null;

      if (tokenFile) {
        const primaryBase = reciter.serverUrl || '';
        pushCandidate(`${primaryBase}${tokenFile}`, reciter, false);
        if (reciter.fallbackServerUrl) {
          pushCandidate(`${reciter.fallbackServerUrl}${tokenFile}`, reciter, false);
        }
      } else if (mappedUrl) {
        pushCandidate(mappedUrl, reciter, false);
        if (reciter.fallbackServerUrl) {
          const filename = mappedUrl.split('/').pop();
          if (filename) pushCandidate(`${reciter.fallbackServerUrl}${filename}`, reciter, false);
        }
      } else {
        const primaryBase = reciter.serverUrl || `https://download.quranicaudio.com/quran/${reciter.slug}`;
        pushCandidate(`${primaryBase}${paddedId}.mp3`, reciter, false);
        if (reciter.fallbackServerUrl) {
          pushCandidate(`${reciter.fallbackServerUrl}${paddedId}.mp3`, reciter, false);
        }
      }
    }

    // Cross-reciter ultimate reliability chain (Hussary primary + Cloudflare CDN mirror)
    const isFallbackFromOriginal = !hasSurah || reciter.id !== hussary.id;
    pushCandidate(`${hussary.serverUrl}${paddedId}.mp3`, hussary, isFallbackFromOriginal);
    if (hussary.fallbackServerUrl) {
      pushCandidate(`${hussary.fallbackServerUrl}${paddedId}.mp3`, hussary, isFallbackFromOriginal);
    }

    return candidates;
  }

  function getSurahAudioUrl(reciter, surahId) {
    const candidates = buildSurahAudioCandidates(reciter, surahId);
    const first = candidates[0];
    return {
      url: first.url,
      isFallback: first.isReciterFallback,
      reciter: reciter,
      fallbackReciter: first.isReciterFallback ? first.reciter : null,
      candidates
    };
  }

  function clearAudioStallWatchdog() {
    if (audioStallTimer) {
      clearTimeout(audioStallTimer);
      audioStallTimer = null;
    }
  }

  function startAudioStallWatchdog(loadToken) {
    clearAudioStallWatchdog();
    const curSrc = audio.currentSrc || audio.src || '';
    const isArchive = curSrc.includes('archive.org');
    const timeoutMs = (audio.currentTime || 0) < 0.5 ? (isArchive ? 12000 : 6500) : 10000;
    audioStallTimer = setTimeout(() => {
      if (loadToken !== currentAudioLoadToken || !isPlaying || audio.paused) return;
      if (audio.readyState < 3) {
        tryNextAudioCandidate('timeout');
      }
    }, timeoutMs);
  }

  function tryNextAudioCandidate(reason = 'error') {
    clearAudioStallWatchdog();
    if (isRadioMode && activeRadioStation) {
      const radioUrls = [
        activeRadioStation.url,
        activeRadioStation.fallbackUrl,
        'https://backup.qurango.net/radio/tarateel'
      ].filter((u, idx, arr) => u && arr.indexOf(u) === idx);

      radioCandidateIndex++;
      if (radioCandidateIndex < radioUrls.length) {
        currentAudioLoadToken++;
        prepareElementCorsForSpatial(audio, radioUrls[radioCandidateIndex]);
        audio.src = radioUrls[radioCandidateIndex];
        audio.playbackRate = 1.0;
        if (isPlaying) {
          playAudio();
        }
        return true;
      }
      showToast('تعذر الاتصال بالبث المباشر حالياً، جاري العودة للمشغل.', 'error');
      loadSurah(SURAHS[currentIndex], false);
      return false;
    }

    currentSurahCandidateIndex++;
    if (currentSurahCandidateIndex < currentSurahCandidates.length) {
      const nextCand = currentSurahCandidates[currentSurahCandidateIndex];
      currentAudioLoadToken++;
      if (audio.currentTime > 2 && isFinite(audio.currentTime)) {
        pendingResumeTime = audio.currentTime;
      }
      prepareElementCorsForSpatial(audio, nextCand.url);
      audio.src = nextCand.url;
      audio.playbackRate = parseFloat(speedSelect ? speedSelect.value : 1.0);

      if (nextCand.isReciterFallback) {
        const fbReciter = nextCand.reciter;
        playerAudioSource.innerHTML = `<i class="fa-solid fa-microphone"></i> ${fbReciter.name} <span class="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">(بديل تلقائي)</span>`;
        playerSourceBadge.innerText = fbReciter.shortName;
        updateMiniPlayerInfo(SURAHS[currentIndex], fbReciter);
        if (reason !== 'silent') {
          showToast(`جاري تشغيل سورة ${SURAHS[currentIndex].name} بصوت ${fbReciter.shortName} لضمان استمرار الاستماع.`, 'info');
        }
      }

      if (isPlaying) {
        playAudio();
      }
      return true;
    }

    showToast('تعذر تحميل الملف الصوتي حالياً. يرجى التحقق من الاتصال بالإنترنت والمحاولة مرة أخرى.', 'error');
    pauseAudio();
    return false;
  }

  // --- Load Surah into Player ---
  function loadSurah(surah, shouldPlay = true) {
    activeMiniEngine = 'main';
    isRadioMode = false;
    activeRadioStation = null;
    radioCandidateIndex = 0;
    pendingResumeTime = 0;
    clearAudioStallWatchdog();
    revokeActiveOfflineObjectUrl();
    if (playerRadioLabel) playerRadioLabel.innerText = 'إذاعة مباشرة';
    resetAbLoop(false);

    const reciter = RECITERS.find(r => r.id === currentReciterId) || RECITERS[0];
    const audioInfo = getSurahAudioUrl(reciter, surah.id);
    const effReciter = audioInfo.isFallback ? audioInfo.fallbackReciter : reciter;
    currentSurahCandidates = audioInfo.candidates;
    currentSurahCandidateIndex = 0;
    currentAudioLoadToken++;
    const loadToken = currentAudioLoadToken;

    const isCachedLocally = offlineAudioIndex.has(getOfflineCacheKey(effReciter.id, surah.id));
    updateDownloadButtonBadge(effReciter.id, surah.id);

    if (isCachedLocally) {
      audio.removeAttribute('src');
      getCachedOfflineAudioBlob(effReciter.id, surah.id).then(offlineBlob => {
        if (loadToken !== currentAudioLoadToken || isRadioMode) return;
        if (offlineBlob) {
          const objUrl = URL.createObjectURL(offlineBlob);
          activeOfflineObjectUrl = objUrl;
          prepareElementCorsForSpatial(audio, objUrl);
          audio.src = objUrl;
          audio.playbackRate = parseFloat(speedSelect ? speedSelect.value : 1.0);
          if (shouldPlay) playAudio();
        } else {
          offlineAudioIndex.delete(getOfflineCacheKey(effReciter.id, surah.id));
          prepareElementCorsForSpatial(audio, audioInfo.url);
          audio.src = audioInfo.url;
          audio.playbackRate = parseFloat(speedSelect ? speedSelect.value : 1.0);
          if (shouldPlay) playAudio(); else pauseAudio();
        }
      });
    } else {
      prepareElementCorsForSpatial(audio, audioInfo.url);
      audio.src = audioInfo.url;
      audio.playbackRate = parseFloat(speedSelect ? speedSelect.value : 1.0);
    }

    // Reset seek sliders and timers
    seekSlider.value = 0;
    seekSlider.disabled = true;
    currentTimeLabel.innerText = '00:00';
    totalDurationLabel.innerText = '00:00';
    
    if (miniSeekSlider) {
      miniSeekSlider.value = 0;
      miniSeekSlider.disabled = true;
      miniCurrentTime.innerText = '00:00';
      miniTotalDuration.innerText = '00:00';
      miniTimeDisplay.innerText = '00:00 / 00:00';
      if (miniProgressFill) miniProgressFill.style.width = '0%';
    }

    // Update Player Details UI
    playerSurahNumber.innerText = `السورة ${surah.id}`;
    playerSurahName.innerText = `سورة ${surah.name}`;
    playerSurahEnglish.innerText = surah.englishName;
    playerVerses.innerHTML = `<i class="fa-solid fa-list-ol"></i> ${surah.versesCount} آية`;
    
    if (surah.revelationPlace === 'makkah') {
      playerRevelation.innerHTML = '<i class="fa-solid fa-kaaba text-amber-500"></i> مكية';
    } else {
      playerRevelation.innerHTML = '<i class="fa-solid fa-mosque text-emerald-400"></i> مدنية';
    }

    // Handle Fallback Audio source message
    if (audioInfo.isFallback) {
      playerAudioSource.innerHTML = `<i class="fa-solid fa-microphone"></i> ${audioInfo.fallbackReciter.name} <span class="text-[10px] text-amber-400 bg-amber-500/10 px-1 rounded border border-amber-500/20">(بديل)</span>`;
      playerSourceBadge.innerText = audioInfo.fallbackReciter.shortName;
      showToast(`سورة ${surah.name} غير متوفرة بصوت ${reciter.shortName}، جاري تشغيلها بصوت الشيخ الحصري.`);
    } else {
      playerAudioSource.innerHTML = `<i class="fa-solid fa-microphone"></i> ${reciter.name}`;
      playerSourceBadge.innerText = reciter.shortName;
    }

    // Update Favorite Heart Icon on Player Bar
    if (favorites.includes(surah.id)) {
      playerFavIcon.className = 'fa-solid fa-heart text-red-500';
      btnPlayerFav.querySelector('span').innerText = 'في المفضلة';
    } else {
      playerFavIcon.className = 'fa-regular fa-heart';
      btnPlayerFav.querySelector('span').innerText = 'المفضلة';
    }

    // Reset Live Ayah Hover tracking for new Surah
    activeHoverAyahNum = null;
    currentAyahRepeatCount = 1;
    if (isMemorizationMode) {
      loadSurahTimestamps(surah.id);
    }

    // Synchronize Mini Player UI
    updateMiniPlayerInfo(surah, audioInfo.isFallback ? audioInfo.fallbackReciter : reciter);

    // Synchronize Media Session API (iOS & Android Lock Screen / Control Center)
    updateMediaSession(surah, audioInfo.isFallback ? audioInfo.fallbackReciter : reciter);

    // Update Active Card Highlight in Playlist
    updatePlaylistHighlight();

    // If Mushaf is currently open, load its text
    if (currentView === 'mushaf') {
      loadSurahMushaf(surah.id);
    }

    // Start Audio (skip synchronous play when awaiting local offline Blob resolution)
    if (!isCachedLocally) {
      if (shouldPlay) {
        playAudio();
      } else {
        pauseAudio();
      }
    } else if (!shouldPlay) {
      pauseAudio();
    }
  }

  // --- Mini Player UI Sync ---
  function updateMiniPlayerInfo(surah, activeReciter) {
    if (!miniPlayer) return;
    miniSurahName.innerText = `سورة ${surah.name}`;
    miniReciterName.innerText = activeReciter.shortName;
  }

  // --- Media Session API for iOS & Android Lock Screen Player ---
  function updateMediaSession(surah, activeReciter) {
    if (!('mediaSession' in navigator)) return;

    try {
      const getAbsoluteUrl = (relPath) => new URL(relPath, window.location.href).href;

      navigator.mediaSession.metadata = new MediaMetadata({
        title: `سورة ${surah.name}`,
        artist: activeReciter.name,
        album: 'منصة القرآن الكريم',
        artwork: [
          { src: getAbsoluteUrl('assets/favicon-32.png'), sizes: '32x32', type: 'image/png' },
          { src: getAbsoluteUrl('assets/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' },
          { src: getAbsoluteUrl('assets/icon-192.png'), sizes: '192x192', type: 'image/png' },
          { src: getAbsoluteUrl('assets/icon-512.png'), sizes: '512x512', type: 'image/png' },
          { src: getAbsoluteUrl('assets/icon.png'), sizes: '512x512', type: 'image/png' }
        ]
      });

      navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
    } catch (err) {
      console.warn('MediaSession metadata error:', err);
    }
  }

  function setupMediaSessionHandlers() {
    if (!('mediaSession' in navigator)) return;

    const actionMap = [
      ['play', () => playAudio()],
      ['pause', () => pauseAudio()],
      ['previoustrack', () => prevSurah()],
      ['nexttrack', () => nextSurah()],
      ['seekbackward', (details) => {
        const skip = details.seekOffset || 15;
        audio.currentTime = Math.max(0, audio.currentTime - skip);
      }],
      ['seekforward', (details) => {
        const skip = details.seekOffset || 15;
        audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + skip);
      }],
      ['seekto', (details) => {
        if (details.seekTime !== undefined && details.seekTime !== null) {
          audio.currentTime = details.seekTime;
        }
      }]
    ];

    actionMap.forEach(([action, handler]) => {
      try {
        navigator.mediaSession.setActionHandler(action, handler);
      } catch (err) {
        // Some actions might not be supported on every browser/platform
      }
    });
  }

  // --- Audio Play / Pause Execution ---
  function togglePlayPause() {
    if (isPlaying) pauseAudio(); else playAudio();
  }

  function playAudio() {
    activeMiniEngine = 'main';
    // Pause single ayah audio or Hadr audio if playing
    if (ayahSingleAudio && !ayahSingleAudio.paused) {
      ayahSingleAudio.pause();
    }
    const hadrAudioEl = document.getElementById('hadr-audio');
    if (hadrAudioEl && !hadrAudioEl.paused) {
      hadrAudioEl.pause();
    }
    if (!audio.getAttribute('src')) {
      loadSurah(SURAHS[currentIndex], true);
      return;
    }

    if (spatialGraphReady && audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    isPlaying = true;
    const token = currentAudioLoadToken;
    if (audio.readyState < 3) {
      playIcon.className = 'fa-solid fa-spinner animate-spin text-lg sm:text-xl text-slate-900';
      if (miniPlayIcon) miniPlayIcon.className = 'fa-solid fa-spinner animate-spin text-sm text-slate-900';
      startAudioStallWatchdog(token);
    }

    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        if (token !== currentAudioLoadToken || !isPlaying) return;
        clearAudioStallWatchdog();
        // Main Button
        playIcon.className = 'fa-solid fa-pause text-lg sm:text-xl text-slate-900';
        btnPlayPause.className = 'w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-xl border-2 sm:border-4 border-emerald-950/30 pulse-glow-active flex-shrink-0';
        
        // Mini Player Button
        if (miniPlayIcon) miniPlayIcon.className = 'fa-solid fa-pause text-sm sm:text-base text-slate-900';
        if (miniIcon) miniIcon.className = 'fa-solid fa-volume-high text-xs text-amber-400 animate-pulse';
        if (mushafPlayIcon) mushafPlayIcon.className = 'fa-solid fa-pause';
        if (mMushafPlayIcon) mMushafPlayIcon.className = 'fa-solid fa-pause text-xs';
        syncMiniPlayerVisibility(currentView);

        // Animations
        artworkMandala.classList.remove('spin-paused');
        if (artworkGlow) artworkGlow.classList.add('active');
        waveVisualizer.classList.remove('visualizer-paused');
        micIcon.className = 'fa-solid fa-volume-high text-xs sm:text-sm text-amber-400 animate-pulse';

        // Update Equalizer inside Active Playlist Card
        updatePlaylistHighlight();
        syncTabletImmersionPlayState();

        // Update Media Session State for Lock Screen
        if ('mediaSession' in navigator) {
          navigator.mediaSession.playbackState = 'playing';
        }
      }).catch(err => {
        if (token !== currentAudioLoadToken) return;
        if (err && err.name === 'AbortError') return;
        console.warn("Audio play prevented or blocked:", err);
        clearAudioStallWatchdog();
        if (err && err.name === 'NotAllowedError') {
          isPlaying = false;
          pauseAudio();
          showToast('انقر على زر التشغيل مرة أخرى لبدء الصوت', 'info');
          return;
        }
        tryNextAudioCandidate('error');
      });
    }
  }

  function pauseAudio() {
    clearAudioStallWatchdog();
    isPlaying = false;
    audio.pause();
    
    // Main Button
    playIcon.className = 'fa-solid fa-play text-lg sm:text-xl mr-0.5 text-slate-900';
    btnPlayPause.className = 'w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-xl border-2 sm:border-4 border-emerald-950/30 flex-shrink-0';
    
    // Mini Player Button (preserve Hadr mini-player state when activeMiniEngine === 'hadr')
    if (activeMiniEngine === 'main') {
      if (miniPlayIcon) miniPlayIcon.className = 'fa-solid fa-play text-sm sm:text-base mr-0.5 text-slate-900';
      if (miniIcon) miniIcon.className = 'fa-solid fa-music text-sm text-amber-400';
    }
    if (mushafPlayIcon) mushafPlayIcon.className = 'fa-solid fa-play';
    if (mMushafPlayIcon) mMushafPlayIcon.className = 'fa-solid fa-play text-xs';

    // Animations
    artworkMandala.classList.add('spin-paused');
    if (artworkGlow) artworkGlow.classList.remove('active');
    waveVisualizer.classList.add('visualizer-paused');
    micIcon.className = 'fa-solid fa-microphone text-xs sm:text-sm text-amber-500';

    // Update Equalizer inside Active Playlist Card
    updatePlaylistHighlight();
    syncTabletImmersionPlayState();

    // Update Media Session State for Lock Screen
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = 'paused';
    }
  }

  // --- Mushaf Reading Mode Logic ---
  function loadSurahMushaf(surahId, targetAyahToScroll = null) {
    currentMushafSurahId = surahId;
    const surah = SURAHS.find(s => s.id === surahId) || SURAHS[0];
    
    // Header UI (Desktop & Mobile)
    if (mushafSurahBadge) mushafSurahBadge.innerText = surah.id;
    if (mushafSurahTitle) mushafSurahTitle.innerText = `سُورَةُ ${surah.name}`;
    if (mushafRevelationBadge) mushafRevelationBadge.innerText = surah.revelationPlace === 'makkah' ? 'مكية' : 'مدنية';
    if (mushafSurahMeta) mushafSurahMeta.innerText = `${surah.versesCount} آيات • الجزء ${Math.ceil(surah.id / 4.2) || 1} • ترتيب النزول ${surah.id}`;
    if (mushafSurahSelect) mushafSurahSelect.value = surah.id;

    if (mMushafBadge) mMushafBadge.innerText = surah.id;
    if (mMushafTitle) mMushafTitle.innerText = `سُورَةُ ${surah.name}`;
    if (mMushafRevelation) mMushafRevelation.innerText = surah.revelationPlace === 'makkah' ? 'مكية' : 'مدنية';
    if (mMushafMeta) mMushafMeta.innerText = `${surah.versesCount} آيات • الجزء ${Math.ceil(surah.id / 4.2) || 1}`;
    if (mOptionsSurahSelect) mOptionsSurahSelect.value = surah.id;
    
    // Basmala visibility:
    // Surah 1 (Al-Fatihah) has Basmala as Ayah 1, so hide top banner to prevent duplicate
    // Surah 9 (At-Tawbah) does NOT have Basmala
    if (surah.id === 1 || surah.id === 9) {
      mushafBasmala.classList.add('hidden');
    } else {
      mushafBasmala.classList.remove('hidden');
    }

    // Apply Zoom
    applyMushafFontSize();

    // Check Memory Cache
    if (mushafCache[surahId]) {
      renderMushafVerses(mushafCache[surahId], targetAyahToScroll);
      return;
    }

    // Check LocalStorage Cache
    const localData = localStorage.getItem(`quran_mushaf_${surahId}`);
    if (localData) {
      try {
        const parsed = JSON.parse(localData);
        mushafCache[surahId] = parsed;
        renderMushafVerses(parsed, targetAyahToScroll);
        return;
      } catch (e) {}
    }

    // Loading State
    mushafContent.innerHTML = `
      <div class="flex flex-col items-center justify-center py-20 text-center text-slate-400">
        <i class="fa-solid fa-circle-notch animate-spin text-3xl mb-3 text-amber-500"></i>
        <p class="text-sm">جاري تحميل آيات سورة ${surah.name} المباركة...</p>
      </div>
    `;

    // Fetch on demand from Al-Quran Cloud API
    const targetSurahId = surahId;
    fetch(`https://api.alquran.cloud/v1/surah/${surahId}/quran-uthmani`)
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(json => {
        // Guard against race conditions
        if (targetSurahId !== currentMushafSurahId) return;

        if (json && json.data && json.data.ayahs) {
          mushafCache[surahId] = json.data;
          try {
            localStorage.setItem(`quran_mushaf_${surahId}`, JSON.stringify(json.data));
          } catch (e) {}
          renderMushafVerses(json.data, targetAyahToScroll);
        } else {
          throw new Error('Malformed Quran data');
        }
      })
      .catch(err => {
        if (targetSurahId !== currentMushafSurahId) return;
        console.error('Failed to load Quran text:', err);
        mushafContent.innerHTML = `
          <div class="flex flex-col items-center justify-center py-16 text-center text-slate-400">
            <i class="fa-solid fa-circle-exclamation text-3xl mb-3 text-amber-500"></i>
            <p class="text-sm font-semibold mb-1">تعذر تحميل نص السورة حالياً</p>
            <p class="text-xs text-slate-400 mb-4">يرجى التأكد من اتصال الإنترنت ثم إعادة المحاولة.</p>
            <button id="btn-retry-mushaf" class="px-4 py-2 bg-amber-500 text-slate-900 rounded-xl text-xs font-bold shadow hover:bg-amber-400 transition-all">
              إعادة المحاولة
            </button>
          </div>
        `;
        const retryBtn = document.getElementById('btn-retry-mushaf');
        if (retryBtn) {
          retryBtn.addEventListener('click', () => loadSurahMushaf(surahId, targetAyahToScroll));
        }
      });
  }

  // V3.0 Golden Edition: Inline Tafsir & Interactive Hifz Self-Test Helpers
  function formatAyahForHifzMode(text, ayahNum) {
    if (!mushafHifzMode || mushafHifzMode === 'off') return text;
    const words = text.trim().split(/\s+/);
    if (mushafHifzMode === 'full' || words.length <= 3) {
      return `<span class="hifz-masked-segment" data-ayah="${ayahNum}">${text}</span>`;
    }
    if (mushafHifzMode === 'endings') {
      const visibleCount = Math.min(2, Math.floor(words.length / 2));
      const head = words.slice(0, visibleCount).join(' ');
      const tail = words.slice(visibleCount).join(' ');
      return `${head} <span class="hifz-masked-segment" data-ayah="${ayahNum}">${tail}</span>`;
    }
    if (mushafHifzMode === 'starts') {
      const maskCount = Math.min(3, Math.ceil(words.length / 2));
      const head = words.slice(0, maskCount).join(' ');
      const tail = words.slice(maskCount).join(' ');
      return `<span class="hifz-masked-segment" data-ayah="${ayahNum}">${head}</span> ${tail}`;
    }
    return text;
  }

  function renderMushafVerses(surahData, targetAyahToScroll = null) {
    const ayahs = surahData.ayahs || [];
    const surahObj = SURAHS.find(s => s.id === surahData.number) || { name: surahData.name };
    let html = '';
    const isInlineTafsir = mushafInlineTafsirEdition && mushafInlineTafsirEdition !== 'none';
    const isLtr = mushafInlineTafsirEdition && mushafInlineTafsirEdition.startsWith('en');

    ayahs.forEach(ayah => {
      let text = ayah.text;
      // If not Fatihah & not Tawbah, strip initial Bismillah from verse 1 because of top header banner
      if (surahData.number !== 1 && ayah.numberInSurah === 1) {
        text = text.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '').trim();
      }
      const isBookmarked = khatmaBookmark && khatmaBookmark.surahId === surahData.number && khatmaBookmark.ayahNum === ayah.numberInSurah;
      const bookmarkClass = isBookmarked ? 'ayah-bookmarked' : '';
      const displayHtml = formatAyahForHifzMode(text, ayah.numberInSurah);

      if (isInlineTafsir) {
        html += `
          <div class="mushaf-inline-tafsir-block">
            <div class="leading-[2.5]">
              <span class="ayah-text ${bookmarkClass}" id="mushaf-ayah-${ayah.numberInSurah}" data-ayah="${ayah.numberInSurah}" data-global="${ayah.number}" title="انقر للاستماع أو كشف الآية">${displayHtml}</span>
              <span class="ayah-badge" id="mushaf-badge-${ayah.numberInSurah}" data-ayah="${ayah.numberInSurah}" data-global="${ayah.number}" title="انقر لفتح استوديو التفسير والفيديو للآية ${ayah.numberInSurah}">﴿${toArabicNumerals(ayah.numberInSurah)}﴾</span>
            </div>
            <div class="mushaf-inline-tafsir-text" id="inline-tafsir-${surahData.number}-${ayah.numberInSurah}" dir="${isLtr ? 'ltr' : 'rtl'}">
              <span class="text-xs text-slate-400">جاري تحميل التفسير...</span>
            </div>
          </div>
        `;
      } else {
        html += `<span class="ayah-text ${bookmarkClass}" id="mushaf-ayah-${ayah.numberInSurah}" data-ayah="${ayah.numberInSurah}" data-global="${ayah.number}" title="انقر لفتح استوديو الآية (أو لكشفها في وضع الاختبار)">${displayHtml}</span><span class="ayah-badge" id="mushaf-badge-${ayah.numberInSurah}" data-ayah="${ayah.numberInSurah}" data-global="${ayah.number}" title="انقر لفتح استوديو وتفسير الآية رقم ${ayah.numberInSurah}">﴿${toArabicNumerals(ayah.numberInSurah)}﴾</span> `;
      }
    });

    mushafContent.innerHTML = html;

    if (isInlineTafsir) {
      populateInlineMushafTafsir(surahData.number, mushafInlineTafsirEdition);
    }

    if (targetAyahToScroll) {
      setTimeout(() => {
        const targetEl = document.getElementById(`mushaf-ayah-${targetAyahToScroll}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetEl.classList.add('ayah-playing-active');
          setTimeout(() => targetEl.classList.remove('ayah-playing-active'), 2500);
        }
      }, 150);
    } else if (!isMemorizationMode) {
      mushafScrollArea.scrollTop = 0;
    }

    // Attach Interactive Ayah Studio / Hifz Reveal / Memorization Seek Listener on Ayahs
    mushafContent.querySelectorAll('.ayah-text, .ayah-badge').forEach(elem => {
      elem.addEventListener('click', (e) => {
        const ayahNum = parseInt(elem.getAttribute('data-ayah'));
        const globalNum = parseInt(elem.getAttribute('data-global'));
        const ayahObj = ayahs.find(a => a.numberInSurah === ayahNum);
        if (!ayahObj) return;

        let cleanText = ayahObj.text;
        if (surahData.number !== 1 && ayahObj.numberInSurah === 1) {
          cleanText = cleanText.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '').trim();
        }
        currentStudioContext = {
          surahId: surahData.number,
          surahName: surahObj.name,
          ayahNum,
          globalAyah: globalNum,
          text: cleanText
        };

        // If user clicked the Ayah Badge ﴿١﴾, always open Ayah Studio Modal
        if (elem.classList.contains('ayah-badge')) {
          e.stopPropagation();
          openAyahStudio(surahData.number, surahObj.name, ayahNum, globalNum, cleanText);
          return;
        }

        // If Hifz Self-Test Mode is active, reveal the masked segment on click!
        if (mushafHifzMode !== 'off') {
          const maskedSeg = elem.querySelector('.hifz-masked-segment');
          if (maskedSeg && !maskedSeg.classList.contains('hifz-revealed')) {
            maskedSeg.classList.add('hifz-revealed');
            elem.classList.add('hifz-revealed');
            hifzRevealedCount++;
            const scoreBadge = document.getElementById('mushaf-hifz-score-badge');
            const scoreText = document.getElementById('mushaf-hifz-score-text');
            if (scoreBadge) {
              scoreBadge.classList.remove('hidden');
              scoreBadge.classList.add('flex');
            }
            if (scoreText) scoreText.innerText = `تم تسميع: ${hifzRevealedCount}`;
            return;
          }
        }

        if (isMemorizationMode) {
          seekReciterToAyah(surahData.number, ayahNum);
        } else {
          openAyahStudio(surahData.number, surahObj.name, ayahNum, globalNum, cleanText);
        }
      });
    });

    // If Memorization Mode is active, sync live hover highlight immediately
    if (isMemorizationMode) {
      loadSurahTimestamps(surahData.number);
      setTimeout(() => updateLiveMushafAyahHover(true), 80);
    }
  }

  function populateInlineMushafTafsir(surahId, edition) {
    const cacheKey = `${edition}_${surahId}`;
    if (surahTafsirCache[cacheKey]) {
      applyInlineTafsirData(surahId, surahTafsirCache[cacheKey]);
      return;
    }
    try {
      const local = localStorage.getItem(`quran_surah_tafsir_${cacheKey}`);
      if (local) {
        const parsed = JSON.parse(local);
        surahTafsirCache[cacheKey] = parsed;
        applyInlineTafsirData(surahId, parsed);
        return;
      }
    } catch (e) {}

    fetch(`https://api.alquran.cloud/v1/surah/${surahId}/${edition}`)
      .then(r => r.json())
      .then(json => {
        if (json && json.data && json.data.ayahs) {
          surahTafsirCache[cacheKey] = json.data.ayahs;
          try {
            localStorage.setItem(`quran_surah_tafsir_${cacheKey}`, JSON.stringify(json.data.ayahs));
          } catch (e) {}
          applyInlineTafsirData(surahId, json.data.ayahs);
        }
      })
      .catch(() => {});
  }

  function applyInlineTafsirData(surahId, tafsirAyahs) {
    if (!Array.isArray(tafsirAyahs)) return;
    tafsirAyahs.forEach(item => {
      const el = document.getElementById(`inline-tafsir-${surahId}-${item.numberInSurah}`);
      if (el) {
        el.innerText = item.text;
      }
    });
  }

  function toArabicNumerals(num) {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(d => arabicDigits[d]).join('');
  }

  function applyMushafFontSize() {
    if (!mushafContent) return;
    const baseRem = (1.5 * (mushafFontSize / 100)).toFixed(2);
    mushafContent.style.setProperty('--mushaf-font-size', `${baseRem}rem`);
    if (mushafFontSizeLabel) mushafFontSizeLabel.innerText = `${mushafFontSize}%`;
    if (mOptionsFontLabel) mOptionsFontLabel.innerText = `${mushafFontSize}%`;
  }

  // --- Favorite Toggle ---
  function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    const surah = SURAHS.find(s => s.id === id);

    if (index === -1) {
      favorites.push(id);
      showToast(`تمت إضافة سورة ${surah.name} إلى المفضلة`);
    } else {
      favorites.splice(index, 1);
      showToast(`تمت إزالة سورة ${surah.name} من المفضلة`);
    }

    localStorage.setItem('quran_favorites', JSON.stringify(favorites));
    updateStatistics();
    
    if (currentTab === 'favorites') {
      renderPlaylist();
    } else {
      const card = document.querySelector(`.surah-card[data-id="${id}"]`);
      if (card) {
        const heartBtn = card.querySelector('.btn-fav-toggle i');
        if (heartBtn) {
          const isFav = favorites.includes(id);
          heartBtn.className = isFav ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart text-xs';
        }
      }
    }

    if (SURAHS[currentIndex].id === id) {
      if (favorites.includes(id)) {
        playerFavIcon.className = 'fa-solid fa-heart text-red-500';
        btnPlayerFav.querySelector('span').innerText = 'في المفضلة';
      } else {
        playerFavIcon.className = 'fa-regular fa-heart';
        btnPlayerFav.querySelector('span').innerText = 'المفضلة';
      }
    }
  }

  // --- Navigation Controls ---
  function nextSurah() {
    if (isShuffle) {
      playRandom();
      return;
    }

    currentIndex++;
    if (currentIndex >= SURAHS.length) {
      currentIndex = 0;
    }
    loadSurah(SURAHS[currentIndex], true);
    scrollToActiveCard();
  }

  function prevSurah() {
    if (isShuffle) {
      playRandom();
      return;
    }

    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = SURAHS.length - 1;
    }
    loadSurah(SURAHS[currentIndex], true);
    scrollToActiveCard();
  }

  function playRandom() {
    currentIndex = Math.floor(Math.random() * SURAHS.length);
    loadSurah(SURAHS[currentIndex], true);
    scrollToActiveCard();
  }

  function updatePlaylistHighlight() {
    document.querySelectorAll('.surah-card').forEach(card => {
      const cardId = parseInt(card.getAttribute('data-id'));
      const isCurrent = cardId === SURAHS[currentIndex].id;
      
      if (isCurrent) {
        card.classList.add('active');
        // Add animated equalizer icon if currently playing
        const titleContainer = card.querySelector('.surah-card h3')?.parentElement;
        if (titleContainer) {
          let eq = titleContainer.querySelector('.mini-eq');
          if (isPlaying && !eq) {
            const eqElem = document.createElement('div');
            eqElem.className = 'mini-eq mr-1';
            eqElem.innerHTML = '<span class="mini-eq-bar"></span><span class="mini-eq-bar"></span><span class="mini-eq-bar"></span>';
            titleContainer.appendChild(eqElem);
          } else if (!isPlaying && eq) {
            eq.remove();
          }
        }
      } else {
        card.classList.remove('active');
        card.querySelector('.mini-eq')?.remove();
      }
    });
  }

  function scrollToActiveCard() {
    const activeCard = document.querySelector('.surah-card.active');
    if (activeCard) {
      activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function formatTime(secs) {
    if (isNaN(secs) || secs < 0) return '00:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  // --- Playback Configuration UI ---
  function updatePlaybackControlsUI() {
    if (isShuffle) {
      btnShuffle.classList.add('text-amber-400');
      btnShuffle.classList.remove('text-[var(--text-secondary)]');
      btnShuffle.setAttribute('title', 'إلغاء وضع التشغيل العشوائي');
    } else {
      btnShuffle.classList.remove('text-amber-400');
      btnShuffle.classList.add('text-[var(--text-secondary)]');
      btnShuffle.setAttribute('title', 'تشغيل عشوائي');
    }

    const repeatIcon = btnRepeat.querySelector('i');
    if (repeatMode === 'repeat-one') {
      btnRepeat.classList.add('text-amber-400');
      btnRepeat.classList.remove('text-[var(--text-secondary)]');
      repeatIcon.className = 'fa-solid fa-repeat-1 fa-repeat';
      btnRepeat.setAttribute('title', 'تكرار السورة الحالية');
    } else if (repeatMode === 'repeat-all') {
      btnRepeat.classList.add('text-amber-400');
      btnRepeat.classList.remove('text-[var(--text-secondary)]');
      repeatIcon.className = 'fa-solid fa-repeat';
      btnRepeat.setAttribute('title', 'تكرار الكل');
    } else {
      btnRepeat.classList.remove('text-amber-400');
      btnRepeat.classList.add('text-[var(--text-secondary)]');
      repeatIcon.className = 'fa-solid fa-repeat';
      btnRepeat.setAttribute('title', 'تكرار معطل');
    }
  }

  function updateVolumeIcon(value) {
    if (value == 0) {
      volumeIcon.className = 'fa-solid fa-volume-xmark';
    } else if (value < 40) {
      volumeIcon.className = 'fa-solid fa-volume-low';
    } else {
      volumeIcon.className = 'fa-solid fa-volume-high';
    }
  }

  // --- Attach All Event Listeners ---
  function attachEventListeners() {
    // 1. Navigation Mode Tabs (Desktop)
    if (navBtnPlayer) navBtnPlayer.addEventListener('click', () => switchView('player'));
    if (navBtnMushaf) navBtnMushaf.addEventListener('click', () => switchView('mushaf'));
    if (navBtnSpiritual) navBtnSpiritual.addEventListener('click', () => switchView('spiritual'));
    if (navBtnMemorial) navBtnMemorial.addEventListener('click', () => switchView('memorial'));
    if (navBtnPlaylist) navBtnPlaylist.addEventListener('click', () => switchView('playlist'));

    // Video Studio Navigation & Header Buttons
    const navBtnVideo = document.getElementById('nav-btn-video');
    const btnHeaderVideo = document.getElementById('btn-header-video');
    const btnMobileHeaderVideo = document.getElementById('btn-mobile-header-video');
    const videoBtnBackPlayer = document.getElementById('video-btn-back-player');

    if (navBtnVideo) navBtnVideo.addEventListener('click', () => switchView('video'));
    if (btnHeaderVideo) btnHeaderVideo.addEventListener('click', () => switchView('video'));
    if (btnMobileHeaderVideo) btnMobileHeaderVideo.addEventListener('click', () => switchView('video'));
    if (videoBtnBackPlayer) videoBtnBackPlayer.addEventListener('click', () => switchView('player'));

    // Header Memorial Pill
    if (btnHeaderMemorial) btnHeaderMemorial.addEventListener('click', () => switchView('memorial'));

    // Services Menu Dropdown (صانع الفيديوهات + صدقة جارية)
    const btnServicesMenu = document.getElementById('btn-services-menu');
    const servicesDropdown = document.getElementById('services-dropdown');
    const servicesMenuArrow = document.getElementById('services-menu-arrow');
    const dropdownBtnVideo = document.getElementById('dropdown-btn-video');
    const dropdownBtnMemorial = document.getElementById('dropdown-btn-memorial');
    const servicesMenuContainer = document.getElementById('services-menu-container');

    if (btnServicesMenu && servicesDropdown) {
      btnServicesMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        servicesDropdown.classList.toggle('hidden');
        if (servicesMenuArrow) servicesMenuArrow.classList.toggle('rotate-180');
      });

      if (dropdownBtnVideo) {
        dropdownBtnVideo.addEventListener('click', (e) => {
          e.stopPropagation();
          switchView('video');
          servicesDropdown.classList.add('hidden');
          if (servicesMenuArrow) servicesMenuArrow.classList.remove('rotate-180');
        });
      }

      const dropdownBtnHadr = document.getElementById('dropdown-btn-hadr');
      if (dropdownBtnHadr) {
        dropdownBtnHadr.addEventListener('click', (e) => {
          e.stopPropagation();
          switchView('hadr');
          servicesDropdown.classList.add('hidden');
          if (servicesMenuArrow) servicesMenuArrow.classList.remove('rotate-180');
        });
      }

      if (dropdownBtnMemorial) {
        dropdownBtnMemorial.addEventListener('click', (e) => {
          e.stopPropagation();
          switchView('memorial');
          servicesDropdown.classList.add('hidden');
          if (servicesMenuArrow) servicesMenuArrow.classList.remove('rotate-180');
        });
      }

      const dropdownBtnAzkar = document.getElementById('dropdown-btn-azkar');
      if (dropdownBtnAzkar) {
        dropdownBtnAzkar.addEventListener('click', (e) => {
          e.stopPropagation();
          switchView('spiritual');
          if (typeof window.openSpiritualSubTab === 'function') {
            window.openSpiritualSubTab('azkar');
          } else {
            const spTabAzkar = document.getElementById('sp-tab-azkar');
            if (spTabAzkar) spTabAzkar.click();
          }
          servicesDropdown.classList.add('hidden');
          if (servicesMenuArrow) servicesMenuArrow.classList.remove('rotate-180');
        });
      }

      const dropdownBtnSebha = document.getElementById('dropdown-btn-sebha');
      if (dropdownBtnSebha) {
        dropdownBtnSebha.addEventListener('click', (e) => {
          e.stopPropagation();
          switchView('spiritual');
          if (typeof window.openSpiritualSubTab === 'function') {
            window.openSpiritualSubTab('sebha');
          } else {
            const spTabSebha = document.getElementById('sp-tab-sebha');
            if (spTabSebha) spTabSebha.click();
          }
          servicesDropdown.classList.add('hidden');
          if (servicesMenuArrow) servicesMenuArrow.classList.remove('rotate-180');
        });
      }

      const dropdownBtnPrayer = document.getElementById('dropdown-btn-prayer');
      if (dropdownBtnPrayer) {
        dropdownBtnPrayer.addEventListener('click', (e) => {
          e.stopPropagation();
          switchView('spiritual');
          if (typeof window.openSpiritualSubTab === 'function') {
            window.openSpiritualSubTab('prayer');
          } else {
            const spTabPrayer = document.getElementById('sp-tab-prayer');
            if (spTabPrayer) spTabPrayer.click();
          }
          servicesDropdown.classList.add('hidden');
          if (servicesMenuArrow) servicesMenuArrow.classList.remove('rotate-180');
        });
      }

      const btnHeaderStreak = document.getElementById('btn-header-streak');
      if (btnHeaderStreak) {
        btnHeaderStreak.addEventListener('click', () => {
          switchView('spiritual');
        });
      }

      document.addEventListener('click', (e) => {
        if (servicesMenuContainer && !servicesMenuContainer.contains(e.target)) {
          servicesDropdown.classList.add('hidden');
          if (servicesMenuArrow) servicesMenuArrow.classList.remove('rotate-180');
        }
      });
    }

    // Mobile Floating Glass Navigator Tabs
    if (mNavPlayer) mNavPlayer.addEventListener('click', () => switchView('player'));
    if (mNavMushaf) mNavMushaf.addEventListener('click', () => switchView('mushaf'));
    if (mNavSpiritual) mNavSpiritual.addEventListener('click', () => switchView('spiritual'));
    if (mNavMemorial) mNavMemorial.addEventListener('click', () => switchView('memorial'));
    if (mNavPlaylist) mNavPlaylist.addEventListener('click', () => switchView('playlist'));
    
    btnReadInMushaf.addEventListener('click', () => switchView('mushaf'));
    brandLogo.addEventListener('click', () => switchView('player'));

    // Quick Sunnah Surah Pills (Al-Kahf 18, Al-Mulk 67, Ya-Sin 36)
    document.querySelectorAll('.btn-quick-surah').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = parseInt(btn.getAttribute('data-quick-surah'));
        const idx = SURAHS.findIndex(s => s.id === sid);
        if (idx !== -1) {
          currentIndex = idx;
          loadSurah(SURAHS[currentIndex], true);
          scrollToActiveCard();
          showToast(`تشغيل سورة ${SURAHS[currentIndex].name}`);
        }
      });
    });

    // 2. Play / Pause Click
    btnPlayPause.addEventListener('click', () => {
      if (isPlaying) pauseAudio(); else playAudio();
    });

    miniBtnPlayPause.addEventListener('click', () => {
      if (activeMiniEngine === 'hadr') {
        const hadrAudioEl = getActiveHadrAudio();
        if (!hadrAudioEl || !hadrAudioEl.getAttribute('src')) {
          playHadrSurah(currentHadrSurahId, true);
        } else if (hadrAudioEl.paused) {
          hadrAudioEl.play().catch(() => {});
        } else {
          hadrAudioEl.pause();
        }
        return;
      }
      if (isPlaying) pauseAudio(); else playAudio();
    });

    if (mushafBtnPlayAudio) {
      mushafBtnPlayAudio.addEventListener('click', () => {
        if (isPlaying) pauseAudio(); else playAudio();
      });
    }

    // 3. Next / Prev
    btnNext.addEventListener('click', nextSurah);
    btnPrev.addEventListener('click', prevSurah);
    miniBtnNext.addEventListener('click', () => {
      if (activeMiniEngine === 'hadr') {
        if (currentHadrSurahId < 114) playHadrSurah(currentHadrSurahId + 1, true);
        return;
      }
      nextSurah();
    });
    miniBtnPrev.addEventListener('click', () => {
      if (activeMiniEngine === 'hadr') {
        if (currentHadrSurahId > 1) playHadrSurah(currentHadrSurahId - 1, true);
        return;
      }
      prevSurah();
    });

    // 4. Skip 15 Seconds Forward & Backward
    if (btnSkipBack15) {
      btnSkipBack15.addEventListener('click', () => {
        audio.currentTime = Math.max(0, audio.currentTime - 15);
        showToast('تأخير 15 ثانية', 'info');
      });
    }

    if (btnSkipForward15) {
      btnSkipForward15.addEventListener('click', () => {
        audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 15);
        showToast('تقديم 15 ثانية', 'info');
      });
    }

    // 5. Mini Player Expand (returns to Main Player OR Hadr Hub matching active audio engine)
    miniBtnExpand.addEventListener('click', () => switchView(activeMiniEngine === 'hadr' ? 'hadr' : 'player'));
    miniPlayerInfo.addEventListener('click', () => switchView(activeMiniEngine === 'hadr' ? 'hadr' : 'player'));

    // 6. Shuffle & Repeat
    btnShuffle.addEventListener('click', () => {
      isShuffle = !isShuffle;
      localStorage.setItem('quran_shuffle_mode', isShuffle);
      updatePlaybackControlsUI();
      showToast(isShuffle ? 'تم تفعيل التشغيل العشوائي' : 'تم إلغاء التشغيل العشوائي');
    });

    btnRepeat.addEventListener('click', () => {
      if (repeatMode === 'repeat-all') {
        repeatMode = 'repeat-one';
        showToast('تم تفعيل تكرار سورة واحدة');
      } else if (repeatMode === 'repeat-one') {
        repeatMode = 'none';
        showToast('تم إلغاء التكرار');
      } else {
        repeatMode = 'repeat-all';
        showToast('تم تفعيل تكرار قائمة السور');
      }
      
      localStorage.setItem('quran_repeat_mode', repeatMode);
      updatePlaybackControlsUI();
    });

    // 7. Audio Event Handlers
    audio.addEventListener('loadedmetadata', () => {
      if (isRadioMode) {
        seekSlider.disabled = true;
        totalDurationLabel.innerText = 'بث مباشر';
        return;
      }
      const dur = Math.floor(audio.duration);
      seekSlider.max = dur;
      seekSlider.disabled = false;
      totalDurationLabel.innerText = formatTime(audio.duration);

      if (miniSeekSlider) {
        miniSeekSlider.max = dur;
        miniSeekSlider.disabled = false;
        miniTotalDuration.innerText = formatTime(audio.duration);
      }

      if (pendingResumeTime > 2 && isFinite(audio.duration) && pendingResumeTime < audio.duration - 2) {
        const resumeTo = pendingResumeTime;
        pendingResumeTime = 0;
        try { audio.currentTime = resumeTo; } catch (e) {}
      }

      if (isMemorizationMode && currentView === 'mushaf') {
        updateLiveMushafAyahHover();
      }
    });

    let lastRecordedSec = -1;
    audio.addEventListener('timeupdate', () => {
      const cur = Math.floor(audio.currentTime);

      // V2: Track listening analytics every 5 seconds
      if (isPlaying && cur !== lastRecordedSec && cur % 5 === 0) {
        lastRecordedSec = cur;
        listeningSeconds += 5;
        localStorage.setItem('quran_listening_seconds', listeningSeconds);
      }

      // V2: A-B Memorization Loop Check
      if (abLoopState === 'AB' && abLoopB > abLoopA && audio.currentTime >= abLoopB) {
        audio.currentTime = abLoopA;
        return;
      }

      if (isRadioMode) {
        currentTimeLabel.innerText = formatTime(cur);
        totalDurationLabel.innerText = 'بث مباشر';
        if (miniTimeDisplay) miniTimeDisplay.innerText = 'بث إذاعي مباشر 24/7';
        return;
      }

      const formatted = formatTime(cur);
      const dur = audio.duration || 1;
      const progressPercent = Math.min(100, Math.max(0, (audio.currentTime / dur) * 100));

      if (!seekSlider.classList.contains('user-dragging')) {
        seekSlider.value = cur;
        currentTimeLabel.innerText = formatted;
      }

      if (activeMiniEngine === 'main') {
        if (miniSeekSlider && !miniSeekSlider.classList.contains('user-dragging')) {
          miniSeekSlider.value = cur;
          miniCurrentTime.innerText = formatted;
          miniTimeDisplay.innerText = `${formatted} / ${formatTime(audio.duration)}`;
        }
        if (miniProgressFill) {
          miniProgressFill.style.width = `${progressPercent}%`;
        }
      }

      // V2+: Live Reciter Ayah Hover in Mushaf when Memorization Mode is active
      if (isMemorizationMode && currentView === 'mushaf') {
        updateLiveMushafAyahHover();
      }

      // Sync Lock Screen position scrubber
      if ('mediaSession' in navigator && 'setPositionState' in navigator.mediaSession) {
        if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration) && audio.duration > 0) {
          try {
            navigator.mediaSession.setPositionState({
              duration: audio.duration,
              playbackRate: audio.playbackRate,
              position: Math.min(audio.currentTime, audio.duration)
            });
          } catch (e) {}
        }
      }
    });

    const onBufferWait = () => {
      if (!isPlaying) return;
      playIcon.className = 'fa-solid fa-spinner animate-spin text-lg sm:text-xl text-slate-900';
      if (miniPlayIcon) miniPlayIcon.className = 'fa-solid fa-spinner animate-spin text-sm text-slate-900';
      startAudioStallWatchdog(currentAudioLoadToken);
    };
    audio.addEventListener('waiting', onBufferWait);
    audio.addEventListener('stalled', onBufferWait);

    audio.addEventListener('canplay', () => {
      clearAudioStallWatchdog();
      if (pendingResumeTime > 2 && isFinite(audio.duration) && pendingResumeTime < audio.duration - 2) {
        const resumeTo = pendingResumeTime;
        pendingResumeTime = 0;
        try { audio.currentTime = resumeTo; } catch (e) {}
      }
    });

    let resumeOnReconnectSec = 0;
    window.addEventListener('online', () => {
      if (resumeOnReconnectSec > 0 && !isPlaying && audio.getAttribute('src')) {
        pendingResumeTime = resumeOnReconnectSec;
        resumeOnReconnectSec = 0;
        currentSurahCandidateIndex = 0;
        if (currentSurahCandidates.length > 0) {
          audio.src = currentSurahCandidates[0].url;
        }
        playAudio();
        showToast('تم استعادة الاتصال — جاري استكمال التلاوة', 'info');
      }
    });

    audio.addEventListener('playing', () => {
      clearAudioStallWatchdog();
      resumeOnReconnectSec = 0;
      playIcon.className = 'fa-solid fa-pause text-lg sm:text-xl text-slate-900';
      if (miniPlayIcon) miniPlayIcon.className = 'fa-solid fa-pause text-sm text-slate-900';
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'playing';
      }
    });

    // 8. Resilient Multi-CDN & Reciter Fallback on Audio Error
    audio.addEventListener('error', () => {
      if (!audio.getAttribute('src')) return;
      const savedSec = (audio.currentTime > 2 && isFinite(audio.currentTime)) ? audio.currentTime : 0;
      const recovered = tryNextAudioCandidate('error');
      if (!recovered && savedSec > 0) {
        resumeOnReconnectSec = savedSec;
      }
    });

    // 9. Seek Slider Interaction
    const handleSeekInput = (val) => {
      currentTimeLabel.innerText = formatTime(val);
      if (miniCurrentTime) miniCurrentTime.innerText = formatTime(val);
      if (miniTimeDisplay) miniTimeDisplay.innerText = `${formatTime(val)} / ${formatTime(audio.duration)}`;
    };

    const handleSeekChange = (val) => {
      audio.currentTime = val;
      if (isPlaying) {
        audio.play().catch(() => {});
      }
    };

    seekSlider.addEventListener('input', () => {
      seekSlider.classList.add('user-dragging');
      handleSeekInput(seekSlider.value);
    });

    seekSlider.addEventListener('change', () => {
      seekSlider.classList.remove('user-dragging');
      handleSeekChange(seekSlider.value);
    });

    if (miniSeekSlider) {
      miniSeekSlider.addEventListener('input', () => {
        miniSeekSlider.classList.add('user-dragging');
        const targetAudio = (activeMiniEngine === 'hadr' && getActiveHadrAudio()) ? getActiveHadrAudio() : audio;
        const val = miniSeekSlider.value;
        if (miniCurrentTime) miniCurrentTime.innerText = formatTime(val);
        if (miniTimeDisplay) miniTimeDisplay.innerText = `${formatTime(val)} / ${formatTime(targetAudio.duration)}`;
      });

      miniSeekSlider.addEventListener('change', () => {
        miniSeekSlider.classList.remove('user-dragging');
        const targetAudio = (activeMiniEngine === 'hadr' && getActiveHadrAudio()) ? getActiveHadrAudio() : audio;
        targetAudio.currentTime = miniSeekSlider.value;
        if (activeMiniEngine === 'main' && isPlaying) {
          audio.play().catch(() => {});
        }
      });
    }

    // 10. Speed Control
    speedSelect.addEventListener('change', () => {
      audio.playbackRate = parseFloat(speedSelect.value);
      showToast(`تغيير سرعة القراءة إلى ${speedSelect.value}x`);
    });

    // 11. Volume & Mute
    volumeSlider.addEventListener('input', () => {
      const vol = volumeSlider.value;
      audio.volume = vol / 100;
      volumeVal.innerText = `${vol}%`;
      localStorage.setItem('quran_volume', vol);
      updateVolumeIcon(vol);
    });

    btnMute.addEventListener('click', () => {
      if (audio.muted) {
        audio.muted = false;
        updateVolumeIcon(volumeSlider.value);
        showToast('إلغاء كتم الصوت');
      } else {
        audio.muted = true;
        volumeIcon.className = 'fa-solid fa-volume-xmark';
        showToast('تم كتم الصوت');
      }
    });

    // 12. Audio Ended Event
    audio.addEventListener('ended', () => {
      // Record Surah completion for Khatma tracker
      const completedId = SURAHS[currentIndex].id;
      if (!listenedSurahs.includes(completedId)) {
        listenedSurahs.push(completedId);
        localStorage.setItem('quran_listened_surahs', JSON.stringify(listenedSurahs));
        updateKhatmaDashboard();
      }

      // Check if Sleep Timer is set to "end of surah"
      if (sleepTimerMode === 'end') {
        setSleepTimer(0);
        pauseAudio();
        setNatureAmbience('none');
        showToast('انتهت السورة وتم إيقاف المشغل تلقائياً حسب مؤقت النوم');
        return;
      }

      if (repeatMode === 'repeat-one') {
        audio.currentTime = 0;
        playAudio();
      } else if (repeatMode === 'repeat-all') {
        nextSurah();
      } else {
        if (currentIndex < SURAHS.length - 1) {
          nextSurah();
        } else {
          pauseAudio();
          audio.currentTime = 0;
        }
      }
    });

    // 13. Search Input & Segmented 2-Tab Search Mode (Surahs vs Full Quran Verses)
    const setSearchMode = (mode) => {
      searchMode = mode;
      const activeSearchTabClass = 'flex-1 py-1.5 px-2.5 rounded-lg text-[11px] font-bold transition-all bg-amber-500 text-slate-900 shadow flex items-center justify-center gap-1.5';
      const inactiveSearchTabClass = 'flex-1 py-1.5 px-2.5 rounded-lg text-[11px] font-semibold transition-all text-[var(--text-secondary)] hover:text-amber-400 flex items-center justify-center gap-1.5';

      if (mode === 'ayahs') {
        if (searchTabAyahs) searchTabAyahs.className = activeSearchTabClass;
        if (searchTabSurahs) searchTabSurahs.className = inactiveSearchTabClass;
        searchInput.placeholder = 'اكتب كلمة للبحث في آيات القرآن الكريم كاملاً (مثل: الصبر، السكينة)...';
        showToast('تم تفعيل البحث الشامل في آيات القرآن الكريم (6236 آية)');
        if (searchQuery.trim().length >= 2) {
          performFullQuranAyahSearch(searchQuery.trim());
        }
      } else {
        if (searchTabSurahs) searchTabSurahs.className = activeSearchTabClass;
        if (searchTabAyahs) searchTabAyahs.className = inactiveSearchTabClass;
        searchInput.placeholder = 'ابحث باسم السورة أو رقمها...';
        renderPlaylist();
      }
    };

    if (searchTabSurahs) searchTabSurahs.addEventListener('click', () => setSearchMode('surahs'));
    if (searchTabAyahs) searchTabAyahs.addEventListener('click', () => setSearchMode('ayahs'));

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchQuery) {
        searchClear.classList.remove('hidden');
      } else {
        searchClear.classList.add('hidden');
      }

      if (searchMode === 'ayahs') {
        clearTimeout(ayahSearchTimer);
        if (searchQuery.trim().length < 2) {
          renderPlaylist();
          return;
        }
        ayahSearchTimer = setTimeout(() => {
          performFullQuranAyahSearch(searchQuery.trim());
        }, 400);
      } else {
        renderPlaylist();
      }
    });

    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClear.classList.add('hidden');
      renderPlaylist();
      searchInput.focus();
    });

    // 14. Playlist Filter Tabs
    const filterTabs = [
      { elem: tabAll, id: 'all' },
      { elem: tabFavorites, id: 'favorites' }
    ];

    filterTabs.forEach(({ elem, id }) => {
      if (!elem) return;
      elem.addEventListener('click', () => {
        if (currentTab === id) return;
        currentTab = id;

        filterTabs.forEach(f => {
          if (!f.elem) return;
          if (f.id === currentTab) {
            f.elem.className = 'filter-tab px-2 py-1 rounded-xl font-semibold transition-all duration-200 bg-amber-500/15 text-amber-400 border border-amber-500/25 flex-shrink-0 flex items-center gap-1';
          } else {
            f.elem.className = 'filter-tab px-2 py-1 rounded-xl font-semibold transition-all duration-200 text-[var(--text-secondary)] hover:bg-emerald-500/10 flex-shrink-0 flex items-center gap-1';
          }
        });

        renderPlaylist();
      });
    });

    // 15. Reciter Selector Change
    reciterSelect.addEventListener('change', () => {
      currentReciterId = reciterSelect.value;
      localStorage.setItem('quran_reciter', currentReciterId);
      
      updateHeaderSubtitle();
      
      // Preserve current position safely
      const currentPos = audio.currentTime;
      loadSurah(SURAHS[currentIndex], isPlaying);
      
      const onMetadataLoaded = () => {
        if (currentPos && currentPos < audio.duration) {
          audio.currentTime = currentPos;
        }
        audio.removeEventListener('loadedmetadata', onMetadataLoaded);
      };
      audio.addEventListener('loadedmetadata', onMetadataLoaded);
      
      renderPlaylist();

      const reciter = RECITERS.find(r => r.id === currentReciterId);
      showToast(`تم تغيير القارئ إلى ${reciter.name}`);
    });

    // 18. Favorite Button on Player
    btnPlayerFav.addEventListener('click', () => {
      toggleFavorite(SURAHS[currentIndex].id);
    });

    // 19. Share Button
    btnShare.addEventListener('click', () => {
      const activeSurah = SURAHS[currentIndex];
      const shareUrl = `${window.location.origin}${window.location.pathname}?surah=${activeSurah.id}`;
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast(`تم نسخ رابط سورة ${activeSurah.name} للمشاركة`);
        }).catch(() => {
          prompt('رابط سورة ' + activeSurah.name, shareUrl);
        });
      } else {
        prompt('رابط سورة ' + activeSurah.name, shareUrl);
      }
    });

    // 20. Download Mp3 Button (Lowest-data mirror selection + Parallel Range + Offline Cache)
    btnDownload.addEventListener('click', downloadCurrentSurah);

    // 21. Keyboard & TV Remote Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          if (isPlaying) pauseAudio(); else playAudio();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextSurah();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSurah();
          break;
        case 'ArrowUp':
          e.preventDefault();
          volumeSlider.value = Math.min(100, parseInt(volumeSlider.value) + 5);
          volumeSlider.dispatchEvent(new Event('input'));
          break;
        case 'ArrowDown':
          e.preventDefault();
          volumeSlider.value = Math.max(0, parseInt(volumeSlider.value) - 5);
          volumeSlider.dispatchEvent(new Event('input'));
          break;
        case 'KeyM':
          btnMute.click();
          break;
        case 'KeyF':
          toggleFavorite(SURAHS[currentIndex].id);
          break;
        case 'Escape':
          if (playerToolsModal) playerToolsModal.classList.add('hidden');
          if (mushafOptionsModal) mushafOptionsModal.classList.add('hidden');
          if (memorialOptionsModal) memorialOptionsModal.classList.add('hidden');
          break;
      }
    });

    // Early click hydration replay if user interacts before idle load finishes
    ['btn-open-reciter-modal', 'btn-bg-scene', 'btn-bg-scene-mobile', 'btn-sleep-ambience',
      'btn-player-radio', 'btn-header-radio', 'btn-open-player-tools', 'btn-player-memorize', 'btn-ab-loop',
      'btn-spatial-settings'].forEach(btnId => {
      const el = document.getElementById(btnId);
      if (!el) return;
      el.addEventListener('click', (e) => {
        if (!secondaryReady) {
          e.stopImmediatePropagation();
          ensureSecondaryLoaded(() => el.click());
        }
      });
    });
    const svcBtn = document.getElementById('btn-services-menu');
    if (svcBtn) svcBtn.addEventListener('click', () => { if (!secondaryReady) ensureSecondaryLoaded(); });

    // V4.1 Instant Core Controls (Work immediately at first paint without waiting for secondary DOM)
    initSpatialAudioQuickControls();
    initTabletImmersionController();
  }

  function attachSecondaryListeners() {
    if (mushafBtnPlayAudio) {
      mushafBtnPlayAudio.addEventListener('click', () => {
        if (isPlaying) pauseAudio(); else playAudio();
      });
    }
    if (mushafSurahSelect) {
      mushafSurahSelect.addEventListener('change', () => {
        const selectedId = parseInt(mushafSurahSelect.value);
        const idx = SURAHS.findIndex(s => s.id === selectedId);
        if (idx !== -1) {
          currentIndex = idx;
          loadSurah(SURAHS[currentIndex], isPlaying);
        }
      });
    }
    if (mushafZoomIn) {
      mushafZoomIn.addEventListener('click', () => {
        mushafFontSize = Math.min(220, mushafFontSize + 15);
        localStorage.setItem('quran_mushaf_font_size', mushafFontSize);
        applyMushafFontSize();
      });
    }
    if (mushafZoomOut) {
      mushafZoomOut.addEventListener('click', () => {
        mushafFontSize = Math.max(70, mushafFontSize - 15);
        localStorage.setItem('quran_mushaf_font_size', mushafFontSize);
        applyMushafFontSize();
      });
    }
    if (mushafZoomReset) {
      mushafZoomReset.addEventListener('click', () => {
        mushafFontSize = 100;
        localStorage.setItem('quran_mushaf_font_size', mushafFontSize);
        applyMushafFontSize();
        showToast('تمت استعادة حجم الخط الافتراضي');
      });
    }
    if (mushafBasmala) {
      mushafBasmala.addEventListener('click', () => {
        if (isMemorizationMode) {
          audio.currentTime = 0;
          if (!isPlaying) playAudio();
          updateLiveMushafAyahHover(true);
          showToast('تلاوة الاستفتاح: بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ');
        }
      });
    }
  }

  // ==========================================================================
  // V2.0 ENGINE: AYAH STUDIO, A-B LOOP, SLEEP/AMBIENCE, LIVE RADIO & SPIRITUAL HUB
  // ==========================================================================
  let currentStudioContext = null;

  function initV2Features() {
    window.showPlatformToast = showToast;

    // 1. Jump to Khatma Bookmark buttons
    const handleJumpToBookmark = () => {
      if (!khatmaBookmark) {
        showToast('لم تقم بحفظ فاصل قراءة بعد. انقر على أي آية في المصحف ثم اختر (وصلت إلى هنا).', 'info');
        switchView('mushaf');
        return;
      }
      const idx = SURAHS.findIndex(s => s.id === khatmaBookmark.surahId);
      if (idx !== -1) {
        currentIndex = idx;
        loadSurah(SURAHS[currentIndex], isPlaying);
      }
      switchView('mushaf');
      loadSurahMushaf(khatmaBookmark.surahId, khatmaBookmark.ayahNum);
      showToast(`تم الانتقال إلى فاصل الختمة: سورة ${khatmaBookmark.surahName} - الآية ${khatmaBookmark.ayahNum}`);
    };

    if (mushafBtnGotoBookmark) mushafBtnGotoBookmark.addEventListener('click', handleJumpToBookmark);
    const spBtnJumpBookmark = document.getElementById('sp-btn-jump-bookmark');
    if (spBtnJumpBookmark) spBtnJumpBookmark.addEventListener('click', handleJumpToBookmark);

    // 2. A-B Memorization Loop Button
    if (btnAbLoop) {
      btnAbLoop.addEventListener('click', cycleAbLoop);
    }

    // 3. Sleep Timer & Nature Ambience Modal
    const sleepModal = document.getElementById('sleep-ambience-modal');
    const btnCloseSleepModal = document.getElementById('btn-close-sleep-modal');
    if (btnSleepAmbience && sleepModal) {
      btnSleepAmbience.addEventListener('click', () => sleepModal.classList.remove('hidden'));
    }
    if (btnCloseSleepModal && sleepModal) {
      btnCloseSleepModal.addEventListener('click', () => sleepModal.classList.add('hidden'));
      sleepModal.addEventListener('click', (e) => {
        if (e.target === sleepModal) sleepModal.classList.add('hidden');
      });
    }

    document.querySelectorAll('.sleep-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-sleep-min');
        setSleepTimer(val === 'end' ? 'end' : parseInt(val));
      });
    });

    document.querySelectorAll('.ambience-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-ambience');
        setNatureAmbience(type);
        document.querySelectorAll('.ambience-opt-btn').forEach(b => {
          if (b.getAttribute('data-ambience') === type) {
            b.className = 'ambience-opt-btn py-2 px-1 rounded-xl bg-amber-500/20 border border-amber-500/35 text-amber-400 font-bold text-center transition-all';
          } else {
            b.className = 'ambience-opt-btn py-2 px-1 rounded-xl bg-emerald-950/60 border border-emerald-500/20 text-[var(--text-secondary)] hover:text-amber-400 font-semibold text-center transition-all';
          }
        });
      });
    });

    const ambVolSlider = document.getElementById('ambience-volume-slider');
    const ambVolVal = document.getElementById('ambience-volume-val');
    if (ambVolSlider) {
      ambVolSlider.addEventListener('input', () => {
        ambienceVolume = parseInt(ambVolSlider.value) / 100;
        if (ambVolVal) ambVolVal.innerText = `${ambVolSlider.value}%`;
        if (ambienceGainNode && audioCtx) {
          ambienceGainNode.gain.setTargetAtTime(ambienceVolume * 0.25, audioCtx.currentTime, 0.1);
        }
      });
    }

    // 3b. Slow-Motion Nature Video Background & Soft Audio Controller (V4.0)
    initAmbientBgController();
    initSpatialAudioModalControls();

    // 4. 24/7 Live Quran Radio Modal
    const radioModal = document.getElementById('radio-modal');
    const btnCloseRadioModal = document.getElementById('btn-close-radio-modal');
    const openRadio = () => {
      renderRadioStations();
      if (radioModal) radioModal.classList.remove('hidden');
    };
    if (btnHeaderRadio) btnHeaderRadio.addEventListener('click', openRadio);
    if (btnPlayerRadio) btnPlayerRadio.addEventListener('click', openRadio);
    if (btnCloseRadioModal && radioModal) {
      btnCloseRadioModal.addEventListener('click', () => radioModal.classList.add('hidden'));
      radioModal.addEventListener('click', (e) => {
        if (e.target === radioModal) radioModal.classList.add('hidden');
      });
    }

    // 5. Interactive Ayah Studio Modal Events
    const studioModal = document.getElementById('ayah-studio-modal');
    const btnCloseStudio = document.getElementById('btn-close-ayah-studio');
    if (btnCloseStudio && studioModal) {
      btnCloseStudio.addEventListener('click', closeAyahStudio);
      studioModal.addEventListener('click', (e) => {
        if (e.target === studioModal) closeAyahStudio();
      });
    }

    const studioBtnPlay = document.getElementById('studio-btn-play-ayah');
    if (studioBtnPlay) {
      studioBtnPlay.addEventListener('click', () => {
        if (!currentStudioContext) return;
        toggleSingleAyahAudio(currentStudioContext.globalAyah);
      });
    }

    const studioBtnBookmark = document.getElementById('studio-btn-bookmark');
    if (studioBtnBookmark) {
      studioBtnBookmark.addEventListener('click', () => {
        if (!currentStudioContext) return;
        khatmaBookmark = {
          surahId: currentStudioContext.surahId,
          surahName: currentStudioContext.surahName,
          ayahNum: currentStudioContext.ayahNum,
          timestamp: Date.now()
        };
        localStorage.setItem('quran_khatma_bookmark', JSON.stringify(khatmaBookmark));
        updateKhatmaDashboard();
        // Refresh highlight in Mushaf
        document.querySelectorAll('.ayah-text').forEach(el => el.classList.remove('ayah-bookmarked'));
        const activeEl = document.getElementById(`mushaf-ayah-${currentStudioContext.ayahNum}`);
        if (activeEl) activeEl.classList.add('ayah-bookmarked');
        showToast(`تم حفظ فاصل الختمة عند سورة ${currentStudioContext.surahName} - الآية ${currentStudioContext.ayahNum}`);
      });
    }

    const studioBtnCopy = document.getElementById('studio-btn-copy');
    if (studioBtnCopy) {
      studioBtnCopy.addEventListener('click', () => {
        if (!currentStudioContext) return;
        const tafsirText = document.getElementById('studio-tafsir-box')?.innerText || '';
        const payload = `﴿${currentStudioContext.text}﴾ [سورة ${currentStudioContext.surahName}: ${currentStudioContext.ayahNum}]\n\nالتفسير: ${tafsirText}`;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(payload).then(() => {
            showToast('تم نسخ الآية الكريمة مع تفسيرها');
          });
        }
      });
    }

    const studioBtnCard = document.getElementById('studio-btn-download-card');
    if (studioBtnCard) {
      studioBtnCard.addEventListener('click', () => {
        if (!currentStudioContext) return;
        generateAyahImageCard(currentStudioContext.surahName, currentStudioContext.ayahNum, currentStudioContext.text);
      });
    }

    const studioBtnVideo = document.getElementById('studio-btn-video');
    if (studioBtnVideo) {
      studioBtnVideo.addEventListener('click', () => {
        if (!currentStudioContext) return;
        const ctxSurah = currentStudioContext.surahId;
        const ctxAyah = currentStudioContext.ayahNum;
        closeAyahStudio();
        ensureVideoStudioLoaded(() => {
          if (typeof window.openVideoStudio === 'function') {
            window.openVideoStudio(ctxSurah, ctxAyah);
          } else {
            switchView('video');
          }
        });
      });
    }

    document.querySelectorAll('.tafsir-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!currentStudioContext) return;
        const edition = btn.getAttribute('data-tafsir');
        document.querySelectorAll('.tafsir-tab-btn').forEach(b => {
          if (b.getAttribute('data-tafsir') === edition) {
            b.className = 'tafsir-tab-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30';
          } else {
            b.className = 'tafsir-tab-btn px-3 py-1.5 rounded-xl text-xs font-bold text-[var(--text-secondary)] hover:text-amber-400 bg-emerald-950/40';
          }
        });
        fetchAyahTafsir(currentStudioContext.surahId, currentStudioContext.ayahNum, edition);
      });
    });

    // Single Ayah Audio Ended Handler
    if (ayahSingleAudio) {
      ayahSingleAudio.addEventListener('ended', () => {
        const repeatCheck = document.getElementById('studio-repeat-ayah');
        if (repeatCheck && repeatCheck.checked) {
          ayahSingleAudio.currentTime = 0;
          ayahSingleAudio.play().catch(() => {});
        } else {
          const icon = document.getElementById('studio-play-icon');
          const lbl = document.getElementById('studio-play-label');
          if (icon) icon.className = 'fa-solid fa-play';
          if (lbl) lbl.innerText = 'استماع للآية';
        }
      });
    }

    // 6. Smart Memorization Mode & Live Reciter Ayah Hover Controls
    const activateMemorizationInMushaf = () => {
      isMemorizationMode = true;
      localStorage.setItem('quran_memorize_mode', 'true');
      updateMemorizationModeUI();
      switchView('mushaf');
      if (!isPlaying && !isRadioMode) {
        playAudio();
      }
      showToast('تم تفعيل وضع التحفيظ والتتبع الحي للآيات مع القارئ');
    };

    if (btnPlayerMemorize) {
      btnPlayerMemorize.addEventListener('click', activateMemorizationInMushaf);
    }
    if (btnDockMemorize) {
      btnDockMemorize.addEventListener('click', activateMemorizationInMushaf);
    }

    if (btnToggleMemorizeMode) {
      btnToggleMemorizeMode.addEventListener('click', () => {
        isMemorizationMode = !isMemorizationMode;
        localStorage.setItem('quran_memorize_mode', isMemorizationMode ? 'true' : 'false');
        updateMemorizationModeUI();
        if (isMemorizationMode) {
          showToast('تم تفعيل وضع التحفيظ — سيتم تتبع الآية التي يقرؤها الشيخ تلقائياً');
          if (!isPlaying && !isRadioMode) {
            playAudio();
          }
        } else {
          showToast('تم إيقاف وضع التحفيظ والتتبع الحي للآيات', 'info');
        }
      });
    }

    if (memorizeRepeatSelect) {
      memorizeRepeatSelect.addEventListener('change', () => {
        memorizeRepeatTarget = parseInt(memorizeRepeatSelect.value) || 1;
        currentAyahRepeatCount = 1;
        if (!isMemorizationMode && memorizeRepeatTarget > 1) {
          isMemorizationMode = true;
          localStorage.setItem('quran_memorize_mode', 'true');
          updateMemorizationModeUI();
        }
        const label = memorizeRepeatTarget === 99 ? 'تكرار مستمر للآية' : `${memorizeRepeatTarget} مرات لكل آية`;
        showToast(`تم ضبط تكرار التحفيظ: ${label}`);
      });
    }

    if (btnMemorizeBlur) {
      btnMemorizeBlur.addEventListener('click', () => {
        isMemorizeBlur = !isMemorizeBlur;
        if (isMemorizeBlur) {
          if (!isMemorizationMode) {
            isMemorizationMode = true;
            localStorage.setItem('quran_memorize_mode', 'true');
            updateMemorizationModeUI();
          }
          mushafContent.classList.add('mushaf-memorize-blur');
          btnMemorizeBlur.className = 'px-2.5 py-1.5 rounded-xl bg-amber-500 text-slate-900 font-bold text-[11px] flex items-center gap-1.5 transition-all shadow';
          showToast('تم تفعيل اختبار الحفظ (تمويه النص) — الآية التي يتلوها القارئ أو تلمسها تظهر بوضوح');
        } else {
          mushafContent.classList.remove('mushaf-memorize-blur');
          btnMemorizeBlur.className = 'px-2.5 py-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/20 text-[var(--text-secondary)] hover:text-amber-400 font-semibold text-[11px] flex items-center gap-1.5 transition-all';
          showToast('تم إظهار نص المصحف بالكامل', 'info');
        }
      });
    }

    // V3.0 Inline Tafsir & Translation Selectors (Desktop + Mobile)
    const inlineTafsirSelect = document.getElementById('mushaf-inline-tafsir-select');
    const mInlineTafsirSelect = document.getElementById('m-options-inline-tafsir-select');
    [inlineTafsirSelect, mInlineTafsirSelect].forEach(sel => {
      if (!sel) return;
      sel.value = mushafInlineTafsirEdition;
      sel.addEventListener('change', (e) => {
        mushafInlineTafsirEdition = e.target.value;
        localStorage.setItem('quran_inline_tafsir', mushafInlineTafsirEdition);
        if (inlineTafsirSelect) inlineTafsirSelect.value = mushafInlineTafsirEdition;
        if (mInlineTafsirSelect) mInlineTafsirSelect.value = mushafInlineTafsirEdition;
        if (mushafCache[currentMushafSurahId]) {
          renderMushafVerses(mushafCache[currentMushafSurahId]);
        }
        const labelMap = {
          'none': 'تم تفعيل وضع المصحف الصافي بدون حواشٍ',
          'ar.muyassar': 'تم عرض التفسير الميسر تحت آيات المصحف',
          'ar.jalalayn': 'تم عرض تفسير الجلالين تحت آيات المصحف',
          'ar.waseet': 'تم عرض التفسير الوسيط تحت آيات المصحف',
          'en.sahih': 'تم عرض الترجمة الإنجليزية تحت آيات المصحف'
        };
        showToast(labelMap[mushafInlineTafsirEdition] || 'تم تحديث وضع العرض');
      });
    });

    // V3.0 Hifz Self-Test Mode Selectors (Desktop + Mobile)
    const hifzModeSelect = document.getElementById('mushaf-hifz-mode-select');
    const mHifzModeSelect = document.getElementById('m-options-hifz-mode-select');
    [hifzModeSelect, mHifzModeSelect].forEach(sel => {
      if (!sel) return;
      sel.value = mushafHifzMode;
      sel.addEventListener('change', (e) => {
        mushafHifzMode = e.target.value;
        hifzRevealedCount = 0;
        if (hifzModeSelect) hifzModeSelect.value = mushafHifzMode;
        if (mHifzModeSelect) mHifzModeSelect.value = mushafHifzMode;
        const scoreBadge = document.getElementById('mushaf-hifz-score-badge');
        const scoreText = document.getElementById('mushaf-hifz-score-text');
        if (scoreBadge) {
          if (mushafHifzMode === 'off') {
            scoreBadge.classList.add('hidden');
            scoreBadge.classList.remove('flex');
          } else {
            scoreBadge.classList.remove('hidden');
            scoreBadge.classList.add('flex');
          }
        }
        if (scoreText) scoreText.innerText = 'تم تسميع: 0';
        if (mushafCache[currentMushafSurahId]) {
          renderMushafVerses(mushafCache[currentMushafSurahId]);
        }
        const hifzLabels = {
          'off': 'تم إظهار نص المصحف بالكامل',
          'full': 'تم إخفاء الآيات بالكامل — انقر على أي آية لكشفها والتأكد من حفظك',
          'endings': 'اختبار خواتيم الآيات مفعل — انقر على الآية لكشف خاتمتها',
          'starts': 'اختبار بدايات الآيات مفعل — انقر على الآية لكشف مطلعها'
        };
        showToast(hifzLabels[mushafHifzMode] || 'تم تحديث وضع الاختبار');
      });
    });

    if (btnMemorizeOpenStudio) {
      btnMemorizeOpenStudio.addEventListener('click', () => {
        const surahData = mushafCache[currentMushafSurahId];
        if (!surahData || !surahData.ayahs) return;
        const targetNum = activeHoverAyahNum || 1;
        const ayahObj = surahData.ayahs.find(a => a.numberInSurah === targetNum) || surahData.ayahs[0];
        if (ayahObj) {
          const surahObj = SURAHS.find(s => s.id === surahData.number) || { name: surahData.name };
          let cleanText = ayahObj.text;
          if (surahData.number !== 1 && ayahObj.numberInSurah === 1) {
            cleanText = cleanText.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '').trim();
          }
          openAyahStudio(surahData.number, surahObj.name, ayahObj.numberInSurah, ayahObj.number, cleanText);
        }
      });
    }

    updateMemorizationModeUI();

    // 7. Initialize Spiritual Companion Hub (Mood Compass, Azkar, Sebha, Khatma)
    initSpiritualCompanionHub();

    // 8. Initialize Memorial & Ongoing Charity Engine (صدقة جارية ودعاء للمتوفي)
    initMemorialEngine();

    // 9. Initialize Mobile Compact Options Popups Engine
    initMobileModals();
  }

  // ==========================================================================
  // Mobile Compact View & Single Options Popups Engine
  // ==========================================================================
  function initMobileModals() {
    // Helper to open / close player tools modal
    const openPlayerTools = () => {
      if (!playerToolsModal) return;
      if (mToolAbLabel && abLoopLabel) mToolAbLabel.innerText = abLoopLabel.innerText;
      if (mToolFavIcon) {
        const isFav = favorites.includes(SURAHS[currentIndex].id);
        mToolFavIcon.className = isFav ? 'fa-solid fa-heart block mb-1 text-sm text-red-500' : 'fa-regular fa-heart block mb-1 text-sm text-red-400';
      }
      playerToolsModal.classList.remove('hidden');
    };
    const closePlayerTools = () => {
      if (playerToolsModal) playerToolsModal.classList.add('hidden');
    };

    if (btnOpenPlayerTools) btnOpenPlayerTools.addEventListener('click', openPlayerTools);
    if (btnClosePlayerTools) btnClosePlayerTools.addEventListener('click', closePlayerTools);
    if (playerToolsModal) {
      playerToolsModal.addEventListener('click', (e) => {
        if (e.target === playerToolsModal) closePlayerTools();
      });
    }

    const mToolVideo = document.getElementById('m-tool-video');
    if (mToolVideo) {
      mToolVideo.addEventListener('click', () => {
        closePlayerTools();
        switchView('video');
      });
    }

    if (mToolMemorize) {
      mToolMemorize.addEventListener('click', () => {
        closePlayerTools();
        isMemorizationMode = true;
        localStorage.setItem('quran_memorize_mode', 'true');
        updateMemorizationModeUI();
        switchView('mushaf');
        if (!isPlaying && !isRadioMode) playAudio();
        showToast('تم تفعيل وضع التحفيظ والتتبع الحي للآيات مع القارئ');
      });
    }

    if (mToolAbLoop) {
      mToolAbLoop.addEventListener('click', () => {
        cycleAbLoop();
        if (mToolAbLabel && abLoopLabel) mToolAbLabel.innerText = abLoopLabel.innerText;
      });
    }

    if (mToolSleep) {
      mToolSleep.addEventListener('click', () => {
        closePlayerTools();
        const sleepModal = document.getElementById('sleep-ambience-modal');
        if (sleepModal) sleepModal.classList.remove('hidden');
      });
    }

    const mToolBgScene = document.getElementById('m-tool-bg-scene');
    if (mToolBgScene) {
      mToolBgScene.addEventListener('click', () => {
        closePlayerTools();
        const bgModal = document.getElementById('bg-scene-modal');
        if (bgModal) bgModal.classList.remove('hidden');
      });
    }

    const mToolSpatial = document.getElementById('m-tool-spatial');
    if (mToolSpatial) {
      mToolSpatial.addEventListener('click', () => {
        closePlayerTools();
        const spModal = document.getElementById('spatial-audio-modal');
        if (spModal) {
          syncSpatialAudioUI();
          spModal.classList.remove('hidden');
        } else {
          toggleSpatialAudio();
        }
      });
    }

    if (mToolRadio) {
      mToolRadio.addEventListener('click', () => {
        closePlayerTools();
        renderRadioStations();
        const radioModal = document.getElementById('radio-modal');
        if (radioModal) radioModal.classList.remove('hidden');
      });
    }

    if (mToolFav) {
      mToolFav.addEventListener('click', () => {
        toggleFavorite(SURAHS[currentIndex].id);
        if (mToolFavIcon) {
          const isFav = favorites.includes(SURAHS[currentIndex].id);
          mToolFavIcon.className = isFav ? 'fa-solid fa-heart block mb-1 text-sm text-red-500' : 'fa-regular fa-heart block mb-1 text-sm text-red-400';
        }
      });
    }

    if (mToolShare) {
      mToolShare.addEventListener('click', () => {
        closePlayerTools();
        btnShare.click();
      });
    }

    if (mToolDownload) {
      mToolDownload.addEventListener('click', () => {
        closePlayerTools();
        btnDownload.click();
      });
    }

    // Helper to open / close Mushaf Options Bottom Sheet
    const openMushafOptions = () => {
      if (!mushafOptionsModal) return;
      if (mOptionsSurahSelect) mOptionsSurahSelect.value = currentMushafSurahId;
      if (mOptionsFontLabel) mOptionsFontLabel.innerText = `${mushafFontSize}%`;
      if (mOptionsRepeatSelect) mOptionsRepeatSelect.value = memorizeRepeatTarget.toString();
      if (mOptionsBookmarkText) {
        if (khatmaBookmark) {
          mOptionsBookmarkText.innerText = `سورة ${khatmaBookmark.surahName} : آية ${khatmaBookmark.ayahNum}`;
        } else {
          mOptionsBookmarkText.innerText = 'لا يوجد فاصل';
        }
      }
      if (mOptionsToggleMemorize) {
        mOptionsToggleMemorize.innerText = isMemorizationMode ? 'مفعل' : 'معطل';
        mOptionsToggleMemorize.className = isMemorizationMode
          ? 'py-1.5 px-3 rounded-xl font-bold text-xs bg-amber-500 text-slate-900 active:scale-95 shadow transition-all'
          : 'py-1.5 px-3 rounded-xl font-bold text-xs bg-emerald-950/80 text-gray-400 border border-emerald-500/20 active:scale-95 transition-all';
      }
      mushafOptionsModal.classList.remove('hidden');
    };
    const closeMushafOptions = () => {
      if (mushafOptionsModal) mushafOptionsModal.classList.add('hidden');
    };

    if (btnOpenMushafOptions) btnOpenMushafOptions.addEventListener('click', openMushafOptions);
    if (btnCloseMushafOptions) btnCloseMushafOptions.addEventListener('click', closeMushafOptions);
    if (mushafOptionsModal) {
      mushafOptionsModal.addEventListener('click', (e) => {
        if (e.target === mushafOptionsModal) closeMushafOptions();
      });
    }

    if (mOptionsSurahSelect) {
      mOptionsSurahSelect.addEventListener('change', (e) => {
        const sid = parseInt(e.target.value);
        if (mushafSurahSelect) mushafSurahSelect.value = sid;
        loadSurahMushaf(sid);
        closeMushafOptions();
      });
    }

    if (mOptionsBtnJumpBookmark) {
      mOptionsBtnJumpBookmark.addEventListener('click', () => {
        closeMushafOptions();
        if (mushafBtnGotoBookmark) mushafBtnGotoBookmark.click();
      });
    }

    if (mOptionsZoomIn) {
      mOptionsZoomIn.addEventListener('click', () => {
        mushafFontSize = Math.min(220, mushafFontSize + 15);
        localStorage.setItem('quran_mushaf_font_size', mushafFontSize);
        applyMushafFontSize();
      });
    }

    if (mOptionsZoomOut) {
      mOptionsZoomOut.addEventListener('click', () => {
        mushafFontSize = Math.max(70, mushafFontSize - 15);
        localStorage.setItem('quran_mushaf_font_size', mushafFontSize);
        applyMushafFontSize();
      });
    }

    if (mOptionsZoomReset) {
      mOptionsZoomReset.addEventListener('click', () => {
        mushafFontSize = 100;
        localStorage.setItem('quran_mushaf_font_size', mushafFontSize);
        applyMushafFontSize();
        showToast('تمت استعادة حجم الخط الافتراضي');
      });
    }

    if (mOptionsToggleMemorize) {
      mOptionsToggleMemorize.addEventListener('click', () => {
        if (btnToggleMemorizeMode) btnToggleMemorizeMode.click();
      });
    }

    if (mOptionsRepeatSelect) {
      mOptionsRepeatSelect.addEventListener('change', (e) => {
        memorizeRepeatTarget = parseInt(e.target.value) || 1;
        currentAyahRepeatCount = 1;
        if (memorizeRepeatSelect) memorizeRepeatSelect.value = memorizeRepeatTarget.toString();
        if (!isMemorizationMode && memorizeRepeatTarget > 1) {
          isMemorizationMode = true;
          localStorage.setItem('quran_memorize_mode', 'true');
          updateMemorizationModeUI();
        }
        const label = memorizeRepeatTarget === 99 ? 'تكرار مستمر للآية' : `${memorizeRepeatTarget} مرات لكل آية`;
        showToast(`تم ضبط تكرار التحفيظ: ${label}`);
      });
    }

    if (mOptionsBtnBlur) {
      mOptionsBtnBlur.addEventListener('click', () => {
        closeMushafOptions();
        if (btnMemorizeBlur) btnMemorizeBlur.click();
      });
    }

    if (mOptionsBtnStudio) {
      mOptionsBtnStudio.addEventListener('click', () => {
        closeMushafOptions();
        if (btnMemorizeOpenStudio) btnMemorizeOpenStudio.click();
      });
    }

    // Play/Pause button in mobile Mushaf topbar
    if (mMushafBtnPlay) {
      mMushafBtnPlay.addEventListener('click', () => {
        if (currentIndex !== currentMushafSurahId - 1) {
          const surah = SURAHS.find(s => s.id === currentMushafSurahId);
          if (surah) {
            currentIndex = SURAHS.indexOf(surah);
            loadSurah(surah, true);
          }
        } else {
          togglePlayPause();
        }
      });
    }

    // Helper to open / close Memorial Options Bottom Sheet
    const openMemorialOptions = () => {
      if (!memorialOptionsModal) return;
      if (mOptSoundIcon && mOptSoundText) {
        mOptSoundIcon.className = isTasbeehSoundEnabled ? 'fa-solid fa-volume-high text-amber-400' : 'fa-solid fa-volume-xmark text-gray-400';
        mOptSoundText.innerText = isTasbeehSoundEnabled ? 'صوت النقر: مفعل' : 'صوت النقر: صامت';
      }
      memorialOptionsModal.classList.remove('hidden');
    };
    const closeMemorialOptions = () => {
      if (memorialOptionsModal) memorialOptionsModal.classList.add('hidden');
    };

    if (btnOpenMemorialOptions) btnOpenMemorialOptions.addEventListener('click', openMemorialOptions);
    if (btnCloseMemorialOptions) btnCloseMemorialOptions.addEventListener('click', closeMemorialOptions);
    if (memorialOptionsModal) {
      memorialOptionsModal.addEventListener('click', (e) => {
        if (e.target === memorialOptionsModal) closeMemorialOptions();
      });
    }

    if (mOptBtnEditMemorial) {
      mOptBtnEditMemorial.addEventListener('click', () => {
        closeMemorialOptions();
        openMemorialModal();
      });
    }

    if (mOptBtnCopyLink) {
      mOptBtnCopyLink.addEventListener('click', () => {
        closeMemorialOptions();
        shareMemorialLink('copy');
      });
    }

    if (mOptBtnWhatsapp) {
      mOptBtnWhatsapp.addEventListener('click', () => {
        closeMemorialOptions();
        shareMemorialLink('whatsapp');
      });
    }

    if (mOptBtnDownloadCard) {
      mOptBtnDownloadCard.addEventListener('click', () => {
        closeMemorialOptions();
        generateMemorialCard();
      });
    }

    if (mOptBtnToggleSound) {
      mOptBtnToggleSound.addEventListener('click', () => {
        toggleMemorialSound();
        if (mOptSoundIcon && mOptSoundText) {
          mOptSoundIcon.className = isTasbeehSoundEnabled ? 'fa-solid fa-volume-high text-amber-400' : 'fa-solid fa-volume-xmark text-gray-400';
          mOptSoundText.innerText = isTasbeehSoundEnabled ? 'صوت النقر: مفعل' : 'صوت النقر: صامت';
        }
      });
    }

    if (mOptBtnResetRound) {
      mOptBtnResetRound.addEventListener('click', () => {
        closeMemorialOptions();
        memorialRoundCounter = 0;
        if (memorialRoundCount) memorialRoundCount.innerText = '0';
        triggerHapticFeedback(15);
        showToast('تم تصفير عداد الدورة الحالية للتسبيح');
      });
    }
  }

  // --- Smart Memorization & Live Reciter Ayah Hover Engine ---
  function getQdcReciterId(reciterId) {
    const map = {
      hussary: 6,
      minshawi: 9,
      minshawi_mojawwad: 8,
      abdulbasit: 2,
      abdulbasit_mojawwad: 1,
      alafasy: 7,
      sudais: 3
    };
    return map[reciterId] || 6;
  }

  function loadSurahTimestamps(surahId) {
    const qdcId = getQdcReciterId(currentReciterId);
    const cacheKey = `${qdcId}_${surahId}`;
    if (surahTimestampsCache[cacheKey]) return;

    const stored = localStorage.getItem(`quran_ts_${cacheKey}`);
    if (stored) {
      try {
        surahTimestampsCache[cacheKey] = JSON.parse(stored);
        return;
      } catch (e) {}
    }

    fetch(`https://api.quran.com/api/v4/chapter_recitations/${qdcId}/${surahId}?segments=false`)
      .then(res => res.json())
      .then(json => {
        const tsList = json && json.audio_file && json.audio_file.timestamps;
        if (Array.isArray(tsList) && tsList.length > 0) {
          const totalMs = tsList[tsList.length - 1].timestamp_to || 1;
          const normalized = tsList.map((ts, idx) => {
            const ayahNum = parseInt((ts.verse_key || '').split(':')[1]) || (idx + 1);
            return {
              ayahNum,
              startRatio: idx === 0 ? 0 : Math.max(0, ts.timestamp_from / totalMs),
              endRatio: Math.min(1, ts.timestamp_to / totalMs)
            };
          });
          surahTimestampsCache[cacheKey] = normalized;
          try {
            localStorage.setItem(`quran_ts_${cacheKey}`, JSON.stringify(normalized));
          } catch (e) {}
          if (isMemorizationMode && currentView === 'mushaf') {
            updateLiveMushafAyahHover();
          }
        }
      })
      .catch(() => {});
  }

  function getSurahVerseRatios(surahId) {
    const surahData = mushafCache[surahId];
    if (!surahData || !Array.isArray(surahData.ayahs) || surahData.ayahs.length === 0) {
      return [];
    }
    const ayahs = surahData.ayahs;
    const isAlFatihah = surahId === 1;
    const isAtTawbah = surahId === 9;
    const hasIntroBasmala = !isAlFatihah && !isAtTawbah;

    const weights = ayahs.map(a => Math.max(18, (a.text || '').length + 14));
    const totalAyahWeight = weights.reduce((acc, w) => acc + w, 0) || 1;

    // Calculate introductory Basmala time slice for Surahs 2..114 (except 9)
    // Audio reciters spend ~5.5 - 7.0 seconds reciting the Basmala before Ayah 1.
    let basmalaRatio = 0;
    if (hasIntroBasmala) {
      const dur = audio && audio.duration && !isNaN(audio.duration) && isFinite(audio.duration) && audio.duration > 0
        ? audio.duration
        : null;
      if (dur) {
        basmalaRatio = Math.min(0.26, 6.2 / dur);
      } else {
        const basmalaWeight = 55;
        basmalaRatio = basmalaWeight / (totalAyahWeight + basmalaWeight);
      }
    }

    const ratios = [];
    if (hasIntroBasmala) {
      ratios.push({
        ayahNum: 0, // 0 represents the introductory Basmala
        startRatio: 0,
        endRatio: basmalaRatio
      });
    }

    let cumulative = 0;
    const remainingRatio = 1 - basmalaRatio;
    ayahs.forEach((a, idx) => {
      const startRatio = basmalaRatio + (cumulative / totalAyahWeight) * remainingRatio;
      cumulative += weights[idx];
      const endRatio = basmalaRatio + (cumulative / totalAyahWeight) * remainingRatio;
      ratios.push({
        ayahNum: a.numberInSurah,
        startRatio,
        endRatio: idx === ayahs.length - 1 ? 1 : endRatio
      });
    });

    return ratios;
  }

  function clearLiveMushafAyahHover() {
    if (mushafBasmala) {
      mushafBasmala.classList.remove('ayah-live-reading-hover');
    }
    if (!mushafContent) return;
    mushafContent.querySelectorAll('.ayah-live-reading-hover').forEach(el => {
      el.classList.remove('ayah-live-reading-hover');
    });
    mushafContent.querySelectorAll('.ayah-badge-live').forEach(el => {
      el.classList.remove('ayah-badge-live');
    });
  }

  function updateMemorizationModeUI() {
    if (isMemorizationMode) {
      if (memorizeStatusDot) {
        memorizeStatusDot.className = 'w-2 h-2 rounded-full bg-amber-400 animate-ping';
      }
      if (memorizeModeLabel) {
        memorizeModeLabel.innerText = 'وضع التحفيظ والتتبع الحي: مفعل';
      }
      if (btnToggleMemorizeMode) {
        btnToggleMemorizeMode.className = 'px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300 font-bold text-xs flex items-center gap-2 transition-all shadow-md';
      }
      if (memorizeLiveAyahBadge) {
        memorizeLiveAyahBadge.classList.remove('hidden');
        memorizeLiveAyahBadge.classList.add('flex');
      }
      if (btnMemorizeOpenStudio) {
        btnMemorizeOpenStudio.classList.remove('hidden');
        btnMemorizeOpenStudio.classList.add('flex');
      }
      if (btnPlayerMemorize) {
        btnPlayerMemorize.classList.add('border-amber-400', 'bg-amber-500/20');
      }
      if (btnDockMemorize) {
        btnDockMemorize.classList.add('border-amber-400', 'bg-amber-500/20');
      }
      if (mOptionsToggleMemorize) {
        mOptionsToggleMemorize.innerText = 'مفعل';
        mOptionsToggleMemorize.className = 'py-1.5 px-3 rounded-xl font-bold text-xs bg-amber-500 text-slate-900 active:scale-95 shadow transition-all';
      }
      loadSurahTimestamps(SURAHS[currentIndex].id);
      if (currentView === 'mushaf') {
        setTimeout(() => updateLiveMushafAyahHover(true), 60);
      }
    } else {
      if (memorizeStatusDot) {
        memorizeStatusDot.className = 'w-2 h-2 rounded-full bg-slate-500 transition-all';
      }
      if (memorizeModeLabel) {
        memorizeModeLabel.innerText = 'تفعيل وضع التحفيظ والتتبع الحي';
      }
      if (btnToggleMemorizeMode) {
        btnToggleMemorizeMode.className = 'px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/25 text-[var(--text-secondary)] hover:text-amber-400 font-bold text-xs flex items-center gap-2 transition-all shadow-sm';
      }
      if (memorizeLiveAyahBadge) {
        memorizeLiveAyahBadge.classList.add('hidden');
        memorizeLiveAyahBadge.classList.remove('flex');
      }
      if (btnMemorizeOpenStudio) {
        btnMemorizeOpenStudio.classList.add('hidden');
        btnMemorizeOpenStudio.classList.remove('flex');
      }
      if (btnPlayerMemorize) {
        btnPlayerMemorize.classList.remove('border-amber-400', 'bg-amber-500/20');
      }
      if (btnDockMemorize) {
        btnDockMemorize.classList.remove('border-amber-400', 'bg-amber-500/20');
      }
      if (mOptionsToggleMemorize) {
        mOptionsToggleMemorize.innerText = 'معطل';
        mOptionsToggleMemorize.className = 'py-1.5 px-3 rounded-xl font-bold text-xs bg-emerald-950/80 text-gray-400 border border-emerald-500/20 active:scale-95 transition-all';
      }
      clearLiveMushafAyahHover();
      if (isMemorizeBlur && mushafContent) {
        isMemorizeBlur = false;
        mushafContent.classList.remove('mushaf-memorize-blur');
        if (btnMemorizeBlur) {
          btnMemorizeBlur.className = 'px-2.5 py-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/20 text-[var(--text-secondary)] hover:text-amber-400 font-semibold text-[11px] flex items-center gap-1.5 transition-all';
        }
      }
    }
  }

  function updateLiveMushafAyahHover(forceScroll = false) {
    if (!isMemorizationMode || currentView !== 'mushaf' || isRadioMode) return;
    const playingSurah = SURAHS[currentIndex];
    if (!playingSurah || currentMushafSurahId !== playingSurah.id) return;

    const ratios = getSurahVerseRatios(playingSurah.id);
    if (!ratios || ratios.length === 0) return;

    let targetAyahNum = ratios[0].ayahNum;
    const dur = audio.duration;
    if (dur && !isNaN(dur) && isFinite(dur) && dur > 0) {
      const progressRatio = Math.min(1, Math.max(0, audio.currentTime / dur));
      const matched = ratios.find(r => progressRatio >= r.startRatio && progressRatio <= r.endRatio) || ratios[ratios.length - 1];
      if (matched) {
        targetAyahNum = matched.ayahNum;
      }

      // Per-Ayah Repetition Check when moving from activeHoverAyahNum to the next Ayah
      const isDragging = seekSlider && seekSlider.classList.contains('user-dragging');
      if (
        !isDragging &&
        isPlaying &&
        memorizeRepeatTarget > 1 &&
        activeHoverAyahNum !== null &&
        targetAyahNum === activeHoverAyahNum + 1
      ) {
        if (memorizeRepeatTarget === 99 || currentAyahRepeatCount < memorizeRepeatTarget) {
          const prevRatioObj = ratios.find(r => r.ayahNum === activeHoverAyahNum);
          if (prevRatioObj) {
            if (memorizeRepeatTarget !== 99) {
              currentAyahRepeatCount++;
            }
            audio.currentTime = Math.max(0, prevRatioObj.startRatio * dur + 0.05);
            targetAyahNum = activeHoverAyahNum;
          }
        } else {
          currentAyahRepeatCount = 1;
        }
      } else if (activeHoverAyahNum !== null && targetAyahNum !== activeHoverAyahNum) {
        currentAyahRepeatCount = 1;
      }
    }

    // Handle Ayah 0 (Introductory Basmala in Surahs 2..114)
    if (targetAyahNum === 0) {
      const changedAyah = activeHoverAyahNum !== 0 || (mushafBasmala && !mushafBasmala.classList.contains('ayah-live-reading-hover'));
      if (changedAyah) {
        clearLiveMushafAyahHover();
        if (mushafBasmala) {
          mushafBasmala.classList.add('ayah-live-reading-hover');
        }
        activeHoverAyahNum = 0;
        if (forceScroll || isPlaying) {
          mushafBasmala?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      if (memorizeLiveAyahText) {
        const repeatSuffix = memorizeRepeatTarget > 1
          ? ` • تكرار (${memorizeRepeatTarget === 99 ? '∞' : `${currentAyahRepeatCount}/${memorizeRepeatTarget}`})`
          : '';
        memorizeLiveAyahText.innerText = `تلاوة الاستفتاح: بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ${repeatSuffix}`;
      }
      return;
    }

    const ayahEl = document.getElementById(`mushaf-ayah-${targetAyahNum}`);
    const badgeEl = document.getElementById(`mushaf-badge-${targetAyahNum}`);
    if (!ayahEl) return;

    const changedAyah = activeHoverAyahNum !== targetAyahNum || !ayahEl.classList.contains('ayah-live-reading-hover');
    if (changedAyah) {
      clearLiveMushafAyahHover();
      ayahEl.classList.add('ayah-live-reading-hover');
      if (badgeEl) badgeEl.classList.add('ayah-badge-live');
      activeHoverAyahNum = targetAyahNum;

      if (forceScroll || isPlaying) {
        ayahEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    if (memorizeLiveAyahText) {
      const repeatSuffix = memorizeRepeatTarget > 1
        ? ` • تكرار (${memorizeRepeatTarget === 99 ? '∞' : `${currentAyahRepeatCount}/${memorizeRepeatTarget}`})`
        : '';
      memorizeLiveAyahText.innerText = `${isPlaying ? 'القارئ يتلو الآن:' : 'الآية المحددة:'} آية ${targetAyahNum} من ${playingSurah.versesCount}${repeatSuffix}`;
    }
  }

  function seekReciterToAyah(surahId, ayahNum) {
    const idx = SURAHS.findIndex(s => s.id === surahId);
    if (idx !== -1 && currentIndex !== idx) {
      currentIndex = idx;
      loadSurah(SURAHS[currentIndex], true);
    }

    const ratios = getSurahVerseRatios(surahId);
    const targetRatioObj = ratios.find(r => r.ayahNum === ayahNum);
    activeHoverAyahNum = ayahNum;
    currentAyahRepeatCount = 1;

    const applySeek = () => {
      if (targetRatioObj && audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        audio.currentTime = Math.max(0, targetRatioObj.startRatio * audio.duration + 0.05);
      }
      if (!isPlaying) {
        playAudio();
      }
      updateLiveMushafAyahHover(true);
    };

    if (audio.readyState >= 1 && audio.duration) {
      applySeek();
    } else {
      const onMeta = () => {
        audio.removeEventListener('loadedmetadata', onMeta);
        applySeek();
      };
      audio.addEventListener('loadedmetadata', onMeta);
      if (!isPlaying) playAudio();
      updateLiveMushafAyahHover(true);
    }

    showToast(`انتقال القارئ لتلاوة الآية (${ayahNum}) — اضغط "تفسير الآية" بالأعلى لعرض التفسير`);
  }

  // --- Full-Text Quran Ayah Search ---
  function performFullQuranAyahSearch(query) {
    playlistContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center py-14 text-center text-slate-400">
        <i class="fa-solid fa-circle-notch animate-spin text-2xl mb-2 text-amber-500"></i>
        <p class="text-xs">جاري البحث في آيات القرآن الكريم عن "${query}"...</p>
      </div>
    `;

    fetch(`https://api.alquran.cloud/v1/search/${encodeURIComponent(query)}/all/quran-simple-clean`)
      .then(res => res.json())
      .then(json => {
        const matches = (json && json.data && json.data.matches) ? json.data.matches : [];
        if (matches.length === 0) {
          playlistContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400 glass-panel rounded-2xl p-4">
              <i class="fa-solid fa-book-open text-3xl mb-2 text-amber-500/60"></i>
              <p class="text-xs font-bold mb-1">لم يتم العثور على آيات مطابقة لـ "${query}"</p>
              <p class="text-[11px] text-slate-400">جرب كتابة كلمة مفردة بدون تشكيل مثل: الصبر، الجنة، السكينة</p>
            </div>
          `;
          return;
        }

        playlistContainer.innerHTML = `<div class="mb-2 px-2 text-[11px] text-amber-400 font-bold">تم العثور على ${matches.length} آية قرآنية (تُعرض أول 40 نتيجة):</div>`;
        matches.slice(0, 40).forEach(m => {
          const surahNum = m.surah.number;
          const surahObj = SURAHS.find(s => s.id === surahNum) || { id: surahNum, name: m.surah.name };
          const card = document.createElement('div');
          card.className = 'surah-card p-3 rounded-2xl mb-2 cursor-pointer space-y-1.5';
          card.innerHTML = `
            <div class="flex items-center justify-between text-[11px]">
              <span class="font-bold text-amber-400">سورة ${surahObj.name} • الآية ${m.numberInSurah}</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300">فتح في المصحف</span>
            </div>
            <p class="font-quran-text text-sm text-[var(--text-primary)] leading-relaxed">${m.text}</p>
          `;
          card.addEventListener('click', () => {
            const idx = SURAHS.findIndex(s => s.id === surahNum);
            if (idx !== -1) {
              currentIndex = idx;
              loadSurah(SURAHS[currentIndex], isPlaying);
            }
            switchView('mushaf');
            loadSurahMushaf(surahNum, m.numberInSurah);
          });
          playlistContainer.appendChild(card);
        });
      })
      .catch(() => {
        playlistContainer.innerHTML = `
          <div class="p-4 text-center text-xs text-slate-400">تعذر إجراء البحث في الآيات حالياً.</div>
        `;
      });
  }

  // --- Interactive Ayah Studio Functions ---
  function openAyahStudio(surahId, surahName, ayahNum, globalAyah, text) {
    currentStudioContext = { surahId, surahName, ayahNum, globalAyah, text };
    const modal = document.getElementById('ayah-studio-modal');
    if (!modal) return;

    document.getElementById('studio-ayah-badge').innerText = ayahNum;
    document.getElementById('studio-surah-title').innerText = `سورة ${surahName} - الآية ${ayahNum}`;
    document.getElementById('studio-ayah-text').innerText = `﴿ ${text} ﴾`;

    const icon = document.getElementById('studio-play-icon');
    const lbl = document.getElementById('studio-play-label');
    if (icon) icon.className = 'fa-solid fa-play';
    if (lbl) lbl.innerText = 'استماع للآية';

    modal.classList.remove('hidden');

    // Reset active tafsir tab to ar.muyassar
    document.querySelectorAll('.tafsir-tab-btn').forEach(b => {
      if (b.getAttribute('data-tafsir') === 'ar.muyassar') {
        b.className = 'tafsir-tab-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30';
      } else {
        b.className = 'tafsir-tab-btn px-3 py-1.5 rounded-xl text-xs font-bold text-[var(--text-secondary)] hover:text-amber-400 bg-emerald-950/40';
      }
    });

    fetchAyahTafsir(surahId, ayahNum, 'ar.muyassar');
  }

  function closeAyahStudio() {
    const modal = document.getElementById('ayah-studio-modal');
    if (modal) modal.classList.add('hidden');
    if (ayahSingleAudio && !ayahSingleAudio.paused) {
      ayahSingleAudio.pause();
    }
  }

  function fetchAyahTafsir(surahId, ayahNum, edition = 'ar.muyassar') {
    const box = document.getElementById('studio-tafsir-box');
    if (!box) return;
    const key = `${surahId}:${ayahNum}:${edition}`;
    if (tafsirCache[key]) {
      box.innerText = tafsirCache[key];
      box.dir = edition.startsWith('en') ? 'ltr' : 'rtl';
      return;
    }

    box.innerHTML = `<span class="text-slate-400 text-xs"><i class="fa-solid fa-circle-notch animate-spin ml-1 text-amber-400"></i> جاري جلب التفسير...</span>`;
    fetch(`https://api.alquran.cloud/v1/ayah/${surahId}:${ayahNum}/${edition}`)
      .then(res => res.json())
      .then(json => {
        if (json && json.data && json.data.text) {
          tafsirCache[key] = json.data.text;
          box.dir = edition.startsWith('en') ? 'ltr' : 'rtl';
          box.innerText = json.data.text;
        } else {
          box.innerText = 'التفسير غير متوفر حالياً.';
        }
      })
      .catch(() => {
        box.innerText = 'تعذر تحميل التفسير، يرجى التحقق من الاتصال بالإنترنت.';
      });
  }

  let singleAyahFallbackTried = false;
  function toggleSingleAyahAudio(globalAyah) {
    if (!ayahSingleAudio || !globalAyah) return;
    const icon = document.getElementById('studio-play-icon');
    const lbl = document.getElementById('studio-play-label');
    const primaryUrl = `https://cdn.islamic.network/quran/audio/128/ar.husary/${globalAyah}.mp3`;
    const fallbackUrl = `https://everyayah.com/data/Husary_128kbps/${String(currentStudioContext?.surahId || 1).padStart(3, '0')}${String(currentStudioContext?.ayahNum || 1).padStart(3, '0')}.mp3`;

    if (!ayahSingleAudio.paused && (ayahSingleAudio.src === primaryUrl || ayahSingleAudio.src === fallbackUrl)) {
      ayahSingleAudio.pause();
      if (icon) icon.className = 'fa-solid fa-play';
      if (lbl) lbl.innerText = 'استماع للآية';
      return;
    }

    if (isPlaying) pauseAudio();
    singleAyahFallbackTried = false;
    ayahSingleAudio.onerror = () => {
      if (!singleAyahFallbackTried && ayahSingleAudio.src !== fallbackUrl) {
        singleAyahFallbackTried = true;
        ayahSingleAudio.src = fallbackUrl;
        ayahSingleAudio.play().then(() => {
          if (icon) icon.className = 'fa-solid fa-pause';
          if (lbl) lbl.innerText = 'إيقاف الآية';
        }).catch(() => {
          showToast('تعذر تشغيل صوت الآية المنفردة حالياً', 'error');
        });
      } else {
        showToast('تعذر تشغيل صوت الآية المنفردة حالياً', 'error');
      }
    };
    ayahSingleAudio.src = primaryUrl;
    ayahSingleAudio.play().then(() => {
      if (icon) icon.className = 'fa-solid fa-pause';
      if (lbl) lbl.innerText = 'إيقاف الآية';
    }).catch(() => {
      if (!singleAyahFallbackTried) {
        ayahSingleAudio.onerror();
      }
    });
  }

  // --- High-Resolution Social Ayah Image Card Generator (HTML5 Canvas) ---
  function generateAyahImageCard(surahName, ayahNum, ayahText) {
    showToast('جاري تصميم البطاقة القرآنية بدقة عالية...');
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');

    // 1. Luxury Royal Emerald & Gold Radial Gradient Background
    const grad = ctx.createRadialGradient(540, 540, 80, 540, 540, 760);
    grad.addColorStop(0, '#064e3b');
    grad.addColorStop(0.6, '#022c22');
    grad.addColorStop(1, '#011510');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1080);

    // 2. Ornamental Double Golden Borders
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.55)';
    ctx.lineWidth = 4;
    ctx.strokeRect(48, 48, 984, 984);

    ctx.strokeStyle = 'rgba(251, 191, 36, 0.25)';
    ctx.lineWidth = 2;
    ctx.strokeRect(64, 64, 952, 952);

    // 3. Top Header Banner
    ctx.fillStyle = '#fbbf24';
    ctx.textAlign = 'center';
    ctx.direction = 'rtl';
    ctx.font = 'bold 38px Amiri, serif';
    ctx.fillText(`سُورَةُ ${surahName} • الآيَة ${toArabicNumerals(ayahNum)}`, 540, 150);

    // Basmala
    ctx.fillStyle = 'rgba(251, 191, 36, 0.75)';
    ctx.font = '32px Amiri, serif';
    ctx.fillText('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', 540, 220);

    // 4. Word-Wrapped Quranic Ayah Text in Center
    ctx.fillStyle = '#f8fafc';
    const fontSize = ayahText.length > 260 ? 36 : ayahText.length > 140 ? 44 : 52;
    ctx.font = `bold ${fontSize}px Amiri, serif`;

    const words = (`﴿ ${ayahText} ﴾`).split(' ');
    const lines = [];
    let currentLine = '';
    const maxWidth = 860;

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

    const lineHeight = fontSize * 1.75;
    const totalTextHeight = lines.length * lineHeight;
    let startY = Math.max(320, 560 - (totalTextHeight / 2));

    lines.forEach((line, idx) => {
      ctx.fillText(line, 540, startY + idx * lineHeight);
    });

    // 5. Footer Signature
    ctx.fillStyle = 'rgba(251, 191, 36, 0.8)';
    ctx.font = 'bold 28px Cairo, sans-serif';
    ctx.fillText('مَنْصَةُ القُرآنِ الكَرِيمِ', 540, 965);

    // Trigger PNG Download
    const link = document.createElement('a');
    link.download = `quran-surah-${surahName}-ayah-${ayahNum}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  // --- A-B Memorization Loop Logic ---
  function cycleAbLoop() {
    if (isRadioMode) {
      showToast('تكرار الحفظ (أ-ب) متاح أثناء تشغيل السور فقط', 'info');
      return;
    }
    if (abLoopState === 'off') {
      abLoopA = audio.currentTime;
      abLoopState = 'A';
      if (abLoopLabel) abLoopLabel.innerText = `أ: ${formatTime(abLoopA)} (حدد ب)`;
      btnAbLoop.classList.add('border-amber-400', 'text-amber-400');
      showToast(`تم تحديد بداية المقطع (أ) عند ${formatTime(abLoopA)} — انقر مرة أخرى لتحديد النهاية (ب)`);
    } else if (abLoopState === 'A') {
      if (audio.currentTime <= abLoopA + 1) {
        showToast('يرجى الانتظار ثوانٍ بعد النقطة (أ) لتحديد نهاية المقطع (ب)', 'info');
        return;
      }
      abLoopB = audio.currentTime;
      abLoopState = 'AB';
      if (abLoopLabel) abLoopLabel.innerText = `تكرار (${formatTime(abLoopA)}-${formatTime(abLoopB)})`;
      audio.currentTime = abLoopA;
      showToast(`تم تفعيل تكرار المقطع للحفظ من ${formatTime(abLoopA)} إلى ${formatTime(abLoopB)}`);
    } else {
      resetAbLoop(true);
    }
  }

  function resetAbLoop(notify = false) {
    abLoopState = 'off';
    abLoopA = 0;
    abLoopB = 0;
    if (abLoopLabel) abLoopLabel.innerText = 'تحفيظ أ-ب';
    if (btnAbLoop) btnAbLoop.classList.remove('border-amber-400', 'text-amber-400');
    if (notify) showToast('تم إيقاف تكرار المقطع (أ-ب)');
  }

  // --- Smart Sleep Timer with Smooth Volume Fade-Out ---
  function setSleepTimer(mode) {
    if (sleepIntervalId) {
      clearInterval(sleepIntervalId);
      sleepIntervalId = null;
    }
    const statusEl = document.getElementById('sleep-modal-status');

    if (!mode || mode === 0) {
      sleepTimerMode = null;
      sleepRemainingSec = 0;
      if (sleepTimerBadge) sleepTimerBadge.innerText = 'مؤقت / سكينة';
      if (statusEl) statusEl.innerText = 'غير مفعل';
      const savedVol = parseInt(localStorage.getItem('quran_volume') || '85') / 100;
      audio.volume = savedVol;
      showToast('تم إيقاف مؤقت النوم');
      return;
    }

    if (mode === 'end') {
      sleepTimerMode = 'end';
      if (sleepTimerBadge) sleepTimerBadge.innerText = 'نهاية السورة';
      if (statusEl) statusEl.innerText = 'يتوقف بنهاية السورة';
      showToast('سيتم إيقاف التلاوة تلقائياً فور انتهاء السورة الحالية');
      return;
    }

    sleepTimerMode = mode;
    sleepRemainingSec = mode * 60;
    const savedUserVol = audio.volume || 0.85;

    const updateTimerLabels = () => {
      const m = Math.floor(sleepRemainingSec / 60);
      const s = (sleepRemainingSec % 60).toString().padStart(2, '0');
      if (sleepTimerBadge) sleepTimerBadge.innerText = `${m}:${s}`;
      if (statusEl) statusEl.innerText = `متبقي ${m}:${s}`;
    };
    updateTimerLabels();
    showToast(`تم ضبط مؤقت النوم على ${mode} دقيقة مع خفض تدريجي للصوت`);

    sleepIntervalId = setInterval(() => {
      sleepRemainingSec--;
      if (sleepRemainingSec <= 10 && sleepRemainingSec > 0) {
        // Gentle 10-second audio fade-out
        audio.volume = Math.max(0.02, (sleepRemainingSec / 10) * savedUserVol);
      }
      if (sleepRemainingSec <= 0) {
        clearInterval(sleepIntervalId);
        sleepIntervalId = null;
        sleepTimerMode = null;
        pauseAudio();
        setNatureAmbience('none');
        audio.volume = savedUserVol;
        if (sleepTimerBadge) sleepTimerBadge.innerText = 'مؤقت / سكينة';
        if (statusEl) statusEl.innerText = 'انتهى المؤقت';
        showToast('تصبحون على خير وطمأنينة — تم إيقاف المشغل تلقائياً');
      } else {
        updateTimerLabels();
      }
    }, 1000);
  }

  // --- Deferred Calligraphy Fonts & Extra Icons (Zero startup blocking; loads smoothly after load or on demand) ---
  function ensureQuranFontsLoaded() {
    if (quranFontsRequested) return;
    quranFontsRequested = true;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Amiri:wght@400;700&display=swap';
    document.head.appendChild(link);
  }
  function ensureSecondaryIconsLoaded() {
    if (extraIconsRequested) return;
    extraIconsRequested = true;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/icons-extra.min.css?v=4.1';
    document.head.appendChild(link);
  }
  window.addEventListener('load', () => {
    setTimeout(() => {
      ensureSecondaryIconsLoaded();
      ensureQuranFontsLoaded();
    }, 450);
  });

  // --- Zero-Bandwidth Procedural Web Audio API Nature Ambience Generator ---
  function stopAmbienceNodes() {
    ambienceSourceNodes.forEach(node => {
      try { node.stop(); } catch (e) {}
      try { node.disconnect(); } catch (e) {}
    });
    ambienceSourceNodes = [];
  }

  function setNatureAmbience(type, scale = null, silent = false) {
    ambienceMode = type;
    stopAmbienceNodes();

    if (type === 'none') {
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      if (!silent) showToast('متصفحك لا يدعم توليد أصوات الطبيعة تلقائياً', 'error');
      return;
    }
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }

    // Create 6-second seamless pink/brown noise buffer (0 KB internet bandwidth)
    const bufferSize = audioCtx.sampleRate * 6;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = audioCtx.createBiquadFilter();
    ambienceGainNode = audioCtx.createGain();
    const targetGain = scale !== null ? scale : (ambienceVolume * 0.25);
    ambienceGainNode.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    ambienceGainNode.gain.linearRampToValueAtTime(Math.max(0.0005, targetGain), audioCtx.currentTime + 1.1);

    if (type === 'rain') {
      filter.type = 'bandpass';
      filter.frequency.value = 1100;
      filter.Q.value = 0.65;
      if (!silent) showToast('تم تشغيل خلفية صوت المطر الهادئ (بدون استهلاك إنترنت)');
    } else if (type === 'sea') {
      filter.type = 'lowpass';
      filter.frequency.value = 340;
      filter.Q.value = 0.7;
      // Slow ocean tide swell (9s calm wave period)
      const waveLfo = audioCtx.createOscillator();
      const waveFreqGain = audioCtx.createGain();
      const waveAmpGain = audioCtx.createGain();
      waveLfo.frequency.value = 0.11;
      waveFreqGain.gain.value = 210;
      waveAmpGain.gain.value = targetGain * 0.32;
      waveLfo.connect(waveFreqGain);
      waveFreqGain.connect(filter.frequency);
      waveLfo.connect(waveAmpGain);
      waveAmpGain.connect(ambienceGainNode.gain);
      waveLfo.start();
      ambienceSourceNodes.push(waveLfo);
      if (!silent) showToast('تم تشغيل صوت أمواج البحر الخفيف بالخلفية');
    } else if (type === 'trees' || type === 'breeze') {
      filter.type = 'lowpass';
      filter.frequency.value = type === 'trees' ? 520 : 420;
      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.value = 0.14;
      lfoGain.gain.value = 220;
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();
      ambienceSourceNodes.push(lfo);
      if (type === 'trees') {
        const leavesNoise = audioCtx.createBufferSource();
        leavesNoise.buffer = noiseBuffer;
        leavesNoise.loop = true;
        const leafBand = audioCtx.createBiquadFilter();
        leafBand.type = 'bandpass';
        leafBand.frequency.value = 2200;
        leafBand.Q.value = 1.2;
        const leafGain = audioCtx.createGain();
        leafGain.gain.value = 0.18;
        leavesNoise.connect(leafBand);
        leafBand.connect(leafGain);
        leafGain.connect(ambienceGainNode);
        leavesNoise.start();
        ambienceSourceNodes.push(leavesNoise);
      }
      if (!silent) showToast(type === 'trees' ? 'تم تشغيل صوت نسيم الأشجار الخفيف بالخلفية' : 'تم تشغيل خلفية نسيم الفجر الهادئ');
    } else if (type === 'night') {
      filter.type = 'lowpass';
      filter.frequency.value = 240;
      if (!silent) showToast('تم تشغيل خلفية سكون الليل العميق');
    }

    whiteNoise.connect(filter);
    filter.connect(ambienceGainNode);
    ambienceGainNode.connect(audioCtx.destination);
    whiteNoise.start();
    ambienceSourceNodes.push(whiteNoise);
  }

  // --- V4.1 Tablet / iPad Immersion Mode & Spatial Haram Surround Engine ---
  function isTabletDevice() {
    const ua = navigator.userAgent || '';
    const isIpadUA = /iPad|Tablet|PlayBook|Silk/i.test(ua);
    const isIpadOS = /Macintosh/i.test(ua) && (navigator.maxTouchPoints || 0) > 1;
    const isAndroidTablet = /Android/i.test(ua) && !/Mobile/i.test(ua);
    const w = window.innerWidth || 0;
    const h = window.innerHeight || 0;
    const minSide = Math.min(w, h);
    const maxSide = Math.max(w, h);
    const isCoarseTouch = (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) || (navigator.maxTouchPoints || 0) > 1;
    const isTouchTabletScreen = isCoarseTouch && minSide >= 580 && maxSide >= 800 && w >= 600 && w <= 1400;
    return Boolean(isIpadUA || isIpadOS || isAndroidTablet || isTouchTabletScreen);
  }
  window.isTabletDevice = isTabletDevice;

  function syncTabletImmersionPlayState() {
    const iconEl = document.getElementById('immersion-play-icon');
    const labelEl = document.getElementById('immersion-play-label');
    if (!iconEl || !labelEl) return;
    const hadrAudioEl = getActiveHadrAudio();
    const activePlaying = activeMiniEngine === 'hadr'
      ? Boolean(hadrAudioEl && !hadrAudioEl.paused)
      : Boolean(isPlaying || (audio && !audio.paused));
    iconEl.className = activePlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    labelEl.innerText = activePlaying ? 'إيقاف' : 'تشغيل';
  }

  function enterTabletImmersion() {
    if (activeBgSceneId === 'off' || !isTabletDevice()) return;
    clearTimeout(tabletRestoreTimer);
    document.body.classList.remove('tablet-immersion-restoring');
    document.body.classList.add('tablet-bg-immersion');
    tabletImmersionActive = true;
    const hud = document.getElementById('tablet-immersion-hud');
    if (hud) hud.setAttribute('aria-hidden', 'false');
    syncTabletImmersionPlayState();
  }
  window.enterTabletImmersion = enterTabletImmersion;

  function exitTabletImmersionWithTransition(hideBgAlso = true) {
    if (!tabletImmersionActive && !document.body.classList.contains('tablet-bg-immersion')) {
      if (hideBgAlso && activeBgSceneId !== 'off') {
        setAmbientBackgroundScene('off', { persist: true, silent: true });
      }
      return;
    }
    clearTimeout(tabletRestoreTimer);
    tabletImmersionActive = false;
    const hud = document.getElementById('tablet-immersion-hud');
    if (hud) hud.setAttribute('aria-hidden', 'true');
    // Staggered one-by-one smooth restore transition back to player view and controls
    document.body.classList.add('tablet-immersion-restoring');
    document.body.classList.remove('tablet-bg-immersion');
    if (hideBgAlso && activeBgSceneId !== 'off') {
      setTimeout(() => {
        setAmbientBackgroundScene('off', { persist: true, silent: false });
      }, 140);
    }
    tabletRestoreTimer = setTimeout(() => {
      document.body.classList.remove('tablet-immersion-restoring');
    }, 1350);
  }
  window.exitTabletImmersionWithTransition = exitTabletImmersionWithTransition;

  function initTabletImmersionController() {
    const btnPlay = document.getElementById('btn-immersion-play');
    const btnHideBg = document.getElementById('btn-immersion-hide-bg');
    if (btnPlay) {
      btnPlay.addEventListener('click', () => {
        if (activeMiniEngine === 'hadr') {
          const hadrAudioEl = getActiveHadrAudio();
          if (!hadrAudioEl || !hadrAudioEl.getAttribute('src')) {
            playHadrSurah(currentHadrSurahId, true);
          } else if (hadrAudioEl.paused) {
            if (spatialGraphReady && audioCtx && audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
            hadrAudioEl.play().catch(() => {});
          } else {
            hadrAudioEl.pause();
          }
        } else {
          togglePlayPause();
        }
        syncTabletImmersionPlayState();
      });
    }
    if (btnHideBg) {
      btnHideBg.addEventListener('click', () => {
        exitTabletImmersionWithTransition(true);
      });
    }
    syncTabletImmersionPlayState();
  }

  function ensureSharedAudioCtx() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  function isCorsAudioUrlKnownSafe(url) {
    if (!url) return false;
    if (url.startsWith('blob:') || url.startsWith('data:')) return true;
    try {
      const u = new URL(url, window.location.href);
      if (u.origin === window.location.origin) return true;
      return CORS_SAFE_AUDIO_HOSTS.some(h => u.hostname === h || u.hostname.endsWith('.' + h));
    } catch (e) {
      return false;
    }
  }

  async function probeCorsAudioSupport(url) {
    if (!url) return false;
    if (spatialCorsCache.has(url)) return spatialCorsCache.get(url);
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const tid = controller ? setTimeout(() => controller.abort(), 2400) : null;
    try {
      const resp = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { Range: 'bytes=0-1' },
        signal: controller ? controller.signal : undefined
      });
      const ok = resp.ok || resp.status === 206;
      spatialCorsCache.set(url, ok);
      return ok;
    } catch (e) {
      spatialCorsCache.set(url, false);
      return false;
    } finally {
      if (tid) clearTimeout(tid);
    }
  }

  function prepareElementCorsForSpatial(el, url) {
    if (!el || !url) return;
    if (spatialEnabled || spatialSourceMap.has(el)) {
      el.crossOrigin = 'anonymous';
    } else if (el.hasAttribute('crossorigin')) {
      el.removeAttribute('crossorigin');
    }
  }

  const SPATIAL_PROFILE_CFG = {
    gentle: { label: 'مسجد هادئ',  duration: 1.75, decay: 3.1, preDelayMs: 18, wetMult: 0.62, haloMult: 0.24 },
    haram:  { label: 'رحاب الحرم', duration: 2.75, decay: 2.4, preDelayMs: 22, wetMult: 0.96, haloMult: 0.36 },
    grand:  { label: 'قبة واسعة',  duration: 3.60, decay: 1.9, preDelayMs: 28, wetMult: 1.24, haloMult: 0.44 }
  };

  function createSpatialImpulseBuffer(ctx, profileKey = 'haram') {
    const cfg = SPATIAL_PROFILE_CFG[profileKey] || SPATIAL_PROFILE_CFG.haram;
    const rate = ctx.sampleRate || 44100;
    const length = Math.max(rate, Math.floor(rate * cfg.duration));
    const buffer = ctx.createBuffer(2, length, rate);
    const preDelaySamples = Math.floor(rate * (cfg.preDelayMs / 1000));

    // Stereo decorrelated early reflection timings (non-rotating stationary acoustic chamber)
    const earlyL = [19, 27, 37, 48, 61, 74, 89, 105];
    const earlyR = [23, 31, 42, 54, 67, 81, 96, 112];

    for (let ch = 0; ch < 2; ch++) {
      const data = buffer.getChannelData(ch);
      const reflections = ch === 0 ? earlyL : earlyR;
      reflections.forEach((ms, idx) => {
        const tapPos = Math.floor(rate * (ms / 1000));
        if (tapPos < length) {
          const sign = (idx + ch) % 2 === 0 ? 1 : -1;
          data[tapPos] += sign * (0.28 * Math.pow(0.84, idx));
        }
      });

      let lp = 0;
      const tailLen = Math.max(1, length - preDelaySamples);
      for (let i = preDelaySamples; i < length; i++) {
        const progress = (i - preDelaySamples) / tailLen;
        const env = Math.pow(1 - progress, cfg.decay);
        const smoothAttack = Math.min(1, (i - preDelaySamples) / Math.max(1, rate * 0.045));
        const dampCoeff = 0.62 + progress * 0.28; // Progressively warmer tail like marble/domes
        const white = (Math.random() * 2 - 1) * 0.11;
        lp = lp * dampCoeff + white * (1 - dampCoeff);
        data[i] += lp * env * smoothAttack;
      }
    }
    return buffer;
  }

  function ensureSpatialGraphReady() {
    const ctx = ensureSharedAudioCtx();
    if (!ctx) return false;
    if (!spatialGraphReady) {
      spatialInputBus = ctx.createGain();
      spatialDryGain = ctx.createGain();
      spatialWetGain = ctx.createGain();
      spatialHaloGain = ctx.createGain();
      spatialDryGain.gain.value = 1.0;
      spatialWetGain.gain.value = 0.0001;
      spatialHaloGain.gain.value = 0.0001;

      const wetHP = ctx.createBiquadFilter();
      wetHP.type = 'highpass';
      wetHP.frequency.value = 150;

      const wetLP = ctx.createBiquadFilter();
      wetLP.type = 'lowpass';
      wetLP.frequency.value = 4600;

      spatialConvolver = ctx.createConvolver();
      spatialConvolver.normalize = true;
      spatialConvolver.buffer = createSpatialImpulseBuffer(ctx, spatialProfile);

      // Stationary Stereo Haas Envelopment (no left-right spinning)
      const splitter = ctx.createChannelSplitter(2);
      const merger = ctx.createChannelMerger(2);
      const delayL = ctx.createDelay(0.1);
      const delayR = ctx.createDelay(0.1);
      delayL.delayTime.value = 0.013;
      delayR.delayTime.value = 0.019;
      const crossLP = ctx.createBiquadFilter();
      crossLP.type = 'lowpass';
      crossLP.frequency.value = 2800;

      spatialMasterLimiter = ctx.createDynamicsCompressor();
      spatialMasterLimiter.threshold.value = -2.0;
      spatialMasterLimiter.knee.value = 8.0;
      spatialMasterLimiter.ratio.value = 4.0;
      spatialMasterLimiter.attack.value = 0.004;
      spatialMasterLimiter.release.value = 0.14;

      spatialInputBus.connect(spatialDryGain);
      spatialDryGain.connect(spatialMasterLimiter);

      spatialInputBus.connect(wetHP);
      wetHP.connect(wetLP);
      wetLP.connect(spatialConvolver);
      spatialConvolver.connect(spatialWetGain);
      spatialWetGain.connect(spatialMasterLimiter);

      wetLP.connect(splitter);
      splitter.connect(delayL, 0);
      splitter.connect(delayR, 1);
      delayR.connect(merger, 0, 0);
      delayL.connect(merger, 0, 1);
      merger.connect(crossLP);
      crossLP.connect(spatialHaloGain);
      spatialHaloGain.connect(spatialMasterLimiter);

      spatialMasterLimiter.connect(ctx.destination);
      spatialGraphReady = true;
    }
    return true;
  }

  function applySpatialGains(enabled) {
    if (!spatialGraphReady || !audioCtx) return;
    const now = audioCtx.currentTime;
    const cfg = SPATIAL_PROFILE_CFG[spatialProfile] || SPATIAL_PROFILE_CFG.haram;
    const depth = Math.max(0.2, Math.min(0.9, spatialWetLevel / 100));
    const dryTarget = enabled ? 0.85 : 1.0;
    const wetTarget = enabled ? Math.max(0.05, depth * cfg.wetMult) : 0.0001;
    const haloTarget = enabled ? Math.max(0.02, depth * cfg.haloMult) : 0.0001;

    spatialDryGain.gain.cancelScheduledValues(now);
    spatialWetGain.gain.cancelScheduledValues(now);
    spatialHaloGain.gain.cancelScheduledValues(now);
    spatialDryGain.gain.setValueAtTime(spatialDryGain.gain.value, now);
    spatialWetGain.gain.setValueAtTime(spatialWetGain.gain.value, now);
    spatialHaloGain.gain.setValueAtTime(spatialHaloGain.gain.value, now);
    spatialDryGain.gain.linearRampToValueAtTime(dryTarget, now + 0.34);
    spatialWetGain.gain.linearRampToValueAtTime(wetTarget, now + 0.38);
    spatialHaloGain.gain.linearRampToValueAtTime(haloTarget, now + 0.38);
  }

  async function attachMediaElementToSpatialGraph(el) {
    if (!el) return false;
    const curSrc = el.getAttribute('src') || '';
    if (curSrc && !curSrc.startsWith('blob:') && !curSrc.startsWith('data:')) {
      let corsOk = isCorsAudioUrlKnownSafe(curSrc);
      if (!corsOk) corsOk = await probeCorsAudioSupport(curSrc);
      if (!corsOk) return false;
      if (el.crossOrigin !== 'anonymous') {
        const wasPlaying = !el.paused;
        const savedPos = (isFinite(el.currentTime) && el.currentTime > 0.2) ? el.currentTime : 0;
        const savedRate = el.playbackRate || 1.0;
        el.crossOrigin = 'anonymous';
        if (savedPos > 0) {
          if (el === audio) pendingResumeTime = savedPos;
          const onMeta = () => {
            try { el.currentTime = savedPos; } catch (e) {}
          };
          el.addEventListener('loadedmetadata', onMeta, { once: true });
        }
        el.src = curSrc;
        el.playbackRate = savedRate;
        if (wasPlaying) el.play().catch(() => {});
      }
    } else if (curSrc && curSrc.startsWith('blob:') && el.crossOrigin !== 'anonymous') {
      el.crossOrigin = 'anonymous';
    }

    if (!ensureSpatialGraphReady()) return false;
    if (!spatialSourceMap.has(el)) {
      try {
        const srcNode = audioCtx.createMediaElementSource(el);
        srcNode.connect(spatialInputBus);
        spatialSourceMap.set(el, srcNode);
      } catch (e) {
        return false;
      }
    }
    return true;
  }

  function syncSpatialAudioUI() {
    const btn = document.getElementById('btn-spatial-audio');
    const lbl = document.getElementById('spatial-btn-label');
    const gear = document.getElementById('btn-spatial-settings');
    const mBadge = document.getElementById('m-tool-spatial-badge');
    const mToggle = document.getElementById('spatial-modal-enable-toggle');
    const wetSlider = document.getElementById('spatial-wet-slider');
    const wetLabel = document.getElementById('spatial-wet-label');

    if (btn) {
      btn.setAttribute('aria-pressed', spatialEnabled ? 'true' : 'false');
      btn.classList.toggle('spatial-active', spatialEnabled);
    }
    if (lbl) lbl.innerText = spatialEnabled ? 'محيطي • مفعل' : 'صوت محيطي';
    if (gear) {
      gear.classList.toggle('hidden', !spatialEnabled);
      gear.classList.toggle('inline-flex', spatialEnabled);
    }
    if (mBadge) {
      mBadge.innerText = spatialEnabled ? 'مفعل' : 'معطل';
      mBadge.className = spatialEnabled
        ? 'text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/35'
        : 'text-[9px] px-1.5 py-0.5 rounded bg-emerald-950 text-[var(--text-secondary)] border border-emerald-500/25';
    }
    if (mToggle) mToggle.checked = spatialEnabled;
    if (wetSlider) wetSlider.value = String(spatialWetLevel);
    if (wetLabel) wetLabel.innerText = `${spatialWetLevel}%`;

    document.querySelectorAll('.spatial-profile-card').forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-spatial-profile') === spatialProfile);
    });
  }

  async function setSpatialAudioEnabled(enable, { silent = false } = {}) {
    if (!enable) {
      spatialEnabled = false;
      syncSpatialAudioUI();
      applySpatialGains(false);
      if (!silent) showToast('تم إيقاف الصوت المحيطي والعودة للصوت المباشر');
      return;
    }

    const hadrEl = getActiveHadrAudio();
    const targets = [];
    if (audio && audio.getAttribute('src')) targets.push(audio);
    if (hadrEl && hadrEl.getAttribute('src')) targets.push(hadrEl);

    if (!ensureSpatialGraphReady()) {
      if (!silent) showToast('متصفحك لا يدعم معالجة الصوت المحيطي', 'error');
      return;
    }

    let attachedCount = 0;
    for (const el of targets) {
      if (await attachMediaElementToSpatialGraph(el)) attachedCount++;
    }
    if (targets.length === 0) {
      await attachMediaElementToSpatialGraph(audio);
      attachedCount = 1;
    }

    if (attachedCount === 0) {
      spatialEnabled = false;
      syncSpatialAudioUI();
      if (!silent) showToast('هذا البث المباشر لا يسمح بالمعالجة المحيطية وسيستمر بالصوت النقي العادي', 'info');
      return;
    }

    spatialEnabled = true;
    syncSpatialAudioUI();
    applySpatialGains(true);
    if (!silent) {
      const profName = (SPATIAL_PROFILE_CFG[spatialProfile] || SPATIAL_PROFILE_CFG.haram).label;
      showToast(`تم تفعيل الصوت المحيطي (${profName}) — استماع خاشع بالسماعات`);
    }
  }
  window.setSpatialAudioEnabled = setSpatialAudioEnabled;

  function toggleSpatialAudio() {
    return setSpatialAudioEnabled(!spatialEnabled);
  }
  window.toggleSpatialAudio = toggleSpatialAudio;

  function setSpatialAudioProfile(profileKey = 'haram') {
    if (!SPATIAL_PROFILE_CFG[profileKey]) return;
    spatialProfile = profileKey;
    try { localStorage.setItem('quran_spatial_profile', spatialProfile); } catch (e) {}
    if (spatialGraphReady && spatialConvolver && audioCtx) {
      spatialConvolver.buffer = createSpatialImpulseBuffer(audioCtx, spatialProfile);
      if (spatialEnabled) applySpatialGains(true);
    }
    syncSpatialAudioUI();
    showToast(`طابع الصدى المحيطي: ${SPATIAL_PROFILE_CFG[spatialProfile].label}`);
  }

  function initSpatialAudioQuickControls() {
    const btnSpatial = document.getElementById('btn-spatial-audio');
    if (btnSpatial && !btnSpatial.dataset.boundSpatial) {
      btnSpatial.dataset.boundSpatial = '1';
      btnSpatial.addEventListener('click', () => {
        toggleSpatialAudio();
      });
    }
    syncSpatialAudioUI();
  }

  function initSpatialAudioModalControls() {
    const modal = document.getElementById('spatial-audio-modal');
    const btnSettings = document.getElementById('btn-spatial-settings');
    const btnClose = document.getElementById('btn-close-spatial-modal');
    const toggleInput = document.getElementById('spatial-modal-enable-toggle');
    const wetSlider = document.getElementById('spatial-wet-slider');
    const wetLabel = document.getElementById('spatial-wet-label');

    if (btnSettings && modal) {
      btnSettings.addEventListener('click', () => {
        syncSpatialAudioUI();
        modal.classList.remove('hidden');
      });
    }
    if (btnClose && modal) {
      btnClose.addEventListener('click', () => modal.classList.add('hidden'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      });
    }
    if (toggleInput) {
      toggleInput.addEventListener('change', () => {
        setSpatialAudioEnabled(!!toggleInput.checked);
      });
    }
    document.querySelectorAll('.spatial-profile-card').forEach(card => {
      card.addEventListener('click', () => {
        const prof = card.getAttribute('data-spatial-profile') || 'haram';
        setSpatialAudioProfile(prof);
      });
    });
    if (wetSlider) {
      wetSlider.addEventListener('input', () => {
        spatialWetLevel = parseInt(wetSlider.value, 10) || 56;
        if (wetLabel) wetLabel.innerText = `${spatialWetLevel}%`;
        try { localStorage.setItem('quran_spatial_wet', String(spatialWetLevel)); } catch (e) {}
        if (spatialEnabled) applySpatialGains(true);
      });
    }
    syncSpatialAudioUI();
  }

  // --- V4.0 Dual-Deck Seamless Slow-Motion Background Video Controller ---
  function applyBgAudioForScene(scene) {
    if (!scene || scene.id === 'off' || !bgAudioEnabled) {
      if (activeBgSceneId !== 'off' || !scene || scene.id === 'off') {
        stopAmbienceNodes();
        ambienceMode = 'none';
      }
      return;
    }
    const gentleScale = (bgAudioVol / 100) * 0.16;
    setNatureAmbience(scene.sound, gentleScale, true);
  }

  function updateBgSceneUI(scene) {
    const deskBadge = document.getElementById('bg-scene-badge');
    const mobBadge = document.getElementById('bg-scene-mobile-badge');
    const deskBtn = document.getElementById('btn-bg-scene');
    const mobBtn = document.getElementById('btn-bg-scene-mobile');
    const isActive = scene.id !== 'off';

    if (deskBadge) deskBadge.innerText = scene.shortLabel;
    if (mobBadge) mobBadge.innerText = scene.shortLabel;
    [deskBtn, mobBtn].forEach(btn => {
      if (!btn) return;
      btn.classList.toggle('border-amber-400', isActive);
      btn.classList.toggle('text-amber-300', isActive);
      btn.classList.toggle('bg-amber-500/20', isActive);
    });

    document.querySelectorAll('.bg-scene-card').forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-bg-scene') === scene.id);
    });
  }

  function setAmbientBackgroundScene(sceneId = 'off', { persist = true, silent = false } = {}) {
    const scene = AMBIENT_BG_SCENES[sceneId] || AMBIENT_BG_SCENES.off;
    const vidA = document.getElementById('ambient-bg-vid-a');
    const vidB = document.getElementById('ambient-bg-vid-b');
    if (!vidA || !vidB) return;

    bgSceneToken++;
    const token = bgSceneToken;
    activeBgSceneId = scene.id;
    bgHandoffDone = false;
    if (persist) {
      try { localStorage.setItem('quran_bg_scene', scene.id); } catch (e) {}
    }
    updateBgSceneUI(scene);

    if (scene.id === 'off' || !scene.src) {
      document.body.classList.remove('ambient-bg-active');
      if (tabletImmersionActive || document.body.classList.contains('tablet-bg-immersion')) {
        exitTabletImmersionWithTransition(false);
      }
      vidA.classList.remove('active');
      vidB.classList.remove('active');
      setTimeout(() => {
        if (token !== bgSceneToken) return;
        [vidA, vidB].forEach(v => {
          v.pause();
          v.removeAttribute('src');
          v.load();
        });
      }, 1150);
      applyBgAudioForScene(scene);
      if (!silent) showToast('تمت العودة للخلفية الملكية الكلاسيكية');
      return;
    }

    const incoming = activeBgDeck === 'a' ? vidB : vidA;
    const outgoing = activeBgDeck === 'a' ? vidA : vidB;
    activeBgDeck = activeBgDeck === 'a' ? 'b' : 'a';
    bgHandoffDone = false;

    const activateDeck = () => {
      if (token !== bgSceneToken) return;
      try {
        incoming.playbackRate = bgSpeed;
        incoming.defaultPlaybackRate = bgSpeed;
      } catch (e) {}
      incoming.play().catch(() => {});
      document.body.classList.add('ambient-bg-active');
      requestAnimationFrame(() => {
        if (token !== bgSceneToken) return;
        incoming.classList.add('active');
        outgoing.classList.remove('active');
        if (isTabletDevice()) {
          const bgModal = document.getElementById('bg-scene-modal');
          if (bgModal) bgModal.classList.add('hidden');
          setTimeout(() => {
            if (token === bgSceneToken && activeBgSceneId !== 'off') {
              enterTabletImmersion();
            }
          }, 90);
        }
      });
      setTimeout(() => {
        if (token !== bgSceneToken) return;
        outgoing.pause();
        if (outgoing.getAttribute('src') !== scene.src) {
          outgoing.removeAttribute('src');
        }
      }, 1500);
    };

    incoming.muted = true;
    incoming.defaultMuted = true;
    incoming.volume = 0;
    incoming.playsInline = true;
    incoming.onloadeddata = null;
    incoming.oncanplay = null;
    incoming.src = scene.src;
    try {
      incoming.playbackRate = bgSpeed;
      incoming.defaultPlaybackRate = bgSpeed;
    } catch (e) {}

    let activated = false;
    const onceReady = () => {
      if (activated || token !== bgSceneToken) return;
      activated = true;
      activateDeck();
    };
    incoming.addEventListener('canplay', onceReady, { once: true });
    setTimeout(onceReady, 1600);

    applyBgAudioForScene(scene);
    if (!silent) {
      showToast(`تم تفعيل خلفية ${scene.label} (${bgSpeed}x)${bgAudioEnabled ? ' مع صوت خفيف بالخلفية' : ''}`);
    }
  }
  window.setAmbientBackgroundScene = setAmbientBackgroundScene;

  function initAmbientBgController() {
    const vidA = document.getElementById('ambient-bg-vid-a');
    const vidB = document.getElementById('ambient-bg-vid-b');
    const modal = document.getElementById('bg-scene-modal');
    const btnDesk = document.getElementById('btn-bg-scene');
    const btnMob = document.getElementById('btn-bg-scene-mobile');
    const btnClose = document.getElementById('btn-close-bg-scene-modal');
    const audioToggle = document.getElementById('bg-audio-enable-toggle');
    const volSlider = document.getElementById('bg-audio-vol-slider');
    const volLabel = document.getElementById('bg-audio-vol-label');
    if (!vidA || !vidB) return;

    const handleDeckTimeUpdate = (deckEl, deckName) => {
      if (activeBgSceneId === 'off' || activeBgDeck !== deckName || bgHandoffDone) return;
      const dur = deckEl.duration;
      if (!isFinite(dur) || dur < 4) return;
      // Seamless cross-dissolve 2.2s before clip end so background plays continuously without jump cuts
      if (deckEl.currentTime >= dur - 2.2) {
        bgHandoffDone = true;
        const scene = AMBIENT_BG_SCENES[activeBgSceneId];
        if (!scene || !scene.src) return;
        const nextDeckEl = deckName === 'a' ? vidB : vidA;
        const nextDeckName = deckName === 'a' ? 'b' : 'a';
        if (nextDeckEl.getAttribute('src') !== scene.src) {
          nextDeckEl.src = scene.src;
        }
        try {
          nextDeckEl.currentTime = 0;
          nextDeckEl.playbackRate = bgSpeed;
        } catch (e) {}
        activeBgDeck = nextDeckName;
        nextDeckEl.play().catch(() => {});
        nextDeckEl.classList.add('active');
        deckEl.classList.remove('active');
        const snapToken = bgSceneToken;
        setTimeout(() => {
          if (snapToken === bgSceneToken && activeBgDeck === nextDeckName) {
            deckEl.pause();
            try { deckEl.currentTime = 0; } catch (e) {}
            bgHandoffDone = false;
          }
        }, 1550);
      }
    };

    vidA.addEventListener('timeupdate', () => handleDeckTimeUpdate(vidA, 'a'));
    vidB.addEventListener('timeupdate', () => handleDeckTimeUpdate(vidB, 'b'));
    // Safety ended fallback if browser misses timeupdate window
    [vidA, vidB].forEach((v, idx) => {
      const dName = idx === 0 ? 'a' : 'b';
      v.addEventListener('ended', () => {
        if (activeBgSceneId !== 'off' && activeBgDeck === dName) {
          v.currentTime = 0;
          v.play().catch(() => {});
        }
      });
    });

    const openSceneModal = () => modal && modal.classList.remove('hidden');
    const closeSceneModal = () => modal && modal.classList.add('hidden');
    if (btnDesk) btnDesk.addEventListener('click', openSceneModal);
    if (btnMob) btnMob.addEventListener('click', openSceneModal);
    if (btnClose) btnClose.addEventListener('click', closeSceneModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeSceneModal();
      });
    }

    document.querySelectorAll('.bg-scene-card').forEach(card => {
      card.addEventListener('click', () => {
        const sceneId = card.getAttribute('data-bg-scene') || 'off';
        setAmbientBackgroundScene(sceneId, { persist: true, silent: false });
      });
    });

    const speedChips = document.querySelectorAll('.bg-speed-chip');
    speedChips.forEach(chip => {
      const sp = parseFloat(chip.getAttribute('data-bg-speed') || '0.55');
      const isMatch = Math.abs(sp - bgSpeed) < 0.02;
      chip.className = isMatch
        ? 'bg-speed-chip active px-2 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold'
        : 'bg-speed-chip px-2 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/20 text-[var(--text-secondary)] font-semibold';

      chip.addEventListener('click', () => {
        bgSpeed = parseFloat(chip.getAttribute('data-bg-speed') || '0.55') || 0.55;
        try { localStorage.setItem('quran_bg_speed', String(bgSpeed)); } catch (e) {}
        speedChips.forEach(c => {
          const m = c === chip;
          c.className = m
            ? 'bg-speed-chip active px-2 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold'
            : 'bg-speed-chip px-2 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/20 text-[var(--text-secondary)] font-semibold';
        });
        [vidA, vidB].forEach(v => {
          try { v.playbackRate = bgSpeed; v.defaultPlaybackRate = bgSpeed; } catch (e) {}
        });
        showToast(`سرعة عرض الخلفية: ${bgSpeed}x`);
      });
    });

    if (audioToggle) {
      audioToggle.checked = bgAudioEnabled;
      audioToggle.addEventListener('change', () => {
        bgAudioEnabled = !!audioToggle.checked;
        try { localStorage.setItem('quran_bg_audio_enabled', String(bgAudioEnabled)); } catch (e) {}
        applyBgAudioForScene(AMBIENT_BG_SCENES[activeBgSceneId]);
      });
    }

    if (volSlider) {
      volSlider.value = String(bgAudioVol);
      if (volLabel) volLabel.innerText = `${bgAudioVol}%`;
      volSlider.addEventListener('input', () => {
        bgAudioVol = parseInt(volSlider.value, 10) || 10;
        if (volLabel) volLabel.innerText = `${bgAudioVol}%`;
        try { localStorage.setItem('quran_bg_audio_vol', String(bgAudioVol)); } catch (e) {}
        if (ambienceGainNode && audioCtx && activeBgSceneId !== 'off' && bgAudioEnabled) {
          ambienceGainNode.gain.setTargetAtTime((bgAudioVol / 100) * 0.16, audioCtx.currentTime, 0.12);
        }
      });
    }

    document.addEventListener('visibilitychange', () => {
      if (activeBgSceneId === 'off') return;
      const curDeck = activeBgDeck === 'a' ? vidA : vidB;
      if (document.hidden) {
        curDeck.pause();
      } else if (curDeck.getAttribute('src')) {
        curDeck.play().catch(() => {});
      }
    });

    // Optional by default: only auto-restore if user explicitly kept a background scene enabled
    const savedScene = localStorage.getItem('quran_bg_scene');
    if (savedScene && savedScene !== 'off' && AMBIENT_BG_SCENES[savedScene]) {
      setTimeout(() => setAmbientBackgroundScene(savedScene, { persist: false, silent: true }), 450);
    }
  }

  // --- 24/7 Live Quran Radio Broadcast ---
  function renderRadioStations() {
    const list = document.getElementById('radio-stations-list');
    if (!list || typeof RADIO_STATIONS === 'undefined') return;
    list.innerHTML = '';

    RADIO_STATIONS.forEach(st => {
      const isCurrentRadio = isRadioMode && activeRadioStation && activeRadioStation.id === st.id;
      const item = document.createElement('div');
      item.className = `surah-card p-3.5 rounded-2xl flex items-center justify-between cursor-pointer ${isCurrentRadio ? 'active' : ''}`;
      item.innerHTML = `
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
            <i class="fa-solid fa-tower-broadcast ${isCurrentRadio && isPlaying ? 'animate-pulse' : ''}"></i>
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <h5 class="font-bold text-xs sm:text-sm text-[var(--text-primary)] font-quran truncate">${st.name}</h5>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">${st.badge}</span>
            </div>
            <p class="text-[11px] text-[var(--text-secondary)] truncate mt-0.5">${st.subtitle}</p>
          </div>
        </div>
        <button class="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-900 font-bold text-xs flex-shrink-0">
          ${isCurrentRadio && isPlaying ? 'يعمل الآن' : 'تشغيل البث'}
        </button>
      `;
      item.addEventListener('click', () => {
        playRadioStation(st);
        const modal = document.getElementById('radio-modal');
        if (modal) modal.classList.add('hidden');
      });
      list.appendChild(item);
    });
  }

  function playRadioStation(station) {
    activeMiniEngine = 'main';
    isRadioMode = true;
    activeRadioStation = station;
    radioCandidateIndex = 0;
    pendingResumeTime = 0;
    clearAudioStallWatchdog();
    resetAbLoop(false);

    currentAudioLoadToken++;
    prepareElementCorsForSpatial(audio, station.url);
    audio.src = station.url;
    audio.playbackRate = 1.0;

    if (station.isAudioFile) {
      playerSurahNumber.innerHTML = '<i class="fa-solid fa-leaf text-emerald-400"></i> تسجيل خاص';
      playerSurahName.innerText = station.name;
      playerSurahEnglish.innerText = 'Al-Ruqyah Al-Shariyyah';
      playerRevelation.innerHTML = '<i class="fa-solid fa-shield-halved text-emerald-400"></i> تحصين وشفاء بإذن الله';
      playerVerses.innerHTML = `<i class="fa-solid fa-clock text-amber-400"></i> تسجيل نقي كامل`;
      playerAudioSource.innerHTML = `<i class="fa-solid fa-microphone-lines"></i> ${station.reciter || 'مشاري العفاسي'}`;
      playerSourceBadge.innerText = station.badge;
      if (playerRadioLabel) playerRadioLabel.innerText = station.badge;

      if (miniSurahName) miniSurahName.innerText = 'الرقية الشرعية';
      if (miniReciterName) miniReciterName.innerText = station.reciter || 'مشاري العفاسي';

      updateMediaSession({ name: station.name }, { name: station.reciter || 'الشيخ مشاري راشد العفاسي' });
      playAudio();
      switchView('player');
      showToast(`جاري تشغيل ${station.name}`);
    } else {
      playerSurahNumber.innerHTML = '<i class="fa-solid fa-tower-broadcast text-red-400"></i> بث مباشر';
      playerSurahName.innerText = station.name;
      playerSurahEnglish.innerText = 'Live Quran Radio 24/7';
      playerRevelation.innerHTML = '<i class="fa-solid fa-tower-broadcast text-red-400"></i> بث مباشر على مدار الساعة';
      playerVerses.innerHTML = `<i class="fa-solid fa-signal text-emerald-400"></i> جودة عالية`;
      playerAudioSource.innerHTML = `<i class="fa-solid fa-radio"></i> ${station.subtitle}`;
      playerSourceBadge.innerText = station.badge;
      if (playerRadioLabel) playerRadioLabel.innerText = station.badge;

      if (miniSurahName) miniSurahName.innerText = station.name;
      if (miniReciterName) miniReciterName.innerText = 'بث مباشر';

      updateMediaSession({ name: station.name }, { name: station.subtitle });
      playAudio();
      switchView('player');
      showToast(`تم الاتصال بـ ${station.name}`);
    }
  }

  // --- Spiritual Companion Hub (Khatma, Mood Compass, Azkar, Sebha, Prayer & Qibla) ---
  const __secBridge = {
    get audio() { return audio; },
    get audioCtx() { return audioCtx; },
    set audioCtx(v) { audioCtx = v; },
    get currentIndex() { return currentIndex; },
    set currentIndex(v) { currentIndex = v; },
    get isPlaying() { return isPlaying; },
    get currentView() { return currentView; },
    get activeMiniEngine() { return activeMiniEngine; },
    set activeMiniEngine(v) { activeMiniEngine = v; },
    get listenedSurahs() { return listenedSurahs; },
    get khatmaBookmark() { return khatmaBookmark; },
    set khatmaBookmark(v) { khatmaBookmark = v; },
    get listeningSeconds() { return listeningSeconds; },
    get spatialEnabled() { return spatialEnabled; },
    get spatialGraphReady() { return spatialGraphReady; },
    get currentMemorial() { return currentMemorial; },
    set currentMemorial(v) { currentMemorial = v; },
    get savedMemorials() { return savedMemorials; },
    set savedMemorials(v) { savedMemorials = v; },
    get isTasbeehSoundEnabled() { return isTasbeehSoundEnabled; },
    set isTasbeehSoundEnabled(v) { isTasbeehSoundEnabled = v; },
    get memorialRoundCounter() { return memorialRoundCounter; },
    set memorialRoundCounter(v) { memorialRoundCounter = v; },
    get currentHadrReciterId() { return currentHadrReciterId; },
    set currentHadrReciterId(v) { currentHadrReciterId = v; },
    get currentHadrSurahId() { return currentHadrSurahId; },
    set currentHadrSurahId(v) { currentHadrSurahId = v; },
    get hadrPlaybackSpeed() { return hadrPlaybackSpeed; },
    set hadrPlaybackSpeed(v) { hadrPlaybackSpeed = v; },
    get miniProgressFill() { return miniProgressFill; },
    get miniTimeDisplay() { return miniTimeDisplay; },
    get miniCurrentTime() { return miniCurrentTime; },
    get miniTotalDuration() { return miniTotalDuration; },
    get miniSeekSlider() { return miniSeekSlider; },
    get memorialView() { return memorialView; },
    get spTabMemorial() { return spTabMemorial; },
    get memorialGenderBadge() { return memorialGenderBadge; },
    get memorialDeceasedName() { return memorialDeceasedName; },
    get memorialDedicatedNote() { return memorialDedicatedNote; },
    get btnOpenMemorialCreator() { return btnOpenMemorialCreator; },
    get btnCopyMemorialLink() { return btnCopyMemorialLink; },
    get btnWhatsappMemorial() { return btnWhatsappMemorial; },
    get btnDownloadMemorialCard() { return btnDownloadMemorialCard; },
    get memorialDhikrChips() { return memorialDhikrChips; },
    get memorialActiveDhikrText() { return memorialActiveDhikrText; },
    get memorialTapBtn() { return memorialTapBtn; },
    get memorialRoundCount() { return memorialRoundCount; },
    get memorialSoundBtn() { return memorialSoundBtn; },
    get memorialSoundIcon() { return memorialSoundIcon; },
    get memorialResetRoundBtn() { return memorialResetRoundBtn; },
    get memorialDuasGrid() { return memorialDuasGrid; },
    get memorialSurahsGrid() { return memorialSurahsGrid; },
    get memorialCreatorModal() { return memorialCreatorModal; },
    get btnCloseMemorialModal() { return btnCloseMemorialModal; },
    get memorialInputName() { return memorialInputName; },
    get memorialGenderBtnM() { return memorialGenderBtnM; },
    get memorialGenderBtnF() { return memorialGenderBtnF; },
    get memorialInputNote() { return memorialInputNote; },
    get memorialPreviewText() { return memorialPreviewText; },
    get btnSubmitCreateMemorial() { return btnSubmitCreateMemorial; },
    get memorialSavedList() { return memorialSavedList; },
    get mMemorialName() { return mMemorialName; },
    switchView, syncHadrToMiniPlayer, syncMiniPlayerVisibility, loadSurah, pauseAudio,
    loadSurahMushaf, formatTime, toggleSingleAyahAudio, generateAyahImageCard,
    prepareElementCorsForSpatial, attachMediaElementToSpatialGraph, showToast, safeJsonParse
  };
  const initSpiritualCompanionHub = (...a) => secApi.initSpiritualCompanionHub && secApi.initSpiritualCompanionHub(...a);
  const updateKhatmaDashboard = (...a) => secApi.updateKhatmaDashboard && secApi.updateKhatmaDashboard(...a);
  const initMemorialEngine = (...a) => secApi.initMemorialEngine && secApi.initMemorialEngine(...a);
  const toggleMemorialSound = (...a) => secApi.toggleMemorialSound && secApi.toggleMemorialSound(...a);
  const triggerHapticFeedback = (...a) => secApi.triggerHapticFeedback && secApi.triggerHapticFeedback(...a);
  const openMemorialPage = (...a) => secApi.openMemorialPage && secApi.openMemorialPage(...a);
  const updateMemorialViewUI = (...a) => secApi.updateMemorialViewUI && secApi.updateMemorialViewUI(...a);
  const shareMemorialLink = (...a) => secApi.shareMemorialLink && secApi.shareMemorialLink(...a);
  const generateMemorialCard = (...a) => secApi.generateMemorialCard && secApi.generateMemorialCard(...a);
  const openMemorialModal = (...a) => secApi.openMemorialModal && secApi.openMemorialModal(...a);
  const initHadrView = (...a) => secApi.initHadrView && secApi.initHadrView(...a);
  const playHadrSurah = (...a) => secApi.playHadrSurah && secApi.playHadrSurah(...a);

  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `glass-panel px-4 py-2.5 rounded-xl shadow-2xl text-xs sm:text-sm flex items-center gap-2.5 text-white animate-slide-in pointer-events-auto border-l-4 ${
      type === 'success' 
        ? 'border-amber-500 bg-emerald-900/95' 
        : type === 'info'
        ? 'border-blue-400 bg-slate-900/95'
        : 'border-red-500 bg-red-950/95'
    }`;
    
    const iconClass = type === 'success' 
      ? 'fa-circle-check text-amber-400' 
      : type === 'info'
      ? 'fa-circle-info text-blue-400'
      : 'fa-circle-exclamation text-red-500';

    toast.innerHTML = `
      <i class="fa-solid ${iconClass} text-base flex-shrink-0"></i>
      <span class="font-medium">${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 350);
    }, 3200);
  }
});
