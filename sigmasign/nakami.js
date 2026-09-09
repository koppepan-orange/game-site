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

selF.fight = (name) => {
    mainF.move("battle");
}



let batD = document.getElementById("battle");
let batC = {
    Ds:{

    },
    can:batD.querySelector("canvas"),
    ctx:batD.querySelector("canvas").getContext('2d'),
    wid:393,
    hei:700,
    wack:[150, 5],

    obs:[]
}
let batF = {};

batF.resize = () => {
    let can = batC.can;
    can.width = batC.wid;
    can.height = batC.hei;
}

batF.draw = () => {
    let ctx = batC.ctx;
    for(let ob of batC.obs){
        ctx.drawImage(images[ob.zock][ob.img ?? ob.name], ob.x, ob.y, ob.w, ob.h);
    }

    // わこつ
    let wack = batC.wack;
    let x = (batC.wid/2) - (wack[0]/2); // 正方形の左上
    let y = (batC.hei-150) - (wack[0]/2);

     ctx.save();
    ctx.lineWidth = wack[1];
    ctx.strokeStyle = Style.ki["bor"];
    ctx.strokeRect(x, y, wack[0], wack[0]);
     ctx.restore();
}

batF.addob = (x, y, w, h, props = []){
    let hasp = (name) => {
        for(let p of props){
            if(p == name) return name;
            if(p.startsWith(name)) return p; //最初のを
        }
    }

    // がぞうなら、、、それ、、、あーー、、、、
}

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

