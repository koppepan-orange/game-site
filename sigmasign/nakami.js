// #region main
let mainD = document.getElementById('main');
let mainC = {
    spa: null,
    
    mvlsD: document.getElementById('movlis'),
     mvlsLD: document.querySelector('#movlis .list'),
    mvlsi: 0
}
let mainF = {};
mainF.move = (to) => {
    if(mainC.spa == to) return console.log('どういうわけか もう そこにいる');
	if(!to) return console.error(`せんぱ〜い？${to}ってどこですか〜？笑`);
	
	for(let a of Spaces) document.getElementById(a.name).classList.remove('show');
    document.getElementById(to).classList.add('show');
    mainC.spa = to;

    history.replaceState(null, "", `?${to}`);
}

mainF.load = () => {
    for(let spa of Spaces){
        let div = document.getElementById(spa.name);
        if(!div) continue;

        div.style.zIndex = spa.rank;
        div.style.background = spa.back;
    }
}

//#region movlis
for(let n of Spaces){
    let li = document.createElement('div');
    li.textContent = n.name;
    li.className = 'item';

    li.addEventListener('click', () => mainF.move(n.name));

    mainC.mvlsLD.appendChild(li);
}
document.addEventListener('keydown', (e) => {
    if(e.key != 'm' || mainC.mvlsi) return;
    mainC.mvlsD.style.left = `${OBS.mx - mainC.mvlsD.offsetWidth/2}px`;
    mainC.mvlsD.style.top = `${OBS.my}px`;
    mainC.mvlsD.classList.add('tog');
    mainC.mvlsi = 1;
})
document.addEventListener('keyup',e => {
    if(e.key != 'm') return;
    mainC.mvlsD.classList.remove('tog');
    mainC.mvlsi = 0;
})
//#endregion

//#endregion main

function findGeneric(list, type, name, extraCheck = null){
    let data;
    if(extraCheck) data = extraCheck(list, name);
     else data = list.find(a => a.name == name || a.jpnm == name);
    if(data) return data;
    
    console.log(`[find] ${type}で、「${name}」っていうものはないらしいです`);
    return 0;
}
const findTarget = (name) => findGeneric(Targets, "Targets", name);

let homD = document.getElementById("home");
let homC = {
    Ds:{
        start:homD.querySelector(".bt.start"),
        startle:homD.querySelector(".bt.startle"),
        desc:homD.querySelector(".bt.desc")
    }
}
let homF = {};

homF.start = () => {
    mainF.move("select");
}
homC.Ds["start"].addEventListener("click", homF.start);

homF.desc = () => {
    let div = new DBdesc("assets/txts/howtoplay.txt");
    div.append(homD);
}
homC.Ds["desc"].addEventListener("click", homF.desc)


// #region sel
let selD = document.getElementById("select");
let selC = {
    Ds:{
        grid:selD.querySelector(".grid"),
    }
}
let selF = {};

selF.load = () => {
    let griD = selC.Ds["grid"];
    for(let target of Targets){
        let img = document.createElement("img");
        img.src = `assets/images/targets/${target.img ?? target.name}.png`;

        let label = El("div", "label");
        label.textContent = target.jpnm;

        let div = El("div", "mono", [img, label]);
        div.addEventListener("click", () => {
            selF.fight(target.name);
        })

        griD.appendChild(div);
    }
}

