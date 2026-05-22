// Quran Stream Platform - Database
const RECITERS = [
  {
    "id": "hussary",
    "name": "الشيخ محمود خليل الحصري",
    "englishName": "Mahmoud Khalil Al-Husary",
    "slug": "mahmood_khaleel_al-husaree/",
    "shortName": "الحصري"
  },
  {
    "id": "minshawi_murattal",
    "name": "الشيخ محمد صديق المنشاوي (مرتل)",
    "englishName": "Muhammad Siddiq al-Minshawi (Murattal)",
    "slug": "muhammad_siddeeq_al-minshaawee/",
    "shortName": "المنشاوي"
  },
  {
    "id": "minshawi_mujawwad",
    "name": "الشيخ محمد صديق المنشاوي (مجود)",
    "englishName": "Muhammad Siddiq al-Minshawi (Mujawwad)",
    "slug": "minshawi_mujawwad/",
    "shortName": "المنشاوي (مجود)"
  },
  {
    "id": "abdulbasit_murattal",
    "name": "الشيخ عبد الباسط عبد الصمد (مرتل)",
    "englishName": "AbdulBaset AbdulSamad (Murattal)",
    "slug": "abdul_basit_murattal/",
    "shortName": "عبد الباسط"
  },
  {
    "id": "abdulbasit_mujawwad",
    "name": "الشيخ عبد الباسط عبد الصمد (مجود)",
    "englishName": "AbdulBaset AbdulSamad (Mujawwad)",
    "slug": "abdulbaset_mujawwad/",
    "shortName": "عبد الباسط (مجود)"
  },
  {
    "id": "alafasy",
    "name": "الشيخ مشاري راشد العفاسي",
    "englishName": "Mishari Rashid al-`Afasy",
    "slug": "mishaari_raashid_al_3afaasee/",
    "shortName": "العفاسي"
  },
  {
    "id": "maher",
    "name": "الشيخ ماهر المعيقلي",
    "englishName": "Maher al-Muaiqly",
    "slug": "maher_256/",
    "shortName": "المعيقلي"
  },
  {
    "id": "shatri",
    "name": "الشيخ أبو بكر الشاطري",
    "englishName": "Abu Bakr al-Shatri",
    "slug": "abu_bakr_ash-shaatree/",
    "shortName": "الشاطري"
  },
  {
    "id": "sudais",
    "name": "الشيخ عبد الرحمن السديس",
    "englishName": "Abdur-Rahman as-Sudais",
    "slug": "abdurrahmaan_as-sudays/",
    "shortName": "السديس"
  },
  {
    "id": "shuraym",
    "name": "الشيخ سعود الشريم",
    "englishName": "Sa`ud ash-Shuraym",
    "slug": "sa3ood_al-shuraym/",
    "shortName": "الشريم"
  },
  {
    "id": "ghamdi",
    "name": "الشيخ سعد الغامدي",
    "englishName": "Saad al-Ghamdi",
    "slug": "sa3d_al-ghaamidi/complete/",
    "shortName": "الغامدي"
  },
  {
    "id": "ajmy",
    "name": "الشيخ أحمد بن علي العجمي",
    "englishName": "Ahmed al-Ajmy",
    "slug": "ahmed_ibn_3ali_al-3ajamy/",
    "shortName": "العجمي"
  },
  {
    "id": "dussary",
    "name": "الشيخ ياسر الدوسري",
    "englishName": "Yasser ad-Dussary",
    "slug": "yasser_ad-dussary/",
    "shortName": "الدوسري"
  }
];

