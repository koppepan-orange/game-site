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
// const findKaris = (name) => findGeneric(Karis, "Karis", name);

function calclation(gen, code){
    if(typeof gen == "string") gen = +gen;
    if(typeof gen != "number" || isNaN(gen)) return console.error(`[calclation] ${gen}は数値ではないので計算できません`);
    // let sym = code.slice(0, 1);
    // let num = +code.slice(1);
    let sum = eval(`${gen}${code}`);
    return sum;
}

let homD = document.getElementById("home");
let can = homD.querySelector("canvas.main");
let ctx = can.getContext2d;
function resize(){
    let wid = Style.iPhone["width"];
    can.width = wid;
    can.height = 2*wid;
}

// まずは1人モードを完成させる
let obs = [];
class Ob{
    constructor(x, y, w = 0, h = 0, dir = 0, data = {}) {
        this.id = data.id ?? obs.length;
        this.x = x;
        this.y = y;
        this.w = w || size;
        this.h = h || size;
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
    }
    add(){
        obs.push(this);
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
         ctx.save();
        ctx.translate(this.x, this.y);

        if(this.rotation == "はい"){
            // 元のイラストが90度（右）基準なので、描画時に90度引いて回転を補正
            ctx.rotate((this.dir - 90) * (Math.PI / 180));
        }
        if(this.rotation == "まあ"){
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
function obMake(col = 0){
    if(!col) return 0;
    
}


//#region start
function start(){
    Style.tekiou();
    OBS.load();

    mainF.load();

    resize();

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