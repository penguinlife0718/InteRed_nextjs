const countryOptions = [
    {
        value: "",
        label: "All",
        clearablevalue: false
    },
    {
        value: "AF",
        label: "Afghanistan",
        clearablevalue: false
    },
    {
        value: "AX",
        label: "Åland Islands",
        clearablevalue: false
    },
    {
        value: "AL",
        label: "Albania",
        clearablevalue: false
    },
    {
        value: "DZ",
        label: "Algeria",
        clearablevalue: false
    },
    {
        value: "AS",
        label: "American Samoa",
        clearablevalue: false
    },
    {
        value: "AD",
        label: "Andorra",
        clearablevalue: false
    },
    {
        value: "AO",
        label: "Angola",
        clearablevalue: false
    },
    {
        value: "AI",
        label: "Anguilla",
        clearablevalue: false
    },
    {
        value: "AQ",
        label: "Antarctica",
        clearablevalue: false
    },
    {
        value: "AG",
        label: "Antigua and Barbuda",
        clearablevalue: false
    },
    {
        value: "AR",
        label: "Argentina",
        clearablevalue: false
    },
    {
        value: "AM",
        label: "Armenia",
        clearablevalue: false
    },
    {
        value: "AW",
        label: "Aruba",
        clearablevalue: false
    },
    {
        value: "AU",
        label: "Australia",
        clearablevalue: false
    },
    {
        value: "AT",
        label: "Austria",
        clearablevalue: false
    },
    {
        value: "AZ",
        label: "Azerbaijan",
        clearablevalue: false
    },
    {
        value: "BS",
        label: "Bahamas",
        clearablevalue: false
    },
    {
        value: "BH",
        label: "Bahrain",
        clearablevalue: false
    },
    {
        value: "BD",
        label: "Bangladesh",
        clearablevalue: false
    },
    {
        value: "BB",
        label: "Barbados",
        clearablevalue: false
    },
    {
        value: "BY",
        label: "Belarus",
        clearablevalue: false
    },
    {
        value: "BE",
        label: "Belgium",
        clearablevalue: false
    },
    {
        value: "BZ",
        label: "Belize",
        clearablevalue: false
    },
    {
        value: "BJ",
        label: "Benin",
        clearablevalue: false
    },
    {
        value: "BM",
        label: "Bermuda",
        clearablevalue: false
    },
    {
        value: "BT",
        label: "Bhutan",
        clearablevalue: false
    },
    {
        value: "BO",
        label: "Bolivia (Plurinational State of)",
        clearablevalue: false
    },
    {
        value: "BQ",
        label: "Bonaire",
        clearablevalue: false
    },
    {
        value: "BA",
        label: "Bosnia and Herzegovina",
        clearablevalue: false
    },
    {
        value: "BW",
        label: "Botswana",
        clearablevalue: false
    },
    {
        value: "BV",
        label: "Bouvet Island",
        clearablevalue: false
    },
    {
        value: "BR",
        label: "Brazil",
        clearablevalue: false
    },
    {
        value: "IO",
        label: "British Indian Ocean Territory",
        clearablevalue: false
    },
    {
        value: "BN",
        label: "Brunei Darussalam",
        clearablevalue: false
    },
    {
        value: "BG",
        label: "Bulgaria",
        clearablevalue: false
    },
    {
        value: "BF",
        label: "Burkina Faso",
        clearablevalue: false
    },
    {
        value: "BI",
        label: "Burundi",
        clearablevalue: false
    },
    {
        value: "CV",
        label: "Cabo Verde",
        clearablevalue: false
    },
    {
        value: "KH",
        label: "Cambodia",
        clearablevalue: false
    },
    {
        value: "CM",
        label: "Cameroon",
        clearablevalue: false
    },
    {
        value: "CA",
        label: "Canada",
        clearablevalue: false
    },
    {
        value: "KY",
        label: "Cayman Islands",
        clearablevalue: false
    },
    {
        value: "CF",
        label: "Central African Republic",
        clearablevalue: false
    },
    {
        value: "TD",
        label: "Chad",
        clearablevalue: false
    },
    {
        value: "CL",
        label: "Chile",
        clearablevalue: false
    },
    {
        value: "CN",
        label: "China",
        clearablevalue: false
    },
    {
        value: "CX",
        label: "Christmas Island",
        clearablevalue: false
    },
    {
        value: "CC",
        label: "Cocos (Keeling) Islands",
        clearablevalue: false
    },
    {
        value: "CO",
        label: "Colombia",
        clearablevalue: false
    },
    {
        value: "KM",
        label: "Comoros",
        clearablevalue: false
    },
    {
        value: "CG",
        label: "Congo",
        clearablevalue: false
    },
    {
        value: "CD",
        label: "Congo (Democratic Republic of the)",
        clearablevalue: false
    },
    {
        value: "CK",
        label: "Cook Islands",
        clearablevalue: false
    },
    {
        value: "CR",
        label: "Costa Rica",
        clearablevalue: false
    },
    {
        value: "CI",
        label: "Côte d'Ivoire",
        clearablevalue: false
    },
    {
        value: "HR",
        label: "Croatia",
        clearablevalue: false
    },
    {
        value: "CU",
        label: "Cuba",
        clearablevalue: false
    },
    {
        value: "CW",
        label: "Curaçao",
        clearablevalue: false
    },
    {
        value: "CY",
        label: "Cyprus",
        clearablevalue: false
    },
    {
        value: "CZ",
        label: "Czechia",
        clearablevalue: false
    },
    {
        value: "DK",
        label: "Denmark",
        clearablevalue: false
    },
    {
        value: "DJ",
        label: "Djibouti",
        clearablevalue: false
    },
    {
        value: "DM",
        label: "Dominica",
        clearablevalue: false
    },
    {
        value: "DO",
        label: "Dominican Republic",
        clearablevalue: false
    },
    {
        value: "EC",
        label: "Ecuador",
        clearablevalue: false
    },
    {
        value: "EG",
        label: "Egypt",
        clearablevalue: false
    },
    {
        value: "SV",
        label: "El Salvador",
        clearablevalue: false
    },
    {
        value: "GQ",
        label: "Equatorial Guinea",
        clearablevalue: false
    },
    {
        value: "ER",
        label: "Eritrea",
        clearablevalue: false
    },
    {
        value: "EE",
        label: "Estonia",
        clearablevalue: false
    },
    {
        value: "ET",
        label: "Ethiopia",
        clearablevalue: false
    },
    {
        value: "FK",
        label: "Falkland Islands (Malvinas)",
        clearablevalue: false
    },
    {
        value: "FO",
        label: "Faroe Islands",
        clearablevalue: false
    },
    {
        value: "FJ",
        label: "Fiji",
        clearablevalue: false
    },
    {
        value: "FI",
        label: "Finland",
        clearablevalue: false
    },
    {
        value: "FR",
        label: "France",
        clearablevalue: false
    },
    {
        value: "GF",
        label: "French Guiana",
        clearablevalue: false
    },
    {
        value: "PF",
        label: "French Polynesia",
        clearablevalue: false
    },
    {
        value: "TF",
        label: "French Southern Territories",
        clearablevalue: false
    },
    {
        value: "GA",
        label: "Gabon",
        clearablevalue: false
    },
    {
        value: "GM",
        label: "Gambia",
        clearablevalue: false
    },
    {
        value: "GE",
        label: "Georgia",
        clearablevalue: false
    },
    {
        value: "DE",
        label: "Germany",
        clearablevalue: false
    },
    {
        value: "GH",
        label: "Ghana",
        clearablevalue: false
    },
    {
        value: "GI",
        label: "Gibraltar",
        clearablevalue: false
    },
    {
        value: "GR",
        label: "Greece",
        clearablevalue: false
    },
    {
        value: "GL",
        label: "Greenland",
        clearablevalue: false
    },
    {
        value: "GD",
        label: "Grenada",
        clearablevalue: false
    },
    {
        value: "GP",
        label: "Guadeloupe",
        clearablevalue: false
    },
    {
        value: "GU",
        label: "Guam",
        clearablevalue: false
    },
    {
        value: "GT",
        label: "Guatemala",
        clearablevalue: false
    },
    {
        value: "GG",
        label: "Guernsey",
        clearablevalue: false
    },
    {
        value: "GN",
        label: "Guinea",
        clearablevalue: false
    },
    {
        value: "GW",
        label: "Guinea-Bissau",
        clearablevalue: false
    },
    {
        value: "GY",
        label: "Guyana",
        clearablevalue: false
    },
    {
        value: "HT",
        label: "Haiti",
        clearablevalue: false
    },
    {
        value: "HM",
        label: "Heard Island and McDonald Islands",
        clearablevalue: false
    },
    {
        value: "VA",
        label: "Holy See",
        clearablevalue: false
    },
    {
        value: "HN",
        label: "Honduras",
        clearablevalue: false
    },
    {
        value: "HK",
        label: "Hong Kong",
        clearablevalue: false
    },
    {
        value: "HU",
        label: "Hungary",
        clearablevalue: false
    },
    {
        value: "IS",
        label: "Iceland",
        clearablevalue: false
    },
    {
        value: "IN",
        label: "India",
        clearablevalue: false
    },
    {
        value: "ID",
        label: "Indonesia",
        clearablevalue: false
    },
    {
        value: "IR",
        label: "Iran (Islamic Republic of)",
        clearablevalue: false
    },
    {
        value: "IQ",
        label: "Iraq",
        clearablevalue: false
    },
    {
        value: "IE",
        label: "Ireland",
        clearablevalue: false
    },
    {
        value: "IM",
        label: "Isle of Man",
        clearablevalue: false
    },
    {
        value: "IL",
        label: "Israel",
        clearablevalue: false
    },
    {
        value: "IT",
        label: "Italy",
        clearablevalue: false
    },
    {
        value: "JM",
        label: "Jamaica",
        clearablevalue: false
    },
    {
        value: "JP",
        label: "Japan",
        clearablevalue: false
    },
    {
        value: "JE",
        label: "Jersey",
        clearablevalue: false
    },
    {
        value: "JO",
        label: "Jordan",
        clearablevalue: false
    },
    {
        value: "KZ",
        label: "Kazakhstan",
        clearablevalue: false
    },
    {
        value: "KE",
        label: "Kenya",
        clearablevalue: false
    },
    {
        value: "KI",
        label: "Kiribati",
        clearablevalue: false
    },
    {
        value: "KP",
        label: "Korea (Democratic People's Republic of)",
        clearablevalue: false
    },
    {
        value: "KR",
        label: "Korea (Republic of)",
        clearablevalue: false
    },
    {
        value: "KW",
        label: "Kuwait",
        clearablevalue: false
    },
    {
        value: "KG",
        label: "Kyrgyzstan",
        clearablevalue: false
    },
    {
        value: "LA",
        label: "Lao People's Democratic Republic",
        clearablevalue: false
    },
    {
        value: "LV",
        label: "Latvia",
        clearablevalue: false
    },
    {
        value: "LB",
        label: "Lebanon",
        clearablevalue: false
    },
    {
        value: "LS",
        label: "Lesotho",
        clearablevalue: false
    },
    {
        value: "LR",
        label: "Liberia",
        clearablevalue: false
    },
    {
        value: "LY",
        label: "Libya",
        clearablevalue: false
    },
    {
        value: "LI",
        label: "Liechtenstein",
        clearablevalue: false
    },
    {
        value: "LT",
        label: "Lithuania",
        clearablevalue: false
    },
    {
        value: "LU",
        label: "Luxembourg",
        clearablevalue: false
    },
    {
        value: "MO",
        label: "Macao",
        clearablevalue: false
    },
    {
        value: "MK",
        label: "Macedonia (the former Yugoslav Republic of)",
        clearablevalue: false
    },
    {
        value: "MG",
        label: "Madagascar",
        clearablevalue: false
    },
    {
        value: "MW",
        label: "Malawi",
        clearablevalue: false
    },
    {
        value: "MY",
        label: "Malaysia",
        clearablevalue: false
    },
    {
        value: "MV",
        label: "Maldives",
        clearablevalue: false
    },
    {
        value: "ML",
        label: "Mali",
        clearablevalue: false
    },
    {
        value: "MT",
        label: "Malta",
        clearablevalue: false
    },
    {
        value: "MH",
        label: "Marshall Islands",
        clearablevalue: false
    },
    {
        value: "MQ",
        label: "Martinique",
        clearablevalue: false
    },
    {
        value: "MR",
        label: "Mauritania",
        clearablevalue: false
    },
    {
        value: "MU",
        label: "Mauritius",
        clearablevalue: false
    },
    {
        value: "YT",
        label: "Mayotte",
        clearablevalue: false
    },
    {
        value: "MX",
        label: "Mexico",
        clearablevalue: false
    },
    {
        value: "FM",
        label: "Micronesia (Federated States of)",
        clearablevalue: false
    },
    {
        value: "MD",
        label: "Moldova (Republic of)",
        clearablevalue: false
    },
    {
        value: "MC",
        label: "Monaco",
        clearablevalue: false
    },
    {
        value: "MN",
        label: "Mongolia",
        clearablevalue: false
    },
    {
        value: "ME",
        label: "Montenegro",
        clearablevalue: false
    },
    {
        value: "MS",
        label: "Montserrat",
        clearablevalue: false
    },
    {
        value: "MA",
        label: "Morocco",
        clearablevalue: false
    },
    {
        value: "MZ",
        label: "Mozambique",
        clearablevalue: false
    },
    {
        value: "MM",
        label: "Myanmar",
        clearablevalue: false
    },
    {
        value: "NA",
        label: "Namibia",
        clearablevalue: false
    },
    {
        value: "NR",
        label: "Nauru",
        clearablevalue: false
    },
    {
        value: "NP",
        label: "Nepal",
        clearablevalue: false
    },
    {
        value: "NL",
        label: "Netherlands",
        clearablevalue: false
    },
    {
        value: "NC",
        label: "New Caledonia",
        clearablevalue: false
    },
    {
        value: "NZ",
        label: "New Zealand",
        clearablevalue: false
    },
    {
        value: "NI",
        label: "Nicaragua",
        clearablevalue: false
    },
    {
        value: "NE",
        label: "Niger",
        clearablevalue: false
    },
    {
        value: "NG",
        label: "Nigeria",
        clearablevalue: false
    },
    {
        value: "NU",
        label: "Niue",
        clearablevalue: false
    },
    {
        value: "NF",
        label: "Norfolk Island",
        clearablevalue: false
    },
    {
        value: "MP",
        label: "Northern Mariana Islands",
        clearablevalue: false
    },
    {
        value: "NO",
        label: "Norway",
        clearablevalue: false
    },
    {
        value: "OM",
        label: "Oman",
        clearablevalue: false
    },
    {
        value: "PK",
        label: "Pakistan",
        clearablevalue: false
    },
    {
        value: "PW",
        label: "Palau",
        clearablevalue: false
    },
    {
        value: "PS",
        label: "Palestine",
        clearablevalue: false
    },
    {
        value: "PA",
        label: "Panama",
        clearablevalue: false
    },
    {
        value: "PG",
        label: "Papua New Guinea",
        clearablevalue: false
    },
    {
        value: "PY",
        label: "Paraguay",
        clearablevalue: false
    },
    {
        value: "PE",
        label: "Peru",
        clearablevalue: false
    },
    {
        value: "PH",
        label: "Philippines",
        clearablevalue: false
    },
    {
        value: "PN",
        label: "Pitcairn",
        clearablevalue: false
    },
    {
        value: "PL",
        label: "Poland",
        clearablevalue: false
    },
    {
        value: "PT",
        label: "Portugal",
        clearablevalue: false
    },
    {
        value: "PR",
        label: "Puerto Rico",
        clearablevalue: false
    },
    {
        value: "QA",
        label: "Qatar",
        clearablevalue: false
    },
    {
        value: "RE",
        label: "Réunion",
        clearablevalue: false
    },
    {
        value: "RO",
        label: "Romania",
        clearablevalue: false
    },
    {
        value: "RU",
        label: "Russian Federation",
        clearablevalue: false
    },
    {
        value: "RW",
        label: "Rwanda",
        clearablevalue: false
    },
    {
        value: "BL",
        label: "Saint Barthélemy",
        clearablevalue: false
    },
    {
        value: "SH",
        label: "Saint Helena",
        clearablevalue: false
    },
    {
        value: "KN",
        label: "Saint Kitts and Nevis",
        clearablevalue: false
    },
    {
        value: "LC",
        label: "Saint Lucia",
        clearablevalue: false
    },
    {
        value: "MF",
        label: "Saint Martin (French part)",
        clearablevalue: false
    },
    {
        value: "PM",
        label: "Saint Pierre and Miquelon",
        clearablevalue: false
    },
    {
        value: "VC",
        label: "Saint Vincent and the Grenadines",
        clearablevalue: false
    },
    {
        value: "WS",
        label: "Samoa",
        clearablevalue: false
    },
    {
        value: "SM",
        label: "San Marino",
        clearablevalue: false
    },
    {
        value: "ST",
        label: "Sao Tome and Principe",
        clearablevalue: false
    },
    {
        value: "SA",
        label: "Saudi Arabia",
        clearablevalue: false
    },
    {
        value: "SN",
        label: "Senegal",
        clearablevalue: false
    },
    {
        value: "RS",
        label: "Serbia",
        clearablevalue: false
    },
    {
        value: "SC",
        label: "Seychelles",
        clearablevalue: false
    },
    {
        value: "SL",
        label: "Sierra Leone",
        clearablevalue: false
    },
    {
        value: "SG",
        label: "Singapore",
        clearablevalue: false
    },
    {
        value: "SX",
        label: "Sint Maarten (Dutch part)",
        clearablevalue: false
    },
    {
        value: "SK",
        label: "Slovakia",
        clearablevalue: false
    },
    {
        value: "SI",
        label: "Slovenia",
        clearablevalue: false
    },
    {
        value: "SB",
        label: "Solomon Islands",
        clearablevalue: false
    },
    {
        value: "SO",
        label: "Somalia",
        clearablevalue: false
    },
    {
        value: "ZA",
        label: "South Africa",
        clearablevalue: false
    },
    {
        value: "GS",
        label: "South Georgia and the South Sandwich Islands",
        clearablevalue: false
    },
    {
        value: "SS",
        label: "South Sudan",
        clearablevalue: false
    },
    {
        value: "ES",
        label: "Spain",
        clearablevalue: false
    },
    {
        value: "LK",
        label: "Sri Lanka",
        clearablevalue: false
    },
    {
        value: "SD",
        label: "Sudan",
        clearablevalue: false
    },
    {
        value: "SR",
        label: "Suriname",
        clearablevalue: false
    },
    {
        value: "SJ",
        label: "Svalbard and Jan Mayen",
        clearablevalue: false
    },
    {
        value: "SZ",
        label: "Swaziland",
        clearablevalue: false
    },
    {
        value: "SE",
        label: "Sweden",
        clearablevalue: false
    },
    {
        value: "CH",
        label: "Switzerland",
        clearablevalue: false
    },
    {
        value: "SY",
        label: "Syrian Arab Republic",
        clearablevalue: false
    },
    {
        value: "TW",
        label: "Taiwan",
        clearablevalue: false
    },
    {
        value: "TJ",
        label: "Tajikistan",
        clearablevalue: false
    },
    {
        value: "TZ",
        label: "Tanzania",
        clearablevalue: false
    },
    {
        value: "TH",
        label: "Thailand",
        clearablevalue: false
    },
    {
        value: "TL",
        label: "Timor-Leste",
        clearablevalue: false
    },
    {
        value: "TG",
        label: "Togo",
        clearablevalue: false
    },
    {
        value: "TK",
        label: "Tokelau",
        clearablevalue: false
    },
    {
        value: "TO",
        label: "Tonga",
        clearablevalue: false
    },
    {
        value: "TT",
        label: "Trinidad and Tobago",
        clearablevalue: false
    },
    {
        value: "TN",
        label: "Tunisia",
        clearablevalue: false
    },
    {
        value: "TR",
        label: "Turkey",
        clearablevalue: false
    },
    {
        value: "TM",
        label: "Turkmenistan",
        clearablevalue: false
    },
    {
        value: "TC",
        label: "Turks and Caicos Islands",
        clearablevalue: false
    },
    {
        value: "TV",
        label: "Tuvalu",
        clearablevalue: false
    },
    {
        value: "UG",
        label: "Uganda",
        clearablevalue: false
    },
    {
        value: "UA",
        label: "Ukraine",
        clearablevalue: false
    },
    {
        value: "AE",
        label: "United Arab Emirates",
        clearablevalue: false
    },
    {
        value: "GB",
        label: "United Kingdom of Great Britain and Northern Ireland (UK)",
        clearablevalue: false
    },
    {
        value: "US",
        label: "United States of America (USA)",
        clearablevalue: false
    },
    {
        value: "UM",
        label: "United States Minor Outlying Islands",
        clearablevalue: false
    },
    {
        value: "UY",
        label: "Uruguay",
        clearablevalue: false
    },
    {
        value: "UZ",
        label: "Uzbekistan",
        clearablevalue: false
    },
    {
        value: "VU",
        label: "Vanuatu",
        clearablevalue: false
    },
    {
        value: "VE",
        label: "Venezuela (Bolivarian Republic of)",
        clearablevalue: false
    },
    {
        value: "VN",
        label: "Viet Nam",
        clearablevalue: false
    },
    {
        value: "VG",
        label: "Virgin Islands (British)",
        clearablevalue: false
    },
    {
        value: "VI",
        label: "Virgin Islands (U.S.)",
        clearablevalue: false
    },
    {
        value: "WF",
        label: "Wallis and Futuna",
        clearablevalue: false
    },
    {
        value: "EH",
        label: "Western Sahara",
        clearablevalue: false
    },
    {
        value: "YE",
        label: "Yemen",
        clearablevalue: false
    },
    {
        value: "ZM",
        label: "Zambia",
        clearablevalue: false
    },
    {
        value: "ZW",
        label: "Zimbabwe",
        clearablevalue: false
    }
]
export default countryOptions;