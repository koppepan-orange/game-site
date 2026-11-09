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
const findBlocks = (name) => findGeneric(Blocks, "Block", name);
const findItems = (name) => findGeneric(Items, "Item", name);

function calclation(gen, code){
    if(typeof gen == "string") gen = +gen;
    if(typeof gen != "number" || isNaN(gen)) return console.error(`[calclation] ${gen}は数値ではないので計算できません`);
    // let sym = code.slice(0, 1);
    // let num = +code.slice(1);
    let sum = eval(`${gen}${code}`);
    return sum;
}


let homD = document.getElementById("home");
let homC = {
    Ds:{
        "holeStart": homD.querySelector(".unit1 .bt.start")
    }
}


let holD = document.getElementById("hole");
let holC = {
    Ds:{

    },
    can: holD.querySelector("canvas"),
    ctx: holD.querySelector("canvas").getContext("2d"),

    map: [],
    suki: 2,
    yok: 10,
    tat: 18,
    size: null,

    p:{
        x: 0,
        y: 0,
        img: "digger",
        pickPower: 1,
    },

    inv: [],
    maxItem: 64,
}
let holF = {};
holF.start = () => {
    holF.resize();
    holF.startLoad();
    mainF.move("hole");

    holF.spawn(0, 1);
}
homC.Ds["holeStart"].addEventListener("click", holF.start);


holF.resize = () => {
    let wid = Style.iPhone.width;
    let slice = +(wid.slice(0, -2));
    holC.can.width = slice;
    holC.can.style.width = wid;

    holC.size = slice/holC.yok;
    
    let hei = holC.size * holC.tat;
    holC.can.style.height = `${hei}px`;
    holC.can.height = hei;
}

holF.startLoad = () => {
    let dawn = holC.tat;
    holF.mapMake(dawn);
    holF.draw();
}
holF.mapMake = (dawn = 10) => {
    let map = [];
    for(let y = 0; y < dawn; y++){
        map[y] = [];
        if(y < holC.suki) continue;
        for(let x = 0; x < holC.yok; x++){
            let data = arrayGacha(Blocks, Blocks.map(a => a.p ?? 3));
            let block = {
                x, y,
                name: data.name,
                color: data.col,
            }
            if(data.img) block.img = 1;
            map[y][x] = block;
        }
    }
    holC.map = map;
}

holF.spawn = (x = 0, y = 1) => {
    let block = holC.map[y][x];
    if(block) return nicoText(`[spawn] ${x},${y}の位置にブロックがあるのでスポーンできません`);
    // block.img = holC.p.img;

    holC.p.x = x;
    holC.p.y = y;

    holF.draw();
}

holF.draw = () => {
    // clear
    holC.ctx.clearRect(0, 0, holC.can.width, holC.can.height);

    // grid
    holF.drawGrid();

    // blocks
    let size = holC.size;
    for(let y = 0; y < holC.map.length; y++){
        for(let x = 0; x < holC.map[y].length; x++){
            let block = holC.map[y][x];
            let px = block.x * size;
            let py = block.y * size;
            if(block.img){
                let img;
                if(images["blocks"] && images["blocks"][block.name]) img = images["blocks"][block.name].cloneNode();
                else img = images["systems"]["error"].cloneNode();

                holC.ctx.drawImage(img, px, py, size, size);
            }
            else if(block.name != "none"){
                holC.ctx.fillStyle = block.color ?? "#42220b";
                holC.ctx.fillRect(px, py, size, size);
            }
            else{} //何もしない→描画なし
        }
    }
    
    // p
    let p = holC.p;
    let pImg = images["systems"][p.img];
    if(!pImg) pImg = images["systems"]["error"];
    holC.ctx.drawImage(pImg, p.x*size, p.y*size, size, size);
    
}
holF.drawGrid = () => {
    holC.ctx.strokeStyle = '#838383';
    for(let i = 0; i <= holC.yok; i++){
        holC.ctx.beginPath();
        holC.ctx.moveTo(i * holC.size, 0);
        holC.ctx.lineTo(i * holC.size, holC.can.height);
        holC.ctx.stroke();
    }
    for(let y = 0; y <= holC.tat; y++){
        holC.ctx.beginPath();
        holC.ctx.moveTo(0, y * holC.size);
        holC.ctx.lineTo(holC.can.width, y * holC.size);
        holC.ctx.stroke();
    }
}

// holF.calc = () => {
//     // p
    
