// Quran Stream Platform - Player & Mushaf Controller
document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const audio = document.getElementById('main-audio');
  const playlistContainer = document.getElementById('playlist-container');
  const playlistSection = document.getElementById('playlist-section');
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const allCount = document.getElementById('all-count');
  const favCount = document.getElementById('fav-count');
  
  // Filter Tabs
  const tabAll = document.getElementById('tab-all');
  const tabFavorites = document.getElementById('tab-favorites');
  const tabMakki = document.getElementById('tab-makki');
  const tabMadani = document.getElementById('tab-madani');
  
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
  const mNavPlaylist = document.getElementById('m-nav-playlist');
  const spiritualView = document.getElementById('spiritual-view');

  // V2 Elements (Segmented Search Mode, Player Corner Pills, Modals, Single Ayah Audio)
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
  const mushafBtnGotoBookmark = document.getElementById('mushaf-btn-goto-bookmark');

  // Smart Memorization & Live Reciter Ayah Hover Elements
  const btnPlayerMemorize = document.getElementById('btn-player-memorize');
  const btnDockMemorize = document.getElementById('btn-dock-memorize');
  const btnToggleMemorizeMode = document.getElementById('btn-toggle-memorize-mode');
  const memorizeStatusDot = document.getElementById('memorize-status-dot');
  const memorizeModeLabel = document.getElementById('memorize-mode-label');
  const memorizeLiveAyahBadge = document.getElementById('memorize-live-ayah-badge');
  const memorizeLiveAyahText = document.getElementById('memorize-live-ayah-text');
  const memorizeRepeatSelect = document.getElementById('memorize-repeat-select');
  const btnMemorizeBlur = document.getElementById('btn-memorize-blur');
  const btnMemorizeOpenStudio = document.getElementById('btn-memorize-open-studio');

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

  // Mushaf Reader Panel Elements
  const mushafView = document.getElementById('mushaf-view');
  const mushafSurahBadge = document.getElementById('mushaf-surah-badge');
  const mushafSurahTitle = document.getElementById('mushaf-surah-title');
  const mushafRevelationBadge = document.getElementById('mushaf-revelation-badge');
  const mushafSurahMeta = document.getElementById('mushaf-surah-meta');
  const mushafSurahSelect = document.getElementById('mushaf-surah-select');
  const mushafZoomIn = document.getElementById('mushaf-zoom-in');
  const mushafZoomOut = document.getElementById('mushaf-zoom-out');
  const mushafZoomReset = document.getElementById('mushaf-zoom-reset');
  const mushafFontSizeLabel = document.getElementById('mushaf-font-size-label');
  const mushafBtnPlayAudio = document.getElementById('mushaf-btn-play-audio');
  const mushafPlayIcon = document.getElementById('mushaf-play-icon');
  const mushafScrollArea = document.getElementById('mushaf-scroll-area');
  const mushafBasmala = document.getElementById('mushaf-basmala');
  const mushafContent = document.getElementById('mushaf-content');

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

  // --- State Variables ---
  let currentSurahList = [...SURAHS];
  let currentIndex = 0;
  let isPlaying = false;
  let currentTab = 'all'; // 'all', 'favorites', 'makki', 'madani'
  let searchQuery = '';
  let searchMode = 'surahs'; // 'surahs' | 'ayahs'
  let ayahSearchTimer = null;
  let favorites = JSON.parse(localStorage.getItem('quran_favorites')) || [];
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
  let khatmaBookmark = JSON.parse(localStorage.getItem('quran_khatma_bookmark')) || null;
  let listenedSurahs = JSON.parse(localStorage.getItem('quran_listened_surahs')) || [];
  let listeningSeconds = parseInt(localStorage.getItem('quran_listening_seconds')) || 0;

  // V2 Audio & Studio State
  let isRadioMode = false;
  let activeRadioStation = null;
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

  // --- Initial Setup ---
  init();

  function init() {
    // 1. Populate Dropdowns (Reciters & Mushaf Surahs)
    populateRecitersDropdown();
    populateMushafSurahSelect();
    
    // 2. Setup Statistics
    updateStatistics();
    
    // 3. Render Playlist
    renderPlaylist();

    // 4. Update Playback Controls UI
    updatePlaybackControlsUI();

    // 5. Apply Mushaf Font Size
    applyMushafFontSize();

    // 6. Restore Volume
    const savedVolume = localStorage.getItem('quran_volume') || '85';
    audio.volume = savedVolume / 100;
    if (volumeSlider) {
      volumeSlider.value = savedVolume;
      volumeVal.innerText = `${savedVolume}%`;
      updateVolumeIcon(savedVolume);
    }

    // 7. Handle URL parameters (e.g. ?surah=18)
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

    // 8. Attach Event Listeners & Shortcuts
    attachEventListeners();

    // 9. Initialize V2.0 Features (Spiritual Hub, Modals, Ambience, Radio, Studio, Memorization Hover)
    initV2Features();

    // 10. Setup Media Session for iOS/Android Lock Screen & Background Playback
    setupMediaSessionHandlers();

    // 11. Initial View Responsive Configuration
    handleResize();
    window.addEventListener('resize', handleResize);
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
  }

  function switchView(targetView, shouldScroll = true) {
    currentView = targetView;
    const isDesktop = window.innerWidth >= 1024;

    const tabInactive = 'nav-tab-btn flex-1 md:flex-initial px-2.5 xs:px-3.5 py-1.5 rounded-xl font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 text-[var(--text-secondary)] hover:text-amber-400 hover:bg-emerald-500/5';
    const tabActive = 'nav-tab-btn flex-1 md:flex-initial px-2.5 xs:px-3.5 py-1.5 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all duration-200 bg-amber-500/20 text-amber-400 border border-amber-500/30';

    if (navBtnPlayer) navBtnPlayer.className = tabInactive;
    if (navBtnMushaf) navBtnMushaf.className = tabInactive;
    if (navBtnSpiritual) navBtnSpiritual.className = tabInactive;
    if (navBtnPlaylist) navBtnPlaylist.className = tabInactive + ' lg:hidden';

    playerView.classList.add('hidden');
    mushafView.classList.add('hidden');
    if (spiritualView) spiritualView.classList.add('hidden');

    if (isDesktop) {
      playlistSection.classList.remove('hidden');
    } else {
      playlistSection.classList.add('hidden');
    }

    if (targetView === 'mushaf') {
      if (navBtnMushaf) navBtnMushaf.className = tabActive;
      mushafView.classList.remove('hidden');
      miniPlayer.classList.remove('hidden');
      loadSurahMushaf(SURAHS[currentIndex].id);
      if (isMemorizationMode) {
        loadSurahTimestamps(SURAHS[currentIndex].id);
        setTimeout(() => updateLiveMushafAyahHover(), 120);
      }
    } else if (targetView === 'spiritual') {
      if (navBtnSpiritual) navBtnSpiritual.className = tabActive;
      if (spiritualView) spiritualView.classList.remove('hidden');
      miniPlayer.classList.remove('hidden');
      updateKhatmaDashboard();
    } else if (targetView === 'playlist' && !isDesktop) {
      if (navBtnPlaylist) navBtnPlaylist.className = tabActive + ' lg:hidden';
      playlistSection.classList.remove('hidden');
      miniPlayer.classList.remove('hidden');
    } else {
      if (navBtnPlayer) navBtnPlayer.className = tabActive;
      playerView.classList.remove('hidden');
      miniPlayer.classList.add('hidden');
    }

    // Update Mobile Glass Navigator Tabs
    const mTabs = [
      { id: 'player', el: mNavPlayer },
      { id: 'mushaf', el: mNavMushaf },
      { id: 'spiritual', el: mNavSpiritual },
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
    if (!mushafSurahSelect) return;
    mushafSurahSelect.innerHTML = '';
    SURAHS.forEach(surah => {
      const opt = document.createElement('option');
      opt.value = surah.id;
      opt.innerText = `${surah.id}. سورة ${surah.name}`;
      opt.className = 'bg-emerald-950 text-white';
      mushafSurahSelect.appendChild(opt);
    });
  }

  function updateHeaderSubtitle() {
    if (!appSubtitle) return;
    const reciter = RECITERS.find(r => r.id === currentReciterId) || RECITERS[0];
    appSubtitle.innerText = `المصحف المرتل - ${reciter.name}`;
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
    } else if (currentTab === 'makki') {
      list = list.filter(s => s.revelationPlace === 'makkah');
    } else if (currentTab === 'madani') {
      list = list.filter(s => s.revelationPlace === 'madinah');
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

  // --- Render Playlist ---
  function renderPlaylist() {
    currentSurahList = getFilteredSurahs();
    playlistContainer.innerHTML = '';
    const activeReciter = RECITERS.find(r => r.id === currentReciterId) || RECITERS[0];

    if (currentSurahList.length === 0) {
      const emptyState = document.createElement('div');
      emptyState.className = 'flex flex-col items-center justify-center py-16 text-center text-slate-400 glass-panel rounded-2xl p-6';
      
      if (currentTab === 'favorites') {
        emptyState.innerHTML = `
          <i class="fa-regular fa-heart text-4xl mb-3 text-slate-500"></i>
          <p class="text-sm font-semibold mb-1">قائمة المفضلة فارغة</p>
          <p class="text-xs text-slate-400">انقر فوق أيقونة القلب على أي سورة لحفظها هنا.</p>
        `;
      } else {
        emptyState.innerHTML = `
          <i class="fa-solid fa-magnifying-glass text-4xl mb-3 text-slate-500"></i>
          <p class="text-sm font-semibold mb-1">لا توجد نتائج مطابقة</p>
          <p class="text-xs text-slate-400">تأكد من كتابة الاسم أو رقم السورة بشكل صحيح.</p>
        `;
      }
      playlistContainer.appendChild(emptyState);
      return;
    }

    currentSurahList.forEach((surah) => {
      const isFav = favorites.includes(surah.id);
      const isCurrent = SURAHS[currentIndex].id === surah.id;
      const isAvailable = !activeReciter.availableSurahs || activeReciter.availableSurahs.includes(surah.id);

      const card = document.createElement('div');
      card.className = `surah-card p-3 sm:p-3.5 rounded-2xl flex items-center justify-between cursor-pointer mb-2 animate-slide-in ${isCurrent ? 'active' : ''}`;
      card.setAttribute('data-id', surah.id);
      
      card.innerHTML = `
        <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <!-- Surah Number badge -->
          <div class="surah-number-badge w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shadow-inner flex-shrink-0">
            ${surah.id}
          </div>
          
          <!-- Surah Info -->
          <div class="min-w-0">
            <div class="flex items-center gap-1.5">
              <h3 class="font-bold text-xs sm:text-sm text-[var(--text-primary)] font-quran truncate">${surah.name}</h3>
              <span class="text-[10px] text-[var(--text-secondary)] opacity-85 flex items-center gap-0.5 flex-shrink-0">
                ${surah.revelationPlace === 'makkah' 
                  ? '<i class="fa-solid fa-kaaba text-[8px] text-amber-500"></i> مكية' 
                  : '<i class="fa-solid fa-mosque text-[8px] text-emerald-400"></i> مدنية'}
              </span>
              ${!isAvailable ? '<span class="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20" title="سورة غير مسجلة بصوت القارئ المختار - يتم تشغيل الحصري كبديل">بديل</span>' : ''}
              ${isCurrent && isPlaying ? `
                <div class="mini-eq mr-1">
                  <span class="mini-eq-bar"></span>
                  <span class="mini-eq-bar"></span>
                  <span class="mini-eq-bar"></span>
                </div>
              ` : ''}
            </div>
            <p class="text-[10px] sm:text-[11px] text-[var(--text-secondary)] mt-0.5 truncate">${surah.englishName} • ${surah.versesCount} آية</p>
          </div>
        </div>

        <div class="flex items-center gap-1.5 flex-shrink-0">
          <!-- Quick Read in Mushaf -->
          <button class="btn-card-read w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-amber-400 hover:bg-emerald-500/10 transition-colors" data-id="${surah.id}" title="قراءة السورة في المصحف">
            <i class="fa-solid fa-book-open text-xs"></i>
          </button>
          
          <!-- Favorite Toggle Button -->
          <button class="btn-fav-toggle w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors" data-id="${surah.id}" title="إضافة للمفضلة">
            <i class="${isFav ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart text-xs'}"></i>
          </button>
        </div>
      `;

      // Card click event -> Play Surah
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-fav-toggle') || e.target.closest('.btn-card-read')) return;
        
        const mainIndex = SURAHS.findIndex(s => s.id === surah.id);
        if (mainIndex !== -1) {
          currentIndex = mainIndex;
          loadSurah(SURAHS[currentIndex], true);
          if (window.innerWidth < 1024 && currentView === 'playlist') {
            switchView('player');
          }
        }
      });

      // Quick read button click -> Open Mushaf
      const readBtn = card.querySelector('.btn-card-read');
      readBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const mainIndex = SURAHS.findIndex(s => s.id === surah.id);
        if (mainIndex !== -1) {
          currentIndex = mainIndex;
          loadSurah(SURAHS[currentIndex], false);
          switchView('mushaf');
        }
      });

      // Favorite button event
      const favBtn = card.querySelector('.btn-fav-toggle');
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(surah.id);
      });

      playlistContainer.appendChild(card);
    });
  }

  // --- Audio URL Resolver with Safe Fallback ---
  function getSurahAudioUrl(reciter, surahId) {
    const paddedId = surahId.toString().padStart(3, '0');
    
    // Check if reciter has recorded this surah
    if (reciter.availableSurahs && !reciter.availableSurahs.includes(surahId)) {
      const fallbackReciter = RECITERS.find(r => r.id === 'hussary') || RECITERS[0];
      return {
        url: `${fallbackReciter.serverUrl}${paddedId}.mp3`,
        isFallback: true,
        reciter: reciter,
        fallbackReciter: fallbackReciter
      };
    }

    const baseUrl = reciter.serverUrl || `https://download.quranicaudio.com/quran/${reciter.slug}`;
    return {
      url: `${baseUrl}${paddedId}.mp3`,
      isFallback: false,
      reciter: reciter,
      fallbackReciter: null
    };
  }

  // --- Load Surah into Player ---
  function loadSurah(surah, shouldPlay = true) {
    isRadioMode = false;
    activeRadioStation = null;
    if (playerRadioLabel) playerRadioLabel.innerText = 'إذاعة مباشرة';
    resetAbLoop(false);

    const reciter = RECITERS.find(r => r.id === currentReciterId) || RECITERS[0];
    const audioInfo = getSurahAudioUrl(reciter, surah.id);
    
    audio.src = audioInfo.url;
    audio.playbackRate = parseFloat(speedSelect ? speedSelect.value : 1.0);
    audio.load();

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

    // Start Audio
    if (shouldPlay) {
      playAudio();
    } else {
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
  function playAudio() {
    // Pause single ayah audio if playing
    if (ayahSingleAudio && !ayahSingleAudio.paused) {
      ayahSingleAudio.pause();
    }
    isPlaying = true;
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Main Button
        playIcon.className = 'fa-solid fa-pause text-lg sm:text-xl text-slate-900';
        btnPlayPause.className = 'w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-xl border-2 sm:border-4 border-emerald-950/30 pulse-glow-active flex-shrink-0';
        
        // Mini Player Button
        if (miniPlayIcon) miniPlayIcon.className = 'fa-solid fa-pause text-sm sm:text-base text-slate-900';
        if (miniIcon) miniIcon.className = 'fa-solid fa-volume-high text-xs text-amber-400 animate-pulse';
        if (mushafPlayIcon) mushafPlayIcon.className = 'fa-solid fa-pause';

        // Animations
        artworkMandala.classList.remove('spin-paused');
        if (artworkGlow) artworkGlow.classList.add('active');
        waveVisualizer.classList.remove('visualizer-paused');
        micIcon.className = 'fa-solid fa-volume-high text-xs sm:text-sm text-amber-400 animate-pulse';

        // Update Equalizer inside Active Playlist Card
        updatePlaylistHighlight();

        // Update Media Session State for Lock Screen
        if ('mediaSession' in navigator) {
          navigator.mediaSession.playbackState = 'playing';
        }
      }).catch(err => {
        if (err.name === 'AbortError') return;
        console.warn("Audio play prevented or blocked:", err);
        isPlaying = false;
        pauseAudio();
      });
    }
  }

  function pauseAudio() {
    isPlaying = false;
    audio.pause();
    
    // Main Button
    playIcon.className = 'fa-solid fa-play text-lg sm:text-xl mr-0.5 text-slate-900';
    btnPlayPause.className = 'w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-xl border-2 sm:border-4 border-emerald-950/30 flex-shrink-0';
    
    // Mini Player Button
    if (miniPlayIcon) miniPlayIcon.className = 'fa-solid fa-play text-sm sm:text-base mr-0.5 text-slate-900';
    if (miniIcon) miniIcon.className = 'fa-solid fa-music text-sm text-amber-400';
    if (mushafPlayIcon) mushafPlayIcon.className = 'fa-solid fa-play';

    // Animations
    artworkMandala.classList.add('spin-paused');
    if (artworkGlow) artworkGlow.classList.remove('active');
    waveVisualizer.classList.add('visualizer-paused');
    micIcon.className = 'fa-solid fa-microphone text-xs sm:text-sm text-amber-500';

    // Update Equalizer inside Active Playlist Card
    updatePlaylistHighlight();

    // Update Media Session State for Lock Screen
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = 'paused';
    }
  }

  // --- Mushaf Reading Mode Logic ---
  function loadSurahMushaf(surahId, targetAyahToScroll = null) {
    currentMushafSurahId = surahId;
    const surah = SURAHS.find(s => s.id === surahId) || SURAHS[0];
    
    // Header UI
    mushafSurahBadge.innerText = surah.id;
    mushafSurahTitle.innerText = `سُورَةُ ${surah.name}`;
    mushafRevelationBadge.innerText = surah.revelationPlace === 'makkah' ? 'مكية' : 'مدنية';
    mushafSurahMeta.innerText = `${surah.versesCount} آيات • الجزء ${Math.ceil(surah.id / 4.2) || 1} • ترتيب النزول ${surah.id}`;
    if (mushafSurahSelect) mushafSurahSelect.value = surah.id;
    
    // Basmala visibility (Surah 9 At-Tawbah does NOT have Basmala)
    if (surah.id === 9) {
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

  function renderMushafVerses(surahData, targetAyahToScroll = null) {
    const ayahs = surahData.ayahs || [];
    const surahObj = SURAHS.find(s => s.id === surahData.number) || { name: surahData.name };
    let html = '';
    
    ayahs.forEach(ayah => {
      let text = ayah.text;
      // If not Fatihah & not Tawbah, strip initial Bismillah from verse 1 because of top header banner
      if (surahData.number !== 1 && ayah.numberInSurah === 1) {
        text = text.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '').trim();
      }
      const isBookmarked = khatmaBookmark && khatmaBookmark.surahId === surahData.number && khatmaBookmark.ayahNum === ayah.numberInSurah;
      const bookmarkClass = isBookmarked ? 'ayah-bookmarked' : '';
      
      html += `<span class="ayah-text ${bookmarkClass}" id="mushaf-ayah-${ayah.numberInSurah}" data-ayah="${ayah.numberInSurah}" data-global="${ayah.number}" title="انقر لفتح استوديو الآية (أو للانتقال إليها في وضع التحفيظ)">${text}</span><span class="ayah-badge" id="mushaf-badge-${ayah.numberInSurah}" data-ayah="${ayah.numberInSurah}" data-global="${ayah.number}" title="آية رقم ${ayah.numberInSurah}">﴿${toArabicNumerals(ayah.numberInSurah)}﴾</span> `;
    });

    mushafContent.innerHTML = html;
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

    // Attach Interactive Ayah Studio / Memorization Seek Listener on Ayahs
    mushafContent.querySelectorAll('.ayah-text, .ayah-badge').forEach(elem => {
      elem.addEventListener('click', () => {
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

  function toArabicNumerals(num) {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(d => arabicDigits[d]).join('');
  }

  function applyMushafFontSize() {
    if (!mushafContent) return;
    const baseRem = (1.5 * (mushafFontSize / 100)).toFixed(2);
    mushafContent.style.setProperty('--mushaf-font-size', `${baseRem}rem`);
    if (mushafFontSizeLabel) mushafFontSizeLabel.innerText = `${mushafFontSize}%`;
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
    if (navBtnPlaylist) navBtnPlaylist.addEventListener('click', () => switchView('playlist'));

    // Mobile Floating Glass Navigator Tabs
    if (mNavPlayer) mNavPlayer.addEventListener('click', () => switchView('player'));
    if (mNavMushaf) mNavMushaf.addEventListener('click', () => switchView('mushaf'));
    if (mNavSpiritual) mNavSpiritual.addEventListener('click', () => switchView('spiritual'));
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
      if (isPlaying) pauseAudio(); else playAudio();
    });

    mushafBtnPlayAudio.addEventListener('click', () => {
      if (isPlaying) pauseAudio(); else playAudio();
    });

    // 3. Next / Prev
    btnNext.addEventListener('click', nextSurah);
    btnPrev.addEventListener('click', prevSurah);
    miniBtnNext.addEventListener('click', nextSurah);
    miniBtnPrev.addEventListener('click', prevSurah);

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

    // 5. Mini Player Expand
    miniBtnExpand.addEventListener('click', () => switchView('player'));
    miniPlayerInfo.addEventListener('click', () => switchView('player'));

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
        totalDurationLabel.innerText = 'مباشر 🔴';
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

      if (miniSeekSlider && !miniSeekSlider.classList.contains('user-dragging')) {
        miniSeekSlider.value = cur;
        miniCurrentTime.innerText = formatted;
        miniTimeDisplay.innerText = `${formatted} / ${formatTime(audio.duration)}`;
      }

      if (miniProgressFill) {
        miniProgressFill.style.width = `${progressPercent}%`;
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

    audio.addEventListener('waiting', () => {
      playIcon.className = 'fa-solid fa-spinner animate-spin text-lg sm:text-xl text-slate-900';
      if (miniPlayIcon) miniPlayIcon.className = 'fa-solid fa-spinner animate-spin text-sm text-slate-900';
    });

    audio.addEventListener('playing', () => {
      playIcon.className = 'fa-solid fa-pause text-lg sm:text-xl text-slate-900';
      if (miniPlayIcon) miniPlayIcon.className = 'fa-solid fa-pause text-sm text-slate-900';
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'playing';
      }
    });

    // 8. Resilient Fallback on Audio Error
    audio.addEventListener('error', () => {
      if (isRadioMode) {
        showToast('تعذر الاتصال بالبث المباشر حالياً، جاري العودة للمشغل.', 'error');
        loadSurah(SURAHS[currentIndex], false);
        return;
      }
      const reciter = RECITERS.find(r => r.id === currentReciterId) || RECITERS[0];
      if (reciter.id !== 'hussary') {
        const fallbackReciter = RECITERS.find(r => r.id === 'hussary');
        const paddedId = SURAHS[currentIndex].id.toString().padStart(3, '0');
        audio.src = `${fallbackReciter.serverUrl}${paddedId}.mp3`;
        audio.load();
        playerAudioSource.innerHTML = `<i class="fa-solid fa-microphone"></i> ${fallbackReciter.name} <span class="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">(بديل تلقائي)</span>`;
        playerSourceBadge.innerText = fallbackReciter.shortName;
        showToast(`جاري تشغيل سورة ${SURAHS[currentIndex].name} بصوت الشيخ الحصري لضمان استمرار الاستماع.`, 'info');
        if (isPlaying) {
          playAudio();
        }
      } else {
        showToast('خطأ في تشغيل الملف الصوتي. يرجى التحقق من الاتصال بالإنترنت.', 'error');
        pauseAudio();
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
        handleSeekInput(miniSeekSlider.value);
      });

      miniSeekSlider.addEventListener('change', () => {
        miniSeekSlider.classList.remove('user-dragging');
        handleSeekChange(miniSeekSlider.value);
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
        showToast('انتهت السورة وتم إيقاف المشغل تلقائياً حسب مؤقت النوم 🌙');
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
      { elem: tabFavorites, id: 'favorites' },
      { elem: tabMakki, id: 'makki' },
      { elem: tabMadani, id: 'madani' }
    ];

    filterTabs.forEach(({ elem, id }) => {
      if (!elem) return;
      elem.addEventListener('click', () => {
        if (currentTab === id) return;
        currentTab = id;

        filterTabs.forEach(f => {
          if (!f.elem) return;
          if (f.id === currentTab) {
            f.elem.className = 'filter-tab px-2.5 py-1.5 rounded-xl font-semibold transition-all duration-200 bg-amber-500/15 text-amber-400 border border-amber-500/25 flex-shrink-0';
          } else {
            f.elem.className = 'filter-tab px-2.5 py-1.5 rounded-xl font-semibold transition-all duration-200 text-[var(--text-secondary)] hover:bg-emerald-500/10 flex-shrink-0';
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

    // 16. Mushaf Surah Selector Change
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

    // 17. Mushaf Font Zoom Buttons
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

    // 20. Download Mp3 Button
    btnDownload.addEventListener('click', () => {
      const surah = SURAHS[currentIndex];
      const reciter = RECITERS.find(r => r.id === currentReciterId) || RECITERS[0];
      const audioInfo = getSurahAudioUrl(reciter, surah.id);
      
      window.open(audioInfo.url, '_blank');
      showToast(`جاري تحويلك لتحميل سورة ${surah.name}...`);
    });

    // 21. Keyboard & TV Remote Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

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
      }
    });
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
        showToast(`تم حفظ فاصل الختمة عند سورة ${currentStudioContext.surahName} - الآية ${currentStudioContext.ayahNum} 🔖`);
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
      showToast('تم تفعيل وضع التحفيظ والتتبع الحي للآيات مع القارئ ✨');
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
          showToast('تم تفعيل وضع التحفيظ — سيتم عمل Hover وتتبع تلقائي للآية التي يقرؤها الشيخ 🎯');
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
          showToast('تم تفعيل اختبار الحفظ (تمويه النص) — الآية التي يتلوها القارئ أو تلمسها تظهر بوضوح ✨');
        } else {
          mushafContent.classList.remove('mushaf-memorize-blur');
          btnMemorizeBlur.className = 'px-2.5 py-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/20 text-[var(--text-secondary)] hover:text-amber-400 font-semibold text-[11px] flex items-center gap-1.5 transition-all';
          showToast('تم إظهار نص المصحف بالكامل', 'info');
        }
      });
    }

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
    const qdcId = getQdcReciterId(currentReciterId);
    const cacheKey = `${qdcId}_${surahId}`;
    if (surahTimestampsCache[cacheKey] && surahTimestampsCache[cacheKey].length > 0) {
      return surahTimestampsCache[cacheKey];
    }

    // Instant proportional fallback based on Uthmani verse character lengths
    const surahData = mushafCache[surahId];
    if (!surahData || !Array.isArray(surahData.ayahs) || surahData.ayahs.length === 0) {
      return [];
    }
    const ayahs = surahData.ayahs;
    const weights = ayahs.map(a => Math.max(18, (a.text || '').length + 14));
    const totalWeight = weights.reduce((acc, w) => acc + w, 0) || 1;
    let cumulative = 0;
    return ayahs.map((a, idx) => {
      const startRatio = cumulative / totalWeight;
      cumulative += weights[idx];
      const endRatio = cumulative / totalWeight;
      return {
        ayahNum: a.numberInSurah,
        startRatio,
        endRatio
      };
    });
  }

  function clearLiveMushafAyahHover() {
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

    let targetAyahNum = 1;
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
      memorizeLiveAyahText.innerText = `${isPlaying ? '🔊 القارئ يتلو الآن:' : '🎯 الآية المحددة:'} آية ${targetAyahNum} من ${playingSurah.versesCount}${repeatSuffix}`;
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

    showToast(`انتقال القارئ لتلاوة الآية (${ayahNum}) — اضغط "تفسير الآية" بالأعلى لعرض التفسير 🎯`);
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

  function toggleSingleAyahAudio(globalAyah) {
    if (!ayahSingleAudio || !globalAyah) return;
    const icon = document.getElementById('studio-play-icon');
    const lbl = document.getElementById('studio-play-label');
    const targetUrl = `https://cdn.islamic.network/quran/audio/128/ar.husary/${globalAyah}.mp3`;

    if (!ayahSingleAudio.paused && ayahSingleAudio.src === targetUrl) {
      ayahSingleAudio.pause();
      if (icon) icon.className = 'fa-solid fa-play';
      if (lbl) lbl.innerText = 'استماع للآية';
      return;
    }

    if (isPlaying) pauseAudio();
    ayahSingleAudio.src = targetUrl;
    ayahSingleAudio.play().then(() => {
      if (icon) icon.className = 'fa-solid fa-pause';
      if (lbl) lbl.innerText = 'إيقاف الآية';
    }).catch(() => {
      showToast('تعذر تشغيل صوت الآية المنفردة حالياً', 'error');
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
      if (sleepTimerBadge) sleepTimerBadge.innerText = 'نهاية السورة 🌙';
      if (statusEl) statusEl.innerText = 'يتوقف بنهاية السورة';
      showToast('سيتم إيقاف التلاوة تلقائياً فور انتهاء السورة الحالية 🌙');
      return;
    }

    sleepTimerMode = mode;
    sleepRemainingSec = mode * 60;
    const savedUserVol = audio.volume || 0.85;

    const updateTimerLabels = () => {
      const m = Math.floor(sleepRemainingSec / 60);
      const s = (sleepRemainingSec % 60).toString().padStart(2, '0');
      if (sleepTimerBadge) sleepTimerBadge.innerText = `${m}:${s} 🌙`;
      if (statusEl) statusEl.innerText = `متبقي ${m}:${s}`;
    };
    updateTimerLabels();
    showToast(`تم ضبط مؤقت النوم على ${mode} دقيقة مع خفض تدريجي للصوت 🌙`);

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
        showToast('تصبحون على خير وطمأنينة — تم إيقاف المشغل تلقائياً 🌙');
      } else {
        updateTimerLabels();
      }
    }, 1000);
  }

  // --- Zero-Bandwidth Procedural Web Audio API Nature Ambience Generator ---
  function stopAmbienceNodes() {
    ambienceSourceNodes.forEach(node => {
      try { node.stop(); } catch (e) {}
      try { node.disconnect(); } catch (e) {}
    });
    ambienceSourceNodes = [];
  }

  function setNatureAmbience(type) {
    ambienceMode = type;
    stopAmbienceNodes();

    if (type === 'none') {
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      showToast('متصفحك لا يدعم توليد أصوات الطبيعة تلقائياً', 'error');
      return;
    }
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // Create 4-second looping pink/brown noise buffer (0 KB internet bandwidth!)
    const bufferSize = audioCtx.sampleRate * 4;
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
    ambienceGainNode.gain.value = ambienceVolume * 0.25;

    if (type === 'rain') {
      filter.type = 'bandpass';
      filter.frequency.value = 1100;
      filter.Q.value = 0.65;
      showToast('تم تشغيل خلفية صوت المطر الهادئ 🌧️ (بدون استهلاك إنترنت)');
    } else if (type === 'breeze') {
      filter.type = 'lowpass';
      filter.frequency.value = 420;
      // Slow LFO modulation for natural wind swell
      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.value = 0.14;
      lfoGain.gain.value = 220;
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();
      ambienceSourceNodes.push(lfo);
      showToast('تم تشغيل خلفية نسيم الفجر الهادئ 🍃');
    } else if (type === 'night') {
      filter.type = 'lowpass';
      filter.frequency.value = 240;
      showToast('تم تشغيل خلفية سكون الليل العميق 🌌');
    }

    whiteNoise.connect(filter);
    filter.connect(ambienceGainNode);
    ambienceGainNode.connect(audioCtx.destination);
    whiteNoise.start();
    ambienceSourceNodes.push(whiteNoise);
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
    isRadioMode = true;
    activeRadioStation = station;
    resetAbLoop(false);

    audio.src = station.url;
    audio.playbackRate = 1.0;
    audio.load();

    playerSurahNumber.innerText = 'بث مباشر 🔴';
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
    showToast(`تم الاتصال بـ ${station.name} 🔴`);
  }

  // --- Spiritual Companion Hub (Khatma, Mood Compass, Azkar, Sebha) ---
  function initSpiritualCompanionHub() {
    updateKhatmaDashboard();

    // Sub-tabs navigation inside #spiritual-view
    const khatmaCard = document.getElementById('khatma-dashboard-card');
    const spTabs = [
      { id: 'sebha', btn: document.getElementById('sp-tab-sebha'), panel: document.getElementById('sp-panel-sebha') },
      { id: 'azkar', btn: document.getElementById('sp-tab-azkar'), panel: document.getElementById('sp-panel-azkar') },
      { id: 'compass', btn: document.getElementById('sp-tab-compass'), panel: document.getElementById('sp-panel-compass') }
    ];

    spTabs.forEach(({ id, btn, panel }) => {
      if (!btn || !panel) return;
      btn.addEventListener('click', () => {
        spTabs.forEach(t => {
          if (!t.btn || !t.panel) return;
          t.panel.classList.add('hidden');
          t.btn.className = 'sp-subtab px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all text-[var(--text-secondary)] hover:text-amber-400 bg-emerald-950/40 border border-emerald-500/15 flex-shrink-0';
        });
        panel.classList.remove('hidden');
        btn.className = 'sp-subtab px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all bg-amber-500/20 text-amber-400 border border-amber-500/30 flex-shrink-0';
        
        // Full focus on Sebha on mobile: collapse or minimize khatma card when in Sebha mode
        if (khatmaCard) {
          if (id === 'sebha' && window.innerWidth < 1024) {
            khatmaCard.classList.add('hidden');
          } else {
            khatmaCard.classList.remove('hidden');
          }
        }
      });
    });

    // 1. Render Mood Compass
    if (typeof MOOD_COMPASS !== 'undefined') {
      const moodGrid = document.getElementById('mood-buttons-grid');
      if (moodGrid) {
        moodGrid.innerHTML = '';
        MOOD_COMPASS.forEach((mood, idx) => {
          const btn = document.createElement('button');
          btn.className = `mood-pill-btn p-2.5 rounded-2xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
            idx === 0
              ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 shadow'
              : 'bg-emerald-950/40 text-[var(--text-secondary)] border-emerald-500/15 hover:text-amber-400'
          }`;
          btn.innerHTML = `<i class="${mood.icon} text-base"></i><span class="truncate">${mood.title}</span>`;
          btn.addEventListener('click', () => {
            document.querySelectorAll('.mood-pill-btn').forEach(b => {
              b.className = 'mood-pill-btn p-2.5 rounded-2xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all bg-emerald-950/40 text-[var(--text-secondary)] border-emerald-500/15 hover:text-amber-400';
            });
            btn.className = 'mood-pill-btn p-2.5 rounded-2xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all bg-amber-500/20 text-amber-400 border-amber-500/40 shadow';
            renderMoodVerses(mood);
          });
          moodGrid.appendChild(btn);
        });
        renderMoodVerses(MOOD_COMPASS[0]);
      }
    }

    // 2. Render Interactive Azkar
    if (typeof AZKAR_DATA !== 'undefined') {
      let currentAzkarCat = 'morning';
      document.querySelectorAll('.azkar-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          currentAzkarCat = btn.getAttribute('data-azkar-cat');
          document.querySelectorAll('.azkar-cat-btn').forEach(b => {
            if (b.getAttribute('data-azkar-cat') === currentAzkarCat) {
              b.className = 'azkar-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30';
            } else {
              b.className = 'azkar-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold text-[var(--text-secondary)] bg-emerald-950/50 border border-emerald-500/15';
            }
          });
          renderAzkarList(currentAzkarCat);
        });
      });

      const resetAzkarBtn = document.getElementById('btn-reset-azkar');
      if (resetAzkarBtn) {
        resetAzkarBtn.addEventListener('click', () => {
          renderAzkarList(currentAzkarCat);
          showToast('تمت إعادة ضبط عدادات الأذكار');
        });
      }
      renderAzkarList('morning');
    }

    // 3. Initialize Digital Sebha
    initDigitalSebha();
  }

  function updateKhatmaDashboard() {
    const surahsCountEl = document.getElementById('khatma-surahs-count');
    const minutesCountEl = document.getElementById('khatma-minutes-count');
    const bookmarkEl = document.getElementById('khatma-bookmark-display');
    const progressFill = document.getElementById('khatma-progress-fill');
    const mushafBookmarkBtnText = document.getElementById('mushaf-bookmark-btn-text');

    if (surahsCountEl) surahsCountEl.innerText = `${listenedSurahs.length} / 114`;
    if (minutesCountEl) minutesCountEl.innerText = `${Math.max(1, Math.floor(listeningSeconds / 60))} دقيقة`;

    if (khatmaBookmark) {
      if (bookmarkEl) {
        bookmarkEl.innerText = `فاصل الختمة المحفوظ: سورة ${khatmaBookmark.surahName} • الآية ${khatmaBookmark.ayahNum}`;
      }
      if (mushafBookmarkBtnText) {
        mushafBookmarkBtnText.innerText = `${khatmaBookmark.surahName}: ${khatmaBookmark.ayahNum}`;
      }
    }

    if (progressFill) {
      const pct = Math.max(2, Math.min(100, Math.round((listenedSurahs.length / 114) * 100)));
      progressFill.style.width = `${pct}%`;
    }
  }

  function renderMoodVerses(mood) {
    const container = document.getElementById('mood-verses-container');
    if (!container || !mood) return;
    container.innerHTML = '';

    mood.verses.forEach(v => {
      const card = document.createElement('div');
      card.className = 'surah-frame rounded-2xl p-4 space-y-2.5';
      card.innerHTML = `
        <div class="flex items-center justify-between flex-wrap gap-2">
          <span class="text-xs font-bold text-amber-400">سورة ${v.surahName} • الآية ${v.ayahNum}</span>
          <div class="flex items-center gap-1.5">
            <button class="btn-mood-play px-2.5 py-1 rounded-xl bg-amber-500 text-slate-900 font-bold text-[11px] flex items-center gap-1 hover:bg-amber-400 transition-all">
              <i class="fa-solid fa-play text-[10px]"></i> استماع للآية
            </button>
            <button class="btn-mood-mushaf px-2.5 py-1 rounded-xl bg-emerald-950/60 border border-emerald-500/25 text-emerald-300 text-[11px] font-semibold hover:bg-emerald-500/20 transition-all">
              فتح في المصحف
            </button>
            <button class="btn-mood-card px-2.5 py-1 rounded-xl bg-emerald-950/60 border border-amber-500/25 text-amber-300 text-[11px] font-semibold hover:bg-amber-500/20 transition-all" title="تحميل بطاقة مصورة">
              <i class="fa-solid fa-image"></i>
            </button>
          </div>
        </div>
        <p class="font-quran-text text-lg sm:text-xl text-[var(--text-primary)] leading-loose">﴿ ${v.text} ﴾</p>
        <p class="text-xs text-[var(--text-secondary)] bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/15">
          <i class="fa-solid fa-lightbulb text-amber-400 ml-1"></i> ${v.reflection}
        </p>
      `;

      card.querySelector('.btn-mood-play').addEventListener('click', () => {
        toggleSingleAyahAudio(v.globalAyah);
        showToast(`استماع للآية ${v.ayahNum} من سورة ${v.surahName}`);
      });

      card.querySelector('.btn-mood-mushaf').addEventListener('click', () => {
        const idx = SURAHS.findIndex(s => s.id === v.surahId);
        if (idx !== -1) {
          currentIndex = idx;
          loadSurah(SURAHS[currentIndex], isPlaying);
        }
        switchView('mushaf');
        loadSurahMushaf(v.surahId, v.ayahNum);
      });

      card.querySelector('.btn-mood-card').addEventListener('click', () => {
        generateAyahImageCard(v.surahName, v.ayahNum, v.text);
      });

      container.appendChild(card);
    });
  }

  function renderAzkarList(category) {
    const container = document.getElementById('azkar-cards-container');
    if (!container || !AZKAR_DATA[category]) return;
    container.innerHTML = '';

    AZKAR_DATA[category].forEach(z => {
      let remaining = z.count;
      const card = document.createElement('div');
      card.className = 'surah-card p-3.5 sm:p-4 rounded-2xl cursor-pointer select-none transition-all space-y-2';
      card.innerHTML = `
        <p class="font-quran-text text-base sm:text-lg text-[var(--text-primary)] leading-relaxed">${z.text}</p>
        <div class="flex items-center justify-between pt-2 border-t border-emerald-500/10 text-xs">
          <span class="text-[11px] text-[var(--text-secondary)]"><i class="fa-solid fa-star text-amber-400 ml-1"></i>${z.virtue}</span>
          <span class="azkar-counter-badge px-3 py-1 rounded-xl bg-amber-500 text-slate-900 font-bold text-xs min-w-[75px] text-center">
            التكرار: ${remaining}
          </span>
        </div>
      `;

      card.addEventListener('click', () => {
        if (remaining <= 0) return;
        remaining--;
        const badge = card.querySelector('.azkar-counter-badge');
        if (remaining === 0) {
          card.classList.add('azkar-card-completed');
          badge.className = 'azkar-counter-badge px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-xs min-w-[75px] text-center';
          badge.innerHTML = '<i class="fa-solid fa-check ml-1"></i> اكتمل';
        } else {
          badge.innerText = `المتبقي: ${remaining}`;
        }
      });

      container.appendChild(card);
    });
  }

  function initDigitalSebha() {
    const select = document.getElementById('sebha-phrase-select');
    const tapBtn = document.getElementById('sebha-tap-btn');
    const curEl = document.getElementById('sebha-current-count');
    const totEl = document.getElementById('sebha-total-count');
    const resetBtn = document.getElementById('sebha-reset-btn');
    if (!select || !tapBtn || typeof TASBEEH_PHRASES === 'undefined') return;

    select.innerHTML = '';
    TASBEEH_PHRASES.forEach((p, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.innerText = p;
      opt.className = 'bg-emerald-950 text-white';
      select.appendChild(opt);
    });

    let currentCount = 0;
    let totalCount = parseInt(localStorage.getItem('quran_sebha_total')) || 0;
    if (totEl) totEl.innerText = totalCount;

    // Quick dhikr pills handler
    const quickPills = document.querySelectorAll('.sebha-quick-pill');
    quickPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const pIdx = parseInt(pill.getAttribute('data-phrase-idx'));
        if (select) {
          select.value = pIdx;
          currentCount = 0;
          if (curEl) curEl.innerText = '0';
          quickPills.forEach(p => {
            p.className = 'sebha-quick-pill px-2.5 py-1 rounded-xl text-[11px] font-bold text-[var(--text-secondary)] bg-emerald-950/60 border border-emerald-500/15 flex-shrink-0 transition-all';
          });
          pill.className = 'sebha-quick-pill active px-2.5 py-1 rounded-xl text-[11px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 flex-shrink-0 transition-all';
          if (navigator.vibrate) navigator.vibrate(25);
          showToast(`تم اختيار: ${TASBEEH_PHRASES[pIdx] || ''}`);
        }
      });
    });

    select.addEventListener('change', () => {
      currentCount = 0;
      if (curEl) curEl.innerText = '0';
      const curIdx = parseInt(select.value);
      quickPills.forEach(p => {
        if (parseInt(p.getAttribute('data-phrase-idx')) === curIdx) {
          p.className = 'sebha-quick-pill active px-2.5 py-1 rounded-xl text-[11px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 flex-shrink-0 transition-all';
        } else {
          p.className = 'sebha-quick-pill px-2.5 py-1 rounded-xl text-[11px] font-bold text-[var(--text-secondary)] bg-emerald-950/60 border border-emerald-500/15 flex-shrink-0 transition-all';
        }
      });
    });

    tapBtn.addEventListener('click', () => {
      currentCount++;
      totalCount++;
      if (curEl) curEl.innerText = currentCount;
      if (totEl) totEl.innerText = totalCount;
      localStorage.setItem('quran_sebha_total', totalCount);
      if (navigator.vibrate) {
        navigator.vibrate(currentCount % 33 === 0 ? [40, 60, 40] : 20);
      }
      if (currentCount % 33 === 0) {
        showToast(`ما شاء الله! أتممت ${currentCount} تسبيحة في هذه الدورة ✨`);
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentCount = 0;
        if (curEl) curEl.innerText = '0';
        if (navigator.vibrate) navigator.vibrate(15);
        showToast('تم تصفير عداد الدورة الحالية');
      });
    }
  }

  // --- Toast Notification Helper ---
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
