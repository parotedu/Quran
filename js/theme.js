// Multi-Theme Royal System for Quran Platform V2.0
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  const themesOrder = ['dark', 'kaaba', 'quds', 'light'];
  const themeMeta = {
    dark: {
      name: 'الزمرد الملكي',
      icon: 'fa-solid fa-gem text-emerald-400 text-base sm:text-lg transition-all duration-300'
    },
    kaaba: {
      name: 'الكعبة المذهبة (OLED)',
      icon: 'fa-solid fa-kaaba text-amber-400 text-base sm:text-lg transition-all duration-300'
    },
    quds: {
      name: 'ليالي القدس',
      icon: 'fa-solid fa-moon text-sky-400 text-base sm:text-lg transition-all duration-300'
    },
    light: {
      name: 'الرقّ العثماني (نهاري)',
      icon: 'fa-solid fa-sun text-amber-600 text-base sm:text-lg transition-all duration-300'
    }
  };

  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(themesOrder.includes(savedTheme) ? savedTheme : 'dark', false);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const idx = themesOrder.indexOf(currentTheme);
      const nextTheme = themesOrder[(idx + 1) % themesOrder.length];
      setTheme(nextTheme, true);
    });
  }

  function setTheme(theme, notify = false) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const meta = themeMeta[theme] || themeMeta.dark;
    if (themeIcon) {
      themeIcon.className = meta.icon;
    }
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('title', `المظهر الحالي: ${meta.name} (انقر للتبديل)`);
    }

    if (notify && window.showPlatformToast) {
      window.showPlatformToast(`تم تفعيل مظهر: ${meta.name}`, 'info');
    }
  }
});
