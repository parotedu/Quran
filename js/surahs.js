const SURAHS = [
  {
    "id": 1,
    "name": "الفاتحة",
    "englishName": "Al-Fatihah",
    "versesCount": 7,
    "revelationPlace": "makkah",
    "localUrl": "Quran/01_الفاتحة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/001.mp3"
  },
  {
    "id": 2,
    "name": "البقرة",
    "englishName": "Al-Baqarah",
    "versesCount": 286,
    "revelationPlace": "madinah",
    "localUrl": "Quran/02_البقرة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/002.mp3"
  },
  {
    "id": 3,
    "name": "آل عمران",
    "englishName": "Ali 'Imran",
    "versesCount": 200,
    "revelationPlace": "madinah",
    "localUrl": "Quran/03_آل_عمران.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/003.mp3"
  },
  {
    "id": 4,
    "name": "النساء",
    "englishName": "An-Nisa",
    "versesCount": 176,
    "revelationPlace": "madinah",
    "localUrl": "Quran/04_النساء.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/004.mp3"
  },
  {
    "id": 5,
    "name": "المائدة",
    "englishName": "Al-Ma'idah",
    "versesCount": 120,
    "revelationPlace": "madinah",
    "localUrl": "Quran/05_المائدة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/005.mp3"
  },
  {
    "id": 6,
    "name": "الأنعام",
    "englishName": "Al-An'am",
    "versesCount": 165,
    "revelationPlace": "makkah",
    "localUrl": "Quran/06_الأنعام.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/006.mp3"
  },
  {
    "id": 7,
    "name": "الأعراف",
    "englishName": "Al-A'raf",
    "versesCount": 206,
    "revelationPlace": "makkah",
    "localUrl": "Quran/07_الأعراف.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/007.mp3"
  },
  {
    "id": 8,
    "name": "الأنفال",
    "englishName": "Al-Anfal",
    "versesCount": 75,
    "revelationPlace": "madinah",
    "localUrl": "Quran/08_الأنفال.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/008.mp3"
  },
  {
    "id": 9,
    "name": "التوبة",
    "englishName": "At-Tawbah",
    "versesCount": 129,
    "revelationPlace": "madinah",
    "localUrl": "Quran/09_التوبة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/009.mp3"
  },
  {
    "id": 10,
    "name": "يونس",
    "englishName": "Yunus",
    "versesCount": 109,
    "revelationPlace": "makkah",
    "localUrl": "Quran/010.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/010.mp3"
  },
  {
    "id": 11,
    "name": "هود",
    "englishName": "Hud",
    "versesCount": 123,
    "revelationPlace": "makkah",
    "localUrl": "Quran/011.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/011.mp3"
  },
  {
    "id": 12,
    "name": "يوسف",
    "englishName": "Yusuf",
    "versesCount": 111,
    "revelationPlace": "makkah",
    "localUrl": "Quran/12_يوسف.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/012.mp3"
  },
  {
    "id": 13,
    "name": "الرعد",
    "englishName": "Ar-Ra'd",
    "versesCount": 43,
    "revelationPlace": "madinah",
    "localUrl": "Quran/13_الرعد.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/013.mp3"
  },
  {
    "id": 14,
    "name": "ابراهيم",
    "englishName": "Ibrahim",
    "versesCount": 52,
    "revelationPlace": "makkah",
    "localUrl": "Quran/14_إبراهيم.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/014.mp3"
  },
  {
    "id": 15,
    "name": "الحجر",
    "englishName": "Al-Hijr",
    "versesCount": 99,
    "revelationPlace": "makkah",
    "localUrl": "Quran/15_الحجر.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/015.mp3"
  },
  {
    "id": 16,
    "name": "النحل",
    "englishName": "An-Nahl",
    "versesCount": 128,
    "revelationPlace": "makkah",
    "localUrl": "Quran/16_النحل.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/016.mp3"
  },
  {
    "id": 17,
    "name": "الإسراء",
    "englishName": "Al-Isra",
    "versesCount": 111,
    "revelationPlace": "makkah",
    "localUrl": "Quran/17_الإسراء.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/017.mp3"
  },
  {
    "id": 18,
    "name": "الكهف",
    "englishName": "Al-Kahf",
    "versesCount": 110,
    "revelationPlace": "makkah",
    "localUrl": "Quran/18_الكهف.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/018.mp3"
  },
  {
    "id": 19,
    "name": "مريم",
    "englishName": "Maryam",
    "versesCount": 98,
    "revelationPlace": "makkah",
    "localUrl": "Quran/19_مريم.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/019.mp3"
  },
  {
    "id": 20,
    "name": "طه",
    "englishName": "Taha",
    "versesCount": 135,
    "revelationPlace": "makkah",
    "localUrl": "Quran/20_طه.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/020.mp3"
  },
  {
    "id": 21,
    "name": "الأنبياء",
    "englishName": "Al-Anbya",
    "versesCount": 112,
    "revelationPlace": "makkah",
    "localUrl": "Quran/21_الأنبياء.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/021.mp3"
  },
  {
    "id": 22,
    "name": "الحج",
    "englishName": "Al-Hajj",
    "versesCount": 78,
    "revelationPlace": "madinah",
    "localUrl": "Quran/22_الحج.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/022.mp3"
  },
  {
    "id": 23,
    "name": "المؤمنون",
    "englishName": "Al-Mu'minun",
    "versesCount": 118,
    "revelationPlace": "makkah",
    "localUrl": "Quran/23_المؤمنون.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/023.mp3"
  },
  {
    "id": 24,
    "name": "النور",
    "englishName": "An-Nur",
    "versesCount": 64,
    "revelationPlace": "madinah",
    "localUrl": "Quran/24_النور.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/024.mp3"
  },
  {
    "id": 25,
    "name": "الفرقان",
    "englishName": "Al-Furqan",
    "versesCount": 77,
    "revelationPlace": "makkah",
    "localUrl": "Quran/25_الفرقان.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/025.mp3"
  },
  {
    "id": 26,
    "name": "الشعراء",
    "englishName": "Ash-Shu'ara",
    "versesCount": 227,
    "revelationPlace": "makkah",
    "localUrl": "Quran/26_الشعراء.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/026.mp3"
  },
  {
    "id": 27,
    "name": "النمل",
    "englishName": "An-Naml",
    "versesCount": 93,
    "revelationPlace": "makkah",
    "localUrl": "Quran/27_النمل.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/027.mp3"
  },
  {
    "id": 28,
    "name": "القصص",
    "englishName": "Al-Qasas",
    "versesCount": 88,
    "revelationPlace": "makkah",
    "localUrl": "Quran/28_القصص.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/028.mp3"
  },
  {
    "id": 29,
    "name": "العنكبوت",
    "englishName": "Al-'Ankabut",
    "versesCount": 69,
    "revelationPlace": "makkah",
    "localUrl": "Quran/29_العنكبوت.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/029.mp3"
  },
  {
    "id": 30,
    "name": "الروم",
    "englishName": "Ar-Rum",
    "versesCount": 60,
    "revelationPlace": "makkah",
    "localUrl": "Quran/30_الروم.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/030.mp3"
  },
  {
    "id": 31,
    "name": "لقمان",
    "englishName": "Luqman",
    "versesCount": 34,
    "revelationPlace": "makkah",
    "localUrl": "Quran/31_لقمان.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/031.mp3"
  },
  {
    "id": 32,
    "name": "السجدة",
    "englishName": "As-Sajdah",
    "versesCount": 30,
    "revelationPlace": "makkah",
    "localUrl": "Quran/32_السجدة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/032.mp3"
  },
  {
    "id": 33,
    "name": "الأحزاب",
    "englishName": "Al-Ahzab",
    "versesCount": 73,
    "revelationPlace": "madinah",
    "localUrl": "Quran/33_الأحزاب.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/033.mp3"
  },
  {
    "id": 34,
    "name": "سبإ",
    "englishName": "Saba",
    "versesCount": 54,
    "revelationPlace": "makkah",
    "localUrl": "Quran/34_سبأ.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/034.mp3"
  },
  {
    "id": 35,
    "name": "فاطر",
    "englishName": "Fatir",
    "versesCount": 45,
    "revelationPlace": "makkah",
    "localUrl": "Quran/35_فاطر.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/035.mp3"
  },
  {
    "id": 36,
    "name": "يس",
    "englishName": "Ya-Sin",
    "versesCount": 83,
    "revelationPlace": "makkah",
    "localUrl": "Quran/36_يس.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/036.mp3"
  },
  {
    "id": 37,
    "name": "الصافات",
    "englishName": "As-Saffat",
    "versesCount": 182,
    "revelationPlace": "makkah",
    "localUrl": "Quran/37_الصافات.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/037.mp3"
  },
  {
    "id": 38,
    "name": "ص",
    "englishName": "Sad",
    "versesCount": 88,
    "revelationPlace": "makkah",
    "localUrl": "Quran/38_ص.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/038.mp3"
  },
  {
    "id": 39,
    "name": "الزمر",
    "englishName": "Az-Zumar",
    "versesCount": 75,
    "revelationPlace": "makkah",
    "localUrl": "Quran/39_الزمر.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/039.mp3"
  },
  {
    "id": 40,
    "name": "غافر",
    "englishName": "Ghafir",
    "versesCount": 85,
    "revelationPlace": "makkah",
    "localUrl": "Quran/40_غافر.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/040.mp3"
  },
  {
    "id": 41,
    "name": "فصلت",
    "englishName": "Fussilat",
    "versesCount": 54,
    "revelationPlace": "makkah",
    "localUrl": "Quran/41_فصلت.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/041.mp3"
  },
  {
    "id": 42,
    "name": "الشورى",
    "englishName": "Ash-Shuraa",
    "versesCount": 53,
    "revelationPlace": "makkah",
    "localUrl": "Quran/42_الشورى.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/042.mp3"
  },
  {
    "id": 43,
    "name": "الزخرف",
    "englishName": "Az-Zukhruf",
    "versesCount": 89,
    "revelationPlace": "makkah",
    "localUrl": "Quran/43_الزخرف.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/043.mp3"
  },
  {
    "id": 44,
    "name": "الدخان",
    "englishName": "Ad-Dukhan",
    "versesCount": 59,
    "revelationPlace": "makkah",
    "localUrl": "Quran/44_الدخان.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/044.mp3"
  },
  {
    "id": 45,
    "name": "الجاثية",
    "englishName": "Al-Jathiyah",
    "versesCount": 37,
    "revelationPlace": "makkah",
    "localUrl": "Quran/45_الجاثية.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/045.mp3"
  },
  {
    "id": 46,
    "name": "الأحقاف",
    "englishName": "Al-Ahqaf",
    "versesCount": 35,
    "revelationPlace": "makkah",
    "localUrl": "Quran/46_الأحقاف.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/046.mp3"
  },
  {
    "id": 47,
    "name": "محمد",
    "englishName": "Muhammad",
    "versesCount": 38,
    "revelationPlace": "madinah",
    "localUrl": "Quran/47_محمد.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/047.mp3"
  },
  {
    "id": 48,
    "name": "الفتح",
    "englishName": "Al-Fath",
    "versesCount": 29,
    "revelationPlace": "madinah",
    "localUrl": "Quran/48_الفتح.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/048.mp3"
  },
  {
    "id": 49,
    "name": "الحجرات",
    "englishName": "Al-Hujurat",
    "versesCount": 18,
    "revelationPlace": "madinah",
    "localUrl": "Quran/49_الحجرات.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/049.mp3"
  },
  {
    "id": 50,
    "name": "ق",
    "englishName": "Qaf",
    "versesCount": 45,
    "revelationPlace": "makkah",
    "localUrl": "Quran/50_ق.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/050.mp3"
  },
  {
    "id": 51,
    "name": "الذاريات",
    "englishName": "Adh-Dhariyat",
    "versesCount": 60,
    "revelationPlace": "makkah",
    "localUrl": "Quran/51_الذاريات.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/051.mp3"
  },
  {
    "id": 52,
    "name": "الطور",
    "englishName": "At-Tur",
    "versesCount": 49,
    "revelationPlace": "makkah",
    "localUrl": "Quran/52_الطور.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/052.mp3"
  },
  {
    "id": 53,
    "name": "النجم",
    "englishName": "An-Najm",
    "versesCount": 62,
    "revelationPlace": "makkah",
    "localUrl": "Quran/53_النجم.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/053.mp3"
  },
  {
    "id": 54,
    "name": "القمر",
    "englishName": "Al-Qamar",
    "versesCount": 55,
    "revelationPlace": "makkah",
    "localUrl": "Quran/54_القمر.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/054.mp3"
  },
  {
    "id": 55,
    "name": "الرحمن",
    "englishName": "Ar-Rahman",
    "versesCount": 78,
    "revelationPlace": "madinah",
    "localUrl": "Quran/55_الرحمن.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/055.mp3"
  },
  {
    "id": 56,
    "name": "الواقعة",
    "englishName": "Al-Waqi'ah",
    "versesCount": 96,
    "revelationPlace": "makkah",
    "localUrl": "Quran/56_الواقعة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/056.mp3"
  },
  {
    "id": 57,
    "name": "الحديد",
    "englishName": "Al-Hadid",
    "versesCount": 29,
    "revelationPlace": "madinah",
    "localUrl": "Quran/57_الحديد.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/057.mp3"
  },
  {
    "id": 58,
    "name": "المجادلة",
    "englishName": "Al-Mujadila",
    "versesCount": 22,
    "revelationPlace": "madinah",
    "localUrl": "Quran/58_المجادلة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/058.mp3"
  },
  {
    "id": 59,
    "name": "الحشر",
    "englishName": "Al-Hashr",
    "versesCount": 24,
    "revelationPlace": "madinah",
    "localUrl": "Quran/59_الحشر.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/059.mp3"
  },
  {
    "id": 60,
    "name": "الممتحنة",
    "englishName": "Al-Mumtahanah",
    "versesCount": 13,
    "revelationPlace": "madinah",
    "localUrl": "Quran/60_الممتحنة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/060.mp3"
  },
  {
    "id": 61,
    "name": "الصف",
    "englishName": "As-Saf",
    "versesCount": 14,
    "revelationPlace": "madinah",
    "localUrl": "Quran/61_الصف.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/061.mp3"
  },
  {
    "id": 62,
    "name": "الجمعة",
    "englishName": "Al-Jumu'ah",
    "versesCount": 11,
    "revelationPlace": "madinah",
    "localUrl": "Quran/62_الجمعة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/062.mp3"
  },
  {
    "id": 63,
    "name": "المنافقون",
    "englishName": "Al-Munafiqun",
    "versesCount": 11,
    "revelationPlace": "madinah",
    "localUrl": "Quran/63_المنافقون.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/063.mp3"
  },
  {
    "id": 64,
    "name": "التغابن",
    "englishName": "At-Taghabun",
    "versesCount": 18,
    "revelationPlace": "madinah",
    "localUrl": "Quran/64_التغابن.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/064.mp3"
  },
  {
    "id": 65,
    "name": "الطلاق",
    "englishName": "At-Talaq",
    "versesCount": 12,
    "revelationPlace": "madinah",
    "localUrl": "Quran/65_الطلاق.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/065.mp3"
  },
  {
    "id": 66,
    "name": "التحريم",
    "englishName": "At-Tahrim",
    "versesCount": 12,
    "revelationPlace": "madinah",
    "localUrl": "Quran/66_التحريم.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/066.mp3"
  },
  {
    "id": 67,
    "name": "الملك",
    "englishName": "Al-Mulk",
    "versesCount": 30,
    "revelationPlace": "makkah",
    "localUrl": "Quran/67_الملك.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/067.mp3"
  },
  {
    "id": 68,
    "name": "القلم",
    "englishName": "Al-Qalam",
    "versesCount": 52,
    "revelationPlace": "makkah",
    "localUrl": "Quran/68_القلم.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/068.mp3"
  },
  {
    "id": 69,
    "name": "الحاقة",
    "englishName": "Al-Haqqah",
    "versesCount": 52,
    "revelationPlace": "makkah",
    "localUrl": "Quran/69_الحاقة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/069.mp3"
  },
  {
    "id": 70,
    "name": "المعارج",
    "englishName": "Al-Ma'arij",
    "versesCount": 44,
    "revelationPlace": "makkah",
    "localUrl": "Quran/70_المعارج.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/070.mp3"
  },
  {
    "id": 71,
    "name": "نوح",
    "englishName": "Nuh",
    "versesCount": 28,
    "revelationPlace": "makkah",
    "localUrl": "Quran/71_نوح.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/071.mp3"
  },
  {
    "id": 72,
    "name": "الجن",
    "englishName": "Al-Jinn",
    "versesCount": 28,
    "revelationPlace": "makkah",
    "localUrl": "Quran/72_الجن.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/072.mp3"
  },
  {
    "id": 73,
    "name": "المزمل",
    "englishName": "Al-Muzzammil",
    "versesCount": 20,
    "revelationPlace": "makkah",
    "localUrl": "Quran/73_المزمل.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/073.mp3"
  },
  {
    "id": 74,
    "name": "المدثر",
    "englishName": "Al-Muddaththir",
    "versesCount": 56,
    "revelationPlace": "makkah",
    "localUrl": "Quran/74_المدثر.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/074.mp3"
  },
  {
    "id": 75,
    "name": "القيامة",
    "englishName": "Al-Qiyamah",
    "versesCount": 40,
    "revelationPlace": "makkah",
    "localUrl": "Quran/75_القيامة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/075.mp3"
  },
  {
    "id": 76,
    "name": "الانسان",
    "englishName": "Al-Insan",
    "versesCount": 31,
    "revelationPlace": "madinah",
    "localUrl": "Quran/76_الإنسان.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/076.mp3"
  },
  {
    "id": 77,
    "name": "المرسلات",
    "englishName": "Al-Mursalat",
    "versesCount": 50,
    "revelationPlace": "makkah",
    "localUrl": "Quran/77_المرسلات.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/077.mp3"
  },
  {
    "id": 78,
    "name": "النبإ",
    "englishName": "An-Naba",
    "versesCount": 40,
    "revelationPlace": "makkah",
    "localUrl": "Quran/78_النبأ.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/078.mp3"
  },
  {
    "id": 79,
    "name": "النازعات",
    "englishName": "An-Nazi'at",
    "versesCount": 46,
    "revelationPlace": "makkah",
    "localUrl": "Quran/79_النازعات.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/079.mp3"
  },
  {
    "id": 80,
    "name": "عبس",
    "englishName": "'Abasa",
    "versesCount": 42,
    "revelationPlace": "makkah",
    "localUrl": "Quran/80_عبس.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/080.mp3"
  },
  {
    "id": 81,
    "name": "التكوير",
    "englishName": "At-Takwir",
    "versesCount": 29,
    "revelationPlace": "makkah",
    "localUrl": "Quran/81_التكوير.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/081.mp3"
  },
  {
    "id": 82,
    "name": "الإنفطار",
    "englishName": "Al-Infitar",
    "versesCount": 19,
    "revelationPlace": "makkah",
    "localUrl": "Quran/82_الانفطار.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/082.mp3"
  },
  {
    "id": 83,
    "name": "المطففين",
    "englishName": "Al-Mutaffifin",
    "versesCount": 36,
    "revelationPlace": "makkah",
    "localUrl": "Quran/83_المطففين.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/083.mp3"
  },
  {
    "id": 84,
    "name": "الإنشقاق",
    "englishName": "Al-Inshiqaq",
    "versesCount": 25,
    "revelationPlace": "makkah",
    "localUrl": "Quran/84_الانشقاق.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/084.mp3"
  },
  {
    "id": 85,
    "name": "البروج",
    "englishName": "Al-Buruj",
    "versesCount": 22,
    "revelationPlace": "makkah",
    "localUrl": "Quran/85_البروج.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/085.mp3"
  },
  {
    "id": 86,
    "name": "الطارق",
    "englishName": "At-Tariq",
    "versesCount": 17,
    "revelationPlace": "makkah",
    "localUrl": "Quran/86_الطارق.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/086.mp3"
  },
  {
    "id": 87,
    "name": "الأعلى",
    "englishName": "Al-A'la",
    "versesCount": 19,
    "revelationPlace": "makkah",
    "localUrl": "Quran/87_الأعلى.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/087.mp3"
  },
  {
    "id": 88,
    "name": "الغاشية",
    "englishName": "Al-Ghashiyah",
    "versesCount": 26,
    "revelationPlace": "makkah",
    "localUrl": "Quran/88_الغاشية.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/088.mp3"
  },
  {
    "id": 89,
    "name": "الفجر",
    "englishName": "Al-Fajr",
    "versesCount": 30,
    "revelationPlace": "makkah",
    "localUrl": "Quran/89_الفجر.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/089.mp3"
  },
  {
    "id": 90,
    "name": "البلد",
    "englishName": "Al-Balad",
    "versesCount": 20,
    "revelationPlace": "makkah",
    "localUrl": "Quran/90_البلد.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/090.mp3"
  },
  {
    "id": 91,
    "name": "الشمس",
    "englishName": "Ash-Shams",
    "versesCount": 15,
    "revelationPlace": "makkah",
    "localUrl": "Quran/91_الشمس.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/091.mp3"
  },
  {
    "id": 92,
    "name": "الليل",
    "englishName": "Al-Layl",
    "versesCount": 21,
    "revelationPlace": "makkah",
    "localUrl": "Quran/92_الليل.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/092.mp3"
  },
  {
    "id": 93,
    "name": "الضحى",
    "englishName": "Ad-Duhaa",
    "versesCount": 11,
    "revelationPlace": "makkah",
    "localUrl": "Quran/93_الضحى.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/093.mp3"
  },
  {
    "id": 94,
    "name": "الشرح",
    "englishName": "Ash-Sharh",
    "versesCount": 8,
    "revelationPlace": "makkah",
    "localUrl": "Quran/94_الشرح.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/094.mp3"
  },
  {
    "id": 95,
    "name": "التين",
    "englishName": "At-Tin",
    "versesCount": 8,
    "revelationPlace": "makkah",
    "localUrl": "Quran/95_التين.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/095.mp3"
  },
  {
    "id": 96,
    "name": "العلق",
    "englishName": "Al-'Alaq",
    "versesCount": 19,
    "revelationPlace": "makkah",
    "localUrl": "Quran/96_العلق.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/096.mp3"
  },
  {
    "id": 97,
    "name": "القدر",
    "englishName": "Al-Qadr",
    "versesCount": 5,
    "revelationPlace": "makkah",
    "localUrl": "Quran/97_القدر.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/097.mp3"
  },
  {
    "id": 98,
    "name": "البينة",
    "englishName": "Al-Bayyinah",
    "versesCount": 8,
    "revelationPlace": "madinah",
    "localUrl": "Quran/98_البينة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/098.mp3"
  },
  {
    "id": 99,
    "name": "الزلزلة",
    "englishName": "Az-Zalzalah",
    "versesCount": 8,
    "revelationPlace": "madinah",
    "localUrl": "Quran/99_الزلزلة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/099.mp3"
  },
  {
    "id": 100,
    "name": "العاديات",
    "englishName": "Al-'Adiyat",
    "versesCount": 11,
    "revelationPlace": "makkah",
    "localUrl": null,
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/100.mp3"
  },
  {
    "id": 101,
    "name": "القارعة",
    "englishName": "Al-Qari'ah",
    "versesCount": 11,
    "revelationPlace": "makkah",
    "localUrl": null,
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/101.mp3"
  },
  {
    "id": 102,
    "name": "التكاثر",
    "englishName": "At-Takathur",
    "versesCount": 8,
    "revelationPlace": "makkah",
    "localUrl": "Quran/102_التكاثر.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/102.mp3"
  },
  {
    "id": 103,
    "name": "العصر",
    "englishName": "Al-'Asr",
    "versesCount": 3,
    "revelationPlace": "makkah",
    "localUrl": "Quran/103_العصر.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/103.mp3"
  },
  {
    "id": 104,
    "name": "الهمزة",
    "englishName": "Al-Humazah",
    "versesCount": 9,
    "revelationPlace": "makkah",
    "localUrl": "Quran/104_الهمزة.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/104.mp3"
  },
  {
    "id": 105,
    "name": "الفيل",
    "englishName": "Al-Fil",
    "versesCount": 5,
    "revelationPlace": "makkah",
    "localUrl": "Quran/105_الفيل.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/105.mp3"
  },
  {
    "id": 106,
    "name": "قريش",
    "englishName": "Quraysh",
    "versesCount": 4,
    "revelationPlace": "makkah",
    "localUrl": "Quran/106_قريش.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/106.mp3"
  },
  {
    "id": 107,
    "name": "الماعون",
    "englishName": "Al-Ma'un",
    "versesCount": 7,
    "revelationPlace": "makkah",
    "localUrl": "Quran/107_الماعون.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/107.mp3"
  },
  {
    "id": 108,
    "name": "الكوثر",
    "englishName": "Al-Kawthar",
    "versesCount": 3,
    "revelationPlace": "makkah",
    "localUrl": "Quran/108_الكوثر.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/108.mp3"
  },
  {
    "id": 109,
    "name": "الكافرون",
    "englishName": "Al-Kafirun",
    "versesCount": 6,
    "revelationPlace": "makkah",
    "localUrl": "Quran/109_الكافرون.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/109.mp3"
  },
  {
    "id": 110,
    "name": "النصر",
    "englishName": "An-Nasr",
    "versesCount": 3,
    "revelationPlace": "madinah",
    "localUrl": null,
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/110.mp3"
  },
  {
    "id": 111,
    "name": "المسد",
    "englishName": "Al-Masad",
    "versesCount": 5,
    "revelationPlace": "makkah",
    "localUrl": "Quran/111_المسد.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/111.mp3"
  },
  {
    "id": 112,
    "name": "الإخلاص",
    "englishName": "Al-Ikhlas",
    "versesCount": 4,
    "revelationPlace": "makkah",
    "localUrl": "Quran/112_الإخلاص.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/112.mp3"
  },
  {
    "id": 113,
    "name": "الفلق",
    "englishName": "Al-Falaq",
    "versesCount": 5,
    "revelationPlace": "makkah",
    "localUrl": "Quran/113_الفلق.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/113.mp3"
  },
  {
    "id": 114,
    "name": "الناس",
    "englishName": "An-Nas",
    "versesCount": 6,
    "revelationPlace": "makkah",
    "localUrl": "Quran/114_الناس.mp3",
    "onlineUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/114.mp3"
  }
];
