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

let Areas = [
    {
        name:"loby",
        jpnm:"ろびー",
        desc:"ろびんふっと",
    },
    {
        name:"mine",
        jpnm:"鉱山だよ",
        desc:"石が掘れます。",
    },
    {
        name:"shichi",
        jpnm:"質屋だよ",
        desc:"なんか売れます。うれしいね。",
    },
    {
        name:"shop",
        jpnm:"店だよ",
        desc:"なぜかどこにでもあるコンビニ「セイムマート」",
    },
    {
        name:"still",
        jpnm:"まだだよ",
        desc:"[[リンクは削除されました]]",
    },
]

let Ores = [
    {
        name:'coal',
        jpnm:"石炭",
        desc:"",
        p:39,
        priceR:[10, 30],
        price:30,
        x:0
    },
    {
        name:'iron',
        jpnm:"鉄",
        desc:"",
        p:32,
        priceR:[30, 100],
        price:100,
        x:0
    },
    {
        name:'ruby',
        jpnm:"ルビー",
        desc:"",
        p:27,
        priceR:[60, 200],
        price:200,
        x:0
    },
    {
        name:'gold',
        jpnm:"金",
        desc:"",
        p:21,
        priceR:[100, 400],
        price:400,
        x:0
    },
    {
        name:'larimar',
        jpnm:"ラリマール",
        desc:"",
        p:12,
        priceR:[300, 700],
        price:700,
        x:0
    }
]