selF.fight = async(name) => {
    if(batC.ing) return 0;
    let data = Targets.find(a => a.name == name);
    if(!data) return console.error(`data「${name}」が見つかりません`);

    mainF.move("battle");
    batC.target = name;

    batC.obs.length = 0;
    // 枠の生成処理（selF.fight などで呼ぶ）
    let size = batC.wack[0];
    let thick = batC.wack[1];
    let cx = batC.wid/2;
    let cy = batC.hei-150;

    // 上・下・左・右の4枚の壁を生成（ID: -1 〜 -4）
    let wallT = new batA_ob(cx, cy-size/2, size, thick, 0, [], {id:-1, cols:["black"]});
    let wallL = new batA_ob(cx-size/2, cy, thick, size, 0, [], {id:-2, cols:["black"]});
    let wallB = new batA_ob(cx, cy+size/2, size, thick, 0, [], {id:-3, cols:["black"]});
    let wallR = new batA_ob(cx+size/2, cy, thick, size, 0, [], {id:-4, cols:["black"]});

    wallT.add();
    wallB.add();
    wallL.add();
    wallR.add();

    let player = new batA_ob(
        batC.wid/2, 
        batC.hei - 180,
        0,
        0,
        0,
        [],
        {
            id: 0,
            zock: "systems",
            name: "heart",
            maxhp: 20
        }
    );

    let target = new batA_ob(
        batC.wid/2,
        150, 
        0,
        0,
        0,
        [],
        {
            id: 1,
            zock: data.zock ?? "systems",
            name: data.img ?? data.name,
            maxhp: data.maxhp,
        }
    );

    player.add();
    target.add();

    batF.start();
}
// #endregion

// #region bat
let batD = document.getElementById("battle");
let batC = {
    Ds:{

    },
    can:batD.querySelector("canvas"),
    ctx:batD.querySelector("canvas").getContext('2d'),
    wid:393,
    hei:700,
    wack:[150, 5],
    size:30,

    loop:0,
    ing:0,
    waiting:0,

    target: null,

    obs:[]
}
let batF = {};

class batA_ob {
    constructor(x, y, w = 0, h = 0, dir = 0, props = [], data = {}) {
        this.id = data.id ?? batC.obs.length;
        this.x = x;
        this.y = y;
        this.w = w || batC.size;
        this.h = h || batC.size;
        this.dir = dir;

        // scratchのアレ。 | はい: 全方位, まあ: 左右のみ, いえ: 無し
        this.rotation = data.rotation || "はい";

        this.zock = data.zock || "systems";
        this.name = data.name || "error";
        this.img = data.img || null;

        this.vx = data.vx || 0;
        this.vy = data.vy || 0;
        this.ax = data.ax || 0;
        this.ay = data.ay || 0;
        this.masa = 1; //摩擦。地面参照なのでまずは
        
        this.maxhp = data.maxhp ?? 1;
        this.hp = 1;
        this.cols = data.cols || [];
        this.stats = data.stats || [];

        let hasp = (name) => {return props.find(a => a.startsWith(name))?.split("_")};
        if(hasp("重力")) ay = 0.2;

        let サイズ = hasp("サイズ");
        if(サイズ){
            let vai = +サイズ[1]/100;
            this.w *= vai;
            this.h *= vai;
        }
    }
    add(){
        batC.obs.push(this);
    }

    // 物理
    calc(){
        this.vx += this.ax;
        this.vy += this.ay;

        this.vx *= this.masa;
        this.vy *= this.masa;

        this.x += this.vx;
        this.y += this.vy;

        this.ax = 0;
        this.ay = 0;
    }
    push(x, y){
        this.ax += x;
        this.ay += y;
    }
    move(d){
        let rad = this.dir * (Math.PI / 180);
        this.x += Math.cos(rad) * d;
        this.y += Math.sin(rad) * d;
    }
    set(x, y){
        this.x = x;
        this.y = y;
    }
    koheX(x){this.x += x}
    koheY(y){this.y += y}
    
    // 美術
    draw(){
        let ctx = batC.ctx;
         ctx.save();
        ctx.translate(this.x, this.y);

        if (this.rotation == "はい"){
            // 元のイラストが90度（右）基準なので、描画時に90度引いて回転を補正
            ctx.rotate((this.dir - 90) * (Math.PI / 180));
        }
        if (this.rotation == "まあ"){
            // 角度が180度〜360度（左方向）の時は左右反転
            let normalizedDir = (this.dir % 360 + 360) % 360;
            if (normalizedDir > 90 && normalizedDir < 270) {
                ctx.scale(-1, 1);
            }
        }
        // "いえ" の場合は回転せず描画

        // 画像の中心を座標の基準点にして描画
        let img = images[this.zock]?.[this.img ?? this.name] ?? images["systems"]["error"];
        ctx.drawImage(img, -this.w / 2, -this.h / 2, this.w, this.h);

         ctx.restore();
    }
}
batF.ob = (code, who = 0, are = 0) => {
    if(typeof code == "number"){
        let ob = batC.obs.find(o => o.id == code);
        if(ob) return ob;
        else return null;
    }
    
    if(code == "player") return batF.ob(0);
    if(code == "target") return batF.ob(1);
    if(code == "me" && who) return batF.ob(who.id);
    if(code == "he" && are) return batF.ob(are.id);

    return 0;
}

