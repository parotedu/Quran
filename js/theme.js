// Theme management for Quran platform
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Default to dark theme if not saved, to showcase the premium dark green look
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }
  
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update icon class (Sun for dark mode to toggle to light, Moon for light mode)
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun text-yellow-400 text-xl transition-all duration-300 transform hover:scale-110';
        themeToggleBtn.setAttribute('title', 'الوضع المضيء');
      } else {
        themeIcon.className = 'fas fa-moon text-slate-700 text-xl transition-all duration-300 transform hover:scale-110';
        themeToggleBtn.setAttribute('title', 'الوضع المظلم');
      }
    }
  }
});
