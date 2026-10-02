// Quran Stream Platform - Player & Mushaf Controller
document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const audio = document.getElementById('main-audio');
  const playlistContainer = document.getElementById('playlist-container');
  const playlistSection = document.getElementById('playlist-section');
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const tabAll = document.getElementById('tab-all');
  const tabFavorites = document.getElementById('tab-favorites');
  const allCount = document.getElementById('all-count');
  const favCount = document.getElementById('fav-count');
  const playlistStatCount = document.getElementById('playlist-stat-count');
  
  // Header Elements
  const reciterSelect = document.getElementById('reciter-select');
  const appSubtitle = document.getElementById('app-subtitle');
  const brandLogo = document.getElementById('brand-logo');
  
  // Navigation Tabs
  const navBtnPlayer = document.getElementById('nav-btn-player');
  const navBtnMushaf = document.getElementById('nav-btn-mushaf');
  const navBtnPlaylist = document.getElementById('nav-btn-playlist');
  const desktopTabPlayer = document.getElementById('desktop-tab-player');
  const desktopTabMushaf = document.getElementById('desktop-tab-mushaf');
  const desktopCurrentSurahIndicator = document.getElementById('desktop-current-surah-indicator');

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
  const micIcon = document.getElementById('mic-icon');
  const waveVisualizer = document.getElementById('wave-visualizer');
  
  // Playback Control Elements
  const btnPlayPause = document.getElementById('btn-play-pause');
  const playIcon = document.getElementById('play-icon');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
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
  const mushafFontSizeLabel = document.getElementById('mushaf-font-size-label');
  const mushafBtnPlayAudio = document.getElementById('mushaf-btn-play-audio');
  const mushafPlayIcon = document.getElementById('mushaf-play-icon');
  const mushafScrollArea = document.getElementById('mushaf-scroll-area');
  const mushafBasmala = document.getElementById('mushaf-basmala');
  const mushafContent = document.getElementById('mushaf-content');

  // Mini-Player Elements
  const miniPlayer = document.getElementById('mini-player');
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
  let currentTab = 'all'; // 'all' or 'favorites'
  let searchQuery = '';
  let favorites = JSON.parse(localStorage.getItem('quran_favorites')) || [];
  let currentReciterId = localStorage.getItem('quran_reciter') || 'hussary';
  let currentView = 'player'; // 'player', 'mushaf', 'playlist'
  
  // Playback mode: 'repeat-all' (default), 'repeat-one', 'none'
  let repeatMode = localStorage.getItem('quran_repeat_mode') || 'repeat-all';
  let isShuffle = localStorage.getItem('quran_shuffle_mode') === 'true';

  // Mushaf Cache and Zoom state
  let mushafCache = {};
  let mushafFontSize = parseInt(localStorage.getItem('quran_mushaf_font_size')) || 100;

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

    // 9. Initial View Responsive Configuration
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
      if (currentView === 'mushaf') {
        playerView.classList.add('hidden');
        mushafView.classList.remove('hidden');
        miniPlayer.classList.remove('hidden');
      } else {
        playerView.classList.remove('hidden');
        mushafView.classList.add('hidden');
        miniPlayer.classList.add('hidden');
      }
    } else {
      // Mobile / Tablet view mode update
      switchView(currentView, false);
    }
  }

  function switchView(targetView, shouldScroll = true) {
    currentView = targetView;
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      playlistSection.classList.remove('hidden');
      if (targetView === 'mushaf') {
        playerView.classList.add('hidden');
        mushafView.classList.remove('hidden');
        miniPlayer.classList.remove('hidden');

        desktopTabPlayer.className = 'px-4 py-1.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all text-[var(--text-secondary)] hover:text-amber-400 hover:bg-emerald-500/5';
        desktopTabMushaf.className = 'px-4 py-1.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all bg-amber-500/20 text-amber-400 border border-amber-500/30';
        loadSurahMushaf(SURAHS[currentIndex].id);
      } else {
        mushafView.classList.add('hidden');
        playerView.classList.remove('hidden');
        miniPlayer.classList.add('hidden');

        desktopTabMushaf.className = 'px-4 py-1.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all text-[var(--text-secondary)] hover:text-amber-400 hover:bg-emerald-500/5';
        desktopTabPlayer.className = 'px-4 py-1.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all bg-amber-500/20 text-amber-400 border border-amber-500/30';
      }
    } else {
      // Mobile View handling
      const tabInactive = 'nav-tab-btn flex-1 md:flex-initial px-3 py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 text-[var(--text-secondary)] hover:text-amber-400 hover:bg-emerald-500/5';
      const tabActive = 'nav-tab-btn flex-1 md:flex-initial px-3 py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 bg-amber-500/20 text-amber-400 border border-amber-500/30';

      navBtnPlayer.className = tabInactive;
      navBtnMushaf.className = tabInactive;
      if (navBtnPlaylist) navBtnPlaylist.className = tabInactive + ' lg:hidden';

      if (targetView === 'player') {
        navBtnPlayer.className = tabActive;
        playerView.classList.remove('hidden');
        mushafView.classList.add('hidden');
        playlistSection.classList.add('hidden');
        miniPlayer.classList.add('hidden');
        if (shouldScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (targetView === 'mushaf') {
        navBtnMushaf.className = tabActive;
        playerView.classList.add('hidden');
        mushafView.classList.remove('hidden');
        playlistSection.classList.add('hidden');
        miniPlayer.classList.remove('hidden');
        loadSurahMushaf(SURAHS[currentIndex].id);
        if (shouldScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (targetView === 'playlist') {
        if (navBtnPlaylist) navBtnPlaylist.className = tabActive + ' lg:hidden';
        playerView.classList.add('hidden');
        mushafView.classList.add('hidden');
        playlistSection.classList.remove('hidden');
        miniPlayer.classList.remove('hidden');
        if (shouldScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
      }
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
      option.className = 'bg-emerald-950 text-white py-1';
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
    if (playlistStatCount) {
      playlistStatCount.innerText = currentTab === 'favorites' ? favorites.length : SURAHS.length;
    }
  }

  // --- Normalizing Arabic for Smart Search ---
  function normalizeArabic(text) {
    if (!text) return '';
    return text
      .trim()
      .replace(/[\u064B-\u065F]/g, '') // Remove tashkeel (diacritics)
      .replace(/[أإآ]/g, 'ا')         // Normalise Alef
      .replace(/ة/g, 'ه')            // Normalise Teh Marbuta
      .replace(/ى/g, 'ي')            // Normalise Alef Maksura
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
        const idMatch = s.id.toString() === searchQuery;
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
          <p class="text-xs text-slate-400">انقر فوق أيقونة القلب على أي سورة لإضافتها هنا لتصفحها سريعاً.</p>
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
      card.className = `surah-card p-3 sm:p-3.5 rounded-2xl flex items-center justify-between cursor-pointer mb-2.5 animate-slide-in ${isCurrent ? 'active' : ''}`;
      card.setAttribute('data-id', surah.id);
      
      card.innerHTML = `
        <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <!-- Surah Number badge -->
          <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-950/50 border border-emerald-500/10 flex items-center justify-center font-bold text-xs text-amber-500 shadow-inner flex-shrink-0">
            ${surah.id}
          </div>
          
          <!-- Surah Info -->
          <div class="min-w-0">
            <div class="flex items-center gap-1.5">
              <h3 class="font-bold text-xs sm:text-sm text-[var(--text-primary)] font-quran truncate">${surah.name}</h3>
              <span class="text-[10px] text-[var(--text-secondary)] opacity-80 flex items-center gap-0.5 flex-shrink-0">
                ${surah.revelationPlace === 'makkah' 
                  ? '<i class="fa-solid fa-kaaba text-[8px] text-amber-500"></i> مكية' 
                  : '<i class="fa-solid fa-mosque text-[8px] text-emerald-500"></i> مدنية'}
              </span>
              ${!isAvailable ? '<span class="text-[9px] px-1 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20" title="سورة غير مسجلة بصوت القارئ المختار - يتم تشغيل الحصري كبديل">بديل</span>' : ''}
            </div>
            <p class="text-[10px] sm:text-[11px] text-[var(--text-secondary)] mt-0.5 truncate">${surah.englishName} • ${surah.versesCount} آية</p>
          </div>
        </div>

        <div class="flex items-center gap-1.5 flex-shrink-0">
          <!-- Direct Read in Mushaf icon -->
          <button class="btn-card-read w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-amber-400 hover:bg-emerald-500/10 transition-colors" data-id="${surah.id}" title="قراءة السورة في المصحف">
            <i class="fa-solid fa-book-open text-xs"></i>
          </button>
          
          <!-- Favorite Button -->
          <button class="btn-fav-toggle w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors" data-id="${surah.id}" title="إضافة للمفضلة">
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
    
    // Check if this reciter has recorded this surah
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
    }

    // Update Player Details UI
    playerSurahNumber.innerText = `السورة ${surah.id}`;
    playerSurahName.innerText = `سورة ${surah.name}`;
    playerSurahEnglish.innerText = surah.englishName;
    playerVerses.innerHTML = `<i class="fa-solid fa-list-ol"></i> ${surah.versesCount} آية`;
    
    if (surah.revelationPlace === 'makkah') {
      playerRevelation.innerHTML = '<i class="fa-solid fa-kaaba text-amber-500"></i> مكية';
    } else {
      playerRevelation.innerHTML = '<i class="fa-solid fa-mosque text-emerald-500"></i> مدنية';
    }

    // Handle Fallback Audio source message
    if (audioInfo.isFallback) {
      playerAudioSource.innerHTML = `<i class="fa-solid fa-microphone"></i> ${audioInfo.fallbackReciter.name} <span class="text-[10px] text-amber-400 bg-amber-500/10 px-1 rounded">(بديل)</span>`;
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
      btnPlayerFav.querySelector('span').innerText = 'أضف للمفضلة';
    }

    // Update Desktop Header Indicator
    if (desktopCurrentSurahIndicator) {
      desktopCurrentSurahIndicator.innerText = `سورة ${surah.name} - ${surah.versesCount} آية`;
    }

    // Synchronize Mini Player UI
    updateMiniPlayerInfo(surah, audioInfo.isFallback ? audioInfo.fallbackReciter : reciter);

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

  // --- Audio Play / Pause Execution ---
  function playAudio() {
    isPlaying = true;
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Main Button
        playIcon.className = 'fa-solid fa-pause text-xl sm:text-2xl text-slate-900';
        btnPlayPause.className = 'w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-lg border-4 border-emerald-950/20 pulse-glow-active';
        
        // Mini Player Button
        if (miniPlayIcon) miniPlayIcon.className = 'fa-solid fa-pause text-sm sm:text-base text-slate-900';
        if (miniIcon) miniIcon.className = 'fa-solid fa-volume-high text-xs text-amber-400 animate-pulse';
        if (mushafPlayIcon) mushafPlayIcon.className = 'fa-solid fa-pause';

        // Animations
        artworkMandala.classList.remove('spin-paused');
        waveVisualizer.classList.remove('visualizer-paused');
        micIcon.className = 'fa-solid fa-volume-high text-base sm:text-lg text-amber-400 animate-pulse';
      }).catch(err => {
        // AbortError is normal if rapidly switched
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
    playIcon.className = 'fa-solid fa-play text-xl sm:text-2xl mr-0.5 text-slate-900';
    btnPlayPause.className = 'w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-lg border-4 border-emerald-950/20';
    
    // Mini Player Button
    if (miniPlayIcon) miniPlayIcon.className = 'fa-solid fa-play text-sm sm:text-base mr-0.5 text-slate-900';
    if (miniIcon) miniIcon.className = 'fa-solid fa-music text-sm text-amber-400';
    if (mushafPlayIcon) mushafPlayIcon.className = 'fa-solid fa-play';

    // Animations
    artworkMandala.classList.add('spin-paused');
    waveVisualizer.classList.add('visualizer-paused');
    micIcon.className = 'fa-solid fa-microphone text-base sm:text-lg text-amber-500';
  }

  // --- Mushaf Reading Mode Logic ---
  function loadSurahMushaf(surahId) {
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
      renderMushafVerses(mushafCache[surahId]);
      return;
    }

    // Check LocalStorage Cache
    const localData = localStorage.getItem(`quran_mushaf_${surahId}`);
    if (localData) {
      try {
        const parsed = JSON.parse(localData);
        mushafCache[surahId] = parsed;
        renderMushafVerses(parsed);
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
    fetch(`https://api.alquran.cloud/v1/surah/${surahId}/quran-uthmani`)
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(json => {
        if (json && json.data && json.data.ayahs) {
          mushafCache[surahId] = json.data;
          try {
            localStorage.setItem(`quran_mushaf_${surahId}`, JSON.stringify(json.data));
          } catch (e) {}
          renderMushafVerses(json.data);
        } else {
          throw new Error('Malformed Quran data');
        }
      })
      .catch(err => {
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
          retryBtn.addEventListener('click', () => loadSurahMushaf(surahId));
        }
      });
  }

  function renderMushafVerses(surahData) {
    const ayahs = surahData.ayahs || [];
    let html = '';
    
    ayahs.forEach(ayah => {
      let text = ayah.text;
      // If not Fatihah & not Tawbah, strip initial Bismillah from verse 1 because of top header banner
      if (surahData.number !== 1 && ayah.numberInSurah === 1) {
        text = text.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '').trim();
      }
      
      html += `<span class="ayah-text" data-ayah="${ayah.numberInSurah}">${text}</span><span class="ayah-badge" title="آية رقم ${ayah.numberInSurah}">﴿${toArabicNumerals(ayah.numberInSurah)}﴾</span> `;
    });

    mushafContent.innerHTML = html;
    mushafScrollArea.scrollTop = 0;
  }

  function toArabicNumerals(num) {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(d => arabicDigits[d]).join('');
  }

  function applyMushafFontSize() {
    if (!mushafContent) return;
    const baseRem = (1.45 * (mushafFontSize / 100)).toFixed(2);
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
        btnPlayerFav.querySelector('span').innerText = 'أضف للمفضلة';
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
      if (cardId === SURAHS[currentIndex].id) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
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
      btnShuffle.classList.add('text-amber-500');
      btnShuffle.classList.remove('text-[var(--text-secondary)]');
      btnShuffle.setAttribute('title', 'إلغاء وضع التشغيل العشوائي');
    } else {
      btnShuffle.classList.remove('text-amber-500');
      btnShuffle.classList.add('text-[var(--text-secondary)]');
      btnShuffle.setAttribute('title', 'تشغيل عشوائي');
    }

    const repeatIcon = btnRepeat.querySelector('i');
    if (repeatMode === 'repeat-one') {
      btnRepeat.classList.add('text-amber-500');
      btnRepeat.classList.remove('text-[var(--text-secondary)]');
      repeatIcon.className = 'fa-solid fa-repeat-1 fa-repeat';
      btnRepeat.setAttribute('title', 'تكرار السورة الحالية');
    } else if (repeatMode === 'repeat-all') {
      btnRepeat.classList.add('text-amber-500');
      btnRepeat.classList.remove('text-[var(--text-secondary)]');
      repeatIcon.className = 'fa-solid fa-repeat';
      btnRepeat.setAttribute('title', 'تكرار الكل');
    } else {
      btnRepeat.classList.remove('text-amber-500');
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
    // 1. Navigation Mode Tabs
    navBtnPlayer.addEventListener('click', () => switchView('player'));
    navBtnMushaf.addEventListener('click', () => switchView('mushaf'));
    if (navBtnPlaylist) navBtnPlaylist.addEventListener('click', () => switchView('playlist'));
    
    desktopTabPlayer.addEventListener('click', () => switchView('player'));
    desktopTabMushaf.addEventListener('click', () => switchView('mushaf'));
    
    btnReadInMushaf.addEventListener('click', () => switchView('mushaf'));
    brandLogo.addEventListener('click', () => switchView('player'));

    // 2. Play / Pause Click
    btnPlayPause.addEventListener('click', () => {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    });

    miniBtnPlayPause.addEventListener('click', () => {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    });

    mushafBtnPlayAudio.addEventListener('click', () => {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    });

    // 3. Next / Prev
    btnNext.addEventListener('click', nextSurah);
    btnPrev.addEventListener('click', prevSurah);
    miniBtnNext.addEventListener('click', nextSurah);
    miniBtnPrev.addEventListener('click', prevSurah);

    // 4. Mini Player Expand
    miniBtnExpand.addEventListener('click', () => switchView('player'));
    miniPlayerInfo.addEventListener('click', () => switchView('player'));

    // 5. Shuffle & Repeat
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

    // 6. Audio Event Handlers
    audio.addEventListener('loadedmetadata', () => {
      const dur = Math.floor(audio.duration);
      seekSlider.max = dur;
      seekSlider.disabled = false;
      totalDurationLabel.innerText = formatTime(audio.duration);

      if (miniSeekSlider) {
        miniSeekSlider.max = dur;
        miniSeekSlider.disabled = false;
        miniTotalDuration.innerText = formatTime(audio.duration);
      }
    });

    audio.addEventListener('timeupdate', () => {
      const cur = Math.floor(audio.currentTime);
      const formatted = formatTime(cur);

      if (!seekSlider.classList.contains('user-dragging')) {
        seekSlider.value = cur;
        currentTimeLabel.innerText = formatted;
      }

      if (miniSeekSlider && !miniSeekSlider.classList.contains('user-dragging')) {
        miniSeekSlider.value = cur;
        miniCurrentTime.innerText = formatted;
        miniTimeDisplay.innerText = `${formatted} / ${formatTime(audio.duration)}`;
      }
    });

    audio.addEventListener('waiting', () => {
      playIcon.className = 'fa-solid fa-spinner animate-spin text-xl sm:text-2xl text-slate-900';
      if (miniPlayIcon) miniPlayIcon.className = 'fa-solid fa-spinner animate-spin text-sm text-slate-900';
    });

    audio.addEventListener('playing', () => {
      playIcon.className = 'fa-solid fa-pause text-xl sm:text-2xl text-slate-900';
      if (miniPlayIcon) miniPlayIcon.className = 'fa-solid fa-pause text-sm text-slate-900';
    });

    // 7. Resilient Fallback on Audio Error
    audio.addEventListener('error', () => {
      const reciter = RECITERS.find(r => r.id === currentReciterId) || RECITERS[0];
      if (reciter.id !== 'hussary') {
        // Fallback to Sheikh Al-Hussary
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

    // 8. Seek Slider Interaction (Desktop and Touch for Mobile)
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

    // 9. Speed Control
    speedSelect.addEventListener('change', () => {
      audio.playbackRate = parseFloat(speedSelect.value);
      showToast(`تغيير سرعة القراءة إلى ${speedSelect.value}x`);
    });

    // 10. Volume & Mute
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

    // 11. Audio Ended Event
    audio.addEventListener('ended', () => {
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

    // 12. Search Input
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchQuery) {
        searchClear.classList.remove('hidden');
      } else {
        searchClear.classList.add('hidden');
      }
      renderPlaylist();
    });

    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClear.classList.add('hidden');
      renderPlaylist();
      searchInput.focus();
    });

    // 13. Playlist Tabs
    tabAll.addEventListener('click', () => {
      if (currentTab === 'all') return;
      currentTab = 'all';
      tabAll.className = 'px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 bg-amber-500/15 text-amber-500 border border-amber-500/20';
      tabFavorites.className = 'px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 text-[var(--text-secondary)] hover:bg-emerald-500/5';
      renderPlaylist();
    });

    tabFavorites.addEventListener('click', () => {
      if (currentTab === 'favorites') return;
      currentTab = 'favorites';
      tabFavorites.className = 'px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 bg-amber-500/15 text-amber-500 border border-amber-500/20';
      tabAll.className = 'px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 text-[var(--text-secondary)] hover:bg-emerald-500/5';
      renderPlaylist();
    });

    // 14. Reciter Selector Change
    reciterSelect.addEventListener('change', () => {
      currentReciterId = reciterSelect.value;
      localStorage.setItem('quran_reciter', currentReciterId);
      
      updateHeaderSubtitle();
      
      // Reload current surah with new reciter
      const currentPos = audio.currentTime;
      loadSurah(SURAHS[currentIndex], isPlaying);
      audio.currentTime = currentPos;
      
      // Re-render playlist to update 'بديل' badges
      renderPlaylist();

      const reciter = RECITERS.find(r => r.id === currentReciterId);
      showToast(`تم تغيير القارئ إلى ${reciter.name}`);
    });

    // 15. Mushaf Surah Selector Change
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

    // 16. Mushaf Font Zoom Buttons
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

    // 17. Favorite Button on Player
    btnPlayerFav.addEventListener('click', () => {
      toggleFavorite(SURAHS[currentIndex].id);
    });

    // 18. Share Button
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

    // 19. Download Mp3 Button
    btnDownload.addEventListener('click', () => {
      const surah = SURAHS[currentIndex];
      const reciter = RECITERS.find(r => r.id === currentReciterId) || RECITERS[0];
      const audioInfo = getSurahAudioUrl(reciter, surah.id);
      
      window.open(audioInfo.url, '_blank');
      showToast(`جاري تحويلك لتحميل سورة ${surah.name}...`);
    });

    // 20. Keyboard & TV Remote Shortcuts
    window.addEventListener('keydown', (e) => {
      // Don't intercept if user is typing in search input
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

  // --- Toast Notification Helper ---
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `glass-panel px-4 py-2.5 rounded-xl shadow-xl text-xs sm:text-sm flex items-center gap-2.5 text-white animate-slide-in pointer-events-auto border-l-4 ${
      type === 'success' 
        ? 'border-amber-500 bg-emerald-900/95' 
        : type === 'info'
        ? 'border-blue-400 bg-slate-900/95'
        : 'border-red-500 bg-red-950/95'
    }`;
    
    const iconClass = type === 'success' 
      ? 'fa-circle-check text-amber-500' 
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