batF.resize = () => {
    let can = batC.can;
    can.width = batC.wid;
    can.height = batC.hei;
}

batF.mathPos = (p) => {
    if(Array.isArray(p)) return {x:p[0], y:p[1]};

    let ob = batF.ob;
    if(ob) return {x:ob.x, y:ob.y};

    return {x: 0, y: 0};
}
batF.mathDir = (from, d) => {
    // 角度解決ヘルパー（発射元座標 -> ターゲットへの角度）
    
    if(Array.isArray(d)) return d[0]; //普通の角度
    
    // "player"(0), "target"(1), または ID数値が指定された場合はその対象への角度を計算
    let to = batF.mathPos(d);
    let dx = to.x - from.x;
    let dy = to.y - from.y;
    return Math.atan2(dy, dx) * (180/Math.PI);
}

batF.draw = () => {
    let ctx = batC.ctx;
    ctx.clearRect(0, 0, batC.wid, batC.hei);

    for(let ob of batC.obs){
        ob.draw();
    }

    // let wack = batC.wack;
    // if(wack){
    //     let x = (batC.wid/2)-(wack[0]/2);
    //     let y = (batC.hei-150)-(wack[0]/2);

    //      ctx.save();
    //     ctx.lineWidth = wack[1];
    //     ctx.strokeStyle = Style.ki["bor"];
    //     ctx.strokeRect(x, y, wack[0], wack[0]);
    //      ctx.restore();
    // }
}

batF.face = (a, b) => {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    let r1 = a.w/2;
    let r2 = b.w/2;
    return Math.hypot(dx, dy) < (r1 + r2);
}
batF.pControl = () => {
    let p = batF.ob(0);
    if(!p) return;

    let speed = 3;
    let dx = 0;
    let dy = 0;

    if(OBS.keys["w"] || OBS.keys["arrowup"]) dy -= 1;
    if(OBS.keys["s"] || OBS.keys["arrowdown"]) dy += 1;
    if(OBS.keys["a"] || OBS.keys["arrowleft"]) dx -= 1;
    if(OBS.keys["d"] || OBS.keys["arrowright"]) dx += 1;

    // 入力方向の保持
    if(dx != 0 || dy != 0) p.lastDir = {x:dx, y:dy};

    // ダッシュ判定
    if(p.stats.includes("走れるよ") && OBS.keys["space"] && !p.dashing){
        p.dashing = true;
        let dir = p.lastDir || {x:0, y:-1};
        p.dashEnd = Date.now() + 1000;
        p.dashDir = dir;
    }

    if(p.dashing){
        if(Date.now() < p.dashEnd){
            dx = p.dashDir.x*10;
            dy = p.dashDir.y*10;
        }
        if(Date.now() >= p.dashEnd) p.dashing = false;
    }

    let moveX = dx*speed;
    p.x += moveX;
    for(let ob of batC.obs){
        if(ob.id == p.id) continue;
        if(ob.cols.includes("black") && batF.face(p, ob)) p.x -= moveX;
    }

    let moveY = dy*speed;
    p.y += moveY;
    for(let ob of batC.obs){
        if(ob.id == p.id) continue;
        if(ob.cols.includes("black") && batF.face(p, ob)) p.y -= moveY;
    }
}
batF.update = () => {
    batF.pControl();

    for(let ob of batC.obs){
        ob.calc();
    }
    
    // プレイヤーと弾（white）の衝突判定
    let p = batF.ob(0);
    if(p){
        for(let ob of batC.obs){
            if(ob.id == p.id) continue;
            if(ob.cols.includes("white") && batF.face(p, ob)){
                if(!ob.stats.includes("貫通")) ob.hp = 0;
                
                p.hp -= 1;
                if(p.hp <= 0) batF.lose();
            }
        }
    }

    batC.obs = batC.obs.filter(a => {
        if(a.id == -1) return 1;
        if(a.x < 0 || batC.wid < a.x || a.y < 0 || batC.hei < a.y) return 0;
        if(a.hp <= 0) return 0;
        return 1;
    });
}

