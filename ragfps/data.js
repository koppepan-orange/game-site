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
    {src:'comicsans', type:'ttf'},
];

const Images = {
    systems:['error'],
    skins:['normal', 'teethcar'],
    blocks:['block', 'bleck', 'box', 'ice', 'water', 'apple', 'baloon', 'boost'],
}

const Sounds = {
    // se:['error'],
    // bgm:[],
}

const Spaces = [
    { name:'stage', rank:2, back:'#f3fff0', sho:1 },
];



const Blocks = [
    /*
    on:0/1 1ならonFで乗った時動作。...ん？「乗って、次に方向を入力したあと」に発動するはどうするんだ？
    今、あどゔぁいすをもらいましたーー、こんなんなんぼあってもいいですからね
    */

    {
        name: "block",
        jpnm: "普通のブロック",
        on: null // 何も起きない壁
    },
    {
        name: "bleck", //乗って、その後方向入力をすると壊れる。下ボタンでも上ボタンでも壊れるのでち
        jpnm: "壊れかけのレディオ",
        on: "before_move",
        onF: (x, y) => {
            console.log("メキッ…床が壊れた！");
            staF.delmap(x, y);
        }
    },
    {
        name: "box", //特殊。押せる。ジャンプでも押せるし、下向きも押せる むずそ～～
        jpnm: "おせる箱",
        on: "move_into",
        onF: () => {
            let p = staC.p;
            let dir = p.dir; // 0:上, 1:右, 2:下, 3:左
            let d = 1;
            

        }
    },
    {
        name: "ice", 
        jpnm: "つるつる床", //乗った時、最後に入力した方向にmoveさせる
        on: "step",
        onF: () => {
            let p = staC.p;
            let dir = p.dir;

            let xy = 0;
            if(dir == 1 || dir == 3) xy = "x";
            if(dir == 0 || dir == 2) xy = "y";

            let num = 1;
            if(dir == 0) num = -1;
            if(dir == 3) num = -1;
            
            staF.move(dir, num); // とりあえず1マスだけ動かしてみる。これでいけるはず！
            // dir:x/y, num:1/-1
            // 最後に入力された方向（lastDir, lastNum）に、さらに滑らせる！
            // staF.move(lastDir, lastNum) をもう一回呼ぶイメージね。
        }
    },
    {
        no: 1,
        name: "water", //水内なら自由に動けるが、水外に出ると戻る。
        jpnm: "お水",
        on: "step",
        onF: () => {
            p.state = "フユウ"; // 落下を無効化するバフ（デバフ？）を与える
        }
    },
    //つな 乗るとつかまれて、その場にとどまれる
    {
        name: "apple", //乗るとすぐに下方向に何かにぶつかるまでごと直進する。
        jpnm: "落ちるリンゴ",
        on: "step",
        onF: () => {
            // 下方向に障害物（searchで何か引っかかるか、画面外）にぶつかるまで
            // ループで p.y を増やし続ける
        }
    },
    {
        name: "baloon", //乗るとすぐに上方向に何かにぶつかるまでごと直進する。
        jpnm: "浮かぶ風船",
        on: "step",
        onF: () => {
            // appleの逆。上方向（yマイナス）にぶつかるまで直進！
        }
    },
    {
        name: "boost",  //左右の向いてる方向に何かにぶつかるまでごと直進する
        jpnm: "ダッシュパネル",
        on: "step",
        onF: (data) => {
            // data.dir = "left" とか "right" を持たせておいて、その方向に直進させる
        }
    }
];


const Maps = [
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
]