// }
holF.moveP = (x, y) => {
    let p = holC.p;
    let newX = p.x + x;
    let newY = p.y + y;
    
    // 判定
    if(newX < 0 || newX >= holC.yok) return console.log(`[moveP] ${newX}は横の範囲外です`);
    if(newY < 0 || newY >= holC.tat) return console.log(`[moveP] ${newY}は縦の範囲外です`);

    let block = holC.map[newY][newX];
    if(block && block.name != "none"){
        // 惚れないブロックかどうか 「照れんなよ？」
        let data = findBlocks(block.name);
        if(!data) return console.log(`[moveP] ない（？） `);
        if(p.pickPower < data.strong) return console.log(`[moveP] ${newX},${newY}のブロックは掘れないブロックなので移動できません`);

        // 掘るわよ
        let name = block.name;
        invF.main("add", name, 1);
        holC.map[newY][newX] = {x:newX, y:newY, name:"none"};
        holF.draw();
    }

    // 移動
    p.x = newX;
    p.y = newY;
    holF.draw();
}
document.addEventListener("keyup", e => {
    let key = e.key.toLowerCase();

    if(key == "arrowup" || key == "w") holF.moveP(0, -1);
    else if(key == "arrowdown" || key == "s") holF.moveP(0, 1);
    else if(key == "arrowleft" || key == "a") holF.moveP(-1, 0);
    else if(key == "arrowright" || key == "d") holF.moveP(1, 0);
})



let inv = [];
let invD = document.getElementById("inventory");
let invC = {
    tog: 0,
    row: 9,
    size: 4
}
let invF = {};
invF.tog = (code = null) => {
    if(code == 1) invC.tog = 1;
    else if(code == 0) invC.tog = 0;
    else invC.tog = fl(invC.tog);

    if(invC.tog) invD.classList.add("show");
    else invD.classList.remove("show");
}
// key:e
document.addEventListener("keyup", e => {
    let key = e.key.toLowerCase();
    if(key == "e") invF.tog();
})

invF.load = () => {
    // row*size
    for(let i=0; i<invC.row*invC.size; i++){
        let div = document.createElement("div");
        div.className = `item i${i}`;
        invD.querySelector(".main").appendChild(div);
    }
}
invF.tekiou = () => {
    for(let i=0; i<invC.row*invC.size; i++){
        let div = invD.querySelector(`.item.i${i}`);
        let data = inv[i];
        if(!data){
            div.classList.remove("on");
            div.innerHTML = "";
            continue;
        }

        div.classList.add("on");
        div.innerHTML = "";
        let icon;
        if(images["items"] && images["items"][data.name]) icon = images["items"][data.name].cloneNode();
        else icon = images["systems"]["error"].cloneNode(); //何があってもこれだけは絶対にあるわよ
        div.appendChild(icon);
        
        let num = El("div", "num");
        num.textContent = data.num;
        div.appendChild(num);
    }
}

invF.main = (type = 0, name = null, num) => {
    let data = findItems(name);
    if(!data) return console.log(`[inv] 「${name}」 ←これは無いです`);

    if(type == 0){
        if(name == null) return console.log(inv); //返すだけ
        else if(typeof name == "string") return inv.filter(a => a.name == name);
        else if(typeof name == "number") return inv[name];
    }
    if(type == "add"){
        // console.log(`[inv] 「${name}」を${num}個追加しようかな`);

        let already = inv.find(a => a.name == name && a.num < holC.maxItem);
        if(!already){
            let add = Math.min(num, holC.maxItem);
            already = {name, num:add};
            inv.push(already);

            let rest = num - add;
            if(rest > 0) return invF.main("add", name, rest);
            invF.tekiou();
            return 0;
        }

        if(holC.maxItem < already.num + num){
            // すでにあるなら、それを最大にして再帰
            let rest = (already.num + num) - holC.maxItem;
            already.num = holC.maxItem;
            invF.tekiou();
            return invF.main("add", name, rest);
        }

        // 到達さえできなそうなら、普通に追加
        already.num += num;
        invF.tekiou();
        return 0;
    }

    if(type == "dec"){
        invF.tekiou();
    }

    if(type == "lost"){
        // 全てを失い、その座標に印を残す。次にその印の箇所に行った際、失ったすべてのアイテムを取得する
        invF.tekiou();
    }
}




//#region start
function start(){
    Style.tekiou();
    OBS.load();

    mainF.load();
    holF.resize();
    invF.load();

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