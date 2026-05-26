// Device list - Android 14+ supported devices only
const devices = [
    // Xiaomi 11 Series
    { name: 'Xiaomi 11', codeName: 'VENUS' }, // Snapdragon 888
    { name: 'Xiaomi 11 Pro', codeName: 'STAR' }, // Snapdragon 888
    { name: 'Xiaomi 11 Ultra', codeName: 'STAR' }, // Snapdragon 888
    { name: 'Xiaomi 11T Pro', codeName: 'VILI' }, // Snapdragon 888
    { name: 'Xiaomi 11 Lite 5G NE', codeName: 'LISA' }, // Snapdragon 778G
  
    // Xiaomi 12 Series
    { name: 'Xiaomi 12', codeName: 'CUPID' }, // Snapdragon 8 Gen 1
    { name: 'Xiaomi 12 Pro', codeName: 'ZEUS' }, // Snapdragon 8 Gen 1
    { name: 'Xiaomi 12 Lite', codeName: 'TAOYAO' }, // Snapdragon 778G Tên gốc
    { name: 'Xiaomi 12S', codeName: 'MAYFLY' }, // Snapdragon 8+ Gen 1
    { name: 'Xiaomi 12S Pro', codeName: 'UNICORN' }, // Snapdragon 8+ Gen 1
    { name: 'Xiaomi 12S Ultra', codeName: 'THOR' }, // Snapdragon 8+ Gen 1
  
    // Xiaomi 13 Series
    { name: 'Xiaomi 13', codeName: 'FUXI' }, // Snapdragon 8 Gen 2
    { name: 'Xiaomi 13 Pro', codeName: 'NUWA' }, // Snapdragon 8 Gen 2
    { name: 'Xiaomi 13 Ultra', codeName: 'ISHTAR' }, // Snapdragon 8 Gen 2
  
    // Xiaomi 14 Series
    { name: 'Xiaomi 14', codeName: 'HOUJI' }, // Snapdragon 8 Gen 3
    { name: 'Xiaomi 14 Pro / Ti / Titanium Satellite Edition', codeName: 'SHENNONG' }, // Snapdragon 8 Gen 3
    { name: 'Xiaomi 14 Ultra / Ti', codeName: 'AURORA' }, // Snapdragon 8 Gen 3
  
    // Xiaomi 15 Series
    { name: 'Xiaomi 15', codeName: 'DADA' }, // Snapdragon 8 Elite
    { name: 'Xiaomi 15 Pro', codeName: 'HAOTIAN' }, // Snapdragon 8 Elite
    { name: 'Xiaomi 15 Ultra', codeName: 'XUANYUAN' }, // Snapdragon 8 Elite
  
    // Xiaomi 17 Series
    { name: 'Xiaomi 17', codeName: 'PUDDING' }, 
    { name: 'Xiaomi 17 Pro', codeName: 'PANDORA' },
    { name: 'Xiaomi 17 Pro Max', codeName: 'POPSICLE' },
    { name: 'Xiaomi 17 Max', codeName: 'BYRON' },
  
    // Xiaomi Pad Series
    { name: 'Xiaomi Pad 6', codeName: 'PIPA' }, // Snapdragon 870
    { name: 'Xiaomi Pad 6 Pro', codeName: 'LIUQIN' }, // Snapdragon 8+ Gen 1
    { name: 'Xiaomi Pad 6 Max 14', codeName: 'YUDI' }, // Snapdragon 8+ Gen 1
    { name: 'Xiaomi Pad 6S Pro 12.4', codeName: 'SHENG' }, // Snapdragon 8 Gen 2
    { name: 'Xiaomi Pad 7', codeName: 'UKE' }, // Snapdragon 7+ Gen 3
    { name: 'Xiaomi Pad 7 Pro', codeName: 'MUYU' }, // Snapdragon 8 Gen 3
  
    // Xiaomi MIX Series
    { name: 'Xiaomi MIX 4', codeName: 'ODIN' }, // Snapdragon 888+
    { name: 'Xiaomi MIX Fold 2', codeName: 'ZIZHAN' }, // Snapdragon 8+ Gen 1
    { name: 'Xiaomi MIX Fold 3', codeName: 'BABYLON' }, // Snapdragon 8 Gen 2
    { name: 'Xiaomi MIX Fold 4', codeName: 'GOKU' }, // Snapdragon 8 Gen 3
  
    // Xiaomi Civi Series
    { name: 'Xiaomi Civi 2', codeName: 'ZIYI' }, // Snapdragon 7 Gen 1
    { name: 'Xiaomi Civi 4 Pro', codeName: 'CHENFENG' }, // Snapdragon 8s Gen 3
  
    // Redmi Note 12 Series
    { name: 'Redmi Note 12 5G / Note 12R Pro', codeName: 'SUNSTONE' }, // Snapdragon 4 Gen 1
    { name: 'Redmi Note 12 Pro Speed Edition', codeName: 'REDWOOD' }, // Snapdragon 778G
    { name: 'Redmi Note 12 Turbo', codeName: 'MARBLE' }, // Snapdragon 7+ Gen 2
    { name: 'Redmi Note 12 4G', codeName: 'TAPAS' }, // Snapdragon 685
    { name: 'Redmi Note 12 4G NFC', codeName: 'TOPAZ' }, // Snapdragon 685
  
    // Redmi Note 13 Series
    { name: 'Redmi Note 13 Pro', codeName: 'GARNET' }, // Snapdragon 7s Gen 2
    { name: 'Redmi Note 13 Global', codeName: 'SAPPHIRE' }, // Snapdragon 685
    { name: 'Redmi Note 13 NFC', codeName: 'SAPPHIREN' }, // Snapdragon 685
  
    // Redmi Turbo Series
    { name: 'Redmi Turbo 3', codeName: 'PERIDOT' }, // Snapdragon 8s Gen 3
    { name: 'Redmi Turbo 4 Pro', codeName: 'ONYX' }, // Snapdragon 8s Gen 4 / 8 Elite Lite
  
    // Redmi K50 Series
    { name: 'Redmi K50 Gaming Edition', codeName: 'INGRES' }, // Snapdragon 8 Gen 1
    { name: 'Redmi K50 Ultra', codeName: 'DITING' }, // Snapdragon 8+ Gen 1
  
    // Redmi K60 Series
    { name: 'Redmi K60', codeName: 'MONDRIAN' }, // Snapdragon 8+ Gen 1
    { name: 'Redmi K60 Pro', codeName: 'SOCRATES' }, // Snapdragon 8 Gen 2
  
    // Redmi K70 Series
    { name: 'Redmi K70', codeName: 'VERMEER' }, // Snapdragon 8 Gen 2
    { name: 'Redmi K70 Pro', codeName: 'MANET' }, // Snapdragon 8 Gen 3
  
    // Redmi K80 Series
    { name: 'Redmi K80', codeName: 'ZORN' }, // Snapdragon 8 Gen 3
    { name: 'Redmi K80 Pro', codeName: 'MIRO' }, // Snapdragon 8 Elite

    // Redmi K90 Series
    { name: 'Redmi K90', codeName: 'ANNIBALE' }, // Snapdragon 8 Elite
    { name: 'Redmi K90 Pro Max', codeName: 'MYRON' }, // Snapdragon 8 Elite 5
  
    // POCO Series
    { name: 'POCO M6 4G', codeName: 'MOON' }, // Snapdragon 4 Gen 2
    { name: 'POCO X5 5G', codeName: 'MOONSTONE' } // Snapdragon 695
  ];


