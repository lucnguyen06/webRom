// i18n - Internationalization Support
const translations = {
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.features': 'Tính năng',
    'nav.download': 'Tải ROM',
    'nav.donate': 'Donate',
    'nav.register': 'Đăng ký serial',

    // Hero Section
    'hero.badge': 'HyperMods ROM • Bản mod tối ưu toàn diện',
    'hero.title': 'HyperMods ROM',
    'hero.subtitle': 'Nâng cấp trải nghiệm Android của bạn với ROM mod được tối ưu sâu về hiệu năng, pin, độ ổn định và bảo mật – vẫn giữ giao diện thân thiện, dễ dùng.',
    'hero.btn.download': 'Tải HyperMods',
    'hero.btn.features': 'Xem tính năng',
    'hero.list.1': '⚡ Tối ưu hiệu năng cho game & đa nhiệm',
    'hero.list.2': '🔋 Quản lý pin thông minh, giảm app chạy nền',
    'hero.list.3': '🛡️ Bảo mật tăng cường, chặn quảng cáo hệ thống',

    // Version Card
    'version.title': 'Phiên bản hiện tại',
    'version.name': 'HyperMods Hybrid 1.0',
    'version.android': 'Android:',
    'version.chip': 'Chip:',
    'version.base': 'Base:',
    'version.security': 'Security:',
    'version.security.value': 'Patch mới nhất',
    'version.btn': 'Tải bản mới nhất',
    'version.note': '* Vui lòng đọc kỹ hướng dẫn cài đặt trước khi flash ROM.',

    // Home Features
    'home.features.title': 'Tại sao chọn HyperMods?',
    'home.features.subtitle': 'Những điểm nổi bật làm nên sự khác biệt của HyperMods ROM',
    'home.features.performance': 'Hiệu năng vượt trội',
    'home.features.performance.desc': 'Tinh chỉnh hệ thống sâu để tăng tốc độ xử lý, giảm độ trễ và tối ưu RAM/CPU.',
    'home.features.gaming': 'Chế độ Gaming tối ưu',
    'home.features.gaming.desc': 'Hạn chế giật lag, giảm nhiệt và tăng FPS ổn định khi chơi game.',
    'home.features.customize': 'Tùy biến linh hoạt',
    'home.features.customize.desc': 'Giao diện, hiệu ứng, icon, banner… có thể được cá nhân hóa theo phong cách riêng.',
    'home.features.security': 'An toàn & ổn định',
    'home.features.security.desc': 'Giữ lại tính tương thích và bảo mật của ROM gốc, đồng thời loại bỏ bloatware thừa.',
    'home.features.support': 'Hỗ trợ mở rộng',
    'home.features.support.desc': 'Dễ dàng kết hợp với các công cụ flash, patch và mod khác từ cộng đồng.',
    'home.features.cta': 'Xem tất cả tính năng →',

    // Gallery
    'gallery.title': '📸 Hình ảnh ROM',
    'gallery.subtitle': 'Khám phá giao diện HyperMods ROM trên các phiên bản HyperOS',
    'gallery.tab.os2': 'HyperOS 2',
    'gallery.tab.os3': 'HyperOS 3',

    // Footer
    'footer.copyright': 'HyperMods ROM. Phiên bản demo trang giới thiệu.',

    // Modal - Serial Registration
    'modal.title': 'Serial Key',
    'modal.tab.register': '📝 Đăng ký',
    'modal.tab.lookup': '🔍 Tra cứu',
    'modal.serial.label': 'Nhập serial key:',
    'modal.serial.placeholder': 'VD: 1a2b3c4d',
    'modal.email.label': 'Email của bạn:',
    'modal.email.placeholder': 'email@example.com',
    'modal.device.label': 'Thiết bị:',
    'modal.device.placeholder': 'Nhập tên thiết bị để tìm kiếm...',
    'modal.btn.register': 'Đăng ký',
    'modal.btn.cancel': 'Hủy',
    'modal.lookup.label': 'Serial hoặc Email:',
    'modal.lookup.placeholder': 'Nhập serial hoặc email để tra cứu...',
    'modal.btn.lookup': '🔍 Tra cứu',
    'modal.result.title': 'Kết quả tra cứu',
    'modal.result.serial': 'Serial:',
    'modal.result.email': 'Email:',
    'modal.result.device': 'Thiết bị:',
    'modal.result.date': 'Ngày đăng ký:',
    'modal.result.status': 'Trạng thái:',
    'modal.notfound': 'Không tìm thấy thông tin đăng ký.',
    'modal.notfound.hint': 'Vui lòng kiểm tra lại serial hoặc email của bạn.',

    // Downloads Page
    'downloads.title': 'Tải HyperMods ROM',
    'downloads.subtitle': 'Chọn đúng dòng máy và base ROM hiện tại để đảm bảo quá trình flash an toàn. Mỗi bản ROM được tối ưu riêng cho từng thiết bị.',
    'downloads.search.placeholder': 'Tìm kiếm thiết bị...',
    'downloads.devices': 'thiết bị',
    'downloads.category.all': 'Tất cả',
    'downloads.category.xiaomi': 'Xiaomi',
    'downloads.category.redmi': 'Redmi',
    'downloads.category.poco': 'POCO',
    'downloads.category.pad': 'Pad',
    'downloads.btn.download': 'Tải ROM',
    'downloads.coming': '🔜 Sắp có',
    'downloads.noresults': 'Không tìm thấy thiết bị phù hợp.',
    'downloads.noresults.hint': 'Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.',
    'downloads.info.title': 'ℹ️ Thông tin phiên bản',
    'downloads.info.hyperos': 'HyperOS:',
    'downloads.info.android': 'Android:',
    'downloads.info.chip': 'Chip:',
    'downloads.info.base': 'Base:',
    'downloads.support.title': '💬 Hỗ trợ',
    'downloads.support.desc': 'Tham gia cộng đồng để nhận hỗ trợ nhanh nhất!',
    'downloads.guide.title': '📖 Hướng dẫn flash',
    'downloads.guide.1': 'Backup dữ liệu quan trọng',
    'downloads.guide.2': 'Tải đúng ROM cho thiết bị',
    'downloads.guide.3': 'Flash qua Recovery (TWRP)',
    'downloads.guide.4': 'Xóa cache & Dalvik',
    'downloads.guide.5': 'Khởi động lại',
    'downloads.guide.warning': '⚠️ Flash sai ROM có thể gây brick thiết bị!',

    // Features Page
    'features.title': 'Tính năng nổi bật',
    'features.subtitle': 'HyperMods không chỉ là một bản ROM, mà là hệ sinh thái tối ưu cho mọi nhu cầu: chơi game, làm việc, học tập và giải trí.',
    'features.new': 'Tính năng mới',
    'features.new.desc': 'Những tính năng độc quyền được bổ sung',
    'features.improved': 'Cải thiện',
    'features.improved.desc': 'Các tối ưu hóa và nâng cấp',
    'features.fixed': 'Sửa lỗi',
    'features.fixed.desc': 'Các vấn đề đã được khắc phục',
    'features.apps': 'Ứng dụng đã mod',
    'features.apps.desc': 'Các app hệ thống được tối ưu',
    'features.cta.title': 'Sẵn sàng trải nghiệm?',
    'features.cta.desc': 'Tải ngay HyperMods ROM để khám phá tất cả tính năng tuyệt vời này!',
    'features.cta.btn': '⬇️ Tải ngay',

    // Donate Page
    'donate.title': 'Ủng hộ dự án HyperMods',
    'donate.subtitle': 'Nếu bạn thấy HyperMods hữu ích, có thể ủng hộ team thông qua các phương thức bên dưới để duy trì server, thiết bị test và thời gian phát triển.',
    'donate.thanks.title': 'Cảm ơn bạn!',
    'donate.thanks.desc': 'Mọi đóng góp dù lớn hay nhỏ đều giúp dự án HyperMods phát triển bền vững. Chúng tôi trân trọng sự ủng hộ của bạn!',

    // Common
    'common.stable': 'Stable',
    'common.dev': 'Dev',
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.donate': 'Donate',
    'nav.register': 'Register Serial',

    // Hero Section
    'hero.badge': 'HyperMods ROM • Fully Optimized Mod',
    'hero.title': 'HyperMods ROM',
    'hero.subtitle': 'Upgrade your Android experience with a ROM optimized for performance, battery, stability and security – while keeping a friendly, easy-to-use interface.',
    'hero.btn.download': 'Download HyperMods',
    'hero.btn.features': 'View Features',
    'hero.list.1': '⚡ Optimized performance for gaming & multitasking',
    'hero.list.2': '🔋 Smart battery management, reduce background apps',
    'hero.list.3': '🛡️ Enhanced security, block system ads',

    // Version Card
    'version.title': 'Current Version',
    'version.name': 'HyperMods Hybrid 1.0',
    'version.android': 'Android:',
    'version.chip': 'Chip:',
    'version.base': 'Base:',
    'version.security': 'Security:',
    'version.security.value': 'Latest Patch',
    'version.btn': 'Download Latest',
    'version.note': '* Please read the installation guide carefully before flashing ROM.',

    // Home Features
    'home.features.title': 'Why Choose HyperMods?',
    'home.features.subtitle': 'Key highlights that make HyperMods ROM different',
    'home.features.performance': 'Superior Performance',
    'home.features.performance.desc': 'Deep system optimization to increase processing speed, reduce latency and optimize RAM/CPU.',
    'home.features.gaming': 'Optimized Gaming Mode',
    'home.features.gaming.desc': 'Reduce lag, lower temperature and increase stable FPS when gaming.',
    'home.features.customize': 'Flexible Customization',
    'home.features.customize.desc': 'Interface, effects, icons, banners... can be personalized to your own style.',
    'home.features.security': 'Safe & Stable',
    'home.features.security.desc': 'Keep compatibility and security of stock ROM, while removing bloatware.',
    'home.features.support': 'Extended Support',
    'home.features.support.desc': 'Easily combine with flash tools, patches and other mods from the community.',
    'home.features.cta': 'View All Features →',

    // Gallery
    'gallery.title': '📸 ROM Screenshots',
    'gallery.subtitle': 'Explore HyperMods ROM interface on HyperOS versions',
    'gallery.tab.os2': 'HyperOS 2',
    'gallery.tab.os3': 'HyperOS 3',

    // Footer
    'footer.copyright': 'HyperMods ROM. Demo version.',

    // Modal - Serial Registration
    'modal.title': 'Serial Key',
    'modal.tab.register': '📝 Register',
    'modal.tab.lookup': '🔍 Lookup',
    'modal.serial.label': 'Enter serial key:',
    'modal.serial.placeholder': 'E.g: 1a2b3c4d',
    'modal.email.label': 'Your email:',
    'modal.email.placeholder': 'email@example.com',
    'modal.device.label': 'Device:',
    'modal.device.placeholder': 'Type device name to search...',
    'modal.btn.register': 'Register',
    'modal.btn.cancel': 'Cancel',
    'modal.lookup.label': 'Serial or Email:',
    'modal.lookup.placeholder': 'Enter serial or email to lookup...',
    'modal.btn.lookup': '🔍 Lookup',
    'modal.result.title': 'Lookup Result',
    'modal.result.serial': 'Serial:',
    'modal.result.email': 'Email:',
    'modal.result.device': 'Device:',
    'modal.result.date': 'Registration Date:',
    'modal.result.status': 'Status:',
    'modal.notfound': 'Registration information not found.',
    'modal.notfound.hint': 'Please check your serial or email again.',

    // Downloads Page
    'downloads.title': 'Download HyperMods ROM',
    'downloads.subtitle': 'Select the correct device and current base ROM to ensure safe flashing. Each ROM is optimized for specific devices.',
    'downloads.search.placeholder': 'Search devices...',
    'downloads.devices': 'devices',
    'downloads.category.all': 'All',
    'downloads.category.xiaomi': 'Xiaomi',
    'downloads.category.redmi': 'Redmi',
    'downloads.category.poco': 'POCO',
    'downloads.category.pad': 'Pad',
    'downloads.btn.download': 'Download',
    'downloads.coming': '🔜 Coming Soon',
    'downloads.noresults': 'No matching devices found.',
    'downloads.noresults.hint': 'Try searching with different keywords or select another category.',
    'downloads.info.title': 'ℹ️ Version Info',
    'downloads.info.hyperos': 'HyperOS:',
    'downloads.info.android': 'Android:',
    'downloads.info.chip': 'Chip:',
    'downloads.info.base': 'Base:',
    'downloads.support.title': '💬 Support',
    'downloads.support.desc': 'Join our community for quick support!',
    'downloads.guide.title': '📖 Flash Guide',
    'downloads.guide.1': 'Backup important data',
    'downloads.guide.2': 'Download correct ROM for device',
    'downloads.guide.3': 'Flash via Recovery (TWRP)',
    'downloads.guide.4': 'Wipe cache & Dalvik',
    'downloads.guide.5': 'Reboot',
    'downloads.guide.warning': '⚠️ Flashing wrong ROM may brick your device!',

    // Features Page
    'features.title': 'Key Features',
    'features.subtitle': 'HyperMods is not just a ROM, but an optimized ecosystem for all needs: gaming, work, study and entertainment.',
    'features.new': 'New Features',
    'features.new.desc': 'Exclusive features added',
    'features.improved': 'Improvements',
    'features.improved.desc': 'Optimizations and upgrades',
    'features.fixed': 'Bug Fixes',
    'features.fixed.desc': 'Issues that have been resolved',
    'features.apps': 'Modded Apps',
    'features.apps.desc': 'Optimized system apps',
    'features.cta.title': 'Ready to Experience?',
    'features.cta.desc': 'Download HyperMods ROM now to explore all these amazing features!',
    'features.cta.btn': '⬇️ Download Now',

    // Donate Page
    'donate.title': 'Support HyperMods Project',
    'donate.subtitle': 'If you find HyperMods useful, you can support the team through the methods below to maintain servers, test devices and development time.',
    'donate.thanks.title': 'Thank You!',
    'donate.thanks.desc': 'Every contribution, big or small, helps HyperMods project grow sustainably. We appreciate your support!',

    // Common
    'common.stable': 'Stable',
    'common.dev': 'Dev',
  }
};

