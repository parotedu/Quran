// Quran Stream Platform - Database
const RECITERS = [
  {
    "id": "hussary",
    "name": "الشيخ محمود خليل الحصري",
    "englishName": "Mahmoud Khalil Al-Husary",
    "slug": "mahmood_khaleel_al-husaree/",
    "serverUrl": "https://download.quranicaudio.com/quran/mahmood_khaleel_al-husaree/",
    "shortName": "الحصري",
    "complete": true
  },
  {
    "id": "islam_sobhi",
    "name": "الشيخ إسلام صبحي",
    "englishName": "Islam Sobhi",
    "slug": "islam_sobhi/",
    "serverUrl": "https://cdn.mp3quran.net/audio/islam-sobhi/r1/",
    "fallbackServerUrl": "https://server11.mp3quran.net/islam/",
    "shortName": "إسلام صبحي",
    "complete": false,
    "availableSurahs": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,38,41,42,43,44,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114]
  },
  {
    "id": "haitham_dukhain",
    "name": "الشيخ هيثم الدخين",
    "englishName": "Haitham Al-Dukhin",
    "slug": "haitham-dukhain/",
    "serverUrl": "https://cdn.mp3quran.net/audio/haitham-dukhain/r1/",
    "shortName": "هيثم الدخين",
    "complete": true
  },
  {
    "id": "mohamed_mosaad",
    "name": "الشيخ محمد مسعد",
    "englishName": "Mohamed Mossad",
    "slug": "mohamed-mosaad/",
    "serverUrl": "https://ia800607.us.archive.org/12/items/010_20221110/",
    "shortName": "محمد مسعد",
    "complete": false,
    "availableSurahs": [10, 19, 23, 29, 32, 49, 73, 78, 87, 88, 100, 107]
  },
  {
    "id": "abdulrahman_mosaad",
    "name": "الشيخ عبد الرحمن مسعد",
    "englishName": "Abdulrahman Mossad",
    "slug": "abdulrahman-mossad/",
    "serverUrl": "https://ia800607.us.archive.org/12/items/010_20221110/",
    "shortName": "عبد الرحمن مسعد",
    "complete": false,
    "availableSurahs": [10, 19, 23, 29, 32, 49, 73, 78, 87, 88, 100, 107]
  },
  {
    "id": "hazza_balushi",
    "name": "الشيخ هزاع البلوشي",
    "englishName": "Hazza Al-Balushi",
    "slug": "hazza-balushi/",
    "serverUrl": "https://cdn.mp3quran.net/audio/hazza-balushi/r1/",
    "fallbackServerUrl": "https://server11.mp3quran.net/hazza/",
    "shortName": "هزاع البلوشي",
    "complete": true
  },
  {
    "id": "fatih_seferagic",
    "name": "الشيخ فاتح سفرغيتش",
    "englishName": "Fatih Seferagic",
    "slug": "fatih-seferagic/",
    "serverUrl": "https://archive.org/download/fatih-seferagic-mp-3-quran--full-114--sora---128kb/",
    "fallbackServerUrl": "https://ia801609.us.archive.org/1/items/fatih-seferagic-mp-3-quran--full-114--sora---128kb/",
    "shortName": "فاتح سفرغيتش",
    "complete": true
  },
  {
    "id": "naina",
    "name": "الشيخ أحمد نعينع",
    "englishName": "Ahmad Naina",
    "slug": "ahmad_nu/",
    "serverUrl": "https://cdn.mp3quran.net/audio/ahmad-naina/r1/",
    "fallbackServerUrl": "https://server11.mp3quran.net/ahmad_nu/",
    "shortName": "أحمد نعينع",
    "complete": true
  },
  {
    "id": "shaban",
    "name": "الشيخ شعبان الصياد",
    "englishName": "Shaban Al-Sayyad",
    "slug": "shaban/",
    "serverUrl": "https://cdn.mp3quran.net/audio/shaban-sayyad/r1/",
    "fallbackServerUrl": "https://server11.mp3quran.net/shaban/",
    "shortName": "شعبان الصياد",
    "complete": false,
    "availableSurahs": [2,3,4,5,6,7,9,10,11,12,13,16,17,19,20,21,22,24,26,27,28,29,32,33,35,38,40,41,42,43,45,46,47,52,53,54,59,60,67,68,69,77,78,79,80,81,82,87,88,89,90,91,92,94,95,96,97,98,99,100,101,102,103,104,105]
  },
  {
    "id": "hatem",
    "name": "الشيخ حاتم فريد الواعر",
    "englishName": "Hatem Farid Al-Waer",
    "slug": "hatem/",
    "serverUrl": "https://cdn.mp3quran.net/audio/hatem-waer/r1/",
    "fallbackServerUrl": "https://server11.mp3quran.net/hatem/",
    "shortName": "حاتم فريد",
    "complete": true
  },
  {
    "id": "zawawi",
    "name": "الشيخ عبد الرحمن الزواوي",
    "englishName": "Abdulrahman Al-Zawawi",
    "slug": "abdulrahman-al-zawawi/",
    "serverUrl": "https://media.way2quran.com/abdulrahman-al-zawawi/hafs-an-asim/",
    "shortName": "الزواوي",
    "complete": true
  },
  {
    "id": "shaashai",
    "name": "الشيخ إبراهيم الشعشاعي",
    "englishName": "Ibrahim Al-Sha'sha'i",
    "slug": "ibrahim-al-shashae/",
    "serverUrl": "https://media.way2quran.com/ibrahim-al-shashae/hafs-an-asim/",
    "shortName": "إبراهيم الشعشاعي",
    "complete": false,
    "availableSurahs": [1, 3, 10, 11, 16, 18, 19, 23, 24, 35, 37, 40, 55, 59, 62, 66, 69, 75, 76, 82, 86, 87, 88, 89, 92, 93, 94, 95, 96, 97, 98, 110, 112, 113, 114]
  },
  {
    "id": "minshawi_murattal",
    "name": "الشيخ محمد صديق المنشاوي (مرتل)",
    "englishName": "Muhammad Siddiq al-Minshawi (Murattal)",
    "slug": "muhammad_siddeeq_al-minshaawee/",
    "serverUrl": "https://download.quranicaudio.com/quran/muhammad_siddeeq_al-minshaawee/",
    "shortName": "المنشاوي",
    "complete": true
  },
  {
    "id": "minshawi_mujawwad",
    "name": "الشيخ محمد صديق المنشاوي (مجود)",
    "englishName": "Muhammad Siddiq al-Minshawi (Mujawwad)",
    "slug": "minshawi_mujawwad/",
    "serverUrl": "https://download.quranicaudio.com/quran/minshawi_mujawwad/",
    "shortName": "المنشاوي (مجود)",
    "complete": true
  },
  {
    "id": "abdulbasit_murattal",
    "name": "الشيخ عبد الباسط عبد الصمد (مرتل)",
    "englishName": "AbdulBaset AbdulSamad (Murattal)",
    "slug": "abdul_basit_murattal/",
    "serverUrl": "https://download.quranicaudio.com/quran/abdul_basit_murattal/",
    "shortName": "عبد الباسط",
    "complete": true
  },
  {
    "id": "abdulbasit_mujawwad",
    "name": "الشيخ عبد الباسط عبد الصمد (مجود)",
    "englishName": "AbdulBaset AbdulSamad (Mujawwad)",
    "slug": "abdulbaset_mujawwad/",
    "serverUrl": "https://download.quranicaudio.com/quran/abdulbaset_mujawwad/",
    "shortName": "عبد الباسط (مجود)",
    "complete": true
  },
  {
    "id": "alafasy",
    "name": "الشيخ مشاري راشد العفاسي",
    "englishName": "Mishari Rashid al-`Afasy",
    "slug": "mishaari_raashid_al_3afaasee/",
    "serverUrl": "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/",
    "shortName": "العفاسي",
    "complete": true
  },
  {
    "id": "maher",
    "name": "الشيخ ماهر المعيقلي",
    "englishName": "Maher al-Muaiqly",
    "slug": "maher_256/",
    "serverUrl": "https://download.quranicaudio.com/quran/maher_256/",
    "shortName": "المعيقلي",
    "complete": true
  },
  {
    "id": "shatri",
    "name": "الشيخ أبو بكر الشاطري",
    "englishName": "Abu Bakr al-Shatri",
    "slug": "abu_bakr_ash-shaatree/",
    "serverUrl": "https://download.quranicaudio.com/quran/abu_bakr_ash-shaatree/",
    "shortName": "الشاطري",
    "complete": true
  },
  {
    "id": "sudais",
    "name": "الشيخ عبد الرحمن السديس",
    "englishName": "Abdur-Rahman as-Sudais",
    "slug": "abdurrahmaan_as-sudays/",
    "serverUrl": "https://download.quranicaudio.com/quran/abdurrahmaan_as-sudays/",
    "shortName": "السديس",
    "complete": true
  },
  {
    "id": "shuraym",
    "name": "الشيخ سعود الشريم",
    "englishName": "Sa`ud ash-Shuraym",
    "slug": "sa3ood_al-shuraym/",
    "serverUrl": "https://download.quranicaudio.com/quran/sa3ood_al-shuraym/",
    "shortName": "الشريم",
    "complete": true
  },
  {
    "id": "ghamdi",
    "name": "الشيخ سعد الغامدي",
    "englishName": "Saad al-Ghamdi",
    "slug": "sa3d_al-ghaamidi/complete/",
    "serverUrl": "https://download.quranicaudio.com/quran/sa3d_al-ghaamidi/complete/",
    "shortName": "الغامدي",
    "complete": true
  },
  {
    "id": "ajmy",
    "name": "الشيخ أحمد بن علي العجمي",
    "englishName": "Ahmed al-Ajmy",
    "slug": "ahmed_ibn_3ali_al-3ajamy/",
    "serverUrl": "https://download.quranicaudio.com/quran/ahmed_ibn_3ali_al-3ajamy/",
    "shortName": "العجمي",
    "complete": true
  },
  {
    "id": "dussary",
    "name": "الشيخ ياسر الدوسري",
    "englishName": "Yasser ad-Dussary",
    "slug": "yasser_ad-dussary/",
    "serverUrl": "https://download.quranicaudio.com/quran/yasser_ad-dussary/",
    "shortName": "الدوسري",
    "complete": true
  },
  {
    "id": "hussein_alazzam",
    "name": "الشيخ حسين العزام",
    "englishName": "Hussein Al-Azzam",
    "slug": "hussein_alazzam/",
    "shortName": "حسين العزام",
    "complete": false,
    "availableSurahs": [1, 12, 14, 15, 18, 19, 26, 27, 30, 36, 44, 52, 55, 67, 75, 79, 89],
    "surahFiles": {
      "1": "https://archive.org/download/20241124_20241124_1556/001%20_%20%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%81%D8%A7%D8%AA%D8%AD%D8%A9%20%D9%85%D9%86%20%D8%B5%D9%84%D8%A7%D8%A9%20%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%20%D8%A7%D9%84%D9%8A%D9%88%D9%85%20-%20%D9%85%D8%B3%D8%AC%D8%AF%20%D8%A8%D9%84%D8%A7%D9%84%20%D8%A8%D9%86%20%D8%B1%D8%A8%D8%A7%D8%AD%20_%20%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86.mp3",
      "12": "https://archive.org/download/surat_elmulk/surat_youssef.mp3",
      "14": "https://archive.org/download/surat_elmulk/surat_ibrahim.mp3",
      "15": "https://archive.org/download/surat_elmulk/surat_elhajr.mp3",
      "18": "https://archive.org/download/surat_elmulk/surat_elkahf.mp3",
      "19": "https://archive.org/download/surat_elmulk/surat_maryam.mp3",
      "26": "https://archive.org/download/20241124_20241124_1556/026%20_%20%D8%AA%D9%84%D8%A7%D9%88%D8%A9%20%D9%85%D9%86%20%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B9%D8%B1%D8%A7%D8%A1%20%D9%84%D9%84%D9%82%D8%A7%D8%B1%D8%A6%20%D8%AD%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D8%B2%D8%A7%D9%85.mp3",
      "27": "https://archive.org/download/20241124_20241124_1556/027%20_%20%D8%AA%D9%84%D8%A7%D9%88%D8%A9%20%D9%85%D8%B1%D9%8A%D8%AD%D8%A9%20%D9%85%D9%86%20%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%86%D9%85%D9%84%20_%20%D8%A7%D9%84%D9%82%D8%A7%D8%B1%D8%A6%20%D8%AD%D8%B3%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D8%B2%D8%A7%D9%85.mp3",
      "30": "https://archive.org/download/20241124_20241124_1556/030%20_%20%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B1%D9%88%D9%85%20%D8%AA%D9%84%D8%A7%D9%88%D8%A9%20%D8%B1%D9%85%D8%B6%D8%A7%D9%86%D9%8A%D8%A9%20%D9%85%D9%86%20%D8%B5%D9%84%D8%A7%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B1%D8%A7%D9%88%D9%8A%D8%AD%20-%20%D9%85%D8%B3%D8%AC%D8%AF%20%D8%A8%D9%84%D8%A7%D9%84%20%D8%A8%D9%86%20%D8%B1%D8%A8%D8%A7%D8%AD.mp3",
      "36": "https://archive.org/download/surat_elmulk/surat_yas.mp3",
      "44": "https://archive.org/download/surat_elmulk/surat_dokhan.mp3",
      "52": "https://archive.org/download/20241124_20241124_1556/052%20_%20%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B7%D9%88%D8%B1%20_%20%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B7%D9%88%D8%B1%20%D9%83%D8%A7%D9%85%D9%84%D8%A9.mp3",
      "55": "https://archive.org/download/surat_elmulk/surat_elrahman.mp3",
      "67": "https://archive.org/download/surat_elmulk/surat_elmulk.mp3",
      "75": "https://archive.org/download/surat_elmulk/surat_elqiyamah.mp3",
      "79": "https://archive.org/download/surat_elmulk/surat_elnazi3at.mp3",
      "89": "https://archive.org/download/surat_elmulk/surat_elfajr.mp3"
    }
  },
  {
    "id": "nasser_alqatami",
    "name": "الشيخ ناصر القطامي",
    "englishName": "Nasser Al-Qatami",
    "slug": "nasser_alqatami/",
    "serverUrl": "https://cdn.mp3quran.net/audio/nasser-qatami/r1/",
    "shortName": "القطامي",
    "complete": true
  },
  {
    "id": "ali_jaber",
    "name": "الشيخ علي جابر",
    "englishName": "Ali Jaber",
    "slug": "ali_jaber/",
    "serverUrl": "https://download.quranicaudio.com/quran/ali_jaber/",
    "shortName": "علي جابر",
    "complete": true
  },
  {
    "id": "ayyoob",
    "name": "الشيخ محمد أيوب",
    "englishName": "Muhammad Ayyoub",
    "slug": "muhammad_ayyoob/",
    "serverUrl": "https://download.quranicaudio.com/quran/muhammad_ayyoob/",
    "shortName": "محمد أيوب",
    "complete": true
  },
  {
    "id": "rifai",
    "name": "الشيخ هاني الرفاعي",
    "englishName": "Hani ar-Rifai",
    "slug": "hani_rifai/",
    "serverUrl": "https://cdn.mp3quran.net/audio/hani-rifai/r1/",
    "shortName": "الرفاعي",
    "complete": true
  },
  {
    "id": "fares_abbad",
    "name": "الشيخ فارس عباد",
    "englishName": "Fares Abbad",
    "slug": "fares/",
    "serverUrl": "https://download.quranicaudio.com/quran/fares/",
    "shortName": "فارس عباد",
    "complete": true
  },
  {
    "id": "tablaway",
    "name": "الشيخ محمد محمود الطبلاوي",
    "englishName": "Mohammad al-Tablaway",
    "slug": "mohammad_al_tablaway/",
    "serverUrl": "https://cdn.mp3quran.net/audio/muhammad-tablawi/r2/",
    "shortName": "الطبلاوي",
    "complete": true
  },
  {
    "id": "hudhaify",
    "name": "الشيخ علي بن عبد الرحمن الحذيفي",
    "englishName": "Ali Al-Hudhaify",
    "slug": "ali_hudhaifi/",
    "serverUrl": "https://cdn.mp3quran.net/audio/ali-hudhaifi/r3/",
    "shortName": "الحذيفي",
    "complete": true
  },
  {
    "id": "juhaynee",
    "name": "الشيخ عبد الله عواد الجهني",
    "englishName": "Abdullah Awad Al-Juhany",
    "slug": "abdullaah_3awwaad_al-juhaynee/",
    "serverUrl": "https://download.quranicaudio.com/quran/abdullaah_3awwaad_al-juhaynee/",
    "shortName": "الجهني",
    "complete": true
  },
  {
    "id": "basfar",
    "name": "الشيخ عبد الله بصفر",
    "englishName": "Abdullah Basfar",
    "slug": "abdullah_basfar/",
    "serverUrl": "https://cdn.mp3quran.net/audio/abdullah-basfar/r1/",
    "shortName": "بصفر",
    "complete": true
  },
  {
    "id": "jibreel",
    "name": "الشيخ محمد جبريل",
    "englishName": "Muhammad Jibreel",
    "slug": "muhammad_jibreel/",
    "serverUrl": "https://download.quranicaudio.com/quran/muhammad_jibreel/complete/",
    "shortName": "جبريل",
    "complete": true
  },
  {
    "id": "mustafa_ismail",
    "name": "الشيخ مصطفى إسماعيل",
    "englishName": "Mustafa Ismail",
    "slug": "mustafa_ismail/",
    "serverUrl": "https://cdn.mp3quran.net/audio/mustafa-ismail/r2/",
    "shortName": "مصطفى إسماعيل",
    "complete": true
  },
  {
    "id": "banna",
    "name": "الشيخ محمود علي البنا",
    "englishName": "Mahmoud Ali Al-Banna",
    "slug": "mahmoud_banna/",
    "serverUrl": "https://cdn.mp3quran.net/audio/mahmoud-banna/r2/",
    "shortName": "البنا",
    "complete": true
  },
  {
    "id": "khalid_jalil",
    "name": "الشيخ خالد الجليل",
    "englishName": "Khalid Al-Jaleel",
    "slug": "khalid_jalil/",
    "serverUrl": "https://cdn.mp3quran.net/audio/khalid-jalil/r1/",
    "shortName": "خالد الجليل",
    "complete": true
  },
  {
    "id": "badr_turki",
    "name": "الشيخ بدر التركي",
    "englishName": "Bader Al-Turki",
    "slug": "badr_turki/",
    "serverUrl": "https://cdn.mp3quran.net/audio/badr-turki/r1/",
    "shortName": "بدر التركي",
    "complete": true
  },
  {
    "id": "wadee_yamani",
    "name": "الشيخ وديع اليمني",
    "englishName": "Wadih Al-Yamani",
    "slug": "wadee_yamani/",
    "serverUrl": "https://cdn.mp3quran.net/audio/wadee-yamani/r1/",
    "shortName": "وديع اليمني",
    "complete": true
  },
  {
    "id": "idrees_abkar",
    "name": "الشيخ إدريس أبكر",
    "englishName": "Idrees Abkar",
    "slug": "idrees_abkar/",
    "serverUrl": "https://cdn.mp3quran.net/audio/idrees-abkar/r1/",
    "shortName": "إدريس أبكر",
    "complete": true
  },
  {
    "id": "ajamy",
    "name": "الشيخ أحمد بن علي العجمي",
    "englishName": "Ahmed Al-Ajamy",
    "slug": "ahmed_ibn_3ali_al-3ajamy/",
    "serverUrl": "https://download.quranicaudio.com/quran/ahmed_ibn_3ali_al-3ajamy/",
    "shortName": "العجمي",
    "complete": true
  },
  {
    "id": "matroud",
    "name": "الشيخ عبد الله مطرود",
    "englishName": "Abdullah Matroud",
    "slug": "abdullah_matroud/",
    "serverUrl": "https://download.quranicaudio.com/quran/abdullah_matroud/",
    "shortName": "مطرود",
    "complete": true
  },
  {
    "id": "akhdar",
    "name": "الشيخ إبراهيم الأخضر",
    "englishName": "Ibrahim Al-Akhdar",
    "slug": "ibrahim-akhdar/",
    "serverUrl": "https://cdn.mp3quran.net/audio/ibrahim-akhdar/r1/",
    "shortName": "الأخضر",
    "complete": true
  },
  {
    "id": "bukhatir",
    "name": "الشيخ صلاح بو خاطر",
    "englishName": "Salah Bukhatir",
    "slug": "salah-bukhatir/",
    "serverUrl": "https://cdn.mp3quran.net/audio/salah-bukhatir/r1/",
    "shortName": "بو خاطر",
    "complete": true
  },
  {
    "id": "budair",
    "name": "الشيخ صلاح البدير",
    "englishName": "Salah Al-Budair",
    "slug": "salahbudair/",
    "serverUrl": "https://download.quranicaudio.com/quran/salahbudair/",
    "shortName": "البدير",
    "complete": true
  },
  {
    "id": "qasim",
    "name": "الشيخ عبد المحسن القاسم",
    "englishName": "Abdulmohsen Al-Qasim",
    "slug": "abdulmohsen-qasim/",
    "serverUrl": "https://cdn.mp3quran.net/audio/abdulmohsen-qasim/r1/",
    "shortName": "القاسم",
    "complete": true
  },
  {
    "id": "qahtani",
    "name": "الشيخ خالد القحطاني",
    "englishName": "Khalid Al-Qahtani",
    "slug": "khalid-qahtani/",
    "serverUrl": "https://cdn.mp3quran.net/audio/khalid-qahtani/r1/",
    "shortName": "القحطاني",
    "complete": true
  },
  {
    "id": "tunaiji",
    "name": "الشيخ خليفة الطنيجي",
    "englishName": "Khalifa Al-Tunaiji",
    "slug": "khalifa-tunaiji/",
    "serverUrl": "https://cdn.mp3quran.net/audio/khalifa-tunaiji/r1/",
    "shortName": "الطنيجي",
    "complete": true
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
