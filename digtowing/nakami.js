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

let holD = document.getElementById("hole");
let holC = {
    Ds:{

    },
    can: holD.querySelector("canvas"),
    ctx: holD.querySelector("canvas").getContext("2d"),

    map: [],
    yok: 10,
    tat: 15,
    size: null
}
let holF = {};

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

holF.mapLoad = () => {
    let map = [];
    for(let y = 0; y < holC.tat; y++){
        map[y] = [];
        for(let x = 0; x < holC.yok; x++){
            map[y][x] = 0;
        }
    }
    holC.map = map;
}
holF.mapMake = () => {
    let cs = ["#42220b", "#d7ad52", "#f0f8ff"];
    let map = [];
    for(let y = 0; y < holC.tat; y++){
        map[y] = [];
        for(let x = 0; x < holC.yok; x++){
            let block = {
                x, y,
                color: arraySelect(cs)
            }
            map[y][x] = block;
        }
    }
    holC.map = map;
}

holF.draw = () => {
    // grid
    holF.drawGrid();

    for(let y = 0; y < holC.map.length; y++){
        for(let x = 0; x < holC.map[y].length; x++){
            let block = holC.map[y][x];
            let px = block.x * holC.size;
            let py = block.y * holC.size;
            let w = holC.size, h = holC.size;
            if(block.img){
                holC.ctx.drawImage(block.img, px, py, w, h);
            }else{
                holC.ctx.fillStyle = block.color ?? "#42220b";
                holC.ctx.fillRect(px, py, w, h);
            }
        }
    }
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




//#region start
function start(){
    Style.tekiou();
    OBS.load();

    mainF.load();
    holF.mapLoad();
     holF.resize();

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