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

const Spaces = [
    { name:'home', rank:2, back:'#f0f8ff', sho:1 },
];

const CSV = [
    {
        can:1,
        name:'Hiro811',
        hello:'こんにちは！！',
        ordel:'と、',
        order:'で、お願いします！',
        happy:'わーーー！！ありがとうございます！！',
        sader:'ぁ、え、あー..ありがとう....ございます！',
        terr:0 //嫌々ながらも買う->評判は落ちる?
    },
    {
        can:1,
        wait:800,
        name:'RyosuK992',
        hello:'すいませーん！',
        ordel:'と、',
        order:'で。',
        happy:'ありがとうございましたー',
        sader:'..頼んだのと違うんですけど',
        terr:1 //買わない
    },
]

const Drinks = [
    {
        name:'水',
        // descはいったん後で。
        make:['water'],
        price:110,
    },
    {
        name:'牛乳',
        betu:['ミルク', 'ホットミルク'],
        make:['milk'],
        price:130,
    },
    {
        no: 1, //お茶は種類が多い...というか緑茶すら作り方が違う気がする！ので、一旦保留。noは使用不可の合図
        name:'お茶',
        betu:['緑茶', 'あがり', 'ほうじ茶', '玄米茶', '紅茶'],
        make:['tea'],
        price:120,
    },
    {
        name:'オレンジジュース',
        betu:['蜜柑飲料'],
        make:['orange_juice'],
        price:120,
    },
    {
        name:'グレープジュース',
        betu:['葡萄飲料'],
        make:['grape_juice'],
        price:120,
    },
    {
        name:'カルピス',
        betu:['カルピスウォーター'],
        make:['calpis'],
        price:120,
    },
    {
        no: 1, //コーヒーは..そうね....ドリンクバーでやったらガチ勢に怒られそう
        name:'コーヒー',
        betu:['ホットコーヒー'],
        make:['coffee'],
        price:140,
    },
    {
        name:'モンスターエネルギードリンク',
        betu:['モンエネ', '緑のアレ', '私バカです'],
        make:['monene'],
        price:240,
    },
    {
        name:'ビール',
        betu:['ビアー', 'とりあえず生', '生', 'ナマ'],
        make:['beer'],
        price:350,
    },
]

const prefix = [
    // 接頭辞。このリストの0~の順番で、0が最も最左に〜って感じで並ぶ。薄めた オレンジ カルピス みたいな。...?いや待てよ、これ「合わせ作成飲料」と混ざったら死ぬくね？えどしよどしよ
    {
        name: '薄めた',
        make: 'water'
    },
    {
        name: '炭酸化',
        make: 'co2'
    },
    {
        name: 'オレンジ',
        make: 'orange_juice'
    },
    {
        name: 'グレープ',
        make: 'grape_juice'
    },
    {
        name: 'カルピス',
        make: 'calpis'
    },

    
    {
        name: '牛乳',
        make: 'milk',
        ma2: 1 //"末"の意。ma2があると最後に行く。最後に行く場合はindexが大きいほど最後に行く。
    }

]

