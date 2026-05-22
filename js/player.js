// Quran Stream Platform - Player Controller
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const audio = document.getElementById('main-audio');
  const playlistContainer = document.getElementById('playlist-container');
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const tabAll = document.getElementById('tab-all');
  const tabFavorites = document.getElementById('tab-favorites');
  const allCount = document.getElementById('all-count');
  const favCount = document.getElementById('fav-count');
  const statLocal = document.getElementById('stat-local');
  const statOnline = document.getElementById('stat-online');
  
  // Player Panel Elements
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
  
  // Control Elements
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
  const btnDownload = document.getElementById('btn-download');
  
  // Global Source Selector Elements
  const sourceLocal = document.getElementById('source-local');
  const sourceOnline = document.getElementById('source-online');
  const sourceCompactToggle = document.getElementById('source-compact-toggle');
  const sourceCompactIcon = document.getElementById('source-compact-icon');

  // Player State variables
  let currentSurahList = [...SURAHS];
  let currentIndex = 0;
  let isPlaying = false;
  let currentTab = 'all'; // 'all' or 'favorites'
  let searchQuery = '';
  let favorites = JSON.parse(localStorage.getItem('quran_favorites')) || [];
  let currentSourceMode = localStorage.getItem('quran_source_mode') || 'local'; // 'local' or 'online'
  
  // Playback mode: 'repeat-all' (default), 'repeat-one', 'shuffle'
  let repeatMode = localStorage.getItem('quran_repeat_mode') || 'repeat-all';
  let isShuffle = localStorage.getItem('quran_shuffle_mode') === 'true';

  // --- Initial Setup ---
  initPlayer();

  function initPlayer() {
    // 1. Setup global statistics
    updateStatistics();
    
    // 2. Set current source toggle buttons visual state
    updateSourceSelectorUI();

    // 3. Render playlist
    renderPlaylist();

    // 4. Set initial repeat and shuffle buttons state
    updatePlaybackControlsUI();

    // 5. Restore volume
    const savedVolume = localStorage.getItem('quran_volume') || '85';
    audio.volume = savedVolume / 100;
    volumeSlider.value = savedVolume;
    volumeVal.innerText = `${savedVolume}%`;
    updateVolumeIcon(savedVolume);

    // 6. Handle URL query parameters for sharing (e.g., ?surah=18)
    const urlParams = new URLSearchParams(window.location.search);
    const sharedSurahId = parseInt(urlParams.get('surah'));
    if (sharedSurahId && sharedSurahId >= 1 && sharedSurahId <= 114) {
      const idx = SURAHS.findIndex(s => s.id === sharedSurahId);
      if (idx !== -1) {
        currentIndex = idx;
        loadSurah(SURAHS[currentIndex], false); // Load but don't play immediately
        // Wait a bit to scroll into view
        setTimeout(() => scrollToActiveCard(), 500);
      }
    } else {
      // Default load Al-Fatihah (index 0)
      loadSurah(SURAHS[currentIndex], false);
    }
    
    // 7. Attach event listeners
    attachEventListeners();
  }

  // --- Statistics ---
  function updateStatistics() {
    const localCount = SURAHS.filter(s => s.localUrl !== null).length;
    const onlineCount = SURAHS.length - localCount;
    
    if (statLocal) statLocal.innerText = localCount;
    if (statOnline) statOnline.innerText = onlineCount;
    if (allCount) allCount.innerText = SURAHS.length;
    if (favCount) favCount.innerText = favorites.length;
  }

  // --- Source Selection State UI ---
  function updateSourceSelectorUI() {
    if (currentSourceMode === 'local') {
      sourceLocal.className = 'px-3 py-1.5 rounded-lg font-medium transition-all duration-200 bg-amber-500 text-slate-900';
      sourceOnline.className = 'px-3 py-1.5 rounded-lg font-medium transition-all duration-200 text-[var(--text-secondary)] hover:text-[var(--text-primary)]';
      sourceCompactIcon.className = 'fa-solid fa-folder-open text-lg';
      sourceCompactToggle.setAttribute('title', 'وضع التشغيل: محلي');
    } else {
      sourceOnline.className = 'px-3 py-1.5 rounded-lg font-medium transition-all duration-200 bg-amber-500 text-slate-900';
      sourceLocal.className = 'px-3 py-1.5 rounded-lg font-medium transition-all duration-200 text-[var(--text-secondary)] hover:text-[var(--text-primary)]';
      sourceCompactIcon.className = 'fa-solid fa-cloud text-lg';
      sourceCompactToggle.setAttribute('title', 'وضع التشغيل: سحابي');
    }
  }

  // --- Normalizing Arabic for Smart Search ---
  function normalizeArabic(text) {
    if (!text) return '';
    return text
      .trim()
      .replace(/[\u064B-\u065F]/g, '') // Remove tashkeel (diacritics)
      .replace(/[أإآ]/g, 'ا')         // Normalise variants of Alef
      .replace(/ة/g, 'ه')            // Normalise Teh Marbuta to Heh
      .replace(/ى/g, 'ي')            // Normalise Alef Maksura to Yeh
      .toLowerCase();
  }

  // --- Filter and Fetch Surahs for Current View ---
  function getFilteredSurahs() {
    let list = [...SURAHS];
    
    // Tab filtering
    if (currentTab === 'favorites') {
      list = list.filter(s => favorites.includes(s.id));
    }
    
    // Search query filtering
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

    if (currentSurahList.length === 0) {
      const emptyState = document.createElement('div');
      emptyState.className = 'flex flex-col items-center justify-center py-16 text-center text-slate-400 glass-panel rounded-2xl p-6';
      
      if (currentTab === 'favorites') {
        emptyState.innerHTML = `
          <i class="fa-regular fa-heart text-4xl mb-3 text-slate-500"></i>
          <p class="text-sm font-semibold mb-1">المفضلة فارغة</p>
          <p class="text-xs text-slate-500">انقر فوق أيقونة القلب على السور لإضافتها هنا لتصفح أسرع.</p>
        `;
      } else {
        emptyState.innerHTML = `
          <i class="fa-solid fa-magnifying-glass text-4xl mb-3 text-slate-500"></i>
          <p class="text-sm font-semibold mb-1">لا توجد نتائج مطابقة</p>
          <p class="text-xs text-slate-500">تأكد من كتابة الاسم بشكل صحيح أو البحث برقم السورة.</p>
        `;
      }
      playlistContainer.appendChild(emptyState);
      return;
    }

    currentSurahList.forEach((surah, index) => {
      const isFav = favorites.includes(surah.id);
      const isCurrent = SURAHS[currentIndex].id === surah.id;
      
      // Determine file source icon and text for card
      let sourceIcon = 'fa-folder-open text-emerald-500';
      let sourceText = 'محلي';
      let badgeBg = 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20';

      if (currentSourceMode === 'online') {
        sourceIcon = 'fa-cloud text-amber-500';
        sourceText = 'سحابي';
        badgeBg = 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
      } else if (surah.localUrl === null) {
        // Local mode but file is missing
        sourceIcon = 'fa-cloud-arrow-down text-yellow-500';
        sourceText = 'سحابة (بديل)';
        badgeBg = 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20';
      }

      const card = document.createElement('div');
      card.className = `surah-card p-4 rounded-2xl flex items-center justify-between cursor-pointer mb-3 animate-slide-in ${isCurrent ? 'active' : ''}`;
      card.setAttribute('data-id', surah.id);
      
      card.innerHTML = `
        <div class="flex items-center gap-3">
          <!-- Surah Number badge -->
          <div class="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/10 flex items-center justify-center font-bold text-xs text-amber-500 shadow-inner">
            ${surah.id}
          </div>
          
          <!-- Surah Info -->
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-bold text-sm text-[var(--text-primary)] font-quran">${surah.name}</h3>
              <!-- Revelation Place Badge -->
              <span class="text-[10px] text-[var(--text-secondary)] opacity-80 flex items-center gap-0.5">
                ${surah.revelationPlace === 'makkah' 
                  ? '<i class="fa-solid fa-kaaba text-[8px] text-amber-500"></i> مكية' 
                  : '<i class="fa-solid fa-mosque text-[8px] text-emerald-500"></i> مدنية'}
              </span>
            </div>
            <p class="text-[11px] text-[var(--text-secondary)] mt-0.5">${surah.englishName} • ${surah.versesCount} آية</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- Source mode badge -->
          <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${badgeBg}">
            <i class="fa-solid ${sourceIcon}"></i>
            <span class="hidden sm:inline">${sourceText}</span>
          </span>

          <!-- Actions: Favorite Button -->
          <button class="btn-fav-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors" data-id="${surah.id}">
            <i class="${isFav ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart'}"></i>
          </button>
        </div>
      `;

      // Card click event
      card.addEventListener('click', (e) => {
        // Prevent trigger if clicked on the heart button
        if (e.target.closest('.btn-fav-toggle')) return;
        
        const mainIndex = SURAHS.findIndex(s => s.id === surah.id);
        if (mainIndex !== -1) {
          currentIndex = mainIndex;
          loadSurah(SURAHS[currentIndex], true);
        }
      });

      // Favorite button event
      const favBtn = card.querySelector('.btn-fav-toggle');
      favBtn.addEventListener('click', () => {
        toggleFavorite(surah.id);
      });

      playlistContainer.appendChild(card);
    });
  }

  // --- Load Surah ---
  function loadSurah(surah, shouldPlay = true) {
    // 1. Get correct audio URL based on source mode and availability
    let audioUrl = surah.localUrl;
    let badgeText = 'محلي';
    let badgeStyle = 'bg-emerald-600 border-emerald-400/20 text-white';
    let sourceLabelText = 'ملف محلي مخزن';
    let sourceLabelClass = 'text-emerald-500';

    if (currentSourceMode === 'online') {
      audioUrl = surah.onlineUrl;
      badgeText = 'سحابي';
      badgeStyle = 'bg-amber-600 border-amber-400/20 text-white';
      sourceLabelText = 'بث سحابي مباشر';
      sourceLabelClass = 'text-amber-500';
    } else if (surah.localUrl === null) {
      // Local mode but file is missing -> fallback to online
      audioUrl = surah.onlineUrl;
      badgeText = 'سحابي (بديل)';
      badgeStyle = 'bg-yellow-600 border-yellow-400/20 text-white';
      sourceLabelText = 'بث سحابي (بديل)';
      sourceLabelClass = 'text-yellow-500';
    }

    audio.src = audioUrl;
    
    // Set playback speed
    audio.playbackRate = parseFloat(speedSelect.value);

    // Load file metadata
    audio.load();

    // Reset seek slider and times
    seekSlider.value = 0;
    seekSlider.disabled = true;
    currentTimeLabel.innerText = '00:00';
    totalDurationLabel.innerText = '00:00';

    // Update Player Details UI
    playerSurahNumber.innerText = `السورة ${surah.id}`;
    playerSurahName.innerText = surah.name;
    playerSurahEnglish.innerText = surah.englishName;
    playerVerses.innerHTML = `<i class="fa-solid fa-list-ol"></i> ${surah.versesCount} آية`;
    
    if (surah.revelationPlace === 'makkah') {
      playerRevelation.innerHTML = '<i class="fa-solid fa-kaaba text-amber-500"></i> مكية';
    } else {
      playerRevelation.innerHTML = '<i class="fa-solid fa-mosque text-emerald-500"></i> مدنية';
    }

    playerAudioSource.innerText = sourceLabelText;
    playerAudioSource.className = `flex items-center gap-1 ${sourceLabelClass}`;
    
    playerSourceBadge.innerText = badgeText;
    playerSourceBadge.className = `absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full shadow border ${badgeStyle}`;

    // Update Favorite Heart Icon on Player Bar
    if (favorites.includes(surah.id)) {
      playerFavIcon.className = 'fa-solid fa-heart text-red-500';
      btnPlayerFav.querySelector('span').innerText = 'في المفضلة';
    } else {
      playerFavIcon.className = 'fa-regular fa-heart';
      btnPlayerFav.querySelector('span').innerText = 'أضف للمفضلة';
    }

    // Highlight active item in playlist
    updatePlaylistHighlight();

    if (shouldPlay) {
      playAudio();
    } else {
      pauseAudio();
    }
  }

  // --- Play/Pause Controls ---
  function playAudio() {
    isPlaying = true;
    audio.play().then(() => {
      playIcon.className = 'fa-solid fa-pause text-2xl text-slate-900';
      btnPlayPause.className = 'w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-lg border-4 border-emerald-950/20 pulse-glow-active';
      
      // Toggle Animations
      artworkMandala.classList.remove('spin-paused');
      waveVisualizer.classList.remove('visualizer-paused');
      micIcon.className = 'fa-solid fa-volume-high text-lg text-amber-400 animate-pulse';
    }).catch(err => {
      console.error("Audio playback error:", err);
      isPlaying = false;
      showToast('خطأ في تشغيل الصوت. قد تكون المشكلة في الشبكة.', 'error');
      pauseAudio();
    });
  }

  function pauseAudio() {
    isPlaying = false;
    audio.pause();
    playIcon.className = 'fa-solid fa-play text-2xl mr-1 text-slate-900';
    btnPlayPause.className = 'w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-lg border-4 border-emerald-950/20';
    
    // Pause Animations
    artworkMandala.classList.add('spin-paused');
    waveVisualizer.classList.add('visualizer-paused');
    micIcon.className = 'fa-solid fa-microphone text-lg text-amber-500';
  }

  // --- Toggle Favorites ---
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
    
    // Re-render only favorites tab if active, or just refresh to keep icons updated
    if (currentTab === 'favorites') {
      renderPlaylist();
    } else {
      // Just update the card's heart icon without full re-render for performance
      const card = document.querySelector(`.surah-card[data-id="${id}"]`);
      if (card) {
        const heartBtn = card.querySelector('.btn-fav-toggle i');
        if (heartBtn) {
          const isFav = favorites.includes(id);
          heartBtn.className = isFav ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart';
        }
      }
    }

    // If currently loaded surah is the toggled one, update the main player icon
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
      currentIndex = 0; // Loop back to Al-Fatihah
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
      currentIndex = SURAHS.length - 1; // Loop to An-Nas
    }
    loadSurah(SURAHS[currentIndex], true);
    scrollToActiveCard();
  }

  function playRandom() {
    const randomIndex = Math.floor(Math.random() * SURAHS.length);
    currentIndex = randomIndex;
    loadSurah(SURAHS[currentIndex], true);
    scrollToActiveCard();
  }

  // --- UI Highlight Sync ---
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

  // --- Time Formatter ---
  function formatTime(secs) {
    if (isNaN(secs)) return '00:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  // --- Playback Configuration UI Sync ---
  function updatePlaybackControlsUI() {
    // Shuffle
    if (isShuffle) {
      btnShuffle.classList.add('text-amber-500');
      btnShuffle.classList.remove('text-[var(--text-secondary)]');
      btnShuffle.setAttribute('title', 'إلغاء وضع التشغيل العشوائي');
    } else {
      btnShuffle.classList.remove('text-amber-500');
      btnShuffle.classList.add('text-[var(--text-secondary)]');
      btnShuffle.setAttribute('title', 'تشغيل عشوائي');
    }

    // Repeat mode icon
    const repeatIcon = btnRepeat.querySelector('i');
    if (repeatMode === 'repeat-one') {
      btnRepeat.classList.add('text-amber-500');
      btnRepeat.classList.remove('text-[var(--text-secondary)]');
      repeatIcon.className = 'fa-solid fa-repeat-1 fa-repeat'; // standard repeat one
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

  // --- Volume helper icon sync ---
  function updateVolumeIcon(value) {
    if (value == 0) {
      volumeIcon.className = 'fa-solid fa-volume-xmark';
    } else if (value < 40) {
      volumeIcon.className = 'fa-solid fa-volume-low';
    } else {
      volumeIcon.className = 'fa-solid fa-volume-high';
    }
  }

  // --- Event Listeners Setup ---
  function attachEventListeners() {
    // Play / Pause Click
    btnPlayPause.addEventListener('click', () => {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    });

    // Next / Prev Click
    btnNext.addEventListener('click', nextSurah);
    btnPrev.addEventListener('click', prevSurah);

    // Shuffle Mode
    btnShuffle.addEventListener('click', () => {
      isShuffle = !isShuffle;
      localStorage.setItem('quran_shuffle_mode', isShuffle);
      updatePlaybackControlsUI();
      showToast(isShuffle ? 'تم تفعيل التشغيل العشوائي' : 'تم إلغاء التشغيل العشوائي');
    });

    // Repeat Modes toggle
    btnRepeat.addEventListener('click', () => {
      if (repeatMode === 'repeat-all') {
        repeatMode = 'repeat-one';
        showToast('تم تفعيل تكرار سورة واحدة');
      } else if (repeatMode === 'repeat-one') {
        repeatMode = 'none';
        showToast('تم إلغاء التكرار');
      } else {
        repeatMode = 'repeat-all';
        showToast('تم تفعيل تكرار قائمة التشغيل');
      }
      
      localStorage.setItem('quran_repeat_mode', repeatMode);
      updatePlaybackControlsUI();
    });

    // Audio Metadata Loaded
    audio.addEventListener('loadedmetadata', () => {
      seekSlider.max = Math.floor(audio.duration);
      seekSlider.disabled = false;
      totalDurationLabel.innerText = formatTime(audio.duration);
    });

    // Audio Time Update
    audio.addEventListener('timeupdate', () => {
      if (!seekSlider.classList.contains('user-dragging')) {
        seekSlider.value = Math.floor(audio.currentTime);
        currentTimeLabel.innerText = formatTime(audio.currentTime);
      }
    });

    // Audio Buffering states for slow networks
    audio.addEventListener('waiting', () => {
      playIcon.className = 'fa-solid fa-spinner animate-spin text-2xl text-slate-900';
    });

    audio.addEventListener('playing', () => {
      playIcon.className = 'fa-solid fa-pause text-2xl text-slate-900';
    });

    // Audio Loading Error Auto-Fallback
    audio.addEventListener('error', () => {
      const activeSurah = SURAHS[currentIndex];
      const currentSrc = audio.src || '';
      
      // If in local mode and error is on a local file, fallback to online
      if (currentSourceMode === 'local' && activeSurah.localUrl && (currentSrc.endsWith(activeSurah.localUrl) || currentSrc.includes('/' + activeSurah.localUrl))) {
        console.warn(`Local file fail or 404. Falling back to online for Surah ${activeSurah.name}`);
        showToast(`ملف محلي غير متوفر. جاري التشغيل من السحابة...`, 'success');
        
        audio.src = activeSurah.onlineUrl;
        audio.load();
        if (isPlaying) {
          audio.play().catch(err => {
            console.error("Fallback playback failed:", err);
            pauseAudio();
          });
        }
        
        // Update UI labels to reflect fallback
        playerAudioSource.innerText = 'بث سحابي (بديل تلقائي)';
        playerAudioSource.className = 'flex items-center gap-1 text-yellow-500';
        playerSourceBadge.innerText = 'سحابي (بديل)';
        playerSourceBadge.className = 'absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full shadow border bg-yellow-600 border-yellow-400/20 text-white';
      } else {
        showToast('خطأ في تشغيل الملف الصوتي. يرجى التحقق من الاتصال بالإنترنت.', 'error');
        pauseAudio();
      }
    });

    // Seek slider input (dragging)
    seekSlider.addEventListener('input', () => {
      seekSlider.classList.add('user-dragging');
      currentTimeLabel.innerText = formatTime(seekSlider.value);
    });

    // Seek slider change (release drag)
    seekSlider.addEventListener('change', () => {
      seekSlider.classList.remove('user-dragging');
      audio.currentTime = seekSlider.value;
      if (isPlaying) {
        audio.play().catch(() => {});
      }
    });

    // Speed selector change
    speedSelect.addEventListener('change', () => {
      audio.playbackRate = parseFloat(speedSelect.value);
      showToast(`تغيير سرعة القراءة إلى ${speedSelect.value}x`);
    });

    // Volume Slider
    volumeSlider.addEventListener('input', () => {
      const vol = volumeSlider.value;
      audio.volume = vol / 100;
      volumeVal.innerText = `${vol}%`;
      localStorage.setItem('quran_volume', vol);
      updateVolumeIcon(vol);
    });

    // Mute button click
    btnMute.addEventListener('click', () => {
      if (audio.muted) {
        audio.muted = false;
        const currentVal = volumeSlider.value;
        updateVolumeIcon(currentVal);
        showToast('إلغاء كتم الصوت');
      } else {
        audio.muted = true;
        volumeIcon.className = 'fa-solid fa-volume-xmark';
        showToast('تم كتم الصوت');
      }
    });

    // Audio Ended event -> Auto Play Next
    audio.addEventListener('ended', () => {
      if (repeatMode === 'repeat-one') {
        audio.currentTime = 0;
        playAudio();
      } else if (repeatMode === 'repeat-all') {
        nextSurah();
      } else {
        // none
        if (currentIndex < SURAHS.length - 1) {
          nextSurah();
        } else {
          pauseAudio(); // reached the end of Quran
          audio.currentTime = 0;
        }
      }
    });

    // Search Box input
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchQuery) {
        searchClear.classList.remove('hidden');
      } else {
        searchClear.classList.add('hidden');
      }
      renderPlaylist();
    });

    // Clear search
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClear.classList.add('hidden');
      renderPlaylist();
      searchInput.focus();
    });

    // Tabs switching
    tabAll.addEventListener('click', () => {
      if (currentTab === 'all') return;
      currentTab = 'all';
      
      tabAll.className = 'px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 bg-amber-500/10 text-amber-500 border border-amber-500/20';
      tabFavorites.className = 'px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 text-[var(--text-secondary)] hover:bg-emerald-500/5';
      
      renderPlaylist();
    });

    tabFavorites.addEventListener('click', () => {
      if (currentTab === 'favorites') return;
      currentTab = 'favorites';
      
      tabFavorites.className = 'px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 bg-amber-500/10 text-amber-500 border border-amber-500/20';
      tabAll.className = 'px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 text-[var(--text-secondary)] hover:bg-emerald-500/5';
      
      renderPlaylist();
    });

    // Source Mode Toggling: Local
    sourceLocal.addEventListener('click', () => {
      if (currentSourceMode === 'local') return;
      currentSourceMode = 'local';
      localStorage.setItem('quran_source_mode', 'local');
      
      updateSourceSelectorUI();
      renderPlaylist();
      
      // Reload current surah from new local source without interrupting if possible, 
      // but to ensure source changes, we re-load.
      const currentPos = audio.currentTime;
      loadSurah(SURAHS[currentIndex], isPlaying);
      audio.currentTime = currentPos;
      
      showToast('تم التحويل لتشغيل الملفات المحلية');
    });

    // Source Mode Toggling: Online
    sourceOnline.addEventListener('click', () => {
      if (currentSourceMode === 'online') return;
      currentSourceMode = 'online';
      localStorage.setItem('quran_source_mode', 'online');
      
      updateSourceSelectorUI();
      renderPlaylist();
      
      const currentPos = audio.currentTime;
      loadSurah(SURAHS[currentIndex], isPlaying);
      audio.currentTime = currentPos;
      
      showToast('تم التحويل للبث السحابي المباشر');
    });

    // Compact Source Toggle (For mobile screen layout)
    sourceCompactToggle.addEventListener('click', () => {
      const newSource = currentSourceMode === 'local' ? 'online' : 'local';
      currentSourceMode = newSource;
      localStorage.setItem('quran_source_mode', newSource);
      
      updateSourceSelectorUI();
      renderPlaylist();
      
      const currentPos = audio.currentTime;
      loadSurah(SURAHS[currentIndex], isPlaying);
      audio.currentTime = currentPos;
      
      showToast(newSource === 'local' ? 'وضع التشغيل: محلي' : 'وضع التشغيل: سحابي');
    });

    // Favorite button on Player Bar
    btnPlayerFav.addEventListener('click', () => {
      toggleFavorite(SURAHS[currentIndex].id);
    });

    // Share Button: Copy shareable link
    // We create a shareable URL containing ?surah=ID
    const btnShare = document.createElement('button');
    btnShare.id = 'btn-share';
    btnShare.className = 'flex items-center gap-1.5 hover:text-amber-500 transition-colors py-1 px-2 rounded-lg hover:bg-emerald-500/5';
    btnShare.innerHTML = '<i class="fa-solid fa-share-nodes"></i> <span>مشاركة السورة</span>';
    
    // Insert share button before download button
    btnDownload.parentNode.insertBefore(btnShare, btnDownload);

    btnShare.addEventListener('click', () => {
      const activeSurah = SURAHS[currentIndex];
      const shareUrl = `${window.location.origin}${window.location.pathname}?surah=${activeSurah.id}`;
      
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast(`تم نسخ رابط سورة ${activeSurah.name} لمشاركته مع الآخرين`);
      }).catch(err => {
        showToast('فشل نسخ الرابط التلقائي.', 'error');
      });
    });

    // Download Mp3 Button click
    btnDownload.addEventListener('click', () => {
      const surah = SURAHS[currentIndex];
      let url = surah.localUrl;
      if (currentSourceMode === 'online' || surah.localUrl === null) {
        url = surah.onlineUrl;
      }
      
      // Open in a new tab to let browser handle the file download or playback download
      window.open(url, '_blank');
      showToast(`جاري تحويلك لتحميل سورة ${surah.name}...`);
    });
  }

  // --- Toast Notification helper ---
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `glass-panel px-4 py-3 rounded-xl shadow-lg text-xs flex items-center gap-2 text-white animate-slide-in pointer-events-auto border-l-4 ${
      type === 'success' 
        ? 'border-amber-500 bg-emerald-900/90' 
        : 'border-red-500 bg-red-950/90'
    }`;
    
    toast.innerHTML = `
      <i class="fa-solid ${type === 'success' ? 'fa-circle-check text-amber-500' : 'fa-circle-exclamation text-red-500'}"></i>
      <span class="font-medium">${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Auto remove toast
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }
});