const SURAHS = [
  {
    "id": 1,
    "name": "الفاتحة",
    "englishName": "Al-Fatihah",
    "versesCount": 7,
    "revelationPlace": "makkah"
  },
  {
    "id": 2,
    "name": "البقرة",
    "englishName": "Al-Baqarah",
    "versesCount": 286,
    "revelationPlace": "madinah"
  },
  {
    "id": 3,
    "name": "آل عمران",
    "englishName": "Ali 'Imran",
    "versesCount": 200,
    "revelationPlace": "madinah"
  },
  {
    "id": 4,
    "name": "النساء",
    "englishName": "An-Nisa",
    "versesCount": 176,
    "revelationPlace": "madinah"
  },
  {
    "id": 5,
    "name": "المائدة",
    "englishName": "Al-Ma'idah",
    "versesCount": 120,
    "revelationPlace": "madinah"
  },
  {
    "id": 6,
    "name": "الأنعام",
    "englishName": "Al-An'am",
    "versesCount": 165,
    "revelationPlace": "makkah"
  },
  {
    "id": 7,
    "name": "الأعراف",
    "englishName": "Al-A'raf",
    "versesCount": 206,
    "revelationPlace": "makkah"
  },
  {
    "id": 8,
    "name": "الأنفال",
    "englishName": "Al-Anfal",
    "versesCount": 75,
    "revelationPlace": "madinah"
  },
  {
    "id": 9,
    "name": "التوبة",
    "englishName": "At-Tawbah",
    "versesCount": 129,
    "revelationPlace": "madinah"
  },
  {
    "id": 10,
    "name": "يونس",
    "englishName": "Yunus",
    "versesCount": 109,
    "revelationPlace": "makkah"
  },
  {
    "id": 11,
    "name": "هود",
    "englishName": "Hud",
    "versesCount": 123,
    "revelationPlace": "makkah"
  },
  {
    "id": 12,
    "name": "يوسف",
    "englishName": "Yusuf",
    "versesCount": 111,
    "revelationPlace": "makkah"
  },
  {
    "id": 13,
    "name": "الرعد",
    "englishName": "Ar-Ra'd",
    "versesCount": 43,
    "revelationPlace": "madinah"
  },
  {
    "id": 14,
    "name": "ابراهيم",
    "englishName": "Ibrahim",
    "versesCount": 52,
    "revelationPlace": "makkah"
  },
  {
    "id": 15,
    "name": "الحجر",
    "englishName": "Al-Hijr",
    "versesCount": 99,
    "revelationPlace": "makkah"
  },
  {
    "id": 16,
    "name": "النحل",
    "englishName": "An-Nahl",
    "versesCount": 128,
    "revelationPlace": "makkah"
  },
  {
    "id": 17,
    "name": "الإسراء",
    "englishName": "Al-Isra",
    "versesCount": 111,
    "revelationPlace": "makkah"
  },
  {
    "id": 18,
    "name": "الكهف",
    "englishName": "Al-Kahf",
    "versesCount": 110,
    "revelationPlace": "makkah"
  },
  {
    "id": 19,
    "name": "مريم",
    "englishName": "Maryam",
    "versesCount": 98,
    "revelationPlace": "makkah"
  },
  {
    "id": 20,
    "name": "طه",
    "englishName": "Taha",
    "versesCount": 135,
    "revelationPlace": "makkah"
  },
  {
    "id": 21,
    "name": "الأنبياء",
    "englishName": "Al-Anbya",
    "versesCount": 112,
    "revelationPlace": "makkah"
  },
  {
    "id": 22,
    "name": "الحج",
    "englishName": "Al-Hajj",
    "versesCount": 78,
    "revelationPlace": "madinah"
  },
  {
    "id": 23,
    "name": "المؤمنون",
    "englishName": "Al-Mu'minun",
    "versesCount": 118,
    "revelationPlace": "makkah"
  },
  {
    "id": 24,
    "name": "النور",
    "englishName": "An-Nur",
    "versesCount": 64,
    "revelationPlace": "madinah"
  },
  {
    "id": 25,
    "name": "الفرقان",
    "englishName": "Al-Furqan",
    "versesCount": 77,
    "revelationPlace": "makkah"
  },
  {
    "id": 26,
    "name": "الشعراء",
    "englishName": "Ash-Shu'ara",
    "versesCount": 227,
    "revelationPlace": "makkah"
  },
  {
    "id": 27,
    "name": "النمل",
    "englishName": "An-Naml",
    "versesCount": 93,
    "revelationPlace": "makkah"
  },
  {
    "id": 28,
    "name": "القصص",
    "englishName": "Al-Qasas",
    "versesCount": 88,
    "revelationPlace": "makkah"
  },
  {
    "id": 29,
    "name": "العنكبوت",
    "englishName": "Al-'Ankabut",
    "versesCount": 69,
    "revelationPlace": "makkah"
  },
  {
    "id": 30,
    "name": "الروم",
    "englishName": "Ar-Rum",
    "versesCount": 60,
    "revelationPlace": "makkah"
  },
  {
    "id": 31,
    "name": "لقمان",
    "englishName": "Luqman",
    "versesCount": 34,
    "revelationPlace": "makkah"
  },
  {
    "id": 32,
    "name": "السجدة",
    "englishName": "As-Sajdah",
    "versesCount": 30,
    "revelationPlace": "makkah"
  },
  {
    "id": 33,
    "name": "الأحزاب",
    "englishName": "Al-Ahzab",
    "versesCount": 73,
    "revelationPlace": "madinah"
  },
  {
    "id": 34,
    "name": "سبإ",
    "englishName": "Saba",
    "versesCount": 54,
    "revelationPlace": "makkah"
  },
  {
    "id": 35,
    "name": "فاطر",
    "englishName": "Fatir",
    "versesCount": 45,
    "revelationPlace": "makkah"
  },
  {
    "id": 36,
    "name": "يس",
    "englishName": "Ya-Sin",
    "versesCount": 83,
    "revelationPlace": "makkah"
  },
  {
    "id": 37,
    "name": "الصافات",
    "englishName": "As-Saffat",
    "versesCount": 182,
    "revelationPlace": "makkah"
  },
  {
    "id": 38,
    "name": "ص",
    "englishName": "Sad",
    "versesCount": 88,
    "revelationPlace": "makkah"
  },
  {
    "id": 39,
    "name": "الزمر",
    "englishName": "Az-Zumar",
    "versesCount": 75,
    "revelationPlace": "makkah"
  },
  {
    "id": 40,
    "name": "غافر",
    "englishName": "Ghafir",
    "versesCount": 85,
    "revelationPlace": "makkah"
  },
  {
    "id": 41,
    "name": "فصلت",
    "englishName": "Fussilat",
    "versesCount": 54,
    "revelationPlace": "makkah"
  },
  {
    "id": 42,
    "name": "الشورى",
    "englishName": "Ash-Shuraa",
    "versesCount": 53,
    "revelationPlace": "makkah"
  },
  {
    "id": 43,
    "name": "الزخرف",
    "englishName": "Az-Zukhruf",
    "versesCount": 89,
    "revelationPlace": "makkah"
  },
  {
    "id": 44,
    "name": "الدخان",
    "englishName": "Ad-Dukhan",
    "versesCount": 59,
    "revelationPlace": "makkah"
  },
  {
    "id": 45,
    "name": "الجاثية",
    "englishName": "Al-Jathiyah",
    "versesCount": 37,
    "revelationPlace": "makkah"
  },
  {
    "id": 46,
    "name": "الأحقاف",
    "englishName": "Al-Ahqaf",
    "versesCount": 35,
    "revelationPlace": "makkah"
  },
  {
    "id": 47,
    "name": "محمد",
    "englishName": "Muhammad",
    "versesCount": 38,
    "revelationPlace": "madinah"
  },
  {
    "id": 48,
    "name": "الفتح",
    "englishName": "Al-Fath",
    "versesCount": 29,
    "revelationPlace": "madinah"
  },
  {
    "id": 49,
    "name": "الحجرات",
    "englishName": "Al-Hujurat",
    "versesCount": 18,
    "revelationPlace": "madinah"
  },
  {
    "id": 50,
    "name": "ق",
    "englishName": "Qaf",
    "versesCount": 45,
    "revelationPlace": "makkah"
  },
  {
    "id": 51,
    "name": "الذاريات",
    "englishName": "Adh-Dhariyat",
    "versesCount": 60,
    "revelationPlace": "makkah"
  },
  {
    "id": 52,
    "name": "الطور",
    "englishName": "At-Tur",
    "versesCount": 49,
    "revelationPlace": "makkah"
  },
  {
    "id": 53,
    "name": "النجم",
    "englishName": "An-Najm",
    "versesCount": 62,
    "revelationPlace": "makkah"
  },
  {
    "id": 54,
    "name": "القمر",
    "englishName": "Al-Qamar",
    "versesCount": 55,
    "revelationPlace": "makkah"
  },
  {
    "id": 55,
    "name": "الرحمن",
    "englishName": "Ar-Rahman",
    "versesCount": 78,
    "revelationPlace": "madinah"
  },
  {
    "id": 56,
    "name": "الواقعة",
    "englishName": "Al-Waqi'ah",
    "versesCount": 96,
    "revelationPlace": "makkah"
  },
  {
    "id": 57,
    "name": "الحديد",
    "englishName": "Al-Hadid",
    "versesCount": 29,
    "revelationPlace": "madinah"
  },
  {
    "id": 58,
    "name": "المجادلة",
    "englishName": "Al-Mujadila",
    "versesCount": 22,
    "revelationPlace": "madinah"
  },
  {
    "id": 59,
    "name": "الحشر",
    "englishName": "Al-Hashr",
    "versesCount": 24,
    "revelationPlace": "madinah"
  },
  {
    "id": 60,
    "name": "الممتحنة",
    "englishName": "Al-Mumtahanah",
    "versesCount": 13,
    "revelationPlace": "madinah"
  },
  {
    "id": 61,
    "name": "الصف",
    "englishName": "As-Saf",
    "versesCount": 14,
    "revelationPlace": "madinah"
  },
  {
    "id": 62,
    "name": "الجمعة",
    "englishName": "Al-Jumu'ah",
    "versesCount": 11,
    "revelationPlace": "madinah"
  },
  {
    "id": 63,
    "name": "المنافقون",
    "englishName": "Al-Munafiqun",
    "versesCount": 11,
    "revelationPlace": "madinah"
  },
  {
    "id": 64,
    "name": "التغابن",
    "englishName": "At-Taghabun",
    "versesCount": 18,
    "revelationPlace": "madinah"
  },
  {
    "id": 65,
    "name": "الطلاق",
    "englishName": "At-Talaq",
    "versesCount": 12,
    "revelationPlace": "madinah"
  },
  {
    "id": 66,
    "name": "التحريم",
    "englishName": "At-Tahrim",
    "versesCount": 12,
    "revelationPlace": "madinah"
  },
  {
    "id": 67,
    "name": "الملك",
    "englishName": "Al-Mulk",
    "versesCount": 30,
    "revelationPlace": "makkah"
  },
  {
    "id": 68,
    "name": "القلم",
    "englishName": "Al-Qalam",
    "versesCount": 52,
    "revelationPlace": "makkah"
  },
  {
    "id": 69,
    "name": "الحاقة",
    "englishName": "Al-Haqqah",
    "versesCount": 52,
    "revelationPlace": "makkah"
  },
  {
    "id": 70,
    "name": "المعارج",
    "englishName": "Al-Ma'arij",
    "versesCount": 44,
    "revelationPlace": "makkah"
  },
  {
    "id": 71,
    "name": "نوح",
    "englishName": "Nuh",
    "versesCount": 28,
    "revelationPlace": "makkah"
  },
  {
    "id": 72,
    "name": "الجن",
    "englishName": "Al-Jinn",
    "versesCount": 28,
    "revelationPlace": "makkah"
  },
  {
    "id": 73,
    "name": "المزمل",
    "englishName": "Al-Muzzammil",
    "versesCount": 20,
    "revelationPlace": "makkah"
  },
  {
    "id": 74,
    "name": "المدثر",
    "englishName": "Al-Muddaththir",
    "versesCount": 56,
    "revelationPlace": "makkah"
  },
  {
    "id": 75,
    "name": "القيامة",
    "englishName": "Al-Qiyamah",
    "versesCount": 40,
    "revelationPlace": "makkah"
  },
  {
    "id": 76,
    "name": "الانسان",
    "englishName": "Al-Insan",
    "versesCount": 31,
    "revelationPlace": "madinah"
  },
  {
    "id": 77,
    "name": "المرسلات",
    "englishName": "Al-Mursalat",
    "versesCount": 50,
    "revelationPlace": "makkah"
  },
  {
    "id": 78,
    "name": "النبإ",
    "englishName": "An-Naba",
    "versesCount": 40,
    "revelationPlace": "makkah"
  },
  {
    "id": 79,
    "name": "النازعات",
    "englishName": "An-Nazi'at",
    "versesCount": 46,
    "revelationPlace": "makkah"
  },
  {
    "id": 80,
    "name": "عبس",
    "englishName": "'Abasa",
    "versesCount": 42,
    "revelationPlace": "makkah"
  },
  {
    "id": 81,
    "name": "التكوير",
    "englishName": "At-Takwir",
    "versesCount": 29,
    "revelationPlace": "makkah"
  },
  {
    "id": 82,
    "name": "الإنفطار",
    "englishName": "Al-Infitar",
    "versesCount": 19,
    "revelationPlace": "makkah"
  },
  {
    "id": 83,
    "name": "المطففين",
    "englishName": "Al-Mutaffifin",
    "versesCount": 36,
    "revelationPlace": "makkah"
  },
  {
    "id": 84,
    "name": "الإنشقاق",
    "englishName": "Al-Inshiqaq",
    "versesCount": 25,
    "revelationPlace": "makkah"
  },
  {
    "id": 85,
    "name": "البروج",
    "englishName": "Al-Buruj",
    "versesCount": 22,
    "revelationPlace": "makkah"
  },
  {
    "id": 86,
    "name": "الطارق",
    "englishName": "At-Tariq",
    "versesCount": 17,
    "revelationPlace": "makkah"
  },
  {
    "id": 87,
    "name": "الأعلى",
    "englishName": "Al-A'la",
    "versesCount": 19,
    "revelationPlace": "makkah"
  },
  {
    "id": 88,
    "name": "الغاشية",
    "englishName": "Al-Ghashiyah",
    "versesCount": 26,
    "revelationPlace": "makkah"
  },
  {
    "id": 89,
    "name": "الفجر",
    "englishName": "Al-Fajr",
    "versesCount": 30,
    "revelationPlace": "makkah"
  },
  {
    "id": 90,
    "name": "البلد",
    "englishName": "Al-Balad",
    "versesCount": 20,
    "revelationPlace": "makkah"
  },
  {
    "id": 91,
    "name": "الشمس",
    "englishName": "Ash-Shams",
    "versesCount": 15,
    "revelationPlace": "makkah"
  },
  {
    "id": 92,
    "name": "الليل",
    "englishName": "Al-Layl",
    "versesCount": 21,
    "revelationPlace": "makkah"
  },
  {
    "id": 93,
    "name": "الضحى",
    "englishName": "Ad-Duhaa",
    "versesCount": 11,
    "revelationPlace": "makkah"
  },
  {
    "id": 94,
    "name": "الشرح",
    "englishName": "Ash-Sharh",
    "versesCount": 8,
    "revelationPlace": "makkah"
  },
  {
    "id": 95,
    "name": "التين",
    "englishName": "At-Tin",
    "versesCount": 8,
    "revelationPlace": "makkah"
  },
  {
    "id": 96,
    "name": "العلق",
    "englishName": "Al-'Alaq",
    "versesCount": 19,
    "revelationPlace": "makkah"
  },
  {
    "id": 97,
    "name": "القدر",
    "englishName": "Al-Qadr",
    "versesCount": 5,
    "revelationPlace": "makkah"
  },
  {
    "id": 98,
    "name": "البينة",
    "englishName": "Al-Bayyinah",
    "versesCount": 8,
    "revelationPlace": "madinah"
  },
  {
    "id": 99,
    "name": "الزلزلة",
    "englishName": "Az-Zalzalah",
    "versesCount": 8,
    "revelationPlace": "madinah"
  },
  {
    "id": 100,
    "name": "العاديات",
    "englishName": "Al-'Adiyat",
    "versesCount": 11,
    "revelationPlace": "makkah"
  },
  {
    "id": 101,
    "name": "القارعة",
    "englishName": "Al-Qari'ah",
    "versesCount": 11,
    "revelationPlace": "makkah"
  },
  {
    "id": 102,
    "name": "التكاثر",
    "englishName": "At-Takathur",
    "versesCount": 8,
    "revelationPlace": "makkah"
  },
  {
    "id": 103,
    "name": "العصر",
    "englishName": "Al-'Asr",
    "versesCount": 3,
    "revelationPlace": "makkah"
  },
  {
    "id": 104,
    "name": "الهمزة",
    "englishName": "Al-Humazah",
    "versesCount": 9,
    "revelationPlace": "makkah"
  },
  {
    "id": 105,
    "name": "الفيل",
    "englishName": "Al-Fil",
    "versesCount": 5,
    "revelationPlace": "makkah"
  },
  {
    "id": 106,
    "name": "قريش",
    "englishName": "Quraysh",
    "versesCount": 4,
    "revelationPlace": "makkah"
  },
  {
    "id": 107,
    "name": "الماعون",
    "englishName": "Al-Ma'un",
    "versesCount": 7,
    "revelationPlace": "makkah"
  },
  {
    "id": 108,
    "name": "الكوثر",
    "englishName": "Al-Kawthar",
    "versesCount": 3,
    "revelationPlace": "makkah"
  },
  {
    "id": 109,
    "name": "الكافرون",
    "englishName": "Al-Kafirun",
    "versesCount": 6,
    "revelationPlace": "makkah"
  },
  {
    "id": 110,
    "name": "النصر",
    "englishName": "An-Nasr",
    "versesCount": 3,
    "revelationPlace": "madinah"
  },
  {
    "id": 111,
    "name": "المسد",
    "englishName": "Al-Masad",
    "versesCount": 5,
    "revelationPlace": "makkah"
  },
  {
    "id": 112,
    "name": "الإخلاص",
    "englishName": "Al-Ikhlas",
    "versesCount": 4,
    "revelationPlace": "makkah"
  },
  {
    "id": 113,
    "name": "الفلق",
    "englishName": "Al-Falaq",
    "versesCount": 5,
    "revelationPlace": "makkah"
  },
  {
    "id": 114,
    "name": "الناس",
    "englishName": "An-Nas",
    "versesCount": 6,
    "revelationPlace": "makkah"
  }
];