// i18n Manager
const i18n = {
  currentLang: 'vi',
  LANG_KEY: 'hypermods-lang',

  init() {
    // Load saved language
    const savedLang = localStorage.getItem(this.LANG_KEY);
    if (savedLang && translations[savedLang]) {
      this.currentLang = savedLang;
    }
    this.updatePage();
    this.updateLangButton();
  },

  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem(this.LANG_KEY, lang);
      this.updatePage();
      this.updateLangButton();
    }
  },

  toggleLanguage() {
    const newLang = this.currentLang === 'vi' ? 'en' : 'vi';
    this.setLanguage(newLang);
  },

  t(key) {
    return translations[this.currentLang][key] || translations['vi'][key] || key;
  },

  updatePage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      if (translation) {
        el.textContent = translation;
      }
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.t(key);
      if (translation) {
        el.placeholder = translation;
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang;
  },

  updateLangButton() {
    const langBtn = document.getElementById('btn-lang-toggle');
    if (langBtn) {
      const langText = langBtn.querySelector('.lang-text');
      if (langText) {
        langText.textContent = this.currentLang.toUpperCase();
      }
    }
  }
};

// Initialize i18n when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  i18n.init();

  // Language toggle button
  const langToggleBtn = document.getElementById('btn-lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      i18n.toggleLanguage();
    });
  }
});

