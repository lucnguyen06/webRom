// Device list - Android 14+ supported devices only
const devices = [
  // Xiaomi 11 Series
  { name: 'Xiaomi 11', codeName: 'VENUS' },
  { name: 'Xiaomi 11 Pro', codeName: 'STAR' },
  { name: 'Xiaomi 11 Ultra', codeName: 'STAR' },
  { name: 'Xiaomi 11T', codeName: 'AGATE' },
  { name: 'Xiaomi 11T Pro', codeName: 'VILI' },
  { name: 'Xiaomi 11 Lite 5G NE', codeName: 'LISA' },

  // Xiaomi 12 Series
  { name: 'Xiaomi 12', codeName: 'CUPID' },
  { name: 'Xiaomi 12 Pro', codeName: 'ZEUS' },
  { name: 'Xiaomi 12 Lite', codeName: 'TAOYAO' },
  { name: 'Xiaomi 12S', codeName: 'MAYFLY' },
  { name: 'Xiaomi 12S Pro', codeName: 'UNICORN' },
  { name: 'Xiaomi 12S Ultra', codeName: 'THOR' },
  { name: 'Xiaomi 12T', codeName: 'PLATO' },

  // Xiaomi 13 Series
  { name: 'Xiaomi 13', codeName: 'FUXI' },
  { name: 'Xiaomi 13 Pro', codeName: 'NUWA' },
  { name: 'Xiaomi 13 Ultra', codeName: 'ISHTAR' },
  { name: 'Xiaomi 13T', codeName: 'ARISTOTLE' },
  { name: 'Xiaomi 13T Pro', codeName: 'COROT' },

  // Xiaomi 14 Series
  { name: 'Xiaomi 14', codeName: 'HOUJI' },
  { name: 'Xiaomi 14 Pro / Ti / Titanium Satellite Edition', codeName: 'SHENNONG' },
  { name: 'Xiaomi 14 Ultra / Ti', codeName: 'AURORA' },
  { name: 'Xiaomi 14T', codeName: 'DEGAS' },
  { name: 'Xiaomi 14T Pro', codeName: 'ROTHKO' },

  // Xiaomi 15 Series
  { name: 'Xiaomi 15', codeName: 'DADA' },
  { name: 'Xiaomi 15 Pro', codeName: 'HAOTIAN' },
  { name: 'Xiaomi 15 Ultra', codeName: 'XUANYUAN' },
  { name: 'Xiaomi 15T', codeName: 'GOYA' },
  { name: 'Xiaomi 15T Pro', codeName: 'KLIMT' },

  // Xiaomi 17 Series
  { name: 'Xiaomi 17', codeName: 'PUDDING' },
  { name: 'Xiaomi 17 Pro', codeName: 'PANDORA' },
  { name: 'Xiaomi 17 Pro Max', codeName: 'POPSICLE' },
  { name: 'Xiaomi 17 Ultra', codeName: 'NEZHA' },

  // Xiaomi Pad Series
  { name: 'Xiaomi Pad 6', codeName: 'PIPA' },
  { name: 'Xiaomi Pad 6 Pro', codeName: 'LIUQIN' },
  { name: 'Xiaomi Pad 6 Max 14', codeName: 'YUDI' },
  { name: 'Xiaomi Pad 6S Pro 12.4', codeName: 'SHENG' },
  { name: 'Xiaomi Pad 7', codeName: 'UKE' },
  { name: 'Xiaomi Pad 7 Pro', codeName: 'MUYU' },

  // Xiaomi MIX Series
  { name: 'Xiaomi MIX 4', codeName: 'ODIN' },
  { name: 'Xiaomi MIX Fold 2', codeName: 'ZIZHAN' },
  { name: 'Xiaomi MIX Fold 3', codeName: 'BABYLON' },
  { name: 'Xiaomi MIX Fold 4', codeName: 'GOKU' },

  // Xiaomi Civi Series
  { name: 'Xiaomi Civi 2', codeName: 'ZIYI' },
  { name: 'Xiaomi Civi 3', codeName: 'YUECHU' },
  { name: 'Xiaomi Civi 4 Pro', codeName: 'CHENFENG' },

  // Redmi Series
  { name: 'Redmi 12 / 12R 5G / Redmi Note 12R', codeName: 'SKY' },
  { name: 'Redmi 12 Global', codeName: 'FIRE' },
  { name: 'Redmi 13C / R 5G', codeName: 'AIR' },
  { name: 'Redmi 13C Global', codeName: 'GALE' },
  { name: 'Redmi 14C', codeName: 'LAKE' },
  { name: 'Redmi 14R 5G', codeName: 'FLAME' },

  // Redmi Note 12 Series
  { name: 'Redmi Note 12 5G / Note 12R Pro', codeName: 'SUNSTONE' },
  { name: 'Redmi Note 12 Pro / Pro+ / Discovery Edition', codeName: 'RUBY' },
  { name: 'Redmi Note 12 Pro Speed Edition', codeName: 'REDWOOD' },
  { name: 'Redmi Note 12T Pro', codeName: 'PEARL' },
  { name: 'Redmi Note 12 Turbo', codeName: 'MARBLE' },
  { name: 'Redmi Note 12 4G', codeName: 'TAPAS' },
  { name: 'Redmi Note 12 4G NFC', codeName: 'TOPAZ' },
  { name: 'Redmi Note 12 Pro 4G', codeName: 'SWEET_K6A' },
  { name: 'Redmi Note 12S', codeName: 'SEA' },

  // Redmi Note 13 Series
  { name: 'Redmi Note 13 5G / 13R Pro', codeName: 'GOLD' },
  { name: 'Redmi Note 13R 5G', codeName: 'BREEZE' },
  { name: 'Redmi Note 13 Pro', codeName: 'GARNET' },
  { name: 'Redmi Note 13 Pro+ 5G', codeName: 'ZIRCON' },
  { name: 'Redmi Note 13 Pro 4G', codeName: 'EMERALD' },
  { name: 'Redmi Note 13 Global', codeName: 'SAPPHIRE' },
  { name: 'Redmi Note 13 NFC', codeName: 'SAPPHIREN' },

  // Redmi Note 14 Series
  { name: 'Redmi Note 14 5G', codeName: 'BERYL' },
  { name: 'Redmi Note 14 Pro', codeName: 'MALACHITE' },
  { name: 'Redmi Note 14 Pro+ 5G', codeName: 'AMETHYST' },

  // Redmi Turbo Series
  { name: 'Redmi Turbo 3', codeName: 'PERIDOT' },
  { name: 'Redmi Turbo 4', codeName: 'RODIN' },
  { name: 'Redmi Turbo 4 Pro', codeName: 'ONYX' },

  // Redmi K50 Series
  { name: 'Redmi K50', codeName: 'RUBENS' },
  { name: 'Redmi K50 Pro', codeName: 'MATISSE' },
  { name: 'Redmi K50 Gaming Edition', codeName: 'INGRES' },
  { name: 'Redmi K50 Ultra', codeName: 'DITING' },

  // Redmi K60 Series
  { name: 'Redmi K60E', codeName: 'REMBRANDT' },
  { name: 'Redmi K60', codeName: 'MONDRIAN' },
  { name: 'Redmi K60 Pro', codeName: 'SOCRATES' },
  { name: 'Redmi K60 Ultra', codeName: 'COROT' },

  // Redmi K70 Series
  { name: 'Redmi K70E', codeName: 'DUCHAMP' },
  { name: 'Redmi K70', codeName: 'VERMEER' },
  { name: 'Redmi K70 Pro', codeName: 'MANET' },
  { name: 'Redmi K70 Ultra', codeName: 'ROTHKO' },

  // Redmi K80 Series
  { name: 'Redmi K80', codeName: 'ZORN' },
  { name: 'Redmi K80 Pro', codeName: 'MIRO' },

  // Redmi Pad Series
  { name: 'Redmi Pad', codeName: 'YUNLUO' },
  { name: 'Redmi Pad SE', codeName: 'XUN' },
  { name: 'Redmi Pad SE 4G 8.7', codeName: 'SPARK' },
  { name: 'Redmi Pad Pro / Harry Potter Edition', codeName: 'DIZI' },
  { name: 'Redmi Pad Pro 5G', codeName: 'RUAN' },

  // POCO Series
  { name: 'POCO M5', codeName: 'ROCK' },
  { name: 'POCO M6 4G', codeName: 'MOON' },
  { name: 'POCO X5 5G', codeName: 'MOONSTONE' }
];


