// Deferred Secondary Logic Module (Spiritual Hub, Prayer & Qibla, Sebha, Memorial, Hadr Revision)
window.__mountSecondaryLogic = function(__B) {
  const {
    audio, switchView, syncHadrToMiniPlayer, syncMiniPlayerVisibility,
    loadSurah, pauseAudio, loadSurahMushaf, formatTime, toggleSingleAyahAudio,
    generateAyahImageCard, prepareElementCorsForSpatial, attachMediaElementToSpatialGraph,
    showToast, safeJsonParse,
    miniProgressFill, miniTimeDisplay, miniCurrentTime, miniTotalDuration, miniSeekSlider,
    memorialView, spTabMemorial, memorialGenderBadge, memorialDeceasedName, memorialDedicatedNote,
    btnOpenMemorialCreator, btnCopyMemorialLink, btnWhatsappMemorial, btnDownloadMemorialCard,
    memorialDhikrChips, memorialActiveDhikrText, memorialTapBtn, memorialRoundCount,
    memorialSoundBtn, memorialSoundIcon, memorialResetRoundBtn, memorialDuasGrid,
    memorialSurahsGrid, memorialCreatorModal, btnCloseMemorialModal, memorialInputName,
    memorialGenderBtnM, memorialGenderBtnF, memorialInputNote, memorialPreviewText,
    btnSubmitCreateMemorial, memorialSavedList, mMemorialName
  } = __B;

  let activeMemorialDhikrIdx = 0;
  let tasbeehAudioCtx = null;
  let modalSelectedGender = 'm';
  let currentMemorialCardBlob = null;
  let currentMemorialCardFile = null;
  let prayerCountdownTimer = null;
  let currentPrayerTimings = null;
  let hadrInitialized = false;
  let currentHadrMode = 'surahs';
  let hadrRepeatMode = '1';
  let hadrRepeatCountLeft = 1;
  let hadrPlaylistQueue = [];
  let hadrQueueIndex = 0;

  function initSpiritualCompanionHub() {
    updateDailyStreak();
    updateKhatmaDashboard();

    // Sub-tabs navigation inside #spiritual-view
    const khatmaCard = document.getElementById('khatma-dashboard-card');
    const spTabs = [
      { id: 'sebha', btn: document.getElementById('sp-tab-sebha'), panel: document.getElementById('sp-panel-sebha') },
      { id: 'azkar', btn: document.getElementById('sp-tab-azkar'), panel: document.getElementById('sp-panel-azkar') },
      { id: 'prayer', btn: document.getElementById('sp-tab-prayer'), panel: document.getElementById('sp-panel-prayer') },
      { id: 'compass', btn: document.getElementById('sp-tab-compass'), panel: document.getElementById('sp-panel-compass') }
    ];

    function openSpiritualSubTab(id) {
      spTabs.forEach(t => {
        if (!t.btn || !t.panel) return;
        const isTarget = t.id === id;
        t.panel.classList.toggle('hidden', !isTarget);
        t.btn.className = isTarget
          ? 'sp-subtab px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all bg-amber-500/20 text-amber-400 border border-amber-500/30 flex-shrink-0'
          : 'sp-subtab px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all text-[var(--text-secondary)] hover:text-amber-400 bg-emerald-950/40 border border-emerald-500/15 flex-shrink-0';
      });
      if (khatmaCard) {
        if (id === 'sebha' && window.innerWidth < 1024) {
          khatmaCard.classList.add('hidden');
        } else {
          khatmaCard.classList.remove('hidden');
        }
      }
    }
    window.openSpiritualSubTab = openSpiritualSubTab;

    spTabs.forEach(({ id, btn }) => {
      if (!btn) return;
      btn.addEventListener('click', () => openSpiritualSubTab(id));
    });

    // Jump to Memorial Page from Spiritual Companion Hub Tab
    if (spTabMemorial) {
      spTabMemorial.addEventListener('click', () => {
        switchView('memorial');
      });
    }

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

    // 4. Initialize V3.0 Prayer Times & Qibla Compass Hub
    initPrayerAndQiblaHub();
  }

  function updateDailyStreak() {
    try {
      const today = new Date().toISOString().slice(0, 10);
      let data = { streak: 1, lastDate: today };
      const raw = localStorage.getItem('quran_streak_data');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.lastDate === today) {
          data = parsed;
        } else {
          const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
          if (parsed.lastDate === yesterday) {
            data = { streak: (parsed.streak || 1) + 1, lastDate: today };
          } else {
            data = { streak: 1, lastDate: today };
          }
        }
      }
      localStorage.setItem('quran_streak_data', JSON.stringify(data));
      const labelText = `${data.streak} ${data.streak >= 3 && data.streak <= 10 ? 'أيام' : 'يوم'}`;
      const headerStreak = document.getElementById('header-streak-label');
      const khatmaStreak = document.getElementById('khatma-streak-count');
      if (headerStreak) headerStreak.innerText = labelText;
      if (khatmaStreak) khatmaStreak.innerText = labelText;
    } catch (e) {}
  }

  // ==========================================================================
  // V3.0 PRAYER TIMES, LIVE COUNTDOWN & QIBLA COMPASS ENGINE
  // ==========================================================================
  function calculateQiblaAngle(lat, lng) {
    const kaabaLat = 21.4225 * (Math.PI / 180);
    const kaabaLng = 39.8262 * (Math.PI / 180);
    const phi = lat * (Math.PI / 180);
    const dLng = kaabaLng - (lng * (Math.PI / 180));
    const y = Math.sin(dLng);
    const x = Math.cos(phi) * Math.tan(kaabaLat) - Math.sin(phi) * Math.cos(dLng);
    let brng = Math.atan2(y, x) * (180 / Math.PI);
    return Math.round((brng + 360) % 360);
  }

  function calculateDistanceToMakkahKm(lat, lng) {
    const mLat = 21.4225 * Math.PI / 180;
    const mLng = 39.8262 * Math.PI / 180;
    const pLat = lat * Math.PI / 180;
    const pLng = lng * Math.PI / 180;
    const dLat = mLat - pLat;
    const dLng = mLng - pLng;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(pLat) * Math.cos(mLat) * (Math.sin(dLng / 2) ** 2);
    return Math.round(6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  }

  function initPrayerAndQiblaHub() {
    const citySelect = document.getElementById('prayer-city-select');
    const btnGps = document.getElementById('btn-prayer-gps');
    const btnLiveQibla = document.getElementById('btn-live-qibla');
    const liveStatusEl = document.getElementById('qibla-live-status');
    if (!citySelect || typeof ISLAMIC_CITIES === 'undefined') return;

    let currentQiblaDeg = 136;
    let isLiveCompassActive = false;
    let liveCompassHandler = null;

    const updateQiblaVisual = (deviceHeadingDeg = null) => {
      const needle = document.getElementById('qibla-compass-needle');
      const dial = document.getElementById('qibla-compass-dial');
      if (deviceHeadingDeg !== null && isFinite(deviceHeadingDeg)) {
        if (dial) dial.style.transform = `rotate(${-deviceHeadingDeg}deg)`;
        if (needle) needle.style.transform = `rotate(${currentQiblaDeg - deviceHeadingDeg}deg)`;
      } else {
        if (dial) dial.style.transform = 'rotate(0deg)';
        if (needle) needle.style.transform = `rotate(${currentQiblaDeg}deg)`;
      }
    };

    const stopLiveCompass = () => {
      isLiveCompassActive = false;
      if (liveCompassHandler) {
        window.removeEventListener('deviceorientationabsolute', liveCompassHandler);
        window.removeEventListener('deviceorientation', liveCompassHandler);
        liveCompassHandler = null;
      }
      if (btnLiveQibla) {
        btnLiveQibla.innerHTML = '<i class="fa-solid fa-compass"></i> <span>البوصلة الحية</span>';
      }
      if (liveStatusEl) liveStatusEl.classList.add('hidden');
      updateQiblaVisual(null);
    };

    if (btnLiveQibla) {
      btnLiveQibla.addEventListener('click', async () => {
        if (isLiveCompassActive) {
          stopLiveCompass();
          return;
        }
        if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
          try {
            const perm = await DeviceOrientationEvent.requestPermission();
            if (perm !== 'granted') {
              showToast('يرجى السماح بصلاحية مستشعر الحركة لتشغيل البوصلة الحية', 'info');
              return;
            }
          } catch (err) {
            showToast('تعذر تفعيل مستشعر البوصلة على هذا المتصفح', 'info');
            return;
          }
        }
        isLiveCompassActive = true;
        let receivedReading = false;
        btnLiveQibla.innerHTML = '<i class="fa-solid fa-compass fa-spin text-emerald-300"></i> <span>إيقاف البوصلة</span>';
        if (liveStatusEl) {
          liveStatusEl.innerText = 'حرّك الهاتف أفقياً';
          liveStatusEl.classList.remove('hidden');
        }
        liveCompassHandler = (ev) => {
          let heading = null;
          if (typeof ev.webkitCompassHeading === 'number' && !isNaN(ev.webkitCompassHeading)) {
            heading = ev.webkitCompassHeading;
          } else if (ev.alpha !== null && ev.alpha !== undefined) {
            heading = (360 - ev.alpha) % 360;
          }
          if (heading === null) return;
          receivedReading = true;
          if (liveStatusEl) liveStatusEl.innerText = `شمال: ${Math.round(heading)}°`;
          updateQiblaVisual(heading);
        };
        window.addEventListener('deviceorientationabsolute', liveCompassHandler);
        window.addEventListener('deviceorientation', liveCompassHandler);
        setTimeout(() => {
          if (isLiveCompassActive && !receivedReading) {
            showToast('جهازك لا يرسل قراءة البوصلة المغناطيسية — يتم عرض الزاوية من الشمال الحقيقي', 'info');
          }
        }, 1800);
      });
    }

    const savedCityId = localStorage.getItem('quran_prayer_city') || 'cairo';
    citySelect.innerHTML = ISLAMIC_CITIES.map(c => `<option value="${c.id}" class="bg-emerald-950 text-white">${c.name}</option>`).join('');
    if (ISLAMIC_CITIES.some(c => c.id === savedCityId)) {
      citySelect.value = savedCityId;
    }

    function loadCityPrayerData(cityObj) {
      if (!cityObj) return;
      const titleEl = document.getElementById('prayer-city-title');
      if (titleEl) titleEl.innerText = `مواقيت الصلاة • ${cityObj.name}`;

      // Update Qibla Compass & Distance immediately
      currentQiblaDeg = cityObj.qibla !== undefined ? cityObj.qibla : calculateQiblaAngle(cityObj.lat, cityObj.lng);
      const degLabel = document.getElementById('qibla-degree-label');
      const distLabel = document.getElementById('qibla-distance-label');
      if (degLabel) degLabel.innerText = `${currentQiblaDeg}°`;
      if (distLabel && typeof cityObj.lat === 'number' && typeof cityObj.lng === 'number') {
        const km = calculateDistanceToMakkahKm(cityObj.lat, cityObj.lng);
        distLabel.innerText = km < 15 ? 'أنت في رحاب مكة المكرمة' : `نحو ${km.toLocaleString('en-US')} كم لمكة`;
      }
      if (!isLiveCompassActive) {
        updateQiblaVisual(null);
      }

      // Render fallback/cached timings immediately for 0ms latency
      currentPrayerTimings = { ...(cityObj.fallback || ISLAMIC_CITIES[0].fallback) };
      const cachedKey = `quran_prayer_timings_${cityObj.id}_${new Date().toISOString().slice(0, 10)}`;
      let hasFreshCache = false;
      try {
        const cached = localStorage.getItem(cachedKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed.timings) {
            currentPrayerTimings = parsed.timings;
            hasFreshCache = true;
          }
          if (parsed.hijriText) {
            const hijriEl = document.getElementById('prayer-hijri-date');
            if (hijriEl) hijriEl.innerText = parsed.hijriText;
          }
        }
      } catch (e) {}

      renderPrayerTimesGrid(currentPrayerTimings);
      if (hasFreshCache) return;

      // Fetch live astronomical timings from AlAdhan API only if not cached today
      fetch(`https://api.aladhan.com/v1/timings?latitude=${cityObj.lat}&longitude=${cityObj.lng}&method=${cityObj.method || 5}`)
        .then(r => r.json())
        .then(json => {
          if (json && json.data && json.data.timings) {
            const t = json.data.timings;
            currentPrayerTimings = {
              Fajr: (t.Fajr || '').slice(0, 5),
              Sunrise: (t.Sunrise || '').slice(0, 5),
              Dhuhr: (t.Dhuhr || '').slice(0, 5),
              Asr: (t.Asr || '').slice(0, 5),
              Maghrib: (t.Maghrib || '').slice(0, 5),
              Isha: (t.Isha || '').slice(0, 5)
            };
            let hijriText = '';
            if (json.data.date && json.data.date.hijri) {
              const h = json.data.date.hijri;
              hijriText = `${h.weekday?.ar || ''} • ${h.day} ${h.month?.ar || ''} ${h.year} هـ`;
              const hijriEl = document.getElementById('prayer-hijri-date');
              if (hijriEl) hijriEl.innerText = hijriText;
            }
            try {
              localStorage.setItem(cachedKey, JSON.stringify({ timings: currentPrayerTimings, hijriText }));
            } catch (e) {}
            renderPrayerTimesGrid(currentPrayerTimings);
          }
        })
        .catch(() => {});
    }

    citySelect.addEventListener('change', () => {
      const selected = ISLAMIC_CITIES.find(c => c.id === citySelect.value) || ISLAMIC_CITIES[0];
      localStorage.setItem('quran_prayer_city', selected.id);
      loadCityPrayerData(selected);
      showToast(`تم تحديث مواقيت الصلاة واتجاه القبلة لمدينة: ${selected.name}`);
    });

    if (btnGps) {
      btnGps.addEventListener('click', () => {
        if (!navigator.geolocation) {
          showToast('المتصفح لا يدعم تحديد الموقع الجغرافي', 'info');
          return;
        }
        showToast('جاري تحديد موقعك الجغرافي وحساب المواقيت والقبلة...');
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const customCity = {
              id: 'gps_custom',
              name: 'موقعك الحالي (GPS)',
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
              method: 5,
              qibla: calculateQiblaAngle(pos.coords.latitude, pos.coords.longitude),
              fallback: ISLAMIC_CITIES[0].fallback
            };
            loadCityPrayerData(customCity);
            showToast('تم تحديد مواقيت الصلاة واتجاه القبلة حسب موقعك بدقة');
          },
          () => {
            showToast('تعذر الوصول للموقع، يمكنك اختيار مدينتك من القائمة مباشرة', 'info');
          }
        );
      });
    }

    let prayerHubLoaded = false;
    window.ensurePrayerHubLoaded = () => {
      if (prayerHubLoaded) return;
      prayerHubLoaded = true;
      const initialCity = ISLAMIC_CITIES.find(c => c.id === savedCityId) || ISLAMIC_CITIES[0];
      loadCityPrayerData(initialCity);
      if (prayerCountdownTimer) clearInterval(prayerCountdownTimer);
      prayerCountdownTimer = setInterval(() => {
        if (currentPrayerTimings) updateNextPrayerCountdown(currentPrayerTimings);
      }, 1000);
    };
  }

  function formatTime12Ar(hm) {
    if (!hm) return '--:--';
    const [hStr, mStr] = hm.split(':');
    let h = parseInt(hStr, 10);
    const suffix = h >= 12 ? 'م' : 'ص';
    h = h % 12 || 12;
    return `${String(h).padStart(2, '0')}:${mStr} ${suffix}`;
  }

  function renderPrayerTimesGrid(timings) {
    const grid = document.getElementById('prayer-times-grid');
    if (!grid || !timings) return;

    const prayers = [
      { key: 'Fajr', name: 'الفجر', icon: 'fa-cloud-moon' },
      { key: 'Sunrise', name: 'الشروق', icon: 'fa-sun-plant-wilt' },
      { key: 'Dhuhr', name: 'الظهر', icon: 'fa-sun' },
      { key: 'Asr', name: 'العصر', icon: 'fa-cloud-sun' },
      { key: 'Maghrib', name: 'المغرب', icon: 'fa-mountain-sun' },
      { key: 'Isha', name: 'العشاء', icon: 'fa-moon' }
    ];

    grid.innerHTML = prayers.map(p => `
      <div class="prayer-time-card p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/20 text-center flex flex-col items-center justify-center gap-1" data-prayer-key="${p.key}">
        <i class="fa-solid ${p.icon} text-amber-400 text-sm"></i>
        <span class="text-xs font-bold text-slate-200">${p.name}</span>
        <span class="text-xs sm:text-sm font-black text-amber-300 font-mono">${formatTime12Ar(timings[p.key])}</span>
      </div>
    `).join('');

    updateNextPrayerCountdown(timings);
  }

  function updateNextPrayerCountdown(timings) {
    const now = new Date();
    const nowSec = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const order = [
      { key: 'Fajr', name: 'صلاة الفجر' },
      { key: 'Dhuhr', name: 'صلاة الظهر' },
      { key: 'Asr', name: 'صلاة العصر' },
      { key: 'Maghrib', name: 'صلاة المغرب' },
      { key: 'Isha', name: 'صلاة العشاء' }
    ];

    let nextPrayer = null;
    let nextIdx = -1;
    let diffSec = 0;

    for (let i = 0; i < order.length; i++) {
      const p = order[i];
      const hm = timings[p.key];
      if (!hm) continue;
      const [h, m] = hm.split(':').map(Number);
      const targetSec = h * 3600 + m * 60;
      if (targetSec > nowSec) {
        nextPrayer = p;
        nextIdx = i;
        diffSec = targetSec - nowSec;
        break;
      }
    }

    if (!nextPrayer) {
      nextPrayer = order[0];
      nextIdx = 0;
      const [h, m] = (timings.Fajr || '04:58').split(':').map(Number);
      diffSec = (24 * 3600 - nowSec) + (h * 3600 + m * 60);
    }

    // Window elapsed progress between previous prayer & upcoming prayer
    const prevObj = order[(nextIdx - 1 + order.length) % order.length];
    const [pH, pM] = (timings[prevObj.key] || '04:58').split(':').map(Number);
    const prevSec = pH * 3600 + pM * 60;
    const [nH, nM] = (timings[nextPrayer.key] || '04:58').split(':').map(Number);
    const nextSec = nH * 3600 + nM * 60;
    const totalWindowSec = nextSec > prevSec ? (nextSec - prevSec) : (24 * 3600 - prevSec + nextSec);
    const progressPct = totalWindowSec > 0
      ? Math.max(0, Math.min(100, Math.round(((totalWindowSec - diffSec) / totalWindowSec) * 100)))
      : 0;

    const progressEl = document.getElementById('next-prayer-progress');
    const progressLabelEl = document.getElementById('next-prayer-progress-label');
    if (progressEl) progressEl.style.width = `${progressPct}%`;
    if (progressLabelEl) progressLabelEl.innerText = `${progressPct}%`;

    const hrs = String(Math.floor(diffSec / 3600)).padStart(2, '0');
    const mins = String(Math.floor((diffSec % 3600) / 60)).padStart(2, '0');
    const secs = String(diffSec % 60).padStart(2, '0');

    const nameEl = document.getElementById('next-prayer-name');
    const timeLabelEl = document.getElementById('next-prayer-time-label');
    const countdownEl = document.getElementById('next-prayer-countdown');
    if (nameEl) nameEl.innerText = nextPrayer.name;
    if (timeLabelEl) timeLabelEl.innerText = `موعد الأذان: ${formatTime12Ar(timings[nextPrayer.key])}`;
    if (countdownEl) countdownEl.innerText = `${hrs}:${mins}:${secs}`;

    document.querySelectorAll('.prayer-time-card').forEach(card => {
      card.classList.toggle('next-prayer-active', card.getAttribute('data-prayer-key') === nextPrayer.key);
    });
  }

  function updateKhatmaDashboard() {
    const surahsCountEl = document.getElementById('khatma-surahs-count');
    const minutesCountEl = document.getElementById('khatma-minutes-count');
    const bookmarkEl = document.getElementById('khatma-bookmark-display');
    const progressFill = document.getElementById('khatma-progress-fill');
    const mushafBookmarkBtnText = document.getElementById('mushaf-bookmark-btn-text');

    if (surahsCountEl) surahsCountEl.innerText = `${__B.listenedSurahs.length} / 114`;
    if (minutesCountEl) minutesCountEl.innerText = `${Math.max(1, Math.floor(__B.listeningSeconds / 60))} دقيقة`;

    if (__B.khatmaBookmark) {
      if (bookmarkEl) {
        bookmarkEl.innerText = `فاصل الختمة المحفوظ: سورة ${__B.khatmaBookmark.surahName} • الآية ${__B.khatmaBookmark.ayahNum}`;
      }
      if (mushafBookmarkBtnText) {
        mushafBookmarkBtnText.innerText = `${__B.khatmaBookmark.surahName}: ${__B.khatmaBookmark.ayahNum}`;
      }
    }

    if (progressFill) {
      const pct = Math.max(2, Math.min(100, Math.round((__B.listenedSurahs.length / 114) * 100)));
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
          __B.currentIndex = idx;
          loadSurah(SURAHS[__B.currentIndex], __B.isPlaying);
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
        showToast(`ما شاء الله! أتممت ${currentCount} تسبيحة في هذه الدورة`);
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

  // ==========================================================================
  // Memorial Engine: Ongoing Charity & Supplications for the Deceased (V2.5)
  // ==========================================================================
  function initMemorialEngine() {
    if (!memorialView) return;

    // Attach Tasbeeh Click & Counter Handlers
    if (memorialTapBtn) {
      memorialTapBtn.addEventListener('click', handleMemorialTasbeehTap);
    }

    if (memorialResetRoundBtn) {
      memorialResetRoundBtn.addEventListener('click', () => {
        __B.memorialRoundCounter = 0;
        if (memorialRoundCount) memorialRoundCount.innerText = '0';
        triggerHapticFeedback(15);
        showToast('تم تصفير عداد الدورة الحالية للتسبيح');
      });
    }

    if (memorialSoundBtn) {
      memorialSoundBtn.addEventListener('click', toggleMemorialSound);
    }

    // Modal Opening & Closing
    const memorialHeaderTitleBox = document.getElementById('memorial-header-title-box');
    if (memorialHeaderTitleBox) {
      memorialHeaderTitleBox.addEventListener('click', openMemorialModal);
    }
    if (btnOpenMemorialCreator) {
      btnOpenMemorialCreator.addEventListener('click', openMemorialModal);
    }
    if (btnCloseMemorialModal) {
      btnCloseMemorialModal.addEventListener('click', closeMemorialModal);
    }
    if (memorialCreatorModal) {
      memorialCreatorModal.addEventListener('click', (e) => {
        if (e.target === memorialCreatorModal) closeMemorialModal();
      });
    }

    // Image Preview Modal Listeners (Mobile & Tablet)
    const memorialImageModal = document.getElementById('memorial-image-modal');
    const btnCloseImageModal = document.getElementById('btn-close-image-modal');
    if (btnCloseImageModal && memorialImageModal) {
      btnCloseImageModal.addEventListener('click', () => memorialImageModal.classList.add('hidden'));
      memorialImageModal.addEventListener('click', (e) => {
        if (e.target === memorialImageModal) memorialImageModal.classList.add('hidden');
      });
    }

    // Modal Gender Selectors
    if (memorialGenderBtnM) {
      memorialGenderBtnM.addEventListener('click', () => setModalGender('m'));
    }
    if (memorialGenderBtnF) {
      memorialGenderBtnF.addEventListener('click', () => setModalGender('f'));
    }

    // Modal Inputs Live Preview
    if (memorialInputName) {
      memorialInputName.addEventListener('input', updateModalPreview);
    }
    if (memorialInputNote) {
      memorialInputNote.addEventListener('input', updateModalPreview);
    }

    // Modal Form Submission
    if (btnSubmitCreateMemorial) {
      btnSubmitCreateMemorial.addEventListener('click', submitCreateMemorial);
    }

    // Share Actions
    if (btnCopyMemorialLink) {
      btnCopyMemorialLink.addEventListener('click', () => shareMemorialLink('copy'));
    }
    if (btnWhatsappMemorial) {
      btnWhatsappMemorial.addEventListener('click', () => shareMemorialLink('whatsapp'));
    }
    if (btnDownloadMemorialCard) {
      btnDownloadMemorialCard.addEventListener('click', generateMemorialCard);
    }

    // Render Initial UI
    updateMemorialViewUI();
  }

  function toggleMemorialSound() {
    __B.isTasbeehSoundEnabled = !__B.isTasbeehSoundEnabled;
    localStorage.setItem('quran_tasbeeh_sound', __B.isTasbeehSoundEnabled);
    if (memorialSoundIcon) {
      memorialSoundIcon.className = __B.isTasbeehSoundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    }
    showToast(__B.isTasbeehSoundEnabled ? 'تم تفعيل صوت التسبيح' : 'تم كتم صوت التسبيح', 'info');
  }

  function playTasbeehClickSound() {
    if (!__B.isTasbeehSoundEnabled) return;
    try {
      if (!tasbeehAudioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) tasbeehAudioCtx = new AudioContextClass();
      }
      if (tasbeehAudioCtx && tasbeehAudioCtx.state === 'suspended') {
        tasbeehAudioCtx.resume();
      }
      if (tasbeehAudioCtx) {
        const osc = tasbeehAudioCtx.createOscillator();
        const gain = tasbeehAudioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, tasbeehAudioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(320, tasbeehAudioCtx.currentTime + 0.035);
        gain.gain.setValueAtTime(0.2, tasbeehAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, tasbeehAudioCtx.currentTime + 0.035);
        osc.connect(gain);
        gain.connect(tasbeehAudioCtx.destination);
        osc.start();
        osc.stop(tasbeehAudioCtx.currentTime + 0.04);
      }
    } catch (e) {
      // AudioContext fallback
    }
  }

  function triggerHapticFeedback(pattern = 18) {
    if (navigator.vibrate) {
      try { navigator.vibrate(pattern); } catch (e) {}
    }
  }

  function handleMemorialTasbeehTap() {
    __B.memorialRoundCounter++;
    if (memorialRoundCount) {
      memorialRoundCount.innerText = __B.memorialRoundCounter.toLocaleString('ar-EG');
    }

    playTasbeehClickSound();

    if (__B.memorialRoundCounter % 33 === 0) {
      triggerHapticFeedback([40, 70, 40]);
      const targetName = __B.currentMemorial.isGeneric ? 'المتوفى' : __B.currentMemorial.name;
      showToast(`ما شاء الله! أتممت ${__B.memorialRoundCounter} تسبيحة مهداة لروح ${targetName}`);
    } else {
      triggerHapticFeedback(15);
    }

    if (memorialTapBtn) {
      memorialTapBtn.classList.remove('ripple-active');
      void memorialTapBtn.offsetWidth; // trigger reflow
      memorialTapBtn.classList.add('ripple-active');
    }
  }

  function openMemorialPage(name, gender, note, updateUrl = true) {
    const isGeneric = !name || name.trim() === 'مَنْ تُحِبّونَ (فقيدكم الغالي)' || name.trim() === 'صدقة جارية لمن تُحبّون';
    __B.currentMemorial = {
      name: isGeneric ? "مَنْ تُحِبّونَ (فقيدكم الغالي)" : name.trim(),
      gender: gender === 'm' ? 'm' : 'f',
      isGeneric: isGeneric,
      note: note ? note.trim() : (gender === 'm' ? 'اللهم اجعل قبره روضة من رياض الجنة وأسكنه الفردوس الأعلى برفقة الصالحين' : 'اللهم اجعل قبرها روضة من رياض الجنة وأسكنها الفردوس الأعلى برفقة الصالحين')
    };
    __B.memorialRoundCounter = 0;
    activeMemorialDhikrIdx = 0;

    if (updateUrl && !isGeneric) {
      try {
        const url = new URL(window.location);
        url.searchParams.set('memorial', __B.currentMemorial.name);
        url.searchParams.set('gender', __B.currentMemorial.gender);
        if (note) url.searchParams.set('note', note);
        else url.searchParams.delete('note');
        window.history.pushState({ memorial: __B.currentMemorial.name, gender: __B.currentMemorial.gender }, '', url.toString());
      } catch (e) {}
    }

    switchView('memorial');
  }

  function updateMemorialViewUI() {
    if (!memorialView) return;

    if (mMemorialName) {
      mMemorialName.innerText = __B.currentMemorial.isGeneric ? 'صدقة جارية لمن تُحبّون' : __B.currentMemorial.name;
    }

    if (memorialDeceasedName) {
      if (__B.currentMemorial.isGeneric) {
        memorialDeceasedName.innerHTML = `
          <span class="flex items-center gap-2">
            <span>صدقة جارية لمن تُحبّون</span>
            <i class="fa-solid fa-pen-to-square text-xs text-amber-400"></i>
          </span>
        `;
      } else {
        memorialDeceasedName.innerText = __B.currentMemorial.name;
      }
    }

    if (memorialGenderBadge) {
      if (__B.currentMemorial.isGeneric) {
        memorialGenderBadge.innerHTML = '<i class="fa-solid fa-heart text-amber-400 ml-1"></i> إهداء ثواب وتسبيح للمتوفى';
        memorialGenderBadge.className = 'px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30';
      } else if (__B.currentMemorial.gender === 'm') {
        memorialGenderBadge.innerHTML = '<i class="fa-solid fa-mars ml-1 text-sky-400"></i> ذكر (المرحوم له)';
        memorialGenderBadge.className = 'px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30';
      } else {
        memorialGenderBadge.innerHTML = '<i class="fa-solid fa-venus ml-1 text-pink-400"></i> أنثى (المرحومة لها)';
        memorialGenderBadge.className = 'px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30';
      }
    }

    if (memorialDedicatedNote) {
      if (__B.currentMemorial.isGeneric) {
        memorialDedicatedNote.innerHTML = `
          <span class="text-amber-300 font-semibold underline cursor-pointer hover:text-amber-200" id="btn-prompt-custom-name">
            انقر هنا لكتابة اسم فقيدكم وتخصيص الصفحة باسمه
          </span> ومشاركتها مع الأحباب بالدعاء
        `;
        const promptBtn = document.getElementById('btn-prompt-custom-name');
        if (promptBtn) promptBtn.addEventListener('click', (e) => { e.stopPropagation(); openMemorialModal(); });
      } else {
        memorialDedicatedNote.innerText = __B.currentMemorial.note || (__B.currentMemorial.gender === 'm' ? 'اللهم اجعل قبره روضة من رياض الجنة وأسكنه الفردوس الأعلى' : 'اللهم اجعل قبرها روضة من رياض الجنة وأسكنها الفردوس الأعلى');
      }
    }

    if (memorialRoundCount) {
      memorialRoundCount.innerText = __B.memorialRoundCounter.toLocaleString('ar-EG');
    }

    if (memorialSoundIcon) {
      memorialSoundIcon.className = __B.isTasbeehSoundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    }

    renderMemorialDhikrChips();
    renderMemorialDuas();
    renderMemorialSurahs();
  }

  function renderMemorialDhikrChips() {
    if (!memorialDhikrChips || typeof MEMORIAL_DATA === 'undefined' || !MEMORIAL_DATA.phrases) return;
    memorialDhikrChips.innerHTML = '';

    MEMORIAL_DATA.phrases.forEach((phrase, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      const isActive = idx === activeMemorialDhikrIdx;
      btn.className = `memorial-dhikr-pill px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 ${
        isActive 
          ? 'active bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm' 
          : 'bg-emerald-950/60 text-[var(--text-secondary)] hover:text-amber-400 border border-emerald-500/15'
      }`;
      btn.innerHTML = `<i class="fa-solid fa-seedling text-[10px] text-amber-400/80"></i> <span>${phrase.name}</span>`;
      btn.addEventListener('click', () => {
        activeMemorialDhikrIdx = idx;
        __B.memorialRoundCounter = 0;
        if (memorialRoundCount) memorialRoundCount.innerText = '0';
        renderMemorialDhikrChips();
        updateMemorialActiveDhikrText();
      });
      memorialDhikrChips.appendChild(btn);
    });

    updateMemorialActiveDhikrText();
  }

  function updateMemorialActiveDhikrText() {
    if (!memorialActiveDhikrText || typeof MEMORIAL_DATA === 'undefined') return;
    const phrase = MEMORIAL_DATA.phrases[activeMemorialDhikrIdx] || MEMORIAL_DATA.phrases[0];
    if (__B.currentMemorial.gender === 'f' && phrase.femaleText) {
      memorialActiveDhikrText.innerText = phrase.femaleText;
    } else {
      memorialActiveDhikrText.innerText = phrase.text;
    }
  }

  function renderMemorialDuas() {
    if (!memorialDuasGrid || typeof MEMORIAL_DATA === 'undefined' || !MEMORIAL_DATA.duas) return;
    memorialDuasGrid.innerHTML = '';

    MEMORIAL_DATA.duas.forEach((dua) => {
      const isFemale = __B.currentMemorial.gender === 'f';
      const duaText = isFemale ? dua.femaleText : dua.maleText;

      const card = document.createElement('div');
      card.className = 'memorial-dua-card glass-panel p-3.5 rounded-2xl border border-emerald-500/20 hover:border-amber-500/30 flex flex-col justify-between transition-all space-y-2.5';
      card.innerHTML = `
        <div class="space-y-1.5">
          <div class="flex items-center justify-between gap-2">
            <span class="font-bold text-xs sm:text-sm text-amber-300 flex items-center gap-1.5">
              <i class="fa-solid fa-hands-praying text-amber-400 text-xs"></i>
              ${dua.title}
            </span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/70 text-[var(--text-secondary)] border border-emerald-500/15">
              ${dua.source}
            </span>
          </div>
          <p class="font-quran text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed select-text py-1">
            ${duaText}
          </p>
          <div class="text-[11px] text-[var(--text-secondary)] italic flex items-center gap-1">
            <i class="fa-solid fa-circle-info text-[10px] text-amber-400/80"></i>
            <span>${dua.virtue}</span>
          </div>
        </div>
        <div class="flex items-center justify-between pt-2 border-t border-emerald-500/15 gap-2">
          <button class="btn-pray-dua flex-1 py-1.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95">
            <i class="fa-solid fa-hands-praying text-amber-300"></i>
            <span>آمين، دعوتُ ${isFemale ? 'لها' : 'له'}</span>
          </button>
          <button class="btn-copy-dua py-1.5 px-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-[var(--text-secondary)] hover:text-amber-400 border border-emerald-500/20 text-xs flex items-center justify-center gap-1 transition-all active:scale-95" title="نسخ الدعاء">
            <i class="fa-regular fa-copy"></i>
            <span class="hidden xs:inline">نسخ</span>
          </button>
        </div>
      `;

      const btnPray = card.querySelector('.btn-pray-dua');
      const btnCopy = card.querySelector('.btn-copy-dua');

      btnPray.addEventListener('click', () => {
        triggerHapticFeedback([25, 40]);
        btnPray.className = 'btn-pray-dua flex-1 py-1.5 px-3 rounded-xl bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold text-xs flex items-center justify-center gap-1.5 transition-all';
        btnPray.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-400"></i> <span>تقبّل الله، تم الدعاء وإهداء الثواب</span>';
        card.classList.add('border-emerald-500/50');
        const targetName = __B.currentMemorial.isGeneric ? 'المتوفى' : __B.currentMemorial.name;
        showToast(`تقبل الله منا ومنكم صالح الدعاء لروح ${targetName}`);
      });

      btnCopy.addEventListener('click', () => {
        const fullShareText = `دعاء لروح المغفور ${isFemale ? 'لها' : 'له'} بإذن الله: ${__B.currentMemorial.name}\n\n«${duaText}»\n\n- المصدر: ${dua.source}\n- منصة القرآن الكريم`;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(fullShareText);
          showToast('تم نسخ الدعاء إلى الحافظة بنجاح');
        }
      });

      memorialDuasGrid.appendChild(card);
    });
  }

  function renderMemorialSurahs() {
    if (!memorialSurahsGrid || typeof MEMORIAL_DATA === 'undefined' || !MEMORIAL_DATA.surahs) return;
    memorialSurahsGrid.innerHTML = '';

    MEMORIAL_DATA.surahs.forEach((s) => {
      const card = document.createElement('div');
      card.className = 'glass-panel p-3 rounded-2xl border border-emerald-500/20 hover:border-amber-500/35 flex flex-col justify-between transition-all space-y-2';
      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between">
            <span class="font-bold text-sm text-[var(--text-accent)] font-quran">سورة ${s.name}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25">${s.title}</span>
          </div>
          <p class="text-[11px] text-[var(--text-secondary)] mt-1.5 leading-snug line-clamp-2">${s.reason}</p>
        </div>
        <button class="btn-play-memorial-surah w-full py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95">
          <i class="fa-solid fa-headphones-simple text-[11px]"></i>
          <span>تلاوة وإهداء الثواب</span>
        </button>
      `;

      const btnPlay = card.querySelector('.btn-play-memorial-surah');
      btnPlay.addEventListener('click', () => {
        const idx = SURAHS.findIndex(item => item.id === s.id);
        if (idx !== -1) {
          __B.currentIndex = idx;
          loadSurah(SURAHS[__B.currentIndex], true);
        }
        triggerHapticFeedback([30, 50]);
        const targetName = __B.currentMemorial.isGeneric ? 'المتوفى' : __B.currentMemorial.name;
        showToast(`بدأت تلاوة سورة ${s.name} بنية إهداء ثواب الاستماع لروح ${targetName}`);
      });

      memorialSurahsGrid.appendChild(card);
    });
  }

  function shareMemorialLink(channel = 'copy') {
    const isGeneric = __B.currentMemorial.isGeneric;
    const url = isGeneric 
      ? `${window.location.origin}${window.location.pathname}`
      : `${window.location.origin}${window.location.pathname}?memorial=${encodeURIComponent(__B.currentMemorial.name)}&gender=${__B.currentMemorial.gender}`;
    const pronoun = __B.currentMemorial.gender === 'm' ? 'له' : 'لها';
    const targetName = isGeneric ? 'موتانا وموتى المسلمين' : `المغفور ${pronoun} بإذن الله: *${__B.currentMemorial.name}*`;
    const message = `صدقة جارية وإهداء ثواب على روح ${targetName}\n\nقال رسول الله ﷺ: «إِذَا مَاتَ ابْنُ آدَمَ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ: صَدَقَةٍ جَارِيَةٍ، وَعِلْمٍ يُنْتَفَعُ بِهِ، وَوَلَدٍ صَالِحٍ يَدْعُو لَهُ».\n\nشاركونا الأجر بقراءة سورة من القرآن، أو التسبيح والدعاء عبر الرابط التالي:\n${url}`;

    if (channel === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
      showToast('تم فتح واتساب لمشاركة صفحة الصدقة الجارية');
    } else {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url);
        showToast('تم نسخ رابط صفحة الصدقة الجارية بنجاح');
      } else if (navigator.share) {
        navigator.share({
          title: `صدقة جارية لروح ${__B.currentMemorial.name}`,
          text: message,
          url: url
        }).catch(() => {});
      }
    }
  }

  function showImagePreviewModal(blob, fileName) {
    const modal = document.getElementById('memorial-image-modal');
    const img = document.getElementById('memorial-preview-image');
    const btnShare = document.getElementById('btn-share-preview-card');
    const btnDownload = document.getElementById('btn-download-preview-card');
    if (!modal || !img) return;

    currentMemorialCardBlob = blob;
    currentMemorialCardFile = new File([blob], fileName, { type: 'image/png' });
    const url = URL.createObjectURL(blob);
    img.src = url;

    modal.classList.remove('hidden');

    if (btnShare) {
      btnShare.onclick = async () => {
        if (navigator.canShare && navigator.canShare({ files: [currentMemorialCardFile] })) {
          try {
            await navigator.share({
              files: [currentMemorialCardFile],
              title: `صدقة جارية لروح ${__B.currentMemorial.name}`,
              text: `صدقة جارية وإهداء ثواب لروح ${__B.currentMemorial.name}`
            });
            showToast('تمت مشاركة البطاقة بنجاح');
          } catch (e) {
            if (e.name !== 'AbortError') showToast('تعذرت المشاركة المباشرة', 'info');
          }
        } else {
          window.open(url, '_blank');
        }
      };
    }

    if (btnDownload) {
      btnDownload.onclick = () => {
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('جاري حفظ الصورة على جهازك...');
      };
    }
  }

  function generateMemorialCard() {
    try {
      showToast('جاري توليد البطاقة المصورة...', 'info');
      const canvas = document.createElement('canvas');
      canvas.width = 1080;
      canvas.height = 1080;
      const ctx = canvas.getContext('2d');

      // 1. Background Gradient
      const grad = ctx.createRadialGradient(540, 540, 50, 540, 540, 720);
      grad.addColorStop(0, '#064e3b');
      grad.addColorStop(0.55, '#022c22');
      grad.addColorStop(1, '#01150f');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1080, 1080);

      // 2. Subtle Starry/Dot pattern
      ctx.fillStyle = 'rgba(251, 191, 36, 0.08)';
      for (let i = 0; i < 40; i++) {
        const x = (i * 97) % 1080;
        const y = (i * 123) % 1080;
        ctx.beginPath();
        ctx.arc(x, y, (i % 3) + 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Golden Ornamental Border
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 4;
      ctx.strokeRect(45, 45, 990, 990);

      ctx.strokeStyle = 'rgba(251, 191, 36, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(55, 55, 970, 970);

      // Corner Accents
      const drawCorner = (cx, cy) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(0, 0, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-18, 0); ctx.lineTo(18, 0);
        ctx.moveTo(0, -18); ctx.lineTo(0, 18);
        ctx.stroke();
        ctx.restore();
      };
      drawCorner(70, 70);
      drawCorner(1010, 70);
      drawCorner(70, 1010);
      drawCorner(1010, 1010);

      // 4. Header: Basmala & Title
      ctx.textAlign = 'center';
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 36px "Amiri Quran", "Amiri", "Cairo", serif';
      ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', 540, 140);

      // Decorative divider
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(340, 165); ctx.lineTo(740, 165);
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 22px "Cairo", sans-serif';
      ctx.fillText('صَدَقَةٌ جَارِيَةٌ وَإِهْدَاءُ ثَوَابٍ', 540, 205);

      // 5. Dedication Heading & Name
      const isFemale = __B.currentMemorial.gender === 'f';
      const pronoun = isFemale ? 'لَهَا' : 'لَهُ';
      const isGeneric = __B.currentMemorial.isGeneric;

      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 26px "Amiri", "Cairo", sans-serif';
      if (isGeneric) {
        ctx.fillText('عَلَى نِيَّةِ مَوْتَانَا وَمَوْتَى المُسْلِمِينَ جَمِيعاً:', 540, 275);
      } else {
        ctx.fillText(`عَلَى رُوحِ المَغْفُورِ ${pronoun} بِإِذْنِ اللَّهِ تَعَالَى:`, 540, 275);
      }

      // 6. Big Glowing Deceased Name
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 60px "Amiri", "Cairo", serif';
      ctx.shadowColor = 'rgba(251, 191, 36, 0.7)';
      ctx.shadowBlur = 18;
      const displayName = isGeneric ? 'فقيدكم الغالي' : __B.currentMemorial.name;
      ctx.fillText(displayName, 540, 360);
      ctx.shadowBlur = 0; // reset shadow

      // 7. Dedication Dua Note or Featured Dua
      const defaultDua = isFemale
        ? 'اللَّهُمَّ اغْفِرْ لَهَا وَارْحَمْهَا وَعَافِهَا وَاعْفُ عَنْهَا وَأَكْرِمْ نُزُلَهَا وَوَسِّعْ مُدْخَلَهَا، وَاجْعَلْ قَبْرَهَا رَوْضَةً مِنْ رِيَاضِ الْجَنَّةِ.'
        : 'اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ، وَاجْعَلْ قَبْرَهُ رَوْضَةً مِنْ رِيَاضِ الْجَنَّةِ.';
      const noteToRender = (__B.currentMemorial.note && !isGeneric) ? __B.currentMemorial.note : defaultDua;

      // Rounded container for Dua
      ctx.fillStyle = 'rgba(3, 38, 29, 0.65)';
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.3)';
      ctx.lineWidth = 1.5;
      const boxX = 110, boxY = 415, boxW = 860, boxH = 260, radius = 24;
      ctx.beginPath();
      ctx.roundRect(boxX, boxY, boxW, boxH, radius);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#f8fafc';
      ctx.font = '28px "Amiri", "Cairo", serif';
      wrapCanvasText(ctx, noteToRender, 540, 480, 780, 48);

      // 8. Quranic Noble Ayah Box
      ctx.fillStyle = 'rgba(251, 191, 36, 0.12)';
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.35)';
      ctx.beginPath();
      ctx.roundRect(140, 715, 800, 115, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 28px "Amiri Quran", "Amiri", serif';
      ctx.fillText('«رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالإِيمَانِ»', 540, 762);

      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 18px "Cairo", sans-serif';
      ctx.fillText('سورة الحشر - آية 10', 540, 804);

      // 9. Prophetic Hadith & Footer
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '19px "Cairo", sans-serif';
      ctx.fillText('«إِذَا مَاتَ ابْنُ آدَمَ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ: صَدَقَةٍ جَارِيَةٍ، وَعِلْمٍ يُنْتَفَعُ بِهِ، وَوَلَدٍ صَالِحٍ يَدْعُو لَهُ»', 540, 895);

      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 18px "Cairo", sans-serif';
      ctx.fillText('مَنْصَةُ القُرآنِ الكَرِيمِ | شاركونا الدعاء والتسبيح', 540, 970);

      // Export Blob & Handle Mobile / Desktop download
      const cleanFileName = isGeneric ? 'فقيدكم_الغالي' : __B.currentMemorial.name.replace(/\s+/g, '_');
      const fileName = `صدقة_جارية_${cleanFileName}.png`;

      canvas.toBlob((blob) => {
        if (!blob) {
          showToast('تعذر تصدير البطاقة', 'error');
          return;
        }

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 1024;
        if (isMobile) {
          showImagePreviewModal(blob, fileName);
          showToast('تم تجهيز البطاقة المصورة للموبايل');
        } else {
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.download = fileName;
          link.href = blobUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(blobUrl), 15000);
          showToast('تم توليد وتنزيل بطاقة الصدقة الجارية بنجاح');
        }
      }, 'image/png');

    } catch (e) {
      console.error(e);
      showToast('حدث خطأ أثناء إنشاء البطاقة المصورة', 'error');
    }
  }

  function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let curY = y;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + (line ? ' ' : '') + words[n];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, x, curY);
        line = words[n];
        curY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, curY);
    return curY + lineHeight;
  }

  // Modal Creator Handlers
  function openMemorialModal() {
    if (!memorialCreatorModal) return;
    if (memorialInputName) {
      memorialInputName.value = __B.currentMemorial.isGeneric ? '' : __B.currentMemorial.name;
    }
    if (memorialInputNote) {
      memorialInputNote.value = __B.currentMemorial.isGeneric ? '' : (__B.currentMemorial.note || '');
    }
    setModalGender(__B.currentMemorial.gender || 'm');
    renderSavedMemorials();
    updateModalPreview();
    memorialCreatorModal.classList.remove('hidden');
    setTimeout(() => {
      if (memorialInputName) memorialInputName.focus();
    }, 120);
  }

  function closeMemorialModal() {
    if (!memorialCreatorModal) return;
    memorialCreatorModal.classList.add('hidden');
  }

  function setModalGender(gender) {
    modalSelectedGender = gender;
    if (memorialGenderBtnM && memorialGenderBtnF) {
      if (gender === 'm') {
        memorialGenderBtnM.className = 'memorial-gender-opt active py-2.5 px-3 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm';
        memorialGenderBtnF.className = 'memorial-gender-opt py-2.5 px-3 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all bg-emerald-950/60 text-[var(--text-secondary)] border-emerald-500/20';
      } else {
        memorialGenderBtnF.className = 'memorial-gender-opt active py-2.5 px-3 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all bg-pink-500/20 text-pink-300 border-pink-500/40 shadow-sm';
        memorialGenderBtnM.className = 'memorial-gender-opt py-2.5 px-3 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all bg-emerald-950/60 text-[var(--text-secondary)] border-emerald-500/20';
      }
    }
    updateModalPreview();
  }

  function updateModalPreview() {
    if (!memorialPreviewText) return;
    const name = (memorialInputName?.value || '').trim() || (modalSelectedGender === 'm' ? 'فقيدكم الغالي' : 'فقيدتكم الغالية');
    const note = (memorialInputNote?.value || '').trim();
    const pronoun = modalSelectedGender === 'm' ? 'له' : 'لها';
    const defaultDua = modalSelectedGender === 'm' 
      ? 'اللهم اجعل قبره روضة من رياض الجنة وأسكنه الفردوس الأعلى برفقة الصالحين.' 
      : 'اللهم اجعل قبرها روضة من رياض الجنة وأسكنها الفردوس الأعلى برفقة الصالحين.';

    memorialPreviewText.innerHTML = `
      <i class="fa-solid fa-seedling text-emerald-400 ml-1"></i> صدقة جارية وإهداء ثواب على روح المغفور ${pronoun} بإذن الله: <strong class="text-amber-400">${name}</strong>.<br>
      <span class="text-emerald-300 italic">«${note || defaultDua}»</span>
    `;
  }

  function submitCreateMemorial() {
    const name = (memorialInputName?.value || '').trim();
    if (!name || name.length < 2) {
      showToast('يرجى إدخال اسم الفقيد أو الفقيدة (حرفين على الأقل)', 'error');
      if (memorialInputName) memorialInputName.focus();
      return;
    }

    const note = (memorialInputNote?.value || '').trim();
    const newMemorial = {
      name: name,
      gender: modalSelectedGender,
      isGeneric: false,
      note: note || (modalSelectedGender === 'm' ? 'اللهم اجعل قبره روضة من رياض الجنة وأسكنه الفردوس الأعلى برفقة الصالحين' : 'اللهم اجعل قبرها روضة من رياض الجنة وأسكنها الفردوس الأعلى برفقة الصالحين')
    };

    // Save to localStorage
    __B.savedMemorials = __B.savedMemorials.filter(m => !(m.name === newMemorial.name && m.gender === newMemorial.gender));
    __B.savedMemorials.unshift(newMemorial);
    try {
      localStorage.setItem('quran_saved_memorials', JSON.stringify(__B.savedMemorials.slice(0, 10)));
    } catch (e) {}

    closeMemorialModal();
    openMemorialPage(newMemorial.name, newMemorial.gender, newMemorial.note, true);
    showToast(`تم إنشاء وتفعيل صفحة الصدقة الجارية لروح ${name} بنجاح`);
  }

  function renderSavedMemorials() {
    if (!memorialSavedList) return;
    memorialSavedList.innerHTML = '';

    if (!__B.savedMemorials || __B.savedMemorials.length === 0) {
      memorialSavedList.innerHTML = '<p class="text-[11px] text-[var(--text-secondary)] text-center py-2">لا توجد صفحات سابقة محفوظة</p>';
      return;
    }

    __B.savedMemorials.forEach((m, idx) => {
      const isFemale = m.gender === 'f';
      const item = document.createElement('div');
      item.className = 'flex items-center justify-between p-2 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/15 text-xs transition-colors';
      item.innerHTML = `
        <button type="button" class="btn-load-saved-memorial flex-1 flex items-center gap-2 text-right">
          <i class="fa-solid ${isFemale ? 'fa-venus text-pink-400' : 'fa-mars text-sky-400'} text-xs"></i>
          <span class="font-bold text-[var(--text-primary)] hover:text-amber-300">${m.name}</span>
          <span class="text-[10px] text-[var(--text-secondary)]">(${isFemale ? 'أنثى' : 'ذكر'})</span>
        </button>
        <button type="button" class="btn-delete-saved-memorial text-[var(--text-secondary)] hover:text-red-400 p-1 rounded-lg transition-colors" title="حذف من السجل">
          <i class="fa-regular fa-trash-can text-xs"></i>
        </button>
      `;

      item.querySelector('.btn-load-saved-memorial').addEventListener('click', () => {
        closeMemorialModal();
        openMemorialPage(m.name, m.gender, m.note, true);
      });

      item.querySelector('.btn-delete-saved-memorial').addEventListener('click', (e) => {
        e.stopPropagation();
        __B.savedMemorials.splice(idx, 1);
        try {
          localStorage.setItem('quran_saved_memorials', JSON.stringify(__B.savedMemorials));
        } catch (err) {}
        renderSavedMemorials();
        showToast(`تم حذف ${m.name} من السجل`);
      });

      memorialSavedList.appendChild(item);
    });
  }

  // ==========================================================================
  // HADR MEMORIZATION & FAST REVISION ENGINE (مصحف الحدر لمراجعة وتثبيت الحُفّاظ)
  // ==========================================================================
  window.initHadrView = initHadrView;
  function initHadrView() {
    window.initHadrView = initHadrView;
    const hadrView = document.getElementById('hadr-view');
    if (!hadrView) return;

    const hadrAudio = document.getElementById('hadr-audio');
    const reciterSelect = document.getElementById('hadr-reciter-select');
    const btnBack = document.getElementById('hadr-btn-back');
    const tabSurahs = document.getElementById('hadr-tab-surahs');
    const tabAjza = document.getElementById('hadr-tab-ajza');
    const tabTehzeeb = document.getElementById('hadr-tab-tehzeeb');
    const searchBar = document.getElementById('hadr-search-bar');
    const searchInput = document.getElementById('hadr-search-input');
    const panelSurahs = document.getElementById('hadr-panel-surahs');
    const panelAjza = document.getElementById('hadr-panel-ajza');
    const panelTehzeeb = document.getElementById('hadr-panel-tehzeeb');

    const playBtn = document.getElementById('hadr-btn-play');
    const playIcon = document.getElementById('hadr-play-icon');
    const prevBtn = document.getElementById('hadr-btn-prev');
    const nextBtn = document.getElementById('hadr-btn-next');
    const back10Btn = document.getElementById('hadr-btn-backward-10');
    const fwd10Btn = document.getElementById('hadr-btn-forward-10');
    const seekBar = document.getElementById('hadr-seek-bar');
    const currentTimeEl = document.getElementById('hadr-current-time');
    const totalTimeEl = document.getElementById('hadr-total-time');
    const syncMushafBtn = document.getElementById('hadr-btn-sync-mushaf');

    if (!hadrInitialized) {
      hadrInitialized = true;

      // 1. Populate Reciters Select
      if (reciterSelect && typeof HADR_RECITERS !== 'undefined') {
        reciterSelect.innerHTML = HADR_RECITERS.map(r => `<option value="${r.id}">${r.name}</option>`).join('');
        reciterSelect.value = __B.currentHadrReciterId;
        reciterSelect.addEventListener('change', () => {
          __B.currentHadrReciterId = reciterSelect.value;
          updateHadrNowPlayingUI();
          if (hadrAudio && !hadrAudio.paused) {
            playHadrSurah(__B.currentHadrSurahId, true);
          }
        });
      }

      // 2. Return Button
      if (btnBack) {
        btnBack.addEventListener('click', () => switchView('player'));
      }

      // 3. Tabs
      function switchHadrTab(mode) {
        currentHadrMode = mode;
        const activeClass = 'flex-1 py-1.5 px-2 rounded-xl text-amber-300 bg-amber-500/20 border border-amber-500/30 transition-all text-center flex items-center justify-center gap-1.5 shadow-sm';
        const inactiveClass = 'flex-1 py-1.5 px-2 rounded-xl text-[var(--text-secondary)] hover:text-amber-300 transition-all text-center flex items-center justify-center gap-1.5';

        if (tabSurahs) tabSurahs.className = mode === 'surahs' ? activeClass : inactiveClass;
        if (tabAjza) tabAjza.className = mode === 'ajza' ? activeClass : inactiveClass;
        if (tabTehzeeb) tabTehzeeb.className = mode === 'tehzeeb' ? activeClass : inactiveClass;

        if (panelSurahs) panelSurahs.classList.toggle('hidden', mode !== 'surahs');
        if (panelAjza) panelAjza.classList.toggle('hidden', mode !== 'ajza');
        if (panelTehzeeb) panelTehzeeb.classList.toggle('hidden', mode !== 'tehzeeb');
        if (searchBar) searchBar.classList.toggle('hidden', mode !== 'surahs');
      }

      if (tabSurahs) tabSurahs.addEventListener('click', () => switchHadrTab('surahs'));
      if (tabAjza) tabAjza.addEventListener('click', () => switchHadrTab('ajza'));
      if (tabTehzeeb) tabTehzeeb.addEventListener('click', () => switchHadrTab('tehzeeb'));

      // 4. Search Filter
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          const q = e.target.value.trim().toLowerCase();
          const cards = panelSurahs ? panelSurahs.querySelectorAll('.hadr-surah-card') : [];
          cards.forEach(card => {
            const name = card.getAttribute('data-name') || '';
            const num = card.getAttribute('data-id') || '';
            const match = !q || name.includes(q) || num === q;
            card.classList.toggle('hidden', !match);
          });
        });
      }

      // 5. Speed chips
      const speedChips = hadrView.querySelectorAll('.hadr-speed-chip');
      speedChips.forEach(chip => {
        chip.addEventListener('click', () => {
          speedChips.forEach(c => {
            c.classList.remove('bg-amber-500/20', 'text-amber-300', 'font-bold');
            c.classList.add('text-slate-300');
          });
          chip.classList.add('bg-amber-500/20', 'text-amber-300', 'font-bold');
          chip.classList.remove('text-slate-300');
          __B.hadrPlaybackSpeed = parseFloat(chip.getAttribute('data-speed')) || 1.0;
          if (hadrAudio) hadrAudio.playbackRate = __B.hadrPlaybackSpeed;
          showToast(`سرعة تلاوة الحدر: ${__B.hadrPlaybackSpeed}x`);
        });
      });

      // 6. Repeat chips
      const repeatChips = hadrView.querySelectorAll('.hadr-repeat-chip');
      repeatChips.forEach(chip => {
        chip.addEventListener('click', () => {
          repeatChips.forEach(c => {
            c.classList.remove('bg-amber-500/20', 'text-amber-300', 'font-bold');
            c.classList.add('text-slate-300');
          });
          chip.classList.add('bg-amber-500/20', 'text-amber-300', 'font-bold');
          chip.classList.remove('text-slate-300');
          hadrRepeatMode = chip.getAttribute('data-repeat');
          hadrRepeatCountLeft = hadrRepeatMode === 'loop' ? Infinity : (parseInt(hadrRepeatMode, 10) || 1);
          const repLabel = hadrRepeatMode === 'loop' ? 'تكرار لا نهائي' : `${hadrRepeatMode} مرات`;
          showToast(`تكرار الحدر للحفظ والتثبيت: ${repLabel}`);
        });
      });

      // 7. Dock controls
      if (playBtn) {
        playBtn.addEventListener('click', () => {
          if (!hadrAudio.src) {
            playHadrSurah(__B.currentHadrSurahId, true);
          } else if (hadrAudio.paused) {
            hadrAudio.play().then(() => {
              if (playIcon) playIcon.className = 'fa-solid fa-pause';
            }).catch(() => {});
          } else {
            hadrAudio.pause();
            if (playIcon) playIcon.className = 'fa-solid fa-play';
          }
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (__B.currentHadrSurahId > 1) {
            playHadrSurah(__B.currentHadrSurahId - 1, true);
          }
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (__B.currentHadrSurahId < 114) {
            playHadrSurah(__B.currentHadrSurahId + 1, true);
          }
        });
      }

      if (back10Btn) {
        back10Btn.addEventListener('click', () => {
          if (hadrAudio) hadrAudio.currentTime = Math.max(0, hadrAudio.currentTime - 10);
        });
      }

      if (fwd10Btn) {
        fwd10Btn.addEventListener('click', () => {
          if (hadrAudio) hadrAudio.currentTime = Math.min(hadrAudio.duration || 0, hadrAudio.currentTime + 10);
        });
      }

      if (seekBar) {
        seekBar.addEventListener('input', () => {
          if (hadrAudio && hadrAudio.duration) {
            hadrAudio.currentTime = (seekBar.value / 100) * hadrAudio.duration;
          }
        });
      }

      if (syncMushafBtn) {
        syncMushafBtn.addEventListener('click', () => {
          switchView('mushaf');
          if (typeof loadSurahMushaf === 'function') {
            loadSurahMushaf(__B.currentHadrSurahId);
          }
          const sName = (typeof SURAHS !== 'undefined' && SURAHS.find(s => s.id === __B.currentHadrSurahId)?.name) || '';
          showToast(`تم فتح سورة ${sName} في المصحف للقراءة مع تلاوة الحدر`);
        });
      }

      if (hadrAudio) {
        hadrAudio.addEventListener('timeupdate', () => {
          if (!hadrAudio.duration) return;
          const pct = (hadrAudio.currentTime / hadrAudio.duration) * 100;
          if (seekBar) seekBar.value = pct;
          if (currentTimeEl) currentTimeEl.innerText = formatTime(hadrAudio.currentTime);
          if (totalTimeEl) totalTimeEl.innerText = formatTime(hadrAudio.duration);

          if (__B.activeMiniEngine === 'hadr') {
            const cur = Math.floor(hadrAudio.currentTime);
            const dur = Math.floor(hadrAudio.duration);
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
        });

        hadrAudio.addEventListener('play', () => {
          __B.activeMiniEngine = 'hadr';
          if (playIcon) playIcon.className = 'fa-solid fa-pause';
          // Sync-pause main player cleanly so __B.isPlaying stays false and main mini-player never hijacks Hadr
          if (__B.isPlaying || (audio && !audio.paused)) {
            pauseAudio();
          }
          syncHadrToMiniPlayer();
          syncMiniPlayerVisibility(__B.currentView);
        });

        hadrAudio.addEventListener('pause', () => {
          if (playIcon) playIcon.className = 'fa-solid fa-play';
          if (__B.activeMiniEngine === 'hadr') {
            syncHadrToMiniPlayer();
          }
        });

        hadrAudio.addEventListener('ended', () => {
          if (hadrRepeatMode === 'loop') {
            hadrAudio.currentTime = 0;
            hadrAudio.play().catch(() => {});
            return;
          }
          hadrRepeatCountLeft--;
          if (hadrRepeatCountLeft > 0) {
            hadrAudio.currentTime = 0;
            hadrAudio.play().catch(() => {});
            showToast(`تكرار السورة للحفظ: متبقي ${hadrRepeatCountLeft} مرة`);
            return;
          }

          hadrRepeatCountLeft = parseInt(hadrRepeatMode, 10) || 1;

          if (hadrPlaylistQueue.length > 0 && hadrQueueIndex < hadrPlaylistQueue.length - 1) {
            hadrQueueIndex++;
            playHadrSurah(hadrPlaylistQueue[hadrQueueIndex], true);
            return;
          }

          if (__B.currentHadrSurahId < 114) {
            playHadrSurah(__B.currentHadrSurahId + 1, true);
          }
        });
      }

      // Initial Panel Renders
      renderHadrSurahsPanel();
      renderHadrAjzaPanel();
      renderHadrTehzeebPanel();
    }

    updateHadrNowPlayingUI();
  }

  let hadrAudioCandidates = [];
  let hadrAudioCandidateIdx = 0;
  let hadrStallTimer = null;

  function tryNextHadrCandidate(hadrAudio) {
    if (hadrStallTimer) { clearTimeout(hadrStallTimer); hadrStallTimer = null; }
    hadrAudioCandidateIdx++;
    if (hadrAudioCandidateIdx < hadrAudioCandidates.length && hadrAudio) {
      prepareElementCorsForSpatial(hadrAudio, hadrAudioCandidates[hadrAudioCandidateIdx]);
      hadrAudio.src = hadrAudioCandidates[hadrAudioCandidateIdx];
      hadrAudio.playbackRate = __B.hadrPlaybackSpeed;
      hadrAudio.play().catch(() => {});
      return true;
    }
    showToast('تعذر تحميل تلاوة الحدر حالياً، يرجى التحقق من الإنترنت.', 'error');
    const playIcon = document.getElementById('hadr-play-icon');
    if (playIcon) playIcon.className = 'fa-solid fa-play';
    return false;
  }

  function playHadrSurah(surahId, autoPlay = true) {
    __B.currentHadrSurahId = surahId;
    if (autoPlay) {
      if (__B.isPlaying || (audio && !audio.paused)) {
        pauseAudio();
      }
      __B.activeMiniEngine = 'hadr';
    }
    const hadrAudio = document.getElementById('hadr-audio');
    const reciters = typeof HADR_RECITERS !== 'undefined' ? HADR_RECITERS : [];
    const reciter = reciters.find(r => r.id === __B.currentHadrReciterId) || reciters[0];
    const padded = String(surahId).padStart(3, '0');
    hadrAudioCandidates = [
      reciter && reciter.serverUrl ? `${reciter.serverUrl}${padded}.mp3` : null,
      reciter && reciter.fallbackServerUrl ? `${reciter.fallbackServerUrl}${padded}.mp3` : null,
      reciter && reciter.cdnFallbackUrl ? `${reciter.cdnFallbackUrl}${padded}.mp3` : null,
      `https://cdn.mp3quran.net/audio/mahmoud-husary/r1/${padded}.mp3`
    ].filter((u, idx, arr) => u && arr.indexOf(u) === idx);
    hadrAudioCandidateIdx = 0;

    if (hadrAudio && hadrAudioCandidates.length > 0) {
      if (hadrStallTimer) clearTimeout(hadrStallTimer);
      hadrAudio.onerror = () => {
        if (!hadrAudio.getAttribute('src')) return;
        tryNextHadrCandidate(hadrAudio);
      };
      hadrAudio.onplaying = () => {
        if (hadrStallTimer) { clearTimeout(hadrStallTimer); hadrStallTimer = null; }
      };
      prepareElementCorsForSpatial(hadrAudio, hadrAudioCandidates[0]);
      hadrAudio.src = hadrAudioCandidates[0];
      hadrAudio.playbackRate = __B.hadrPlaybackSpeed;
      if (autoPlay && __B.spatialEnabled) {
        attachMediaElementToSpatialGraph(hadrAudio);
      }
      if (autoPlay) {
        if (__B.spatialGraphReady && __B.audioCtx && __B.audioCtx.state === 'suspended') {
          __B.audioCtx.resume().catch(() => {});
        }
        hadrStallTimer = setTimeout(() => {
          if (!hadrAudio.paused && hadrAudio.readyState < 3) {
            tryNextHadrCandidate(hadrAudio);
          }
        }, 10000);
        hadrAudio.play().then(() => {
          if (hadrStallTimer) { clearTimeout(hadrStallTimer); hadrStallTimer = null; }
          const playIcon = document.getElementById('hadr-play-icon');
          if (playIcon) playIcon.className = 'fa-solid fa-pause';
        }).catch(err => {
          if (err && err.name === 'AbortError') return;
          console.warn('Hadr autoplay prevented:', err);
          if (err && err.name !== 'NotAllowedError') {
            tryNextHadrCandidate(hadrAudio);
          }
        });
      }
    }

    updateHadrNowPlayingUI();
    highlightHadrCard(surahId);
  }

  function updateHadrNowPlayingUI() {
    const surah = (typeof SURAHS !== 'undefined' && SURAHS.find(s => s.id === __B.currentHadrSurahId)) || { id: 1, name: 'الفاتحة', versesCount: 7 };
    const reciters = typeof HADR_RECITERS !== 'undefined' ? HADR_RECITERS : [];
    const reciter = reciters.find(r => r.id === __B.currentHadrReciterId) || reciters[0];

    const nowSurahNum = document.getElementById('hadr-now-surah-num');
    const nowSurahName = document.getElementById('hadr-now-surah-name');
    const nowReciterName = document.getElementById('hadr-now-reciter-name');
    const nowMeta = document.getElementById('hadr-now-meta');

    if (nowSurahNum) nowSurahNum.innerText = surah.id;
    if (nowSurahName) nowSurahName.innerText = `سُورَةُ ${surah.name}`;
    if (nowReciterName) nowReciterName.innerText = `• ${reciter.name}`;
    if (nowMeta) nowMeta.innerText = `${surah.versesCount} آية • ${surah.revelationPlace === 'makkah' ? 'مكية' : 'مدنية'} • ${reciter.badge}`;
    if (__B.activeMiniEngine === 'hadr') syncHadrToMiniPlayer();
  }

  function highlightHadrCard(surahId) {
    const panelSurahs = document.getElementById('hadr-panel-surahs');
    if (!panelSurahs) return;
    const cards = panelSurahs.querySelectorAll('.hadr-surah-card');
    cards.forEach(card => {
      const id = parseInt(card.getAttribute('data-id'), 10);
      card.classList.toggle('active-hadr', id === surahId);
      const icon = card.querySelector('.hadr-card-play-icon');
      if (icon) {
        icon.className = id === surahId ? 'fa-solid fa-volume-high text-amber-400' : 'fa-solid fa-play text-slate-400';
      }
    });
  }

  function renderHadrSurahsPanel() {
    const panel = document.getElementById('hadr-panel-surahs');
    if (!panel || typeof SURAHS === 'undefined') return;

    panel.innerHTML = SURAHS.map(s => {
      const isMakkah = s.revelationPlace === 'makkah';
      return `
        <div class="hadr-surah-card p-2.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/20 hover:border-amber-500/40 cursor-pointer flex items-center justify-between gap-2.5 transition-all group" data-id="${s.id}" data-name="${s.name}">
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="w-7 h-7 rounded-xl bg-emerald-900/60 text-amber-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs flex-shrink-0 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-colors">
              ${s.id}
            </span>
            <div class="min-w-0">
              <div class="font-bold text-xs sm:text-sm text-slate-100 group-hover:text-amber-300 truncate">
                سورة ${s.name}
              </div>
              <div class="text-[10px] text-[var(--text-secondary)] flex items-center gap-1.5 mt-0.5">
                <span>${s.versesCount} آية</span>
                <span>•</span>
                <span class="${isMakkah ? 'text-amber-400/80' : 'text-emerald-400/80'}">${isMakkah ? 'مكية' : 'مدنية'}</span>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-1.5 flex-shrink-0">
            <button type="button" class="btn-read-mushaf-from-hadr p-1.5 rounded-lg text-slate-400 hover:text-amber-300 hover:bg-emerald-500/10 text-xs transition-colors" title="قراءة في المصحف">
              <i class="fa-solid fa-book-open"></i>
            </button>
            <div class="w-8 h-8 rounded-xl bg-amber-500/15 group-hover:bg-amber-500 group-hover:text-slate-950 text-amber-300 border border-amber-500/30 flex items-center justify-center text-xs transition-all shadow-sm">
              <i class="fa-solid fa-play hadr-card-play-icon"></i>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach Click Handlers
    panel.querySelectorAll('.hadr-surah-card').forEach(card => {
      const id = parseInt(card.getAttribute('data-id'), 10);
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-read-mushaf-from-hadr')) {
          e.stopPropagation();
          switchView('mushaf');
          if (typeof loadSurahMushaf === 'function') loadSurahMushaf(id);
          return;
        }
        hadrPlaylistQueue = [];
        playHadrSurah(id, true);
      });
    });
  }

  function renderHadrAjzaPanel() {
    const panel = document.getElementById('hadr-panel-ajza');
    if (!panel || typeof HADR_AJZA === 'undefined') return;

    panel.innerHTML = HADR_AJZA.map(j => {
      return `
        <div class="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/20 hover:border-amber-500/40 transition-all flex flex-col justify-between gap-2.5">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold text-xs flex items-center justify-center">
                ${j.juz}
              </span>
              <div>
                <h4 class="font-bold text-xs sm:text-sm text-slate-100">${j.name}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5">${j.desc}</p>
              </div>
            </div>
            <span class="text-[9px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/20">
              ${j.surahIds.length} ${j.surahIds.length === 1 ? 'سورة' : 'سور'}
            </span>
          </div>

          <div class="flex items-center justify-between pt-2 border-t border-emerald-500/10">
            <span class="text-[10px] text-[var(--text-secondary)]">تسميع ومراجعة متصلة</span>
            <button type="button" class="btn-play-juz py-1.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-xs flex items-center gap-1.5 border border-amber-500/30 transition-all active:scale-95" data-juz="${j.juz}">
              <i class="fa-solid fa-play text-[10px]"></i>
              <span>تشغيل الجزء بالحدر</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    panel.querySelectorAll('.btn-play-juz').forEach(btn => {
      const juzNum = parseInt(btn.getAttribute('data-juz'), 10);
      const juzObj = HADR_AJZA.find(j => j.juz === juzNum);
      if (juzObj) {
        btn.addEventListener('click', () => {
          hadrPlaylistQueue = [...juzObj.surahIds];
          hadrQueueIndex = 0;
          playHadrSurah(hadrPlaylistQueue[0], true);
          showToast(`بدء تلاوة ${juzObj.name} بالحدر السريع`);
        });
      }
    });
  }

  function renderHadrTehzeebPanel() {
    const panel = document.getElementById('hadr-panel-tehzeeb');
    if (!panel || typeof HADR_TEHZEEB === 'undefined') return;

    panel.innerHTML = HADR_TEHZEEB.map(w => {
      return `
        <div class="p-3 sm:p-3.5 rounded-2xl bg-emerald-950/60 border border-cyan-500/20 hover:border-amber-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex flex-col items-center justify-center flex-shrink-0">
              <span class="text-[10px] font-bold text-amber-300">اليوم</span>
              <span class="text-xs font-black">${w.day}</span>
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <h4 class="font-bold text-xs sm:text-sm text-slate-100">${w.title}</h4>
                <span class="text-[10px] bg-amber-500/20 text-amber-300 font-mono font-bold px-1.5 py-0.2 rounded border border-amber-500/30">${w.symbol}</span>
              </div>
              <p class="text-[10px] text-slate-400 mt-0.5 truncate">${w.desc}</p>
            </div>
          </div>

          <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button type="button" class="btn-play-wird py-1.5 px-3.5 rounded-xl bg-cyan-500/20 hover:bg-amber-500 text-cyan-300 hover:text-slate-950 font-bold text-xs flex items-center gap-1.5 border border-cyan-500/30 hover:border-amber-400 transition-all active:scale-95 shadow-sm" data-day="${w.day}">
              <i class="fa-solid fa-play text-[10px]"></i>
              <span>تشغيل الورد كاملاً (${w.surahs.length} سورة)</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    panel.querySelectorAll('.btn-play-wird').forEach(btn => {
      const day = parseInt(btn.getAttribute('data-day'), 10);
      const wirdObj = HADR_TEHZEEB.find(w => w.day === day);
      if (wirdObj) {
        btn.addEventListener('click', () => {
          hadrPlaylistQueue = [...wirdObj.surahs];
          hadrQueueIndex = 0;
          playHadrSurah(hadrPlaylistQueue[0], true);
          showToast(`بدء مراجعة ${wirdObj.title} - ${wirdObj.rangeName}`);
        });
      }
    });
  }

  // --- Toast Notification Helper ---
  return {
    initSpiritualCompanionHub,
    updateDailyStreak,
    updateKhatmaDashboard,
    initMemorialEngine,
    toggleMemorialSound,
    triggerHapticFeedback,
    openMemorialPage,
    updateMemorialViewUI,
    shareMemorialLink,
    generateMemorialCard,
    openMemorialModal,
    initHadrView,
    playHadrSurah
  };
};
