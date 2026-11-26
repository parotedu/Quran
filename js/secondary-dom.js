window.__QURAN_SECONDARY_DOM = {
  mushaf: `<!-- Mobile Slim Header Bar (Takes only ~40px on Mobile!) -->
        <div id="m-mushaf-topbar" class="lg:hidden surah-frame rounded-xl p-1.5 xs:p-2 mb-1.5 flex items-center justify-between gap-2 flex-shrink-0">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-7 h-7 xs:w-8 xs:h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 text-xs flex-shrink-0" id="m-mushaf-badge">
              1
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5">
                <h3 class="font-bold text-xs xs:text-sm font-quran text-[var(--text-primary)] truncate" id="m-mushaf-title">
                  سُورَةُ الفَاتِحَةِ
                </h3>
                <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold flex-shrink-0" id="m-mushaf-revelation">
                  مكية
                </span>
              </div>
              <p class="text-[9px] text-[var(--text-secondary)] truncate" id="m-mushaf-meta">
                7 آيات • الجزء 1
              </p>
            </div>
          </div>

          <div class="flex items-center gap-1.5 flex-shrink-0">
            <!-- Play/Pause audio button for this surah -->
            <button id="m-mushaf-btn-play" class="w-8 h-8 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold flex items-center justify-center text-xs shadow active:scale-95" title="تلاوة القارئ">
              <i class="fa-solid fa-play text-xs" id="m-mushaf-play-icon"></i>
            </button>
            
            <!-- Single Dedicated Options Button for Mobile! -->
            <button id="btn-open-mushaf-options" class="px-2.5 py-1.5 rounded-xl bg-emerald-950/85 hover:bg-emerald-900 border border-amber-500/35 text-amber-300 font-bold text-xs flex items-center gap-1.5 shadow active:scale-95" title="خيارات وأدوات المصحف">
              <i class="fa-solid fa-sliders text-xs"></i>
              <span>خيارات</span>
            </button>
          </div>
        </div>

        <!-- Tier 1: Mushaf Surah Header Bar (Desktop/Tablet only: hidden lg:flex) -->
        <div class="hidden lg:flex surah-frame rounded-xl sm:rounded-2xl p-2 sm:p-3.5 mb-1.5 sm:mb-2 flex-wrap items-center justify-between gap-1.5 sm:gap-2 flex-shrink-0">
          <!-- Surah Title & Details -->
          <div class="flex items-center gap-2 sm:gap-2.5">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 text-xs sm:text-sm shadow-inner" id="mushaf-surah-badge">
              1
            </div>
            <div>
              <div class="flex items-center gap-1.5 sm:gap-2">
                <h3 class="font-bold text-sm sm:text-xl font-quran text-[var(--text-primary)]" id="mushaf-surah-title">
                  سُورَةُ الفَاتِحَةِ
                </h3>
                <span class="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold" id="mushaf-revelation-badge">
                  مكية
                </span>
              </div>
              <p class="text-[9px] sm:text-[11px] text-[var(--text-secondary)]" id="mushaf-surah-meta">
                7 آيات • الجزء 1 • الصفحة 1
              </p>
            </div>
          </div>

          <!-- Quick Surah Dropdown, Bookmark Jump & Font Zoom Controls -->
          <div class="flex items-center gap-1 sm:gap-2 flex-wrap">
            <!-- Jump to Saved Bookmark Button -->
            <button id="mushaf-btn-goto-bookmark" class="px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-400 text-[10px] sm:text-[11px] font-bold flex items-center gap-1 sm:gap-1.5 transition-all active:scale-95" title="الانتقال إلى آخر آية توقفت عندها (فاصل الختمة)">
              <i class="fa-solid fa-bookmark text-xs"></i>
              <span class="hidden xs:inline" id="mushaf-bookmark-btn-text">الفاصل</span>
            </button>

            <!-- Quick Surah Select Dropdown -->
            <div class="relative">
              <select id="mushaf-surah-select" class="text-xs py-1 sm:py-1.5 pr-2 sm:pr-2.5 pl-5 sm:pl-6 rounded-xl custom-input appearance-none cursor-pointer font-medium max-w-[105px] xs:max-w-[130px] sm:max-w-[165px]">
                <!-- Populated dynamically via JS -->
              </select>
              <span class="absolute left-1.5 sm:left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-[10px] pointer-events-none">
                <i class="fa-solid fa-chevron-down"></i>
              </span>
            </div>

            <!-- Font Size Zoom Controls -->
            <div class="flex items-center bg-emerald-950/50 rounded-xl p-0.5 sm:p-1 border border-emerald-500/15 text-xs shadow-inner">
              <button id="mushaf-zoom-out" class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-amber-400 hover:bg-emerald-500/10 transition-colors" title="تصغير الخط">
                <i class="fa-solid fa-magnifying-glass-minus text-[11px]"></i>
              </button>
              <span id="mushaf-font-size-label" class="px-1 text-[10px] sm:text-[11px] font-bold text-amber-400 select-none min-w-[32px] sm:min-w-[34px] text-center">
                100%
              </span>
              <button id="mushaf-zoom-in" class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-amber-400 hover:bg-emerald-500/10 transition-colors" title="تكبير الخط">
                <i class="fa-solid fa-magnifying-glass-plus text-[11px]"></i>
              </button>
              <button id="mushaf-zoom-reset" class="w-6 h-6 rounded-lg text-[10px] text-gray-400 hover:text-amber-400 transition-colors hidden sm:flex items-center justify-center" title="إعادة تعيين الحجم">
                <i class="fa-solid fa-rotate-left"></i>
              </button>
            </div>

            <!-- Play this Surah audio button inside Mushaf -->
            <button id="mushaf-btn-play-audio" class="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-xs flex items-center gap-1.5 transition-all shadow active:scale-95" title="استمع لهذه السورة بصوت القارئ المختار">
              <i class="fa-solid fa-play text-xs" id="mushaf-play-icon"></i>
              <span class="hidden md:inline">تلاوة القارئ</span>
            </button>
          </div>
        </div>

        <!-- Tier 2: SMART MEMORIZATION BAR (Desktop/Tablet only: hidden lg:flex) -->
        <div id="mushaf-memorize-bar" class="hidden lg:flex mb-1.5 sm:mb-2.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-emerald-950/65 border border-amber-500/25 flex-wrap items-center justify-between gap-1.5 sm:gap-2 text-xs flex-shrink-0 shadow-md">
          <!-- Right: Memorization Mode Toggle + Live Hovered Ayah Badge -->
          <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <button id="btn-toggle-memorize-mode" class="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl font-bold text-[11px] sm:text-xs flex items-center gap-1.5 sm:gap-2 transition-all bg-amber-500 text-slate-900 shadow-md active:scale-95" title="عند التفعيل يتم عمل Hover وتظليل تلقائي للآية التي يقرأها الشيخ مع التمرير التلقائي وتكرار الآيات للحفظ">
              <span id="memorize-status-dot" class="w-2 h-2 rounded-full bg-slate-900 animate-ping"></span>
              <i class="fa-solid fa-graduation-cap"></i>
              <span id="memorize-mode-label">التحفيظ والتتبع: مفعل</span>
            </button>

            <!-- Live Reciting Ayah Status Pill -->
            <button id="memorize-live-ayah-badge" class="px-2 sm:px-2.5 py-1 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 sm:gap-1.5 hover:bg-amber-500/25 transition-all" title="انقر للتمرير إلى الآية التي يتلوها القارئ الآن">
              <i class="fa-solid fa-wave-square text-amber-400 text-[10px]"></i>
              <span id="memorize-live-ayah-text">تتبع الآيات تلقائياً</span>
            </button>
          </div>

          <!-- Left: Memorization Tools (Inline Tafsir + Hifz Self-Test + Ayah Repeat + Open Studio) -->
          <div class="flex items-center gap-1 sm:gap-1.5 flex-wrap">
            <!-- Inline Tafsir & Translation Mode Selector (V3.0) -->
            <div class="flex items-center gap-1 bg-emerald-950/80 px-2 py-0.5 sm:py-1 rounded-xl border border-amber-500/25">
              <i class="fa-solid fa-book-open-reader text-amber-400 text-[10px]"></i>
              <select id="mushaf-inline-tafsir-select" class="bg-transparent text-amber-300 font-bold text-[10px] sm:text-[11px] outline-none cursor-pointer" title="عرض التفسير أو الترجمة تحت كل آية مباشرة في المصحف">
                <option value="none" class="bg-emerald-950 text-white" selected>مصحف صافٍ (بدون حواشٍ)</option>
                <option value="ar.muyassar" class="bg-emerald-950 text-white">مع التفسير الميسر</option>
                <option value="ar.jalalayn" class="bg-emerald-950 text-white">مع تفسير الجلالين</option>
                <option value="ar.waseet" class="bg-emerald-950 text-white">مع التفسير الوسيط</option>
                <option value="en.sahih" class="bg-emerald-950 text-white">مع الترجمة الإنجليزية</option>
              </select>
            </div>

            <!-- Interactive Hifz Self-Test Selector (V3.0) -->
            <div class="flex items-center gap-1 bg-emerald-950/80 px-2 py-0.5 sm:py-1 rounded-xl border border-emerald-500/20">
              <i class="fa-solid fa-eye-slash text-cyan-400 text-[10px]" id="memorize-blur-icon"></i>
              <select id="mushaf-hifz-mode-select" class="bg-transparent text-cyan-300 font-bold text-[10px] sm:text-[11px] outline-none cursor-pointer" title="وضع اختبر حفظك التفاعلي: انقر على الآية المخفية لكشفها والتأكد من تسميعك">
                <option value="off" class="bg-emerald-950 text-white" selected>اختبر حفظك: إيقاف</option>
                <option value="full" class="bg-emerald-950 text-white">إخفاء كامل للآيات</option>
                <option value="endings" class="bg-emerald-950 text-white">إخفاء خواتيم الآيات</option>
                <option value="starts" class="bg-emerald-950 text-white">إخفاء بدايات الآيات</option>
              </select>
            </div>

            <!-- Hifz Score Badge (Visible when Hifz Test Mode is active) -->
            <span id="mushaf-hifz-score-badge" class="hidden px-2 py-1 rounded-xl bg-emerald-500/20 border border-emerald-500/35 text-emerald-300 font-bold text-[10px] items-center gap-1">
              <i class="fa-solid fa-check-double"></i>
              <span id="mushaf-hifz-score-text">تم تسميع: 0</span>
            </span>

            <!-- Repeat Single Ayah in Memorization Mode -->
            <div class="flex items-center gap-1 bg-emerald-950/80 px-2 py-0.5 sm:py-1 rounded-xl border border-emerald-500/20">
              <span class="text-[9px] sm:text-[10px] text-[var(--text-secondary)]">تكرار:</span>
              <select id="memorize-repeat-select" class="bg-transparent text-amber-400 font-bold text-[10px] sm:text-[11px] outline-none cursor-pointer">
                <option value="1" class="bg-emerald-950 text-white" selected>1x</option>
                <option value="2" class="bg-emerald-950 text-white">2x</option>
                <option value="3" class="bg-emerald-950 text-white">3x</option>
                <option value="5" class="bg-emerald-950 text-white">5x</option>
                <option value="99" class="bg-emerald-950 text-white">∞</option>
              </select>
            </div>

            <!-- Legacy Blur Button (Kept hidden/synced for backward compatibility) -->
            <button id="btn-memorize-blur" class="hidden px-2 py-1 rounded-xl bg-emerald-950/80 hover:bg-amber-500/20 border border-emerald-500/20 text-[var(--text-secondary)] hover:text-amber-400 text-[10px] sm:text-[11px] font-semibold items-center gap-1 transition-all" title="إخفاء نص الآيات لاختبار حفظك">
              <span>اختبار</span>
            </button>

            <!-- Open Ayah Studio for Current Active Ayah -->
            <button id="btn-memorize-open-studio" class="px-2 sm:px-2.5 py-1 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-400 text-[10px] sm:text-[11px] font-bold flex items-center gap-1 transition-all" title="فتح التفسير والبطاقة المصورة للآية الحالية">
              <i class="fa-solid fa-wand-magic-sparkles text-[10px]"></i>
              <span>تفسير وبطاقة الآية</span>
            </button>
          </div>
        </div>

        <!-- Scrollable Mushaf Quran Text Area (Takes > 80% screen space on Mobile) -->
        <div class="flex-1 overflow-y-auto playlist-scroll px-1.5 sm:px-6 py-1 sm:py-2 pb-28 lg:pb-4 select-text" id="mushaf-scroll-area">
          <!-- Basmala Header -->
          <div id="mushaf-basmala" class="basmala-banner my-2 sm:my-6 text-center text-xl sm:text-2xl lg:text-3xl font-quran-text">
            بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
          </div>

          <!-- Dynamic Ayahs Container -->
          <div id="mushaf-content" class="mushaf-container font-quran-text text-[var(--text-primary)] leading-[2.6] py-2">
            <!-- Populated via JS -->
            <div class="flex flex-col items-center justify-center py-20 text-center text-slate-400">
              <i class="fa-solid fa-circle-notch animate-spin text-3xl mb-3 text-amber-500"></i>
              <p class="text-sm">جاري تحميل آيات السورة المباركة...</p>
            </div>
          </div>
        </div>`,
  spiritual: `<!-- Top Khatma & Analytics Dashboard Card -->
        <div id="khatma-dashboard-card" class="surah-frame rounded-xl sm:rounded-2xl p-2.5 sm:p-4 mb-2 sm:mb-3 flex-shrink-0 transition-all">
          <div class="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
            <div class="flex items-center gap-2.5 sm:gap-3">
              <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-amber-500/20 border border-amber-500/35 flex items-center justify-center text-amber-400 text-base sm:text-lg shadow-inner">
                <i class="fa-solid fa-mosque"></i>
              </div>
              <div>
                <h3 class="font-bold text-xs sm:text-base font-quran text-[var(--text-accent)]">متابعة الختمة والورد اليومي</h3>
                <p class="text-[10px] sm:text-[11px] text-[var(--text-secondary)]" id="khatma-bookmark-display">
                  فاصل القراءة: انقر على أي آية في المصحف لحفظ مكانك
                </p>
              </div>
            </div>

            <!-- Stats Pills -->
            <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <div class="px-2 py-1 rounded-xl bg-amber-500/15 border border-amber-500/30 text-[10px] sm:text-[11px] flex items-center gap-1 sm:gap-1.5" title="عدد أيام المواظبة المتتالية على القرآن الكريم">
                <i class="fa-solid fa-fire text-amber-400"></i>
                <span class="text-[var(--text-secondary)]">المواظبة:</span>
                <strong class="text-amber-300" id="khatma-streak-count">1 يوم</strong>
              </div>
              <div class="px-2 py-1 rounded-xl bg-emerald-950/60 border border-emerald-500/20 text-[10px] sm:text-[11px] flex items-center gap-1 sm:gap-1.5">
                <i class="fa-solid fa-circle-check text-emerald-400"></i>
                <span class="text-[var(--text-secondary)]">المستمع:</span>
                <strong class="text-amber-400" id="khatma-surahs-count">0 / 114</strong>
              </div>
              <div class="px-2 py-1 rounded-xl bg-emerald-950/60 border border-emerald-500/20 text-[10px] sm:text-[11px] flex items-center gap-1 sm:gap-1.5">
                <i class="fa-solid fa-clock text-amber-400"></i>
                <span class="text-[var(--text-secondary)]">الاستماع:</span>
                <strong class="text-amber-400" id="khatma-minutes-count">0 دقيقة</strong>
              </div>
              <button id="sp-btn-jump-bookmark" class="px-2.5 sm:px-3 py-1 rounded-xl bg-amber-500 text-slate-900 font-bold text-[10px] sm:text-[11px] hover:bg-amber-400 transition-all active:scale-95 flex items-center gap-1">
                <i class="fa-solid fa-bookmark"></i>
                <span>متابعة القراءة</span>
              </button>
            </div>
          </div>

          <!-- Khatma Progress Bar -->
          <div class="w-full h-1.5 sm:h-2 bg-emerald-950/70 rounded-full overflow-hidden mt-2 sm:mt-2.5 border border-emerald-500/15">
            <div id="khatma-progress-fill" class="h-full bg-gradient-to-l from-amber-400 to-emerald-500 transition-all duration-500" style="width: 1%"></div>
          </div>
        </div>

        <!-- Spiritual Sub-Navigation Tabs (Clean Mobile-First Chips) -->
        <div class="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 flex-shrink-0 overflow-x-auto no-scrollbar">
          <button id="sp-tab-sebha" class="sp-subtab px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all bg-amber-500/20 text-amber-400 border border-amber-500/30 flex-shrink-0">
            <i class="fa-solid fa-circle-dot"></i>
            <span>السبحة الإلكترونية</span>
          </button>
          <button id="sp-tab-azkar" class="sp-subtab px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all text-[var(--text-secondary)] hover:text-amber-400 bg-emerald-950/40 border border-emerald-500/15 flex-shrink-0">
            <i class="fa-solid fa-hands-holding-circle"></i>
            <span>الأذكار اليومية</span>
          </button>
          <button id="sp-tab-prayer" class="sp-subtab px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all text-[var(--text-secondary)] hover:text-amber-400 bg-emerald-950/40 border border-emerald-500/15 flex-shrink-0">
            <i class="fa-solid fa-mosque text-amber-400"></i>
            <span>مواقيت الصلاة والقبلة</span>
          </button>
          <button id="sp-tab-compass" class="sp-subtab px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all text-[var(--text-secondary)] hover:text-amber-400 bg-emerald-950/40 border border-emerald-500/15 flex-shrink-0">
            <i class="fa-solid fa-compass"></i>
            <span>بوصلة القلوب</span>
          </button>
          <button id="sp-tab-memorial" class="sp-subtab px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all text-rose-300 hover:text-rose-200 bg-rose-500/10 border border-rose-500/25 flex-shrink-0">
            <i class="fa-solid fa-heart text-rose-400"></i>
            <span>صدقة جارية للمتوفى</span>
          </button>
        </div>

        <!-- Spiritual Scrollable Body -->
        <div class="flex-1 overflow-y-auto playlist-scroll pr-1 pb-28 lg:pb-3" id="spiritual-scroll-body">
          
          <!-- SUB-PANEL 1: DIGITAL SEBHA (TASBEEH) - MAXIMIZED FOR FULL MOBILE FOCUS -->
          <div id="sp-panel-sebha" class="flex flex-col items-center justify-center py-2 sm:py-4 text-center">
            <div class="w-full max-w-md glass-panel rounded-2xl sm:rounded-3xl p-3 sm:p-6 flex flex-col items-center">
              
              <!-- Quick Dhikr Horizontal Chips Bar -->
              <span class="text-[10px] sm:text-[11px] text-amber-400 font-semibold mb-1">اختر الذكر السريع أو خصص التسبيح:</span>
              <div class="w-full flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 mb-2">
                <button class="sebha-quick-pill px-2.5 py-1 rounded-xl text-[11px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 flex-shrink-0 transition-all flex items-center gap-1.5" data-phrase-idx="0"><i class="fa-solid fa-circle-dot text-[10px]"></i><span>سبحان الله</span></button>
                <button class="sebha-quick-pill px-2.5 py-1 rounded-xl text-[11px] font-bold text-[var(--text-secondary)] bg-emerald-950/60 border border-emerald-500/15 flex-shrink-0 transition-all flex items-center gap-1.5" data-phrase-idx="1"><i class="fa-solid fa-hands-praying text-[10px]"></i><span>الحمد لله</span></button>
                <button class="sebha-quick-pill px-2.5 py-1 rounded-xl text-[11px] font-bold text-[var(--text-secondary)] bg-emerald-950/60 border border-emerald-500/15 flex-shrink-0 transition-all flex items-center gap-1.5" data-phrase-idx="2"><i class="fa-solid fa-star-and-crescent text-[10px]"></i><span>لا إله إلا الله</span></button>
                <button class="sebha-quick-pill px-2.5 py-1 rounded-xl text-[11px] font-bold text-[var(--text-secondary)] bg-emerald-950/60 border border-emerald-500/15 flex-shrink-0 transition-all flex items-center gap-1.5" data-phrase-idx="3"><i class="fa-solid fa-kaaba text-[10px]"></i><span>الله أكبر</span></button>
                <button class="sebha-quick-pill px-2.5 py-1 rounded-xl text-[11px] font-bold text-[var(--text-secondary)] bg-emerald-950/60 border border-emerald-500/15 flex-shrink-0 transition-all flex items-center gap-1.5" data-phrase-idx="4"><i class="fa-solid fa-dove text-[10px]"></i><span>أستغفر الله</span></button>
                <button class="sebha-quick-pill px-2.5 py-1 rounded-xl text-[11px] font-bold text-[var(--text-secondary)] bg-emerald-950/60 border border-emerald-500/15 flex-shrink-0 transition-all flex items-center gap-1.5" data-phrase-idx="5"><i class="fa-solid fa-bolt text-[10px]"></i><span>لا حول ولا قوة إلا بالله</span></button>
                <button class="sebha-quick-pill px-2.5 py-1 rounded-xl text-[11px] font-bold text-[var(--text-secondary)] bg-emerald-950/60 border border-emerald-500/15 flex-shrink-0 transition-all flex items-center gap-1.5" data-phrase-idx="6"><i class="fa-solid fa-heart text-[10px]"></i><span>الصلاة على النبي</span></button>
              </div>

              <select id="sebha-phrase-select" class="w-full py-1.5 sm:py-2 px-3 rounded-xl custom-input text-xs sm:text-sm font-bold text-center mb-3 sm:mb-4 cursor-pointer">
                <!-- Populated via JS from TASBEEH_PHRASES -->
              </select>

              <!-- Tactile Circular Counter Button (Large & App-like) -->
              <button id="sebha-tap-btn" class="sebha-ring-btn w-36 h-36 xs:w-40 xs:h-40 sm:w-52 sm:h-52 rounded-full flex flex-col items-center justify-center cursor-pointer select-none my-1.5 sm:my-2 active:scale-95 transition-transform" title="انقر للتسبيح">
                <span class="text-4xl xs:text-5xl sm:text-6xl font-bold text-amber-400 font-quran tracking-wider" id="sebha-current-count">0</span>
                <span class="text-[10px] xs:text-[11px] sm:text-xs text-[var(--text-secondary)] mt-1 sm:mt-1.5">انقر للتسبيح</span>
              </button>

              <div class="flex items-center justify-between w-full mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-emerald-500/15 text-xs">
                <div class="text-[var(--text-secondary)]">
                  المجموع الكلي: <strong class="text-amber-400 font-bold" id="sebha-total-count">0</strong>
                </div>
                <button id="sebha-reset-btn" class="px-2.5 sm:px-3 py-1 rounded-xl bg-emerald-950/60 hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-400 border border-emerald-500/20 transition-all text-[11px]">
                  <i class="fa-solid fa-rotate-left ml-1"></i> تصفير الدورة
                </button>
              </div>
            </div>
          </div>

          <!-- SUB-PANEL 2: INTERACTIVE AZKAR -->
          <div id="sp-panel-azkar" class="hidden space-y-3">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                <button data-azkar-cat="morning" class="azkar-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1.5 flex-shrink-0"><i class="fa-solid fa-sun text-[11px]"></i><span>أذكار الصباح</span></button>
                <button data-azkar-cat="evening" class="azkar-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold text-[var(--text-secondary)] bg-emerald-950/50 border border-emerald-500/15 flex items-center gap-1.5 flex-shrink-0"><i class="fa-solid fa-moon text-[11px]"></i><span>أذكار المساء</span></button>
                <button data-azkar-cat="sleep" class="azkar-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold text-[var(--text-secondary)] bg-emerald-950/50 border border-emerald-500/15 flex items-center gap-1.5 flex-shrink-0"><i class="fa-solid fa-bed text-[11px]"></i><span>أذكار النوم</span></button>
                <button data-azkar-cat="prayer" class="azkar-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold text-[var(--text-secondary)] bg-emerald-950/50 border border-emerald-500/15 flex items-center gap-1.5 flex-shrink-0"><i class="fa-solid fa-mosque text-[11px]"></i><span>بعد الصلاة</span></button>
              </div>
              <button id="btn-reset-azkar" class="text-[11px] text-amber-400 hover:underline flex items-center gap-1">
                <i class="fa-solid fa-rotate-right"></i> تصفير العدادات
              </button>
            </div>
            <div id="azkar-cards-container" class="space-y-2.5">
              <!-- Populated via JS -->
            </div>
          </div>

          <!-- SUB-PANEL 3: HEART / MOOD COMPASS -->
          <div id="sp-panel-compass" class="hidden space-y-3">
            <p class="text-xs text-[var(--text-secondary)]">اختر ما يشعر به قلبك الآن لتظهر لك الآيات القرآنية المناسبة مع تدبرها وإمكانية الاستماع إليها مباشرة:</p>
            <!-- Mood Pills Grid -->
            <div id="mood-buttons-grid" class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              <!-- Populated via JS from MOOD_COMPASS -->
            </div>
            <!-- Selected Mood Verses Container -->
            <div id="mood-verses-container" class="space-y-2.5 mt-3">
              <!-- Populated via JS -->
            </div>
          </div>

          <!-- SUB-PANEL 4: PRAYER TIMES, NEXT PRAYER COUNTDOWN & QIBLA COMPASS (V3.4 Upgraded) -->
          <div id="sp-panel-prayer" class="hidden space-y-3">
            <!-- Top Row: City Selector & GPS Button & Hijri Date -->
            <div class="surah-frame rounded-2xl p-3 sm:p-4 flex flex-wrap items-center justify-between gap-2.5">
              <div class="flex items-center gap-2.5 min-w-0">
                <div class="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/35 flex items-center justify-center text-amber-400 text-lg shadow-inner flex-shrink-0">
                  <i class="fa-solid fa-mosque"></i>
                </div>
                <div class="min-w-0">
                  <h4 class="font-bold text-xs sm:text-sm text-amber-300 truncate" id="prayer-city-title">مواقيت الصلاة • القاهرة</h4>
                  <p class="text-[10px] sm:text-[11px] text-[var(--text-secondary)] truncate" id="prayer-hijri-date">التقويم الهجري والميلادي • تحديث تلقائي</p>
                </div>
              </div>

              <div class="flex items-center gap-1.5 flex-wrap">
                <div class="relative">
                  <select id="prayer-city-select" class="bg-emerald-950/85 border border-amber-500/30 text-amber-300 font-bold text-xs rounded-xl py-1.5 pr-3 pl-7 outline-none appearance-none cursor-pointer">
                    <!-- Populated via JS from ISLAMIC_CITIES -->
                  </select>
                  <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-amber-400 text-[10px] pointer-events-none">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </div>

                <button id="btn-prayer-gps" type="button" class="py-1.5 px-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95" title="تحديد مواقيت الصلاة واتجاه القبلة حسب موقعك الجغرافي">
                  <i class="fa-solid fa-location-crosshairs"></i>
                  <span>موقعي</span>
                </button>
              </div>
            </div>

            <!-- Next Prayer Live Countdown Banner + Upgraded Qibla Compass Card -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-2.5">
              <!-- Next Prayer Countdown (7 Cols) -->
              <div class="md:col-span-7 p-4 rounded-2xl bg-gradient-to-l from-amber-500/20 via-emerald-950/85 to-emerald-950/95 border border-amber-500/40 flex flex-col justify-between gap-3 shadow-lg">
                <div class="flex items-center justify-between gap-3">
                  <div>
                    <span class="inline-flex items-center gap-1 text-[10px] bg-amber-500 text-slate-950 font-black px-2.5 py-0.5 rounded-full">
                      <i class="fa-solid fa-clock"></i>
                      <span>الصلاة القادمة</span>
                    </span>
                    <h3 class="text-lg sm:text-2xl font-bold font-quran text-amber-300 mt-1.5" id="next-prayer-name">صلاة الفجر</h3>
                    <p class="text-[11px] text-slate-300 mt-0.5" id="next-prayer-time-label">موعد الأذان: 04:58 ص</p>
                  </div>
                  <div class="text-left">
                    <span class="text-[10px] text-[var(--text-secondary)] block mb-0.5">الوقت المتبقي للأذان</span>
                    <div class="text-xl sm:text-3xl font-mono font-black text-amber-400 tracking-wider tabular-nums" id="next-prayer-countdown">00:00:00</div>
                  </div>
                </div>

                <!-- Elapsed Window Progress -->
                <div class="space-y-1 pt-2 border-t border-amber-500/15">
                  <div class="flex items-center justify-between text-[10px] text-[var(--text-secondary)]">
                    <span>تقدم الفترة بين الصلاتين</span>
                    <span id="next-prayer-progress-label" class="font-bold text-amber-300 font-mono">0%</span>
                  </div>
                  <div class="w-full h-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/20 overflow-hidden">
                    <div id="next-prayer-progress" class="h-full rounded-full bg-gradient-to-l from-amber-300 to-amber-500 transition-all duration-700" style="width: 0%;"></div>
                  </div>
                </div>
              </div>

              <!-- Upgraded Qibla Direction & Live Compass Card (5 Cols) -->
              <div class="md:col-span-5 p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950/90 to-emerald-900/50 border border-amber-500/25 flex items-center justify-between gap-3 shadow-lg">
                <div class="min-w-0 flex-1 space-y-1.5">
                  <div class="flex items-center gap-1.5 text-amber-300 font-bold text-xs">
                    <i class="fa-solid fa-kaaba text-amber-400"></i>
                    <span>اتجاه القبلة المشرفة</span>
                  </div>
                  <div class="flex items-baseline gap-2 flex-wrap">
                    <span class="text-xl sm:text-2xl font-black text-emerald-300 tabular-nums" id="qibla-degree-label">136°</span>
                    <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold" id="qibla-distance-label">نحو 1,286 كم لمكة</span>
                  </div>
                  <p class="text-[10px] text-[var(--text-secondary)] leading-relaxed" id="qibla-direction-desc">من الشمال الحقيقي باتجاه عقارب الساعة</p>
                  <div class="flex items-center gap-2 pt-0.5 flex-wrap">
                    <button id="btn-live-qibla" type="button" class="py-1 px-2.5 rounded-lg bg-emerald-900/80 hover:bg-amber-500/20 border border-amber-500/35 text-amber-300 text-[10px] font-bold flex items-center gap-1 transition-all active:scale-95">
                      <i class="fa-solid fa-compass"></i>
                      <span>البوصلة الحية</span>
                    </button>
                    <span id="qibla-live-status" class="text-[9px] text-emerald-300/80 hidden">مفعلة</span>
                  </div>
                </div>

                <!-- Precision Multi-Ring SVG Compass Dial -->
                <div class="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center select-none">
                  <!-- Outer Cardinal Dial (rotates inversely during live compass mode) -->
                  <svg id="qibla-compass-dial" viewBox="0 0 120 120" class="w-full h-full transition-transform duration-300" aria-hidden="true">
                    <defs>
                      <radialGradient id="dialBg" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#064e3b" stop-opacity="0.85"/>
                        <stop offset="100%" stop-color="#021c16" stop-opacity="0.98"/>
                      </radialGradient>
                    </defs>
                    <circle cx="60" cy="60" r="56" fill="url(#dialBg)" stroke="#f59e0b" stroke-opacity="0.45" stroke-width="1.5"/>
                    <circle cx="60" cy="60" r="45" fill="none" stroke="#10b981" stroke-opacity="0.28" stroke-width="1" stroke-dasharray="3 3"/>
                    <circle cx="60" cy="60" r="32" fill="none" stroke="#f59e0b" stroke-opacity="0.18" stroke-width="1"/>
                    <!-- Cardinal Ticks -->
                    <line x1="60" y1="4" x2="60" y2="11" stroke="#fbbf24" stroke-width="2"/>
                    <line x1="60" y1="109" x2="60" y2="116" stroke="#94a3b8" stroke-width="1.4"/>
                    <line x1="4" y1="60" x2="11" y2="60" stroke="#94a3b8" stroke-width="1.4"/>
                    <line x1="109" y1="60" x2="116" y2="60" stroke="#94a3b8" stroke-width="1.4"/>
                    <!-- Cardinal Labels -->
                    <text x="60" y="21" text-anchor="middle" fill="#fbbf24" font-size="9" font-weight="800" font-family="sans-serif">N</text>
                    <text x="103" y="63" text-anchor="middle" fill="#94a3b8" font-size="8" font-weight="700" font-family="sans-serif">E</text>
                    <text x="60" y="105" text-anchor="middle" fill="#94a3b8" font-size="8" font-weight="700" font-family="sans-serif">S</text>
                    <text x="17" y="63" text-anchor="middle" fill="#94a3b8" font-size="8" font-weight="700" font-family="sans-serif">W</text>
                  </svg>

                  <!-- Qibla Needle (Points True Bearing to Kaaba) -->
                  <div id="qibla-compass-needle" class="absolute inset-0 flex items-center justify-center transition-transform duration-700 pointer-events-none" style="transform: rotate(136deg);">
                    <svg viewBox="0 0 120 120" class="w-full h-full">
                      <!-- Gold Arrow Tip pointing UP = 0deg -->
                      <polygon points="60,18 66,58 60,52 54,58" fill="#fbbf24" stroke="#fef08a" stroke-width="0.8"/>
                      <!-- Emerald Tail -->
                      <polygon points="60,96 64,62 60,67 56,62" fill="#10b981" fill-opacity="0.65"/>
                      <!-- Center Pivot + Tiny Kaaba Square at tip -->
                      <rect x="57" y="11" width="6" height="6" rx="1" fill="#0f172a" stroke="#fbbf24" stroke-width="1.2"/>
                      <circle cx="60" cy="60" r="4.5" fill="#fef08a" stroke="#b45309" stroke-width="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- 6 Prayer Times Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2" id="prayer-times-grid">
              <!-- Populated via JS -->
            </div>
          </div>

        </div>`,
  memorial: `<!-- Mobile Slim Header Bar for Memorial View (lg:hidden) -->
        <div id="m-memorial-topbar" class="lg:hidden surah-frame rounded-xl p-1.5 xs:p-2 mb-1.5 flex items-center justify-between gap-2 flex-shrink-0">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-7 h-7 xs:w-8 xs:h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-sm flex-shrink-0">
              <i class="fa-solid fa-dove"></i>
            </div>
            <div class="min-w-0">
              <span class="text-[9px] text-emerald-400 font-semibold block">صدقة جارية</span>
              <h3 class="text-xs xs:text-sm font-bold font-quran text-[var(--text-accent)] truncate" id="m-memorial-name">
                صدقة جارية لمن تُحبّون
              </h3>
            </div>
          </div>

          <!-- Single Dedicated Options Button for Memorial on Mobile! -->
          <button id="btn-open-memorial-options" class="px-2.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-1.5 shadow active:scale-95 flex-shrink-0" title="خيارات ومشاركة">
            <i class="fa-solid fa-sliders text-xs"></i>
            <span>خيارات ومشاركة</span>
          </button>
        </div>

        <!-- Memorial Top Header & Hero Card (Desktop/Tablet only: hidden lg:flex) -->
        <div class="hidden lg:flex surah-frame rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-2.5 flex-shrink-0 relative overflow-hidden bg-gradient-to-r from-emerald-950/90 via-emerald-900/40 to-emerald-950/90 border border-amber-500/35 shadow-xl">
          <div class="flex flex-wrap items-center justify-between gap-2.5">
            <div class="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-lg sm:text-xl shadow-inner flex-shrink-0">
                <i class="fa-solid fa-dove"></i>
              </div>
              <div class="min-w-0 cursor-pointer" id="memorial-header-title-box">
                <div class="flex items-center gap-2 flex-wrap">
                  <span id="memorial-gender-badge" class="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    إهداء ثواب وتسبيح للمتوفى
                  </span>
                  <span class="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check text-[9px]"></i> صدقة جارية
                  </span>
                </div>
                <h2 id="memorial-deceased-name" class="text-base sm:text-2xl font-bold font-quran text-[var(--text-accent)] mt-0.5 truncate hover:text-amber-300 transition-colors" title="انقر لتخصيص الاسم">
                  صدقة جارية لمن تُحبّون
                </h2>
                <p id="memorial-dedicated-note" class="text-[11px] sm:text-xs text-[var(--text-secondary)] italic max-w-md truncate sm:max-w-none">
                  انقر لتخصيص هذه الصفحة باسم فقيدكم ودعائه ومشاركتها مع الأحباب
                </p>
              </div>
            </div>

            <!-- Switch/Create Button -->
            <div class="flex items-center gap-2 flex-shrink-0">
              <button id="btn-open-memorial-creator" class="px-3.5 sm:px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-xs sm:text-sm transition-all active:scale-95 shadow flex items-center gap-2" title="تخصيص الصفحة باسم فقيدكم">
                <i class="fa-solid fa-pen-to-square text-xs"></i>
                <span>تخصيص باسم فقيدك</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Scrollable Memorial Body -->
        <div class="flex-1 overflow-y-auto playlist-scroll pr-1 pb-28 lg:pb-3 space-y-3 sm:space-y-4" id="memorial-scroll-area">
          
          <!-- Share & Export Action Dock (Desktop/Tablet only: hidden lg:flex) -->
          <div class="hidden lg:flex items-center justify-between flex-wrap gap-2 p-2.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/20 text-xs">
            <span class="text-[11px] text-[var(--text-secondary)] flex items-center gap-1.5">
              <i class="fa-solid fa-share-nodes text-amber-400"></i>
              شارك الرابط واكسب أجر كل من يسبح ويدعو:
            </span>
            <div class="flex items-center gap-1.5 flex-wrap">
              <button id="btn-copy-memorial-link" class="px-2.5 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/25 text-amber-300 font-semibold text-[11px] flex items-center gap-1.5 transition-all active:scale-95">
                <i class="fa-solid fa-link text-[10px]"></i>
                <span>نسخ الرابط</span>
              </button>
              <button id="btn-whatsapp-memorial" class="px-2.5 py-1.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 font-semibold text-[11px] flex items-center gap-1.5 transition-all active:scale-95">
                <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 text-emerald-400 fill-current" aria-hidden="true"><path d="M12.03 2a10 10 0 0 0-8.66 15l-1.31 4.81 4.92-1.29A10 10 0 1 0 12.03 2zm5.79 14.12c-.25.7-1.44 1.34-2.01 1.42-.52.08-1.18.11-1.91-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5.01-4.38-5.16-4.58-.15-.2-1.23-1.64-1.23-3.13s.78-2.22 1.06-2.52c.28-.3.6-.38.8-.38h.58c.19 0 .44-.07.69.52.25.61.85 2.09.92 2.24.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.32.4-.45.54-.15.15-.31.31-.13.61.18.3.78 1.29 1.67 2.09 1.15 1.02 2.12 1.34 2.42 1.49.3.15.48.13.66-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.67-.15.28.1 1.74.82 2.04.97.3.15.5.22.58.35.07.12.07.72-.18 1.42z"/></svg>
                <span>واتساب</span>
              </button>
              <button id="btn-download-memorial-card" class="px-2.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-semibold text-[11px] flex items-center gap-1.5 transition-all active:scale-95" title="توليد بطاقة مصورة عالية الدقة لمشاركتها كصورة">
                <i class="fa-solid fa-image text-[10px]"></i>
                <span>تحميل بطاقة مصورة</span>
              </button>
            </div>
          </div>

          <!-- Section 1: Tactile Gifting Tasbeeh (مسبحة إهداء الثواب) -->
          <div class="glass-panel rounded-2xl sm:rounded-3xl p-3 sm:p-5 flex flex-col items-center text-center border border-amber-500/25">
            <div class="flex items-center justify-between w-full mb-2">
              <span class="text-xs sm:text-sm font-bold text-amber-400 flex items-center gap-1.5 font-quran">
                <i class="fa-solid fa-circle-dot"></i>
                مسبحة إهداء الثواب والتسبيحات
              </span>
              <div class="flex items-center gap-1.5">
                <button id="memorial-sound-btn" class="px-2 py-1 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/20 text-[10px] text-amber-400 transition-all" title="كتم / تفعيل صوت النقر">
                  <i class="fa-solid fa-volume-high" id="memorial-sound-icon"></i>
                  <span class="hidden xs:inline mr-1">صوت</span>
                </button>
                <button id="memorial-reset-round-btn" class="px-2 py-1 rounded-xl bg-emerald-950/60 hover:bg-red-500/20 border border-emerald-500/20 text-[10px] text-[var(--text-secondary)] hover:text-red-400 transition-all" title="تصفير الدورة الحالية">
                  <i class="fa-solid fa-rotate-left"></i>
                  <span class="hidden xs:inline mr-1">تصفير</span>
                </button>
              </div>
            </div>

            <!-- Quick Dhikr Horizontal Chips Bar -->
            <div class="w-full flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 mb-3" id="memorial-dhikr-chips">
              <!-- Populated via JS -->
            </div>

            <!-- Active Dhikr Label -->
            <p id="memorial-active-dhikr-text" class="text-xs sm:text-sm text-[var(--text-primary)] font-bold min-h-[20px] mb-2 font-quran">
              سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ
            </p>

            <!-- Tactile Gifting Circular Counter Button -->
            <button id="memorial-tap-btn" class="sebha-ring-btn w-36 h-36 xs:w-40 xs:h-40 sm:w-48 sm:h-48 rounded-full flex flex-col items-center justify-center cursor-pointer select-none my-1 active:scale-95 transition-transform" title="انقر للتسبيح وإهداء الثواب">
              <span class="text-4xl xs:text-5xl font-bold text-amber-400 font-quran tracking-wider" id="memorial-round-count">0</span>
              <span class="text-[10px] xs:text-[11px] text-[var(--text-secondary)] mt-1 font-semibold flex items-center gap-1">
                <span>انقر لإهداء الثواب</span>
                <i class="fa-solid fa-heart text-rose-400 text-[9px]"></i>
              </span>
            </button>

            <p class="text-[10px] sm:text-[11px] text-[var(--text-secondary)] mt-1.5 text-center">
              انقر على المسبحة للتسبيح والاستغفار وإهداء ثواب الذكر للمتوفى
            </p>
          </div>

          <!-- Section 2: Authentic Prophetic Supplications (أدعية مأثورة) -->
          <div class="space-y-2.5">
            <div class="flex items-center justify-between">
              <h3 class="text-xs sm:text-sm font-bold text-amber-400 flex items-center gap-1.5 font-quran">
                <i class="fa-solid fa-hands-holding-circle"></i>
                أدعية مأثورة للمتوفى من السنة النبوية الصحيحة
              </h3>
              <span class="text-[10px] text-[var(--text-secondary)]">مضبوطة بالصيغة الصحيحة</span>
            </div>

            <div id="memorial-duas-grid" class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <!-- Populated dynamically via JS -->
            </div>
          </div>

          <!-- Section 3: Dedicated Quran Recitations (تلاوات مهدية لروح الفقيد) -->
          <div class="space-y-2.5">
            <div class="flex items-center justify-between">
              <h3 class="text-xs sm:text-sm font-bold text-amber-400 flex items-center gap-1.5 font-quran">
                <i class="fa-solid fa-book-quran"></i>
                تلاوة سور من القرآن وإهداء ثوابها
              </h3>
              <span class="text-[10px] text-[var(--text-secondary)]">استمع وتدبر بنية إهداء الأجر</span>
            </div>

            <div id="memorial-surahs-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              <!-- Populated dynamically via JS -->
            </div>
          </div>

        </div>`,
  hadr: `<!-- View Header -->
        <div class="flex items-center justify-between pb-2.5 mb-2 sm:mb-3 border-b border-emerald-500/15 flex-shrink-0">
          <div class="flex items-center gap-2 sm:gap-2.5">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/35 flex items-center justify-center text-cyan-300 shadow flex-shrink-0">
              <i class="fa-solid fa-bolt-lightning text-sm sm:text-base text-amber-300 animate-pulse"></i>
            </div>
            <div>
              <div class="flex items-center gap-1.5 sm:gap-2">
                <h2 class="text-xs sm:text-sm font-bold text-cyan-300 font-quran">مصحف الحدر لمراجعة الحُفّاظ</h2>
                <span class="text-[9px] bg-cyan-500/20 text-cyan-300 font-bold px-1.5 py-0.5 rounded border border-cyan-500/30">تثبيت سريع</span>
              </div>
              <p class="text-[10px] text-[var(--text-secondary)] hidden sm:block">تلاوة سريعة مع تمام أحكام التجويد لتمكين مراجعة وتسميع الأوراد والأجزاء بتركيز</p>
            </div>
          </div>

          <div class="flex items-center gap-1.5 sm:gap-2">
            <!-- Reciter Select (Dr. Ahmed Deiban & Yasser Salama) -->
            <div class="relative">
              <select id="hadr-reciter-select" class="bg-emerald-950/80 text-amber-300 text-[10px] sm:text-xs font-bold py-1.5 pr-2.5 pl-7 rounded-xl border border-emerald-500/30 outline-none appearance-none cursor-pointer hover:border-amber-500/40 transition-colors shadow">
                <!-- Populated via JS -->
              </select>
              <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-amber-400 text-[9px] pointer-events-none">
                <i class="fa-solid fa-chevron-down"></i>
              </span>
            </div>

            <!-- Back to Main Player -->
            <button id="hadr-btn-back" type="button" class="py-1.5 px-2.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 text-slate-200 text-xs font-semibold border border-emerald-500/20 flex items-center gap-1.5 transition-all active:scale-95">
              <i class="fa-solid fa-arrow-left text-[11px]"></i>
              <span class="hidden xs:inline">المشغل</span>
            </button>
          </div>
        </div>

        <!-- 3 Partition Mode Tabs: Surahs | Ajza | Tehzeeb Al-Sahabah -->
        <div class="flex items-center gap-1.5 p-1 bg-emerald-950/70 rounded-2xl border border-emerald-500/20 mb-2.5 flex-shrink-0 text-xs font-bold">
          <button id="hadr-tab-surahs" type="button" class="flex-1 py-1.5 px-2 rounded-xl text-amber-300 bg-amber-500/20 border border-amber-500/30 transition-all text-center flex items-center justify-center gap-1.5 shadow-sm">
            <i class="fa-solid fa-book-quran text-amber-400"></i>
            <span>السور (114)</span>
          </button>
          <button id="hadr-tab-ajza" type="button" class="flex-1 py-1.5 px-2 rounded-xl text-[var(--text-secondary)] hover:text-amber-300 transition-all text-center flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-layer-group text-emerald-400"></i>
            <span>الأجزاء (30)</span>
          </button>
          <button id="hadr-tab-tehzeeb" type="button" class="flex-1 py-1.5 px-2 rounded-xl text-[var(--text-secondary)] hover:text-amber-300 transition-all text-center flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-calendar-check text-cyan-400"></i>
            <span>تحزيب الصحابة (7 أوراد)</span>
          </button>
        </div>

        <!-- Surahs Search & Filter Bar (Shown in Surahs Mode) -->
        <div id="hadr-search-bar" class="relative mb-2.5 flex-shrink-0">
          <i class="fa-solid fa-magnifying-glass absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
          <input id="hadr-search-input" type="text" placeholder="ابحث باسم السورة أو رقمها في مصحف الحدر..." class="w-full bg-emerald-950/60 border border-emerald-500/20 rounded-xl pr-9 pl-4 py-1.5 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors">
        </div>

        <!-- Main Scrollable Area for Hadr Tabs -->
        <div class="flex-1 min-h-0 overflow-y-auto playlist-scroll pr-1 pb-1">
          <!-- Panel 1: Surahs Grid (114 Surahs) -->
          <div id="hadr-panel-surahs" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
            <!-- Populated via JS -->
          </div>

          <!-- Panel 2: Ajza Grid (30 Ajza) -->
          <div id="hadr-panel-ajza" class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 hidden">
            <!-- Populated via JS -->
          </div>

          <!-- Panel 3: Tehzeeb Al-Sahabah (7 Aurad) -->
          <div id="hadr-panel-tehzeeb" class="space-y-2.5 hidden">
            <!-- Populated via JS -->
          </div>
        </div>

        <!-- Dedicated Bottom Hadr Player Dock -->
        <div id="hadr-player-dock" class="mt-2.5 p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-emerald-950/95 via-emerald-900/90 to-emerald-950/95 border border-amber-500/30 shadow-2xl flex-shrink-0 backdrop-blur-xl space-y-2">
          
          <!-- Dock Top Row: Currently Playing & Sync with Mushaf Button -->
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2 min-w-0">
              <span id="hadr-now-surah-num" class="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center justify-center border border-amber-500/30 flex-shrink-0">1</span>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5">
                  <span id="hadr-now-surah-name" class="font-bold text-xs sm:text-sm text-amber-300 truncate">سورة الفاتحة</span>
                  <span id="hadr-now-reciter-name" class="text-[10px] text-[var(--text-secondary)] truncate">• الشيخ د. أحمد ديبان</span>
                </div>
                <div id="hadr-now-meta" class="text-[9px] text-slate-400 truncate">تلاوة حدر سريعة للمراجعة</div>
              </div>
            </div>

            <!-- Read Along in Mushaf Button -->
            <button id="hadr-btn-sync-mushaf" type="button" class="py-1 px-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-bold flex items-center gap-1.5 transition-all active:scale-95 flex-shrink-0" title="قراءة وتتبع الآيات في المصحف الشريف بالتزامن">
              <i class="fa-solid fa-book-open-reader text-xs"></i>
              <span class="hidden xs:inline">اقرأ في المصحف</span>
            </button>
          </div>

          <!-- Dock Middle Row: Seeker & Time -->
          <div class="flex items-center gap-2 text-[10px] text-slate-400">
            <span id="hadr-current-time" class="font-mono w-9 text-right">00:00</span>
            <input type="range" id="hadr-seek-bar" min="0" max="100" value="0" step="0.1" class="flex-1 h-1.5 bg-emerald-950 rounded-lg accent-amber-400 cursor-pointer">
            <span id="hadr-total-time" class="font-mono w-9 text-left">--:--</span>
          </div>

          <!-- Dock Controls & Memorizer Toolchips (Playback Speed & Repetition) -->
          <div class="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-emerald-500/15">
            <!-- Audio Playback Buttons -->
            <div class="flex items-center gap-1.5 sm:gap-2">
              <button id="hadr-btn-prev" type="button" class="w-7 h-7 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/20 text-slate-300 hover:text-amber-300 flex items-center justify-center text-xs transition-all active:scale-95" title="السورة السابقة">
                <i class="fa-solid fa-forward-step"></i>
              </button>
              <button id="hadr-btn-backward-10" type="button" class="w-7 h-7 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/20 text-slate-300 hover:text-amber-300 flex items-center justify-center text-[10px] transition-all active:scale-95" title="رجوع 10 ثواني">
                <i class="fa-solid fa-rotate-left"></i>
              </button>
              <button id="hadr-btn-play" type="button" class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-sm shadow-lg shadow-amber-500/20 transition-all active:scale-95" title="تشغيل / إيقاف">
                <i class="fa-solid fa-play" id="hadr-play-icon"></i>
              </button>
              <button id="hadr-btn-forward-10" type="button" class="w-7 h-7 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/20 text-slate-300 hover:text-amber-300 flex items-center justify-center text-[10px] transition-all active:scale-95" title="تقديم 10 ثواني">
                <i class="fa-solid fa-rotate-right"></i>
              </button>
              <button id="hadr-btn-next" type="button" class="w-7 h-7 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/20 text-slate-300 hover:text-amber-300 flex items-center justify-center text-xs transition-all active:scale-95" title="السورة التالية">
                <i class="fa-solid fa-backward-step"></i>
              </button>
            </div>

            <!-- Memorizer Speed Chips (1.0x to 1.5x) -->
            <div class="flex items-center gap-1 bg-emerald-950/80 p-0.5 rounded-xl border border-emerald-500/20 text-[10px]">
              <span class="text-[9px] text-slate-400 px-1 font-semibold hidden md:inline">السرعة:</span>
              <button type="button" data-speed="1.0" class="hadr-speed-chip px-1.5 py-0.5 rounded-lg text-amber-300 bg-amber-500/20 font-bold">1.0x</button>
              <button type="button" data-speed="1.15" class="hadr-speed-chip px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-amber-300">1.15x</button>
              <button type="button" data-speed="1.25" class="hadr-speed-chip px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-amber-300">1.25x</button>
              <button type="button" data-speed="1.4" class="hadr-speed-chip px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-amber-300">1.4x</button>
              <button type="button" data-speed="1.5" class="hadr-speed-chip px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-amber-300">1.5x</button>
            </div>

            <!-- Memorizer Repeat Chips (1x, 3x, 5x, Loop) -->
            <div class="flex items-center gap-1 bg-emerald-950/80 p-0.5 rounded-xl border border-emerald-500/20 text-[10px]">
              <span class="text-[9px] text-slate-400 px-1 font-semibold hidden md:inline">تكرار التثبيت:</span>
              <button type="button" data-repeat="1" class="hadr-repeat-chip px-1.5 py-0.5 rounded-lg text-amber-300 bg-amber-500/20 font-bold">1x</button>
              <button type="button" data-repeat="3" class="hadr-repeat-chip px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-amber-300">3x</button>
              <button type="button" data-repeat="5" class="hadr-repeat-chip px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-amber-300">5x</button>
              <button type="button" data-repeat="loop" class="hadr-repeat-chip px-1.5 py-0.5 rounded-lg text-slate-300 hover:text-amber-300" title="تكرار مستمر"><i class="fa-solid fa-infinity text-[10px]"></i></button>
            </div>
          </div>

        </div>`,
  modals: `<!-- ======================================================================
       V2.0 MODAL 1: INTERACTIVE AYAH STUDIO (TAFSIR, AUDIO, BOOKMARK, PNG CARD)
       ====================================================================== -->
  <div id="ayah-studio-modal" class="fixed inset-0 z-50 v2-modal-backdrop hidden flex items-center justify-center p-3 sm:p-5">
    <div class="glass-panel rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden border border-amber-500/35 shadow-2xl animate-slide-in">
      <!-- Modal Header -->
      <div class="px-4 py-3 border-b border-emerald-500/15 flex items-center justify-between bg-emerald-950/50">
        <div class="flex items-center gap-2">
          <span class="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/35 flex items-center justify-center text-amber-400 font-bold text-xs" id="studio-ayah-badge">1</span>
          <div>
            <h4 class="font-bold text-sm sm:text-base text-amber-400 font-quran" id="studio-surah-title">سورة الفاتحة - الآية 1</h4>
            <p class="text-[10px] text-[var(--text-secondary)]">استوديو الآية التفاعلي • التفسير والاستماع والمشاركة</p>
          </div>
        </div>
        <button id="btn-close-ayah-studio" class="w-8 h-8 rounded-xl bg-emerald-950/60 hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-400 flex items-center justify-center transition-colors">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Scrollable Content -->
      <div class="p-4 sm:p-5 overflow-y-auto playlist-scroll space-y-4">
        <!-- Quranic Ayah Text Box -->
        <div class="surah-frame rounded-2xl p-4 text-center">
          <p id="studio-ayah-text" class="font-quran-text text-xl sm:text-2xl leading-[2.3] text-[var(--text-primary)] select-text"></p>
        </div>

        <!-- Action Buttons Row -->
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
          <!-- Play Single Ayah Audio -->
          <button id="studio-btn-play-ayah" class="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold flex items-center justify-center gap-1.5 shadow transition-all active:scale-95">
            <i class="fa-solid fa-play" id="studio-play-icon"></i>
            <span id="studio-play-label">استماع للآية</span>
          </button>

          <!-- Create Social Reel Video -->
          <button id="studio-btn-video" class="py-2.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow" title="إنشاء وتصدير فيديو ريلز/ستوري لهذه الآية">
            <i class="fa-solid fa-clapperboard text-amber-400"></i>
            <span>فيديو ريلز</span>
          </button>

          <!-- Save as Khatma Bookmark -->
          <button id="studio-btn-bookmark" class="py-2.5 px-3 rounded-xl bg-emerald-950/60 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95">
            <i class="fa-solid fa-bookmark"></i>
            <span>وصلت إلى هنا</span>
          </button>

          <!-- Generate & Download High-Res Image Card -->
          <button id="studio-btn-download-card" class="py-2.5 px-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95">
            <i class="fa-solid fa-image"></i>
            <span>بطاقة مصورة</span>
          </button>

          <!-- Copy Ayah + Tafsir -->
          <button id="studio-btn-copy" class="py-2.5 px-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-500/20 border border-emerald-500/20 text-[var(--text-secondary)] hover:text-white font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95 col-span-2 sm:col-span-1">
            <i class="fa-solid fa-copy"></i>
            <span>نسخ الآية</span>
          </button>
        </div>

        <!-- Tafsir Edition Selector Tabs -->
        <div>
          <div class="flex items-center justify-between border-b border-emerald-500/15 pb-2 mb-3 flex-wrap gap-2">
            <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <button data-tafsir="ar.muyassar" class="tafsir-tab-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 flex-shrink-0">التفسير الميسر</button>
              <button data-tafsir="ar.jalalayn" class="tafsir-tab-btn px-3 py-1.5 rounded-xl text-xs font-bold text-[var(--text-secondary)] hover:text-amber-400 bg-emerald-950/40 flex-shrink-0">تفسير الجلالين</button>
              <button data-tafsir="ar.waseet" class="tafsir-tab-btn px-3 py-1.5 rounded-xl text-xs font-bold text-[var(--text-secondary)] hover:text-amber-400 bg-emerald-950/40 flex-shrink-0">التفسير الوسيط</button>
              <button data-tafsir="ar.qurtubi" class="tafsir-tab-btn px-3 py-1.5 rounded-xl text-xs font-bold text-[var(--text-secondary)] hover:text-amber-400 bg-emerald-950/40 flex-shrink-0">تفسير القرطبي</button>
              <button data-tafsir="en.sahih" class="tafsir-tab-btn px-3 py-1.5 rounded-xl text-xs font-bold text-[var(--text-secondary)] hover:text-amber-400 bg-emerald-950/40 flex-shrink-0">English (Sahih)</button>
            </div>
            <!-- Repeat Single Ayah Checkbox for Memorization -->
            <label class="flex items-center gap-1.5 text-[11px] text-[var(--text-secondary)] cursor-pointer select-none">
              <input type="checkbox" id="studio-repeat-ayah" class="accent-amber-500 rounded">
              <span>تكرار الآية للحفظ</span>
            </label>
          </div>

          <!-- Tafsir Content Box -->
          <div id="studio-tafsir-box" class="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/15 text-xs sm:text-sm leading-relaxed text-[var(--text-primary)] min-h-[90px]">
            جاري تحميل التفسير...
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ======================================================================
       V2.0 MODAL 2: SMART SLEEP TIMER & NATURE AMBIENCE MIXER
       ====================================================================== -->
  <div id="sleep-ambience-modal" class="fixed inset-0 z-50 v2-modal-backdrop hidden flex items-center justify-center p-3 sm:p-5">
    <div class="glass-panel rounded-3xl w-full max-w-md flex flex-col overflow-hidden border border-amber-500/35 shadow-2xl animate-slide-in">
      <div class="px-4 py-3 border-b border-emerald-500/15 flex items-center justify-between bg-emerald-950/50">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-moon text-amber-400"></i>
          <h4 class="font-bold text-sm sm:text-base text-amber-400 font-quran">مؤقت النوم وأصوات السكينة</h4>
        </div>
        <button id="btn-close-sleep-modal" class="w-8 h-8 rounded-xl bg-emerald-950/60 hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-400 flex items-center justify-center transition-colors">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-4 sm:p-5 space-y-4 text-xs">
        <!-- Section 1: Smart Sleep Timer -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
              <i class="fa-solid fa-hourglass-half text-amber-400"></i>
              مؤقت النوم الذكي (مع خفض تدريجي للصوت)
            </span>
            <span id="sleep-modal-status" class="text-[11px] text-amber-400 font-semibold">غير مفعل</span>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <button data-sleep-min="15" class="sleep-opt-btn py-2 rounded-xl bg-emerald-950/60 hover:bg-amber-500/20 border border-emerald-500/20 text-[var(--text-primary)] font-semibold transition-all">15 دقيقة</button>
            <button data-sleep-min="30" class="sleep-opt-btn py-2 rounded-xl bg-emerald-950/60 hover:bg-amber-500/20 border border-emerald-500/20 text-[var(--text-primary)] font-semibold transition-all">30 دقيقة</button>
            <button data-sleep-min="45" class="sleep-opt-btn py-2 rounded-xl bg-emerald-950/60 hover:bg-amber-500/20 border border-emerald-500/20 text-[var(--text-primary)] font-semibold transition-all">45 دقيقة</button>
            <button data-sleep-min="60" class="sleep-opt-btn py-2 rounded-xl bg-emerald-950/60 hover:bg-amber-500/20 border border-emerald-500/20 text-[var(--text-primary)] font-semibold transition-all">60 دقيقة</button>
            <button data-sleep-min="end" class="sleep-opt-btn py-2 rounded-xl bg-emerald-950/60 hover:bg-amber-500/20 border border-emerald-500/20 text-[var(--text-primary)] font-semibold transition-all">نهاية السورة</button>
            <button data-sleep-min="0" class="sleep-opt-btn py-2 rounded-xl bg-red-950/40 hover:bg-red-500/20 border border-red-500/25 text-red-300 font-semibold transition-all">إيقاف المؤقت</button>
          </div>
        </div>

        <!-- Section 2: Zero-Bandwidth Web Audio Nature Ambience -->
        <div class="border-t border-emerald-500/15 pt-3.5">
          <div class="flex items-center justify-between mb-2">
            <span class="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
              <i class="fa-solid fa-cloud-rain text-emerald-400"></i>
              مزج أصوات الطبيعة (بدون استهلاك إنترنت 0 KB)
            </span>
          </div>
          <div class="grid grid-cols-4 gap-2 mb-3">
            <button data-ambience="none" class="ambience-opt-btn py-2 px-1 rounded-xl bg-amber-500/20 border border-amber-500/35 text-amber-400 font-bold text-center transition-all">بدون</button>
            <button data-ambience="rain" class="ambience-opt-btn py-2 px-1 rounded-xl bg-emerald-950/60 border border-emerald-500/20 text-[var(--text-secondary)] hover:text-amber-400 font-semibold flex items-center justify-center gap-1 transition-all"><i class="fa-solid fa-cloud-rain text-[11px]"></i><span>مطر هادئ</span></button>
            <button data-ambience="breeze" class="ambience-opt-btn py-2 px-1 rounded-xl bg-emerald-950/60 border border-emerald-500/20 text-[var(--text-secondary)] hover:text-amber-400 font-semibold flex items-center justify-center gap-1 transition-all"><i class="fa-solid fa-wind text-[11px]"></i><span>نسيم الفجر</span></button>
            <button data-ambience="night" class="ambience-opt-btn py-2 px-1 rounded-xl bg-emerald-950/60 border border-emerald-500/20 text-[var(--text-secondary)] hover:text-amber-400 font-semibold flex items-center justify-center gap-1 transition-all"><i class="fa-solid fa-moon text-[11px]"></i><span>سكون الليل</span></button>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-[11px] text-[var(--text-secondary)]">مستوى الخلفية:</span>
            <input type="range" id="ambience-volume-slider" class="range-slider flex-1 cursor-pointer" value="25" min="5" max="70">
            <span id="ambience-volume-val" class="text-[11px] text-amber-400 font-bold min-w-[32px]">25%</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ======================================================================
       V4.0 MODAL: SLOW-MOTION NATURE VIDEO BACKGROUND & SOFT AUDIO MIXER
       ====================================================================== -->
  <div id="bg-scene-modal" class="fixed inset-0 z-50 v2-modal-backdrop hidden flex items-center justify-center p-3 sm:p-5">
    <div style="background-color: var(--dropdown-bg, #03221a);" class="solid-dropdown-panel rounded-3xl w-full max-w-lg flex flex-col overflow-hidden border border-amber-500/35 shadow-2xl animate-slide-in">
      <div class="px-4 py-3 border-b border-emerald-500/15 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center">
            <i class="fa-solid fa-film text-sm"></i>
          </div>
          <div>
            <h4 class="font-bold text-sm sm:text-base text-amber-300 font-quran">خلفية الفيديو الهادئة (Slow Motion)</h4>
            <p class="text-[10px] text-[var(--text-secondary)]">انتقال ناعم أثناء التلاوة • تعمل بسلاسة لساعات طويلة</p>
          </div>
        </div>
        <button id="btn-close-bg-scene-modal" type="button" class="w-8 h-8 rounded-xl bg-emerald-950/60 hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-400 flex items-center justify-center transition-colors">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-4 sm:p-5 space-y-3.5 text-xs overflow-y-auto max-h-[80vh]">
        <!-- Core Scene Choices -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button type="button" data-bg-scene="off" class="bg-scene-card active p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/20 text-right sm:text-center flex sm:flex-col items-center gap-2.5 cursor-pointer">
            <div class="w-9 h-9 rounded-xl bg-slate-500/15 text-slate-300 border border-slate-500/25 flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-eye-slash"></i>
            </div>
            <div class="min-w-0">
              <div class="font-bold text-amber-300 text-xs">بدون فيديو</div>
              <div class="text-[10px] text-[var(--text-secondary)]">الخلفية الملكية الهادئة</div>
            </div>
          </button>

          <button type="button" data-bg-scene="sea" class="bg-scene-card p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/20 text-right sm:text-center flex sm:flex-col items-center gap-2.5 cursor-pointer">
            <div class="w-9 h-9 rounded-xl bg-sky-500/15 text-sky-300 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-water"></i>
            </div>
            <div class="min-w-0">
              <div class="font-bold text-[var(--text-primary)] text-xs">أمواج البحر</div>
              <div class="text-[10px] text-[var(--text-secondary)]">عرض بطيء + صوت موج خفيف</div>
            </div>
          </button>

          <button type="button" data-bg-scene="trees" class="bg-scene-card p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/20 text-right sm:text-center flex sm:flex-col items-center gap-2.5 cursor-pointer">
            <div class="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-tree"></i>
            </div>
            <div class="min-w-0">
              <div class="font-bold text-[var(--text-primary)] text-xs">أشجار ونسيم</div>
              <div class="text-[10px] text-[var(--text-secondary)]">عرض بطيء + حفيف شجر خفيف</div>
            </div>
          </button>
        </div>

        <!-- Additional Serene Scenes -->
        <div class="grid grid-cols-2 gap-2">
          <button type="button" data-bg-scene="rain" class="bg-scene-card py-2 px-3 rounded-xl bg-emerald-950/55 border border-emerald-500/20 flex items-center gap-2 text-right cursor-pointer">
            <i class="fa-solid fa-cloud-rain text-cyan-300 text-sm"></i>
            <span class="font-semibold text-[var(--text-primary)]">غيث المطر الليلي</span>
          </button>
          <button type="button" data-bg-scene="sky" class="bg-scene-card py-2 px-3 rounded-xl bg-emerald-950/55 border border-emerald-500/20 flex items-center gap-2 text-right cursor-pointer">
            <i class="fa-solid fa-cloud-moon text-indigo-300 text-sm"></i>
            <span class="font-semibold text-[var(--text-primary)]">سماء الليل والغيوم</span>
          </button>
        </div>

        <!-- Slow-Motion Playback Rate -->
        <div class="p-3 rounded-2xl bg-emerald-950/55 border border-emerald-500/20 flex items-center justify-between gap-2 flex-wrap">
          <span class="font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
            <span>بطء الحركة (Slow Motion):</span>
          </span>
          <div class="flex items-center gap-1">
            <button type="button" data-bg-speed="0.45" class="bg-speed-chip px-2 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/20 text-[var(--text-secondary)] font-semibold">0.45x هادئ</button>
            <button type="button" data-bg-speed="0.55" class="bg-speed-chip active px-2 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold">0.55x مثالي</button>
            <button type="button" data-bg-speed="0.75" class="bg-speed-chip px-2 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/20 text-[var(--text-secondary)] font-semibold">0.75x</button>
          </div>
        </div>

        <!-- Gentle Background Audio Control -->
        <div class="p-3 rounded-2xl bg-emerald-950/55 border border-emerald-500/20 space-y-2.5">
          <label class="flex items-center justify-between gap-2 cursor-pointer select-none">
            <span class="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
              <i class="fa-solid fa-volume-low text-emerald-400"></i>
              <span>صوت طبيعة خفيف جداً بالخلفية (بدون إنترنت)</span>
            </span>
            <input type="checkbox" id="bg-audio-enable-toggle" class="accent-amber-500 w-4 h-4 rounded cursor-pointer" checked>
          </label>
          <div class="flex items-center gap-2">
            <span class="text-[11px] text-[var(--text-secondary)]">مستوى الهدوء:</span>
            <input type="range" id="bg-audio-vol-slider" class="range-slider flex-1 cursor-pointer" value="10" min="3" max="35" step="1">
            <span id="bg-audio-vol-label" class="text-[11px] text-amber-400 font-bold min-w-[32px] tabular-nums">10%</span>
          </div>
        </div>

        <p class="text-[10px] text-emerald-300/85 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-3 py-2 flex items-center gap-2">
          <i class="fa-solid fa-tablet-screen-button text-amber-400 flex-shrink-0"></i>
          <span>على أجهزة الآيباد والتابلت: تتحول الشاشة تلقائياً لوضع التأمل الصافي بالخلفية فقط مع زر التشغيل/الإيقاف وزر إخفاء الخلفية للعودة.</span>
        </p>
      </div>
    </div>
  </div>

  <!-- ======================================================================
       V4.1 MODAL: SPATIAL SURROUND MOSQUE RESONANCE SETTINGS (للسماعات)
       ====================================================================== -->
  <div id="spatial-audio-modal" class="fixed inset-0 z-50 v2-modal-backdrop hidden flex items-center justify-center p-3 sm:p-5">
    <div style="background-color: var(--dropdown-bg, #03221a);" class="solid-dropdown-panel rounded-3xl w-full max-w-md flex flex-col overflow-hidden border border-amber-500/35 shadow-2xl animate-slide-in">
      <div class="px-4 py-3 border-b border-emerald-500/15 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center">
            <i class="fa-solid fa-headphones-simple text-sm"></i>
          </div>
          <div>
            <h4 class="font-bold text-sm sm:text-base text-amber-300 font-quran">الصوت المحيطي الحرمي (للسماعات)</h4>
            <p class="text-[10px] text-[var(--text-secondary)]">رنين دافئ يحيط بك من كل الاتجاهات بثبات ودون دوران مزعج</p>
          </div>
        </div>
        <button id="btn-close-spatial-modal" type="button" class="w-8 h-8 rounded-xl bg-emerald-950/60 hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-400 flex items-center justify-center transition-colors">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-4 sm:p-5 space-y-3.5 text-xs overflow-y-auto max-h-[80vh]">
        <label class="p-3 rounded-2xl bg-emerald-950/60 border border-amber-500/25 flex items-center justify-between gap-2 cursor-pointer select-none">
          <span class="font-bold text-amber-300 flex items-center gap-2">
            <i class="fa-solid fa-wave-square"></i>
            <span>تفعيل الصوت المحيطي حول الرأس</span>
          </span>
          <input type="checkbox" id="spatial-modal-enable-toggle" class="accent-amber-500 w-4 h-4 rounded cursor-pointer">
        </label>

        <div>
          <span class="block font-bold text-[var(--text-primary)] mb-2">طابع الرنين والمكان (بثبات بدون حركة يمين/يسار):</span>
          <div class="grid grid-cols-3 gap-2">
            <button type="button" data-spatial-profile="gentle" class="spatial-profile-card p-2.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/20 text-center cursor-pointer transition-all">
              <div class="font-bold text-[var(--text-primary)] text-xs mb-0.5">مسجد هادئ</div>
              <div class="text-[10px] text-[var(--text-secondary)]">صدى خفيف ودافئ</div>
            </button>
            <button type="button" data-spatial-profile="haram" class="spatial-profile-card active p-2.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/20 text-center cursor-pointer transition-all">
              <div class="font-bold text-amber-300 text-xs mb-0.5">رحاب الحرم</div>
              <div class="text-[10px] text-[var(--text-secondary)]">محيطي متوازن</div>
            </button>
            <button type="button" data-spatial-profile="grand" class="spatial-profile-card p-2.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/20 text-center cursor-pointer transition-all">
              <div class="font-bold text-[var(--text-primary)] text-xs mb-0.5">قبة واسعة</div>
              <div class="text-[10px] text-[var(--text-secondary)]">رنين عميق ورحب</div>
            </button>
          </div>
        </div>

        <div class="p-3 rounded-2xl bg-emerald-950/55 border border-emerald-500/20 flex items-center gap-2.5">
          <span class="text-[11px] text-[var(--text-secondary)] flex-shrink-0">عمق الصدى:</span>
          <input type="range" id="spatial-wet-slider" class="range-slider flex-1 cursor-pointer" value="56" min="25" max="85" step="1">
          <span id="spatial-wet-label" class="text-[11px] text-amber-400 font-bold min-w-[34px] tabular-nums">56%</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ======================================================================
       V2.0 MODAL 3: 24/7 LIVE QURAN RADIO BROADCAST
       ====================================================================== -->
  <div id="radio-modal" class="fixed inset-0 z-50 v2-modal-backdrop hidden flex items-center justify-center p-3 sm:p-5">
    <div class="glass-panel rounded-3xl w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden border border-amber-500/35 shadow-2xl animate-slide-in">
      <div class="px-4 py-3 border-b border-emerald-500/15 flex items-center justify-between bg-emerald-950/50">
        <div class="flex items-center gap-2">
          <span class="live-pulse-dot"></span>
          <h4 class="font-bold text-sm sm:text-base text-amber-400 font-quran">إذاعات القرآن الكريم المباشرة (24/7)</h4>
        </div>
        <button id="btn-close-radio-modal" class="w-8 h-8 rounded-xl bg-emerald-950/60 hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-400 flex items-center justify-center transition-colors">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-4 overflow-y-auto playlist-scroll space-y-2" id="radio-stations-list">
        <!-- Populated via JS from RADIO_STATIONS -->
      </div>
    </div>
  </div>

  <!-- ======================================================================
       V2.5 MODAL 4: MEMORIAL PAGE CREATOR & DEDICATION (صدقة جارية لمتوفى)
       ====================================================================== -->
  <div id="memorial-creator-modal" class="fixed inset-0 z-50 v2-modal-backdrop hidden flex items-center justify-center p-3 sm:p-5">
    <div class="glass-panel rounded-3xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden border border-rose-500/35 shadow-2xl animate-slide-in">
      
      <!-- Modal Header -->
      <div class="px-4 py-3 border-b border-emerald-500/15 flex items-center justify-between bg-emerald-950/60">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-rose-500/20 border border-rose-500/35 flex items-center justify-center text-rose-400">
            <i class="fa-solid fa-heart text-xs"></i>
          </div>
          <div>
            <h4 class="font-bold text-sm sm:text-base text-amber-400 font-quran">إنشاء صدقة جارية وإهداء ثواب</h4>
            <p class="text-[10px] text-[var(--text-secondary)]">أنشئ رابطاً خاصاً بالدعاء والمسبحة لفقيدك لمشاركته مع العائلة والأصدقاء</p>
          </div>
        </div>
        <button id="btn-close-memorial-modal" class="w-8 h-8 rounded-xl bg-emerald-950/60 hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-400 flex items-center justify-center transition-colors">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-4 sm:p-5 overflow-y-auto playlist-scroll space-y-4 text-xs">
        
        <!-- Deceased Name Input -->
        <div>
          <label for="memorial-input-name" class="block font-bold text-[var(--text-primary)] mb-1.5">
            اسم المتوفى أو المتوفاة <span class="text-rose-400">*</span>:
          </label>
          <input type="text" id="memorial-input-name" placeholder="اكتب اسم المتوفى (مثال: والدي الحبيب، الحاج فلان، أمي الغالية...)"
            class="w-full py-2.5 px-3 rounded-xl custom-input text-sm font-bold text-amber-300 placeholder:text-slate-500" autocomplete="off">
        </div>

        <!-- Gender Selection (Male / Female) -->
        <div>
          <label class="block font-bold text-[var(--text-primary)] mb-1.5">
            الجنس (لضبط صياغة الضمائر في الأدعية تلقائياً) <span class="text-rose-400">*</span>:
          </label>
          <div class="grid grid-cols-2 gap-2">
            <button type="button" id="memorial-gender-btn-m" class="memorial-gender-opt active py-2.5 px-3 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm" data-gender="m">
              <i class="fa-solid fa-person text-base"></i>
              <span>ذكر (المرحوم له)</span>
            </button>
            <button type="button" id="memorial-gender-btn-f" class="memorial-gender-opt py-2.5 px-3 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all bg-emerald-950/60 text-[var(--text-secondary)] border-emerald-500/20" data-gender="f">
              <i class="fa-solid fa-person-dress text-base"></i>
              <span>أنثى (المرحومة لها)</span>
            </button>
          </div>
        </div>

        <!-- Dedication / Note Message -->
        <div>
          <label for="memorial-input-note" class="block font-bold text-[var(--text-primary)] mb-1.5">
            إهداء أو دعاء خاص من الأهل والأحباب (اختياري):
          </label>
          <textarea id="memorial-input-note" rows="2" placeholder="اكتب دعاءً أو كلمة من الأهل والأحباب (مثال: اللهم اجعل قبره روضة من رياض الجنة وأسكنه الفردوس الأعلى...)"
            class="w-full py-2 px-3 rounded-xl custom-input text-xs text-[var(--text-primary)] placeholder:text-slate-500 resize-none"></textarea>
        </div>

        <!-- Live Preview Pill -->
        <div class="p-3 rounded-2xl bg-emerald-950/70 border border-emerald-500/20">
          <span class="text-[10px] text-amber-400 font-bold block mb-1">معاينة مسبقة للصياغة:</span>
          <p id="memorial-preview-text" class="text-xs text-[var(--text-primary)] font-quran leading-relaxed">
            صَدَقَةٌ جَارِيَةٌ لِرُوحِ المَرْحُومِ بِإِذْنِ اللَّهِ: فقيدكم الغالي • «اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَأَكْرِمْ نُزُلَهُ»
          </p>
        </div>

        <!-- Action Button -->
        <button id="btn-submit-create-memorial" class="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
          <i class="fa-solid fa-wand-magic-sparkles"></i>
          <span>إنشاء صفحة الصدقة الجارية وإهداء الثواب</span>
        </button>

        <!-- Saved Memorials Section -->
        <div id="memorial-saved-section" class="border-t border-emerald-500/15 pt-3">
          <span class="text-[11px] text-[var(--text-secondary)] font-bold block mb-2">الصدقات الجارية المحفوظة لديك:</span>
          <div id="memorial-saved-list" class="space-y-1.5 max-h-36 overflow-y-auto playlist-scroll">
            <!-- Populated via JS -->
          </div>
        </div>

      </div>

    </div>
  </div>

  <!-- Memorial Card Mobile Image Modal -->
  <div id="memorial-image-modal" class="fixed inset-0 z-50 v2-modal-backdrop hidden flex items-center justify-center p-3 sm:p-5">
    <div class="glass-panel p-4 sm:p-6 rounded-3xl max-w-lg w-full border border-amber-500/35 relative flex flex-col items-center max-h-[95vh] overflow-y-auto">
      <div class="flex items-center justify-between w-full mb-3">
        <h3 class="font-bold text-sm sm:text-base text-amber-300 flex items-center gap-2">
          <i class="fa-solid fa-image text-amber-400"></i>
          <span>بطاقة الصدقة الجارية المصورة</span>
        </h3>
        <button id="btn-close-image-modal" class="w-8 h-8 rounded-xl bg-emerald-950/60 hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-400 flex items-center justify-center transition-colors">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="w-full relative rounded-2xl overflow-hidden border border-amber-500/25 shadow-2xl mb-3 bg-emerald-950/80">
        <img id="memorial-preview-image" src="" alt="بطاقة الصدقة الجارية" class="w-full h-auto max-h-[55vh] object-contain mx-auto block">
      </div>

      <p class="text-xs text-[var(--text-secondary)] text-center mb-3 flex items-center justify-center gap-1.5 flex-wrap">
        <i class="fa-solid fa-circle-info text-amber-400"></i>
        <span><strong>على الهواتف:</strong> يمكنك أيضاً الضغط مطولاً على الصورة واختيار <strong>"حفظ في الصور" (Save to Photos)</strong> أو مشاركتها.</span>
      </p>

      <div class="flex items-center gap-2 w-full">
        <button id="btn-share-preview-card" class="flex-1 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow">
          <i class="fa-solid fa-share-nodes"></i>
          <span>مشاركة / حفظ الصورة</span>
        </button>
        <button id="btn-download-preview-card" class="py-2.5 px-3 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-amber-300 border border-emerald-500/30 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95">
          <i class="fa-solid fa-download"></i>
          <span>تنزيل</span>
        </button>
      </div>
    </div>
  </div>

  <!-- ======================================================================
       MOBILE MODAL 1: PLAYER TOOLS POPUP (sm:hidden)
       ====================================================================== -->
  <div id="player-tools-modal" class="fixed inset-0 z-50 v2-modal-backdrop hidden flex items-end sm:items-center justify-center p-0 sm:p-4">
    <div class="glass-panel p-4 sm:p-6 rounded-t-3xl sm:rounded-3xl max-w-md w-full border border-amber-500/35 relative flex flex-col max-h-[85vh] overflow-y-auto mobile-bottom-sheet shadow-2xl">
      <div class="flex items-center justify-between w-full mb-3 pb-2 border-b border-emerald-500/15">
        <h3 class="font-bold text-sm sm:text-base text-amber-300 flex items-center gap-2">
          <i class="fa-solid fa-sliders text-amber-400"></i>
          <span>أدوات المشغل والتلاوة</span>
        </h3>
        <button id="btn-close-player-tools" class="w-8 h-8 rounded-xl bg-emerald-950/60 hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-400 flex items-center justify-center transition-colors">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="space-y-2 text-xs">
        <!-- Tool 0: Social Video & Reels Generator -->
        <button id="m-tool-video" class="w-full py-2.5 px-3 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/35 text-[var(--text-primary)] font-bold flex items-center justify-between transition-all active:scale-95 shadow-sm">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-amber-500/25 text-amber-400 flex items-center justify-center">
              <i class="fa-solid fa-clapperboard"></i>
            </div>
            <div class="text-right">
              <div class="font-bold text-amber-300 flex items-center gap-1.5">
                <span>صانع فيديوهات الريلز والستوري</span>
                <span class="text-[9px] bg-amber-500 text-slate-950 px-1 rounded font-bold">جديد</span>
              </div>
              <div class="text-[10px] text-[var(--text-secondary)]">توليد فيديو طولي 9:16 مع صوت الشيخ للإنستغرام وتيك توك</div>
            </div>
          </div>
          <i class="fa-solid fa-chevron-left text-gray-500 text-[10px]"></i>
        </button>

        <!-- Tool 1: Memorization Mode in Mushaf -->
        <button id="m-tool-memorize" class="w-full py-2.5 px-3 rounded-2xl bg-emerald-950/60 hover:bg-amber-500/20 border border-emerald-500/20 text-[var(--text-primary)] font-bold flex items-center justify-between transition-all active:scale-95">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div class="text-right">
              <div class="font-bold text-amber-300">وضع التحفيظ وتتبع الآيات</div>
              <div class="text-[10px] text-[var(--text-secondary)]">تظليل تلقائي للآية المقروءة وتكرارها</div>
            </div>
          </div>
          <i class="fa-solid fa-chevron-left text-gray-500 text-[10px]"></i>
        </button>

        <!-- Tool 2: A-B Memorization Loop -->
        <button id="m-tool-ab-loop" class="w-full py-2.5 px-3 rounded-2xl bg-emerald-950/60 hover:bg-amber-500/20 border border-emerald-500/20 text-[var(--text-primary)] font-bold flex items-center justify-between transition-all active:scale-95">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <i class="fa-solid fa-arrows-spin"></i>
            </div>
            <div class="text-right">
              <div class="font-bold text-emerald-300" id="m-tool-ab-label">تكرار مقطع (أ - ب)</div>
              <div class="text-[10px] text-[var(--text-secondary)]">تحديد بداية ونهاية مقطع للحفظ والمراجعة</div>
            </div>
          </div>
          <i class="fa-solid fa-chevron-left text-gray-500 text-[10px]"></i>
        </button>

        <!-- Tool 3: Sleep Timer & Nature Ambience -->
        <button id="m-tool-sleep" class="w-full py-2.5 px-3 rounded-2xl bg-emerald-950/60 hover:bg-amber-500/20 border border-emerald-500/20 text-[var(--text-primary)] font-bold flex items-center justify-between transition-all active:scale-95">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <i class="fa-solid fa-moon"></i>
            </div>
            <div class="text-right">
              <div class="font-bold text-amber-300">مؤقت النوم وأصوات السكينة</div>
              <div class="text-[10px] text-[var(--text-secondary)]">إيقاف تلقائي + أمطار ورياح خافتة</div>
            </div>
          </div>
          <i class="fa-solid fa-chevron-left text-gray-500 text-[10px]"></i>
        </button>

        <!-- Tool 3b: Slow-Motion Video Background -->
        <button id="m-tool-bg-scene" class="w-full py-2.5 px-3 rounded-2xl bg-emerald-950/60 hover:bg-amber-500/20 border border-emerald-500/20 text-[var(--text-primary)] font-bold flex items-center justify-between transition-all active:scale-95">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <i class="fa-solid fa-film"></i>
            </div>
            <div class="text-right">
              <div class="font-bold text-emerald-300">خلفية فيديو بحر / أشجار</div>
              <div class="text-[10px] text-[var(--text-secondary)]">عرض بطيء طويل + صوت طبيعة خفيف بالخلفية</div>
            </div>
          </div>
          <i class="fa-solid fa-chevron-left text-gray-500 text-[10px]"></i>
        </button>

        <!-- Tool 3c: Spatial Mosque Surround Sound for Headphones -->
        <button id="m-tool-spatial" class="w-full py-2.5 px-3 rounded-2xl bg-emerald-950/60 hover:bg-amber-500/20 border border-emerald-500/20 text-[var(--text-primary)] font-bold flex items-center justify-between transition-all active:scale-95">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <i class="fa-solid fa-headphones-simple"></i>
            </div>
            <div class="text-right">
              <div class="font-bold text-amber-300 flex items-center gap-1.5">
                <span>الصوت المحيطي الحرمي (للسماعات)</span>
                <span id="m-tool-spatial-badge" class="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950 text-[var(--text-secondary)] border border-emerald-500/25">معطل</span>
              </div>
              <div class="text-[10px] text-[var(--text-secondary)]">رنين دافئ يحيط بك بثبات كأنك داخل الحرم</div>
            </div>
          </div>
          <i class="fa-solid fa-chevron-left text-gray-500 text-[10px]"></i>
        </button>

        <!-- Tool 4: Live 24/7 Radio -->
        <button id="m-tool-radio" class="w-full py-2.5 px-3 rounded-2xl bg-emerald-950/60 hover:bg-amber-500/20 border border-emerald-500/20 text-[var(--text-primary)] font-bold flex items-center justify-between transition-all active:scale-95">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <i class="fa-solid fa-tower-broadcast"></i>
            </div>
            <div class="text-right">
              <div class="font-bold text-emerald-300">إذاعات القرآن الكريم المباشرة</div>
              <div class="text-[10px] text-[var(--text-secondary)]">بث مباشر من القاهرة ومكة والمدينة</div>
            </div>
          </div>
          <i class="fa-solid fa-chevron-left text-gray-500 text-[10px]"></i>
        </button>

        <!-- Extra Row: Fav, Share, Download -->
        <div class="grid grid-cols-3 gap-2 pt-2 border-t border-emerald-500/15">
          <button id="m-tool-fav" class="py-2 px-2 rounded-xl bg-emerald-950/80 border border-emerald-500/20 text-center font-bold text-slate-300 hover:text-red-400 transition-all active:scale-95">
            <i class="fa-regular fa-heart block mb-1 text-sm text-red-400" id="m-tool-fav-icon"></i>
            <span class="text-[10px]">المفضلة</span>
          </button>
          <button id="m-tool-share" class="py-2 px-2 rounded-xl bg-emerald-950/80 border border-emerald-500/20 text-center font-bold text-slate-300 hover:text-amber-400 transition-all active:scale-95">
            <i class="fa-solid fa-share-nodes block mb-1 text-sm text-amber-400"></i>
            <span class="text-[10px]">مشاركة</span>
          </button>
          <button id="m-tool-download" class="py-2 px-2 rounded-xl bg-emerald-950/80 border border-emerald-500/20 text-center font-bold text-slate-300 hover:text-emerald-400 transition-all active:scale-95">
            <i class="fa-solid fa-circle-down block mb-1 text-sm text-emerald-400"></i>
            <span class="text-[10px]">تحميل MP3</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ======================================================================
       MOBILE MODAL 2: MUSHAF OPTIONS, ZOOM & MEMORIZATION BOTTOM SHEET
       ====================================================================== -->
  <div id="mushaf-options-modal" class="fixed inset-0 z-50 v2-modal-backdrop hidden flex items-end sm:items-center justify-center p-0 sm:p-4">
    <div class="glass-panel p-4 sm:p-6 rounded-t-3xl sm:rounded-3xl max-w-md w-full border border-amber-500/35 relative flex flex-col max-h-[88vh] overflow-y-auto mobile-bottom-sheet shadow-2xl">
      <div class="flex items-center justify-between w-full mb-3 pb-2 border-b border-emerald-500/15">
        <h3 class="font-bold text-sm sm:text-base text-amber-300 flex items-center gap-2">
          <i class="fa-solid fa-sliders text-amber-400"></i>
          <span>خيارات وأدوات المصحف الشريف</span>
        </h3>
        <button id="btn-close-mushaf-options" class="w-8 h-8 rounded-xl bg-emerald-950/60 hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-400 flex items-center justify-center transition-colors">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="space-y-3 text-xs">
        <!-- 1. Surah Selector -->
        <div>
          <label class="block font-bold text-amber-300 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-book-open"></i>
            <span>الانتقال السريع إلى سورة:</span>
          </label>
          <div class="relative">
            <select id="m-options-surah-select" class="w-full py-2.5 pr-3 pl-8 rounded-xl custom-input text-xs font-bold appearance-none cursor-pointer">
              <!-- Populated via JS -->
            </select>
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 text-xs pointer-events-none">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </div>
        </div>

        <!-- 2. Jump to Bookmark -->
        <button id="m-options-btn-jump-bookmark" class="w-full py-2.5 px-3 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/35 text-amber-300 font-bold flex items-center justify-between transition-all active:scale-95">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-bookmark text-amber-400 text-sm"></i>
            <span>الانتقال لفاصل الختمة (آخر آية)</span>
          </div>
          <span class="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded-full text-amber-300" id="m-options-bookmark-text">انتقال</span>
        </button>

        <!-- 3. Font Zoom Controls -->
        <div class="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/20">
          <div class="flex items-center justify-between mb-2">
            <span class="font-bold text-slate-200 flex items-center gap-1.5">
              <i class="fa-solid fa-text-height text-amber-400"></i>
              <span>حجم خط المصحف:</span>
            </span>
            <span id="m-options-font-label" class="font-bold text-amber-400 text-xs">100%</span>
          </div>
          <div class="flex items-center gap-2">
            <button id="m-options-zoom-out" class="flex-1 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/25 text-amber-300 font-bold flex items-center justify-center gap-1.5 active:scale-95">
              <i class="fa-solid fa-magnifying-glass-minus"></i>
              <span>تصغير</span>
            </button>
            <button id="m-options-zoom-reset" class="py-2 px-3 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/25 text-slate-400 font-bold active:scale-95" title="إعادة تعيين">
              <i class="fa-solid fa-rotate-left"></i>
            </button>
            <button id="m-options-zoom-in" class="flex-1 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/25 text-amber-300 font-bold flex items-center justify-center gap-1.5 active:scale-95">
              <i class="fa-solid fa-magnifying-glass-plus"></i>
              <span>تكبير</span>
            </button>
          </div>
        </div>

        <!-- 4. Smart Memorization Mode Switch -->
        <div class="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/20">
          <div class="flex items-center justify-between mb-2">
            <div>
              <div class="font-bold text-amber-300 flex items-center gap-1.5">
                <i class="fa-solid fa-graduation-cap"></i>
                <span>وضع التحفيظ والتتبع الذكي</span>
              </div>
              <p class="text-[10px] text-[var(--text-secondary)] mt-0.5">تظليل الآية مع صوت الشيخ تلقائياً</p>
            </div>
            <button id="m-options-toggle-memorize" class="py-1.5 px-3 rounded-xl font-bold text-xs bg-amber-500 text-slate-900 active:scale-95 shadow transition-all">
              مفعل
            </button>
          </div>

          <!-- Ayah Repeat Select -->
          <div class="flex items-center justify-between pt-2 border-t border-emerald-500/15">
            <span class="text-[11px] text-slate-300">تكرار الآية في وضع التحفيظ:</span>
            <select id="m-options-repeat-select" class="py-1 px-2.5 rounded-lg bg-emerald-950 border border-emerald-500/25 text-amber-400 font-bold text-xs outline-none">
              <option value="1">1x (بدون تكرار)</option>
              <option value="2">2x (مرتان)</option>
              <option value="3">3x (ثلاث مرات)</option>
              <option value="5">5x (خمس مرات)</option>
              <option value="99">∞</option>
            </select>
          </div>
        </div>

        <!-- 5. V3.0 Inline Tafsir & Hifz Self-Test Selectors for Mobile -->
        <div class="p-3 rounded-2xl bg-emerald-950/60 border border-amber-500/25 space-y-2.5">
          <div>
            <label class="block text-[11px] font-bold text-amber-300 mb-1">
              <i class="fa-solid fa-book-open-reader ml-1"></i>عرض التفسير أو الترجمة تحت الآيات:
            </label>
            <select id="m-options-inline-tafsir-select" class="w-full py-2 px-3 rounded-xl bg-emerald-950 border border-emerald-500/25 text-amber-300 font-bold text-xs outline-none">
              <option value="none">مصحف صافٍ (بدون حواشٍ)</option>
              <option value="ar.muyassar">مع التفسير الميسر</option>
              <option value="ar.jalalayn">مع تفسير الجلالين</option>
              <option value="ar.waseet">مع التفسير الوسيط</option>
              <option value="en.sahih">مع الترجمة الإنجليزية</option>
            </select>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-cyan-300 mb-1">
              <i class="fa-solid fa-eye-slash ml-1"></i>وضع «اختبر حفظك» التفاعلي:
            </label>
            <select id="m-options-hifz-mode-select" class="w-full py-2 px-3 rounded-xl bg-emerald-950 border border-emerald-500/25 text-cyan-300 font-bold text-xs outline-none">
              <option value="off">إظهار الآيات (طبيعي)</option>
              <option value="full">إخفاء كامل للآيات (انقر للكشف)</option>
              <option value="endings">اختبار خواتيم الآيات</option>
              <option value="starts">اختبار بدايات الآيات</option>
            </select>
          </div>
        </div>

        <!-- 6. Self-test blur & Ayah studio -->
        <div class="grid grid-cols-2 gap-2">
          <button id="m-options-btn-blur" class="py-2.5 px-3 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/25 text-slate-300 font-bold flex items-center justify-center gap-1.5 active:scale-95">
            <i class="fa-solid fa-eye-slash text-amber-400"></i>
            <span>إخفاء لاختبار حفظك</span>
          </button>
          <button id="m-options-btn-studio" class="py-2.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/35 text-amber-300 font-bold flex items-center justify-center gap-1.5 active:scale-95">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-400"></i>
            <span>بطاقة وتفسير الآية</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ======================================================================
       MOBILE MODAL 3: MEMORIAL OPTIONS & SHARING BOTTOM SHEET
       ====================================================================== -->
  <div id="memorial-options-modal" class="fixed inset-0 z-50 v2-modal-backdrop hidden flex items-end sm:items-center justify-center p-0 sm:p-4">
    <div class="glass-panel p-4 sm:p-6 rounded-t-3xl sm:rounded-3xl max-w-md w-full border border-amber-500/35 relative flex flex-col max-h-[85vh] overflow-y-auto mobile-bottom-sheet shadow-2xl">
      <div class="flex items-center justify-between w-full mb-3 pb-2 border-b border-emerald-500/15">
        <h3 class="font-bold text-sm sm:text-base text-amber-300 flex items-center gap-2">
          <i class="fa-solid fa-heart text-rose-400"></i>
          <span>خيارات ومشاركة الصدقة الجارية</span>
        </h3>
        <button id="btn-close-memorial-options" class="w-8 h-8 rounded-xl bg-emerald-950/60 hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-400 flex items-center justify-center transition-colors">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="space-y-2.5 text-xs">
        <!-- 1. Customize Deceased Name -->
        <button id="m-opt-btn-edit-memorial" class="w-full py-2.5 px-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold flex items-center justify-between transition-all active:scale-95 shadow">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-pen-to-square"></i>
            <span>تخصيص اسم الفقيد وإهداء الثواب</span>
          </div>
          <i class="fa-solid fa-chevron-left text-slate-800 text-[10px]"></i>
        </button>

        <!-- 2. Copy Link -->
        <button id="m-opt-btn-copy-link" class="w-full py-2.5 px-3 rounded-2xl bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-500/25 text-amber-300 font-bold flex items-center justify-between transition-all active:scale-95">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-link text-amber-400"></i>
            <span>نسخ رابط الصدقة الجارية</span>
          </div>
          <span class="text-[10px] text-[var(--text-secondary)] flex items-center gap-1">نسخ <i class="fa-regular fa-copy"></i></span>
        </button>

        <!-- 3. WhatsApp Share -->
        <button id="m-opt-btn-whatsapp" class="w-full py-2.5 px-3 rounded-2xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 font-bold flex items-center justify-between transition-all active:scale-95">
          <div class="flex items-center gap-2">
            <svg viewBox="0 0 24 24" class="w-4 h-4 text-emerald-400 fill-current" aria-hidden="true"><path d="M12.03 2a10 10 0 0 0-8.66 15l-1.31 4.81 4.92-1.29A10 10 0 1 0 12.03 2zm5.79 14.12c-.25.7-1.44 1.34-2.01 1.42-.52.08-1.18.11-1.91-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5.01-4.38-5.16-4.58-.15-.2-1.23-1.64-1.23-3.13s.78-2.22 1.06-2.52c.28-.3.6-.38.8-.38h.58c.19 0 .44-.07.69.52.25.61.85 2.09.92 2.24.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.32.4-.45.54-.15.15-.31.31-.13.61.18.3.78 1.29 1.67 2.09 1.15 1.02 2.12 1.34 2.42 1.49.3.15.48.13.66-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.67-.15.28.1 1.74.82 2.04.97.3.15.5.22.58.35.07.12.07.72-.18 1.42z"/></svg>
            <span>مشاركة عبر واتساب</span>
          </div>
          <span class="text-[10px] text-emerald-300 flex items-center gap-1">إرسال <i class="fa-solid fa-paper-plane"></i></span>
        </button>

        <!-- 4. Generate & Download Image Card -->
        <button id="m-opt-btn-download-card" class="w-full py-2.5 px-3 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold flex items-center justify-between transition-all active:scale-95">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-image text-amber-400"></i>
            <span>تحميل بطاقة مصورة عالية الدقة</span>
          </div>
          <span class="text-[10px] text-amber-400">توليد صورة</span>
        </button>

        <!-- Controls: Sound Toggle + Reset Round -->
        <div class="grid grid-cols-2 gap-2 pt-2 border-t border-emerald-500/15">
          <button id="m-opt-btn-toggle-sound" class="py-2.5 px-3 rounded-xl bg-emerald-950/80 border border-emerald-500/20 text-center font-bold text-slate-300 hover:text-amber-400 transition-all active:scale-95 flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-volume-high text-amber-400" id="m-opt-sound-icon"></i>
            <span id="m-opt-sound-text">صوت النقر: مفعل</span>
          </button>
          <button id="m-opt-btn-reset-round" class="py-2.5 px-3 rounded-xl bg-emerald-950/80 border border-emerald-500/20 text-center font-bold text-slate-300 hover:text-red-400 transition-all active:scale-95 flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-rotate-left text-red-400"></i>
            <span>تصفير الدورة</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ======================================================================
       SEARCHABLE RECITER PICKER MODAL (V3.4)
       ====================================================================== -->
  <div id="reciter-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-2.5 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
    <div style="background-color: var(--dropdown-bg, #03221a);" class="solid-dropdown-panel max-w-2xl w-full rounded-3xl border border-amber-500/35 shadow-2xl flex flex-col max-h-[86vh] overflow-hidden">
      <!-- Modal Header -->
      <div class="p-3.5 sm:p-4 border-b border-emerald-500/20 flex items-center justify-between gap-2 flex-shrink-0">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/35 flex items-center justify-center text-amber-400 flex-shrink-0">
            <i class="fa-solid fa-microphone-lines"></i>
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <h3 class="font-bold text-sm sm:text-base text-amber-300 truncate">اختر القارئ والرواية</h3>
              <span id="reciter-modal-count" class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25 flex-shrink-0">50 قارئاً</span>
            </div>
            <p class="text-[10px] sm:text-xs text-[var(--text-secondary)] truncate">ابحث بالاسم أو الرواية أو صفّي حسب نوع المصحف</p>
          </div>
        </div>
        <button id="btn-close-reciter-modal" type="button" class="w-8 h-8 rounded-xl bg-emerald-950/70 hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-300 border border-emerald-500/20 flex items-center justify-center transition-colors flex-shrink-0" title="إغلاق">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Search & Filter Toolbar -->
      <div class="p-3 sm:px-4 border-b border-emerald-500/15 space-y-2.5 flex-shrink-0">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute right-3.5 top-1/2 -translate-y-1/2 text-amber-400/80 text-xs pointer-events-none"></i>
          <input id="reciter-search-input" type="text" inputmode="search" autocomplete="off"
            placeholder="ابحث باسم الشيخ أو الرواية (مثال: الحصري، العفاسي، المنشاوي، ورش، مجود)..."
            class="w-full pr-9 pl-9 py-2 rounded-xl bg-emerald-950/80 border border-emerald-500/25 focus:border-amber-400 text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] outline-none transition-colors">
          <button id="btn-clear-reciter-search" type="button" class="hidden absolute left-2.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg text-[var(--text-secondary)] hover:text-amber-300 flex items-center justify-center text-xs" title="مسح البحث">
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
        </div>

        <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <button type="button" data-reciter-filter="all" class="reciter-filter-pill active px-3 py-1 rounded-xl text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 whitespace-nowrap transition-all">الكل</button>
          <button type="button" data-reciter-filter="full" class="reciter-filter-pill px-3 py-1 rounded-xl text-[11px] font-semibold bg-emerald-950/60 text-[var(--text-secondary)] border border-emerald-500/20 hover:text-amber-300 whitespace-nowrap transition-all">المصحف الكامل (114)</button>
          <button type="button" data-reciter-filter="selection" class="reciter-filter-pill px-3 py-1 rounded-xl text-[11px] font-semibold bg-emerald-950/60 text-[var(--text-secondary)] border border-emerald-500/20 hover:text-amber-300 whitespace-nowrap transition-all">تلاوات مختارة</button>
          <button type="button" data-reciter-filter="riwayat" class="reciter-filter-pill px-3 py-1 rounded-xl text-[11px] font-semibold bg-emerald-950/60 text-[var(--text-secondary)] border border-emerald-500/20 hover:text-amber-300 whitespace-nowrap transition-all">مجود وروايات</button>
        </div>
      </div>

      <!-- Reciter Cards Grid -->
      <div id="reciter-modal-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-y-auto custom-scrollbar p-3 sm:p-4">
        <!-- Populated dynamically via JS -->
      </div>
    </div>
  </div>`
};
window.__hydrateSecondaryDom = function() {
  if (window.__secondaryDomHydrated) return;
  window.__secondaryDomHydrated = true;
  const d = window.__QURAN_SECONDARY_DOM;
  const setHtml = (id, str) => { const el = document.getElementById(id); if (el && !el.children.length) el.innerHTML = str; };
  setHtml("mushaf-view", d.mushaf);
  setHtml("spiritual-view", d.spiritual);
  setHtml("memorial-view", d.memorial);
  setHtml("hadr-view", d.hadr);
  setHtml("secondary-modals-root", d.modals);
  delete window.__QURAN_SECONDARY_DOM;
};
