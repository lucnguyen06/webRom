// Auto update year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

// Smooth scroll for nav links + scroll spy active state
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  });
});

const sections = ['#home']
  .map((id) => document.querySelector(id))
  .filter(Boolean);

function updateActiveNav() {
  const scrollPos = window.scrollY;
  const offset = 120;
  let currentId = '#home';

  sections.forEach((section) => {
    const top = section.offsetTop - offset;
    if (scrollPos >= top) {
      currentId = `#${section.id}`;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// Theme toggle (light / dark)
const body = document.body;
const themeToggleBtn = document.getElementById('btn-theme-toggle');
const THEME_KEY = 'hypermods-theme';

function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
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
    const isDark = body.classList.contains('dark-mode');
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
const modalCancelLookup = document.getElementById('modal-cancel-lookup');
const serialForm = document.getElementById('serial-form');
const lookupForm = document.getElementById('lookup-form');
const modalTabs = document.querySelectorAll('.modal-tab');

// Demo data - Danh sách serial đã đăng ký (trong thực tế sẽ lấy từ database)
const registeredSerials = [
  {
    serial: 'HM-2024-A1B2',
    email: 'user1@example.com',
    device: 'Redmi K60 Pro - socrates',
    date: '15/12/2025',
    status: 'Đã kích hoạt'
  },
  {
    serial: 'HM-2024-C3D4',
    email: 'test@gmail.com',
    device: 'Xiaomi 14 - houji',
    date: '20/12/2025',
    status: 'Đã kích hoạt'
  },
  {
    serial: 'HM-2025-E5F6',
    email: 'demo@hypermods.com',
    device: 'Xiaomi 15 Pro - haotian',
    date: '05/01/2026',
    status: 'Chờ xác nhận'
  }
];

function openModal() {
  if (modalOverlay) {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Reset về tab đăng ký khi mở modal
    switchTab('register');
  }
}

function closeModal() {
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    // Reset forms và kết quả
    if (serialForm) serialForm.reset();
    if (lookupForm) lookupForm.reset();
    hideLookupResults();
  }
}

function switchTab(tabName) {
  // Update tab buttons
  modalTabs.forEach(tab => {
    if (tab.dataset.tab === tabName) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Update tab content
  const tabRegister = document.getElementById('tab-register');
  const tabLookup = document.getElementById('tab-lookup');

  if (tabName === 'register') {
    tabRegister?.classList.remove('hidden');
    tabLookup?.classList.add('hidden');
  } else {
    tabRegister?.classList.add('hidden');
    tabLookup?.classList.remove('hidden');
  }

  // Reset lookup results when switching tabs
  hideLookupResults();
}

function hideLookupResults() {
  const lookupResult = document.getElementById('lookup-result');
  const lookupNotFound = document.getElementById('lookup-not-found');
  lookupResult?.classList.add('hidden');
  lookupNotFound?.classList.add('hidden');
}

function showLookupResult(data) {
  const lookupResult = document.getElementById('lookup-result');
  const lookupNotFound = document.getElementById('lookup-not-found');
  
  lookupNotFound?.classList.add('hidden');
  lookupResult?.classList.remove('hidden');

  document.getElementById('result-serial').textContent = data.serial;
  document.getElementById('result-email').textContent = maskEmail(data.email);
  document.getElementById('result-device').textContent = data.device;
  document.getElementById('result-date').textContent = data.date;
  document.getElementById('result-status').textContent = data.status;
}

function showLookupNotFound() {
  const lookupResult = document.getElementById('lookup-result');
  const lookupNotFound = document.getElementById('lookup-not-found');
  
  lookupResult?.classList.add('hidden');
  lookupNotFound?.classList.remove('hidden');
}

function maskEmail(email) {
  const [name, domain] = email.split('@');
  if (name.length <= 3) {
    return name[0] + '***@' + domain;
  }
  return name.substring(0, 3) + '***@' + domain;
}

// Tab click events
modalTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    switchTab(tab.dataset.tab);
  });
});

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

if (modalCancelLookup) {
  modalCancelLookup.addEventListener('click', closeModal);
}

// Đóng modal khi click vào overlay
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}

// Đóng modal khi nhấn ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

// Xử lý form đăng ký submit
if (serialForm) {
  serialForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const serialInput = document.getElementById('serial-input');
    const emailInput = document.getElementById('email-input');
    const deviceInput = document.getElementById('device-input');
    
    // Ở đây bạn có thể thêm logic xử lý đăng ký serial
    console.log('Serial:', serialInput?.value);
    console.log('Email:', emailInput?.value);
    console.log('Device:', deviceInput?.value);
    
    // Ví dụ: hiển thị thông báo thành công
    alert(i18n.t('modal.serial.register.success'));
    
    // Reset form và đóng modal
    serialForm.reset();
    closeModal();
  });
}