// Download links for each device (existing links preserved)
const downloadLinks = {
    'MOONSTONE': 'https://drive.google.com/open?id=1oZ0Vnh_426bdJzuSRXVDHoxgJ5PXDY6Z&usp=drive_fs',
    'SKY': 'https://drive.google.com/open?id=1ogsBuz65naAdNxkdNt9akCPS-VX5kyrG&usp=drive_fs',
    'FLAME': 'https://drive.google.com/open?id=1Jj8viwwF-HKv62JZ5QhN2_Ww_6b_2OfO&usp=drive_fs',
    'MUNCH': 'https://drive.google.com/open?id=1qPEHyILncZHWjrlsiCgyf_EO8bOZ_G5h&usp=drive_fs',
    'INGRES': 'https://drive.google.com/open?id=1nc-tcpx7C773bjtEoeTDVjLt-TzU-RLt&usp=drive_fs',
    'DITING': 'https://drive.google.com/open?id=1RODYVcC5PYke-8Q4Lwf-iuNYpyHeNGTp&usp=drive_fs',
    'SOCRATES': 'https://drive.google.com/open?id=15EWCyEYYWcNEAovxdAljMg2_rPZfw6dD&usp=drive_fs',
    'MONDRIAN': 'https://drive.google.com/open?id=1Gfqn9PC02Ur2-KBADjnn_NBdidq0UrXO&usp=drive_fs',
    'MANET': 'https://drive.google.com/open?id=1WBe5Y5CVdweTMOQ_alWbhA0MNjUFSMzP&usp=drive_fs',
    'VERMEER': 'https://drive.google.com/open?id=1N_ox8KmDS92TtAuqjTUGJ7wuI9LC9amp&usp=drive_fs',
    'MIRO': 'https://drive.google.com/open?id=1JBPRx64mBkIVEdAuVCnR1V0px6FF-aZA&usp=drive_fs',
    'ZORN': 'https://drive.google.com/open?id=1OgVp72UwmluCzXd5vDYjUwPFsXNwl-Vk&usp=drive_fs',
    'ANNIBALE': 'https://drive.google.com/open?id=1ZjIu2IxBqMlw0mCImH_ATuTas1cjU81C&usp=drive_fs',
    'MYRON': 'https://drive.google.com/open?id=1ETXIK5W2zA4OHyJdIA9us7AZVULZeQxP&usp=drive_fs',
    'TOPAZ': 'https://drive.google.com/open?id=10WvMX197OqF25ElRa2kVYj6ReaQlbg5J&usp=drive_fs',
    'TAPAS': 'https://drive.google.com/open?id=1nJBsF_QZNhB-s8jmS0Gs7LIO-PpFN4t1&usp=drive_fs',
    'SUNSTONE': 'https://drive.google.com/open?id=1Mr9iqFNeNZf4qQYRBJ5_RxyO3PhMBgxF&usp=drive_fs',
    'SWEET_K6A': 'https://drive.google.com/open?id=1b7L6uFZ8Lru84Twwhpd0vc9b125QDawJ&usp=drive_fs',
    'REDWOOD': 'https://drive.google.com/open?id=1KVK0jVQt1ox-C3Z4933qThZ1-Dxp_Fa6&usp=drive_fs',
    'MARBLE': 'https://drive.google.com/open?id=1I0UlGaRcqvRAdnYJkCAnYOUha2Co_aYP&usp=drive_fs',
    'SAPPHIRE': 'https://drive.google.com/open?id=15-3hezPfh9QAhD69oS_dfoRIz9UlMSrA&usp=drive_fs',
    'SAPPHIREN': 'https://drive.google.com/open?id=12mlLK_wt-LGiZOf8YGwdv8WhfSjQ_2kz&usp=drive_fs',
    'GARNET': 'https://drive.google.com/open?id=1So6IFCe7BmNkgHsXDAwLwsRAifzZe-wT&usp=drive_fs',
    'AMETHYST': 'https://drive.google.com/open?id=1sP7D4_mIhW7H5kuoah18UPjptIZVMLk7&usp=drive_fs',
    'PERIDOT': 'https://drive.google.com/open?id=17G75RrV45EUMOLByU-0bRCMqUun6khfq&usp=drive_fs',
    'ONYX': 'https://drive.google.com/open?id=15rocPlZphWOT5e6U22N5oQK47vfSZ6Qx&usp=drive_fs',
    'LISA': 'https://drive.google.com/open?id=1AgraoPlQWTgGs_UIlzGt2T52M13J498w&usp=drive_fs',
    'STAR': 'https://drive.google.com/open?id=17X_DJR222zhMqlcjGGs1W--cE3lZ-WrZ&usp=drive_fs',
    'VENUS': 'https://drive.google.com/open?id=1Ee3GaOVQy-PCzkbkdFYOdhv0I3hfocdP&usp=drive_fs',
    'VILI': 'https://drive.google.com/open?id=1xIVCkV_EwnvUtUmXL5zWx_wJaqkqWEP-&usp=drive_fs',
    'TAOYAO': 'https://drive.google.com/open?id=1Z1pjLtGDES4rZmjNEY4n46ROOmmrqUln&usp=drive_fs',
    'ZEUS': 'https://drive.google.com/open?id=1gbDGAnj0iJld-5IPqqg5FCh1Rq_qq_dG&usp=drive_fs',
    'CUPID': 'https://drive.google.com/open?id=1RH51PNNLJ64b69mdNypGQjbjprzKK0C_&usp=drive_fs',
    'NUWA': 'https://drive.google.com/open?id=1KArWmTODit9efh8z84gJ8Ap4orNN-4PE&usp=drive_fs',
    'ISHTAR': 'https://drive.google.com/open?id=1OjWPQ8gYYzbfQimBlRqxCQK22QHUYA9R&usp=drive_fs',
    'FUXI': 'https://drive.google.com/open?id=1hrmqOpoJC-NduRzmJ7TACMtboJAM88Fp&usp=drive_fs',
    'SHENNONG': 'https://drive.google.com/open?id=1LVWFt9_9IZU_YCxtctcjZ4JC8bg1W2WB&usp=drive_fs',
    'AURORA': 'https://drive.google.com/open?id=1OGJUM8ZjX1KUUcCpXG1JCTzd2ifqpNCH&usp=drive_fs',
    'HOUJI': 'https://drive.google.com/open?id=1NITR-T2kPLhR9nFxSFfGAt-UbwRMt5gy&usp=drive_fs',
    'HAOTIAN': 'https://drive.google.com/open?id=16J2zAJ1HAEQz_L-CCJvZmF2kbEN6Kf7L&usp=drive_fs',
    'XUANYUAN': 'https://drive.google.com/open?id=145cyHnlau4hZCJpEOq5B17SCWEzef552&usp=drive_fs',
    'DADA': 'https://drive.google.com/open?id=1Y6c4sR2oTouuNow1sgiqUyB0DVbAozxT&usp=drive_fs',
    'POPSICLE': 'https://drive.google.com/open?id=1iYKDpUTQyM2XLJh7u6X3RzljAOX1N8en&usp=drive_fs',
    'PANDORA': 'https://drive.google.com/open?id=1ILGwW30Jcj7Q_Yzq_2FOcHrFOtaOF0Vr&usp=drive_fs',
    'PUDDING': 'https://drive.google.com/open?id=1WKnh_dnbKaRG1TlF_P59EHQ92lCU16WR&usp=drive_fs',
    'ZIYI': 'https://drive.google.com/open?id=1_qBw_eycL0tytiAdxGV9W14yiheirG62&usp=drive_fs',
    'CHENFENG': 'https://drive.google.com/open?id=1IUgEyrX1uk0OB8c9yngXNXvRIzogYl9C&usp=drive_fs',
    'ODIN': 'https://drive.google.com/open?id=1SnvdjMuCdovnVadw20IBwxPHOpGxrrcb&usp=drive_fs',
    'ZIZHAN': 'https://drive.google.com/open?id=1FPaFEaRKUu2pZF3MijOvQ8o9Mr3IrTka&usp=drive_fs',
    'BABYLON': 'https://drive.google.com/open?id=1XrS3SHE9OFksAdpMHQMRWIBkMh82Po8X&usp=drive_fs',
    'GOKU': 'https://drive.google.com/open?id=1GizmNpkZhCCly6VT6ihp4_iofBcWfEhs&usp=drive_fs',
    'YUDI': 'https://drive.google.com/open?id=1Ayzcsp7rF3Axpj76tuuifjofAiG3O8mS&usp=drive_fs',
    'LIUQIN': 'https://drive.google.com/open?id=1EQIbXUF0t_kwwZk7j3-wvQ4ciZmW6bJT&usp=drive_fs',
    'PIPA': 'https://drive.google.com/open?id=19Sslz0ur5Uzv4lU2UwQe92viOnbdhML0&usp=drive_fs',
    'SHENG': 'https://drive.google.com/open?id=1UEtzSfqut_Sd2nVRXmquaHhDcF1uw3SY&usp=drive_fs',
    'MUYU': 'https://drive.google.com/open?id=1J8g4MLyDk1iEn2XC1sYoHxk3NCT3-c7L&usp=drive_fs',
    'UKE': 'https://drive.google.com/open?id=1n5V9zsR3LG8fnhL9lg8i6S2R-jKwm5hi&usp=drive_fs',
    'MAYFLY': 'https://drive.google.com/open?id=1yvkz1TNULDqlm43vD164yFhD1ttEAG8L&usp=drive_fs',
    'THOR': 'https://drive.google.com/open?id=1G3G0xRf3wvrbwXOFxxapl0r_24JvMpKa&usp=drive_fs',
    'UNICORN': 'https://drive.google.com/open?id=1_QVxyqT5GYxVDXnqGKYd7KaLAK7EshFi&usp=drive_fs',
    'BYRON': 'https://drive.google.com/open?id=19E-dhpIwjwrpIPFdAnSyG3g6ag42bL6q&usp=drive_fs'
};


