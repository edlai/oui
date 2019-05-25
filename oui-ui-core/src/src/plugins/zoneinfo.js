const zoneinfo = [
  ['UTC', 'UTC'],
  ['GMT0', 'Africa/Abidjan'],
  ['GMT0', 'Africa/Accra'],
  ['EAT-3', 'Africa/Addis Ababa'],
  ['CET-1', 'Africa/Algiers'],
  ['EAT-3', 'Africa/Asmara'],
  ['GMT0', 'Africa/Bamako'],
  ['WAT-1', 'Africa/Bangui'],
  ['GMT0', 'Africa/Banjul'],
  ['GMT0', 'Africa/Bissau'],
  ['CAT-2', 'Africa/Blantyre'],
  ['WAT-1', 'Africa/Brazzaville'],
  ['CAT-2', 'Africa/Bujumbura'],
  ['EET-2', 'Africa/Cairo'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Africa/Ceuta'],
  ['GMT0', 'Africa/Conakry'],
  ['GMT0', 'Africa/Dakar'],
  ['EAT-3', 'Africa/Dar es Salaam'],
  ['EAT-3', 'Africa/Djibouti'],
  ['WAT-1', 'Africa/Douala'],
  ['GMT0', 'Africa/Freetown'],
  ['CAT-2', 'Africa/Gaborone'],
  ['CAT-2', 'Africa/Harare'],
  ['SAST-2', 'Africa/Johannesburg'],
  ['EAT-3', 'Africa/Juba'],
  ['EAT-3', 'Africa/Kampala'],
  ['CAT-2', 'Africa/Khartoum'],
  ['CAT-2', 'Africa/Kigali'],
  ['WAT-1', 'Africa/Kinshasa'],
  ['WAT-1', 'Africa/Lagos'],
  ['WAT-1', 'Africa/Libreville'],
  ['GMT0', 'Africa/Lome'],
  ['WAT-1', 'Africa/Luanda'],
  ['CAT-2', 'Africa/Lubumbashi'],
  ['CAT-2', 'Africa/Lusaka'],
  ['WAT-1', 'Africa/Malabo'],
  ['CAT-2', 'Africa/Maputo'],
  ['SAST-2', 'Africa/Maseru'],
  ['SAST-2', 'Africa/Mbabane'],
  ['EAT-3', 'Africa/Mogadishu'],
  ['GMT0', 'Africa/Monrovia'],
  ['EAT-3', 'Africa/Nairobi'],
  ['WAT-1', 'Africa/Ndjamena'],
  ['WAT-1', 'Africa/Niamey'],
  ['GMT0', 'Africa/Nouakchott'],
  ['GMT0', 'Africa/Ouagadougou'],
  ['WAT-1', 'Africa/Porto-Novo'],
  ['GMT0', 'Africa/Sao Tome'],
  ['EET-2', 'Africa/Tripoli'],
  ['CET-1', 'Africa/Tunis'],
  ['CAT-2', 'Africa/Windhoek'],
  ['HST10HDT,M3.2.0,M11.1.0', 'America/Adak'],
  ['AKST9AKDT,M3.2.0,M11.1.0', 'America/Anchorage'],
  ['AST4', 'America/Anguilla'],
  ['AST4', 'America/Antigua'],
  ['<-03>3', 'America/Araguaina'],
  ['<-03>3', 'America/Argentina/Buenos Aires'],
  ['<-03>3', 'America/Argentina/Catamarca'],
  ['<-03>3', 'America/Argentina/Cordoba'],
  ['<-03>3', 'America/Argentina/Jujuy'],
  ['<-03>3', 'America/Argentina/La Rioja'],
  ['<-03>3', 'America/Argentina/Mendoza'],
  ['<-03>3', 'America/Argentina/Rio Gallegos'],
  ['<-03>3', 'America/Argentina/Salta'],
  ['<-03>3', 'America/Argentina/San Juan'],
  ['<-03>3', 'America/Argentina/San Luis'],
  ['<-03>3', 'America/Argentina/Tucuman'],
  ['<-03>3', 'America/Argentina/Ushuaia'],
  ['AST4', 'America/Aruba'],
  ['<-04>4<-03>,M10.1.0/0,M3.4.0/0', 'America/Asuncion'],
  ['EST5', 'America/Atikokan'],
  ['<-03>3', 'America/Bahia'],
  ['CST6CDT,M4.1.0,M10.5.0', 'America/Bahia Banderas'],
  ['AST4', 'America/Barbados'],
  ['<-03>3', 'America/Belem'],
  ['CST6', 'America/Belize'],
  ['AST4', 'America/Blanc-Sablon'],
  ['<-04>4', 'America/Boa Vista'],
  ['<-05>5', 'America/Bogota'],
  ['MST7MDT,M3.2.0,M11.1.0', 'America/Boise'],
  ['MST7MDT,M3.2.0,M11.1.0', 'America/Cambridge Bay'],
  ['<-04>4<-03>,M11.1.0/0,M2.3.0/0', 'America/Campo Grande'],
  ['EST5', 'America/Cancun'],
  ['<-04>4', 'America/Caracas'],
  ['<-03>3', 'America/Cayenne'],
  ['EST5', 'America/Cayman'],
  ['CST6CDT,M3.2.0,M11.1.0', 'America/Chicago'],
  ['MST7MDT,M4.1.0,M10.5.0', 'America/Chihuahua'],
  ['CST6', 'America/Costa Rica'],
  ['MST7', 'America/Creston'],
  ['<-04>4<-03>,M11.1.0/0,M2.3.0/0', 'America/Cuiaba'],
  ['AST4', 'America/Curacao'],
  ['GMT0', 'America/Danmarkshavn'],
  ['PST8PDT,M3.2.0,M11.1.0', 'America/Dawson'],
  ['MST7', 'America/Dawson Creek'],
  ['MST7MDT,M3.2.0,M11.1.0', 'America/Denver'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Detroit'],
  ['AST4', 'America/Dominica'],
  ['MST7MDT,M3.2.0,M11.1.0', 'America/Edmonton'],
  ['<-05>5', 'America/Eirunepe'],
  ['CST6', 'America/El Salvador'],
  ['MST7', 'America/Fort Nelson'],
  ['<-03>3', 'America/Fortaleza'],
  ['AST4ADT,M3.2.0,M11.1.0', 'America/Glace Bay'],
  ['<-03>3<-02>,M3.5.0/-2,M10.5.0/-1', 'America/Godthab'],
  ['AST4ADT,M3.2.0,M11.1.0', 'America/Goose Bay'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Grand Turk'],
  ['AST4', 'America/Grenada'],
  ['AST4', 'America/Guadeloupe'],
  ['CST6', 'America/Guatemala'],
  ['<-05>5', 'America/Guayaquil'],
  ['<-04>4', 'America/Guyana'],
  ['AST4ADT,M3.2.0,M11.1.0', 'America/Halifax'],
  ['CST5CDT,M3.2.0/0,M11.1.0/1', 'America/Havana'],
  ['MST7', 'America/Hermosillo'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Indiana/Indianapolis'],
  ['CST6CDT,M3.2.0,M11.1.0', 'America/Indiana/Knox'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Indiana/Marengo'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Indiana/Petersburg'],
  ['CST6CDT,M3.2.0,M11.1.0', 'America/Indiana/Tell City'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Indiana/Vevay'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Indiana/Vincennes'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Indiana/Winamac'],
  ['MST7MDT,M3.2.0,M11.1.0', 'America/Inuvik'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Iqaluit'],
  ['EST5', 'America/Jamaica'],
  ['AKST9AKDT,M3.2.0,M11.1.0', 'America/Juneau'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Kentucky/Louisville'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Kentucky/Monticello'],
  ['AST4', 'America/Kralendijk'],
  ['<-04>4', 'America/La Paz'],
  ['<-05>5', 'America/Lima'],
  ['PST8PDT,M3.2.0,M11.1.0', 'America/Los Angeles'],
  ['AST4', 'America/Lower Princes'],
  ['<-03>3', 'America/Maceio'],
  ['CST6', 'America/Managua'],
  ['<-04>4', 'America/Manaus'],
  ['AST4', 'America/Marigot'],
  ['AST4', 'America/Martinique'],
  ['CST6CDT,M3.2.0,M11.1.0', 'America/Matamoros'],
  ['MST7MDT,M4.1.0,M10.5.0', 'America/Mazatlan'],
  ['CST6CDT,M3.2.0,M11.1.0', 'America/Menominee'],
  ['CST6CDT,M4.1.0,M10.5.0', 'America/Merida'],
  ['AKST9AKDT,M3.2.0,M11.1.0', 'America/Metlakatla'],
  ['CST6CDT,M4.1.0,M10.5.0', 'America/Mexico City'],
  ['<-03>3<-02>,M3.2.0,M11.1.0', 'America/Miquelon'],
  ['AST4ADT,M3.2.0,M11.1.0', 'America/Moncton'],
  ['CST6CDT,M4.1.0,M10.5.0', 'America/Monterrey'],
  ['<-03>3', 'America/Montevideo'],
  ['AST4', 'America/Montserrat'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Nassau'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/New York'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Nipigon'],
  ['AKST9AKDT,M3.2.0,M11.1.0', 'America/Nome'],
  ['<-02>2', 'America/Noronha'],
  ['CST6CDT,M3.2.0,M11.1.0', 'America/North Dakota/Beulah'],
  ['CST6CDT,M3.2.0,M11.1.0', 'America/North Dakota/Center'],
  ['CST6CDT,M3.2.0,M11.1.0', 'America/North Dakota/New Salem'],
  ['MST7MDT,M3.2.0,M11.1.0', 'America/Ojinaga'],
  ['EST5', 'America/Panama'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Pangnirtung'],
  ['<-03>3', 'America/Paramaribo'],
  ['MST7', 'America/Phoenix'],
  ['AST4', 'America/Port of Spain'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Port-au-Prince'],
  ['<-04>4', 'America/Porto Velho'],
  ['AST4', 'America/Puerto Rico'],
  ['<-03>3', 'America/Punta Arenas'],
  ['CST6CDT,M3.2.0,M11.1.0', 'America/Rainy River'],
  ['CST6CDT,M3.2.0,M11.1.0', 'America/Rankin Inlet'],
  ['<-03>3', 'America/Recife'],
  ['CST6', 'America/Regina'],
  ['CST6CDT,M3.2.0,M11.1.0', 'America/Resolute'],
  ['<-05>5', 'America/Rio Branco'],
  ['<-03>3', 'America/Santarem'],
  ['<-04>4<-03>,M9.1.6/24,M4.1.6/24', 'America/Santiago'],
  ['AST4', 'America/Santo Domingo'],
  ['<-03>3<-02>,M11.1.0/0,M2.3.0/0', 'America/Sao Paulo'],
  ['<-01>1<+00>,M3.5.0/0,M10.5.0/1', 'America/Scoresbysund'],
  ['AKST9AKDT,M3.2.0,M11.1.0', 'America/Sitka'],
  ['AST4', 'America/St Barthelemy'],
  ['NST3:30NDT,M3.2.0,M11.1.0', 'America/St Johns'],
  ['AST4', 'America/St Kitts'],
  ['AST4', 'America/St Lucia'],
  ['AST4', 'America/St Thomas'],
  ['AST4', 'America/St Vincent'],
  ['CST6', 'America/Swift Current'],
  ['CST6', 'America/Tegucigalpa'],
  ['AST4ADT,M3.2.0,M11.1.0', 'America/Thule'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Thunder Bay'],
  ['PST8PDT,M3.2.0,M11.1.0', 'America/Tijuana'],
  ['EST5EDT,M3.2.0,M11.1.0', 'America/Toronto'],
  ['AST4', 'America/Tortola'],
  ['PST8PDT,M3.2.0,M11.1.0', 'America/Vancouver'],
  ['PST8PDT,M3.2.0,M11.1.0', 'America/Whitehorse'],
  ['CST6CDT,M3.2.0,M11.1.0', 'America/Winnipeg'],
  ['AKST9AKDT,M3.2.0,M11.1.0', 'America/Yakutat'],
  ['MST7MDT,M3.2.0,M11.1.0', 'America/Yellowknife'],
  ['<+08>-8', 'Antarctica/Casey'],
  ['<+07>-7', 'Antarctica/Davis'],
  ['<+10>-10', 'Antarctica/DumontDUrville'],
  ['<+11>-11', 'Antarctica/Macquarie'],
  ['<+05>-5', 'Antarctica/Mawson'],
  ['NZST-12NZDT,M9.5.0,M4.1.0/3', 'Antarctica/McMurdo'],
  ['<-03>3', 'Antarctica/Palmer'],
  ['<-03>3', 'Antarctica/Rothera'],
  ['<+03>-3', 'Antarctica/Syowa'],
  ['<+00>0<+02>-2,M3.5.0/1,M10.5.0/3', 'Antarctica/Troll'],
  ['<+06>-6', 'Antarctica/Vostok'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Arctic/Longyearbyen'],
  ['<+03>-3', 'Asia/Aden'],
  ['<+06>-6', 'Asia/Almaty'],
  ['EET-2EEST,M3.5.4/24,M10.5.5/1', 'Asia/Amman'],
  ['<+12>-12', 'Asia/Anadyr'],
  ['<+05>-5', 'Asia/Aqtau'],
  ['<+05>-5', 'Asia/Aqtobe'],
  ['<+05>-5', 'Asia/Ashgabat'],
  ['<+05>-5', 'Asia/Atyrau'],
  ['<+03>-3', 'Asia/Baghdad'],
  ['<+03>-3', 'Asia/Bahrain'],
  ['<+04>-4', 'Asia/Baku'],
  ['<+07>-7', 'Asia/Bangkok'],
  ['<+07>-7', 'Asia/Barnaul'],
  ['EET-2EEST,M3.5.0/0,M10.5.0/0', 'Asia/Beirut'],
  ['<+06>-6', 'Asia/Bishkek'],
  ['<+08>-8', 'Asia/Brunei'],
  ['<+09>-9', 'Asia/Chita'],
  ['<+08>-8', 'Asia/Choibalsan'],
  ['<+0530>-5:30', 'Asia/Colombo'],
  ['EET-2EEST,M3.5.5/0,M10.5.5/0', 'Asia/Damascus'],
  ['<+06>-6', 'Asia/Dhaka'],
  ['<+09>-9', 'Asia/Dili'],
  ['<+04>-4', 'Asia/Dubai'],
  ['<+05>-5', 'Asia/Dushanbe'],
  ['EET-2EEST,M3.5.0/3,M10.5.0/4', 'Asia/Famagusta'],
  ['EET-2EEST,M3.4.6/1,M10.5.6/1', 'Asia/Gaza'],
  ['EET-2EEST,M3.4.6/1,M10.5.6/1', 'Asia/Hebron'],
  ['<+07>-7', 'Asia/Ho Chi Minh'],
  ['HKT-8', 'Asia/Hong Kong'],
  ['<+07>-7', 'Asia/Hovd'],
  ['<+08>-8', 'Asia/Irkutsk'],
  ['WIB-7', 'Asia/Jakarta'],
  ['WIT-9', 'Asia/Jayapura'],
  ['IST-2IDT,M3.4.4/26,M10.5.0', 'Asia/Jerusalem'],
  ['<+0430>-4:30', 'Asia/Kabul'],
  ['<+12>-12', 'Asia/Kamchatka'],
  ['PKT-5', 'Asia/Karachi'],
  ['<+0545>-5:45', 'Asia/Kathmandu'],
  ['<+09>-9', 'Asia/Khandyga'],
  ['IST-5:30', 'Asia/Kolkata'],
  ['<+07>-7', 'Asia/Krasnoyarsk'],
  ['<+08>-8', 'Asia/Kuala Lumpur'],
  ['<+08>-8', 'Asia/Kuching'],
  ['<+03>-3', 'Asia/Kuwait'],
  ['CST-8', 'Asia/Macau'],
  ['<+11>-11', 'Asia/Magadan'],
  ['WITA-8', 'Asia/Makassar'],
  ['PST-8', 'Asia/Manila'],
  ['<+04>-4', 'Asia/Muscat'],
  ['EET-2EEST,M3.5.0/3,M10.5.0/4', 'Asia/Nicosia'],
  ['<+07>-7', 'Asia/Novokuznetsk'],
  ['<+07>-7', 'Asia/Novosibirsk'],
  ['<+06>-6', 'Asia/Omsk'],
  ['<+05>-5', 'Asia/Oral'],
  ['<+07>-7', 'Asia/Phnom Penh'],
  ['WIB-7', 'Asia/Pontianak'],
  ['KST-9', 'Asia/Pyongyang'],
  ['<+03>-3', 'Asia/Qatar'],
  ['<+06>-6', 'Asia/Qostanay'],
  ['<+05>-5', 'Asia/Qyzylorda'],
  ['<+03>-3', 'Asia/Riyadh'],
  ['<+11>-11', 'Asia/Sakhalin'],
  ['<+05>-5', 'Asia/Samarkand'],
  ['KST-9', 'Asia/Seoul'],
  ['CST-8', 'Asia/Shanghai'],
  ['<+08>-8', 'Asia/Singapore'],
  ['<+11>-11', 'Asia/Srednekolymsk'],
  ['CST-8', 'Asia/Taipei'],
  ['<+05>-5', 'Asia/Tashkent'],
  ['<+04>-4', 'Asia/Tbilisi'],
  ['<+0330>-3:30<+0430>,J79/24,J263/24', 'Asia/Tehran'],
  ['<+06>-6', 'Asia/Thimphu'],
  ['JST-9', 'Asia/Tokyo'],
  ['<+07>-7', 'Asia/Tomsk'],
  ['<+08>-8', 'Asia/Ulaanbaatar'],
  ['<+06>-6', 'Asia/Urumqi'],
  ['<+10>-10', 'Asia/Ust-Nera'],
  ['<+07>-7', 'Asia/Vientiane'],
  ['<+10>-10', 'Asia/Vladivostok'],
  ['<+09>-9', 'Asia/Yakutsk'],
  ['<+0630>-6:30', 'Asia/Yangon'],
  ['<+05>-5', 'Asia/Yekaterinburg'],
  ['<+04>-4', 'Asia/Yerevan'],
  ['<-01>1<+00>,M3.5.0/0,M10.5.0/1', 'Atlantic/Azores'],
  ['AST4ADT,M3.2.0,M11.1.0', 'Atlantic/Bermuda'],
  ['WET0WEST,M3.5.0/1,M10.5.0', 'Atlantic/Canary'],
  ['<-01>1', 'Atlantic/Cape Verde'],
  ['WET0WEST,M3.5.0/1,M10.5.0', 'Atlantic/Faroe'],
  ['WET0WEST,M3.5.0/1,M10.5.0', 'Atlantic/Madeira'],
  ['GMT0', 'Atlantic/Reykjavik'],
  ['<-02>2', 'Atlantic/South Georgia'],
  ['GMT0', 'Atlantic/St Helena'],
  ['<-03>3', 'Atlantic/Stanley'],
  ['ACST-9:30ACDT,M10.1.0,M4.1.0/3', 'Australia/Adelaide'],
  ['AEST-10', 'Australia/Brisbane'],
  ['ACST-9:30ACDT,M10.1.0,M4.1.0/3', 'Australia/Broken Hill'],
  ['AEST-10AEDT,M10.1.0,M4.1.0/3', 'Australia/Currie'],
  ['ACST-9:30', 'Australia/Darwin'],
  ['<+0845>-8:45', 'Australia/Eucla'],
  ['AEST-10AEDT,M10.1.0,M4.1.0/3', 'Australia/Hobart'],
  ['AEST-10', 'Australia/Lindeman'],
  ['<+1030>-10:30<+11>-11,M10.1.0,M4.1.0', 'Australia/Lord Howe'],
  ['AEST-10AEDT,M10.1.0,M4.1.0/3', 'Australia/Melbourne'],
  ['AWST-8', 'Australia/Perth'],
  ['AEST-10AEDT,M10.1.0,M4.1.0/3', 'Australia/Sydney'],
  ['GMT0', 'Etc/GMT'],
  ['<-01>1', 'Etc/GMT+1'],
  ['<-10>10', 'Etc/GMT+10'],
  ['<-11>11', 'Etc/GMT+11'],
  ['<-12>12', 'Etc/GMT+12'],
  ['<-02>2', 'Etc/GMT+2'],
  ['<-03>3', 'Etc/GMT+3'],
  ['<-04>4', 'Etc/GMT+4'],
  ['<-05>5', 'Etc/GMT+5'],
  ['<-06>6', 'Etc/GMT+6'],
  ['<-07>7', 'Etc/GMT+7'],
  ['<-08>8', 'Etc/GMT+8'],
  ['<-09>9', 'Etc/GMT+9'],
  ['<+01>-1', 'Etc/GMT-1'],
  ['<+10>-10', 'Etc/GMT-10'],
  ['<+11>-11', 'Etc/GMT-11'],
  ['<+12>-12', 'Etc/GMT-12'],
  ['<+13>-13', 'Etc/GMT-13'],
  ['<+14>-14', 'Etc/GMT-14'],
  ['<+02>-2', 'Etc/GMT-2'],
  ['<+03>-3', 'Etc/GMT-3'],
  ['<+04>-4', 'Etc/GMT-4'],
  ['<+05>-5', 'Etc/GMT-5'],
  ['<+06>-6', 'Etc/GMT-6'],
  ['<+07>-7', 'Etc/GMT-7'],
  ['<+08>-8', 'Etc/GMT-8'],
  ['<+09>-9', 'Etc/GMT-9'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Amsterdam'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Andorra'],
  ['<+04>-4', 'Europe/Astrakhan'],
  ['EET-2EEST,M3.5.0/3,M10.5.0/4', 'Europe/Athens'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Belgrade'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Berlin'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Bratislava'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Brussels'],
  ['EET-2EEST,M3.5.0/3,M10.5.0/4', 'Europe/Bucharest'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Budapest'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Busingen'],
  ['EET-2EEST,M3.5.0,M10.5.0/3', 'Europe/Chisinau'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Copenhagen'],
  ['IST-1GMT0,M10.5.0,M3.5.0/1', 'Europe/Dublin'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Gibraltar'],
  ['GMT0BST,M3.5.0/1,M10.5.0', 'Europe/Guernsey'],
  ['EET-2EEST,M3.5.0/3,M10.5.0/4', 'Europe/Helsinki'],
  ['GMT0BST,M3.5.0/1,M10.5.0', 'Europe/Isle of Man'],
  ['<+03>-3', 'Europe/Istanbul'],
  ['GMT0BST,M3.5.0/1,M10.5.0', 'Europe/Jersey'],
  ['EET-2', 'Europe/Kaliningrad'],
  ['EET-2EEST,M3.5.0/3,M10.5.0/4', 'Europe/Kiev'],
  ['<+03>-3', 'Europe/Kirov'],
  ['WET0WEST,M3.5.0/1,M10.5.0', 'Europe/Lisbon'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Ljubljana'],
  ['GMT0BST,M3.5.0/1,M10.5.0', 'Europe/London'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Luxembourg'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Madrid'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Malta'],
  ['EET-2EEST,M3.5.0/3,M10.5.0/4', 'Europe/Mariehamn'],
  ['<+03>-3', 'Europe/Minsk'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Monaco'],
  ['MSK-3', 'Europe/Moscow'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Oslo'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Paris'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Podgorica'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Prague'],
  ['EET-2EEST,M3.5.0/3,M10.5.0/4', 'Europe/Riga'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Rome'],
  ['<+04>-4', 'Europe/Samara'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/San Marino'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Sarajevo'],
  ['<+04>-4', 'Europe/Saratov'],
  ['MSK-3', 'Europe/Simferopol'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Skopje'],
  ['EET-2EEST,M3.5.0/3,M10.5.0/4', 'Europe/Sofia'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Stockholm'],
  ['EET-2EEST,M3.5.0/3,M10.5.0/4', 'Europe/Tallinn'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Tirane'],
  ['<+04>-4', 'Europe/Ulyanovsk'],
  ['EET-2EEST,M3.5.0/3,M10.5.0/4', 'Europe/Uzhgorod'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Vaduz'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Vatican'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Vienna'],
  ['EET-2EEST,M3.5.0/3,M10.5.0/4', 'Europe/Vilnius'],
  ['<+04>-4', 'Europe/Volgograd'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Warsaw'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Zagreb'],
  ['EET-2EEST,M3.5.0/3,M10.5.0/4', 'Europe/Zaporozhye'],
  ['CET-1CEST,M3.5.0,M10.5.0/3', 'Europe/Zurich'],
  ['EAT-3', 'Indian/Antananarivo'],
  ['<+06>-6', 'Indian/Chagos'],
  ['<+07>-7', 'Indian/Christmas'],
  ['<+0630>-6:30', 'Indian/Cocos'],
  ['EAT-3', 'Indian/Comoro'],
  ['<+05>-5', 'Indian/Kerguelen'],
  ['<+04>-4', 'Indian/Mahe'],
  ['<+05>-5', 'Indian/Maldives'],
  ['<+04>-4', 'Indian/Mauritius'],
  ['EAT-3', 'Indian/Mayotte'],
  ['<+04>-4', 'Indian/Reunion'],
  ['<+13>-13<+14>,M9.5.0/3,M4.1.0/4', 'Pacific/Apia'],
  ['NZST-12NZDT,M9.5.0,M4.1.0/3', 'Pacific/Auckland'],
  ['<+11>-11', 'Pacific/Bougainville'],
  ['<+1245>-12:45<+1345>,M9.5.0/2:45,M4.1.0/3:45', 'Pacific/Chatham'],
  ['<+10>-10', 'Pacific/Chuuk'],
  ['<-06>6<-05>,M9.1.6/22,M4.1.6/22', 'Pacific/Easter'],
  ['<+11>-11', 'Pacific/Efate'],
  ['<+13>-13', 'Pacific/Enderbury'],
  ['<+13>-13', 'Pacific/Fakaofo'],
  ['<+12>-12<+13>,M11.1.0,M1.2.2/123', 'Pacific/Fiji'],
  ['<+12>-12', 'Pacific/Funafuti'],
  ['<-06>6', 'Pacific/Galapagos'],
  ['<-09>9', 'Pacific/Gambier'],
  ['<+11>-11', 'Pacific/Guadalcanal'],
  ['ChST-10', 'Pacific/Guam'],
  ['HST10', 'Pacific/Honolulu'],
  ['<+14>-14', 'Pacific/Kiritimati'],
  ['<+11>-11', 'Pacific/Kosrae'],
  ['<+12>-12', 'Pacific/Kwajalein'],
  ['<+12>-12', 'Pacific/Majuro'],
  ['<-0930>9:30', 'Pacific/Marquesas'],
  ['SST11', 'Pacific/Midway'],
  ['<+12>-12', 'Pacific/Nauru'],
  ['<-11>11', 'Pacific/Niue'],
  ['<+11>-11', 'Pacific/Norfolk'],
  ['<+11>-11', 'Pacific/Noumea'],
  ['SST11', 'Pacific/Pago Pago'],
  ['<+09>-9', 'Pacific/Palau'],
  ['<-08>8', 'Pacific/Pitcairn'],
  ['<+11>-11', 'Pacific/Pohnpei'],
  ['<+10>-10', 'Pacific/Port Moresby'],
  ['<-10>10', 'Pacific/Rarotonga'],
  ['ChST-10', 'Pacific/Saipan'],
  ['<-10>10', 'Pacific/Tahiti'],
  ['<+12>-12', 'Pacific/Tarawa'],
  ['<+13>-13', 'Pacific/Tongatapu'],
  ['<+12>-12', 'Pacific/Wake'],
  ['<+12>-12', 'Pacific/Wallis']
]

export default zoneinfo
