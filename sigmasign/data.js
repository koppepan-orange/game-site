(function(){
    let ooD = document.getElementById('logOutput');
    ooD.addEventListener("dblclick", () => ooD.classList.remove("on"));

    let div0 = ooD.querySelector(".logs")
    function hookConsole(type){
        let oldFunc = console[type];
        console[type] = function(){
            oldFunc.apply(console, arguments);

            let text = Array.from(arguments)
            .map(a => {
                if(typeof a == "object") return JSON.stringify(a);
                else return a;
            }).join(" ");

            let div = document.createElement("div");
             div.className = type
             div.innerText = text;
             div0.appendChild(div);
            div0.scrollTop = div0.scrollHeight;

            let arr = div0.children;
            while(40 < arr.length){
                div0.firstElementChild.remove();
            }
        };
    }
    hookConsole("log");
    hookConsole("error");
    hookConsole("warn");

    let codeInput = ooD.querySelector("textarea")
    let runBtn = ooD.querySelector(".bt")

    function executeCode(){
        let code = codeInput.value;
         if(!code) return;

        console.log("> " + code);

        try {
            let result = eval(code);
            console.log(result);
        }
        catch(err){
            // 文法エラーや実行時エラーのキャッチ
            console.error(err);
        }

        codeInput.value = "";
    }

    runBtn.addEventListener('click', executeCode);
    codeInput.addEventListener('keydown', function(e){
        if(e.key == "Enter" && !(e.ctrlKey || e.metaKey || e.shiftKey)){
            e.preventDefault();
            executeCode();
        }
    })
    codeInput.addEventListener("resize", () => {
        runBtn.style.height = codeInput.offsetWidth;
    })
})();

let Style = {
    iPhone:{ //16
        "width": "393px",
    },
    ki:{
        "back": "#000000",
        "bor":  "#ffffff",
        "aima": "#808080"
    },
    tekiou: function(){
        for(let section in this){
            if(section == 'tekiou') continue;
            for(let key in this[section]){
                document.documentElement.style.setProperty(`--${section}-${key}`, this[section][key]);
            }
        }
    }
}

const Fonts = [
    {src:'comicsans', type:'ttf'},
    {src:'papyrus', type:'ttf'},
    {src:'cube12', type:'ttf'},
];

const Images = {
    systems:['error'],
}

const Sounds = {
    // se:['error'],
    // bgm:[],
}

const Secrates = [
    {
        ind:0,
        name:'koppepan',
        arr:['k','o','p','p','e','p','a','n'],
        limit:3,
        func: async function(){
            nicoText('なんにも起こらない＝ヨーン');
        }
    },
    {
        ind:0,
        name:'re',
        arr:['r','e'],
        limit:1,
        func: async function(){
            let img = document.createElement('img');
            img.id = 'hakaisatsu';
            img.src = 'assets/images/systems/hakai_1.png'
            img.dataset.phase = 1;
            document.querySelector('body').appendChild(img);

            setTimeout(() => {
                img.remove();
                this.ind = 0;
                this.limit = 1;
            }, 3000)

            return 0;
        }
    },
    {
        ind:0,
        name:'rere',
        arr:['r','e','r','e'],
        limit:1,
        func: async function(){
            let img = document.getElementById('hakaisatsu');
            if(!img) return;

            img.src = 'assets/images/systems/hakai_2.png'
            img.dataset.phase = 2;

            setTimeout(() => {
                img.remove();
                this.ind = 0;
                this.limit = 1;
            }, 3000)

            return 0;
        }
    },
    {
        ind:0,
        name:'rerere',
        arr:['r','e','r','e','r','e'],
        limit:1,
        func: async function(){
            let img = document.getElementById('hakaisatsu');
            if(!img) return 1;
            console.log(img.dataset.phase);
            if(img.dataset.phase != '2') return 1;
            location.reload();
        }
    },
    {
        ind:0,
        name:'wawawwa',
        arr:['w','a','w','a','w','w','a'],
        limit:'n',
        func: async function(){
            staF.resetP();
        }
    }
]

const Spaces = [
    { name:'home', rank:2, back:Style.ki["back"], sho:1 },
    { name:"select", rank:3, back:Style.ki["back"] },
    { name:"battle", rank:3, back:Style.ki["back"] },
];


