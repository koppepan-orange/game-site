//#region komagome
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
};
async function nicoText(mes){
    const newDiv = document.createElement('div');
    newDiv.textContent = mes;
    newDiv.className = 'nicotext';
    newDiv.style.top = `calc(${random(0, 100)}vh - 20px)`;
    newDiv.style.right = '0px';
    document.querySelector('body').appendChild(newDiv);

    requestAnimationFrame(() => {
    newDiv.style.right = `${window.innerWidth + newDiv.offsetWidth}px`; //なんか電車の問題解いてるみたいだね
    });
    
    await delay(2000); 
    newDiv.remove();
};
function kaijou(num){
    if(num == 0) return 0;
    if(num == 1) return 1;
    return num * kaijou(num - 1);
}
function arraySelect(array){
    let select = Math.floor(Math.random()*array.length);
    return array[select];
};
function arrayShuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
    const i2 = Math.floor(Math.random() * (i + 1));
    [array[i], array[i2]] = [array[i2], array[i]];
    }
    return array;
};
function arraySize(array){
    let res = new Set(array).size;
    return res;
};
function arrayCount(array){
    const counts = {};
    for (let value of array) {
    counts[value] = (counts[value] || 0) + 1;
    }
    return counts;
}
function arrayMult(array){
    return array.reduce((a, v) => a * v, 1);
}
function arrayGacha(array,probs){
    if(array.length != probs.length) throw new Error("長さがあってないっす！先輩、ちゃんとチェックした方がいいっすよ〜？");
    const total = probs.reduce((sum, p) => sum + p, 0);
    let random = Math.random() * total;
    for (let i = 0; i < array.length; i++) {
        if(random < probs[i]) return array[i];
        random -= probs[i];
    }
};
function hask(obj, key){
let res = obj.hasOwnProperty(key);
res = res ? 1 : 0;
return res;
}
function copy(moto) {
    if(Array.isArray(moto)){
        let arr = [];
        for (let i = 0; i < moto.length; i++) {
            arr.push(copy(moto[i]));
        }
        return arr;
    }
    else if(moto != null && typeof moto == 'object'){
        let obj = {};
        for (let key in moto) {
            if (moto.hasOwnProperty(key)) {
            obj[key] = copy(moto[key]);
            }
        }
        return obj;
    }
    else {
        return moto;
    }
}
function probability(num){
    return Math.random()*100 <= num;
    //例:num == 20 → randomが20以内ならtrue,elseならfalseを返す
};
function random(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(num);
};
function fl(num){
    let res = num ? 1 : 0;
    return res;
}