batF.lose = () => {
    batF.end();
    for(let i=0; i<20; i++){
        nicoText("あとは 車 で話すわ");
    }

    window.location.reload();
}

batF.gameloop = () => {
    if(!batC.loop) return 0;

    batF.update();
    batF.draw();
    requestAnimationFrame(batF.gameloop);
}
batF.targetLoop = async() => {
    let data = findTarget(batC.target);

    let target = batF.ob(1);
    let arr = data.acts.filter(a => !a.no);
     let pes = arr.map(a => a.h);
    while(batC.ing){
        if(!batC.loop){
            await delay(100);
            continue;
        }

        let act = arrayGacha(arr, pes);
        await act.func();

        if(target.hp <= 0) batF.stop();

        // 次の行動までのインターバル
        await delay(1000);
    }
};

batF.start = () => {
    if(batC.ing) return 0;
    batC.ing = 1;
    batC.loop = 1;
    batF.gameloop();
    batF.targetLoop();
}
batF.stop = () => {
    if(!batC.ing) return 0;
    batC.loop = 0;
}
batF.restart = () => {
    if(!batC.ing) return 0;
    batC.loop = 1;
    batF.gameloop();
    // batF.targetLoop(); //あぶね
}
batF.end = () => {
    if(!batC.ing) return 0;
    batC.ing = 0;
     batC.waiting = 0;
    batC.loop = 0;
}



//以下はどっかから引っ張ってきたやつ。ただのメモ用です。
function adjustHoriz(left, right){
	for(let y=0; y<8; y++){
		const L = left[y][7], R = right[y][0];
		if(L == 0 && R == 1){
			const passable =
			 (right[y][1] == 0) ||
			 (y>0 && right[y-1][0] == 0) ||
			 (y<7 && right[y+1][0] == 0);
			if(passable) right[y][0] = 0;
			else left[y][7] = 1;
		}
		if(L == 1 && R == 0){
			const passable = 
			 (left[y][6] == 0) ||
			 (y>0 && left[y-1][7] == 0) || 
			 (y<7 && left[y+1][7] == 0);
			if(passable) left[y][7] = 0;
			else right[y][0] = 1;
		}
	}
}
function adjustVert(top, bottom){
	for(let x=0; x<8; x++){
		const T = top[7][x], B = bottom[0][x];
		if(T == 0 && B == 1){
			const passable =
			 (bottom[1][x] == 0) ||
			 (x>0 && bottom[0][x-1] == 0) ||
			 (x<7 && bottom[0][x+1] == 0);
			if(passable) bottom[0][x] = 0;
			else top[7][x] = 1;
		}
		if(T===1 && B===0){
			const passable =
			 (top[6][x] == 0) ||
			 (x>0 && top[7][x-1] == 0) ||
			 (x<7 && top[7][x+1] == 0);
			if(passable) top[7][x] = 0;
			else bottom[0][x] = 1;
		}
	}
}
// #endregion

//#region start
function start(){
    Style.tekiou();
    OBS.load();

    mainF.load();
    selF.load();
    batF.resize();

    let hash = location.hash.replace("?", "");
    let space = Spaces.find(a => a.name == hash);
    if(!space) space = Spaces.find(a => a.sho);
    mainF.move(space.name);
}
//#endregion

//#region DOM
let LoadOfWait = async() => await loaF.load();
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", init);
}
else init();

async function init() {
    await LoadOfWait();
}
//#endregion

