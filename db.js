const countries = [
    {
        code: "AD",
        name: "Andorra",
        native: "Andorra",
        phone: "376",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Andorra la Vella",
        currency: "EUR",
        languages: [
            {
                code: "ca",
                name: "Catalan",
                native: "Català",
                rtl: false,
            },
        ],
        emoji: "🇦🇩",
        emojiU: "U+1F1E6 U+1F1E9",
        states: [],
    },
    {
        code: "AE",
        name: "United Arab Emirates",
        native: "دولة الإمارات العربية المتحدة",
        phone: "971",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Abu Dhabi",
        currency: "AED",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇦🇪",
        emojiU: "U+1F1E6 U+1F1EA",
        states: [],
    },
    {
        code: "AF",
        name: "Afghanistan",
        native: "افغانستان",
        phone: "93",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Kabul",
        currency: "AFN",
        languages: [
            {
                code: "ps",
                name: "Pashto",
                native: "پښتو",
                rtl: true,
            },
            {
                code: "uz",
                name: "Uzbek",
                native: "Ўзбек",
                rtl: false,
            },
            {
                code: "tk",
                name: "Turkmen",
                native: "Туркмен / تركمن",
                rtl: false,
            },
        ],
        emoji: "🇦🇫",
        emojiU: "U+1F1E6 U+1F1EB",
        states: [],
    },
    {
        code: "AG",
        name: "Antigua and Barbuda",
        native: "Antigua and Barbuda",
        phone: "1268",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Saint John's",
        currency: "XCD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇦🇬",
        emojiU: "U+1F1E6 U+1F1EC",
        states: [],
    },
    {
        code: "AI",
        name: "Anguilla",
        native: "Anguilla",
        phone: "1264",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "The Valley",
        currency: "XCD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇦🇮",
        emojiU: "U+1F1E6 U+1F1EE",
        states: [],
    },
    {
        code: "AL",
        name: "Albania",
        native: "Shqipëria",
        phone: "355",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Tirana",
        currency: "ALL",
        languages: [
            {
                code: "sq",
                name: "Albanian",
                native: "Shqip",
                rtl: false,
            },
        ],
        emoji: "🇦🇱",
        emojiU: "U+1F1E6 U+1F1F1",
        states: [],
    },
    {
        code: "AM",
        name: "Armenia",
        native: "Հայաստան",
        phone: "374",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Yerevan",
        currency: "AMD",
        languages: [
            {
                code: "hy",
                name: "Armenian",
                native: "Հայերեն",
                rtl: false,
            },
            {
                code: "ru",
                name: "Russian",
                native: "Русский",
                rtl: false,
            },
        ],
        emoji: "🇦🇲",
        emojiU: "U+1F1E6 U+1F1F2",
        states: [],
    },
    {
        code: "AO",
        name: "Angola",
        native: "Angola",
        phone: "244",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Luanda",
        currency: "AOA",
        languages: [
            {
                code: "pt",
                name: "Portuguese",
                native: "Português",
                rtl: false,
            },
        ],
        emoji: "🇦🇴",
        emojiU: "U+1F1E6 U+1F1F4",
        states: [],
    },
    {
        code: "AQ",
        name: "Antarctica",
        native: "Antarctica",
        phone: "672",
        continent: {
            code: "AN",
            name: "Antarctica",
        },
        capital: null,
        currency: null,
        languages: [],
        emoji: "🇦🇶",
        emojiU: "U+1F1E6 U+1F1F6",
        states: [],
    },
    {
        code: "AR",
        name: "Argentina",
        native: "Argentina",
        phone: "54",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Buenos Aires",
        currency: "ARS",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
            {
                code: "gn",
                name: "Guarani",
                native: "Avañe'ẽ",
                rtl: false,
            },
        ],
        emoji: "🇦🇷",
        emojiU: "U+1F1E6 U+1F1F7",
        states: [
            {
                code: null,
                name: "Ciudad Autónoma de Buenos Aires",
            },
            {
                code: null,
                name: "Buenos Aires",
            },
            {
                code: null,
                name: "Catamarca",
            },
            {
                code: null,
                name: "Chaco",
            },
            {
                code: null,
                name: "Chubut",
            },
            {
                code: null,
                name: "Córdoba",
            },
            {
                code: null,
                name: "Corrientes",
            },
            {
                code: null,
                name: "Entre Ríos",
            },
            {
                code: null,
                name: "Formosa",
            },
            {
                code: null,
                name: "Jujuy",
            },
            {
                code: null,
                name: "La Pampa",
            },
            {
                code: null,
                name: "La Rioja",
            },
            {
                code: null,
                name: "Mendoza",
            },
            {
                code: null,
                name: "Misiones",
            },
            {
                code: null,
                name: "Neuquén",
            },
            {
                code: null,
                name: "Río Negro",
            },
            {
                code: null,
                name: "Salta",
            },
            {
                code: null,
                name: "San Juan",
            },
            {
                code: null,
                name: "San Luis",
            },
            {
                code: null,
                name: "Santa Cruz",
            },
            {
                code: null,
                name: "Santa Fe",
            },
            {
                code: null,
                name: "Santiago del Estero",
            },
            {
                code: null,
                name: "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
            },
            {
                code: null,
                name: "Tucumán",
            },
        ],
    },
    {
        code: "AS",
        name: "American Samoa",
        native: "American Samoa",
        phone: "1684",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Pago Pago",
        currency: "USD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "sm",
                name: "Samoan",
                native: "Gagana Samoa",
                rtl: false,
            },
        ],
        emoji: "🇦🇸",
        emojiU: "U+1F1E6 U+1F1F8",
        states: [],
    },
    {
        code: "AT",
        name: "Austria",
        native: "Österreich",
        phone: "43",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Vienna",
        currency: "EUR",
        languages: [
            {
                code: "de",
                name: "German",
                native: "Deutsch",
                rtl: false,
            },
        ],
        emoji: "🇦🇹",
        emojiU: "U+1F1E6 U+1F1F9",
        states: [
            {
                code: "B",
                name: "Burgenland",
            },
            {
                code: "K",
                name: "Kärnten",
            },
            {
                code: "NÖ",
                name: "Niederösterreich",
            },
            {
                code: "OÖ",
                name: "Oberösterreich",
            },
            {
                code: "S",
                name: "Salzburg",
            },
            {
                code: "ST",
                name: "Steiermark",
            },
            {
                code: "T",
                name: "Tirol",
            },
            {
                code: "V",
                name: "Vorarlberg",
            },
            {
                code: "W",
                name: "Wien",
            },
        ],
    },
    {
        code: "AU",
        name: "Australia",
        native: "Australia",
        phone: "61",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Canberra",
        currency: "AUD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇦🇺",
        emojiU: "U+1F1E6 U+1F1FA",
        states: [
            {
                code: null,
                name: "Ashmore and Cartier Islands",
            },
            {
                code: null,
                name: "Australian Antarctic Territory",
            },
            {
                code: "ACT",
                name: "Australian Capital Territory",
            },
            {
                code: "CX",
                name: "Christmas Island",
            },
            {
                code: "CC",
                name: "Cocos Islands",
            },
            {
                code: null,
                name: "Coral Sea Islands",
            },
            {
                code: "HM",
                name: "Heard Island and McDonald Islands",
            },
            {
                code: "JBT",
                name: "Jervis Bay Territory",
            },
            {
                code: "NSW",
                name: "New South Wales",
            },
            {
                code: "NF",
                name: "Norfolk Island",
            },
            {
                code: "NT",
                name: "Northern Territory",
            },
            {
                code: "QLD",
                name: "Queensland",
            },
            {
                code: "SA",
                name: "South Australia",
            },
            {
                code: "TAS",
                name: "Tasmania",
            },
            {
                code: "VIC",
                name: "Victoria",
            },
            {
                code: "WA",
                name: "Western Australia",
            },
        ],
    },
    {
        code: "AW",
        name: "Aruba",
        native: "Aruba",
        phone: "297",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Oranjestad",
        currency: "AWG",
        languages: [
            {
                code: "nl",
                name: "Dutch",
                native: "Nederlands",
                rtl: false,
            },
            {
                code: "pa",
                name: "Panjabi / Punjabi",
                native: "ਪੰਜਾਬੀ / पंजाबी / پنجابي",
                rtl: false,
            },
        ],
        emoji: "🇦🇼",
        emojiU: "U+1F1E6 U+1F1FC",
        states: [],
    },
    {
        code: "AX",
        name: "Åland",
        native: "Åland",
        phone: "358",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Mariehamn",
        currency: "EUR",
        languages: [
            {
                code: "sv",
                name: "Swedish",
                native: "Svenska",
                rtl: false,
            },
        ],
        emoji: "🇦🇽",
        emojiU: "U+1F1E6 U+1F1FD",
        states: [],
    },
    {
        code: "AZ",
        name: "Azerbaijan",
        native: "Azərbaycan",
        phone: "994",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Baku",
        currency: "AZN",
        languages: [
            {
                code: "az",
                name: "Azerbaijani",
                native: "Azərbaycanca / آذربايجان",
                rtl: false,
            },
        ],
        emoji: "🇦🇿",
        emojiU: "U+1F1E6 U+1F1FF",
        states: [],
    },
    {
        code: "BA",
        name: "Bosnia and Herzegovina",
        native: "Bosna i Hercegovina",
        phone: "387",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Sarajevo",
        currency: "BAM",
        languages: [
            {
                code: "bs",
                name: "Bosnian",
                native: "Bosanski",
                rtl: false,
            },
            {
                code: "hr",
                name: "Croatian",
                native: "Hrvatski",
                rtl: false,
            },
            {
                code: "sr",
                name: "Serbian",
                native: "Српски",
                rtl: false,
            },
        ],
        emoji: "🇧🇦",
        emojiU: "U+1F1E7 U+1F1E6",
        states: [],
    },
    {
        code: "BB",
        name: "Barbados",
        native: "Barbados",
        phone: "1246",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Bridgetown",
        currency: "BBD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇧🇧",
        emojiU: "U+1F1E7 U+1F1E7",
        states: [],
    },
    {
        code: "BD",
        name: "Bangladesh",
        native: "Bangladesh",
        phone: "880",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Dhaka",
        currency: "BDT",
        languages: [
            {
                code: "bn",
                name: "Bengali",
                native: "বাংলা",
                rtl: false,
            },
        ],
        emoji: "🇧🇩",
        emojiU: "U+1F1E7 U+1F1E9",
        states: [
            {
                code: null,
                name: "বরগুনা",
            },
            {
                code: null,
                name: "বরিশাল",
            },
            {
                code: null,
                name: "ভোলা",
            },
            {
                code: null,
                name: "ঝালকাঠি",
            },
            {
                code: null,
                name: "পটুয়াখালী",
            },
            {
                code: null,
                name: "পিরোজপুর",
            },
            {
                code: null,
                name: "বান্দরবান",
            },
            {
                code: null,
                name: "ব্রাহ্মণবাড়ীয়া",
            },
            {
                code: null,
                name: "চাঁদপুর",
            },
            {
                code: null,
                name: "চট্টগ্রাম",
            },
            {
                code: null,
                name: "কুমিল্লা",
            },
            {
                code: null,
                name: "কক্সবাজার",
            },
            {
                code: null,
                name: "ফেনী",
            },
            {
                code: null,
                name: "খাগড়াছড়ি",
            },
            {
                code: null,
                name: "লক্ষীপুর",
            },
            {
                code: null,
                name: "নোয়াখালী",
            },
            {
                code: null,
                name: "রাঙ্গামাটি",
            },
            {
                code: null,
                name: "ঢাকা",
            },
            {
                code: null,
                name: "ফরিদপুর",
            },
            {
                code: null,
                name: "গাজীপুর",
            },
            {
                code: null,
                name: "গোপালগঞ্জ",
            },
            {
                code: null,
                name: "জামালপুর",
            },
            {
                code: null,
                name: "কিশোরগঞ্জ",
            },
            {
                code: null,
                name: "মাদারীপুর",
            },
            {
                code: null,
                name: "মানিকগঞ্জ",
            },
            {
                code: null,
                name: "মুন্সীগঞ্জ",
            },
            {
                code: null,
                name: "ময়মনসিংহ",
            },
            {
                code: null,
                name: "নারায়ণগঞ্জ",
            },
            {
                code: null,
                name: "নরসিংদী",
            },
            {
                code: null,
                name: "নেত্রকোনা",
            },
            {
                code: null,
                name: "রাজবাড়ী",
            },
            {
                code: null,
                name: "শরীয়তপুর",
            },
            {
                code: null,
                name: "শেরপুর",
            },
            {
                code: null,
                name: "টাঙ্গাইল",
            },
            {
                code: null,
                name: "বাগেরহাট",
            },
            {
                code: null,
                name: "চুয়াডাঙ্গা",
            },
            {
                code: null,
                name: "যশোর",
            },
            {
                code: null,
                name: "ঝিনাইদহ",
            },
            {
                code: null,
                name: "খুলনা",
            },
            {
                code: null,
                name: "কুষ্টিয়া",
            },
            {
                code: null,
                name: "মাগুরা",
            },
            {
                code: null,
                name: "মেহেরপুর",
            },
            {
                code: null,
                name: "নড়াইল",
            },
            {
                code: null,
                name: "সাতক্ষিরা",
            },
            {
                code: null,
                name: "বগুড়া",
            },
            {
                code: null,
                name: "জয়পুরহাট",
            },
            {
                code: null,
                name: "নওগাঁ",
            },
            {
                code: null,
                name: "নাটোর",
            },
            {
                code: null,
                name: "নওয়াবগঞ্জ",
            },
            {
                code: null,
                name: "পাবনা",
            },
            {
                code: null,
                name: "রাজশাহী",
            },
            {
                code: null,
                name: "সিরাজগঞ্জ",
            },
            {
                code: null,
                name: "দিনাজপুর",
            },
            {
                code: null,
                name: "গাইবান্ধা",
            },
            {
                code: null,
                name: "কুড়িগ্রাম",
            },
            {
                code: null,
                name: "লালমনিরহাট",
            },
            {
                code: null,
                name: "নীলফামারী",
            },
            {
                code: null,
                name: "পঞ্চগড়",
            },
            {
                code: null,
                name: "রংপুর",
            },
            {
                code: null,
                name: "ঠাকুরগাঁ",
            },
            {
                code: null,
                name: "হবিগঞ্জ",
            },
            {
                code: null,
                name: "মৌলভীবাজার",
            },
            {
                code: null,
                name: "সুনামগঞ্জ",
            },
            {
                code: null,
                name: "সিলেট",
            },
        ],
    },
    {
        code: "BE",
        name: "Belgium",
        native: "België",
        phone: "32",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Brussels",
        currency: "EUR",
        languages: [
            {
                code: "nl",
                name: "Dutch",
                native: "Nederlands",
                rtl: false,
            },
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "de",
                name: "German",
                native: "Deutsch",
                rtl: false,
            },
        ],
        emoji: "🇧🇪",
        emojiU: "U+1F1E7 U+1F1EA",
        states: [
            {
                code: "ANT",
                name: "Antwerpen",
            },
            {
                code: "HAI",
                name: "Henegouwen",
            },
            {
                code: "LIE",
                name: "Luik",
            },
            {
                code: "LIM",
                name: "Limburg",
            },
            {
                code: "LUX",
                name: "Luxemburg",
            },
            {
                code: "NAM",
                name: "Namen",
            },
            {
                code: "OVL",
                name: "Oost-Vlaanderen",
            },
            {
                code: "VBR",
                name: "Vlaams-Brabant",
            },
            {
                code: "WBR",
                name: "Waals-Brabant",
            },
            {
                code: "WVL",
                name: "West-Vlaanderen",
            },
        ],
    },
    {
        code: "BF",
        name: "Burkina Faso",
        native: "Burkina Faso",
        phone: "226",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Ouagadougou",
        currency: "XOF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "ff",
                name: "Peul",
                native: "Fulfulde",
                rtl: false,
            },
        ],
        emoji: "🇧🇫",
        emojiU: "U+1F1E7 U+1F1EB",
        states: [],
    },
    {
        code: "BG",
        name: "Bulgaria",
        native: "България",
        phone: "359",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Sofia",
        currency: "BGN",
        languages: [
            {
                code: "bg",
                name: "Bulgarian",
                native: "Български",
                rtl: false,
            },
        ],
        emoji: "🇧🇬",
        emojiU: "U+1F1E7 U+1F1EC",
        states: [],
    },
    {
        code: "BH",
        name: "Bahrain",
        native: "‏البحرين",
        phone: "973",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Manama",
        currency: "BHD",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇧🇭",
        emojiU: "U+1F1E7 U+1F1ED",
        states: [],
    },
    {
        code: "BI",
        name: "Burundi",
        native: "Burundi",
        phone: "257",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Bujumbura",
        currency: "BIF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "rn",
                name: "Kirundi",
                native: "Kirundi",
                rtl: false,
            },
        ],
        emoji: "🇧🇮",
        emojiU: "U+1F1E7 U+1F1EE",
        states: [],
    },
    {
        code: "BJ",
        name: "Benin",
        native: "Bénin",
        phone: "229",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Porto-Novo",
        currency: "XOF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇧🇯",
        emojiU: "U+1F1E7 U+1F1EF",
        states: [],
    },
    {
        code: "BL",
        name: "Saint Barthélemy",
        native: "Saint-Barthélemy",
        phone: "590",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Gustavia",
        currency: "EUR",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇧🇱",
        emojiU: "U+1F1E7 U+1F1F1",
        states: [],
    },
    {
        code: "BM",
        name: "Bermuda",
        native: "Bermuda",
        phone: "1441",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Hamilton",
        currency: "BMD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇧🇲",
        emojiU: "U+1F1E7 U+1F1F2",
        states: [],
    },
    {
        code: "BN",
        name: "Brunei",
        native: "Negara Brunei Darussalam",
        phone: "673",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Bandar Seri Begawan",
        currency: "BND",
        languages: [
            {
                code: "ms",
                name: "Malay",
                native: "Bahasa Melayu",
                rtl: false,
            },
        ],
        emoji: "🇧🇳",
        emojiU: "U+1F1E7 U+1F1F3",
        states: [],
    },
    {
        code: "BO",
        name: "Bolivia",
        native: "Bolivia",
        phone: "591",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Sucre",
        currency: "BOB,BOV",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
            {
                code: "ay",
                name: "Aymara",
                native: "Aymar",
                rtl: false,
            },
            {
                code: "qu",
                name: "Quechua",
                native: "Runa Simi",
                rtl: false,
            },
        ],
        emoji: "🇧🇴",
        emojiU: "U+1F1E7 U+1F1F4",
        states: [
            {
                code: null,
                name: "Cercado",
            },
            {
                code: null,
                name: "Iténez",
            },
            {
                code: null,
                name: "José Ballivián",
            },
            {
                code: null,
                name: "Mamoré",
            },
            {
                code: null,
                name: "Marbán",
            },
            {
                code: null,
                name: "Moxos",
            },
            {
                code: null,
                name: "Vaca Díez",
            },
            {
                code: null,
                name: "Yacuma",
            },
            {
                code: null,
                name: "Azurduy",
            },
            {
                code: null,
                name: "Belisario Boeto",
            },
            {
                code: null,
                name: "Hernando Siles",
            },
            {
                code: null,
                name: "Jaime Zudáñez",
            },
            {
                code: null,
                name: "Luis Calvo",
            },
            {
                code: null,
                name: "Nor Cinti",
            },
            {
                code: null,
                name: "Oropeza",
            },
            {
                code: null,
                name: "Sud Cinti",
            },
            {
                code: null,
                name: "Tomina",
            },
            {
                code: null,
                name: "Yamparáez",
            },
            {
                code: null,
                name: "Arani",
            },
            {
                code: null,
                name: "Arque",
            },
            {
                code: null,
                name: "Ayopaya",
            },
            {
                code: null,
                name: "Capinota",
            },
            {
                code: null,
                name: "Carrasco",
            },
            {
                code: null,
                name: "Cercado",
            },
            {
                code: null,
                name: "Chapare",
            },
            {
                code: null,
                name: "Esteban Arce",
            },
            {
                code: null,
                name: "Germán Jordán",
            },
            {
                code: null,
                name: "Mizque",
            },
            {
                code: null,
                name: "Campero",
            },
            {
                code: null,
                name: "Punata",
            },
            {
                code: null,
                name: "Quillacollo",
            },
            {
                code: null,
                name: "Bolívar",
            },
            {
                code: null,
                name: "Tapacarí",
            },
            {
                code: null,
                name: "Tiraque",
            },
            {
                code: null,
                name: "Abel Iturralde",
            },
            {
                code: null,
                name: "Aroma",
            },
            {
                code: null,
                name: "Bautista Saavedra",
            },
            {
                code: null,
                name: "Caranavi",
            },
            {
                code: null,
                name: "Eliodoro Camacho",
            },
            {
                code: null,
                name: "Franz Tamayo",
            },
            {
                code: null,
                name: "Gualberto Villarroel",
            },
            {
                code: null,
                name: "Ingavi",
            },
            {
                code: null,
                name: "Inquisivi",
            },
            {
                code: null,
                name: "José Manuel Pando",
            },
            {
                code: null,
                name: "Larecaja",
            },
            {
                code: null,
                name: "Loayza",
            },
            {
                code: null,
                name: "Los Andes",
            },
            {
                code: null,
                name: "Manco Kapac",
            },
            {
                code: null,
                name: "Muñecas",
            },
            {
                code: null,
                name: "Nor Yungas",
            },
            {
                code: null,
                name: "Omasuyos",
            },
            {
                code: null,
                name: "Pacajes",
            },
            {
                code: null,
                name: "Murillo",
            },
            {
                code: null,
                name: "Sud Yungas",
            },
            {
                code: null,
                name: "Atahuallpa",
            },
            {
                code: null,
                name: "Carangas",
            },
            {
                code: null,
                name: "Cercado",
            },
            {
                code: null,
                name: "Eduardo Avaroa",
            },
            {
                code: null,
                name: "Ladislao Cabrera",
            },
            {
                code: null,
                name: "Litoral",
            },
            {
                code: null,
                name: "Nor Carangas",
            },
            {
                code: null,
                name: "Pantaléon Dalence",
            },
            {
                code: null,
                name: "Poopó",
            },
            {
                code: null,
                name: "Puerto de Mejillones",
            },
            {
                code: null,
                name: "Sajama",
            },
            {
                code: null,
                name: "San Pedro de Totora",
            },
            {
                code: null,
                name: "Saucarí",
            },
            {
                code: null,
                name: "Sebastián Pagador",
            },
            {
                code: null,
                name: "Sud Carangas",
            },
            {
                code: null,
                name: "Tomas Barrón",
            },
            {
                code: null,
                name: "Abuná",
            },
            {
                code: null,
                name: "Federico Román",
            },
            {
                code: null,
                name: "Madre de Dios",
            },
            {
                code: null,
                name: "Manuripi",
            },
            {
                code: null,
                name: "Nicolás Suárez",
            },
            {
                code: null,
                name: "Alonso de Ibáñez",
            },
            {
                code: null,
                name: "Antonio Quijarro",
            },
            {
                code: null,
                name: "Bernardino Bilbao",
            },
            {
                code: null,
                name: "Charcas",
            },
            {
                code: null,
                name: "Chayanta",
            },
            {
                code: null,
                name: "Cornelio Saavedra",
            },
            {
                code: null,
                name: "Daniel Campos",
            },
            {
                code: null,
                name: "Enrique Baldivieso",
            },
            {
                code: null,
                name: "José María Linares",
            },
            {
                code: null,
                name: "Modesto Omiste",
            },
            {
                code: null,
                name: "Nor Chichas",
            },
            {
                code: null,
                name: "Nor Lípez",
            },
            {
                code: null,
                name: "Rafael Bustillo",
            },
            {
                code: null,
                name: "Sur Chichas",
            },
            {
                code: null,
                name: "Sur Lípez",
            },
            {
                code: null,
                name: "Tomás Frías",
            },
            {
                code: null,
                name: "Andrés Ibáñez",
            },
            {
                code: null,
                name: "Ángel Sandoval",
            },
            {
                code: null,
                name: "Chiquitos",
            },
            {
                code: null,
                name: "Cordillera",
            },
            {
                code: null,
                name: "Florida",
            },
            {
                code: null,
                name: "Germán Busch",
            },
            {
                code: null,
                name: "Guarayos",
            },
            {
                code: null,
                name: "Ichilo",
            },
            {
                code: null,
                name: "Ignacio Warnes",
            },
            {
                code: null,
                name: "José Miguel de Velasco",
            },
            {
                code: null,
                name: "Manuel María Caballero",
            },
            {
                code: null,
                name: "Ñuflo de Chávez",
            },
            {
                code: null,
                name: "Obispo Santistevan",
            },
            {
                code: null,
                name: "Sara",
            },
            {
                code: null,
                name: "Vallegrande",
            },
            {
                code: null,
                name: "Aniceto Arce",
            },
            {
                code: null,
                name: "Burnet O'Connor",
            },
            {
                code: null,
                name: "Cercado",
            },
            {
                code: null,
                name: "Eustaquio Méndez",
            },
            {
                code: null,
                name: "Gran Chaco",
            },
            {
                code: null,
                name: "José María Avilés",
            },
        ],
    },
    {
        code: "BQ",
        name: "Bonaire",
        native: "Bonaire",
        phone: "5997",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Kralendijk",
        currency: "USD",
        languages: [
            {
                code: "nl",
                name: "Dutch",
                native: "Nederlands",
                rtl: false,
            },
        ],
        emoji: "🇧🇶",
        emojiU: "U+1F1E7 U+1F1F6",
        states: [],
    },
    {
        code: "BR",
        name: "Brazil",
        native: "Brasil",
        phone: "55",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Brasília",
        currency: "BRL",
        languages: [
            {
                code: "pt",
                name: "Portuguese",
                native: "Português",
                rtl: false,
            },
        ],
        emoji: "🇧🇷",
        emojiU: "U+1F1E7 U+1F1F7",
        states: [
            {
                code: "AC",
                name: "Acre",
            },
            {
                code: "AL",
                name: "Alagoas",
            },
            {
                code: "AP",
                name: "Amapá",
            },
            {
                code: "AM",
                name: "Amazonas",
            },
            {
                code: "BA",
                name: "Bahia",
            },
            {
                code: "CE",
                name: "Ceará",
            },
            {
                code: "DF",
                name: "Distrito Federal",
            },
            {
                code: "ES",
                name: "Espírito Santo",
            },
            {
                code: "GO",
                name: "Goiás",
            },
            {
                code: "MA",
                name: "Maranhão",
            },
            {
                code: "MT",
                name: "Mato Grosso",
            },
            {
                code: "MS",
                name: "Mato Grosso do Sul",
            },
            {
                code: "MG",
                name: "Minas Gerais",
            },
            {
                code: "PA",
                name: "Pará",
            },
            {
                code: "PB",
                name: "Paraíba",
            },
            {
                code: "PR",
                name: "Paraná",
            },
            {
                code: "PE",
                name: "Pernambuco",
            },
            {
                code: "PI",
                name: "Piauí",
            },
            {
                code: "RJ",
                name: "Rio de Janeiro",
            },
            {
                code: "RN",
                name: "Rio Grande do Norte",
            },
            {
                code: "RS",
                name: "Rio Grande do Sul",
            },
            {
                code: "RO",
                name: "Rondônia",
            },
            {
                code: "RR",
                name: "Roraima",
            },
            {
                code: "SC",
                name: "Santa Catarina",
            },
            {
                code: "SP",
                name: "São Paulo",
            },
            {
                code: "SE",
                name: "Sergipe",
            },
            {
                code: "TO",
                name: "Tocantins",
            },
        ],
    },
    {
        code: "BS",
        name: "Bahamas",
        native: "Bahamas",
        phone: "1242",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Nassau",
        currency: "BSD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇧🇸",
        emojiU: "U+1F1E7 U+1F1F8",
        states: [],
    },
    {
        code: "BT",
        name: "Bhutan",
        native: "ʼbrug-yul",
        phone: "975",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Thimphu",
        currency: "BTN,INR",
        languages: [
            {
                code: "dz",
                name: "Dzongkha",
                native: "ཇོང་ཁ",
                rtl: false,
            },
        ],
        emoji: "🇧🇹",
        emojiU: "U+1F1E7 U+1F1F9",
        states: [],
    },
    {
        code: "BV",
        name: "Bouvet Island",
        native: "Bouvetøya",
        phone: "47",
        continent: {
            code: "AN",
            name: "Antarctica",
        },
        capital: null,
        currency: "NOK",
        languages: [
            {
                code: "no",
                name: "Norwegian",
                native: "Norsk",
                rtl: false,
            },
            {
                code: "nb",
                name: "Norwegian Bokmål",
                native: "Norsk bokmål",
                rtl: false,
            },
            {
                code: "nn",
                name: "Norwegian Nynorsk",
                native: "Norsk nynorsk",
                rtl: false,
            },
        ],
        emoji: "🇧🇻",
        emojiU: "U+1F1E7 U+1F1FB",
        states: [],
    },
    {
        code: "BW",
        name: "Botswana",
        native: "Botswana",
        phone: "267",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Gaborone",
        currency: "BWP",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "tn",
                name: "Tswana",
                native: "Setswana",
                rtl: false,
            },
        ],
        emoji: "🇧🇼",
        emojiU: "U+1F1E7 U+1F1FC",
        states: [],
    },
    {
        code: "BY",
        name: "Belarus",
        native: "Белару́сь",
        phone: "375",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Minsk",
        currency: "BYN",
        languages: [
            {
                code: "be",
                name: "Belarusian",
                native: "Беларуская",
                rtl: false,
            },
            {
                code: "ru",
                name: "Russian",
                native: "Русский",
                rtl: false,
            },
        ],
        emoji: "🇧🇾",
        emojiU: "U+1F1E7 U+1F1FE",
        states: [],
    },
    {
        code: "BZ",
        name: "Belize",
        native: "Belize",
        phone: "501",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Belmopan",
        currency: "BZD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇧🇿",
        emojiU: "U+1F1E7 U+1F1FF",
        states: [],
    },
    {
        code: "CA",
        name: "Canada",
        native: "Canada",
        phone: "1",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Ottawa",
        currency: "CAD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇨🇦",
        emojiU: "U+1F1E8 U+1F1E6",
        states: [
            {
                code: "AB",
                name: "Alberta",
            },
            {
                code: "BC",
                name: "British Columbia",
            },
            {
                code: "MB",
                name: "Manitoba",
            },
            {
                code: "NB",
                name: "New Brunswick",
            },
            {
                code: "NL",
                name: "Newfoundland and Labrador",
            },
            {
                code: "NS",
                name: "Nova Scotia",
            },
            {
                code: "NU",
                name: "Nunavut",
            },
            {
                code: "NT",
                name: "Northwest Territories",
            },
            {
                code: "ON",
                name: "Ontario",
            },
            {
                code: "PE",
                name: "Prince Edward Island",
            },
            {
                code: "QC",
                name: "Quebec",
            },
            {
                code: "SK",
                name: "Saskatchewan",
            },
            {
                code: "YT",
                name: "Yukon",
            },
        ],
    },
    {
        code: "CC",
        name: "Cocos [Keeling] Islands",
        native: "Cocos (Keeling) Islands",
        phone: "61",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "West Island",
        currency: "AUD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇨🇨",
        emojiU: "U+1F1E8 U+1F1E8",
        states: [],
    },
    {
        code: "CD",
        name: "Democratic Republic of the Congo",
        native: "République démocratique du Congo",
        phone: "243",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Kinshasa",
        currency: "CDF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "ln",
                name: "Lingala",
                native: "Lingála",
                rtl: false,
            },
            {
                code: "kg",
                name: "Kongo",
                native: "KiKongo",
                rtl: false,
            },
            {
                code: "sw",
                name: "Swahili",
                native: "Kiswahili",
                rtl: false,
            },
            {
                code: "lu",
                name: "Luba-Katanga",
                native: "Tshiluba",
                rtl: false,
            },
        ],
        emoji: "🇨🇩",
        emojiU: "U+1F1E8 U+1F1E9",
        states: [],
    },
    {
        code: "CF",
        name: "Central African Republic",
        native: "Ködörösêse tî Bêafrîka",
        phone: "236",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Bangui",
        currency: "XAF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "sg",
                name: "Sango",
                native: "Sängö",
                rtl: false,
            },
        ],
        emoji: "🇨🇫",
        emojiU: "U+1F1E8 U+1F1EB",
        states: [],
    },
    {
        code: "CG",
        name: "Republic of the Congo",
        native: "République du Congo",
        phone: "242",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Brazzaville",
        currency: "XAF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "ln",
                name: "Lingala",
                native: "Lingála",
                rtl: false,
            },
        ],
        emoji: "🇨🇬",
        emojiU: "U+1F1E8 U+1F1EC",
        states: [],
    },
    {
        code: "CH",
        name: "Switzerland",
        native: "Schweiz",
        phone: "41",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Bern",
        currency: "CHE,CHF,CHW",
        languages: [
            {
                code: "de",
                name: "German",
                native: "Deutsch",
                rtl: false,
            },
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "it",
                name: "Italian",
                native: "Italiano",
                rtl: false,
            },
        ],
        emoji: "🇨🇭",
        emojiU: "U+1F1E8 U+1F1ED",
        states: [],
    },
    {
        code: "CI",
        name: "Ivory Coast",
        native: "Côte d'Ivoire",
        phone: "225",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Yamoussoukro",
        currency: "XOF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇨🇮",
        emojiU: "U+1F1E8 U+1F1EE",
        states: [],
    },
    {
        code: "CK",
        name: "Cook Islands",
        native: "Cook Islands",
        phone: "682",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Avarua",
        currency: "NZD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇨🇰",
        emojiU: "U+1F1E8 U+1F1F0",
        states: [],
    },
    {
        code: "CL",
        name: "Chile",
        native: "Chile",
        phone: "56",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Santiago",
        currency: "CLF,CLP",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇨🇱",
        emojiU: "U+1F1E8 U+1F1F1",
        states: [
            {
                code: null,
                name: "Arica",
            },
            {
                code: null,
                name: "Parinacota",
            },
            {
                code: null,
                name: "Iquique",
            },
            {
                code: null,
                name: "Tamarugal",
            },
            {
                code: null,
                name: "Antofagasta",
            },
            {
                code: null,
                name: "El Loa",
            },
            {
                code: null,
                name: "Tocopilla",
            },
            {
                code: null,
                name: "Copiapó",
            },
            {
                code: null,
                name: "Huasco",
            },
            {
                code: null,
                name: "Chañaral",
            },
            {
                code: null,
                name: "Elqui",
            },
            {
                code: null,
                name: "Limarí",
            },
            {
                code: null,
                name: "Choapa",
            },
            {
                code: null,
                name: "Isla de Pascua",
            },
            {
                code: null,
                name: "Los Andes",
            },
            {
                code: null,
                name: "Marga Marga",
            },
            {
                code: null,
                name: "Petorca",
            },
            {
                code: null,
                name: "Quillota",
            },
            {
                code: null,
                name: "San Antonio",
            },
            {
                code: null,
                name: "San Felipe de Aconcagua",
            },
            {
                code: null,
                name: "Valparaíso",
            },
            {
                code: null,
                name: "Cachapoal",
            },
            {
                code: null,
                name: "Colchagua",
            },
            {
                code: null,
                name: "Cardenal Caro",
            },
            {
                code: null,
                name: "Talca",
            },
            {
                code: null,
                name: "Linares",
            },
            {
                code: null,
                name: "Curicó",
            },
            {
                code: null,
                name: "Cauquenes",
            },
            {
                code: null,
                name: "Concepción",
            },
            {
                code: null,
                name: "Ñuble",
            },
            {
                code: null,
                name: "Biobío",
            },
            {
                code: null,
                name: "Arauco",
            },
            {
                code: null,
                name: "Cautin",
            },
            {
                code: null,
                name: "Malleco",
            },
            {
                code: null,
                name: "Valdivia",
            },
            {
                code: null,
                name: "Ranco",
            },
            {
                code: null,
                name: "Llanquihue",
            },
            {
                code: null,
                name: "Osorno",
            },
            {
                code: null,
                name: "Chiloe",
            },
            {
                code: null,
                name: "Palena",
            },
            {
                code: null,
                name: "Coihaique",
            },
            {
                code: null,
                name: "Aisén",
            },
            {
                code: null,
                name: "General Carrera",
            },
            {
                code: null,
                name: "Capitan Prat",
            },
            {
                code: null,
                name: "Magallanes",
            },
            {
                code: null,
                name: "Ultima Esperanza",
            },
            {
                code: null,
                name: "Tierra del Fuego",
            },
            {
                code: null,
                name: "Antártica Chilena",
            },
            {
                code: null,
                name: "Santiago",
            },
            {
                code: null,
                name: "Cordillera",
            },
            {
                code: null,
                name: "Maipo",
            },
            {
                code: null,
                name: "Talagante",
            },
            {
                code: null,
                name: "Melipilla",
            },
            {
                code: null,
                name: "Chacabuco",
            },
        ],
    },
    {
        code: "CM",
        name: "Cameroon",
        native: "Cameroon",
        phone: "237",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Yaoundé",
        currency: "XAF",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇨🇲",
        emojiU: "U+1F1E8 U+1F1F2",
        states: [],
    },
    {
        code: "CN",
        name: "China",
        native: "中国",
        phone: "86",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Beijing",
        currency: "CNY",
        languages: [
            {
                code: "zh",
                name: "Chinese",
                native: "中文",
                rtl: false,
            },
        ],
        emoji: "🇨🇳",
        emojiU: "U+1F1E8 U+1F1F3",
        states: [
            {
                code: "渝",
                name: "重庆",
            },
            {
                code: "黑",
                name: "黑龙江",
            },
            {
                code: "吉",
                name: "吉林",
            },
            {
                code: "琼",
                name: "海南",
            },
            {
                code: "京",
                name: "北京",
            },
            {
                code: "辽",
                name: "辽宁",
            },
            {
                code: "蒙",
                name: "内蒙古",
            },
            {
                code: "藏",
                name: "西藏",
            },
            {
                code: "青",
                name: "青海",
            },
            {
                code: "宁",
                name: "宁夏",
            },
            {
                code: "新",
                name: "新疆",
            },
            {
                code: "甘",
                name: "甘肃",
            },
            {
                code: "冀",
                name: "河北",
            },
            {
                code: "豫",
                name: "河南",
            },
            {
                code: "鄂",
                name: "湖北",
            },
            {
                code: "湘",
                name: "湖南",
            },
            {
                code: "鲁",
                name: "山东",
            },
            {
                code: "苏",
                name: "江苏",
            },
            {
                code: "皖",
                name: "安徽",
            },
            {
                code: "晋",
                name: "山西",
            },
            {
                code: "陕",
                name: "陕西",
            },
            {
                code: "川",
                name: "四川",
            },
            {
                code: "滇",
                name: "云南",
            },
            {
                code: "黔",
                name: "贵州",
            },
            {
                code: "浙",
                name: "浙江",
            },
            {
                code: "闽",
                name: "福建",
            },
            {
                code: "桂",
                name: "广西",
            },
            {
                code: "沪",
                name: "上海",
            },
            {
                code: "津",
                name: "天津",
            },
            {
                code: "港",
                name: "香港",
            },
            {
                code: "澳",
                name: "澳门",
            },
            {
                code: "台",
                name: "台湾",
            },
            {
                code: "赣",
                name: "江西",
            },
            {
                code: "粤",
                name: "广东",
            },
        ],
    },
    {
        code: "CO",
        name: "Colombia",
        native: "Colombia",
        phone: "57",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Bogotá",
        currency: "COP",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇨🇴",
        emojiU: "U+1F1E8 U+1F1F4",
        states: [],
    },
    {
        code: "CR",
        name: "Costa Rica",
        native: "Costa Rica",
        phone: "506",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "San José",
        currency: "CRC",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇨🇷",
        emojiU: "U+1F1E8 U+1F1F7",
        states: [
            {
                code: null,
                name: "San José",
            },
            {
                code: null,
                name: "Alajuela",
            },
            {
                code: null,
                name: "Cartago",
            },
            {
                code: null,
                name: "Heredia",
            },
            {
                code: null,
                name: "Guanacaste",
            },
            {
                code: null,
                name: "Puntarenas",
            },
            {
                code: null,
                name: "Limón",
            },
        ],
    },
    {
        code: "CU",
        name: "Cuba",
        native: "Cuba",
        phone: "53",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Havana",
        currency: "CUC,CUP",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇨🇺",
        emojiU: "U+1F1E8 U+1F1FA",
        states: [
            {
                code: null,
                name: "Camagüey",
            },
            {
                code: null,
                name: "Ciego de Ávila",
            },
            {
                code: null,
                name: "Cienfuegos",
            },
            {
                code: null,
                name: "Havana",
            },
            {
                code: null,
                name: "Bayamo",
            },
            {
                code: null,
                name: "Guantánamo",
            },
            {
                code: null,
                name: "Holguín",
            },
            {
                code: null,
                name: "Nueva Gerona",
            },
            {
                code: null,
                name: "Artemisa",
            },
            {
                code: null,
                name: "Las Tunas",
            },
            {
                code: null,
                name: "Matanzas",
            },
            {
                code: null,
                name: "San José de las Lajas",
            },
            {
                code: null,
                name: "Pinar del Río",
            },
            {
                code: null,
                name: "Sancti Spíritus",
            },
            {
                code: null,
                name: "Santiago de Cuba",
            },
            {
                code: null,
                name: "Santa Clara",
            },
        ],
    },
    {
        code: "CV",
        name: "Cape Verde",
        native: "Cabo Verde",
        phone: "238",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Praia",
        currency: "CVE",
        languages: [
            {
                code: "pt",
                name: "Portuguese",
                native: "Português",
                rtl: false,
            },
        ],
        emoji: "🇨🇻",
        emojiU: "U+1F1E8 U+1F1FB",
        states: [],
    },
    {
        code: "CW",
        name: "Curacao",
        native: "Curaçao",
        phone: "5999",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Willemstad",
        currency: "ANG",
        languages: [
            {
                code: "nl",
                name: "Dutch",
                native: "Nederlands",
                rtl: false,
            },
            {
                code: "pa",
                name: "Panjabi / Punjabi",
                native: "ਪੰਜਾਬੀ / पंजाबी / پنجابي",
                rtl: false,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇨🇼",
        emojiU: "U+1F1E8 U+1F1FC",
        states: [],
    },
    {
        code: "CX",
        name: "Christmas Island",
        native: "Christmas Island",
        phone: "61",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Flying Fish Cove",
        currency: "AUD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇨🇽",
        emojiU: "U+1F1E8 U+1F1FD",
        states: [],
    },
    {
        code: "CY",
        name: "Cyprus",
        native: "Κύπρος",
        phone: "357",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Nicosia",
        currency: "EUR",
        languages: [
            {
                code: "el",
                name: "Greek",
                native: "Ελληνικά",
                rtl: false,
            },
            {
                code: "tr",
                name: "Turkish",
                native: "Türkçe",
                rtl: false,
            },
            {
                code: "hy",
                name: "Armenian",
                native: "Հայերեն",
                rtl: false,
            },
        ],
        emoji: "🇨🇾",
        emojiU: "U+1F1E8 U+1F1FE",
        states: [],
    },
    {
        code: "CZ",
        name: "Czech Republic",
        native: "Česká republika",
        phone: "420",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Prague",
        currency: "CZK",
        languages: [
            {
                code: "cs",
                name: "Czech",
                native: "Česky",
                rtl: false,
            },
            {
                code: "sk",
                name: "Slovak",
                native: "Slovenčina",
                rtl: false,
            },
        ],
        emoji: "🇨🇿",
        emojiU: "U+1F1E8 U+1F1FF",
        states: [],
    },
    {
        code: "DE",
        name: "Germany",
        native: "Deutschland",
        phone: "49",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Berlin",
        currency: "EUR",
        languages: [
            {
                code: "de",
                name: "German",
                native: "Deutsch",
                rtl: false,
            },
        ],
        emoji: "🇩🇪",
        emojiU: "U+1F1E9 U+1F1EA",
        states: [
            {
                code: "BW",
                name: "Baden-Württemberg",
            },
            {
                code: "BY",
                name: "Bayern",
            },
            {
                code: "BE",
                name: "Berlin",
            },
            {
                code: "BB",
                name: "Brandenburg",
            },
            {
                code: "HB",
                name: "Bremen",
            },
            {
                code: "HH",
                name: "Hamburg",
            },
            {
                code: "HE",
                name: "Hessen",
            },
            {
                code: "MV",
                name: "Mecklenburg-Vorpommern",
            },
            {
                code: "NI",
                name: "Niedersachsen",
            },
            {
                code: "NW",
                name: "Nordrhein-Westfalen",
            },
            {
                code: "RP",
                name: "Rheinland-Pfalz",
            },
            {
                code: "SL",
                name: "Saarland",
            },
            {
                code: "SN",
                name: "Sachsen",
            },
            {
                code: "ST",
                name: "Sachsen-Anhalt",
            },
            {
                code: "SH",
                name: "Schleswig-Holstein",
            },
            {
                code: "TH",
                name: "Thüringen",
            },
        ],
    },
    {
        code: "DJ",
        name: "Djibouti",
        native: "Djibouti",
        phone: "253",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Djibouti",
        currency: "DJF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇩🇯",
        emojiU: "U+1F1E9 U+1F1EF",
        states: [],
    },
    {
        code: "DK",
        name: "Denmark",
        native: "Danmark",
        phone: "45",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Copenhagen",
        currency: "DKK",
        languages: [
            {
                code: "da",
                name: "Danish",
                native: "Dansk",
                rtl: false,
            },
        ],
        emoji: "🇩🇰",
        emojiU: "U+1F1E9 U+1F1F0",
        states: [
            {
                code: null,
                name: "Hovedstaden",
            },
            {
                code: null,
                name: "Midtjylland",
            },
            {
                code: null,
                name: "Nordjylland",
            },
            {
                code: null,
                name: "Sjælland",
            },
            {
                code: null,
                name: "Syddanmark",
            },
        ],
    },
    {
        code: "DM",
        name: "Dominica",
        native: "Dominica",
        phone: "1767",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Roseau",
        currency: "XCD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇩🇲",
        emojiU: "U+1F1E9 U+1F1F2",
        states: [],
    },
    {
        code: "DO",
        name: "Dominican Republic",
        native: "República Dominicana",
        phone: "1809,1829,1849",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Santo Domingo",
        currency: "DOP",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇩🇴",
        emojiU: "U+1F1E9 U+1F1F4",
        states: [],
    },
    {
        code: "DZ",
        name: "Algeria",
        native: "الجزائر",
        phone: "213",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Algiers",
        currency: "DZD",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇩🇿",
        emojiU: "U+1F1E9 U+1F1FF",
        states: [],
    },
    {
        code: "EC",
        name: "Ecuador",
        native: "Ecuador",
        phone: "593",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Quito",
        currency: "USD",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇪🇨",
        emojiU: "U+1F1EA U+1F1E8",
        states: [],
    },
    {
        code: "EE",
        name: "Estonia",
        native: "Eesti",
        phone: "372",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Tallinn",
        currency: "EUR",
        languages: [
            {
                code: "et",
                name: "Estonian",
                native: "Eesti",
                rtl: false,
            },
        ],
        emoji: "🇪🇪",
        emojiU: "U+1F1EA U+1F1EA",
        states: [],
    },
    {
        code: "EG",
        name: "Egypt",
        native: "مصر‎",
        phone: "20",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Cairo",
        currency: "EGP",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇪🇬",
        emojiU: "U+1F1EA U+1F1EC",
        states: [],
    },
    {
        code: "EH",
        name: "Western Sahara",
        native: "الصحراء الغربية",
        phone: "212",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "El Aaiún",
        currency: "MAD,DZD,MRU",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇪🇭",
        emojiU: "U+1F1EA U+1F1ED",
        states: [],
    },
    {
        code: "ER",
        name: "Eritrea",
        native: "ኤርትራ",
        phone: "291",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Asmara",
        currency: "ERN",
        languages: [
            {
                code: "ti",
                name: "Tigrinya",
                native: "ትግርኛ",
                rtl: false,
            },
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇪🇷",
        emojiU: "U+1F1EA U+1F1F7",
        states: [],
    },
    {
        code: "ES",
        name: "Spain",
        native: "España",
        phone: "34",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Madrid",
        currency: "EUR",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
            {
                code: "eu",
                name: "Basque",
                native: "Euskara",
                rtl: false,
            },
            {
                code: "ca",
                name: "Catalan",
                native: "Català",
                rtl: false,
            },
            {
                code: "gl",
                name: "Galician",
                native: "Galego",
                rtl: false,
            },
            {
                code: "oc",
                name: "Occitan",
                native: "Occitan",
                rtl: false,
            },
        ],
        emoji: "🇪🇸",
        emojiU: "U+1F1EA U+1F1F8",
        states: [
            {
                code: "C",
                name: "La Coruña",
            },
            {
                code: "LU",
                name: "Lugo",
            },
            {
                code: "BI",
                name: "Vizcaya",
            },
            {
                code: "SS",
                name: "Guipúzcoa",
            },
            {
                code: "HU",
                name: "Huesca",
            },
            {
                code: "L",
                name: "Lérida",
            },
            {
                code: "GI",
                name: "Gerona",
            },
            {
                code: "B",
                name: "Barcelona",
            },
            {
                code: "T",
                name: "Tarragona",
            },
            {
                code: "CS",
                name: "Castellón",
            },
            {
                code: "V",
                name: "Valencia",
            },
            {
                code: "A",
                name: "Alicante",
            },
            {
                code: "MU",
                name: "Murcia",
            },
            {
                code: "Z",
                name: "Zaragoza",
            },
            {
                code: "TE",
                name: "Teruel",
            },
            {
                code: "CU",
                name: "Cuenca",
            },
            {
                code: "AB",
                name: "Albacete",
            },
            {
                code: "AL",
                name: "Almeria",
            },
            {
                code: "GR",
                name: "Granada",
            },
            {
                code: "MA",
                name: "Málaga",
            },
            {
                code: "TF",
                name: "Tenerife",
            },
            {
                code: "CA",
                name: "Cádiz",
            },
            {
                code: "SE",
                name: "Sevilla",
            },
            {
                code: "H",
                name: "Huelva",
            },
            {
                code: "GC",
                name: "Las Palmas",
            },
            {
                code: "M",
                name: "Madrid",
            },
            {
                code: "BA",
                name: "Badajoz",
            },
            {
                code: "CC",
                name: "Cáceres",
            },
            {
                code: "TO",
                name: "Toledo",
            },
            {
                code: "CR",
                name: "Ciudad Real",
            },
            {
                code: "SA",
                name: "Salamanca",
            },
            {
                code: "CO",
                name: "Córdoba",
            },
            {
                code: "J",
                name: "Jaén",
            },
            {
                code: "AV",
                name: "Ávila",
            },
            {
                code: "VA",
                name: "Valladolid",
            },
            {
                code: "ZA",
                name: "Zamora",
            },
            {
                code: "VI",
                name: "Álava",
            },
            {
                code: "SG",
                name: "Segovia",
            },
            {
                code: "BU",
                name: "Burgos",
            },
            {
                code: "PO",
                name: "Pontevedra",
            },
            {
                code: "LE",
                name: "León",
            },
            {
                code: "OU",
                name: "Orense",
            },
            {
                code: "P",
                name: "Palencia",
            },
            {
                code: "LO",
                name: "La Rioja",
            },
            {
                code: "SO",
                name: "Soria",
            },
            {
                code: "GU",
                name: "Guadalajara",
            },
        ],
    },
    {
        code: "ET",
        name: "Ethiopia",
        native: "ኢትዮጵያ",
        phone: "251",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Addis Ababa",
        currency: "ETB",
        languages: [
            {
                code: "am",
                name: "Amharic",
                native: "አማርኛ",
                rtl: false,
            },
        ],
        emoji: "🇪🇹",
        emojiU: "U+1F1EA U+1F1F9",
        states: [
            {
                code: null,
                name: "Addis Ababa",
            },
            {
                code: null,
                name: "Afar Region",
            },
            {
                code: null,
                name: "Amhara Region",
            },
            {
                code: null,
                name: "Benishangul-Gumuz",
            },
            {
                code: null,
                name: "Dire Dawa",
            },
            {
                code: null,
                name: "Gambela",
            },
            {
                code: null,
                name: "Harari",
            },
            {
                code: null,
                name: "Oromia",
            },
            {
                code: null,
                name: "Somali",
            },
            {
                code: null,
                name: "Southern Nations, Nationalities, and Peoples' Region",
            },
            {
                code: null,
                name: "Tigray Region",
            },
        ],
    },
    {
        code: "FI",
        name: "Finland",
        native: "Suomi",
        phone: "358",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Helsinki",
        currency: "EUR",
        languages: [
            {
                code: "fi",
                name: "Finnish",
                native: "Suomi",
                rtl: false,
            },
            {
                code: "sv",
                name: "Swedish",
                native: "Svenska",
                rtl: false,
            },
        ],
        emoji: "🇫🇮",
        emojiU: "U+1F1EB U+1F1EE",
        states: [],
    },
    {
        code: "FJ",
        name: "Fiji",
        native: "Fiji",
        phone: "679",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Suva",
        currency: "FJD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "fj",
                name: "Fijian",
                native: "Na Vosa Vakaviti",
                rtl: false,
            },
            {
                code: "hi",
                name: "Hindi",
                native: "हिन्दी",
                rtl: false,
            },
            {
                code: "ur",
                name: "Urdu",
                native: "اردو",
                rtl: true,
            },
        ],
        emoji: "🇫🇯",
        emojiU: "U+1F1EB U+1F1EF",
        states: [],
    },
    {
        code: "FK",
        name: "Falkland Islands",
        native: "Falkland Islands",
        phone: "500",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Stanley",
        currency: "FKP",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇫🇰",
        emojiU: "U+1F1EB U+1F1F0",
        states: [],
    },
    {
        code: "FM",
        name: "Micronesia",
        native: "Micronesia",
        phone: "691",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Palikir",
        currency: "USD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇫🇲",
        emojiU: "U+1F1EB U+1F1F2",
        states: [],
    },
    {
        code: "FO",
        name: "Faroe Islands",
        native: "Føroyar",
        phone: "298",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Tórshavn",
        currency: "DKK",
        languages: [
            {
                code: "fo",
                name: "Faroese",
                native: "Føroyskt",
                rtl: false,
            },
        ],
        emoji: "🇫🇴",
        emojiU: "U+1F1EB U+1F1F4",
        states: [],
    },
    {
        code: "FR",
        name: "France",
        native: "France",
        phone: "33",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Paris",
        currency: "EUR",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇫🇷",
        emojiU: "U+1F1EB U+1F1F7",
        states: [],
    },
    {
        code: "GA",
        name: "Gabon",
        native: "Gabon",
        phone: "241",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Libreville",
        currency: "XAF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇬🇦",
        emojiU: "U+1F1EC U+1F1E6",
        states: [],
    },
    {
        code: "GB",
        name: "United Kingdom",
        native: "United Kingdom",
        phone: "44",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "London",
        currency: "GBP",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇬🇧",
        emojiU: "U+1F1EC U+1F1E7",
        states: [
            {
                code: null,
                name: "Avon",
            },
            {
                code: null,
                name: "Bedfordshire",
            },
            {
                code: null,
                name: "Berkshire",
            },
            {
                code: null,
                name: "Borders",
            },
            {
                code: null,
                name: "Bristol",
            },
            {
                code: null,
                name: "Buckinghamshire",
            },
            {
                code: null,
                name: "Cambridgeshire",
            },
            {
                code: null,
                name: "Channel Islands",
            },
            {
                code: null,
                name: "Cheshire",
            },
            {
                code: null,
                name: "Cleveland",
            },
            {
                code: null,
                name: "Cornwall",
            },
            {
                code: null,
                name: "Cumbria",
            },
            {
                code: null,
                name: "Derbyshire",
            },
            {
                code: null,
                name: "Devon",
            },
            {
                code: null,
                name: "Dorset",
            },
            {
                code: null,
                name: "Durham",
            },
            {
                code: null,
                name: "East Riding of Yorkshire",
            },
            {
                code: null,
                name: "East Sussex",
            },
            {
                code: null,
                name: "Essex",
            },
            {
                code: null,
                name: "Gloucestershire",
            },
            {
                code: null,
                name: "Greater Manchester",
            },
            {
                code: null,
                name: "Hampshire",
            },
            {
                code: null,
                name: "Herefordshire",
            },
            {
                code: null,
                name: "Hertfordshire",
            },
            {
                code: null,
                name: "Humberside",
            },
            {
                code: null,
                name: "Isle of Man",
            },
            {
                code: null,
                name: "Isle of Wight",
            },
            {
                code: null,
                name: "Isles of Scilly",
            },
            {
                code: null,
                name: "Kent",
            },
            {
                code: null,
                name: "Lancashire",
            },
            {
                code: null,
                name: "Leicestershire",
            },
            {
                code: null,
                name: "Lincolnshire",
            },
            {
                code: null,
                name: "London",
            },
            {
                code: null,
                name: "Merseyside",
            },
            {
                code: null,
                name: "Middlesex",
            },
            {
                code: null,
                name: "Norfolk",
            },
            {
                code: null,
                name: "North Yorkshire",
            },
            {
                code: null,
                name: "Northamptonshire",
            },
            {
                code: null,
                name: "Northumberland",
            },
            {
                code: null,
                name: "Nottinghamshire",
            },
            {
                code: null,
                name: "Oxfordshire",
            },
            {
                code: null,
                name: "Rutland",
            },
            {
                code: null,
                name: "Shropshire",
            },
            {
                code: null,
                name: "Somerset",
            },
            {
                code: null,
                name: "South Yorkshire",
            },
            {
                code: null,
                name: "Staffordshire",
            },
            {
                code: null,
                name: "Suffolk",
            },
            {
                code: null,
                name: "Surrey",
            },
            {
                code: null,
                name: "Tyne and Wear",
            },
            {
                code: null,
                name: "Warwickshire",
            },
            {
                code: null,
                name: "West Midlands",
            },
            {
                code: null,
                name: "West Sussex",
            },
            {
                code: null,
                name: "West Yorkshire",
            },
            {
                code: null,
                name: "Wiltshire",
            },
            {
                code: null,
                name: "Worcestershire",
            },
            {
                code: null,
                name: "Antrim",
            },
            {
                code: null,
                name: "Down",
            },
            {
                code: null,
                name: "Fermanagh",
            },
            {
                code: null,
                name: "Londonderry",
            },
            {
                code: null,
                name: "Tyrone",
            },
            {
                code: null,
                name: "Aberdeen City",
            },
            {
                code: null,
                name: "Aberdeenshire",
            },
            {
                code: null,
                name: "Angus",
            },
            {
                code: null,
                name: "Argyll and Bute",
            },
            {
                code: null,
                name: "Armagh",
            },
            {
                code: null,
                name: "Carmarthenshire",
            },
            {
                code: null,
                name: "Clackmannan",
            },
            {
                code: null,
                name: "Dumfries and Galloway",
            },
            {
                code: null,
                name: "East Ayrshire",
            },
            {
                code: null,
                name: "East Dunbartonshire",
            },
            {
                code: null,
                name: "East Lothian",
            },
            {
                code: null,
                name: "East Renfrewshire",
            },
            {
                code: null,
                name: "Edinburgh City",
            },
            {
                code: null,
                name: "Falkirk",
            },
            {
                code: null,
                name: "Fife",
            },
            {
                code: null,
                name: "Glasgow",
            },
            {
                code: null,
                name: "Highland",
            },
            {
                code: null,
                name: "Inverclyde",
            },
            {
                code: null,
                name: "Midlothian",
            },
            {
                code: null,
                name: "Moray",
            },
            {
                code: null,
                name: "North Ayrshire",
            },
            {
                code: null,
                name: "North Lanarkshire",
            },
            {
                code: null,
                name: "Orkney",
            },
            {
                code: null,
                name: "Perthshire and Kinross",
            },
            {
                code: null,
                name: "Renfrewshire",
            },
            {
                code: null,
                name: "Roxburghshire",
            },
            {
                code: null,
                name: "Shetland",
            },
            {
                code: null,
                name: "South Ayrshire",
            },
            {
                code: null,
                name: "South Lanarkshire",
            },
            {
                code: null,
                name: "Stirling",
            },
            {
                code: null,
                name: "West Dunbartonshire",
            },
            {
                code: null,
                name: "West Lothian",
            },
            {
                code: null,
                name: "Western Isles",
            },
            {
                code: null,
                name: "Blaenau Gwent",
            },
            {
                code: null,
                name: "Bridgend",
            },
            {
                code: null,
                name: "Caerphilly",
            },
            {
                code: null,
                name: "Cardiff",
            },
            {
                code: null,
                name: "Ceredigion",
            },
            {
                code: null,
                name: "Conwy",
            },
            {
                code: null,
                name: "Denbighshire",
            },
            {
                code: null,
                name: "Flintshire",
            },
            {
                code: null,
                name: "Gwynedd",
            },
            {
                code: null,
                name: "Isle of Anglesey",
            },
            {
                code: null,
                name: "Merthyr Tydfil",
            },
            {
                code: null,
                name: "Monmouthshire",
            },
            {
                code: null,
                name: "Neath Port Talbot",
            },
            {
                code: null,
                name: "Newport",
            },
            {
                code: null,
                name: "Pembrokeshire",
            },
            {
                code: null,
                name: "Powys",
            },
            {
                code: null,
                name: "Rhondda Cynon Taff",
            },
            {
                code: null,
                name: "Swansea",
            },
            {
                code: null,
                name: "The Vale of Glamorgan",
            },
            {
                code: null,
                name: "Torfaen",
            },
            {
                code: null,
                name: "Wrexham",
            },
        ],
    },
    {
        code: "GD",
        name: "Grenada",
        native: "Grenada",
        phone: "1473",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "St. George's",
        currency: "XCD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇬🇩",
        emojiU: "U+1F1EC U+1F1E9",
        states: [],
    },
    {
        code: "GE",
        name: "Georgia",
        native: "საქართველო",
        phone: "995",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Tbilisi",
        currency: "GEL",
        languages: [
            {
                code: "ka",
                name: "Georgian",
                native: "ქართული",
                rtl: false,
            },
        ],
        emoji: "🇬🇪",
        emojiU: "U+1F1EC U+1F1EA",
        states: [],
    },
    {
        code: "GF",
        name: "French Guiana",
        native: "Guyane française",
        phone: "594",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Cayenne",
        currency: "EUR",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇬🇫",
        emojiU: "U+1F1EC U+1F1EB",
        states: [],
    },
    {
        code: "GG",
        name: "Guernsey",
        native: "Guernsey",
        phone: "44",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "St. Peter Port",
        currency: "GBP",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇬🇬",
        emojiU: "U+1F1EC U+1F1EC",
        states: [],
    },
    {
        code: "GH",
        name: "Ghana",
        native: "Ghana",
        phone: "233",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Accra",
        currency: "GHS",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇬🇭",
        emojiU: "U+1F1EC U+1F1ED",
        states: [],
    },
    {
        code: "GI",
        name: "Gibraltar",
        native: "Gibraltar",
        phone: "350",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Gibraltar",
        currency: "GIP",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇬🇮",
        emojiU: "U+1F1EC U+1F1EE",
        states: [],
    },
    {
        code: "GL",
        name: "Greenland",
        native: "Kalaallit Nunaat",
        phone: "299",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Nuuk",
        currency: "DKK",
        languages: [
            {
                code: "kl",
                name: "Greenlandic",
                native: "Kalaallisut",
                rtl: false,
            },
        ],
        emoji: "🇬🇱",
        emojiU: "U+1F1EC U+1F1F1",
        states: [],
    },
    {
        code: "GM",
        name: "Gambia",
        native: "Gambia",
        phone: "220",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Banjul",
        currency: "GMD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇬🇲",
        emojiU: "U+1F1EC U+1F1F2",
        states: [],
    },
    {
        code: "GN",
        name: "Guinea",
        native: "Guinée",
        phone: "224",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Conakry",
        currency: "GNF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "ff",
                name: "Peul",
                native: "Fulfulde",
                rtl: false,
            },
        ],
        emoji: "🇬🇳",
        emojiU: "U+1F1EC U+1F1F3",
        states: [],
    },
    {
        code: "GP",
        name: "Guadeloupe",
        native: "Guadeloupe",
        phone: "590",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Basse-Terre",
        currency: "EUR",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇬🇵",
        emojiU: "U+1F1EC U+1F1F5",
        states: [],
    },
    {
        code: "GQ",
        name: "Equatorial Guinea",
        native: "Guinea Ecuatorial",
        phone: "240",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Malabo",
        currency: "XAF",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇬🇶",
        emojiU: "U+1F1EC U+1F1F6",
        states: [],
    },
    {
        code: "GR",
        name: "Greece",
        native: "Ελλάδα",
        phone: "30",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Athens",
        currency: "EUR",
        languages: [
            {
                code: "el",
                name: "Greek",
                native: "Ελληνικά",
                rtl: false,
            },
        ],
        emoji: "🇬🇷",
        emojiU: "U+1F1EC U+1F1F7",
        states: [],
    },
    {
        code: "GS",
        name: "South Georgia and the South Sandwich Islands",
        native: "South Georgia",
        phone: "500",
        continent: {
            code: "AN",
            name: "Antarctica",
        },
        capital: "King Edward Point",
        currency: "GBP",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇬🇸",
        emojiU: "U+1F1EC U+1F1F8",
        states: [],
    },
    {
        code: "GT",
        name: "Guatemala",
        native: "Guatemala",
        phone: "502",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Guatemala City",
        currency: "GTQ",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇬🇹",
        emojiU: "U+1F1EC U+1F1F9",
        states: [],
    },
    {
        code: "GU",
        name: "Guam",
        native: "Guam",
        phone: "1671",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Hagåtña",
        currency: "USD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "ch",
                name: "Chamorro",
                native: "Chamoru",
                rtl: false,
            },
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇬🇺",
        emojiU: "U+1F1EC U+1F1FA",
        states: [],
    },
    {
        code: "GW",
        name: "Guinea-Bissau",
        native: "Guiné-Bissau",
        phone: "245",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Bissau",
        currency: "XOF",
        languages: [
            {
                code: "pt",
                name: "Portuguese",
                native: "Português",
                rtl: false,
            },
        ],
        emoji: "🇬🇼",
        emojiU: "U+1F1EC U+1F1FC",
        states: [],
    },
    {
        code: "GY",
        name: "Guyana",
        native: "Guyana",
        phone: "592",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Georgetown",
        currency: "GYD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇬🇾",
        emojiU: "U+1F1EC U+1F1FE",
        states: [],
    },
    {
        code: "HK",
        name: "Hong Kong",
        native: "香港",
        phone: "852",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "City of Victoria",
        currency: "HKD",
        languages: [
            {
                code: "zh",
                name: "Chinese",
                native: "中文",
                rtl: false,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇭🇰",
        emojiU: "U+1F1ED U+1F1F0",
        states: [],
    },
    {
        code: "HM",
        name: "Heard Island and McDonald Islands",
        native: "Heard Island and McDonald Islands",
        phone: "61",
        continent: {
            code: "AN",
            name: "Antarctica",
        },
        capital: null,
        currency: "AUD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇭🇲",
        emojiU: "U+1F1ED U+1F1F2",
        states: [],
    },
    {
        code: "HN",
        name: "Honduras",
        native: "Honduras",
        phone: "504",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Tegucigalpa",
        currency: "HNL",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇭🇳",
        emojiU: "U+1F1ED U+1F1F3",
        states: [],
    },
    {
        code: "HR",
        name: "Croatia",
        native: "Hrvatska",
        phone: "385",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Zagreb",
        currency: "HRK",
        languages: [
            {
                code: "hr",
                name: "Croatian",
                native: "Hrvatski",
                rtl: false,
            },
        ],
        emoji: "🇭🇷",
        emojiU: "U+1F1ED U+1F1F7",
        states: [],
    },
    {
        code: "HT",
        name: "Haiti",
        native: "Haïti",
        phone: "509",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Port-au-Prince",
        currency: "HTG,USD",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "ht",
                name: "Haitian",
                native: "Krèyol ayisyen",
                rtl: false,
            },
        ],
        emoji: "🇭🇹",
        emojiU: "U+1F1ED U+1F1F9",
        states: [],
    },
    {
        code: "HU",
        name: "Hungary",
        native: "Magyarország",
        phone: "36",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Budapest",
        currency: "HUF",
        languages: [
            {
                code: "hu",
                name: "Hungarian",
                native: "Magyar",
                rtl: false,
            },
        ],
        emoji: "🇭🇺",
        emojiU: "U+1F1ED U+1F1FA",
        states: [],
    },
    {
        code: "ID",
        name: "Indonesia",
        native: "Indonesia",
        phone: "62",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Jakarta",
        currency: "IDR",
        languages: [
            {
                code: "id",
                name: "Indonesian",
                native: "Bahasa Indonesia",
                rtl: false,
            },
        ],
        emoji: "🇮🇩",
        emojiU: "U+1F1EE U+1F1E9",
        states: [
            {
                code: "ID-AC",
                name: "Special Region of Aceh",
            },
            {
                code: "ID-BA",
                name: "Bali",
            },
            {
                code: "ID-BB",
                name: "Bangka–Belitung Islands",
            },
            {
                code: "ID-BT",
                name: "Banten",
            },
            {
                code: "ID-BE",
                name: "Bengkulu",
            },
            {
                code: "ID-JT",
                name: "Central Java",
            },
            {
                code: "ID-KT",
                name: "Central Kalimantan",
            },
            {
                code: "ID-ST",
                name: "Central Sulawesi",
            },
            {
                code: "ID-JI",
                name: "East Java",
            },
            {
                code: "ID-KI",
                name: "East Kalimantan",
            },
            {
                code: "ID-NT",
                name: "East Nusa Tenggara",
            },
            {
                code: "ID-GO",
                name: "Gorontalo",
            },
            {
                code: "ID-JK",
                name: "Jakarta Special Capital Region",
            },
            {
                code: "ID-JA",
                name: "Jambi",
            },
            {
                code: "ID-LA",
                name: "Lampung",
            },
            {
                code: "ID-MA",
                name: "Maluku",
            },
            {
                code: "ID-KU",
                name: "North Kalimantan",
            },
            {
                code: "ID-MU",
                name: "North Maluku",
            },
            {
                code: "ID-SA",
                name: "North Sulawesi",
            },
            {
                code: "ID-SU",
                name: "North Sumatra",
            },
            {
                code: "ID-PA",
                name: "Special Region of Papua",
            },
            {
                code: "ID-RI",
                name: "Riau",
            },
            {
                code: "ID-KR",
                name: "Riau Islands",
            },
            {
                code: "ID-SG",
                name: "Southeast Sulawesi",
            },
            {
                code: "ID-KS",
                name: "South Kalimantan",
            },
            {
                code: "ID-SN",
                name: "South Sulawesi",
            },
            {
                code: "ID-SS",
                name: "South Sumatra",
            },
            {
                code: "ID-JB",
                name: "West Java",
            },
            {
                code: "ID-KB",
                name: "West Kalimantan",
            },
            {
                code: "ID-NB",
                name: "West Nusa Tenggara",
            },
            {
                code: "ID-PB",
                name: "Special Region of West Papua",
            },
            {
                code: "ID-SR",
                name: "West Sulawesi",
            },
            {
                code: "ID-SB",
                name: "West Sumatra",
            },
            {
                code: "ID-YO",
                name: "Special Region of Yogyakarta",
            },
        ],
    },
    {
        code: "IE",
        name: "Ireland",
        native: "Éire",
        phone: "353",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Dublin",
        currency: "EUR",
        languages: [
            {
                code: "ga",
                name: "Irish",
                native: "Gaeilge",
                rtl: false,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇮🇪",
        emojiU: "U+1F1EE U+1F1EA",
        states: [],
    },
    {
        code: "IL",
        name: "Israel",
        native: "יִשְׂרָאֵל",
        phone: "972",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Jerusalem",
        currency: "ILS",
        languages: [
            {
                code: "he",
                name: "Hebrew",
                native: "עברית",
                rtl: true,
            },
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇮🇱",
        emojiU: "U+1F1EE U+1F1F1",
        states: [],
    },
    {
        code: "IM",
        name: "Isle of Man",
        native: "Isle of Man",
        phone: "44",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Douglas",
        currency: "GBP",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "gv",
                name: "Manx",
                native: "Gaelg",
                rtl: false,
            },
        ],
        emoji: "🇮🇲",
        emojiU: "U+1F1EE U+1F1F2",
        states: [],
    },
    {
        code: "IN",
        name: "India",
        native: "भारत",
        phone: "91",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "New Delhi",
        currency: "INR",
        languages: [
            {
                code: "hi",
                name: "Hindi",
                native: "हिन्दी",
                rtl: false,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇮🇳",
        emojiU: "U+1F1EE U+1F1F3",
        states: [
            {
                code: "AP",
                name: "Andhra Pradesh",
            },
            {
                code: "AR",
                name: "Arunachal Pradesh",
            },
            {
                code: "AS",
                name: "Assam",
            },
            {
                code: "BR",
                name: "Bihar",
            },
            {
                code: "CT",
                name: "Chhattisgarh",
            },
            {
                code: "GA",
                name: "Goa",
            },
            {
                code: "GJ",
                name: "Gujarat",
            },
            {
                code: "HR",
                name: "Haryana",
            },
            {
                code: "HP",
                name: "Himachal Pradesh",
            },
            {
                code: "JK",
                name: "Jammu and Kashmir",
            },
            {
                code: "JH",
                name: "Jharkhand",
            },
            {
                code: "KA",
                name: "Karnataka",
            },
            {
                code: "KL",
                name: "Kerala",
            },
            {
                code: "MP",
                name: "Madhya Pradesh",
            },
            {
                code: "MH",
                name: "Maharashtra",
            },
            {
                code: "MN",
                name: "Manipur",
            },
            {
                code: "ML",
                name: "Meghalaya",
            },
            {
                code: "MZ",
                name: "Mizoram",
            },
            {
                code: "NL",
                name: "Nagaland",
            },
            {
                code: "OR",
                name: "Odisha",
            },
            {
                code: "PB",
                name: "Punjab",
            },
            {
                code: "RJ",
                name: "Rajasthan",
            },
            {
                code: "SK",
                name: "Sikkim",
            },
            {
                code: "TN",
                name: "Tamil Nadu",
            },
            {
                code: "TG",
                name: "Telangana",
            },
            {
                code: "TR",
                name: "Tripura",
            },
            {
                code: "UP",
                name: "Uttar Pradesh",
            },
            {
                code: "UT",
                name: "Uttarakhand",
            },
            {
                code: "WB",
                name: "West Bengal",
            },
            {
                code: "AN",
                name: "Andaman and Nicobar Islands",
            },
            {
                code: "CH",
                name: "Chandigarh",
            },
            {
                code: "DN",
                name: "Dadra and Nagar Haveli",
            },
            {
                code: "DD",
                name: "Daman and Diu",
            },
            {
                code: "LD",
                name: "Lakshadweep",
            },
            {
                code: "DL",
                name: "National Capital Territory of Delhi",
            },
            {
                code: "PY",
                name: "Puducherry",
            },
        ],
    },
    {
        code: "IO",
        name: "British Indian Ocean Territory",
        native: "British Indian Ocean Territory",
        phone: "246",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Diego Garcia",
        currency: "USD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇮🇴",
        emojiU: "U+1F1EE U+1F1F4",
        states: [],
    },
    {
        code: "IQ",
        name: "Iraq",
        native: "العراق",
        phone: "964",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Baghdad",
        currency: "IQD",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
            {
                code: "ku",
                name: "Kurdish",
                native: "Kurdî / كوردی",
                rtl: true,
            },
        ],
        emoji: "🇮🇶",
        emojiU: "U+1F1EE U+1F1F6",
        states: [],
    },
    {
        code: "IR",
        name: "Iran",
        native: "ایران",
        phone: "98",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Tehran",
        currency: "IRR",
        languages: [
            {
                code: "fa",
                name: "Persian",
                native: "فارسی",
                rtl: true,
            },
        ],
        emoji: "🇮🇷",
        emojiU: "U+1F1EE U+1F1F7",
        states: [],
    },
    {
        code: "IS",
        name: "Iceland",
        native: "Ísland",
        phone: "354",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Reykjavik",
        currency: "ISK",
        languages: [
            {
                code: "is",
                name: "Icelandic",
                native: "Íslenska",
                rtl: false,
            },
        ],
        emoji: "🇮🇸",
        emojiU: "U+1F1EE U+1F1F8",
        states: [],
    },
    {
        code: "IT",
        name: "Italy",
        native: "Italia",
        phone: "39",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Rome",
        currency: "EUR",
        languages: [
            {
                code: "it",
                name: "Italian",
                native: "Italiano",
                rtl: false,
            },
        ],
        emoji: "🇮🇹",
        emojiU: "U+1F1EE U+1F1F9",
        states: [],
    },
    {
        code: "JE",
        name: "Jersey",
        native: "Jersey",
        phone: "44",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Saint Helier",
        currency: "GBP",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇯🇪",
        emojiU: "U+1F1EF U+1F1EA",
        states: [],
    },
    {
        code: "JM",
        name: "Jamaica",
        native: "Jamaica",
        phone: "1876",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Kingston",
        currency: "JMD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇯🇲",
        emojiU: "U+1F1EF U+1F1F2",
        states: [],
    },
    {
        code: "JO",
        name: "Jordan",
        native: "الأردن",
        phone: "962",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Amman",
        currency: "JOD",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇯🇴",
        emojiU: "U+1F1EF U+1F1F4",
        states: [
            {
                code: null,
                name: "Irbid",
            },
            {
                code: null,
                name: "Ajloun",
            },
            {
                code: null,
                name: "Jerash",
            },
            {
                code: null,
                name: "Mafraq",
            },
            {
                code: null,
                name: "Balqa",
            },
            {
                code: null,
                name: "Amman",
            },
            {
                code: null,
                name: "Zarqa",
            },
            {
                code: null,
                name: "Madaba",
            },
            {
                code: null,
                name: "Karak",
            },
            {
                code: null,
                name: "Tafilah",
            },
            {
                code: null,
                name: "Ma'an",
            },
            {
                code: null,
                name: "Aqaba",
            },
        ],
    },
    {
        code: "JP",
        name: "Japan",
        native: "日本",
        phone: "81",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Tokyo",
        currency: "JPY",
        languages: [
            {
                code: "ja",
                name: "Japanese",
                native: "日本語",
                rtl: false,
            },
        ],
        emoji: "🇯🇵",
        emojiU: "U+1F1EF U+1F1F5",
        states: [
            {
                code: null,
                name: "愛知県",
            },
            {
                code: null,
                name: "秋田県",
            },
            {
                code: null,
                name: "青森県",
            },
            {
                code: null,
                name: "千葉県",
            },
            {
                code: null,
                name: "愛媛県",
            },
            {
                code: null,
                name: "福井県",
            },
            {
                code: null,
                name: "福岡県",
            },
            {
                code: null,
                name: "福島県",
            },
            {
                code: null,
                name: "岐阜県",
            },
            {
                code: null,
                name: "群馬県",
            },
            {
                code: null,
                name: "広島県",
            },
            {
                code: null,
                name: "北海道",
            },
            {
                code: null,
                name: "兵庫県",
            },
            {
                code: null,
                name: "茨城県",
            },
            {
                code: null,
                name: "石川県",
            },
            {
                code: null,
                name: "岩手県",
            },
            {
                code: null,
                name: "香川県",
            },
            {
                code: null,
                name: "鹿児島県",
            },
            {
                code: null,
                name: "神奈川県",
            },
            {
                code: null,
                name: "高知県",
            },
            {
                code: null,
                name: "熊本県",
            },
            {
                code: null,
                name: "京都府",
            },
            {
                code: null,
                name: "三重県",
            },
            {
                code: null,
                name: "宮城県",
            },
            {
                code: null,
                name: "宮崎県",
            },
            {
                code: null,
                name: "長野県",
            },
            {
                code: null,
                name: "長崎県",
            },
            {
                code: null,
                name: "奈良県",
            },
            {
                code: null,
                name: "新潟県",
            },
            {
                code: null,
                name: "大分県",
            },
            {
                code: null,
                name: "岡山県",
            },
            {
                code: null,
                name: "沖縄県",
            },
            {
                code: null,
                name: "大阪府",
            },
            {
                code: null,
                name: "佐賀県",
            },
            {
                code: null,
                name: "埼玉県",
            },
            {
                code: null,
                name: "滋賀県",
            },
            {
                code: null,
                name: "島根県",
            },
            {
                code: null,
                name: "静岡県",
            },
            {
                code: null,
                name: "栃木県",
            },
            {
                code: null,
                name: "徳島県",
            },
            {
                code: null,
                name: "東京都",
            },
            {
                code: null,
                name: "鳥取県",
            },
            {
                code: null,
                name: "富山県",
            },
            {
                code: null,
                name: "和歌山県",
            },
            {
                code: null,
                name: "山形県",
            },
            {
                code: null,
                name: "山口県",
            },
            {
                code: null,
                name: "山梨県",
            },
        ],
    },
    {
        code: "KE",
        name: "Kenya",
        native: "Kenya",
        phone: "254",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Nairobi",
        currency: "KES",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "sw",
                name: "Swahili",
                native: "Kiswahili",
                rtl: false,
            },
        ],
        emoji: "🇰🇪",
        emojiU: "U+1F1F0 U+1F1EA",
        states: [],
    },
    {
        code: "KG",
        name: "Kyrgyzstan",
        native: "Кыргызстан",
        phone: "996",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Bishkek",
        currency: "KGS",
        languages: [
            {
                code: "ky",
                name: "Kirghiz",
                native: "Kırgızca / Кыргызча",
                rtl: false,
            },
            {
                code: "ru",
                name: "Russian",
                native: "Русский",
                rtl: false,
            },
        ],
        emoji: "🇰🇬",
        emojiU: "U+1F1F0 U+1F1EC",
        states: [],
    },
    {
        code: "KH",
        name: "Cambodia",
        native: "Kâmpŭchéa",
        phone: "855",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Phnom Penh",
        currency: "KHR",
        languages: [
            {
                code: "km",
                name: "Cambodian",
                native: "ភាសាខ្មែរ",
                rtl: false,
            },
        ],
        emoji: "🇰🇭",
        emojiU: "U+1F1F0 U+1F1ED",
        states: [
            {
                code: null,
                name: "ភ្នំពេញ",
            },
            {
                code: null,
                name: "បន្ទាយមានជ័យ",
            },
            {
                code: null,
                name: "បាត់ដំបង",
            },
            {
                code: null,
                name: "កំពង់ចាម",
            },
            {
                code: null,
                name: "កំពង់ឆ្នាំង",
            },
            {
                code: null,
                name: "កំពង់ស្ពឺ",
            },
            {
                code: null,
                name: "កំពង់ធំ",
            },
            {
                code: null,
                name: "កំពត",
            },
            {
                code: null,
                name: "កណ្តាល",
            },
            {
                code: null,
                name: "កោះកុង",
            },
            {
                code: null,
                name: "កែប",
            },
            {
                code: null,
                name: "ក្រចេះ",
            },
            {
                code: null,
                name: "មណ្ឌលគីរី",
            },
            {
                code: null,
                name: "ឧត្តរមានជ័យ",
            },
            {
                code: null,
                name: "បៃលិន",
            },
            {
                code: null,
                name: "ព្រះសីហនុ",
            },
            {
                code: null,
                name: "ព្រះវិហារ",
            },
            {
                code: null,
                name: "ពោធិ៍សាត់",
            },
            {
                code: null,
                name: "ព្រៃវែង",
            },
            {
                code: null,
                name: "រតនគីរី",
            },
            {
                code: null,
                name: "សៀមរាប",
            },
            {
                code: null,
                name: "ស្ទឹងត្រែង",
            },
            {
                code: null,
                name: "ស្វាយរៀង",
            },
            {
                code: null,
                name: "តាកែវ",
            },
            {
                code: null,
                name: "ត្បូងឃ្មុំ",
            },
        ],
    },
    {
        code: "KI",
        name: "Kiribati",
        native: "Kiribati",
        phone: "686",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "South Tarawa",
        currency: "AUD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇰🇮",
        emojiU: "U+1F1F0 U+1F1EE",
        states: [],
    },
    {
        code: "KM",
        name: "Comoros",
        native: "Komori",
        phone: "269",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Moroni",
        currency: "KMF",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇰🇲",
        emojiU: "U+1F1F0 U+1F1F2",
        states: [],
    },
    {
        code: "KN",
        name: "Saint Kitts and Nevis",
        native: "Saint Kitts and Nevis",
        phone: "1869",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Basseterre",
        currency: "XCD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇰🇳",
        emojiU: "U+1F1F0 U+1F1F3",
        states: [],
    },
    {
        code: "KP",
        name: "North Korea",
        native: "북한",
        phone: "850",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Pyongyang",
        currency: "KPW",
        languages: [
            {
                code: "ko",
                name: "Korean",
                native: "한국어",
                rtl: false,
            },
        ],
        emoji: "🇰🇵",
        emojiU: "U+1F1F0 U+1F1F5",
        states: [],
    },
    {
        code: "KR",
        name: "South Korea",
        native: "대한민국",
        phone: "82",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Seoul",
        currency: "KRW",
        languages: [
            {
                code: "ko",
                name: "Korean",
                native: "한국어",
                rtl: false,
            },
        ],
        emoji: "🇰🇷",
        emojiU: "U+1F1F0 U+1F1F7",
        states: [],
    },
    {
        code: "KW",
        name: "Kuwait",
        native: "الكويت",
        phone: "965",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Kuwait City",
        currency: "KWD",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇰🇼",
        emojiU: "U+1F1F0 U+1F1FC",
        states: [],
    },
    {
        code: "KY",
        name: "Cayman Islands",
        native: "Cayman Islands",
        phone: "1345",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "George Town",
        currency: "KYD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇰🇾",
        emojiU: "U+1F1F0 U+1F1FE",
        states: [],
    },
    {
        code: "KZ",
        name: "Kazakhstan",
        native: "Қазақстан",
        phone: "76,77",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Astana",
        currency: "KZT",
        languages: [
            {
                code: "kk",
                name: "Kazakh",
                native: "Қазақша",
                rtl: false,
            },
            {
                code: "ru",
                name: "Russian",
                native: "Русский",
                rtl: false,
            },
        ],
        emoji: "🇰🇿",
        emojiU: "U+1F1F0 U+1F1FF",
        states: [],
    },
    {
        code: "LA",
        name: "Laos",
        native: "ສປປລາວ",
        phone: "856",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Vientiane",
        currency: "LAK",
        languages: [
            {
                code: "lo",
                name: "Laotian",
                native: "ລາວ / Pha xa lao",
                rtl: false,
            },
        ],
        emoji: "🇱🇦",
        emojiU: "U+1F1F1 U+1F1E6",
        states: [],
    },
    {
        code: "LB",
        name: "Lebanon",
        native: "لبنان",
        phone: "961",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Beirut",
        currency: "LBP",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇱🇧",
        emojiU: "U+1F1F1 U+1F1E7",
        states: [],
    },
    {
        code: "LC",
        name: "Saint Lucia",
        native: "Saint Lucia",
        phone: "1758",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Castries",
        currency: "XCD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇱🇨",
        emojiU: "U+1F1F1 U+1F1E8",
        states: [],
    },
    {
        code: "LI",
        name: "Liechtenstein",
        native: "Liechtenstein",
        phone: "423",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Vaduz",
        currency: "CHF",
        languages: [
            {
                code: "de",
                name: "German",
                native: "Deutsch",
                rtl: false,
            },
        ],
        emoji: "🇱🇮",
        emojiU: "U+1F1F1 U+1F1EE",
        states: [],
    },
    {
        code: "LK",
        name: "Sri Lanka",
        native: "śrī laṃkāva",
        phone: "94",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Colombo",
        currency: "LKR",
        languages: [
            {
                code: "si",
                name: "Sinhalese",
                native: "සිංහල",
                rtl: false,
            },
            {
                code: "ta",
                name: "Tamil",
                native: "தமிழ்",
                rtl: false,
            },
        ],
        emoji: "🇱🇰",
        emojiU: "U+1F1F1 U+1F1F0",
        states: [],
    },
    {
        code: "LR",
        name: "Liberia",
        native: "Liberia",
        phone: "231",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Monrovia",
        currency: "LRD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇱🇷",
        emojiU: "U+1F1F1 U+1F1F7",
        states: [],
    },
    {
        code: "LS",
        name: "Lesotho",
        native: "Lesotho",
        phone: "266",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Maseru",
        currency: "LSL,ZAR",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "st",
                name: "Southern Sotho",
                native: "Sesotho",
                rtl: false,
            },
        ],
        emoji: "🇱🇸",
        emojiU: "U+1F1F1 U+1F1F8",
        states: [],
    },
    {
        code: "LT",
        name: "Lithuania",
        native: "Lietuva",
        phone: "370",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Vilnius",
        currency: "EUR",
        languages: [
            {
                code: "lt",
                name: "Lithuanian",
                native: "Lietuvių",
                rtl: false,
            },
        ],
        emoji: "🇱🇹",
        emojiU: "U+1F1F1 U+1F1F9",
        states: [],
    },
    {
        code: "LU",
        name: "Luxembourg",
        native: "Luxembourg",
        phone: "352",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Luxembourg",
        currency: "EUR",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "de",
                name: "German",
                native: "Deutsch",
                rtl: false,
            },
            {
                code: "lb",
                name: "Luxembourgish",
                native: "Lëtzebuergesch",
                rtl: false,
            },
        ],
        emoji: "🇱🇺",
        emojiU: "U+1F1F1 U+1F1FA",
        states: [],
    },
    {
        code: "LV",
        name: "Latvia",
        native: "Latvija",
        phone: "371",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Riga",
        currency: "EUR",
        languages: [
            {
                code: "lv",
                name: "Latvian",
                native: "Latviešu",
                rtl: false,
            },
        ],
        emoji: "🇱🇻",
        emojiU: "U+1F1F1 U+1F1FB",
        states: [],
    },
    {
        code: "LY",
        name: "Libya",
        native: "‏ليبيا",
        phone: "218",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Tripoli",
        currency: "LYD",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇱🇾",
        emojiU: "U+1F1F1 U+1F1FE",
        states: [],
    },
    {
        code: "MA",
        name: "Morocco",
        native: "المغرب",
        phone: "212",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Rabat",
        currency: "MAD",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇲🇦",
        emojiU: "U+1F1F2 U+1F1E6",
        states: [],
    },
    {
        code: "MC",
        name: "Monaco",
        native: "Monaco",
        phone: "377",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Monaco",
        currency: "EUR",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇲🇨",
        emojiU: "U+1F1F2 U+1F1E8",
        states: [],
    },
    {
        code: "MD",
        name: "Moldova",
        native: "Moldova",
        phone: "373",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Chișinău",
        currency: "MDL",
        languages: [
            {
                code: "ro",
                name: "Romanian",
                native: "Română",
                rtl: false,
            },
        ],
        emoji: "🇲🇩",
        emojiU: "U+1F1F2 U+1F1E9",
        states: [],
    },
    {
        code: "ME",
        name: "Montenegro",
        native: "Црна Гора",
        phone: "382",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Podgorica",
        currency: "EUR",
        languages: [
            {
                code: "sr",
                name: "Serbian",
                native: "Српски",
                rtl: false,
            },
            {
                code: "bs",
                name: "Bosnian",
                native: "Bosanski",
                rtl: false,
            },
            {
                code: "sq",
                name: "Albanian",
                native: "Shqip",
                rtl: false,
            },
            {
                code: "hr",
                name: "Croatian",
                native: "Hrvatski",
                rtl: false,
            },
        ],
        emoji: "🇲🇪",
        emojiU: "U+1F1F2 U+1F1EA",
        states: [],
    },
    {
        code: "MF",
        name: "Saint Martin",
        native: "Saint-Martin",
        phone: "590",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Marigot",
        currency: "EUR",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "nl",
                name: "Dutch",
                native: "Nederlands",
                rtl: false,
            },
        ],
        emoji: "🇲🇫",
        emojiU: "U+1F1F2 U+1F1EB",
        states: [],
    },
    {
        code: "MG",
        name: "Madagascar",
        native: "Madagasikara",
        phone: "261",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Antananarivo",
        currency: "MGA",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "mg",
                name: "Malagasy",
                native: "Malagasy",
                rtl: false,
            },
        ],
        emoji: "🇲🇬",
        emojiU: "U+1F1F2 U+1F1EC",
        states: [],
    },
    {
        code: "MH",
        name: "Marshall Islands",
        native: "M̧ajeļ",
        phone: "692",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Majuro",
        currency: "USD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "mh",
                name: "Marshallese",
                native: "Kajin Majel / Ebon",
                rtl: false,
            },
        ],
        emoji: "🇲🇭",
        emojiU: "U+1F1F2 U+1F1ED",
        states: [],
    },
    {
        code: "MK",
        name: "North Macedonia",
        native: "Северна Македонија",
        phone: "389",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Skopje",
        currency: "MKD",
        languages: [
            {
                code: "mk",
                name: "Macedonian",
                native: "Македонски",
                rtl: false,
            },
        ],
        emoji: "🇲🇰",
        emojiU: "U+1F1F2 U+1F1F0",
        states: [],
    },
    {
        code: "ML",
        name: "Mali",
        native: "Mali",
        phone: "223",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Bamako",
        currency: "XOF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇲🇱",
        emojiU: "U+1F1F2 U+1F1F1",
        states: [],
    },
    {
        code: "MM",
        name: "Myanmar [Burma]",
        native: "မြန်မာ",
        phone: "95",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Naypyidaw",
        currency: "MMK",
        languages: [
            {
                code: "my",
                name: "Burmese",
                native: "မြန်မာစာ",
                rtl: false,
            },
        ],
        emoji: "🇲🇲",
        emojiU: "U+1F1F2 U+1F1F2",
        states: [],
    },
    {
        code: "MN",
        name: "Mongolia",
        native: "Монгол улс",
        phone: "976",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Ulan Bator",
        currency: "MNT",
        languages: [
            {
                code: "mn",
                name: "Mongolian",
                native: "Монгол",
                rtl: false,
            },
        ],
        emoji: "🇲🇳",
        emojiU: "U+1F1F2 U+1F1F3",
        states: [],
    },
    {
        code: "MO",
        name: "Macao",
        native: "澳門",
        phone: "853",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: null,
        currency: "MOP",
        languages: [
            {
                code: "zh",
                name: "Chinese",
                native: "中文",
                rtl: false,
            },
            {
                code: "pt",
                name: "Portuguese",
                native: "Português",
                rtl: false,
            },
        ],
        emoji: "🇲🇴",
        emojiU: "U+1F1F2 U+1F1F4",
        states: [],
    },
    {
        code: "MP",
        name: "Northern Mariana Islands",
        native: "Northern Mariana Islands",
        phone: "1670",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Saipan",
        currency: "USD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "ch",
                name: "Chamorro",
                native: "Chamoru",
                rtl: false,
            },
        ],
        emoji: "🇲🇵",
        emojiU: "U+1F1F2 U+1F1F5",
        states: [],
    },
    {
        code: "MQ",
        name: "Martinique",
        native: "Martinique",
        phone: "596",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Fort-de-France",
        currency: "EUR",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇲🇶",
        emojiU: "U+1F1F2 U+1F1F6",
        states: [],
    },
    {
        code: "MR",
        name: "Mauritania",
        native: "موريتانيا",
        phone: "222",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Nouakchott",
        currency: "MRU",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇲🇷",
        emojiU: "U+1F1F2 U+1F1F7",
        states: [],
    },
    {
        code: "MS",
        name: "Montserrat",
        native: "Montserrat",
        phone: "1664",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Plymouth",
        currency: "XCD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇲🇸",
        emojiU: "U+1F1F2 U+1F1F8",
        states: [],
    },
    {
        code: "MT",
        name: "Malta",
        native: "Malta",
        phone: "356",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Valletta",
        currency: "EUR",
        languages: [
            {
                code: "mt",
                name: "Maltese",
                native: "bil-Malti",
                rtl: false,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇲🇹",
        emojiU: "U+1F1F2 U+1F1F9",
        states: [],
    },
    {
        code: "MU",
        name: "Mauritius",
        native: "Maurice",
        phone: "230",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Port Louis",
        currency: "MUR",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇲🇺",
        emojiU: "U+1F1F2 U+1F1FA",
        states: [],
    },
    {
        code: "MV",
        name: "Maldives",
        native: "Maldives",
        phone: "960",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Malé",
        currency: "MVR",
        languages: [
            {
                code: "dv",
                name: "Divehi",
                native: "ދިވެހިބަސް",
                rtl: true,
            },
        ],
        emoji: "🇲🇻",
        emojiU: "U+1F1F2 U+1F1FB",
        states: [],
    },
    {
        code: "MW",
        name: "Malawi",
        native: "Malawi",
        phone: "265",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Lilongwe",
        currency: "MWK",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "ny",
                name: "Chichewa",
                native: "Chi-Chewa",
                rtl: false,
            },
        ],
        emoji: "🇲🇼",
        emojiU: "U+1F1F2 U+1F1FC",
        states: [],
    },
    {
        code: "MX",
        name: "Mexico",
        native: "México",
        phone: "52",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Mexico City",
        currency: "MXN",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇲🇽",
        emojiU: "U+1F1F2 U+1F1FD",
        states: [
            {
                code: "AG",
                name: "Aguascalientes",
            },
            {
                code: "BC",
                name: "Baja California",
            },
            {
                code: "BS",
                name: "Baja California Sur",
            },
            {
                code: "CM",
                name: "Campeche",
            },
            {
                code: "CS",
                name: "Chiapas",
            },
            {
                code: "CH",
                name: "Chihuahua",
            },
            {
                code: "MX",
                name: "Coahuila",
            },
            {
                code: "CL",
                name: "Colima",
            },
            {
                code: "DF",
                name: "Federal District",
            },
            {
                code: "DG",
                name: "Durango",
            },
            {
                code: "GT",
                name: "Guanajuato",
            },
            {
                code: "GR",
                name: "Guerrero",
            },
            {
                code: "HG",
                name: "Hidalgo",
            },
            {
                code: "JA",
                name: "Jalisco",
            },
            {
                code: "ME",
                name: "Mexico",
            },
            {
                code: "MI",
                name: "Michoacán",
            },
            {
                code: "MO",
                name: "Morelos",
            },
            {
                code: "NA",
                name: "Nayarit",
            },
            {
                code: "NL",
                name: "Nuevo León",
            },
            {
                code: "OA",
                name: "Oaxaca",
            },
            {
                code: "PU",
                name: "Puebla",
            },
            {
                code: "QE",
                name: "Querétaro",
            },
            {
                code: "QR",
                name: "Quintana Roo",
            },
            {
                code: "SL",
                name: "San Luis Potosí",
            },
            {
                code: "SI",
                name: "Sinaloa",
            },
            {
                code: "SO",
                name: "Sonora",
            },
            {
                code: "TB",
                name: "Tabasco",
            },
            {
                code: "TM",
                name: "Tamaulipas",
            },
            {
                code: "TL",
                name: "Tlaxcala",
            },
            {
                code: "VE",
                name: "Veracruz",
            },
            {
                code: "YU",
                name: "Yucatán",
            },
            {
                code: "ZA",
                name: "Zacatecas",
            },
        ],
    },
    {
        code: "MY",
        name: "Malaysia",
        native: "Malaysia",
        phone: "60",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Kuala Lumpur",
        currency: "MYR",
        languages: [
            {
                code: "ms",
                name: "Malay",
                native: "Bahasa Melayu",
                rtl: false,
            },
        ],
        emoji: "🇲🇾",
        emojiU: "U+1F1F2 U+1F1FE",
        states: [],
    },
    {
        code: "MZ",
        name: "Mozambique",
        native: "Moçambique",
        phone: "258",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Maputo",
        currency: "MZN",
        languages: [
            {
                code: "pt",
                name: "Portuguese",
                native: "Português",
                rtl: false,
            },
        ],
        emoji: "🇲🇿",
        emojiU: "U+1F1F2 U+1F1FF",
        states: [],
    },
    {
        code: "NA",
        name: "Namibia",
        native: "Namibia",
        phone: "264",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Windhoek",
        currency: "NAD,ZAR",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "af",
                name: "Afrikaans",
                native: "Afrikaans",
                rtl: false,
            },
        ],
        emoji: "🇳🇦",
        emojiU: "U+1F1F3 U+1F1E6",
        states: [],
    },
    {
        code: "NC",
        name: "New Caledonia",
        native: "Nouvelle-Calédonie",
        phone: "687",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Nouméa",
        currency: "XPF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇳🇨",
        emojiU: "U+1F1F3 U+1F1E8",
        states: [],
    },
    {
        code: "NE",
        name: "Niger",
        native: "Niger",
        phone: "227",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Niamey",
        currency: "XOF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇳🇪",
        emojiU: "U+1F1F3 U+1F1EA",
        states: [],
    },
    {
        code: "NF",
        name: "Norfolk Island",
        native: "Norfolk Island",
        phone: "672",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Kingston",
        currency: "AUD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇳🇫",
        emojiU: "U+1F1F3 U+1F1EB",
        states: [],
    },
    {
        code: "NG",
        name: "Nigeria",
        native: "Nigeria",
        phone: "234",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Abuja",
        currency: "NGN",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇳🇬",
        emojiU: "U+1F1F3 U+1F1EC",
        states: [
            {
                code: "AB",
                name: "Abia",
            },
            {
                code: "FC",
                name: "Abuja",
            },
            {
                code: "AD",
                name: "Adamawa",
            },
            {
                code: "AK",
                name: "Akwa Ibom",
            },
            {
                code: "AN",
                name: "Anambra",
            },
            {
                code: "BA",
                name: "Bauchi",
            },
            {
                code: "BY",
                name: "Bayelsa",
            },
            {
                code: "BE",
                name: "Benue",
            },
            {
                code: "BO",
                name: "Borno",
            },
            {
                code: "CR",
                name: "Cross River",
            },
            {
                code: "DE",
                name: "Delta",
            },
            {
                code: "EB",
                name: "Ebonyi",
            },
            {
                code: "ED",
                name: "Edo",
            },
            {
                code: "EK",
                name: "Ekiti",
            },
            {
                code: "EN",
                name: "Enugu",
            },
            {
                code: "GO",
                name: "Gombe",
            },
            {
                code: "IM",
                name: "Imo",
            },
            {
                code: "JI",
                name: "Jigawa",
            },
            {
                code: "KD",
                name: "Kaduna",
            },
            {
                code: "KN",
                name: "Kano",
            },
            {
                code: "KT",
                name: "Katsina",
            },
            {
                code: "KE",
                name: "Kebbi",
            },
            {
                code: "KO",
                name: "Kogi",
            },
            {
                code: "KW",
                name: "Kwara",
            },
            {
                code: "LA",
                name: "Lagos",
            },
            {
                code: "NA",
                name: "Nasarawa",
            },
            {
                code: "NI",
                name: "Niger",
            },
            {
                code: "OG",
                name: "Ogun",
            },
            {
                code: "ON",
                name: "Ondo",
            },
            {
                code: "OS",
                name: "Osun",
            },
            {
                code: "OY",
                name: "Oyo",
            },
            {
                code: "PL",
                name: "Plateau",
            },
            {
                code: "RI",
                name: "Rivers",
            },
            {
                code: "SO",
                name: "Sokoto",
            },
            {
                code: "TA",
                name: "Taraba",
            },
            {
                code: "YO",
                name: "Yobe",
            },
            {
                code: "ZA",
                name: "Zamfara",
            },
        ],
    },
    {
        code: "NI",
        name: "Nicaragua",
        native: "Nicaragua",
        phone: "505",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Managua",
        currency: "NIO",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇳🇮",
        emojiU: "U+1F1F3 U+1F1EE",
        states: [],
    },
    {
        code: "NL",
        name: "Netherlands",
        native: "Nederland",
        phone: "31",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Amsterdam",
        currency: "EUR",
        languages: [
            {
                code: "nl",
                name: "Dutch",
                native: "Nederlands",
                rtl: false,
            },
        ],
        emoji: "🇳🇱",
        emojiU: "U+1F1F3 U+1F1F1",
        states: [
            {
                code: "DR",
                name: "Drenthe",
            },
            {
                code: "FL",
                name: "Flevoland",
            },
            {
                code: "FR",
                name: "Friesland",
            },
            {
                code: "GD",
                name: "Gelderland",
            },
            {
                code: "GR",
                name: "Groningen",
            },
            {
                code: "LB",
                name: "Limburg",
            },
            {
                code: "NB",
                name: "Noord-Brabant",
            },
            {
                code: "NH",
                name: "Noord-Holland",
            },
            {
                code: "OV",
                name: "Overijssel",
            },
            {
                code: "UT",
                name: "Utrecht",
            },
            {
                code: "ZH",
                name: "Zuid-Holland",
            },
            {
                code: "ZL",
                name: "Zeeland",
            },
        ],
    },
    {
        code: "NO",
        name: "Norway",
        native: "Norge",
        phone: "47",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Oslo",
        currency: "NOK",
        languages: [
            {
                code: "no",
                name: "Norwegian",
                native: "Norsk",
                rtl: false,
            },
            {
                code: "nb",
                name: "Norwegian Bokmål",
                native: "Norsk bokmål",
                rtl: false,
            },
            {
                code: "nn",
                name: "Norwegian Nynorsk",
                native: "Norsk nynorsk",
                rtl: false,
            },
        ],
        emoji: "🇳🇴",
        emojiU: "U+1F1F3 U+1F1F4",
        states: [],
    },
    {
        code: "NP",
        name: "Nepal",
        native: "नपल",
        phone: "977",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Kathmandu",
        currency: "NPR",
        languages: [
            {
                code: "ne",
                name: "Nepali",
                native: "नेपाली",
                rtl: false,
            },
        ],
        emoji: "🇳🇵",
        emojiU: "U+1F1F3 U+1F1F5",
        states: [],
    },
    {
        code: "NR",
        name: "Nauru",
        native: "Nauru",
        phone: "674",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Yaren",
        currency: "AUD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "na",
                name: "Nauruan",
                native: "Dorerin Naoero",
                rtl: false,
            },
        ],
        emoji: "🇳🇷",
        emojiU: "U+1F1F3 U+1F1F7",
        states: [],
    },
    {
        code: "NU",
        name: "Niue",
        native: "Niuē",
        phone: "683",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Alofi",
        currency: "NZD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇳🇺",
        emojiU: "U+1F1F3 U+1F1FA",
        states: [],
    },
    {
        code: "NZ",
        name: "New Zealand",
        native: "New Zealand",
        phone: "64",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Wellington",
        currency: "NZD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "mi",
                name: "Maori",
                native: "Māori",
                rtl: false,
            },
        ],
        emoji: "🇳🇿",
        emojiU: "U+1F1F3 U+1F1FF",
        states: [
            {
                code: null,
                name: "Auckland",
            },
            {
                code: null,
                name: "New Plymouth",
            },
            {
                code: null,
                name: "Hawke's Bay",
            },
            {
                code: null,
                name: "Wellington",
            },
            {
                code: null,
                name: "Nelson",
            },
            {
                code: null,
                name: "Marlborough",
            },
            {
                code: null,
                name: "Westland",
            },
            {
                code: null,
                name: "Canterbury",
            },
            {
                code: null,
                name: "Otago",
            },
            {
                code: null,
                name: "Southland",
            },
        ],
    },
    {
        code: "OM",
        name: "Oman",
        native: "عمان",
        phone: "968",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Muscat",
        currency: "OMR",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇴🇲",
        emojiU: "U+1F1F4 U+1F1F2",
        states: [],
    },
    {
        code: "PA",
        name: "Panama",
        native: "Panamá",
        phone: "507",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Panama City",
        currency: "PAB,USD",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇵🇦",
        emojiU: "U+1F1F5 U+1F1E6",
        states: [],
    },
    {
        code: "PE",
        name: "Peru",
        native: "Perú",
        phone: "51",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Lima",
        currency: "PEN",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇵🇪",
        emojiU: "U+1F1F5 U+1F1EA",
        states: [
            {
                code: null,
                name: "Chachapoyas",
            },
            {
                code: null,
                name: "Bagua",
            },
            {
                code: null,
                name: "Bongará",
            },
            {
                code: null,
                name: "Condorcanqui",
            },
            {
                code: null,
                name: "Luya",
            },
            {
                code: null,
                name: "Rodríguez de Mendoza",
            },
            {
                code: null,
                name: "Utcubamba",
            },
            {
                code: null,
                name: "Huaraz",
            },
            {
                code: null,
                name: "Aija",
            },
            {
                code: null,
                name: "Antonio Raymondi",
            },
            {
                code: null,
                name: "Asunción",
            },
            {
                code: null,
                name: "Bolognesi",
            },
            {
                code: null,
                name: "Carhuaz",
            },
            {
                code: null,
                name: "Carlos Fermín Fitzcarrald",
            },
            {
                code: null,
                name: "Casma",
            },
            {
                code: null,
                name: "Corongo",
            },
            {
                code: null,
                name: "Huari",
            },
            {
                code: null,
                name: "Huarmey",
            },
            {
                code: null,
                name: "Huaylas",
            },
            {
                code: null,
                name: "Mariscal Luzuriaga",
            },
            {
                code: null,
                name: "Ocros",
            },
            {
                code: null,
                name: "Pallasca",
            },
            {
                code: null,
                name: "Pomabamba",
            },
            {
                code: null,
                name: "Recuay",
            },
            {
                code: null,
                name: "Santa",
            },
            {
                code: null,
                name: "Sihuas",
            },
            {
                code: null,
                name: "Yungay",
            },
            {
                code: null,
                name: "Abancay",
            },
            {
                code: null,
                name: "Andahuaylas",
            },
            {
                code: null,
                name: "Antabamba",
            },
            {
                code: null,
                name: "Aymaraes",
            },
            {
                code: null,
                name: "Cotabambas",
            },
            {
                code: null,
                name: "Chincheros",
            },
            {
                code: null,
                name: "Grau",
            },
            {
                code: null,
                name: "Arequipa",
            },
            {
                code: null,
                name: "Camaná",
            },
            {
                code: null,
                name: "Caravelí",
            },
            {
                code: null,
                name: "Castilla",
            },
            {
                code: null,
                name: "Caylloma",
            },
            {
                code: null,
                name: "Condesuyos",
            },
            {
                code: null,
                name: "Islay",
            },
            {
                code: null,
                name: "La Unión",
            },
            {
                code: null,
                name: "Huamanga",
            },
            {
                code: null,
                name: "Cangallo",
            },
            {
                code: null,
                name: "Huanca Sancos",
            },
            {
                code: null,
                name: "Huanta",
            },
            {
                code: null,
                name: "La Mar",
            },
            {
                code: null,
                name: "Lucanas",
            },
            {
                code: null,
                name: "Parinacochas",
            },
            {
                code: null,
                name: "Páucar del Sara Sara",
            },
            {
                code: null,
                name: "Sucre",
            },
            {
                code: null,
                name: "Víctor Fajardo",
            },
            {
                code: null,
                name: "Vilcas Huamán",
            },
            {
                code: null,
                name: "Cajamarca",
            },
            {
                code: null,
                name: "Cajabamba",
            },
            {
                code: null,
                name: "Celendín",
            },
            {
                code: null,
                name: "Chota",
            },
            {
                code: null,
                name: "Contumazá",
            },
            {
                code: null,
                name: "Cutervo",
            },
            {
                code: null,
                name: "Hualgayoc",
            },
            {
                code: null,
                name: "Jaén",
            },
            {
                code: null,
                name: "San Ignacio",
            },
            {
                code: null,
                name: "San Marcos",
            },
            {
                code: null,
                name: "San Miguel",
            },
            {
                code: null,
                name: "San Pablo",
            },
            {
                code: null,
                name: "Santa Cruz",
            },
            {
                code: null,
                name: "Callao",
            },
            {
                code: null,
                name: "Cusco",
            },
            {
                code: null,
                name: "Acomayo",
            },
            {
                code: null,
                name: "Anta",
            },
            {
                code: null,
                name: "Calca",
            },
            {
                code: null,
                name: "Canas",
            },
            {
                code: null,
                name: "Canchis",
            },
            {
                code: null,
                name: "Chumbivilcas",
            },
            {
                code: null,
                name: "Espinar",
            },
            {
                code: null,
                name: "La Convención",
            },
            {
                code: null,
                name: "Paruro",
            },
            {
                code: null,
                name: "Paucartambo",
            },
            {
                code: null,
                name: "Quispicanchi",
            },
            {
                code: null,
                name: "Urubamba",
            },
            {
                code: null,
                name: "Huancavelica",
            },
            {
                code: null,
                name: "Acobamba",
            },
            {
                code: null,
                name: "Angaraes",
            },
            {
                code: null,
                name: "Castrovirreyna",
            },
            {
                code: null,
                name: "Churcampa",
            },
            {
                code: null,
                name: "Huaytará",
            },
            {
                code: null,
                name: "Tayacaja",
            },
            {
                code: null,
                name: "Huánuco",
            },
            {
                code: null,
                name: "Ambo",
            },
            {
                code: null,
                name: "Dos de Mayo",
            },
            {
                code: null,
                name: "Huacaybamba",
            },
            {
                code: null,
                name: "Huamalíes",
            },
            {
                code: null,
                name: "Leoncio Prado",
            },
            {
                code: null,
                name: "Marañón",
            },
            {
                code: null,
                name: "Pachitea",
            },
            {
                code: null,
                name: "Puerto Inca",
            },
            {
                code: null,
                name: "Lauricocha",
            },
            {
                code: null,
                name: "Yarowilca",
            },
            {
                code: null,
                name: "Ica",
            },
            {
                code: null,
                name: "Chincha",
            },
            {
                code: null,
                name: "Nazca",
            },
            {
                code: null,
                name: "Palpa",
            },
            {
                code: null,
                name: "Pisco",
            },
            {
                code: null,
                name: "Huancayo",
            },
            {
                code: null,
                name: "Concepción",
            },
            {
                code: null,
                name: "Chanchamayo",
            },
            {
                code: null,
                name: "Jauja",
            },
            {
                code: null,
                name: "Junín",
            },
            {
                code: null,
                name: "Satipo",
            },
            {
                code: null,
                name: "Tarma",
            },
            {
                code: null,
                name: "Yauli",
            },
            {
                code: null,
                name: "Chupaca",
            },
            {
                code: null,
                name: "Trujillo",
            },
            {
                code: null,
                name: "Ascope",
            },
            {
                code: null,
                name: "Bolívar",
            },
            {
                code: null,
                name: "Chepén",
            },
            {
                code: null,
                name: "Julcán",
            },
            {
                code: null,
                name: "Otuzco",
            },
            {
                code: null,
                name: "Pacasmayo",
            },
            {
                code: null,
                name: "Pataz",
            },
            {
                code: null,
                name: "Sánchez Carrión",
            },
            {
                code: null,
                name: "Santiago de Chuco",
            },
            {
                code: null,
                name: "Gran Chimú",
            },
            {
                code: null,
                name: "Virú",
            },
            {
                code: null,
                name: "Chiclayo",
            },
            {
                code: null,
                name: "Ferreñafe",
            },
            {
                code: null,
                name: "Lambayeque",
            },
            {
                code: null,
                name: "Lima",
            },
            {
                code: null,
                name: "Huaura",
            },
            {
                code: null,
                name: "Barranca",
            },
            {
                code: null,
                name: "Cajatambo",
            },
            {
                code: null,
                name: "Canta",
            },
            {
                code: null,
                name: "Cañete",
            },
            {
                code: null,
                name: "Huaral",
            },
            {
                code: null,
                name: "Huarochirí",
            },
            {
                code: null,
                name: "Oyón",
            },
            {
                code: null,
                name: "Yauyos",
            },
            {
                code: null,
                name: "Maynas",
            },
            {
                code: null,
                name: "Alto Amazonas",
            },
            {
                code: null,
                name: "Loreto",
            },
            {
                code: null,
                name: "Mariscal Ramón Castilla",
            },
            {
                code: null,
                name: "Putumayo",
            },
            {
                code: null,
                name: "Requena",
            },
            {
                code: null,
                name: "Ucayali",
            },
            {
                code: null,
                name: "Datem del Marañón",
            },
            {
                code: null,
                name: "Tambopata",
            },
            {
                code: null,
                name: "Manú",
            },
            {
                code: null,
                name: "Tahuamanu",
            },
            {
                code: null,
                name: "Mariscal Nieto",
            },
            {
                code: null,
                name: "General Sánchez Cerro",
            },
            {
                code: null,
                name: "Ilo",
            },
            {
                code: null,
                name: "Pasco",
            },
            {
                code: null,
                name: "Daniel Alcídes Carrión",
            },
            {
                code: null,
                name: "Oxapampa",
            },
            {
                code: null,
                name: "Piura",
            },
            {
                code: null,
                name: "Ayabaca",
            },
            {
                code: null,
                name: "Huancabamba",
            },
            {
                code: null,
                name: "Morropón",
            },
            {
                code: null,
                name: "Paita",
            },
            {
                code: null,
                name: "Sullana",
            },
            {
                code: null,
                name: "Talara",
            },
            {
                code: null,
                name: "Sechura",
            },
            {
                code: null,
                name: "Puno",
            },
            {
                code: null,
                name: "Azángaro",
            },
            {
                code: null,
                name: "Carabaya",
            },
            {
                code: null,
                name: "Chucuito",
            },
            {
                code: null,
                name: "El Collao",
            },
            {
                code: null,
                name: "Huancané",
            },
            {
                code: null,
                name: "Lampa",
            },
            {
                code: null,
                name: "Melgar",
            },
            {
                code: null,
                name: "Moho",
            },
            {
                code: null,
                name: "San Antonio de Putina",
            },
            {
                code: null,
                name: "San Román",
            },
            {
                code: null,
                name: "Sandia",
            },
            {
                code: null,
                name: "Yunguyo",
            },
            {
                code: null,
                name: "Moyobamba",
            },
            {
                code: null,
                name: "Bellavista",
            },
            {
                code: null,
                name: "El Dorado",
            },
            {
                code: null,
                name: "Huallaga",
            },
            {
                code: null,
                name: "Lamas",
            },
            {
                code: null,
                name: "Mariscal Cáceres",
            },
            {
                code: null,
                name: "Picota",
            },
            {
                code: null,
                name: "Rioja",
            },
            {
                code: null,
                name: "San Martín",
            },
            {
                code: null,
                name: "Tocache",
            },
            {
                code: null,
                name: "Tacna",
            },
            {
                code: null,
                name: "Candarave",
            },
            {
                code: null,
                name: "Jorge Basadre",
            },
            {
                code: null,
                name: "Tarata",
            },
            {
                code: null,
                name: "Tumbes",
            },
            {
                code: null,
                name: "Contralmirante Villar",
            },
            {
                code: null,
                name: "Zarumilla",
            },
            {
                code: null,
                name: "Coronel Portillo",
            },
            {
                code: null,
                name: "Atalaya",
            },
            {
                code: null,
                name: "Padre Abad",
            },
            {
                code: null,
                name: "Purús",
            },
        ],
    },
    {
        code: "PF",
        name: "French Polynesia",
        native: "Polynésie française",
        phone: "689",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Papeetē",
        currency: "XPF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇵🇫",
        emojiU: "U+1F1F5 U+1F1EB",
        states: [],
    },
    {
        code: "PG",
        name: "Papua New Guinea",
        native: "Papua Niugini",
        phone: "675",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Port Moresby",
        currency: "PGK",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇵🇬",
        emojiU: "U+1F1F5 U+1F1EC",
        states: [],
    },
    {
        code: "PH",
        name: "Philippines",
        native: "Pilipinas",
        phone: "63",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Manila",
        currency: "PHP",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇵🇭",
        emojiU: "U+1F1F5 U+1F1ED",
        states: [
            {
                code: null,
                name: "Abra",
            },
            {
                code: null,
                name: "Agusan del Norte",
            },
            {
                code: null,
                name: "Agusan del Sur",
            },
            {
                code: null,
                name: "Aklan",
            },
            {
                code: null,
                name: "Albay",
            },
            {
                code: null,
                name: "Antique",
            },
            {
                code: null,
                name: "Apayao",
            },
            {
                code: null,
                name: "Aurora",
            },
            {
                code: null,
                name: "Basilan",
            },
            {
                code: null,
                name: "Bataan",
            },
            {
                code: null,
                name: "Batanes",
            },
            {
                code: null,
                name: "Batangas",
            },
            {
                code: null,
                name: "Benguet",
            },
            {
                code: null,
                name: "Biliran",
            },
            {
                code: null,
                name: "Bohol",
            },
            {
                code: null,
                name: "Bukidnon",
            },
            {
                code: null,
                name: "Bulacan",
            },
            {
                code: null,
                name: "Cagayan",
            },
            {
                code: null,
                name: "Camarines Norte",
            },
            {
                code: null,
                name: "Camarines Sur",
            },
            {
                code: null,
                name: "Camiguin",
            },
            {
                code: null,
                name: "Capiz",
            },
            {
                code: null,
                name: "Catanduanes",
            },
            {
                code: null,
                name: "Cavite",
            },
            {
                code: null,
                name: "Cebu",
            },
            {
                code: null,
                name: "Compostela Valley",
            },
            {
                code: null,
                name: "Cotabato",
            },
            {
                code: null,
                name: "Davao del Norte",
            },
            {
                code: null,
                name: "Davao del Sur",
            },
            {
                code: null,
                name: "Davao Occidental",
            },
            {
                code: null,
                name: "Davao Oriental",
            },
            {
                code: null,
                name: "Dinagat Islands",
            },
            {
                code: null,
                name: "Eastern Samar",
            },
            {
                code: null,
                name: "Guimaras",
            },
            {
                code: null,
                name: "Ifugao",
            },
            {
                code: null,
                name: "Ilocos Norte",
            },
            {
                code: null,
                name: "Ilocos Sur",
            },
            {
                code: null,
                name: "Iloilo",
            },
            {
                code: null,
                name: "Isabela",
            },
            {
                code: null,
                name: "Kalinga",
            },
            {
                code: null,
                name: "La Union",
            },
            {
                code: null,
                name: "Laguna",
            },
            {
                code: null,
                name: "Lanao del Norte",
            },
            {
                code: null,
                name: "Lanao del Sur",
            },
            {
                code: null,
                name: "Leyte",
            },
            {
                code: null,
                name: "Maguindanao",
            },
            {
                code: null,
                name: "Marinduque",
            },
            {
                code: null,
                name: "Masbate",
            },
            {
                code: null,
                name: "Misamis Occidental",
            },
            {
                code: null,
                name: "Misamis Oriental",
            },
            {
                code: null,
                name: "Mountain Province",
            },
            {
                code: null,
                name: "Negros Occidental",
            },
            {
                code: null,
                name: "Negros Oriental",
            },
            {
                code: null,
                name: "Northern Samar",
            },
            {
                code: null,
                name: "Nueva Ecija",
            },
            {
                code: null,
                name: "Nueva Vizcaya",
            },
            {
                code: null,
                name: "Occidental Mindoro",
            },
            {
                code: null,
                name: "Oriental Mindoro",
            },
            {
                code: null,
                name: "Palawan",
            },
            {
                code: null,
                name: "Pampanga",
            },
            {
                code: null,
                name: "Pangasinan",
            },
            {
                code: null,
                name: "Quezon",
            },
            {
                code: null,
                name: "Quirino",
            },
            {
                code: null,
                name: "Rizal",
            },
            {
                code: null,
                name: "Romblon",
            },
            {
                code: null,
                name: "Samar",
            },
            {
                code: null,
                name: "Sarangani",
            },
            {
                code: null,
                name: "Siquijor",
            },
            {
                code: null,
                name: "Sorsogon",
            },
            {
                code: null,
                name: "South Cotabato",
            },
            {
                code: null,
                name: "Southern Leyte",
            },
            {
                code: null,
                name: "Sultan Kudarat",
            },
            {
                code: null,
                name: "Sulu",
            },
            {
                code: null,
                name: "Surigao del Norte",
            },
            {
                code: null,
                name: "Surigao del Sur",
            },
            {
                code: null,
                name: "Tarlac",
            },
            {
                code: null,
                name: "Tawi-Tawi",
            },
            {
                code: null,
                name: "Zambales",
            },
            {
                code: null,
                name: "Zamboanga del Norte",
            },
            {
                code: null,
                name: "Zamboanga del Sur",
            },
            {
                code: null,
                name: "Zamboanga Sibugay",
            },
            {
                code: null,
                name: "Metro Manila",
            },
        ],
    },
    {
        code: "PK",
        name: "Pakistan",
        native: "Pakistan",
        phone: "92",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Islamabad",
        currency: "PKR",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "ur",
                name: "Urdu",
                native: "اردو",
                rtl: true,
            },
        ],
        emoji: "🇵🇰",
        emojiU: "U+1F1F5 U+1F1F0",
        states: [
            {
                code: null,
                name: "Azad Kashmir",
            },
            {
                code: null,
                name: "Bahawalpur",
            },
            {
                code: null,
                name: "Bannu",
            },
            {
                code: null,
                name: "Dera Ghazi Khan",
            },
            {
                code: null,
                name: "Dera Ismail Khan",
            },
            {
                code: null,
                name: "Faisalabad",
            },
            {
                code: null,
                name: "F.A.T.A.",
            },
            {
                code: null,
                name: "Gujranwala",
            },
            {
                code: null,
                name: "Hazara",
            },
            {
                code: null,
                name: "Hyderabad",
            },
            {
                code: null,
                name: "Islamabad",
            },
            {
                code: null,
                name: "Kalat",
            },
            {
                code: null,
                name: "Karachi",
            },
            {
                code: null,
                name: "Kohat",
            },
            {
                code: null,
                name: "Lahore",
            },
            {
                code: null,
                name: "Larkana",
            },
            {
                code: null,
                name: "Makran",
            },
            {
                code: null,
                name: "Malakand",
            },
            {
                code: null,
                name: "Mardan",
            },
            {
                code: null,
                name: "Mirpur Khas",
            },
            {
                code: null,
                name: "Multan",
            },
            {
                code: null,
                name: "Nasirabad",
            },
            {
                code: null,
                name: "Northern Areas",
            },
            {
                code: null,
                name: "Peshawar",
            },
            {
                code: null,
                name: "Quetta",
            },
            {
                code: null,
                name: "Rawalpindi",
            },
            {
                code: null,
                name: "Sargodha",
            },
            {
                code: null,
                name: "Sahiwal",
            },
            {
                code: null,
                name: "Sibi",
            },
            {
                code: null,
                name: "Sukkur",
            },
            {
                code: null,
                name: "Zhob",
            },
        ],
    },
    {
        code: "PL",
        name: "Poland",
        native: "Polska",
        phone: "48",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Warsaw",
        currency: "PLN",
        languages: [
            {
                code: "pl",
                name: "Polish",
                native: "Polski",
                rtl: false,
            },
        ],
        emoji: "🇵🇱",
        emojiU: "U+1F1F5 U+1F1F1",
        states: [],
    },
    {
        code: "PM",
        name: "Saint Pierre and Miquelon",
        native: "Saint-Pierre-et-Miquelon",
        phone: "508",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Saint-Pierre",
        currency: "EUR",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇵🇲",
        emojiU: "U+1F1F5 U+1F1F2",
        states: [],
    },
    {
        code: "PN",
        name: "Pitcairn Islands",
        native: "Pitcairn Islands",
        phone: "64",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Adamstown",
        currency: "NZD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇵🇳",
        emojiU: "U+1F1F5 U+1F1F3",
        states: [],
    },
    {
        code: "PR",
        name: "Puerto Rico",
        native: "Puerto Rico",
        phone: "1787,1939",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "San Juan",
        currency: "USD",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇵🇷",
        emojiU: "U+1F1F5 U+1F1F7",
        states: [],
    },
    {
        code: "PS",
        name: "Palestine",
        native: "فلسطين",
        phone: "970",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Ramallah",
        currency: "ILS",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇵🇸",
        emojiU: "U+1F1F5 U+1F1F8",
        states: [],
    },
    {
        code: "PT",
        name: "Portugal",
        native: "Portugal",
        phone: "351",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Lisbon",
        currency: "EUR",
        languages: [
            {
                code: "pt",
                name: "Portuguese",
                native: "Português",
                rtl: false,
            },
        ],
        emoji: "🇵🇹",
        emojiU: "U+1F1F5 U+1F1F9",
        states: [],
    },
    {
        code: "PW",
        name: "Palau",
        native: "Palau",
        phone: "680",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Ngerulmud",
        currency: "USD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇵🇼",
        emojiU: "U+1F1F5 U+1F1FC",
        states: [],
    },
    {
        code: "PY",
        name: "Paraguay",
        native: "Paraguay",
        phone: "595",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Asunción",
        currency: "PYG",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
            {
                code: "gn",
                name: "Guarani",
                native: "Avañe'ẽ",
                rtl: false,
            },
        ],
        emoji: "🇵🇾",
        emojiU: "U+1F1F5 U+1F1FE",
        states: [],
    },
    {
        code: "QA",
        name: "Qatar",
        native: "قطر",
        phone: "974",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Doha",
        currency: "QAR",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇶🇦",
        emojiU: "U+1F1F6 U+1F1E6",
        states: [],
    },
    {
        code: "RE",
        name: "Réunion",
        native: "La Réunion",
        phone: "262",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Saint-Denis",
        currency: "EUR",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇷🇪",
        emojiU: "U+1F1F7 U+1F1EA",
        states: [],
    },
    {
        code: "RO",
        name: "Romania",
        native: "România",
        phone: "40",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Bucharest",
        currency: "RON",
        languages: [
            {
                code: "ro",
                name: "Romanian",
                native: "Română",
                rtl: false,
            },
        ],
        emoji: "🇷🇴",
        emojiU: "U+1F1F7 U+1F1F4",
        states: [],
    },
    {
        code: "RS",
        name: "Serbia",
        native: "Србија",
        phone: "381",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Belgrade",
        currency: "RSD",
        languages: [
            {
                code: "sr",
                name: "Serbian",
                native: "Српски",
                rtl: false,
            },
        ],
        emoji: "🇷🇸",
        emojiU: "U+1F1F7 U+1F1F8",
        states: [],
    },
    {
        code: "RU",
        name: "Russia",
        native: "Россия",
        phone: "7",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Moscow",
        currency: "RUB",
        languages: [
            {
                code: "ru",
                name: "Russian",
                native: "Русский",
                rtl: false,
            },
        ],
        emoji: "🇷🇺",
        emojiU: "U+1F1F7 U+1F1FA",
        states: [],
    },
    {
        code: "RW",
        name: "Rwanda",
        native: "Rwanda",
        phone: "250",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Kigali",
        currency: "RWF",
        languages: [
            {
                code: "rw",
                name: "Rwandi",
                native: "Kinyarwandi",
                rtl: false,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇷🇼",
        emojiU: "U+1F1F7 U+1F1FC",
        states: [],
    },
    {
        code: "SA",
        name: "Saudi Arabia",
        native: "العربية السعودية",
        phone: "966",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Riyadh",
        currency: "SAR",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇸🇦",
        emojiU: "U+1F1F8 U+1F1E6",
        states: [],
    },
    {
        code: "SB",
        name: "Solomon Islands",
        native: "Solomon Islands",
        phone: "677",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Honiara",
        currency: "SBD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇸🇧",
        emojiU: "U+1F1F8 U+1F1E7",
        states: [],
    },
    {
        code: "SC",
        name: "Seychelles",
        native: "Seychelles",
        phone: "248",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Victoria",
        currency: "SCR",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇸🇨",
        emojiU: "U+1F1F8 U+1F1E8",
        states: [],
    },
    {
        code: "SD",
        name: "Sudan",
        native: "السودان",
        phone: "249",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Khartoum",
        currency: "SDG",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇸🇩",
        emojiU: "U+1F1F8 U+1F1E9",
        states: [],
    },
    {
        code: "SE",
        name: "Sweden",
        native: "Sverige",
        phone: "46",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Stockholm",
        currency: "SEK",
        languages: [
            {
                code: "sv",
                name: "Swedish",
                native: "Svenska",
                rtl: false,
            },
        ],
        emoji: "🇸🇪",
        emojiU: "U+1F1F8 U+1F1EA",
        states: [],
    },
    {
        code: "SG",
        name: "Singapore",
        native: "Singapore",
        phone: "65",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Singapore",
        currency: "SGD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "ms",
                name: "Malay",
                native: "Bahasa Melayu",
                rtl: false,
            },
            {
                code: "ta",
                name: "Tamil",
                native: "தமிழ்",
                rtl: false,
            },
            {
                code: "zh",
                name: "Chinese",
                native: "中文",
                rtl: false,
            },
        ],
        emoji: "🇸🇬",
        emojiU: "U+1F1F8 U+1F1EC",
        states: [],
    },
    {
        code: "SH",
        name: "Saint Helena",
        native: "Saint Helena",
        phone: "290",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Jamestown",
        currency: "SHP",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇸🇭",
        emojiU: "U+1F1F8 U+1F1ED",
        states: [],
    },
    {
        code: "SI",
        name: "Slovenia",
        native: "Slovenija",
        phone: "386",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Ljubljana",
        currency: "EUR",
        languages: [
            {
                code: "sl",
                name: "Slovenian",
                native: "Slovenščina",
                rtl: false,
            },
        ],
        emoji: "🇸🇮",
        emojiU: "U+1F1F8 U+1F1EE",
        states: [],
    },
    {
        code: "SJ",
        name: "Svalbard and Jan Mayen",
        native: "Svalbard og Jan Mayen",
        phone: "4779",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Longyearbyen",
        currency: "NOK",
        languages: [
            {
                code: "no",
                name: "Norwegian",
                native: "Norsk",
                rtl: false,
            },
        ],
        emoji: "🇸🇯",
        emojiU: "U+1F1F8 U+1F1EF",
        states: [],
    },
    {
        code: "SK",
        name: "Slovakia",
        native: "Slovensko",
        phone: "421",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Bratislava",
        currency: "EUR",
        languages: [
            {
                code: "sk",
                name: "Slovak",
                native: "Slovenčina",
                rtl: false,
            },
        ],
        emoji: "🇸🇰",
        emojiU: "U+1F1F8 U+1F1F0",
        states: [],
    },
    {
        code: "SL",
        name: "Sierra Leone",
        native: "Sierra Leone",
        phone: "232",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Freetown",
        currency: "SLL",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇸🇱",
        emojiU: "U+1F1F8 U+1F1F1",
        states: [],
    },
    {
        code: "SM",
        name: "San Marino",
        native: "San Marino",
        phone: "378",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "City of San Marino",
        currency: "EUR",
        languages: [
            {
                code: "it",
                name: "Italian",
                native: "Italiano",
                rtl: false,
            },
        ],
        emoji: "🇸🇲",
        emojiU: "U+1F1F8 U+1F1F2",
        states: [],
    },
    {
        code: "SN",
        name: "Senegal",
        native: "Sénégal",
        phone: "221",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Dakar",
        currency: "XOF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇸🇳",
        emojiU: "U+1F1F8 U+1F1F3",
        states: [],
    },
    {
        code: "SO",
        name: "Somalia",
        native: "Soomaaliya",
        phone: "252",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Mogadishu",
        currency: "SOS",
        languages: [
            {
                code: "so",
                name: "Somalia",
                native: "Soomaaliga",
                rtl: false,
            },
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇸🇴",
        emojiU: "U+1F1F8 U+1F1F4",
        states: [],
    },
    {
        code: "SR",
        name: "Suriname",
        native: "Suriname",
        phone: "597",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Paramaribo",
        currency: "SRD",
        languages: [
            {
                code: "nl",
                name: "Dutch",
                native: "Nederlands",
                rtl: false,
            },
        ],
        emoji: "🇸🇷",
        emojiU: "U+1F1F8 U+1F1F7",
        states: [],
    },
    {
        code: "SS",
        name: "South Sudan",
        native: "South Sudan",
        phone: "211",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Juba",
        currency: "SSP",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇸🇸",
        emojiU: "U+1F1F8 U+1F1F8",
        states: [],
    },
    {
        code: "ST",
        name: "São Tomé and Príncipe",
        native: "São Tomé e Príncipe",
        phone: "239",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "São Tomé",
        currency: "STN",
        languages: [
            {
                code: "pt",
                name: "Portuguese",
                native: "Português",
                rtl: false,
            },
        ],
        emoji: "🇸🇹",
        emojiU: "U+1F1F8 U+1F1F9",
        states: [],
    },
    {
        code: "SV",
        name: "El Salvador",
        native: "El Salvador",
        phone: "503",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "San Salvador",
        currency: "SVC,USD",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇸🇻",
        emojiU: "U+1F1F8 U+1F1FB",
        states: [],
    },
    {
        code: "SX",
        name: "Sint Maarten",
        native: "Sint Maarten",
        phone: "1721",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Philipsburg",
        currency: "ANG",
        languages: [
            {
                code: "nl",
                name: "Dutch",
                native: "Nederlands",
                rtl: false,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇸🇽",
        emojiU: "U+1F1F8 U+1F1FD",
        states: [],
    },
    {
        code: "SY",
        name: "Syria",
        native: "سوريا",
        phone: "963",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Damascus",
        currency: "SYP",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇸🇾",
        emojiU: "U+1F1F8 U+1F1FE",
        states: [],
    },
    {
        code: "SZ",
        name: "Swaziland",
        native: "Swaziland",
        phone: "268",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Lobamba",
        currency: "SZL",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "ss",
                name: "Swati",
                native: "SiSwati",
                rtl: false,
            },
        ],
        emoji: "🇸🇿",
        emojiU: "U+1F1F8 U+1F1FF",
        states: [],
    },
    {
        code: "TC",
        name: "Turks and Caicos Islands",
        native: "Turks and Caicos Islands",
        phone: "1649",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Cockburn Town",
        currency: "USD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇹🇨",
        emojiU: "U+1F1F9 U+1F1E8",
        states: [],
    },
    {
        code: "TD",
        name: "Chad",
        native: "Tchad",
        phone: "235",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "N'Djamena",
        currency: "XAF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇹🇩",
        emojiU: "U+1F1F9 U+1F1E9",
        states: [],
    },
    {
        code: "TF",
        name: "French Southern Territories",
        native: "Territoire des Terres australes et antarctiques fr",
        phone: "262",
        continent: {
            code: "AN",
            name: "Antarctica",
        },
        capital: "Port-aux-Français",
        currency: "EUR",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇹🇫",
        emojiU: "U+1F1F9 U+1F1EB",
        states: [],
    },
    {
        code: "TG",
        name: "Togo",
        native: "Togo",
        phone: "228",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Lomé",
        currency: "XOF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇹🇬",
        emojiU: "U+1F1F9 U+1F1EC",
        states: [],
    },
    {
        code: "TH",
        name: "Thailand",
        native: "ประเทศไทย",
        phone: "66",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Bangkok",
        currency: "THB",
        languages: [
            {
                code: "th",
                name: "Thai",
                native: "ไทย / Phasa Thai",
                rtl: false,
            },
        ],
        emoji: "🇹🇭",
        emojiU: "U+1F1F9 U+1F1ED",
        states: [],
    },
    {
        code: "TJ",
        name: "Tajikistan",
        native: "Тоҷикистон",
        phone: "992",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Dushanbe",
        currency: "TJS",
        languages: [
            {
                code: "tg",
                name: "Tajik",
                native: "Тоҷикӣ",
                rtl: false,
            },
            {
                code: "ru",
                name: "Russian",
                native: "Русский",
                rtl: false,
            },
        ],
        emoji: "🇹🇯",
        emojiU: "U+1F1F9 U+1F1EF",
        states: [],
    },
    {
        code: "TK",
        name: "Tokelau",
        native: "Tokelau",
        phone: "690",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Fakaofo",
        currency: "NZD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇹🇰",
        emojiU: "U+1F1F9 U+1F1F0",
        states: [],
    },
    {
        code: "TL",
        name: "East Timor",
        native: "Timor-Leste",
        phone: "670",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Dili",
        currency: "USD",
        languages: [
            {
                code: "pt",
                name: "Portuguese",
                native: "Português",
                rtl: false,
            },
        ],
        emoji: "🇹🇱",
        emojiU: "U+1F1F9 U+1F1F1",
        states: [],
    },
    {
        code: "TM",
        name: "Turkmenistan",
        native: "Türkmenistan",
        phone: "993",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Ashgabat",
        currency: "TMT",
        languages: [
            {
                code: "tk",
                name: "Turkmen",
                native: "Туркмен / تركمن",
                rtl: false,
            },
            {
                code: "ru",
                name: "Russian",
                native: "Русский",
                rtl: false,
            },
        ],
        emoji: "🇹🇲",
        emojiU: "U+1F1F9 U+1F1F2",
        states: [],
    },
    {
        code: "TN",
        name: "Tunisia",
        native: "تونس",
        phone: "216",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Tunis",
        currency: "TND",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇹🇳",
        emojiU: "U+1F1F9 U+1F1F3",
        states: [],
    },
    {
        code: "TO",
        name: "Tonga",
        native: "Tonga",
        phone: "676",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Nuku'alofa",
        currency: "TOP",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "to",
                name: "Tonga",
                native: "Lea Faka-Tonga",
                rtl: false,
            },
        ],
        emoji: "🇹🇴",
        emojiU: "U+1F1F9 U+1F1F4",
        states: [],
    },
    {
        code: "TR",
        name: "Turkey",
        native: "Türkiye",
        phone: "90",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Ankara",
        currency: "TRY",
        languages: [
            {
                code: "tr",
                name: "Turkish",
                native: "Türkçe",
                rtl: false,
            },
        ],
        emoji: "🇹🇷",
        emojiU: "U+1F1F9 U+1F1F7",
        states: [
            {
                code: null,
                name: "Adana",
            },
            {
                code: null,
                name: "Adıyaman",
            },
            {
                code: null,
                name: "Afyonkarahisar",
            },
            {
                code: null,
                name: "Ağrı",
            },
            {
                code: null,
                name: "Amasya",
            },
            {
                code: null,
                name: "Ankara",
            },
            {
                code: null,
                name: "Antalya",
            },
            {
                code: null,
                name: "Artvin",
            },
            {
                code: null,
                name: "Aydın",
            },
            {
                code: null,
                name: "Balıkesir",
            },
            {
                code: null,
                name: "Bilecik",
            },
            {
                code: null,
                name: "Bingöl",
            },
            {
                code: null,
                name: "Bitlis",
            },
            {
                code: null,
                name: "Bolu",
            },
            {
                code: null,
                name: "Burdur",
            },
            {
                code: null,
                name: "Bursa",
            },
            {
                code: null,
                name: "Çanakkale",
            },
            {
                code: null,
                name: "Çankırı",
            },
            {
                code: null,
                name: "Çorum",
            },
            {
                code: null,
                name: "Denizli",
            },
            {
                code: null,
                name: "Diyarbakır",
            },
            {
                code: null,
                name: "Edirne",
            },
            {
                code: null,
                name: "Elazığ",
            },
            {
                code: null,
                name: "Erzincan",
            },
            {
                code: null,
                name: "Erzurum",
            },
            {
                code: null,
                name: "Eskişehir",
            },
            {
                code: null,
                name: "Gaziantep",
            },
            {
                code: null,
                name: "Giresun",
            },
            {
                code: null,
                name: "Gümüşhane",
            },
            {
                code: null,
                name: "Hakkâri",
            },
            {
                code: null,
                name: "Hatay",
            },
            {
                code: null,
                name: "Isparta",
            },
            {
                code: null,
                name: "Mersin",
            },
            {
                code: null,
                name: "Istanbul",
            },
            {
                code: null,
                name: "İzmir",
            },
            {
                code: null,
                name: "Kars",
            },
            {
                code: null,
                name: "Kastamonu",
            },
            {
                code: null,
                name: "Kayseri",
            },
            {
                code: null,
                name: "Kırklareli",
            },
            {
                code: null,
                name: "Kırşehir",
            },
            {
                code: null,
                name: "Kocaeli",
            },
            {
                code: null,
                name: "Konya",
            },
            {
                code: null,
                name: "Kütahya",
            },
            {
                code: null,
                name: "Malatya",
            },
            {
                code: null,
                name: "Manisa",
            },
            {
                code: null,
                name: "Kahramanmaraş",
            },
            {
                code: null,
                name: "Mardin",
            },
            {
                code: null,
                name: "Muğla",
            },
            {
                code: null,
                name: "Muş",
            },
            {
                code: null,
                name: "Nevşehir",
            },
            {
                code: null,
                name: "Niğde",
            },
            {
                code: null,
                name: "Ordu",
            },
            {
                code: null,
                name: "Rize",
            },
            {
                code: null,
                name: "Sakarya",
            },
            {
                code: null,
                name: "Samsun",
            },
            {
                code: null,
                name: "Siirt",
            },
            {
                code: null,
                name: "Sinop",
            },
            {
                code: null,
                name: "Sivas",
            },
            {
                code: null,
                name: "Tekirdağ",
            },
            {
                code: null,
                name: "Tokat",
            },
            {
                code: null,
                name: "Trabzon",
            },
            {
                code: null,
                name: "Tunceli",
            },
            {
                code: null,
                name: "Şanlıurfa",
            },
            {
                code: null,
                name: "Uşak",
            },
            {
                code: null,
                name: "Van",
            },
            {
                code: null,
                name: "Yozgat",
            },
            {
                code: null,
                name: "Zonguldak",
            },
            {
                code: null,
                name: "Aksaray",
            },
            {
                code: null,
                name: "Bayburt",
            },
            {
                code: null,
                name: "Karaman",
            },
            {
                code: null,
                name: "Kırıkkale",
            },
            {
                code: null,
                name: "Batman",
            },
            {
                code: null,
                name: "Şırnak",
            },
            {
                code: null,
                name: "Bartın",
            },
            {
                code: null,
                name: "Ardahan",
            },
            {
                code: null,
                name: "Iğdır",
            },
            {
                code: null,
                name: "Yalova",
            },
            {
                code: null,
                name: "Karabük",
            },
            {
                code: null,
                name: "Kilis",
            },
            {
                code: null,
                name: "Osmaniye",
            },
            {
                code: null,
                name: "Düzce",
            },
        ],
    },
    {
        code: "TT",
        name: "Trinidad and Tobago",
        native: "Trinidad and Tobago",
        phone: "1868",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Port of Spain",
        currency: "TTD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇹🇹",
        emojiU: "U+1F1F9 U+1F1F9",
        states: [],
    },
    {
        code: "TV",
        name: "Tuvalu",
        native: "Tuvalu",
        phone: "688",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Funafuti",
        currency: "AUD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇹🇻",
        emojiU: "U+1F1F9 U+1F1FB",
        states: [],
    },
    {
        code: "TW",
        name: "Taiwan",
        native: "臺灣",
        phone: "886",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Taipei",
        currency: "TWD",
        languages: [
            {
                code: "zh",
                name: "Chinese",
                native: "中文",
                rtl: false,
            },
        ],
        emoji: "🇹🇼",
        emojiU: "U+1F1F9 U+1F1FC",
        states: [],
    },
    {
        code: "TZ",
        name: "Tanzania",
        native: "Tanzania",
        phone: "255",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Dodoma",
        currency: "TZS",
        languages: [
            {
                code: "sw",
                name: "Swahili",
                native: "Kiswahili",
                rtl: false,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇹🇿",
        emojiU: "U+1F1F9 U+1F1FF",
        states: [],
    },
    {
        code: "UA",
        name: "Ukraine",
        native: "Україна",
        phone: "380",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Kyiv",
        currency: "UAH",
        languages: [
            {
                code: "uk",
                name: "Ukrainian",
                native: "Українська",
                rtl: false,
            },
        ],
        emoji: "🇺🇦",
        emojiU: "U+1F1FA U+1F1E6",
        states: [],
    },
    {
        code: "UG",
        name: "Uganda",
        native: "Uganda",
        phone: "256",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Kampala",
        currency: "UGX",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "sw",
                name: "Swahili",
                native: "Kiswahili",
                rtl: false,
            },
        ],
        emoji: "🇺🇬",
        emojiU: "U+1F1FA U+1F1EC",
        states: [],
    },
    {
        code: "UM",
        name: "U.S. Minor Outlying Islands",
        native: "United States Minor Outlying Islands",
        phone: "1",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: null,
        currency: "USD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇺🇲",
        emojiU: "U+1F1FA U+1F1F2",
        states: [],
    },
    {
        code: "US",
        name: "United States",
        native: "United States",
        phone: "1",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Washington D.C.",
        currency: "USD,USN,USS",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇺🇸",
        emojiU: "U+1F1FA U+1F1F8",
        states: [
            {
                code: "AL",
                name: "Alabama",
            },
            {
                code: "AK",
                name: "Alaska",
            },
            {
                code: "AZ",
                name: "Arizona",
            },
            {
                code: "AR",
                name: "Arkansas",
            },
            {
                code: "CA",
                name: "California",
            },
            {
                code: "CO",
                name: "Colorado",
            },
            {
                code: "CT",
                name: "Connecticut",
            },
            {
                code: "DC",
                name: "District of Columbia",
            },
            {
                code: "DE",
                name: "Delaware",
            },
            {
                code: "FL",
                name: "Florida",
            },
            {
                code: "GA",
                name: "Georgia",
            },
            {
                code: "HI",
                name: "Hawaii",
            },
            {
                code: "ID",
                name: "Idaho",
            },
            {
                code: "IL",
                name: "Illinois",
            },
            {
                code: "IN",
                name: "Indiana",
            },
            {
                code: "IA",
                name: "Iowa",
            },
            {
                code: "KS",
                name: "Kansas",
            },
            {
                code: "KY",
                name: "Kentucky",
            },
            {
                code: "LA",
                name: "Louisiana",
            },
            {
                code: "ME",
                name: "Maine",
            },
            {
                code: "MD",
                name: "Maryland",
            },
            {
                code: "MA",
                name: "Massachusetts",
            },
            {
                code: "MI",
                name: "Michigan",
            },
            {
                code: "MN",
                name: "Minnesota",
            },
            {
                code: "MS",
                name: "Mississippi",
            },
            {
                code: "MO",
                name: "Missouri",
            },
            {
                code: "MT",
                name: "Montana",
            },
            {
                code: "NE",
                name: "Nebraska",
            },
            {
                code: "NV",
                name: "Nevada",
            },
            {
                code: "NH",
                name: "New Hampshire",
            },
            {
                code: "NJ",
                name: "New Jersey",
            },
            {
                code: "NM",
                name: "New Mexico",
            },
            {
                code: "NY",
                name: "New York",
            },
            {
                code: "NC",
                name: "North Carolina",
            },
            {
                code: "ND",
                name: "North Dakota",
            },
            {
                code: "OH",
                name: "Ohio",
            },
            {
                code: "OK",
                name: "Oklahoma",
            },
            {
                code: "OR",
                name: "Oregon",
            },
            {
                code: "PA",
                name: "Pennsylvania",
            },
            {
                code: "RI",
                name: "Rhode Island",
            },
            {
                code: "SC",
                name: "South Carolina",
            },
            {
                code: "SD",
                name: "South Dakota",
            },
            {
                code: "TN",
                name: "Tennessee",
            },
            {
                code: "TX",
                name: "Texas",
            },
            {
                code: "UT",
                name: "Utah",
            },
            {
                code: "VT",
                name: "Vermont",
            },
            {
                code: "VA",
                name: "Virginia",
            },
            {
                code: "WA",
                name: "Washington",
            },
            {
                code: "WV",
                name: "West Virginia",
            },
            {
                code: "WI",
                name: "Wisconsin",
            },
            {
                code: "WY",
                name: "Wyoming",
            },
            {
                code: "AS",
                name: "American Samoa",
            },
            {
                code: "GU",
                name: "Guam",
            },
            {
                code: "MP",
                name: "Northern Mariana Islands",
            },
            {
                code: "PR",
                name: "Puerto Rico",
            },
            {
                code: "UM",
                name: "United States Minor Outlying Islands",
            },
            {
                code: "VI",
                name: "Virgin Islands",
            },
        ],
    },
    {
        code: "UY",
        name: "Uruguay",
        native: "Uruguay",
        phone: "598",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Montevideo",
        currency: "UYI,UYU",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇺🇾",
        emojiU: "U+1F1FA U+1F1FE",
        states: [],
    },
    {
        code: "UZ",
        name: "Uzbekistan",
        native: "O‘zbekiston",
        phone: "998",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Tashkent",
        currency: "UZS",
        languages: [
            {
                code: "uz",
                name: "Uzbek",
                native: "Ўзбек",
                rtl: false,
            },
            {
                code: "ru",
                name: "Russian",
                native: "Русский",
                rtl: false,
            },
        ],
        emoji: "🇺🇿",
        emojiU: "U+1F1FA U+1F1FF",
        states: [],
    },
    {
        code: "VA",
        name: "Vatican City",
        native: "Vaticano",
        phone: "379",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Vatican City",
        currency: "EUR",
        languages: [
            {
                code: "it",
                name: "Italian",
                native: "Italiano",
                rtl: false,
            },
            {
                code: "la",
                name: "Latin",
                native: "Latina",
                rtl: false,
            },
        ],
        emoji: "🇻🇦",
        emojiU: "U+1F1FB U+1F1E6",
        states: [],
    },
    {
        code: "VC",
        name: "Saint Vincent and the Grenadines",
        native: "Saint Vincent and the Grenadines",
        phone: "1784",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Kingstown",
        currency: "XCD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇻🇨",
        emojiU: "U+1F1FB U+1F1E8",
        states: [],
    },
    {
        code: "VE",
        name: "Venezuela",
        native: "Venezuela",
        phone: "58",
        continent: {
            code: "SA",
            name: "South America",
        },
        capital: "Caracas",
        currency: "VES",
        languages: [
            {
                code: "es",
                name: "Spanish",
                native: "Español",
                rtl: false,
            },
        ],
        emoji: "🇻🇪",
        emojiU: "U+1F1FB U+1F1EA",
        states: [],
    },
    {
        code: "VG",
        name: "British Virgin Islands",
        native: "British Virgin Islands",
        phone: "1284",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Road Town",
        currency: "USD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇻🇬",
        emojiU: "U+1F1FB U+1F1EC",
        states: [],
    },
    {
        code: "VI",
        name: "U.S. Virgin Islands",
        native: "United States Virgin Islands",
        phone: "1340",
        continent: {
            code: "NA",
            name: "North America",
        },
        capital: "Charlotte Amalie",
        currency: "USD",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇻🇮",
        emojiU: "U+1F1FB U+1F1EE",
        states: [],
    },
    {
        code: "VN",
        name: "Vietnam",
        native: "Việt Nam",
        phone: "84",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Hanoi",
        currency: "VND",
        languages: [
            {
                code: "vi",
                name: "Vietnamese",
                native: "Tiếng Việt",
                rtl: false,
            },
        ],
        emoji: "🇻🇳",
        emojiU: "U+1F1FB U+1F1F3",
        states: [
            {
                code: null,
                name: "Hà Nội",
            },
            {
                code: null,
                name: "Hà Giang",
            },
            {
                code: null,
                name: "Cao Bằng",
            },
            {
                code: null,
                name: "Bắc Kạn",
            },
            {
                code: null,
                name: "Tuyên Quang",
            },
            {
                code: null,
                name: "Lào Cai",
            },
            {
                code: null,
                name: "Điện Biên",
            },
            {
                code: null,
                name: "Lai Châu",
            },
            {
                code: null,
                name: "Sơn La",
            },
            {
                code: null,
                name: "Yên Bái",
            },
            {
                code: null,
                name: "Hòa Bình",
            },
            {
                code: null,
                name: "Thái Nguyên",
            },
            {
                code: null,
                name: "Lạng Sơn",
            },
            {
                code: null,
                name: "Quảng Ninh",
            },
            {
                code: null,
                name: "Bắc Giang",
            },
            {
                code: null,
                name: "Phú Thọ",
            },
            {
                code: null,
                name: "Vĩnh Phúc",
            },
            {
                code: null,
                name: "Bắc Ninh",
            },
            {
                code: null,
                name: "Hải Dương",
            },
            {
                code: null,
                name: "Hải Phòng",
            },
            {
                code: null,
                name: "Hưng Yên",
            },
            {
                code: null,
                name: "Thái Bình",
            },
            {
                code: null,
                name: "Hà Nam",
            },
            {
                code: null,
                name: "Nam Định",
            },
            {
                code: null,
                name: "Ninh Bình",
            },
            {
                code: null,
                name: "Thanh Hóa",
            },
            {
                code: null,
                name: "Nghệ An",
            },
            {
                code: null,
                name: "Hà Tĩnh",
            },
            {
                code: null,
                name: "Quảng Bình",
            },
            {
                code: null,
                name: "Quảng Trị",
            },
            {
                code: null,
                name: "Thừa Thiên–Huế",
            },
            {
                code: null,
                name: "Đà Nẵng",
            },
            {
                code: null,
                name: "Quảng Nam",
            },
            {
                code: null,
                name: "Quảng Ngãi",
            },
            {
                code: null,
                name: "Bình Định",
            },
            {
                code: null,
                name: "Phú Yên",
            },
            {
                code: null,
                name: "Khánh Hòa",
            },
            {
                code: null,
                name: "Ninh Thuận",
            },
            {
                code: null,
                name: "Bình Thuận",
            },
            {
                code: null,
                name: "Kon Tum",
            },
            {
                code: null,
                name: "Gia Lai",
            },
            {
                code: null,
                name: "Đắk Lắk",
            },
            {
                code: null,
                name: "Đắk Nông",
            },
            {
                code: null,
                name: "Lâm Đồng",
            },
            {
                code: null,
                name: "Bình Phước",
            },
            {
                code: null,
                name: "Tây Ninh",
            },
            {
                code: null,
                name: "Bình Dương",
            },
            {
                code: null,
                name: "Đồng Nai",
            },
            {
                code: null,
                name: "Bà Rịa–Vũng Tàu",
            },
            {
                code: null,
                name: "Thành phố Hồ Chí Minh",
            },
            {
                code: null,
                name: "Long An",
            },
            {
                code: null,
                name: "Tiền Giang",
            },
            {
                code: null,
                name: "Bến Tre",
            },
            {
                code: null,
                name: "Trà Vinh",
            },
            {
                code: null,
                name: "Vĩnh Long",
            },
            {
                code: null,
                name: "Đồng Tháp",
            },
            {
                code: null,
                name: "An Giang",
            },
            {
                code: null,
                name: "Kiên Giang",
            },
            {
                code: null,
                name: "Cần Thơ",
            },
            {
                code: null,
                name: "Hậu Giang",
            },
            {
                code: null,
                name: "Sóc Trăng",
            },
            {
                code: null,
                name: "Bạc Liêu",
            },
            {
                code: null,
                name: "Cà Mau",
            },
        ],
    },
    {
        code: "VU",
        name: "Vanuatu",
        native: "Vanuatu",
        phone: "678",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Port Vila",
        currency: "VUV",
        languages: [
            {
                code: "bi",
                name: "Bislama",
                native: "Bislama",
                rtl: false,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇻🇺",
        emojiU: "U+1F1FB U+1F1FA",
        states: [],
    },
    {
        code: "WF",
        name: "Wallis and Futuna",
        native: "Wallis et Futuna",
        phone: "681",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Mata-Utu",
        currency: "XPF",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇼🇫",
        emojiU: "U+1F1FC U+1F1EB",
        states: [],
    },
    {
        code: "WS",
        name: "Samoa",
        native: "Samoa",
        phone: "685",
        continent: {
            code: "OC",
            name: "Oceania",
        },
        capital: "Apia",
        currency: "WST",
        languages: [
            {
                code: "sm",
                name: "Samoan",
                native: "Gagana Samoa",
                rtl: false,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇼🇸",
        emojiU: "U+1F1FC U+1F1F8",
        states: [],
    },
    {
        code: "XK",
        name: "Kosovo",
        native: "Republika e Kosovës",
        phone: "377,381,383,386",
        continent: {
            code: "EU",
            name: "Europe",
        },
        capital: "Pristina",
        currency: "EUR",
        languages: [
            {
                code: "sq",
                name: "Albanian",
                native: "Shqip",
                rtl: false,
            },
            {
                code: "sr",
                name: "Serbian",
                native: "Српски",
                rtl: false,
            },
        ],
        emoji: "🇽🇰",
        emojiU: "U+1F1FD U+1F1F0",
        states: [],
    },
    {
        code: "YE",
        name: "Yemen",
        native: "اليَمَن",
        phone: "967",
        continent: {
            code: "AS",
            name: "Asia",
        },
        capital: "Sana'a",
        currency: "YER",
        languages: [
            {
                code: "ar",
                name: "Arabic",
                native: "العربية",
                rtl: true,
            },
        ],
        emoji: "🇾🇪",
        emojiU: "U+1F1FE U+1F1EA",
        states: [],
    },
    {
        code: "YT",
        name: "Mayotte",
        native: "Mayotte",
        phone: "262",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Mamoudzou",
        currency: "EUR",
        languages: [
            {
                code: "fr",
                name: "French",
                native: "Français",
                rtl: false,
            },
        ],
        emoji: "🇾🇹",
        emojiU: "U+1F1FE U+1F1F9",
        states: [],
    },
    {
        code: "ZA",
        name: "South Africa",
        native: "South Africa",
        phone: "27",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Pretoria",
        currency: "ZAR",
        languages: [
            {
                code: "af",
                name: "Afrikaans",
                native: "Afrikaans",
                rtl: false,
            },
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "nr",
                name: "South Ndebele",
                native: "isiNdebele",
                rtl: false,
            },
            {
                code: "st",
                name: "Southern Sotho",
                native: "Sesotho",
                rtl: false,
            },
            {
                code: "ss",
                name: "Swati",
                native: "SiSwati",
                rtl: false,
            },
            {
                code: "tn",
                name: "Tswana",
                native: "Setswana",
                rtl: false,
            },
            {
                code: "ts",
                name: "Tsonga",
                native: "Xitsonga",
                rtl: false,
            },
            {
                code: "ve",
                name: "Venda",
                native: "Tshivenḓa",
                rtl: false,
            },
            {
                code: "xh",
                name: "Xhosa",
                native: "isiXhosa",
                rtl: false,
            },
            {
                code: "zu",
                name: "Zulu",
                native: "isiZulu",
                rtl: false,
            },
        ],
        emoji: "🇿🇦",
        emojiU: "U+1F1FF U+1F1E6",
        states: [],
    },
    {
        code: "ZM",
        name: "Zambia",
        native: "Zambia",
        phone: "260",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Lusaka",
        currency: "ZMW",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
        ],
        emoji: "🇿🇲",
        emojiU: "U+1F1FF U+1F1F2",
        states: [],
    },
    {
        code: "ZW",
        name: "Zimbabwe",
        native: "Zimbabwe",
        phone: "263",
        continent: {
            code: "AF",
            name: "Africa",
        },
        capital: "Harare",
        currency: "USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English",
                rtl: false,
            },
            {
                code: "sn",
                name: "Shona",
                native: "chiShona",
                rtl: false,
            },
            {
                code: "nd",
                name: "North Ndebele",
                native: "Sindebele",
                rtl: false,
            },
        ],
        emoji: "🇿🇼",
        emojiU: "U+1F1FF U+1F1FC",
        states: [],
    },
];
