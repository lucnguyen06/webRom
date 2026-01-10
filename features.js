// Auto update year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

// Theme toggle (light / dark)
const body = document.body;
const themeToggleBtn = document.getElementById('btn-theme-toggle');
const THEME_KEY = 'hypermods-theme';

function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
  if (themeToggleBtn) {
    const icon = theme === 'dark' ? '☀️' : '🌙';
    themeToggleBtn.querySelector('.theme-icon').textContent = icon;
  }
}

// Load saved theme
const savedTheme = window.localStorage.getItem(THEME_KEY);
if (savedTheme === 'light' || savedTheme === 'dark') {
  applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark');
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDark = body.classList.contains('dark');
    const nextTheme = isDark ? 'light' : 'dark';
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_KEY, nextTheme);
  });
}

// Modal đăng ký serial
const modalOverlay = document.getElementById('modal-serial');
const btnRegisterSerial = document.getElementById('btn-register-serial');
const modalClose = document.getElementById('modal-close');
const modalCancel = document.getElementById('modal-cancel');
const serialForm = document.getElementById('serial-form');

function openModal() {
  if (modalOverlay) {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

if (btnRegisterSerial) {
  btnRegisterSerial.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modalCancel) {
  modalCancel.addEventListener('click', closeModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

if (serialForm) {
  serialForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const serialInput = document.getElementById('serial-input');
    const emailInput = document.getElementById('email-input');
    const deviceInput = document.getElementById('device-input');
    
    console.log('Serial:', serialInput?.value);
    console.log('Email:', emailInput?.value);
    console.log('Device:', deviceInput?.value);
    
    alert('Đăng ký serial thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    
    serialForm.reset();
    closeModal();
  });
}

// Render feature items
function renderFeatureItems(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container || !items || items.length === 0) return;

  container.innerHTML = items.map((item, index) => `
    <div class="feature-item" style="animation-delay: ${index * 0.05}s">
      <span class="feature-item-check">✓</span>
      <span class="feature-item-text">${item}</span>
    </div>
  `).join('');
}

// Render modded apps
function renderModdedApps() {
  const container = document.getElementById('modded-apps');
  if (!container || typeof moddedApps === 'undefined') return;

  const appIcons = {
    'FileExplorer': '📁',
    'Joyose': '🎮',
    'MiMediaEditor': '🎬',
    'MiuiExtraPhoto': '📷',
    'MiuiGallery': '🖼️',
    'MiuiHome': '🏠',
    'MiuiPackageInstaller': '📦',
    'MiuiScanner': '📸',
    'MiuiScreenRecorder': '🎥',
    'MiuiScreenshot': '📱',
    'MiuiSystemUIPlugin': '⚙️',
    'Notes': '📝',
    'PowerKeeper': '🔋',
    'SecurityCenter': '🛡️',
    'SoundRecorder': '🎙️',
    'Weather': '🌤️'
  };

  container.innerHTML = moddedApps.map((app, index) => `
    <div class="modded-app-item" style="animation-delay: ${index * 0.05}s">
      <span class="modded-app-icon">${appIcons[app] || '📱'}</span>
      <span class="modded-app-name">${app}</span>
    </div>
  `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (typeof changelogData !== 'undefined') {
      renderFeatureItems('features-added', changelogData.added);
      renderFeatureItems('features-improved', changelogData.improved);
      renderFeatureItems('features-fixed', changelogData.fixed);
    }
    renderModdedApps();
  }, 100);
});

window.addEventListener('load', () => {
  setTimeout(() => {
    if (typeof changelogData !== 'undefined') {
      const addedContainer = document.getElementById('features-added');
      if (addedContainer && !addedContainer.innerHTML) {
        renderFeatureItems('features-added', changelogData.added);
        renderFeatureItems('features-improved', changelogData.improved);
        renderFeatureItems('features-fixed', changelogData.fixed);
      }
    }
    const moddedContainer = document.getElementById('modded-apps');
    if (moddedContainer && !moddedContainer.innerHTML) {
      renderModdedApps();
    }
  }, 100);
});