// Download links for each device (existing links preserved)
const downloadLinks = {
  'AGATE': 'https://drive.google.com/drive/folders/1EjUEZr5a19qunb4BxpG4PKkDGSrH-Yd6?usp=drive_link',
  'AIR': 'https://drive.google.com/drive/folders/1JeD_kf4e2Tr8kt8GmTpNP1bbPuk5mmxl?usp=drive_link',
  'AMETHYST': 'https://drive.google.com/drive/folders/1jDqwRl9_zyrfFV7UdWhUfDgECxWe5RMS?usp=drive_link',
  'ARISTOTLE': 'https://drive.google.com/drive/folders/1FRzhwMOvjFp9KjuTis1aDJkbV_hX7eUM?usp=drive_link',
  'AURORA': 'https://drive.google.com/drive/folders/1aIuHoX-nq6a-SGnyCh1ZqwNTTSehDhX6?usp=drive_link',
  'BABYLON': 'https://drive.google.com/drive/folders/17klvurHR6APjTCLQOcOb9nMQTomU95q0?usp=drive_link',
  'BERYL': 'https://drive.google.com/drive/folders/1e2xueDMGphHz0EbXx2so_FI-yaLG_6pP?usp=drive_link',
  'BREEZE': 'https://drive.google.com/drive/folders/1VqC1gluSUDCbl0zhs8lzkQGN-9Ez8IT5?usp=drive_link',
  'CHENFENG': 'https://drive.google.com/drive/folders/16Na4Vdqtr2_32lpQq7Z0tzfeDFtaXksX?usp=drive_link',
  'CUPID': 'https://drive.google.com/drive/folders/1jQCuN1oXTYZtjGHIxANVyA1OOm6M5gd3?usp=drive_link',
  'DADA': 'https://drive.google.com/drive/folders/1qE477auA4QaUC3G6ED2QkWWkkJeyLb9H?usp=drive_link',
  'DAUMIER': 'https://drive.google.com/drive/folders/1lrl-eaiHjomg3xMLw5bh7e5eo11ENnUA?usp=drive_link',
  'DEGAS': 'https://drive.google.com/drive/folders/1TvvpMuNwgX4SDz4GG_LIFnPNJMM5e85o?usp=drive_link',
  'COROT': 'https://drive.google.com/drive/folders/14_o_51Di5kBkHBLK9RVNfH-bhEFSw62r?usp=drive_link',
  'DITING': 'https://drive.google.com/drive/folders/18r4oS9Zv8zKA0w4pEc2l4Bc_lK6TtwRE?usp=drive_link',
  'DIZI': 'https://drive.google.com/drive/folders/1Dx70A75TYBJqOTVpgd7GGHaxlAhzz61n?usp=drive_link',
  'DUCHAMP': 'https://drive.google.com/drive/folders/1MSMCSPbWWFc9pjQ3STmzbww1YdbrJ0F5?usp=drive_link',
  'EMERALD': 'https://drive.google.com/drive/folders/1pAJDzFl_xkhzojVYdmT7DmsmaXazrR86?usp=drive_link',
  'FIRE': 'https://drive.google.com/drive/folders/1gjVzgoHJJ9nYkFQFSumgcyeb8B0s5OfI?usp=drive_link',
  'FLAME': 'https://drive.google.com/drive/folders/1g22Olp0vak5C34ncDCWlnJHzhwHdshFs?usp=drive_link',
  'FUXI': 'https://drive.google.com/drive/folders/1mvAPQKSv8xLzf2OzTjwmkQn1y-Q-aQLV?usp=drive_link',
  'GALE': 'https://drive.google.com/drive/folders/10lBpJXGbIBV3_KFFhPSK5u3ep2IlvvFK?usp=drive_link',
  'GOKU': 'https://drive.google.com/drive/folders/1sbgclxIayUT1escrXovD-ZMdSory2F9q?usp=drive_link',
  'GOYA': 'https://drive.google.com/drive/folders/1av_nou-oR2c2CC0Cyy8da_TtIAhumsW_?usp=drive_link',
  'GARNET': 'https://drive.google.com/drive/folders/1-k-FZTbdhtnJ9zCkQXYDsY5IOvnlcLbl?usp=drive_link',
  'GOLD': 'https://drive.google.com/drive/folders/1QfEBbQlJjJOX1jZAWDgY9R5euHWAwHqB?usp=drive_link',
  'HAOTIAN': 'https://drive.google.com/drive/folders/1qxZCjslk6Y4pLKKl5ZxGz8aWHdeBc0ep?usp=drive_link',
  'HOUJI': 'https://drive.google.com/drive/folders/1P9M0oJs5T1_LL0XZr3Q5ZPLnKKOf-af7?usp=drive_link',
  'INGRES': 'https://drive.google.com/drive/folders/1Efjazk3LEc1fMziF04_ZtD21hHPH7dCx?usp=drive_link',
  'ISHTAR': 'https://drive.google.com/drive/folders/149g3mSEWbJpPswxRxKPyKM7pbqMWsxFs?usp=drive_link',
  'KLIMT': 'https://drive.google.com/drive/folders/1djg6oJattn0s1iehr0QAc7bLTzGiSiGL?usp=drive_link',
  'LAKE': 'https://drive.google.com/drive/folders/1w8FWdjFIeK21VNItVYxAgbfqkAM3dilF?usp=drive_link',
  'LISA': 'https://drive.google.com/drive/folders/1qSUADZM56bkuOBl48KhOvhuikpkwJsrF?usp=drive_link',
  'LIUQIN': 'https://drive.google.com/drive/folders/1mTSs-Skc8Sn8CMmy6hz8G_VpNJvzOgYu?usp=drive_link',
  'MANET': 'https://drive.google.com/drive/folders/1fNeTp6QXDEgysjKD4g9dHXYWS6mFJ7Sm?usp=drive_link',
  'MALACHITE': 'https://drive.google.com/drive/folders/1FVD0xXuS5Ig5fe5K_d1qdeC8pWDHOFas?usp=drive_link',
  'MARBLE': 'https://drive.google.com/drive/folders/1VpOeUXMznP0C3KQGuie6QJ3LUnpnLweF?usp=drive_link',
  'MATISSE': 'https://drive.google.com/drive/folders/1v3W_Qk0eDlQRCrByb-yBb_I9Su4bYyy9?usp=drive_link',
  'MAYFLY': 'https://drive.google.com/drive/folders/1wNeDegvuJq8JbDWlor04VjSka7EU-DTM?usp=drive_link',
  'MIRO': 'https://drive.google.com/drive/folders/1qAkqLmKY3bUJpc9aDSSGWCPH7O8pfa5w?usp=drive_link',
  'MONDRIAN': 'https://drive.google.com/drive/folders/10E04p5-EPcybuOD-zY1f5AuQshDX3Ud8?usp=drive_link',
  'MOON': 'https://drive.google.com/drive/folders/1O6ntIk6D0xBftOrIZ_DphbkSwXlVJJbE?usp=drive_link',
  'MOONSTONE': 'https://drive.google.com/drive/folders/1IZLvZK_9_28Y-ATZE6DL7LTHI_4gpcjl?usp=sharing',
  'MUYU': 'https://drive.google.com/drive/folders/1Dwytk6e4CFSjpjVk3iPjIWYiLdhyVNd7?usp=drive_link',
  'NEZHA': 'https://drive.google.com/drive/folders/1z-Thwjo8rEWbz-aYKCLpB1CYZHPSb6X1?usp=drive_link',
  'NUWA': 'https://drive.google.com/drive/folders/1_PGqILV3bQ2F9PUIKLTBh6elIJwM2ayt?usp=drive_link',
  'ODIN': 'https://drive.google.com/drive/folders/1TzQHAXXUc_4rNrSkZgsi5Idve8H8b6w3?usp=drive_link',
  'ONYX': 'https://drive.google.com/drive/folders/1Fek4hUWbKmxWV1tiF8hPEEbntolEKB8a?usp=drive_link',
  'PEARL': 'https://drive.google.com/drive/folders/1yYYMr4oeCqO46QwHolyDOge1tegmLCrn?usp=drive_link',
  'PANDORA': 'https://drive.google.com/drive/folders/1LOShCYoV18vM2QpTA3StQIIhroHv_tM-?usp=drive_link',
  'PERIDOT': 'https://drive.google.com/drive/folders/1FuHUXRHmaBQRr0_iA6l3s0yaelBRe7KF?usp=drive_link',
  'PIPA': 'https://drive.google.com/drive/folders/1huAf5ahx0JbVRjrWNqEZOhGNNPa87kFN?usp=drive_link',
  'PLATO': 'https://drive.google.com/drive/folders/1Dtvk8J-0mLHWyHwoZ5GOuKSuld0qaBxn?usp=drive_link',
  'POPSICLE': 'https://drive.google.com/drive/folders/1vv0F8Ctapsb43QhTfzqHdM7_spLpXkIE?usp=drive_link',
  'PUDDING': 'https://drive.google.com/drive/folders/190Ei_JXXyxc6evRwPVNPO6U8gOr2qOf8?usp=drive_link',
  'REDWOOD': 'https://drive.google.com/drive/folders/15_qd_HWvQP_Ibk63yl9g9A_tciLxnToO?usp=drive_link',
  'REMBRANDT': 'https://drive.google.com/drive/folders/1CJ6_lvGTW-iCTMaKlnLjoIO6517XBQR5?usp=drive_link',
  'ROCK': 'https://drive.google.com/drive/folders/1YCXPF64r7xJRW4_ubF6Gxn5DRA7NPizk?usp=drive_link',
  'RODIN': 'https://drive.google.com/drive/folders/1bVdR9hY0_-FBAFSeAKxBekUk5u66NLjW?usp=drive_link',
  'ROTHKO': 'https://drive.google.com/drive/folders/13YmkIF14ZElqIZmOXqjJuz3Vvf11Hf7X?usp=drive_link',
  'RUAN': 'https://drive.google.com/drive/folders/1eJ_uyZX26UUKNKYqqqYqLabfs4ghj6hw?usp=drive_link',
  'RUBENS': 'https://drive.google.com/drive/folders/1C_i1yZjvyhdpnXlspnOsZ-ZY5LccyDn2?usp=drive_link',
  'RUBY': 'https://drive.google.com/drive/folders/179WmpMlbiT7fH261Tx8ks_dYjXbfIqDH?usp=drive_link',
  'SAPPHIRE': 'https://drive.google.com/drive/folders/1PPXDyrZ59VJqFURKxYwhbx7mBE0_wu4O?usp=drive_link',
  'SAPPHIREN': 'https://drive.google.com/drive/folders/17TpI5IGZEgXHUlb0jpccE5-V89ExBsWe?usp=drive_link',
  'SEA': 'https://drive.google.com/drive/folders/1TdXwcKByGVop3YAfDbNziNfS2J2gXpz-?usp=drive_link',
  'SHENG': 'https://drive.google.com/drive/folders/1BNmOAL3nXmD9dQFmbvyodkXI-TQ2cCHV?usp=drive_link',
  'SHENNONG': 'https://drive.google.com/drive/folders/1cc35e8vFrK7_V8UHy_WySeXs1yrpr0VH?usp=drive_link',
  'SKY': 'https://drive.google.com/drive/folders/1PcthZ8L_4uw3hJvJIxXIOBJkmQSlmCVD?usp=drive_link',
  'SOCRATES': 'https://drive.google.com/drive/folders/1xLK-7eXyDvMkS6uZZzsjRdJI_2tXekKw?usp=drive_link',
  'STAR': 'https://drive.google.com/drive/folders/1veGfoZ2Zi4Zg7h7UveWpcUj5-cIletMo?usp=drive_link',
  'SUNSTONE': 'https://drive.google.com/drive/folders/1vvnMt0LsdrI9NMbW-tNvdb1eyc8VfKWe?usp=drive_link',
  'SWEET_K6A': 'https://drive.google.com/drive/folders/1O8Fckx7Hp5EeDy6hw8-RiEd6_NSOlJSv?usp=drive_link',
  'TAPAS': 'https://drive.google.com/drive/folders/12GKvaZe4DMPWL2c9sE3tfrym6Iv-gSEB?usp=drive_link',
  'TAOYAO': 'https://drive.google.com/drive/folders/1geUJQ488m2mVs5K8Z8sTgcrbI-oM9nk3?usp=drive_link',
  'THOR': 'https://drive.google.com/drive/folders/1JYYWN7F_VRSU_1WXAPF9S0KfSaSrI18p?usp=drive_link',
  'TOPAZ': 'https://drive.google.com/drive/folders/1g5_5qAp13VOhoq8cjJG7tEHeKslZNFDy?usp=drive_link',
  'UKE': 'https://drive.google.com/drive/folders/1U6GHUHYCp5q_UN7o4C74yPKin6YM69P5?usp=drive_link',
  'UNICORN': 'https://drive.google.com/drive/folders/13KbvwFOkgm23WW7EJkR4JVSz_lUwXAJ5?usp=drive_link',
  'VENUS': 'https://drive.google.com/drive/folders/1yzSqYr_xDL73C_SsreDaaw7pODApjx61?usp=drive_link',
  'VILI': 'https://drive.google.com/drive/folders/1MBnuZeu1bvbEvO0TSfwog4Korbb4gYB5?usp=drive_link',
  'VERMEER': 'https://drive.google.com/drive/folders/1JqT_apluCo4dnhUgsJL1PwEe4LXoYN0_?usp=drive_link',
  'XUN': 'https://drive.google.com/drive/folders/1IBMWQ17A_rXCO8KCE8F4lvo3WeXDvev6?usp=drive_link',
  'XUANYUAN': 'https://drive.google.com/drive/folders/1zH6erv7a1zL0TaeFIsO3CXdcvsPrQA8r?usp=drive_link',
  'YUDI': 'https://drive.google.com/drive/folders/1noUCEbaoan6DSEJtTGCGJO_621AHLzsH?usp=drive_link',
  'YUECHU': 'https://drive.google.com/drive/folders/1vq7CRfDNo9Rde-0tkP0v_NZkL25bxwuf?usp=drive_link',
  'YUNLUO': 'https://drive.google.com/drive/folders/1hakOO9eGRPV8qgE_iptgFHjoXD6lP34e?usp=drive_link',
  'ZEUS': 'https://drive.google.com/drive/folders/1UrSFNA9JxYIYb_P5uTLCl3UpJm61sKQG?usp=drive_link',
  'ZIRCON': 'https://drive.google.com/drive/folders/1D8gqFhnCshdX0s5JGIqe0Qn5nO8kj3nM?usp=drive_link',
  'ZIYI': 'https://drive.google.com/drive/folders/1CvvVvVZkAYCwlkJXaqRqseKeJujSY7Gk?usp=drive_link',
  'ZIZHAN': 'https://drive.google.com/drive/folders/1axaUQ0BndDrlGXt5wxMh9HBvz8HIDSDo?usp=drive_link',
  'ZORN': 'https://drive.google.com/drive/folders/1seVZVDwH7YdLmU_9OUdk6sp61CFMDkbk?usp=drive_link'
};