const Targets = [
    {
        // 一旦すでにイラストのあるキャラを。動作確認とか練習とか。ここさえできれば拡張できるわけだし
        name:"shrimp",
        jpnm:"えび",
        desc:"何の捻りもない、ただのエビ。基礎的な攻撃しかしてこない。チュートリエル",
        maxhp:40,
        acts:[
			{
				name:"バブル",
				desc:"中くらいのを一発。シンプル。カニすぎる",
                p:"%,hp,>,25",
                h:50,
                func:async function(){
                    Bullets.chock.func("target", "player", 3, ["サイズ_200"]);
                }
			},
			{
                no:1,
				name:"バブルリング",
				desc:"弾が円状に広がるように発射する。", //うーん、、これもむずいな
				p:"",
				h:10,
				func:async function(){// 全方位（360度）に16分割して同時に発射
                    let count = 16;
                    let step = 360 / count;
                    let i = 0;
                    while(i < count){
                        let deg = step * i;
                        Bullets.chock.func("target", [deg], 2.5, ["サイズ_120"]);
                        i++;
                    }
                }
			},
            {
                name:"逃避反射",
                desc:"扇型に5発。4秒後、それぞれは向きを反転させて加速度1を得る", //んきそキャラ作ろうとしてるんだよな俺？？何してる？？？？
                p:"%,hp,>,20", //条件。ないものは""
                h:30, //比重的な。Gachaにはなるので
                func:async function(){// 1. ターゲット（プレイヤー）への基準角度を取得
                    let p = batF.mathPos("target");
                    let baseDir = batF.mathDir(p, "player");

                    // 2. 扇形に5発発射（基準角度の -30度 〜 +30度）
                    let angles = [-30, -15, 0, 15, 30];
                    let firedBullets = [];

                    angles.forEach(offset => {
                        let bullet = Bullets.chock.func("target", [baseDir + offset], 2, ["サイズ_150"]);
                        if(bullet) firedBullets.push(bullet);
                    });

                    // 3. 4秒（4000ms）待機
                    await new Promise(resolve => setTimeout(resolve, 4000));

                    // 4. 生き残っている弾の向きを反転させ、加速度を付与
                    firedBullets.forEach(b => {
                        // 画面上にまだ存在しているか確認
                        let exists = batC.obs.some(o => o.id == b.id);
                        if(exists){
                            // 角度を反転（180度ずらす）
                            let newRad = (b.dir + 180) * (Math.PI / 180);
                            b.dir = b.dir + 180;
                            
                            // 速度を停止させ、反転方向への加速度を設定
                            b.vx = 0;
                            b.vy = 0;
                            b.ax = Math.cos(newRad) * 1;
                            b.ay = Math.sin(newRad) * 1;
                        }
                    });
                }
            }
        ]
    }
]