function anagramSaySay(text, loop = 10, bet = '<br>'){
    let menjo = 0;
    let len = text.length;
    if(len < 4) menjo = 1, console.log('長さが3以下なんで最大6っす');
    
    let optout = text.split('');
    let optcou = arrayCount(optout);
    let optvals = [];
    for(a of Object.keys(optcou)){
        let b = optcou[a];
        b = kaijou(b);
        optvals.push(b);
    }
    let optmat = arrayMult(optvals);
    let cal = (kaijou(len) / optmat) - 1;

    let loopen = loop;
    console.log(`総数:${cal} 回数:${loopen}`);
    if(cal < loopen) menjo = 1;
    
    let reses = [];
    while(loopen > 0){
        loopen -= 1;
        let res = arrayShuffle(optout).join(''); 
        if(reses.includes(res)){loopen += 1; continue}
        
        if(res == text && !menjo){loopen += 1; continue;}

        if(res == text && menjo && reses.length < cal){loopen += 1; continue}
        else if(res == text && menjo) res = '[重複エラー]';

        reses.push(res);
    }
    
    return reses.join(bet);
}
function setLocalStorage(name, value) {
    localStorage.setItem(name, value || "");
}
function getLocalStorage(name) {
    return localStorage.getItem(name);
}
let r = {
    and: function(lef, rig){
        if(lef && rig) return 1
        return 0
    },
    or: function(lef, rig){
        if(lef || rig) return 1
        return 0
    },
    xor: function(lef, rig){
        console.log('排他的論理和発動！！')
        let l = lef ? 1 : 0
        let r = rig ? 1 : 0
        if(l != r) return 1
        return 0
    },
    not: function(lef){
        if(lef) return 0
        return 1
    },
    nand: function(lef, rig){
        if(lef && rig) return 0
        return 1
    },
    nor: function(lef, rig){
        if(lef || rig) return 0
        return 1
    },
    xnor: function(lef, rig){
        console.log('逆排他的論理和発動！！')
        let l = lef ? 1 : 0
        let r = rig ? 1 : 0
        if(l != r) return 0
        return 1
    }
}
// async function error(){
//     addtext('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
//     await delay(2000);
//     // window.open('about:blank', '_self').close();
// }
async function error(text){
    let mono = new tk('div', 'half', 'half', window.innerWidth/2, 300);
    mono.styleAdd({background: '#860000'})
    mono.classAdd('mostop')

    let mono2 = new tk('div', 'half', 'half', window.innerWidth/2, 100);
    mono2.styleAdd({textAlign: 'center'});
    mono2.styleAdd({fontSize: '27px'});
    mono2.youso.innerText = text;
    mono.yousoAdd(mono2.youso);

    mono.append();


    await delay(5000);
    window.open('about:blank', '_self').close();
}
function hoshoku(color) {
    color = color.replace(/^#/, ''); // #付きなら取る

    if(color.length != 6) return console.log('カラーコードは6桁、ですよ〜？楽しないでくださいね〜♪')

    // RGB分解
    const r = parseInt(color.slice(0, 2), 16);
    const g = parseInt(color.slice(2, 4), 16);
    const b = parseInt(color.slice(4, 6), 16);

    // 補色：255から引く
    const compR = (255 - r).toString(16).padStart(2, '0');
    const compG = (255 - g).toString(16).padStart(2, '0');
    const compB = (255 - b).toString(16).padStart(2, '0');

    return `#${compR}${compG}${compB}`;
}
function mixshoku(c1, c2, ratio = 0.5) {
    const toRGB = c => {
        c = c.replace('#', '');
        if (c.length === 3) c = c.split('').map(x => x + x).join('');
        const n = parseInt(c, 16);
        return [n >> 16, (n >> 8) & 255, n & 255];
    };

    const [r1, g1, b1] = toRGB(c1);
    const [r2, g2, b2] = toRGB(c2);

    const r = Math.round(r1 + (r2 - r1) * ratio);
    const g = Math.round(g1 + (g2 - g1) * ratio);
    const b = Math.round(b1 + (b2 - b1) * ratio);

    return (
        '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')
    );
}
//#endregion
//#region log&text
let textDiv = document.querySelector('#text');
let autoDelay = 1;
let skipText = false; // スキップフラグ
let clearText = false; // テキスト消去フラグ
let textShowing = 0;

function colorcheck(rawtext) {
    const text = [];
    let isRed = false; // ** で囲まれた部分かどうか
    let isPink = false; // && で囲まれた部分かどうか
    let isBlue = false; // ^^ で囲まれた部分かどうか

    for(let i = 0; i < rawtext.length; i++){
        if(rawtext[i] == "*" && rawtext[i + 1] == "*"){
            isRed = !isRed; // 状態を切り替える
            i++; // 次の * をスキップ
        }else if(rawtext[i] == "&" && rawtext[i + 1] == "&"){
            isPink = !isPink;
            i++; // 次の & をスキップ
        }else if(rawtext[i] == "^" && rawtext[i + 1] == "^"){
            isBlue = !isBlue;
            i++;
        }else{
            let color = null;
            if(isRed) color = 'red';
            if(isPink) color = 'pink';
            if(isBlue) color = 'blue';
            text.push({
                char: rawtext[i],
                color: color
            });
        }
    }
    return text;
}

