// i18n - Internationalization Support
const translations = {
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.features': 'Tính năng',
    'nav.download': 'Tải ROM',
    'nav.guide': 'Hướng dẫn',
    'nav.donate': 'Donate',
    'nav.serial': 'Đăng ký serial',

    // Hero Section
    'hero.badge': 'HyperUR • Bản mod tối ưu toàn diện',
    'hero.title': 'HyperUR',
    'hero.subtitle': 'Nâng cấp trải nghiệm Android của bạn với ROM mod được tối ưu sâu về hiệu năng, pin, độ ổn định và bảo mật – vẫn giữ giao diện thân thiện, dễ dùng.',
    'hero.btn.download': 'Tải HyperUR',
    'hero.btn.features': 'Xem tính năng',
    'hero.list.1': '⚡ Tối ưu hiệu năng cho game & đa nhiệm',
    'hero.list.2': '🔋 Quản lý pin thông minh, giảm app chạy nền',
    'hero.list.3': '🛡️ Bảo mật tăng cường, chặn quảng cáo hệ thống',

    // Version Card
    'version.title': 'Phiên bản hiện tại',
    'version.name': 'HyperUR Hybrid 1.0',
    'version.android': 'Android:',
    'version.chip': 'Chip:',
    'version.base': 'Base:',
    'version.security': 'Security:',
    'version.security.value': 'Patch mới nhất',
    'version.btn': 'Tải bản mới nhất',
    'version.note': '* Vui lòng đọc kỹ hướng dẫn cài đặt trước khi flash ROM.',

    // Home Features
    'home.features.title': 'Tại sao chọn HyperUR?',
    'home.features.subtitle': 'Những điểm nổi bật làm nên sự khác biệt của HyperUR',
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
    'gallery.subtitle': 'Khám phá giao diện HyperUR trên các phiên bản HyperOS',
    'gallery.tab.os2': 'HyperOS 2',
    'gallery.tab.os3': 'HyperOS 3',

    // Footer
    'footer.copyright': 'HyperUR. Phiên bản demo trang giới thiệu.',

    // Downloads Page
    'downloads.title': 'Tải HyperUR',
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
    'features.subtitle': 'HyperUR không chỉ là một bản ROM, mà là hệ sinh thái tối ưu cho mọi nhu cầu: chơi game, làm việc, học tập và giải trí.',
    'features.new': 'Tính năng mới',
    'features.new.desc': 'Những tính năng độc quyền được bổ sung',
    'features.improved': 'Cải thiện',
    'features.improved.desc': 'Các tối ưu hóa và nâng cấp',
    'features.fixed': 'Sửa lỗi',
    'features.fixed.desc': 'Các vấn đề đã được khắc phục',
    'features.apps': 'Ứng dụng đã mod',
    'features.apps.desc': 'Các app hệ thống được tối ưu',
    'features.cta.title': 'Sẵn sàng trải nghiệm?',
    'features.cta.desc': 'Tải ngay HyperUR để khám phá tất cả tính năng tuyệt vời này!',
    'features.cta.btn': '⬇️ Tải ngay',

    // Donate Page
    'donate.title': 'Ủng hộ dự án HyperUR',
    'donate.subtitle': 'Nếu bạn thấy HyperUR hữu ích, có thể ủng hộ team thông qua các phương thức bên dưới để duy trì server, thiết bị test và thời gian phát triển.',
    'donate.thanks.title': 'Cảm ơn bạn!',
    'donate.thanks.desc': 'Mọi đóng góp dù lớn hay nhỏ đều giúp dự án HyperUR phát triển bền vững. Chúng tôi trân trọng sự ủng hộ của bạn!',

    // Serial Page
    'serial.page.title': 'Đăng ký HYPER UR',
    'serial.page.desc': 'Đăng ký serial key cho HyperUR ROM mod.',
    'serial.form.title': 'Đăng ký HYPER UR',
    'serial.form.subtitle': 'Vui lòng đọc kỹ khi đăng ký',
    'serial.label.email': 'Email',
    'serial.label.serial': 'Số serial thiết bị',
    'serial.label.codename': 'Mã thiết bị (Codename)',
    'serial.label.telegram': 'Telegram',
    'serial.label.regType': 'Loại đăng ký',
    'serial.label.paymentMethod': 'Phương thức ủng hộ',
    'serial.label.developer': 'Chọn Developer',
    'serial.btn.selectDev': 'Chọn Developer & Xem QR Momo',
    'serial.label.developer': 'Chọn Developer',
    'serial.label.senderName': 'Tên người gửi',
    'serial.label.amount': 'Số tiền ủng hộ',
    'serial.label.transaction': 'Nội dung + Mã giao dịch',
    'serial.placeholder.email': 'email@example.com',
    'serial.placeholder.serial': 'Chỉ nhập serial',
    'serial.placeholder.codename': 'Nhập codename (ví dụ: fuxi)',
    'serial.placeholder.telegram': '@username',
    'serial.placeholder.amount': 'VNĐ',
    'serial.placeholder.transaction': 'Nhập nội dung chuyển khoản và mã giao dịch...',
    'serial.option.paid': 'Đăng ký có ủng hộ (Vĩnh viễn)',
    'serial.option.free': 'Đăng ký miễn phí',
    'serial.option.selectPayment': 'Chọn phương thức thanh toán',
    'serial.option.momo': 'Momo',
    'serial.option.binance': 'Binance',
    'serial.option.paypal': 'PayPal',
    'serial.btn.register': 'Đăng ký',
    'serial.success': 'Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.',
    'serial.device.found': 'Không tìm thấy thiết bị',
    'serial.popup.desc': 'Ủng hộ qua ví Momo của Developer đã chọn',
    'serial.popup.scan': 'Quét mã QR bằng ứng dụng Momo để ủng hộ',
    'serial.lookup.title': 'Tra cứu serial đã đăng ký',
    'serial.lookup.desc': 'Nhập serial hoặc email đã đăng ký để tra cứu thông tin',

    // Common
    'common.stable': 'Stable',
    'common.dev': 'Dev',

    // Guide Page
    'nav.guide': 'Hướng dẫn',
    'guide.hero.title': 'Hướng dẫn Flash ROM',
    'guide.hero.subtitle': 'Hướng dẫn chi tiết cách flash ROM HyperUR an toàn trên thiết bị Xiaomi, Redmi, POCO. Vui lòng đọc kỹ trước khi thực hiện.',
    'guide.toc.title': 'Mục lục',
    'guide.toc.1': 'Chuẩn bị',
    'guide.toc.2': 'Cài Recovery',
    'guide.toc.3': 'Flash ROM qua Recovery',
    'guide.toc.4': 'Flash ROM qua Fastboot',
    'guide.toc.5': 'Wipe Data & Restore',
    'guide.toc.6': 'Lỗi thường gặp',
    'guide.toc.7': 'Câu hỏi thường gặp',
    'guide.section1.title': 'Chuẩn bị trước khi flash',
    'guide.section1.subtitle': 'Những thứ bạn cần có trước khi bắt đầu',
    'guide.section1.device.title': 'Thiết bị & Yêu cầu',
    'guide.section1.device.item1': 'Thiết bị Xiaomi/Redmi/POCO đã được hỗ trợ',
    'guide.section1.device.item2': 'Dung lượng pin trên 50% (khuyến nghị trên 80%)',
    'guide.section1.device.item3': 'Sạc đầy pin trước khi flash để tránh brick máy',
    'guide.section1.pc.title': 'Thiết bị máy tính',
    'guide.section1.pc.item1': 'Máy tính Windows (Windows 10/11 khuyến nghị)',
    'guide.section1.pc.item2': 'Cáp USB chất lượng tốt',
    'guide.section1.pc.item3': 'Cổng USB trực tiếp trên mainboard (tránh USB hub)',
    'guide.section1.download.title': 'Các file cần tải',
    'guide.section1.download.item1': 'ROM HyperUR - Tải từ trang Tải ROM',
    'guide.section1.download.item2': 'ADB & Fastboot - Tải từ Android SDK Platform Tools',
    'guide.section1.download.item3': 'TWRP/OFRP - Recovery phù hợp với thiết bị',
    'guide.section1.warning': 'Sao lưu toàn bộ dữ liệu trước khi flash. Mọi dữ liệu sẽ bị xóa khi Wipe Data.',
    'guide.section2.title': 'Cài Recovery (TWRP/OFRP)',
    'guide.section2.subtitle': 'Recovery là môi trường để flash ROM và thực hiện các thao tác nâng cao',
    'guide.section2.twrp.title': 'Cách cài TWRP Recovery',
    'guide.section2.twrp.item1': 'Tải file TWRP img phù hợp với thiết bị',
    'guide.section2.twrp.item2': 'Đổi tên file thành twrp.img và lưu vào thư mục ADB',
    'guide.section2.twrp.item3': 'Vào chế độ Fastboot (tắt máy → Power + Volume Down)',
    'guide.section2.twrp.item4': 'Kết nối USB với máy tính',
    'guide.section2.twrp.item5': 'Mở CMD/Terminal trong thư mục ADB, chạy lệnh:',
    'guide.section2.twrp.item6': 'Sau khi flash xong, khởi động vào TWRP:',
    'guide.section2.ofrp.title': 'Cài OFRP Recovery',
    'guide.section2.ofrp.item1': 'Tải OFRP từ trang chính thức phù hợp với thiết bị',
    'guide.section2.ofrp.item2': 'Đặt file .zip vào bộ nhớ trong hoặc thẻ SD',
    'guide.section2.ofrp.item3': 'Vào Recovery (TWRP) đã cài ở trên',
    'guide.section2.ofrp.item4': 'Chọn Install → Chọn file OFRP.zip',
    'guide.section2.ofrp.item5': 'Vuốt để xác nhận cài đặt',
    'guide.section2.ofrp.item6': 'Sau khi cài xong, khởi động lại vào OFRP',
    'guide.section3.title': 'Flash ROM qua Recovery',
    'guide.section3.subtitle': 'Cách flash ROM HyperUR qua Recovery (TWRP/OFRP)',
    'guide.section3.item1': 'Tải file ROM HyperUR phù hợp với thiết bị',
    'guide.section3.item2': 'Copy file ROM vào bộ nhớ trong hoặc thẻ SD',
    'guide.section3.item3': 'Vào Recovery (TWRP/OFRP)',
    'guide.section3.item4': 'Thực hiện Wipe trước khi cài (xem mục 5)',
    'guide.section3.item5': 'Chọn Install',
    'guide.section3.item6': 'Chọn file ROM HyperUR đã copy',
    'guide.section3.item7': 'Vuốt thanh trượt để flash',
    'guide.section3.item8': 'Đợi quá trình hoàn tất (5-15 phút)',
    'guide.section3.item9': 'Chọn Reboot → System',
    'guide.section4.title': 'Flash ROM qua Fastboot',
    'guide.section4.subtitle': 'Cách flash ROM HyperUR qua Flashing Tool trên máy tính',
    'guide.section4.item1': 'Tải ROM HyperUR (định dạng .tgz hoặc .zip)',
    'guide.section4.item2': 'Giải nén file ROM vào thư mục bất kỳ',
    'guide.section4.item3': 'Mở thư mục ROM đã giải nén',
    'guide.section4.item4': 'Double-click file Flashing_Tool_Windows_UR.bat',
    'guide.section4.item5': 'Công cụ sẽ tự động nhận diện thiết bị (nếu đã vào Fastboot mode)',
    'guide.section4.item6': 'Nếu chưa vào Fastboot: tắt máy → Power + Volume Down',
    'guide.section4.item7': 'Nhấn Flash và đợi hoàn tất (5-15 phút)',
    'guide.section4.tip': 'Tool sẽ tự động flash đúng các phân vùng cần thiết. Lần đầu khởi động ROM mới có thể mất 5-15 phút. Không tháo pin hay tắt nguồn trong quá trình này.',
    'guide.section5.title': 'Wipe Data & Restore',
    'guide.section5.subtitle': 'Hướng dẫn wipe đúng cách trước khi flash ROM mới',
    'guide.section5.before.title': 'Trước khi flash ROM mới (Nên làm)',
    'guide.section5.before.item1': 'Vào Wipe → Advanced Wipe',
    'guide.section5.before.item2': 'Chọn các phân vùng sau:',
    'guide.section5.before.item3': 'Vuốt để wipe',
    'guide.section5.partition.system': 'System',
    'guide.section5.partition.data': 'Data',
    'guide.section5.partition.cache': 'Cache',
    'guide.section5.partition.dalvik': 'Dalvik Cache',
    'guide.section5.cross.title': 'Chuyển từ ROM khác sang HyperUR (Bắt buộc)',
    'guide.section5.cross.item1': 'Vào Wipe → Format Data',
    'guide.section5.cross.item2': 'Gõ yes để xác nhận',
    'guide.section5.cross.item3': 'Đợi format hoàn tất',
    'guide.section5.cross.item4': 'Quay lại và thực hiện Advanced Wipe như trên',
    'guide.section5.restore.title': 'Restore dữ liệu sau khi cài xong',
    'guide.section5.restore.item1': 'Sau khi boot vào hệ thống lần đầu, không đăng nhập Google ngay',
    'guide.section5.restore.item2': 'Kết nối với máy tính qua MTP',
    'guide.section5.restore.item3': 'Copy lại dữ liệu cần thiết (ảnh, video, nhạc)',
    'guide.section5.restore.item4': 'Cài đặt lại các ứng dụng từ Google Play',
    'guide.section5.restore.item5': 'Restore dữ liệu từ Google Drive nếu đã backup',
    'guide.section5.restore.warning': 'Không restore dữ liệu từ ROM cũ bằng backup app (Titanium Backup) vì có thể gây xung đột.',
    'guide.section6.title': 'Lỗi thường gặp & cách khắc phục',
    'guide.section6.subtitle': 'Giải đáp các lỗi phổ biến khi flash ROM',
    'guide.section6.error1.title': 'Lỗi "Failed to boot" hoặc bootloop',
    'guide.section6.error1.cause': 'ROM không tương thích hoặc wipe chưa đủ',
    'guide.section6.error1.solution': 'Vào lại Recovery → Format Data lại → Wipe toàn bộ (System, Data, Cache, Dalvik) → Flash ROM lại',
    'guide.section6.error2.title': 'Lỗi "Encryption Failed"',
    'guide.section6.error2.cause': 'File ROM bị lỗi hoặc chưa format data',
    'guide.section6.error2.solution': 'Vào Recovery → Wipe → Format Data → Gõ "yes" → Flash ROM lại',
    'guide.section6.error3.title': 'Lỗi "Device encrypted unsuccessful"',
    'guide.section6.error3.cause': 'Không mount được data partition',
    'guide.section6.error3.solution': 'Vào TWRP → Wipe → Format Data → Reboot Recovery → Flash ROM',
    'guide.section6.error4.title': 'Không vào được Recovery',
    'guide.section6.error4.cause': 'Boot image bị hỏng',
    'guide.section6.error4.solution': 'Vào Fastboot mode → Flash lại recovery qua fastboot → Hoặc flash ROM gốc qua MiFlash',
    'guide.section7.title': 'Câu hỏi thường gặp (FAQ)',
    'guide.section7.subtitle': 'Giải đáp các thắc mắc phổ biến về HyperUR',
    'guide.section7.q1': 'HyperUR có an toàn không?',
    'guide.section7.q1.answer': 'HyperUR được phát triển dựa trên ROM gốc của Xiaomi với các tinh chỉnh tối ưu. ROM được test kỹ trước khi phát hành. Tuy nhiên, bạn nên backup dữ liệu trước khi flash.',
    'guide.section7.q2': 'Flash ROM có mất bảo hành không?',
    'guide.section7.q2.answer': 'Mở khóa Bootloader sẽ khiến thiết bị không còn được bảo hành chính hãng. Tuy nhiên, bạn có thể khóa lại Bootloader và ROM gốc để restore bảo hành.',
    'guide.section7.q3': 'Có thể quay lại ROM gốc không?',
    'guide.section7.q3.answer': 'Có. Bạn có thể flash ROM gốc qua MiFlash hoặc khóa lại Bootloader sau khi flash ROM gốc.',
    'guide.section7.q4': 'Dữ liệu có bị mất không?',
    'guide.section7.q4.answer': 'Có, toàn bộ dữ liệu sẽ bị xóa khi flash ROM mới. Hãy backup dữ liệu quan trọng trước khi thực hiện.',
    'guide.section7.q5': 'Bao lâu thì có bản cập nhật?',
    'guide.section7.q5.answer': 'HyperUR cập nhật theo chu kỳ của Xiaomi. Thường có bản cập nhật security patch hàng tháng và major update khi Xiaomi phát hành ROM mới.',
    'guide.section7.q6': 'Thiết bị của tôi không có trong danh sách?',
    'guide.section7.q6.answer': 'Hiện tại HyperUR chỉ hỗ trợ một số dòng thiết bị nhất định. Theo dõi trang Tải ROM để cập nhật danh sách thiết bị mới được hỗ trợ.',
    'guide.cta.title': 'Sẵn sàng trải nghiệm?',
    'guide.cta.desc': 'Tải HyperUR ngay để nâng cấp thiết bị của bạn!',
    'guide.cta.btn.download': 'Tải ROM',
    'guide.cta.btn.home': 'Về trang chủ',

    // Downloads Page Extended
    'downloads.hero.title': 'Tải HyperUR',
    'downloads.hero.subtitle': 'Chọn đúng dòng máy và base ROM hiện tại để đảm bảo quá trình flash an toàn. Mỗi bản ROM được tối ưu riêng cho từng thiết bị.',
    'downloads.search.placeholder': 'Tìm kiếm thiết bị hoặc codename...',
    'downloads.device.count': 'thiết bị',
    'downloads.devices.title': 'Danh sách ROM theo thiết bị',
    'downloads.category.tatca': 'Tất cả',
    'downloads.category.xiaomi': 'Xiaomi',
    'downloads.category.pad': 'Pad',
    'downloads.category.mix': 'MIX',
    'downloads.category.civi': 'Civi',
    'downloads.category.redmi': 'Redmi',
    'downloads.category.note': 'Note',
    'downloads.category.k': 'K Series',
    'downloads.category.poco': 'POCO',
    'downloads.noresults': 'Không tìm thấy thiết bị nào phù hợp.',
    'downloads.guide.card.title': 'Hướng dẫn cài đặt nhanh',
    'downloads.guide.card.item1': 'Sao lưu toàn bộ dữ liệu quan trọng.',
    'downloads.guide.card.item2': 'Mở khoá bootloader & cài custom recovery (TWRP / OFRP).',
    'downloads.guide.card.item3': 'Wipe data, cache, system theo hướng dẫn từng dòng máy.',
    'downloads.guide.card.item4': 'Flash bản HyperUR tương ứng.',
    'downloads.guide.card.item5': 'Reboot & chờ máy khởi động lại lần đầu.',
    'downloads.guide.card.warning': 'Việc can thiệp hệ thống luôn tiềm ẩn rủi ro. Bạn tự chịu trách nhiệm với thiết bị của mình.',
    'downloads.info.card.title': 'Thông tin phiên bản',
    'downloads.info.card.hyperos': 'HyperOS:',
    'downloads.info.card.android': 'Android:',
    'downloads.info.card.base': 'Base:',
    'downloads.support.card.title': 'Cần hỗ trợ?',
    'downloads.support.card.desc': 'Liên hệ team qua Telegram để được hỗ trợ cài đặt và fix lỗi.',

    // Modal Serial
    'modal.serial.register.title': 'Đăng ký serial',
    'modal.serial.register.serial.label': 'Nhập serial key:',
    'modal.serial.register.serial.placeholder': 'VD: 1a2b3c4d',
    'modal.serial.register.email.label': 'Email của bạn:',
    'modal.serial.register.email.placeholder': 'email@example.com',
    'modal.serial.register.device.label': 'Thiết bị:',
    'modal.serial.register.device.placeholder': 'VD: Redmi k60 pro - socrates',
    'modal.serial.register.btn': 'Đăng ký',
    'modal.serial.register.cancel': 'Hủy',
    'modal.serial.register.success': 'Đăng ký serial thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.',
    'modal.serial.lookup.btn': 'Tra cứu',
    'modal.lookup.title': 'Tra cứu serial',
    'modal.lookup.label': 'Serial hoặc Email:',
    'modal.lookup.placeholder': 'Nhập serial hoặc email để tra cứu...',
    'modal.btn.lookup': 'Tra cứu',
    'modal.result.title': 'Kết quả tra cứu',
    'modal.result.serial': 'Serial:',
    'modal.result.email': 'Email:',
    'modal.result.device': 'Thiết bị:',
    'modal.result.date': 'Ngày đăng ký:',
    'modal.result.status': 'Trạng thái:',
    'modal.notfound': 'Không tìm thấy thông tin đăng ký.',
    'modal.notfound.hint': 'Vui lòng kiểm tra lại serial hoặc email của bạn.',
    'serial.register.desc': 'Nhập thông tin để đăng ký serial key của bạn',
    'serial.lookup.desc': 'Nhập serial hoặc email để tra cứu thông tin đăng ký',
    'serial.notice.title': 'Lưu ý khi ủng hộ',
    'serial.notice.intro': 'Anh em ủng hộ xong vui lòng gửi bill cho dev để được active vĩnh viễn nhé.',
    'serial.notice.section.transfer': 'Nội dung chuyển khoản',
    'serial.notice.section.transfer.content': 'UR + Serial + Mail hoặc tên máy',
    'serial.notice.section.amount': 'Mức ủng hộ',
    'serial.notice.section.amount.min': 'Tối thiểu: 36k',
    'serial.notice.section.amount.max': 'Không giới hạn, anh em tùy tâm ❤️',
    'serial.notice.section.intl': 'Thanh toán quốc tế',
    'serial.notice.section.free': 'Đối với anh em sử dụng active free',
    'serial.notice.section.free.content': 'Thời hạn sử dụng sẽ là 36 ngày. Đây là thời gian để anh em trải nghiệm và thử nghiệm ROM xem có ổn định, phù hợp và xứng đáng để dùng lâu dài hay không.',
    'serial.notice.section.paid': 'Đối với anh em đã ủng hộ',
    'serial.notice.section.paid.content': 'Sẽ được active vĩnh viễn cho đến khi thiết bị không còn được update hỗ trợ nữa.',
    'serial.notice.section.dev': 'Thông tin Developer',
    'serial.notice.section.otherdev': '📌 Ủng hộ cho Developer nào thì vui lòng gửi bill và mã serial trực tiếp cho Developer đó.',
    'serial.notice.thanks': 'Xin cảm ơn anh em đã ủng hộ!',
    'modal.tab.register': 'Đăng ký',
    'modal.tab.lookup': 'Tra cứu',
    'modal.device.placeholder': 'Nhập tên thiết bị để tìm kiếm...',

    // Donate Page Extended
    'donate.hero.title': 'Ủng hộ dự án HyperUR',
    'donate.hero.subtitle': 'Nếu bạn thấy HyperUR hữu ích, có thể ủng hộ team thông qua các phương thức bên dưới để duy trì server, thiết bị test và thời gian phát triển.',
    'donate.section.luc.title': 'LucNguyen06',
    'donate.section.luc.role': 'Developer & Maintainer',
    'donate.method.momo': 'Momo',
    'donate.method.momo.desc': 'Ủng hộ qua ví Momo',
    'donate.method.bank': 'Ngân hàng',
    'donate.method.bank.desc': 'Chuyển khoản ngân hàng',
    'donate.method.paypal': 'PayPal',
    'donate.method.paypal.desc': 'Ủng hộ quốc tế qua PayPal',
    'donate.method.crypto': 'Binance',
    'donate.method.crypto.desc': 'Ủng hộ bằng Crypto',
    'donate.section.usagi.title': 'Usagi',
    'donate.section.usagi.role': 'Developer & Support',
    'donate.method.telegram': 'Liên hệ hỗ trợ',
    'donate.method.telegram.desc': 'Nhắn trực tiếp qua Telegram để được hỗ trợ cài đặt, fix lỗi ROM, tư vấn thiết bị và các vấn đề liên quan đến HyperUR.',
    'donate.thanks.title': 'Cảm ơn bạn!',
    'donate.thanks.desc': 'Mọi đóng góp dù lớn hay nhỏ đều giúp team có thêm động lực để tiếp tục phát triển và cải thiện HyperUR. Chúng tôi rất trân trọng sự ủng hộ của bạn!',

    // Features Page Extended
    'features.hero.title': 'Tính năng nổi bật',
    'features.hero.subtitle': 'HyperUR không chỉ là một bản ROM, mà là hệ sinh thái tối ưu cho mọi nhu cầu: chơi game, làm việc, học tập và giải trí.',
    'features.category.new': 'Tính năng mới',
    'features.category.new.desc': 'Các tính năng được thêm vào HyperUR',
    'features.category.improved': 'Cải thiện',
    'features.category.improved.desc': 'Các cải tiến và tối ưu hóa',
    'features.category.fixed': 'Đã sửa lỗi',
    'features.category.fixed.desc': 'Các lỗi đã được khắc phục',
    'features.category.apps': 'Ứng dụng được mod',
    'features.category.apps.desc': '16 ứng dụng hệ thống đã được tối ưu',
    'app.FileExplorer': 'File Explorer',
    'app.Joyose': 'Joyose',
    'app.MiMediaEditor': 'Mi Media Editor',
    'app.MiuiExtraPhoto': 'Miui Extra Photo',
    'app.MiuiGallery': 'Miui Gallery',
    'app.MiuiHome': 'Miui Home',
    'app.MiuiPackageInstaller': 'Miui Package Installer',
    'app.MiuiScanner': 'Miui Scanner',
    'app.MiuiScreenRecorder': 'Miui Screen Recorder',
    'app.MiuiScreenshot': 'Miui Screenshot',
    'app.MiuiSystemUIPlugin': 'Miui SystemUI Plugin',
    'app.Notes': 'Notes',
    'app.PowerKeeper': 'PowerKeeper',
    'app.SecurityCenter': 'Security Center',
    'app.SoundRecorder': 'Sound Recorder',
    'app.Weather': 'Weather',
    'features.highlight.gaming.title': 'Gaming Mode',
    'features.highlight.gaming.desc': 'Tối ưu cho PUBG, Free Fire, COD với hiệu năng cao nhất, giảm lag, ổn định FPS.',
    'features.highlight.battery.title': 'Battery Optimization',
    'features.highlight.battery.desc': 'Quản lý pin thông minh, giảm app chạy nền, kéo dài thời gian sử dụng.',
    'features.highlight.security.title': 'Security Enhanced',
    'features.highlight.security.desc': 'Bảo mật tăng cường, chặn quảng cáo hệ thống, bảo vệ quyền riêng tư.',
    'features.highlight.photos.title': 'Google Photos Unlimited',
    'features.highlight.photos.desc': 'Sao lưu ảnh và video không giới hạn lên Google Photos miễn phí.',
    'features.cta.title': 'Sẵn sàng trải nghiệm?',
    'features.cta.desc': 'Tải HyperUR ngay để nâng cấp thiết bị của bạn!',
    'features.cta.btn': 'Tải HyperUR',
    'features.page.title': 'Tính năng HyperUR',

    // Changelog - New Features (added)
    'changelog.added.1': 'Gaming Mode tối ưu cho PUBG/BGMI, Free Fire, Call of Duty, COD Warzone',
    'changelog.added.2': 'Hỗ trợ ép 120Hz cho mọi ứng dụng',
    'changelog.added.3': 'Tần số quét linh hoạt: 1Hz / 60Hz / 90Hz / 120Hz',
    'changelog.added.4': 'Sao lưu Google Photos không giới hạn',
    'changelog.added.5': 'Tắt xác minh chữ ký app',
    'changelog.added.6': 'CorePatch & Tắt cờ bảo mật',
    'changelog.added.7': 'Multi-window đa nhiệm thông minh',
    'changelog.added.8': 'AOD nâng cao với màn hình khóa tùy chỉnh',
    'changelog.added.9': 'Lịch âm tích hợp trong trung tâm điều khiển',
    'changelog.added.10': 'HyperUR App với tính năng Spoof Tweaks',
    'changelog.added.11': 'Keybox Manager',
    'changelog.added.12': 'Play Store Spoof',
    'changelog.added.13': 'Games Spoof',
    'changelog.added.14': 'Messenger Spoof',
    'changelog.added.15': 'LiveBridge - Mirror OTP & progress notifications',
    'changelog.added.16': 'Performance Overlay',
    'changelog.added.17': 'Disable Flag Secure',
    'changelog.added.18': 'Max FPS in All Apps',
    'changelog.added.19': 'USB Debugging & Developer Options',
    'changelog.added.20': 'Private DNS Manager',
    'changelog.added.21': 'Hỗ trợ HyperOS 1.0 (Android 14)',
    'changelog.added.22': 'Hỗ trợ HyperOS 2.0 (Android 14 - 15)',
    'changelog.added.23': 'Hỗ trợ HyperOS 3.0 (Android 15 - 16)',
    'changelog.added.24': 'Hỗ trợ toàn bộ dòng máy Snapdragon',

    // Changelog - Improved
    'changelog.improved.1': 'Tối ưu quản lý RAM & GPU cho game',
    'changelog.improved.2': 'Giảm nhiệt, ổn định khung hình khi chơi game',
    'changelog.improved.3': 'Cải thiện hiệu năng hệ thống lên 25%',
    'changelog.improved.4': 'Tối ưu hoa thời lượng pin',
    'changelog.improved.5': 'Cải thiện độ mượt với 120Hz toàn hệ thống',
    'changelog.improved.6': 'Tối ưu tương thích với dòng máy Snapdragon',
    'changelog.improved.7': 'Cải thiện UI/UX với giao diện tùy chỉnh',
    'changelog.improved.8': 'Tối ưu tương thích với ứng dụng MIUI',
    'changelog.improved.9': 'Cải thiện độ ổn định từ ROM stock',

    // Changelog - Fixed
    'changelog.fixed.1': 'Sửa lỗi crash khi ép tần số quét cao',
    'changelog.fixed.2': 'Sửa lỗi Gaming Mode không hoạt động trên một số game',
    'changelog.fixed.3': 'Sửa lỗi Google Photos backup không giới hạn',
    'changelog.fixed.4': 'Sửa lỗi CorePatch trên một số thiết bị',
    'changelog.fixed.5': 'Sửa lỗi Multi-window không hiển thị đúng',
    'changelog.fixed.6': 'Cải thiện độ ổn định toàn bộ',
    'changelog.fixed.7': 'Sửa lỗi tương thích với một số ứng dụng',
    'changelog.fixed.8': 'Sửa lỗi bootloop trên một số thiết bị',
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.guide': 'Guide',
    'nav.donate': 'Donate',
    'nav.serial': 'Register Serial',

    // Hero Section
    'hero.badge': 'HyperUR • Fully Optimized Mod',
    'hero.title': 'HyperUR',
    'hero.subtitle': 'Upgrade your Android experience with a ROM optimized for performance, battery, stability and security – while keeping a friendly, easy-to-use interface.',
    'hero.btn.download': 'Download HyperUR',
    'hero.btn.features': 'View Features',
    'hero.list.1': '⚡ Optimized performance for gaming & multitasking',
    'hero.list.2': '🔋 Smart battery management, reduce background apps',
    'hero.list.3': '🛡️ Enhanced security, block system ads',

    // Version Card
    'version.title': 'Current Version',
    'version.name': 'HyperUR Hybrid 1.0',
    'version.android': 'Android:',
    'version.chip': 'Chip:',
    'version.base': 'Base:',
    'version.security': 'Security:',
    'version.security.value': 'Latest Patch',
    'version.btn': 'Download Latest',
    'version.note': '* Please read the installation guide carefully before flashing ROM.',

    // Home Features
    'home.features.title': 'Why Choose HyperUR?',
    'home.features.subtitle': 'Key highlights that make HyperUR different',
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
    'gallery.subtitle': 'Explore HyperUR interface on HyperOS versions',
    'gallery.tab.os2': 'HyperOS 2',
    'gallery.tab.os3': 'HyperOS 3',

    // Footer
    'footer.copyright': 'HyperUR. Demo version.',

    // Downloads Page
    'downloads.title': 'Download HyperUR',
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
    'features.subtitle': 'HyperUR is not just a ROM, but an optimized ecosystem for all needs: gaming, work, study and entertainment.',
    'features.new': 'New Features',
    'features.new.desc': 'Exclusive features added',
    'features.improved': 'Improvements',
    'features.improved.desc': 'Optimizations and upgrades',
    'features.fixed': 'Bug Fixes',
    'features.fixed.desc': 'Issues that have been resolved',
    'features.apps': 'Modded Apps',
    'features.apps.desc': 'Optimized system apps',
    'features.cta.title': 'Ready to Experience?',
    'features.cta.desc': 'Download HyperUR now to explore all these amazing features!',
    'features.cta.btn': '⬇️ Download Now',

    // Donate Page
    'donate.title': 'Support HyperUR Project',
    'donate.subtitle': 'If you find HyperUR useful, you can support the team through the methods below to maintain servers, test devices and development time.',
    'donate.thanks.title': 'Thank You!',
    'donate.thanks.desc': 'Every contribution, big or small, helps HyperUR project grow sustainably. We appreciate your support!',

    // Serial Page
    'serial.page.title': 'Register HYPER UR',
    'serial.page.desc': 'Register serial key for HyperUR ROM mod.',
    'serial.form.title': 'Register HYPER UR',
    'serial.form.subtitle': 'Please read carefully before registering',
    'serial.label.email': 'Email',
    'serial.label.serial': 'Device serial number',
    'serial.label.codename': 'Device codename',
    'serial.label.telegram': 'Telegram',
    'serial.label.regType': 'Registration type',
    'serial.label.paymentMethod': 'Support method',
    'serial.label.senderName': 'Sender name',
    'serial.label.amount': 'Amount',
    'serial.label.transaction': 'Transaction content + ID',
    'serial.placeholder.email': 'email@example.com',
    'serial.placeholder.serial': 'Enter serial only',
    'serial.placeholder.codename': 'Enter codename (e.g.: fuxi)',
    'serial.placeholder.telegram': '@username',
    'serial.placeholder.amount': 'VND',
    'serial.placeholder.transaction': 'Enter transaction details and transaction ID...',
    'serial.option.paid': 'Paid registration (Lifetime)',
    'serial.option.free': 'Free registration',
    'serial.option.selectPayment': 'Select payment method',
    'serial.option.momo': 'Momo',
    'serial.option.binance': 'Binance',
    'serial.option.paypal': 'PayPal',
    'serial.btn.register': 'Register',
    'serial.success': 'Registration successful! We will contact you as soon as possible.',
    'serial.device.found': 'No device found',
    'serial.label.developer': 'Select Developer',
    'serial.btn.selectDev': 'Select Developer & View QR Momo',
    'serial.popup.desc': 'Donate via Developer\'s Momo wallet',
    'serial.popup.scan': 'Scan QR code with Momo app to donate',
    'serial.lookup.title': 'Lookup Registered Serial',
    'serial.lookup.desc': 'Enter your registered serial or email to lookup information',

    // Common
    'common.stable': 'Stable',
    'common.dev': 'Dev',

    // Guide Page
    'nav.guide': 'Guide',
    'guide.hero.title': 'ROM Flashing Guide',
    'guide.hero.subtitle': 'Detailed guide on how to safely flash HyperUR ROM on Xiaomi, Redmi, POCO devices. Please read carefully before proceeding.',
    'guide.toc.title': 'Table of Contents',
    'guide.toc.1': 'Preparation',
    'guide.toc.2': 'Install Recovery',
    'guide.toc.3': 'Flash ROM via Recovery',
    'guide.toc.4': 'Flash ROM via Fastboot',
    'guide.toc.5': 'Wipe Data & Restore',
    'guide.toc.6': 'Common Errors',
    'guide.toc.7': 'FAQ',
    'guide.section1.title': 'Preparation before flashing',
    'guide.section1.subtitle': 'What you need before starting',
    'guide.section1.device.title': 'Device & Requirements',
    'guide.section1.device.item1': 'Supported Xiaomi/Redmi/POCO device',
    'guide.section1.device.item2': 'Battery above 50% (80% recommended)',
    'guide.section1.device.item3': 'Fully charge before flashing to avoid bricking',
    'guide.section1.pc.title': 'Computer Equipment',
    'guide.section1.pc.item1': 'Windows computer (Windows 10/11 recommended)',
    'guide.section1.pc.item2': 'Good quality USB cable',
    'guide.section1.pc.item3': 'USB port directly on motherboard (avoid USB hub)',
    'guide.section1.download.title': 'Files to download',
    'guide.section1.download.item1': 'HyperUR ROM - Download from Downloads page',
    'guide.section1.download.item2': 'ADB & Fastboot - Download from Android SDK Platform Tools',
    'guide.section1.download.item3': 'TWRP/OFRP - Recovery compatible with your device',
    'guide.section1.warning': 'Backup all data before flashing. All data will be deleted when Wipe Data.',
    'guide.section2.title': 'Install Recovery (TWRP/OFRP)',
    'guide.section2.subtitle': 'Recovery is the environment to flash ROM and perform advanced operations',
    'guide.section2.twrp.title': 'How to install TWRP Recovery',
    'guide.section2.twrp.item1': 'Download TWRP img file compatible with your device',
    'guide.section2.twrp.item2': 'Rename file to twrp.img and save to ADB folder',
    'guide.section2.twrp.item3': 'Enter Fastboot mode (power off → Power + Volume Down)',
    'guide.section2.twrp.item4': 'Connect USB to computer',
    'guide.section2.twrp.item5': 'Open CMD/Terminal in ADB folder, run command:',
    'guide.section2.twrp.item6': 'After flashing, boot into TWRP:',
    'guide.section2.ofrp.title': 'Install OFRP Recovery',
    'guide.section2.ofrp.item1': 'Download OFRP from official page compatible with your device',
    'guide.section2.ofrp.item2': 'Place .zip file in internal storage or SD card',
    'guide.section2.ofrp.item3': 'Enter Recovery (TWRP) installed above',
    'guide.section2.ofrp.item4': 'Select Install → Select OFRP.zip file',
    'guide.section2.ofrp.item5': 'Swipe to confirm installation',
    'guide.section2.ofrp.item6': 'After installation, reboot into OFRP',
    'guide.section3.title': 'Flash ROM via Recovery',
    'guide.section3.subtitle': 'How to flash HyperUR ROM via Recovery (TWRP/OFRP)',
    'guide.section3.item1': 'Download HyperUR ROM file compatible with your device',
    'guide.section3.item2': 'Copy ROM file to internal storage or SD card',
    'guide.section3.item3': 'Enter Recovery (TWRP/OFRP)',
    'guide.section3.item4': 'Perform Wipe before installing (see section 5)',
    'guide.section3.item5': 'Select Install',
    'guide.section3.item6': 'Select copied HyperUR ROM file',
    'guide.section3.item7': 'Swipe slider to flash',
    'guide.section3.item8': 'Wait for process to complete (5-15 minutes)',
    'guide.section3.item9': 'Select Reboot → System',
    'guide.section4.title': 'Flash ROM via Fastboot',
    'guide.section4.subtitle': 'How to flash HyperUR ROM via Flashing Tool on computer',
    'guide.section4.item1': 'Download HyperUR ROM (.tgz or .zip format)',
    'guide.section4.item2': 'Extract ROM file to any folder',
    'guide.section4.item3': 'Open extracted ROM folder',
    'guide.section4.item4': 'Double-click Flashing_Tool_Windows_UR.bat file',
    'guide.section4.item5': 'Tool will auto-detect device (if already in Fastboot mode)',
    'guide.section4.item6': 'If not in Fastboot: power off → Power + Volume Down',
    'guide.section4.item7': 'Press Flash and wait for completion (5-15 minutes)',
    'guide.section4.tip': 'Tool will automatically flash correct partitions. First boot of new ROM may take 5-15 minutes. Do not remove battery or power off during this process.',
    'guide.section5.title': 'Wipe Data & Restore',
    'guide.section5.subtitle': 'Guide to wipe correctly before flashing new ROM',
    'guide.section5.before.title': 'Before flashing new ROM (Recommended)',
    'guide.section5.before.item1': 'Go to Wipe → Advanced Wipe',
    'guide.section5.before.item2': 'Select following partitions:',
    'guide.section5.before.item3': 'Swipe to wipe',
    'guide.section5.partition.system': 'System',
    'guide.section5.partition.data': 'Data',
    'guide.section5.partition.cache': 'Cache',
    'guide.section5.partition.dalvik': 'Dalvik Cache',
    'guide.section5.cross.title': 'Switching from other ROM to HyperUR (Required)',
    'guide.section5.cross.item1': 'Go to Wipe → Format Data',
    'guide.section5.cross.item2': 'Type yes to confirm',
    'guide.section5.cross.item3': 'Wait for format to complete',
    'guide.section5.cross.item4': 'Go back and perform Advanced Wipe as above',
    'guide.section5.restore.title': 'Restore data after installation',
    'guide.section5.restore.item1': 'After first boot into system, do not login to Google yet',
    'guide.section5.restore.item2': 'Connect to computer via MTP',
    'guide.section5.restore.item3': 'Copy necessary data (photos, videos, music)',
    'guide.section5.restore.item4': 'Reinstall apps from Google Play',
    'guide.section5.restore.item5': 'Restore data from Google Drive if backed up',
    'guide.section5.restore.warning': 'Do not restore data from old ROM using app backup (Titanium Backup) as it may cause conflicts.',
    'guide.section6.title': 'Common Errors & Solutions',
    'guide.section6.subtitle': 'Answers to common issues when flashing ROM',
    'guide.section6.error1.title': 'Error "Failed to boot" or bootloop',
    'guide.section6.error1.cause': 'ROM incompatible or wipe not sufficient',
    'guide.section6.error1.solution': 'Enter Recovery → Format Data → Wipe all (System, Data, Cache, Dalvik) → Flash ROM again',
    'guide.section6.error2.title': 'Error "Encryption Failed"',
    'guide.section6.error2.cause': 'ROM file corrupted or data not formatted',
    'guide.section6.error2.solution': 'Enter Recovery → Wipe → Format Data → Type "yes" → Flash ROM again',
    'guide.section6.error3.title': 'Error "Device encrypted unsuccessful"',
    'guide.section6.error3.cause': 'Cannot mount data partition',
    'guide.section6.error3.solution': 'Enter TWRP → Wipe → Format Data → Reboot Recovery → Flash ROM',
    'guide.section6.error4.title': 'Cannot enter Recovery',
    'guide.section6.error4.cause': 'Boot image corrupted',
    'guide.section6.error4.solution': 'Enter Fastboot mode → Flash recovery again via fastboot → Or flash stock ROM via MiFlash',
    'guide.section7.title': 'Frequently Asked Questions (FAQ)',
    'guide.section7.subtitle': 'Answers to common questions about HyperUR',
    'guide.section7.q1': 'Is HyperUR safe?',
    'guide.section7.q1.answer': 'HyperUR is developed based on Xiaomi stock ROM with optimized tweaks. ROM is thoroughly tested before release. However, you should backup data before flashing.',
    'guide.section7.q2': 'Will flashing ROM void warranty?',
    'guide.section7.q2.answer': 'Unlocking Bootloader will void manufacturer warranty. However, you can re-lock Bootloader and flash stock ROM to restore warranty.',
    'guide.section7.q3': 'Can I go back to stock ROM?',
    'guide.section7.q3.answer': 'Yes. You can flash stock ROM via MiFlash or re-lock Bootloader after flashing stock ROM.',
    'guide.section7.q4': 'Will data be lost?',
    'guide.section7.q4.answer': 'Yes, all data will be deleted when flashing new ROM. Please backup important data before proceeding.',
    'guide.section7.q5': 'How often are updates released?',
    'guide.section7.q5.answer': 'HyperUR updates follow Xiaomi cycle. Usually monthly security patch updates and major updates when Xiaomi releases new ROM.',
    'guide.section7.q6': 'My device is not on the list?',
    'guide.section7.q6.answer': 'Currently HyperUR only supports certain device lines. Follow the Downloads page for updated supported device list.',
    'guide.cta.title': 'Ready to Experience?',
    'guide.cta.desc': 'Download HyperUR now to upgrade your device!',
    'guide.cta.btn.download': 'Download ROM',
    'guide.cta.btn.home': 'Back to Home',

    // Downloads Page Extended
    'downloads.hero.title': 'Download HyperUR',
    'downloads.hero.subtitle': 'Select the correct device line and current base ROM to ensure safe flashing. Each ROM is optimized for specific devices.',
    'downloads.search.placeholder': 'Search devices or codename...',
    'downloads.device.count': 'devices',
    'downloads.devices.title': 'ROM List by Device',
    'downloads.category.tatca': 'All',
    'downloads.category.xiaomi': 'Xiaomi',
    'downloads.category.pad': 'Pad',
    'downloads.category.mix': 'MIX',
    'downloads.category.civi': 'Civi',
    'downloads.category.redmi': 'Redmi',
    'downloads.category.note': 'Note',
    'downloads.category.k': 'K Series',
    'downloads.category.poco': 'POCO',
    'downloads.noresults': 'No matching devices found.',
    'downloads.guide.card.title': 'Quick Install Guide',
    'downloads.guide.card.item1': 'Backup all important data.',
    'downloads.guide.card.item2': 'Unlock bootloader & install custom recovery (TWRP / OFRP).',
    'downloads.guide.card.item3': 'Wipe data, cache, system according to device guide.',
    'downloads.guide.card.item4': 'Flash corresponding HyperUR version.',
    'downloads.guide.card.item5': 'Reboot & wait for first boot.',
    'downloads.guide.card.warning': 'System intervention always carries risk. You are responsible for your own device.',
    'downloads.info.card.title': 'Version Information',
    'downloads.info.card.hyperos': 'HyperOS:',
    'downloads.info.card.android': 'Android:',
    'downloads.info.card.base': 'Base:',
    'downloads.support.card.title': 'Need Support?',
    'downloads.support.card.desc': 'Contact team via Telegram for installation support and error fixes.',

    // Modal Serial
    'modal.serial.register.title': 'Register Serial',
    'modal.serial.register.serial.label': 'Enter serial key:',
    'modal.serial.register.serial.placeholder': 'E.g: 1a2b3c4d',
    'modal.serial.register.email.label': 'Your email:',
    'modal.serial.register.email.placeholder': 'email@example.com',
    'modal.serial.register.device.label': 'Device:',
    'modal.serial.register.device.placeholder': 'E.g: Redmi k60 pro - socrates',
    'modal.serial.register.btn': 'Register',
    'modal.serial.register.cancel': 'Cancel',
    'modal.serial.register.success': 'Serial registration successful! We will contact you soon.',
    'modal.serial.lookup.btn': 'Lookup',
    'modal.lookup.title': 'Lookup Serial',
    'modal.lookup.label': 'Serial or Email:',
    'modal.lookup.placeholder': 'Enter serial or email to lookup...',
    'modal.btn.lookup': 'Lookup',
    'modal.result.title': 'Lookup Result',
    'modal.result.serial': 'Serial:',
    'modal.result.email': 'Email:',
    'modal.result.device': 'Device:',
    'modal.result.date': 'Registration Date:',
    'modal.result.status': 'Status:',
    'modal.notfound': 'Registration information not found.',
    'modal.notfound.hint': 'Please check your serial or email again.',
    'serial.register.desc': 'Enter your information to register serial key',
    'serial.lookup.desc': 'Enter serial or email to lookup registration info',
    'modal.tab.register': 'Register',
    'modal.tab.lookup': 'Lookup',
    'modal.device.placeholder': 'Type device name to search...',

    // Serial Donation Notice
    'serial.notice.title': 'Donation Notice',
    'serial.notice.intro': 'After donating, please send the bill to the dev to get permanently activated.',
    'serial.notice.section.transfer': 'Transfer Content',
    'serial.notice.section.transfer.content': 'UR + Serial + Email or machine name',
    'serial.notice.section.amount': 'Donation Amount',
    'serial.notice.section.amount.min': 'Minimum: 36k VND',
    'serial.notice.section.amount.max': 'Unlimited, up to you ❤️',
    'serial.notice.section.intl': 'International Payment',
    'serial.notice.section.free': 'For free activation users',
    'serial.notice.section.free.content': 'Usage period is 36 days. This is the time for you to experience and test the ROM to see if it is stable, suitable and worth using long-term.',
    'serial.notice.section.paid': 'For supporters',
    'serial.notice.section.paid.content': 'Will be permanently activated until the device is no longer supported with updates.',
    'serial.notice.section.dev': 'Dev Information',
    'serial.notice.section.otherdev': '📌 If donating to a Developer, please send the bill and serial code directly to that Developer.',
    'serial.notice.thanks': 'Thank you for your support!',

    // Donate Page Extended
    'donate.hero.title': 'Support HyperUR Project',
    'donate.hero.subtitle': 'If you find HyperUR useful, you can support the team through the methods below to maintain servers, test devices and development time.',
    'donate.section.luc.title': 'LucNguyen06',
    'donate.section.luc.role': 'Developer & Maintainer',
    'donate.method.momo': 'Momo',
    'donate.method.momo.desc': 'Support via Momo e-wallet',
    'donate.method.bank': 'Bank Transfer',
    'donate.method.bank.desc': 'Bank transfer',
    'donate.method.paypal': 'PayPal',
    'donate.method.paypal.desc': 'International support via PayPal',
    'donate.method.crypto': 'Binance',
    'donate.method.crypto.desc': 'Support with Crypto',
    'donate.section.usagi.title': 'Usagi',
    'donate.section.usagi.role': 'Developer & Support',
    'donate.method.telegram': 'Support Contact',
    'donate.method.telegram.desc': 'Message directly via Telegram for ROM installation support, error fixes, device consultation and HyperUR related issues.',
    'donate.thanks.title': 'Thank You!',
    'donate.thanks.desc': 'Every contribution, big or small, gives the team more motivation to continue developing and improving HyperUR. We greatly appreciate your support!',

    // Features Page Extended
    'features.hero.title': 'Key Features',
    'features.hero.subtitle': 'HyperUR is not just a ROM, but an optimized ecosystem for all needs: gaming, work, study and entertainment.',
    'features.category.new': 'New Features',
    'features.category.new.desc': 'Features added to HyperUR',
    'features.category.improved': 'Improved',
    'features.category.improved.desc': 'Improvements and optimizations',
    'features.category.fixed': 'Bug Fixes',
    'features.category.fixed.desc': 'Issues that have been resolved',
    'features.category.apps': 'Modded Apps',
    'features.category.apps.desc': '16 system apps optimized',
    'app.FileExplorer': 'File Explorer',
    'app.Joyose': 'Joyose',
    'app.MiMediaEditor': 'Mi Media Editor',
    'app.MiuiExtraPhoto': 'Miui Extra Photo',
    'app.MiuiGallery': 'Miui Gallery',
    'app.MiuiHome': 'Miui Home',
    'app.MiuiPackageInstaller': 'Miui Package Installer',
    'app.MiuiScanner': 'Miui Scanner',
    'app.MiuiScreenRecorder': 'Miui Screen Recorder',
    'app.MiuiScreenshot': 'Miui Screenshot',
    'app.MiuiSystemUIPlugin': 'Miui SystemUI Plugin',
    'app.Notes': 'Notes',
    'app.PowerKeeper': 'PowerKeeper',
    'app.SecurityCenter': 'Security Center',
    'app.SoundRecorder': 'Sound Recorder',
    'app.Weather': 'Weather',
    'features.highlight.gaming.title': 'Gaming Mode',
    'features.highlight.gaming.desc': 'Optimized for PUBG, Free Fire, COD with highest performance, reduced lag, stable FPS.',
    'features.highlight.battery.title': 'Battery Optimization',
    'features.highlight.battery.desc': 'Smart battery management, reduce background apps, extend usage time.',
    'features.highlight.security.title': 'Security Enhanced',
    'features.highlight.security.desc': 'Enhanced security, block system ads, protect privacy.',
    'features.highlight.photos.title': 'Google Photos Unlimited',
    'features.highlight.photos.desc': 'Unlimited photo and video backup to Google Photos for free.',
    'features.cta.title': 'Ready to Experience?',
    'features.cta.desc': 'Download HyperUR now to upgrade your device!',
    'features.cta.btn': 'Download HyperUR',
    'features.page.title': 'HyperUR Features',

    // Changelog - New Features (added)
    'changelog.added.1': 'Gaming Mode optimized for PUBG/BGMI, Free Fire, Call of Duty, COD Warzone',
    'changelog.added.2': '120Hz boost support for all applications',
    'changelog.added.3': 'Flexible refresh rate: 1Hz / 60Hz / 90Hz / 120Hz',
    'changelog.added.4': 'Unlimited Google Photos backup',
    'changelog.added.5': 'Disable app signature verification',
    'changelog.added.6': 'CorePatch & Disable security flags',
    'changelog.added.7': 'Smart multitasking Multi-window',
    'changelog.added.8': 'Advanced AOD with customizable lock screen',
    'changelog.added.9': 'Lunar calendar integrated in control center',
    'changelog.added.10': 'HyperUR App with Spoof Tweaks',
    'changelog.added.11': 'Keybox Manager',
    'changelog.added.12': 'Play Store Spoof',
    'changelog.added.13': 'Games Spoof',
    'changelog.added.14': 'Messenger Spoof',
    'changelog.added.15': 'LiveBridge - Mirror OTP & progress notifications',
    'changelog.added.16': 'Performance Overlay',
    'changelog.added.17': 'Disable Flag Secure',
    'changelog.added.18': 'Max FPS in All Apps',
    'changelog.added.19': 'USB Debugging & Developer Options',
    'changelog.added.20': 'Private DNS Manager',
    'changelog.added.21': 'HyperOS 1.0 Support (Android 14)',
    'changelog.added.22': 'HyperOS 2.0 Support (Android 14 - 15)',
    'changelog.added.23': 'HyperOS 3.0 Support (Android 15 - 16)',
    'changelog.added.24': 'Full Snapdragon device support',

    // Changelog - Improved
    'changelog.improved.1': 'Optimized RAM & GPU management for gaming',
    'changelog.improved.2': 'Reduced heat, stable frame rate when gaming',
    'changelog.improved.3': 'System performance improved by 25%',
    'changelog.improved.4': 'Optimized battery life',
    'changelog.improved.5': 'Improved smoothness with 120Hz system-wide',
    'changelog.improved.6': 'Optimized compatibility with Snapdragon devices',
    'changelog.improved.7': 'Improved UI/UX with customizable interface',
    'changelog.improved.8': 'Optimized compatibility with MIUI apps',
    'changelog.improved.9': 'Improved stability from stock ROM',

    // Changelog - Fixed
    'changelog.fixed.1': 'Fixed crash when forcing high refresh rate',
    'changelog.fixed.2': 'Fixed Gaming Mode not working on some games',
    'changelog.fixed.3': 'Fixed unlimited Google Photos backup',
    'changelog.fixed.4': 'Fixed CorePatch on some devices',
    'changelog.fixed.5': 'Fixed Multi-window not displaying correctly',
    'changelog.fixed.6': 'Improved overall stability',
    'changelog.fixed.7': 'Fixed compatibility issues with some apps',
    'changelog.fixed.8': 'Fixed bootloop on some devices',
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
      window.dispatchEvent(new CustomEvent('i18n:languageChanged', { detail: { lang } }));
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

    // Update page title
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      const key = titleEl.getAttribute('data-i18n');
      const translation = this.t(key);
      if (translation) {
        document.title = translation;
      }
    }
  },

  updateLangButton() {
    const langBtn = document.getElementById('btn-lang-toggle');
    if (langBtn) {
      const langText = langBtn.querySelector('.lang-text');
      if (langText) {
        langText.textContent = this.currentLang.toUpperCase();
      }
    }
    const mobileLangBtn = document.getElementById('btn-lang-toggle-mobile');
    if (mobileLangBtn) {
      const langText = mobileLangBtn.querySelector('.lang-text');
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

  const mobileLangToggleBtn = document.getElementById('btn-lang-toggle-mobile');
  if (mobileLangToggleBtn) {
    mobileLangToggleBtn.addEventListener('click', () => {
      i18n.toggleLanguage();
    });
  }

  // Mobile menu hamburger toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking a nav link
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  }

  // Mobile theme toggle
  const mobileThemeBtn = document.getElementById('btn-theme-toggle-mobile');
  if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-mode');
      const nextTheme = isDark ? 'light' : 'dark';
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('hypermods-theme', nextTheme);
      const icon = nextTheme === 'dark' ? '☀️' : '🌙';
      mobileThemeBtn.querySelector('.theme-icon').textContent = icon;
      const desktopBtn = document.getElementById('btn-theme-toggle');
      if (desktopBtn) {
        desktopBtn.querySelector('.theme-icon').textContent = icon;
      }
    });
  }
});