const Bullets = {
    chock:{
        name:"chock",
        jpnm:"直線",
        desc:"直線。等速直線運動だけでなく、等加速度とか非等加速度とかいるからきぃつけろよな", //等速のやり方は知らない
        func:(pos, dir = [180], speed = 1, props = []) => {
            let hasp = (name) => {return props.find(a => a.startsWith(name))?.split("_")};
            // pos:: [x, y]のときもあれば"player"のときもあるし、4、(←id)とかの時もあります。
            // dir:: [n]ならnが角度。まあ2要素以上になることはないけどね。あとはposと同じ
            // propsで"等速"とか渡せるようにしてもいいかも。元のコードにあった「hasp」のアレを再利用するとかね。...それここでやる必要あるか？「targetが実行("here", "player", 4, ["重力無視", "等速度"])」をしたら、ターミナル関数を経由してこれになる...と考えるとpropsは必要か
            
            let imgZ = hasp("画像zock")?.[1];
            let imgN = hasp("画像name")?.[1];
            
            let p = batF.mathPos(pos);
            let d = batF.mathDir(p, dir);
            let rad = d * (Math.PI/180);

            let vx = Math.cos(rad) * speed;
            let vy = Math.sin(rad) * speed;
            let ax = 0;
            let ay = 0;


            let bullet = new batA_ob(p.x, p.y, 0, 0, d, props, {
                vx: vx,
                vy: vy,
                ax: ax,
                ay: ay,
                zock: imgZ ?? "bullets",
                name: imgN ?? "normal"
            });

            bullet.add();

            return bullet;
        }
    },

    snake:{
        name:"snake",
        jpnm:"へび",
        desc:"ファーストってのがいて、それに追従",
        func:(pos, dir, speed = 3, props = []) => {
            let hasp = (name) => {return props.find(a => a.startsWith(name))?.split("_")};

            let imgZ = hasp("画像zock")?.[1];
            let imgN = hasp("画像name")?.[1];

            let p = batF.mathPos(pos);
            let d = batF.mathDir(p, dir);
            let rad = d*(Math.PI/180);

            // 先頭弾
            let head = new batA_ob(p.x, p.y, 0, 0, d, props, {
                vx: Math.cos(rad)*speed,
                vy: Math.sin(rad)*speed,
                zock: imgZ ?? "bullets",
                name: imgN ?? "head"
            });
            head.add();

            let prev = head;
            let i = 0;
            while(i < count){
                let body = new batA_ob(p.x, p.y, 0, 0, d, props, {
                    zock: imgZ ?? "bullets",
                    name: imgN ?? "normal"
                });
                let tgtObj = prev;
                let origCalc = body.calc.bind(body);

                body.calc = function(){
                    let dx = tgtObj.x - this.x;
                    let dy = tgtObj.y - this.y;
                    let dist = Math.hypot(dx, dy);
                    if(dist > 15){
                        let rad = Math.atan2(dy, dx);
                        this.dir = rad*(180/Math.PI);
                        this.vx = Math.cos(rad)*speed;
                        this.vy = Math.sin(rad)*speed;
                    }
                    if(dist <= 15){
                        this.vx = 0;
                        this.vy = 0;
                    }
                    origCalc();
                };
                body.add();
                prev = body;
                i++;
            }

            return head;
        }

    },

    homi:{
        name:"homi",
        jpnm:"ほみ",
        desc:"目標地点（対象）に向かって常に向きを変えて進み続ける",
        func:(pos, target = "player", speed = 2, props = []) => {
            let hasp = (name) => props.find(a => a.startsWith(name))?.split("_");
            let imgZ = hasp("画像zock")?.[1];
            let imgN = hasp("画像name")?.[1];

            let p = batF.mathPos(pos);
            let bullet = new batA_ob(p.x, p.y, 0, 0, 0, props, {
                zock: imgZ ?? "bullets",
                name: imgN ?? "normal"
            });

            let origCalc = bullet.calc.bind(bullet);
            bullet.calc = function(){
                let tp = batF.mathPos(target);
                let dx = tp.x - this.x;
                let dy = tp.y - this.y;
                let rad = Math.atan2(dy, dx);
                this.dir = rad*(180/Math.PI);
                this.vx = Math.cos(rad)*speed;
                this.vy = Math.sin(rad)*speed;
                origCalc();
            };

            return bullet.add();
        }
    },

    frog:{
        name:"frog",
        jpnm:"かえる",
        desc:"一定フレーム進み、一定フレーム停止を繰り返す弾",
        func:(pos, target = "player", jumpFrame = 20, waitFrame = 20, speed = 5, props = []) => {
            let hasp = (name) => props.find(a => a.startsWith(name))?.split("_");
            let imgZ = hasp("画像zock")?.[1];
            let imgN = hasp("画像name")?.[1];

            let p = batF.mathPos(pos);
            let bullet = new batA_ob(p.x, p.y, 0, 0, 0, props, {
                zock: imgZ ?? "bullets",
                name: imgN ?? "normal"
            });

            let timer = 0;
            let cycle = jumpFrame + waitFrame;
            let origCalc = bullet.calc.bind(bullet);

            bullet.calc = function(){
                let step = timer%cycle;
                if(step == 0){
                    let tp = batF.mathPos(target);
                    let dx = tp.x - this.x;
                    let dy = tp.y - this.y;
                    let rad = Math.atan2(dy, dx);
                    this.dir = rad*(180/Math.PI);
                    this.vx = Math.cos(rad)*speed;
                    this.vy = Math.sin(rad)*speed;
                }
                if(step == jumpFrame){
                    this.vx = 0;
                    this.vy = 0;
                }
                timer++;
                origCalc();
            };

            return bullet.add();
        }
    }
}