// Xử lý form tra cứu submit
if (lookupForm) {
  lookupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const lookupInput = document.getElementById('lookup-input');
    const query = lookupInput?.value.trim().toLowerCase();

    if (!query) return;

    // Tìm kiếm theo serial hoặc email
    const found = registeredSerials.find(item => 
      item.serial.toLowerCase() === query || 
      item.email.toLowerCase() === query
    );

    if (found) {
      showLookupResult(found);
    } else {
      showLookupNotFound();
    }
  });
}

// =====================================================
// Device Autocomplete
// =====================================================
const deviceInput = document.getElementById('device-input');
const deviceDropdown = document.getElementById('device-dropdown');
let activeIndex = -1;

function getDeviceIcon(name) {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('pad')) return '📲';
  if (lowerName.includes('fold') || lowerName.includes('flip')) return '📱';
  if (lowerName.includes('ultra')) return '⚡';
  if (lowerName.includes('pro')) return '🔥';
  if (lowerName.includes('poco')) return '🎯';
  return '📱';
}

function renderDeviceDropdown(filteredDevices) {
  if (!deviceDropdown) return;

  if (filteredDevices.length === 0) {
    deviceDropdown.innerHTML = `
      <div class="autocomplete-no-results">
        <span>🔍</span>
        Không tìm thấy thiết bị
      </div>
    `;
    deviceDropdown.classList.remove('hidden');
    return;
  }

  deviceDropdown.innerHTML = filteredDevices.slice(0, 8).map((device, index) => {
    const imagePath = `images/${device.codeName.toLowerCase()}.png`;
    const icon = getDeviceIcon(device.name);
    
    return `
      <div class="autocomplete-item" data-index="${index}" data-device="${device.name} - ${device.codeName}">
        <div class="autocomplete-image">
          <img src="${imagePath}" alt="${device.name}" onerror="this.onerror=null;this.outerHTML='<span class=\\'autocomplete-fallback-icon\\'>${icon}</span>';">
        </div>
        <div class="autocomplete-info">
          <div class="autocomplete-name">${device.name}</div>
          <span class="autocomplete-codename">${device.codeName}</span>
        </div>
      </div>
    `;
  }).join('');

  deviceDropdown.classList.remove('hidden');
  activeIndex = -1;
}

function hideDeviceDropdown() {
  if (deviceDropdown) {
    deviceDropdown.classList.add('hidden');
    activeIndex = -1;
  }
}

function selectDevice(deviceValue) {
  if (deviceInput) {
    deviceInput.value = deviceValue;
  }
  hideDeviceDropdown();
}

function updateActiveItem() {
  const items = deviceDropdown?.querySelectorAll('.autocomplete-item');
  if (!items) return;

  items.forEach((item, index) => {
    if (index === activeIndex) {
      item.classList.add('active');
      item.scrollIntoView({ block: 'nearest' });
    } else {
      item.classList.remove('active');
    }
  });
}

// Input event - filter devices
if (deviceInput && typeof devices !== 'undefined') {
  deviceInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (query.length === 0) {
      hideDeviceDropdown();
      return;
    }

    // Tìm kiếm theo tên hoặc codename
    const filtered = devices.filter(device => 
      device.name.toLowerCase().includes(query) || 
      device.codeName.toLowerCase().includes(query)
    );

    renderDeviceDropdown(filtered);
  });

  // Focus event - show suggestions if there's text
  deviceInput.addEventListener('focus', () => {
    const query = deviceInput.value.trim().toLowerCase();
    if (query.length > 0) {
      const filtered = devices.filter(device => 
        device.name.toLowerCase().includes(query) || 
        device.codeName.toLowerCase().includes(query)
      );
      renderDeviceDropdown(filtered);
    }
  });

  // Keyboard navigation
  deviceInput.addEventListener('keydown', (e) => {
    const items = deviceDropdown?.querySelectorAll('.autocomplete-item');
    if (!items || items.length === 0 || deviceDropdown?.classList.contains('hidden')) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % items.length;
      updateActiveItem();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = activeIndex <= 0 ? items.length - 1 : activeIndex - 1;
      updateActiveItem();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && items[activeIndex]) {
        selectDevice(items[activeIndex].dataset.device);
      }
    } else if (e.key === 'Escape') {
      hideDeviceDropdown();
    }
  });
}