let queueAddtext = [];
let loopAddtext = 0;
async function waitforAddtext(){
    let len = queueAddtext.length;

    if(len == 0) loopAddtext = 0;
    else loopAddtext = 1;

    if(!loopAddtext) return console.log('loopがないんでしゅーりょー');
    requestAnimationFrame(waitforAddtext);

    if(textShowing) return console.log('文字表示されたんでスキップ');
    
    let raw = queueAddtext.shift();
    // console.log(`${raw}を送信します`);
    // console.log(`残り: (${len - 1})[${queueAddtext}]`);
    await addtext(raw);
}
async function addtext(raw){
    if(!raw) return console.log('「内容が？内容が〜〜？ないよ〜〜〜つってwwww直せ」');

    if(textShowing){
        queueAddtext.push(raw);

        if(!loopAddtext) waitforAddtext();
        return;
    }
    
    textShowing = 1;
    text = colorcheck(raw);
    textDiv.innerHTML = ""; // 中身をリセット
    textDiv.style.display = "block"; // 表示
    let index = 0;
    clearText = false; // 消去フラグをリセット

    return new Promise((resolve) => {
        async function type() {
                if (index < text.length) {
                if (skipText) {
                    // スキップ処理
                    while (index < text.length) {
                            const span = document.createElement("span");
                            span.textContent = text[index].char;
                            if (text[index].color) {
                            span.classList.add(`color-${text[index].color}`);
                            }
                            textDiv.appendChild(span);
                            index++;
                    }
                    index = text.length; // 全ての文字を表示済みにする
                    skipText = false;
                    setTimeout(type, 10);
                } else {
                    // 通常の文字表示
                    const span = document.createElement("span");
                    span.textContent = text[index].char;
                    if (text[index].color) {
                            span.classList.add(`color-${text[index].color}`);
                    }
                    textDiv.appendChild(span);

                    index++;
                    setTimeout(type, 80); // 次の文字を表示する間隔
                }
                } else {
                addlog(textDiv.innerHTML);
                const waitTime = autoDelay * 1000;
                const timeout = new Promise(resolve => setTimeout(resolve, waitTime));
                const userAction = new Promise(resolve => {
                    function waitToClear(event) {
                            if (event.type === 'click' || event.key === 'z' || event.key === 'Enter') {
                            document.removeEventListener('click', waitToClear);
                            document.removeEventListener('keydown', waitToClear);
                            resolve();
                            }
                    }
                    document.addEventListener('click', waitToClear);
                    document.addEventListener('keydown', waitToClear);
                });

                Promise.race([timeout, userAction]).then(() => {
                    textDiv.textContent = "";
                    textDiv.style.display = "none";
                    clearText = true;
                    skipText = false
                    textShowing = 0;
                    resolve('end'); // Promiseを解決
                });
                }
        }
        type();
    });
}
document.addEventListener('keydown', (e) => {
    if(e.key === 'z' || e.key === 'Enter'){
        skipText = true;
    }
});

document.addEventListener('keyup', (e) => {
    if(e.key === 'z' || e.key === 'Enter'){
        skipText = false;
    }
});

document.addEventListener('click', () => {
    skipText = true;
    setTimeout(() => skipText = false, 50); // 一時的にスキップを有効化
});

let logOOmoto = document.querySelector('#log');
let log = document.querySelector('#log .log');
let logOpener = document.querySelector('#log .opener');
let log_open = (code) => {
    if((!logOOmoto.classList.contains('tog') || code == 'o') && code != 'c'){
        logOOmoto.classList.add('tog');
        logOpener.textContent = '<';

    }else{
        logOOmoto.classList.remove('tog');
        logOpener.textContent = '>';
    }
}
logOpener.addEventListener('click', log_open);

