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

// Device data
let allDevices = [];
let currentCategory = 'all';

// Get device category
function getDeviceCategory(device) {
  const name = device.name.toLowerCase();
  const codeName = device.codeName.toLowerCase();
  
  if (name.includes('poco')) return 'poco';
  if (name.includes('pad')) return 'pad';
  if (name.includes('mix')) return 'mix';
  if (name.includes('civi')) return 'civi';
  if (name.includes('redmi note')) return 'redmi-note';
  if (name.includes('redmi k') || name.includes('redmi turbo')) return 'redmi-k';
  if (name.includes('redmi')) return 'redmi';
  if (name.includes('xiaomi')) return 'xiaomi';
  
  return 'other';
}

// Filter devices by category
function filterDevicesByCategory(category) {
  if (category === 'all') return allDevices;
  return allDevices.filter(device => getDeviceCategory(device) === category);
}

// Render device cards in slider
function renderDeviceSlider(filteredDevices = null) {
  const slider = document.getElementById('device-slider');
  const deviceCountEl = document.getElementById('device-count');
  const noResultsEl = document.getElementById('no-results');
  
  if (!slider || typeof devices === 'undefined' || typeof downloadLinks === 'undefined') return;

  const devicesToRender = filteredDevices || allDevices;
  
  // Update count
  if (deviceCountEl) {
    deviceCountEl.textContent = `${devicesToRender.length} thiết bị`;
  }

  // Show/hide no results message
  if (noResultsEl) {
    noResultsEl.style.display = devicesToRender.length === 0 ? 'block' : 'none';
  }

  if (devicesToRender.length === 0) {
    slider.innerHTML = '';
    return;
  }

  slider.innerHTML = devicesToRender.map((device, index) => {
    const downloadLink = downloadLinks[device.codeName] || '#';
    const hasLink = downloadLink !== '#';
    
    // Get device image path
    const imagePath = `images/${device.codeName}.png`;
    
    // Get fallback icon based on type
    let fallbackIcon = '📱';
    const name = device.name.toLowerCase();
    if (name.includes('pad')) fallbackIcon = '📲';
    else if (name.includes('mix fold') || name.includes('mix flip')) fallbackIcon = '📱';
    else if (name.includes('ultra')) fallbackIcon = '⚡';
    else if (name.includes('pro')) fallbackIcon = '🔥';
    
    return `
      <div class="device-card" style="animation-delay: ${index * 0.05}s">
        <div class="device-card-image">
          <img src="${imagePath}" 
               alt="${device.name}" 
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
               loading="lazy">
          <span class="device-fallback-icon" style="display:none;">${fallbackIcon}</span>
          <div class="device-card-status">
            <span class="tag ${hasLink ? 'tag-stable' : 'tag-dev'}">${hasLink ? 'Stable' : 'Dev'}</span>
          </div>
        </div>
        <div class="device-card-info">
          <h4 class="device-card-title">${device.name}</h4>
          <span class="device-card-codename">${device.codeName}</span>
        </div>
        <div class="device-card-footer">
          ${hasLink 
            ? `<a href="${downloadLink}" target="_blank" rel="noopener noreferrer" class="btn-download">
                <span>⬇️</span> Tải ROM
              </a>`
            : '<span class="text-muted">🔜 Sắp có</span>'
          }
        </div>
      </div>
    `;
  }).join('');
}

// Initialize category tabs
function initCategoryTabs() {
  const tabs = document.querySelectorAll('.category-tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active state
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Filter and render
      currentCategory = tab.dataset.category;
      const filtered = filterDevicesByCategory(currentCategory);
      
      // Also apply search filter if there's a search query
      const searchInput = document.getElementById('device-search');
      if (searchInput && searchInput.value.trim()) {
        const query = searchInput.value.toLowerCase().trim();
        const searchFiltered = filtered.filter(device => 
          device.name.toLowerCase().includes(query) || 
          device.codeName.toLowerCase().includes(query)
        );
        renderDeviceSlider(searchFiltered);
      } else {
        renderDeviceSlider(filtered);
      }
      
      // Reset slider position
      const slider = document.getElementById('device-slider');
      if (slider) slider.scrollLeft = 0;
    });
  });
}

// Initialize slider navigation
function initSliderNavigation() {
  const slider = document.getElementById('device-slider');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  
  if (!slider || !prevBtn || !nextBtn) return;
  
  // Scroll by ~2 columns (280px each + gap)
  const scrollAmount = 580;
  
  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  
  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
  
  // Touch/drag scroll support is already handled by CSS overflow-x: auto
}

// Search functionality
function initSearch() {
  const searchInput = document.getElementById('device-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    // Get current category filtered devices
    let filtered = filterDevicesByCategory(currentCategory);
    
    if (query) {
      filtered = filtered.filter(device => 
        device.name.toLowerCase().includes(query) || 
        device.codeName.toLowerCase().includes(query)
      );
    }

    renderDeviceSlider(filtered);
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (typeof devices !== 'undefined') {
      // Sort devices by Code Name (A-Z)
      allDevices = [...devices].sort((a, b) => a.codeName.localeCompare(b.codeName));
      renderDeviceSlider();
      initCategoryTabs();
      initSliderNavigation();
      initSearch();
    }
  }, 100);
});

// Fallback on window load
window.addEventListener('load', () => {
  setTimeout(() => {
    if (typeof devices !== 'undefined' && allDevices.length === 0) {
      allDevices = [...devices].sort((a, b) => a.codeName.localeCompare(b.codeName));
      renderDeviceSlider();
      initCategoryTabs();
      initSliderNavigation();
      initSearch();
    }
  }, 100);
});