// Click on dropdown item
if (deviceDropdown) {
  deviceDropdown.addEventListener('click', (e) => {
    const item = e.target.closest('.autocomplete-item');
    if (item) {
      selectDevice(item.dataset.device);
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (deviceInput && deviceDropdown) {
    if (!deviceInput.contains(e.target) && !deviceDropdown.contains(e.target)) {
      hideDeviceDropdown();
    }
  }
});
// ROM Image Gallery
const galleryTrack = document.getElementById('gallery-track');
const galleryDots = document.getElementById('gallery-dots');
const galleryPrev = document.getElementById('gallery-prev');
const galleryNext = document.getElementById('gallery-next');
const galleryTabs = document.querySelectorAll('.gallery-tab');
const lightbox = document.getElementById('gallery-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxCounter = document.getElementById('lightbox-counter');

// Gallery configuration
const galleryImages = {
  os2: Array.from({ length: 16 }, (_, i) => `images_devices/os2/a${i + 1}.jpg`),
  os3: Array.from({ length: 16 }, (_, i) => `images_devices/os3/a${i + 1}.jpg`)
};

let currentGallery = 'os3';
let currentSlide = 0;
let currentLightboxIndex = 0;
let itemsPerView = 4;

function updateItemsPerView() {
  if (window.innerWidth <= 480) {
    itemsPerView = 2;
  } else if (window.innerWidth <= 768) {
    itemsPerView = 2;
  } else if (window.innerWidth <= 1024) {
    itemsPerView = 3;
  } else {
    itemsPerView = 4;
  }
}

function getTotalSlides() {
  const images = galleryImages[currentGallery];
  return Math.ceil(images.length / itemsPerView);
}

function renderGallery() {
  if (!galleryTrack) return;

  const images = galleryImages[currentGallery];
  
  galleryTrack.innerHTML = images.map((src, index) => `
    <div class="gallery-item" data-index="${index}">
      <img src="${src}" alt="HyperUR Screenshot ${index + 1}" loading="lazy">
    </div>
  `).join('');

  // Add click events for lightbox
  galleryTrack.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      openLightbox(parseInt(item.dataset.index));
    });
  });

  renderDots();
  updateGalleryPosition();
}

function renderDots() {
  if (!galleryDots) return;
  
  const totalSlides = getTotalSlides();
  
  galleryDots.innerHTML = Array.from({ length: totalSlides }, (_, i) => `
    <button class="gallery-dot ${i === currentSlide ? 'active' : ''}" data-slide="${i}"></button>
  `).join('');

  galleryDots.querySelectorAll('.gallery-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      currentSlide = parseInt(dot.dataset.slide);
      updateGalleryPosition();
      updateDots();
    });
  });
}

function updateDots() {
  if (!galleryDots) return;
  
  galleryDots.querySelectorAll('.gallery-dot').forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function updateGalleryPosition() {
  if (!galleryTrack) return;

  const items = galleryTrack.querySelectorAll('.gallery-item');
  if (items.length === 0) return;

  // Calculate item width including gap
  const containerWidth = galleryTrack.parentElement.offsetWidth;
  const gap = 16; // 1rem
  const itemWidth = (containerWidth - (gap * (itemsPerView - 1))) / itemsPerView;
  const offset = currentSlide * (itemWidth + gap) * itemsPerView;

  galleryTrack.style.transform = `translateX(-${offset}px)`;

  // Update nav buttons state
  const totalSlides = getTotalSlides();
  if (galleryPrev) {
    galleryPrev.disabled = currentSlide === 0;
  }
  if (galleryNext) {
    galleryNext.disabled = currentSlide >= totalSlides - 1;
  }
}

function nextSlide() {
  const totalSlides = getTotalSlides();
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateGalleryPosition();
    updateDots();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateGalleryPosition();
    updateDots();
  }
}

function switchGallery(gallery) {
  currentGallery = gallery;
  currentSlide = 0;

  galleryTabs.forEach(tab => {
    if (tab.dataset.gallery === gallery) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  renderGallery();
}

// Lightbox functions
function openLightbox(index) {
  if (!lightbox || !lightboxImg) return;
  
  currentLightboxIndex = index;
  const images = galleryImages[currentGallery];
  lightboxImg.src = images[index];
  updateLightboxCounter();
  
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxCounter() {
  if (!lightboxCounter) return;
  
  const images = galleryImages[currentGallery];
  lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${images.length}`;
}

function lightboxNextImage() {
  const images = galleryImages[currentGallery];
  currentLightboxIndex = (currentLightboxIndex + 1) % images.length;
  lightboxImg.src = images[currentLightboxIndex];
  updateLightboxCounter();
}

function lightboxPrevImage() {
  const images = galleryImages[currentGallery];
  currentLightboxIndex = currentLightboxIndex === 0 ? images.length - 1 : currentLightboxIndex - 1;
  lightboxImg.src = images[currentLightboxIndex];
  updateLightboxCounter();
}

// Event listeners for gallery
if (galleryPrev) {
  galleryPrev.addEventListener('click', prevSlide);
}

if (galleryNext) {
  galleryNext.addEventListener('click', nextSlide);
}

galleryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    switchGallery(tab.dataset.gallery);
  });
});

// Lightbox events
if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

if (lightboxNext) {
  lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    lightboxNextImage();
  });
}

if (lightboxPrev) {
  lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    lightboxPrevImage();
  });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
  if (lightbox && lightbox.classList.contains('active')) {
    if (e.key === 'ArrowRight') {
      lightboxNextImage();
    } else if (e.key === 'ArrowLeft') {
      lightboxPrevImage();
    } else if (e.key === 'Escape') {
      closeLightbox();
    }
  }
});

// Handle window resize
window.addEventListener('resize', () => {
  updateItemsPerView();
  currentSlide = 0;
  renderDots();
  updateGalleryPosition();
});

// Initialize gallery on load
if (galleryTrack) {
  updateItemsPerView();
  renderGallery();
}