// Modded apps list
const moddedApps = [
  'FileExplorer',
  'Joyose',
  'MiMediaEditor',
  'MiuiExtraPhoto',
  'MiuiGallery',
  'MiuiHome',
  'MiuiPackageInstaller',
  'MiuiScanner',
  'MiuiScreenRecorder',
  'MiuiScreenshot',
  'MiuiSystemUIPlugin',
  'Notes',
  'PowerKeeper',
  'SecurityCenter',
  'SoundRecorder',
  'Weather'
];

// Changelog data (use i18n keys)
const changelogData = {
  added: [
    'changelog.added.1',
    'changelog.added.2',
    'changelog.added.3',
    'changelog.added.4',
    'changelog.added.5',
    'changelog.added.6',
    'changelog.added.7',
    'changelog.added.8',
    'changelog.added.9',
    'changelog.added.10',
    'changelog.added.11',
    'changelog.added.12',
    'changelog.added.13',
    'changelog.added.14',
    'changelog.added.15',
    'changelog.added.16',
    'changelog.added.17',
    'changelog.added.18',
    'changelog.added.19',
    'changelog.added.20',
    'changelog.added.21',
    'changelog.added.22',
    'changelog.added.23',
    'changelog.added.24',
  ],
  improved: [
    'changelog.improved.1',
    'changelog.improved.2',
    'changelog.improved.3',
    'changelog.improved.4',
    'changelog.improved.5',
    'changelog.improved.6',
    'changelog.improved.7',
    'changelog.improved.8',
    'changelog.improved.9'
  ],
  fixed: [
    'changelog.fixed.1',
    'changelog.fixed.2',
    'changelog.fixed.3',
    'changelog.fixed.4',
    'changelog.fixed.5',
    'changelog.fixed.6',
    'changelog.fixed.7',
    'changelog.fixed.8'
  ]
};