// Hyper Mods Tool link
const hyperModsToolLink = 'https://drive.google.com/drive/folders/1ppAB_Bn3yfAbqUgOk_7_frzUgIfGjJsr?usp=drive_link';

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

// Changelog data
const changelogData = {
  added: [
    'Gaming Mode tối ưu cho PUBG/BGMI, Free Fire, Call of Duty, COD Warzone',
    'Hỗ trợ ép 120Hz cho mọi ứng dụng',
    'Tần số quét linh hoạt: 1Hz / 60Hz / 90Hz / 120Hz',
    'Sao lưu Google Photos không giới hạn',
    'Tắt xác minh chữ ký app',
    'CorePatch & Tắt cờ bảo mật',
    'Multi-window đã nhiệm thông minh',
    'AOD nâng cao với màn hình khóa tuy chỉnh',
    'Lịch âm tích hợp trong trung tâm điều khiển',
    'Hyper Mods Lab với tính năng thử nghiệm',
    'Phát hành Hyper Mods đầu tiên',
    'Hỗ trợ HyperOS 1.0 (Android 14)',
    'Hỗ trợ HyperOS 2.0 (Android 14 - 15)',
    'Hỗ trợ HyperOS 3.0 (Android 15 - 16)',
    'Hỗ trợ toàn bộ động máy Snapdragon',
    'Tích hợp 16 ứng dụng được mod',
    'Tính năng Hybrid ROM kết hợp ổn định và tuy biến',
    'Custom recovery hỗ trợ (TWRP)'
  ],
  improved: [
    'Tối ưu quản lý RAM & GPU cho game',
    'Giảm nhiệt, ổn định khung hình khi chơi game',
    'Cải thiện hiệu năng hệ thống lên 25%',
    'Tối ưu hoa thời lượng pin',
    'Cải thiện độ mềm với 120Hz toàn hệ thống',
    'Tối ưu tương thích với động máy Snapdragon',
    'Cải thiện UI/UX với giao diện tuy chỉnh',
    'Tối ưu tương thích với ứng dụng MIUI',
    'Cải thiện độ ổn định từ ROM stock'
  ],
  fixed: [
    'Sửa lỗi crash khi ép tần số quét cao',
    'Sửa lỗi Gaming Mode không hoạt động trên một số game',
    'Sửa lỗi Google Photos backup không giới hạn',
    'Sửa lỗi CorePatch trên một số thiết bị',
    'Sửa lỗi Multi-window không hiển thị đúng',
    'Cải thiện độ ổn định toàn bộ',
    'Sửa lỗi tương thích với một số ứng dụng',
    'Sửa lỗi bootloop trên một số thiết bị'
  ]
};
