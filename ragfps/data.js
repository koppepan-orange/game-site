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
        on: 0, // 何も起きない壁
    },
    {
        name: "bleck", //乗って、その後方向入力をすると壊れる。下ボタンでも上ボタンでも壊れるのでち
        jpnm: "壊れかけのレディオ",
        on: "atsk",
        onF: (x, y) => {
            // console.log(`${x}, ${y}のブロックが壊れました！`);
            staF.delmap(x, y);
        }
    },
    {
        name: "box", //特殊。押せる。ジャンプでも押せるし、下向きも押せる むずそ～～
        jpnm: "おせる箱",
        on: "osu",
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
        onF: async() => {
            let p = staC.p;
            let dir = p.dir;

            let [xy, num] = staF.separate(dir)
            // console.log(xy, num)
            
            await staF.move(xy, num);
            staF.draw();
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
        jpnm: "ぶおぉーん",
        on: "step",
        onF: async(x, y) => {
            let p = staC.p;
            let dir = p.dir;
            let edge = staC.row-1;
            let [xy, num] = staF.separate(dir);
            if(xy == y) return 1;

            let rest = 0;
            if(dir == 1) rest = edge - x;
            if(dir == 3) rest = x;

            for(let i=0; i<rest; i++){
                let tx = p.x + (xy == "x" ? num : 0);
                let ty = p.y+1;
                
                let res = staF.search(tx, ty);
                if(res) break;

                let self = staC.map[x][y];
                staC.map[x][y] = 0;

                x = tx;
                y = ty;
                self.x = x;
                self.y = y;

                staF.move("x", num);
                staC.map[x][y] = self;
            }


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