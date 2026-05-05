let Style = {
    iPhone:{ //16
        "width": "393px",
    },
    tekiou: function() {
        for (let section in this) {
            if (section == 'apply') continue;
            for (let key in this[section]) {
                document.documentElement.style
                    .setProperty(`--${section}-${key}`, this[section][key]);
            }
        }
    }
}

const Fonts = [
    // {src:'comicsans', type:'ttf'},
];

const Images = {
    systems:['error'],
}

const Sounds = {
    // se:['error'],
    // bgm:[],
}

const Drinks = [
    // ['水','牛乳','お茶','あがり','オレンジジュース','グレープジュース','カルピス','コーヒー','モンスターエネルギードリンク','ビール','ミックスジュース','コーヒー牛乳','フルーツ牛乳','ミックス牛乳','オレピス','グレピス','コヒピス','ミルピス','薄めたお茶','薄めた牛乳','薄めたオレンジジュース','薄めたグレープジュース','薄めたコーヒー','薄めたカルピス','薄めたビール'];
    {
        can:1,
        name:'水',
        // descはいったん後で。
        make:['water'],
        price:110,
    },
    {
        can:1,
        name:'牛乳',
        betu:['ミルク', 'ホットミルク'],
        make:['milk'],
        price:130,
    }
]