function addlog(text){
    log.innerHTML += text + '<br>';
    log.scrollTop = log.scrollHeight;
}
//#endregion
//#region description
let movableDescription = document.getElementById('movableDescription');
document.addEventListener('mousemove', (e) => {
    movableDescription.style.left = `${e.clientX + 10}px`;
    movableDescription.style.top = `${e.clientY + 10}px`;
});
document.addEventListener('mouseover', (e) => {
    const descTarget = e.target.closest('[data-description]');
    if (descTarget) {
        const desc = descTarget.dataset.description;
        movableDescription.innerHTML = desc;
        movableDescription.style.display = 'block';
    }
});
document.addEventListener('mouseout', (e) => {
    const descTarget = e.target.closest('[data-description]');
    if (descTarget) {
        movableDescription.innerHTML = '';
        movableDescription.style.display = 'none';
    }
});
//#endregion
//#region draggable
document.addEventListener('mousedown', e => {
    // const descTarget = e.target.closest('[data-description]');
    let div = e.target;
    
    if(!div.classList.contains('draggable')) return;
    offsetX = e.clientX - div.getBoundingClientRect().left;
    offsetY = e.clientY - div.getBoundingClientRect().top;
    
    function onMouseMove(e) {
        div.style.left = `${e.clientX - offsetX}px`;
        div.style.top = `${e.clientY - offsetY}px`;
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});
//#endregion 
//#region tk
class tk{
    constructor(type, x = 'half', y = 'half', w = window.innerWidth/2, h = window.innerWidth/2){
        let youso = document.createElement(type);
        youso.className = `tk ${type}`;

        let yoko = ['x', 'w'];
        for(let n of yoko){
            if(typeof eval(n) != 'string' || typeof eval(n) == 'string' && !eval(n).endsWith('%')) continue;
            let num = eval(n).slice(0, -1);
            eval(n) = num * window.innerWidth / 100;
        }

        let tate = ['y', 'h'];
        for(let n of tate){
            if(typeof eval(n) != 'string' || typeof eval(n) == 'string' && !eval(n).endsWith('%')) continue;
            let num = eval(n).slice(0, -1);
            eval(n) = num * window.innerHeight / 100;
        }

        console.log(x, y, w, h);

        youso.style.width = `${w}px`;
        youso.style.height = `${h}px`;

        youso.style.left = `${x}px`;
        youso.style.top = `${y}px`;
        
        if(x == 'half' && y == 'half') youso.classList.add('cenXY');
         else if(x == 'half') youso.classList.add('cenX');
         else if(y == 'half') youso.classList.add('cenY');

        this.youso = youso;
    };

    attrAdd(dict = 'none'){
        if(dict == 'none') return;
        
        if(typeof dict == 'string'){
            //attr: nanka
            let [key, val] = dict.split(':');
             key = key.trim();
             val = val.trim();
            this.youso.setAttribute(key, val);
            return 0;
        }

        if(typeof dict != 'object') return 1;

        for(let key in dict) this.youso.setAttribute(key, dict[key]);

        return 0;
    }

    styleAdd(dict){
        for(let key in dict) this.youso.style[key] = dict[key];
    }

    classAdd(name){this.youso.classList.add(name)};
    classRem(name){this.youso.classList.remove(name)};
    classTog(name){this.youso.classList.toggle(name)};
    classHas(name){
        let is = this.youso.classList.contains(name);
        return is;
    }

    evAdd(type, func){
        this.youso.addEventListener(type, func);
    }

    yousoAdd(youso){
        this.youso.appendChild(youso);
    }

    append(){
        document.body.appendChild(this.youso);
    };

    remove(){
        this.youso.remove();
    };
}

function tkTest(){
    let mono = new tk('div', 'half', 'half');
    mono.classAdd('draggable');
    mono.styleAdd({background: '#f0f8ff'});

    let mono2 = new tk('div', 'half', 'half');
    mono2.styleAdd({background: '#cfe9ff'});

    mono.yousoAdd(mono2.div);

    mono.evAdd('click', function(){
        nicoText('clicked');
    });

    mono.append();
}

//#endregion
//#region observer
let keys = {}
document.addEventListener('keydown', e => {
let key = e.key.toLowerCase();
if(e.key == ' ') key = 'space';
keys[key] = true;
});
document.addEventListener('keyup', e => {
let key = e.key.toLowerCase();
if(e.key == ' ') key = 'space';
keys[key] = false;
});

let clicking = false;
document.addEventListener('mousedown', () => clicking = true);
document.addEventListener('mouseup', () => clicking = false);
//#endregion


let humans = [];

let mapD = document.querySelector('#map');
let mapC = {
    conD: document.querySelector('#map .container'),
    tatem:8,
    yokom:8,
    remaked:0,
    mases:[],
    sentk:{}, //[y, x]
    p:{
        x:0,
        y:0,
        div: document.querySelector('#map .coma'),
        moving:1,
    }
};
let mapF = {};

mapC.sentk["quake"] = {
    uni:[ 
        [0,-1],
        [-1,-1],
        [-1,0],
        [0,1],
        [1,0],
        [1,-1],
    ],

    due:[
        [0,-1],
        [-1,0],
        [-1,1],
        [0,1],
        [1,1],
        [1,0],
    ]
}

document.addEventListener('keydown', e => {
    let key = e.key.toLowerCase();
    if(key == ' ') key = 'space';
    
    switch(key){
        case 'd':
        case 'arrowright':{
            mapF.move(1,0,'add')
        }
        break;

        case 'a':
        case 'arrowleft':{
            mapF.move(-1,0,'add')
        }
        break;

        case 'w':
        case 'arrowup':{
            mapF.move(0,-1,'add')
        }
        break;

        case 's':
        case 'arrowdown':{
            mapF.move(0,1,'add')
        }
        break;
    }
})


// #region map生成機構

mapF.seikei = () => {
    let mases = mapC.mases;

    let ato = [];
    for(let y=0; y<mapC.tatem; y++){
        ato[y] = [];
        let due = (y+1) % 2 == 0 ? 1 : 0;
        for(let x=0; x<mapC.yokom; x++){
            if(due && x == mapC.yokom-1) continue;

            let mas = mases.find(a => a.x == x && a.y == y);
            let m = {}
            // if(!mas) console.error(`no mas: ${x}, ${y}`);
            // if(!mas.name) console.error(`no name: ${x}, ${y}`, mas);
            m.name = mas.name ?? null;
            
            if(mas.consored) m.consored = 1;

            ato[y][x] = m;
        }
    }

    return ato;
}

mapF.save = (tuyoi = 0) => {
    let p = mapC.p;

    let objmap;
    if(tuyoi) objmap = mapC.objmap;
    else objmap = mapF.seikei();
    // console.log(objmap)

    let tate = mapC.tatem;
    let yoko = mapC.yokom;
    
    mapC.conD.innerHTML = '';
    for(let y=0; y<tate; y++){
        let due = (y+1) % 2 == 0 ? 1 : 0;

        let row = document.createElement('div');
        row.className = 'row';
        if(due) row.classList.add('due');

        for(let x=0; x<yoko; x++){
            if(due && x == yoko-1) continue;
            let mono = document.createElement('div');
            mono.className = `mas m${y}${x}`;
            if(x == p.x && y == p.y) mono.classList.add('iru');

            // console.log(x, y, objmap[y][x])
            if(objmap[y][x] && objmap[y][x].name){
                let m = objmap[y][x];
                mono.classList.add(m.name);
                if(m.consored) mono.classList.add('consored');
                
                let img = document.createElement('img');
                img.className = `img ${m.name}`;
                img.src = `assets/maps/${m.name}.png`;
                mono.appendChild(img);
            }

            mono.addEventListener('click', () => {
                mono.classList.toggle('consored');
                mapF.load()
            })

            row.appendChild(mono);
        }

        mapC.conD.appendChild(row);
    }

    if(!tuyoi) mapF.tekiou();
}

mapF.load = () => {
    let mases = mapC.conD.querySelectorAll('.mas');
    mapC.mases = [];
    
    for(let mono0 of mases){
        let mono = {};

        let clas = mono0.classList;
        for(let c of clas){
            let md = 0
            if(c.startsWith('m')){
                mono.y = c.slice(1,2);
                mono.x = c.slice(2,3);
                md = 1;
            }
            let ban = ['iru', 'consored'];
            if(!ban.includes(c) && !md) mono.name = c;

            if(c == 'none') mono.none = 1;
            if(c == 'consored') mono.consored = 1
        }
        if(!mono.name) mono.name = '';

        mapC.mases.push(mono);
    }
}

let energy = [];
mapF.objMap = async(add = 0) => {
    if(add) mapC.remaked += 1;
    if(mapC.remaked > 9) return error('深刻なエラーが発生しました')
    let yoko = mapC.yokom;
    let tate = mapC.tatem;
    let zen = yoko*tate;
    let zahyos = [];
    for(let i=0; i<yoko; i++)for(let i2=0; i2<tate; i2++)zahyos.push([i,i2]);
    // console.log(`ザッヒョズ「今年で${zahyos.length}ッス！」`)
    
    let noned = mapItems.find(a => a.name == 'none');
    let none = zen*noned.none;
    let anone = zen - none;
    // console.log(`none:anone = ${none}:${anone}`)

    let ns = {};
    let nsn = 0;
    for(let a of mapItems.filter(a => a.able)){
        let [min, max] = a.n;

        let n = random(min, max);
        if(a.name == 'none') n = none;
        // console.log(`${min}~${max} => ${n}`);

        if(nsn + n > zen) console.error(`超えたぜ(${a.name})`),n = anone-nsn;
         if(n == 0) return console.log(`make error:: ${nsn}/${anone} (n == 0)`), mapF.objMap(1);

        nsn += n;
        // console.log(`making:: ${nsn}/${zen}`);
        ns[a.name] = n;
    }
    ns['enemy'] = zen - nsn;
    // console.log(`maked:: ${nsn+ns['enemy']}/${zen}`);
    console.log(ns);
    energy = ns

    let objmap = [];
    for(let y=0; y<tate; y++){
        objmap[y] = [];
        for(let x=0; x<yoko; x++) objmap[y][x] = {};
    }

    let zenbu = Object.values(ns).reduce((a,b) => a+b);
    // console.log(`${zenbu}個、配置予定`)
    
    let haiched = 0;
    for(let ob0 of Object.keys(ns)){
        let ob = ob0;
        // console.log(`${ob}: ${ns[ob]}個`);
        for(let i=0; i<ns[ob]; i++){
            let ind = random(0, zahyos.length-1);
            let [x, y] = zahyos.splice(ind, 1)[0];
            // console.log('making')
            // do{} while(objmap[y][x] || ((y + 1) % 2 == 0 && x == yoko - 1));
            // console.log(`objmap[${y}][${x}]に${ob}を配置します`)

            let data = mapItems.find(a => a.name == ob);
            let dataq = {...data.dataq};
            if(!Object.keys(dataq).length) dataq['#コンパス'] = 100;

            let gokei = Object.values(dataq).reduce((a,b) => a+b);
            if(gokei < 100) dataq['#コンパス'] = 100 - gokei;

            let ob2 = ob;
            let q = arrayGacha(Object.keys(dataq), Object.values(dataq));
            // console.log(`付加要素！ >> ${q}`)
            if(q != '#コンパス') ob2 += `_${q}`;

            objmap[y][x].name = ob2;
            objmap[y][x].consored = 1;
            haiched += 1;
            // console.log(`${haiched}/${zenbu} (${ob2})`)
        }
    }

    // console.log(`置く予定:${zenbu}, 置いた数:${haiched}`)

    // console.log(objmap)
    mapC.objmap = objmap;
}
mapF.make = async() => {
    console.log('mapつくるお～！！')
    mapC.remaked = 0;
    await mapF.objMap();

    mapF.save(1);
    mapF.load();
}

mapF.nextFloor = async() => {
    let p = mapC.p;
    p.moving = 1;

    await mapF.make();
    mapF.load();

    p.moving = 0;

    mapF.restart();
    mapF.tekiou();

    return 0;
}

document.addEventListener('keydown', async(e) => {
    let key = e.key.toLowerCase();
    if(key == ' ') key = 'space';
    
    switch(key){
        case 'z':{
            await mapF.act();
        }
        break;

        case 'm':{
            await mapF.nextFloor()
        }
        break;

        case 'k':{
            mapF.quake();
            mapF.save();
        }
        break;
    }
})


// #endregion
// #region プレイヤーの動き機構

mapF.tekiou = () => {
    let p = mapC.p;
    let mono0 = mapC.conD.querySelector(`.mas.iru`);
    // console.log(mono0)
    if(mono0) mono0.classList.remove('iru');

    let coma = p.div;
    coma.remove();

    // console.log(`qS: .mas.m${p.y}${p.x}`)
    let mono = mapC.conD.querySelector(`.mas.m${p.y}${p.x}`);
    mono.classList.add('iru');
    mono.appendChild(coma);

    let quake = copy(mapC.sentk['quake'].uni);
    if((p.y+1) % 2 == 0) quake = copy(mapC.sentk['quake'].due);
    quake.push([0, 0]);
    for(let q of quake){
        let [y, x] = q;
        let [ty, tx] = [p.y + y, p.x + x];
        let mono = mapC.conD.querySelector(`.mas.m${ty}${tx}`);
        if(mono) mono.classList.remove('consored');
    }
}

mapF.move = async function(x, y, mode, issyun = 0){
    let p = mapC.p;
    if(p.moving) return;

    let ugoku = {x, y};
    let ugokuyo0 = ['x', 'y']
    let ugokuyo = arrayShuffle(ugokuyo0);

    if(mode == 'set' && issyun){
        // console.log('一瞬！！')
        p.x = +x;
        p.y = +y;
        mapF.tekiou();
        return 0;
    }
    
    if(mode == 'set'){
        x = x-p.x;
        y = y-p.y;
    }

    p.moving = 1;
    for(let u of ugokuyo){
        let kyori = ugoku[u];
        if(kyori == 0) continue;

        let ippo = Math.sign(kyori);
        // console.log(`[${u}] ${kyori}m移動予定、一歩は${ippo}m`);

        for(let i=0; i<Math.abs(ugoku[u]); i++){
            mapF.moving(u, ippo);
            mapF.tekiou();
            await delay(100);
        }
    }
    
    p.moving = 0;
    return 0;
}
mapF.moving = (u, ippo) => {
    // console.log('moving!', u, ippo)
    let p = mapC.p;
    let due = (p.y+1) % 2 == 0 ? 1 : 0;
    // let sei = ippo > 0 ? 1 : 0;
    // let fuu = ippo < 0 ? 1 : 0;

    if(u == 'x'){
        let tugi = p.x + ippo;
        // console.log(`[${u}] ${p.x} => ${tugi}`);
        let mono = mapC.mases.find(a => a.x == tugi && a.y == p.y);
        if(!mono) return 1;
        if(mono.none) return 1;

        p.x += ippo;
    }
    if(u == 'y'){
        let tugi = p.y + ippo;
        // console.log(`[${u}] ${p.y} => ${tugi}`);
        // console.log('妖怪学園Y')

        let l = 0, r = 1;
        if(due) l = 0, r = 1;
        if(!due) l = -1, r = 0;

        let monol = mapC.mases.find(a => a.x == p.x+l && a.y == tugi);
        let monor = mapC.mases.find(a => a.x == p.x+r && a.y == tugi);
        // console.log(monol, monor)

        if(!monol && !monor) return 1;

        let is = 0;
        if(monol && monol.none) is += 1;
        if(monor && monor.none) is += 1;
        if(is == 2) return 1;

        let d;
        if(due && monol && !monol.none) d = 0;
   else if(!due && monor && !monor.none) d = 1;
   else if(due && monor && !monor.none) d = 1;
   else if(!due && monol && !monol.none) d = 0;

        if(d == 0){
            // console.log('monolがあるので左側へ');
            p.x += l;
            p.y += ippo;
            return 0;
        }

        if(d == 1){
            // console.log('(monolはないけど)')
            // console.log('monorがあるので右側へ');
            p.x += r;
            p.y += ippo;
            return 0;
        }
    }
}

mapF.restart = () => {
    let startI = mapC.mases.find(a => a.name == 'start');
    if(!startI) return;

    mapF.move(startI.x, startI.y, 'set', 1);
}

mapF.quake = () => {
    let p = mapC.p;
    let due = (p.y+1) % 2 == 0 ? 1 : 0;
    
    let mases = mapC.sentk["quake"].uni;
    if(due) mases = mapC.sentk["quake"].due;


    // 地殻どーんなSEを
    

    for(let mas of mases){
        let y = p.y + mas[0];
        let x = p.x + mas[1];
        let mono = mapC.conD.querySelector(`.m${y}${x}`);
        let youso = mapC.mases.find(a => a.x == x && a.y == y);
        if(mono){
            // console.log(mono, youso)
            if(youso.name == 'boss') continue;

            mono.classList.toggle('none');
            // console.log(mono.classList);
            if(mono.classList.contains('consored')) console.error('consored!!!!!');
        }
    }
    mapF.load();
    mapF.tekiou();
}

mapF.act = async() => {
    let p = mapC.p;
    
    let mas0 = mapC.mases.find(a => a.x == p.x && a.y == p.y);
    let mas = {...mas0};
    if(!mas.name) mas.name = 'none';
    let name0 = mas.name;
    if(name0 == 'none') return;
    // console.log(name0)

    // fire_maki => fire
    let name = name0.split('_')[0];
    let ato = '';
    if(name != name0) ato = name0.split('_')[1];

    console.log(`act:: 「${name}」(${ato})`);
 
    let data = mapItems.find(a => a.name == name);
    // console.log(data)
    let res = await data.func(ato);
    if(res) return 1;

    // mapF.save();
}
// #endregion

// #region mapのUIたちを
let mapuF = {};

// #endregion

// #region 戦闘を～

let batD = document.getElementById('battle');
let batF = {};

batF.tekiou = () => {

}

//#region -攻撃-
batF.attack = async(who, are, atk, x) => {
    console.log(`${who.name} => ${are.name} | 攻撃力${atk} x${x}`);

    atk += who.add.atk;
    
    let isb = (name) => {return who.buff == name ? 1 : 0};
    

    for(let i=0; i<x; i++){
        
        
        if(isb('吸血の牙')) await batF.heal(who, are, 4, 1)

        if(i+1 < x) await delay(500);
    }
}

batF.heal = async(who, are, val, x) => {
    console.log(`${who.name} => ${are.name} | 回復力${hea} x${x}`);

    hea += who.add.hea;
    
    for(let i=0; i<x; i++){
        are.hp += hea;
        if(are.hp > are.maxhp) are.hp = are.maxhp;
        
        if(i+1 < x) await delay(500);
    }
}
//#endregion 

// #endregion

// #region 画像とかのロード機構

let images = {};
let Imgs = {
    'maps':['enemy', 'enemy_gachi', 'enemy_metal', 'enemy_gold', 'enemy-high', 'fire_maki', 'chest_a', 'chest_b', 'chest_c', 'chest_d']
}
let imageA = Object.keys(Imgs).map(a => Imgs[a].length).reduce((a, b) => a + b);
let imageB = 0;
for(let belong in Imgs){
    for(let num of Imgs[belong]){
        let img = new Image();
        img.src = `assets/${belong}/${num}.png`;

        img.onload = () => {
            // console.log(`Image ${belong}/${num} loaded.`);
            imageB++;

            if(imageB == imageA) start();
        };
        img.onerror = () => {
            console.error(`Image ${belong}/${num} failed to load.`);
            img.src = `assets/systems/error.png`;
            imageB++;

            if(imageB == imageA) start();
        };

        if(!images[belong]) images[belong] = {};
        images[belong][num] = img;
    };
};
// #endregion


async function start(){
    await mapF.nextFloor();
}