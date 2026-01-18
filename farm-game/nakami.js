//#region komagome
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
};
async function nicoText(mes){
    let newDiv = document.createElement('div');
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
function tobiText(youso, mes) {
    let el = youso;
    if(typeof el == 'string') el = document.querySelector(youso);
    if(!el) return console.error('せんぱ〜い？この要素壊れてますよ〜〜？');

    let rect = el.getBoundingClientRect();
    let left = rect.left + window.scrollX + rect.width / 2;
    let top = rect.top + window.scrollY + rect.height / 2;

    let node = document.createElement('div');
    node.className = 'tobitext';
    node.textContent = mes;
    node.style.top = `${top}px`;
    node.style.left = `${left}px`;

    document.body.appendChild(node);

    let duration = 1200;
    let distance = -48;
    let jitter = (Math.random() - 0.5) * 10;

    let start = performance.now();

    function easeOutCubic(t){return 1 - Math.pow(1 - t, 3);}

    function frame(now){
        let t = Math.min(1, (now - start) / duration);
        let e = easeOutCubic(t);
        let tsY = distance * e;
        let tsX = jitter * (1 - e);
        node.style.transform = `translate(-50%, -50%) translateY(${tsY}px) translateX(${tsX}px)`;
        node.style.opacity = String(1 - t);
        if(t < 1) requestAnimationFrame(frame);
        else node.remove();
    }

    requestAnimationFrame(frame);
}
function kaijou(num){
    if(num == 0) return 0;
    if(num == 1) return 1;
    return num * kaijou(num - 1);
}
function kaikyu(sta, end, row, val){
    if(typeof sta != 'number' || typeof end != 'number' || typeof row != 'number' || typeof val != 'number') return console.error('えっと、できれば..引数は全て数字にして欲しい...です......');
    if(row <= 0) return console.error(`row${row}でしたけど...大丈夫ですか？`);
    if(sta > end) return console.error('え、えっと...多分、逆です......')
    if(val < sta || val > end) return console.error('こ、この値..枠から外れてます....');

    let kari = Math.floor((val-sta) / row);
    let sta2 = sta + kari*row;
    let end2 = sta2 + row-1;
    if(end2 > end) end2 = end;

    let arr = [];
    for(let i = sta2; i <= end2; i++) arr.push(i);

    return arr;
}
function arraySelect(array){
    let select = Math.floor(Math.random()*array.length);
    return array[select];
};
function arrayShuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        let i2 = Math.floor(Math.random() * (i + 1));
        [array[i], array[i2]] = [array[i2], array[i]];
    }
    return array;
};
function arraySize(array){
    let res = new Set(array).size;
    return res;
};
function arrayCount(array){
    let counts = {};
    for(let value of array){
        counts[value] = (counts[value] || 0) + 1;
    }
    return counts;
}
function arrayMult(array){
    return array.reduce((a, v) => a * v, 1);
}
function arrayGacha(array, prob){
    if(array.length != prob.length) throw new Error("長さがあってないっす！先輩、ちゃんとチェックした方がいいっすよ〜？");
    let total = prob.reduce((sum, p) => sum + p, 0);
    let random = Math.random() * total;
    for (let i = 0; i < array.length; i++) {
        if(random < prob[i]) return array[i];
        random -= prob[i];
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
        for(let i = 0; i < moto.length; i++){
            arr.push(copy(moto[i]));
        }
        return arr;
    }
    else if(moto != null && typeof moto == 'object'){
        let obj = {};
        for(let key in moto){
            if(moto.hasOwnProperty(key)){
                obj[key] = copy(moto[key]);
            }
        }
        return obj;
    }
    else{
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
function fl(val, arr = [0, 1]){
    let res = val == arr[0] ? arr[1] : arr[0];
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
    // console.log(`総数:${cal} 回数:${loopen}`);
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
function anagramCan(mae, ato){
    if(mae.length != ato.length) return 0;

    let count = {};
    for(let ch of mae){
        count[ch] = (count[ch] || 0) + 1;
    }

    for(let ch of ato){
        if(!count[ch]) return 0;
        count[ch] -= 1;
    }

    return 1;
}
function setLocalStorage(name, value) {
    localStorage.setItem(name, value || "");
}
function getLocalStorage(name) {
    return localStorage.getItem(name);
}
async function error(text = 'errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'){
    addtext(text)
    await delay(2000);
    // window.open('about:blank', '_self').close();
}
function hoshoku(color) {
    color = color.replace(/^#/, '');

    if(color.length != 6) return console.log('カラーコードは6桁、ですよ〜？楽しないでくださいね♪')

    let r = parseInt(color.slice(0, 2), 16);
    let g = parseInt(color.slice(2, 4), 16);
    let b = parseInt(color.slice(4, 6), 16);

    let compR = (255 - r).toString(16).padStart(2, '0');
    let compG = (255 - g).toString(16).padStart(2, '0');
    let compB = (255 - b).toString(16).padStart(2, '0');

    let ato = `#${compR}${compG}${compB}`

    return ato;
}
function mixshoku(c1, c2, ratio = 0.5) {
    let toRGB = c => {
        c = c.replace('#', '');
        if (c.length == 3) c = c.split('').map(x => x + x).join('');
        let n = parseInt(c, 16);
        return [n >> 16, (n >> 8) & 255, n & 255];
    };

    let [r1, g1, b1] = toRGB(c1);
    let [r2, g2, b2] = toRGB(c2);

    let r = Math.round(r1 + (r2 - r1) * ratio);
    let g = Math.round(g1 + (g2 - g1) * ratio);
    let b = Math.round(b1 + (b2 - b1) * ratio);

    let ato = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

    return ato;
}
function ranshoku(){
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let ato = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    return ato
}
//#endregion
//#region log&text
let textDiv = document.querySelector('#text');
let autoDelay = 1;
let skipText = false;
let clearText = false;
let textShowing = 0;

function colorcheck(rawtext) {
    let text = [];
    let color = null;
    let colors = [
        {
            name: 'red',
            sym: '*',
            col: '#ff4040'
        },
        {
            name: 'pink',
            sym: '&',
            col: '#ff80bf'
        },
        {
            name: 'yell',
            sym: '^',
            col: '#ffff40'
        }
    ]

    for(let i = 0; i < rawtext.length; i++){
        let sym = false;
        for(let c of colors){
            if(rawtext[i] == c.sym && rawtext[i + 1] == c.sym){
                console.log(`→${rawtext[i]}← 発見！ ${c.name}色です`)
                color = color ? null : c.col;
                i++;
                sym = true;
                break;
            }
        }
        
        if(sym) continue;
        if(color) console.log(color)
        text.push({
            char: rawtext[i],
            color: color
        });
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
                            let span = document.createElement("span");
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
                    let span = document.createElement("span");
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
                let waitTime = autoDelay * 1000;
                let timeout = new Promise(resolve => setTimeout(resolve, waitTime));
                let userAction = new Promise(resolve => {
                    function waitToClear(event) {
                            if (event.type == 'click' || event.key == 'z' || event.key == 'Enter') {
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
    if(e.key == 'z' || e.key == 'Enter'){
        skipText = true;
    }
});

document.addEventListener('keyup', (e) => {
    if(e.key == 'z' || e.key == 'Enter'){
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
let mobileDesc = document.getElementById('mobileDesc');
document.addEventListener('mousemove', (e) => {
    mobileDesc.style.left = `${e.clientX + 10}px`;
    mobileDesc.style.top = `${e.clientY + 10}px`;
});
document.addEventListener('mouseover', (e) => {
    let descTarget = e.target.closest('[data-description]');
    if(descTarget){
        let desc = descTarget.dataset.description;
        mobileDesc.innerText = desc;
        mobileDesc.classList.add('show');
    }
});
document.addEventListener('mouseout', (e) => {
    let descTarget = e.target.closest('[data-description]');
    if(descTarget){
        mobileDesc.innerText = '';
        mobileDesc.classList.remove('show');
    }
});
//#endregion
//#region draggable
document.addEventListener('mousedown', e => {
    // let descTarget = e.target.closest('[data-description]');
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
    letructor(type, x = 'half', y = 'half', w = window.innerWidth/2, h = window.innerWidth/2){
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
let cricking = false;
document.addEventListener('pointerdown', (e) => {
    if(e.buttons == 0) clicking = true;
    if(e.buttons == 2) cricking = true;
});
document.addEventListener('pointerup', (e) => {
    if(e.buttons == 0) clicking = false;
    if(e.buttons == 2) cricking = false;
});
document.addEventListener('pointercancel', (e) => {
    if(e.buttons == 0) clicking = false;
    if(e.buttons == 2) cricking = false;
});
window.addEventListener('blur', () => { clicking = cricking = false; });

let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
//#endregion
//#region fonts
const Fonts = [
    // {src:'comicsans', type:'ttf'},
];
function fontsLoad(){
    let id = "font_load_css";
    let existing = document.getElementById(id);
    if(existing) existing.remove();

    let css = Fonts.map(f => {
        let src = `url('assets/${f.src}.${f.type}')`;
        let weight = f.weight ?? 'normal';
        return `@font-face{
            font-family:'${f.src}';
            src: ${src};
            font-weight: ${weight};
            font-style: normal;
            font-display: swap;
        }`;
    }).join('\n');

    let el = document.createElement('style');
    el.id = id;
    el.type = 'text/css';
    el.appendChild(document.createTextNode(css));
    document.head.appendChild(el);
}
fontsLoad();
//#endregion


//#region 農業しようぜ！
let farmD = document.getElementById('farmArea');
let farmC = {
    main:farmD.querySelector('.main'),
    joyst:farmD.querySelector('.joyst'),
    block: 0,
    row: 32, //正方形なんでcolは無し
    mx: 0,
    my: 0
}
farmC.Crops = [
	{
		name:'wheat',
		jpnm:'小麦',
		desc:'パンやらお菓子になる万能炭水化物。\n四毒の一味',
		time:'60',
		org:"seed", //if this.org == "seed": ${this.name}_seed
		res:1,
	},
	{
		
	}
]
let farmF = {};

/* 無し: #d4a174 */
/* 枯れ: #a57245 */
/* 濡れ: #713b0b */
farmF.load = () => {
    for(let i=0; i<farmC.row; i++){ //flex
        let div0 = document.createElement('div');
        div0.className = `row`;

        for(let i2=0; i2<farmC.row; i2++){
            console.log('mas')
            let div = document.createElement('div'); //block
            div.className = `mas m${i}${i2}`;
            div0.appendChild(div);
        }

        farmC.main.querySelector('.contain').appendChild(div0);
    }

    farmF.recalcBounds();
    farmF.setOffset(0,0);
    farmF.initJoystick();
}

farmF.recalcBounds = () => {
    let viewport = farmC.main;
    let container = farmC.main.querySelector('.contain');
    if(!viewport || !container) return console.error('DOM 構造が見つからない');

    let totalW = container.offsetWidth;
    let totalH = container.offsetHeight;
    let vw = viewport.clientWidth;
    let vh = viewport.clientHeight;

    let maxOffsetX = Math.min(0, vw - totalW); // 負または0
    let maxOffsetY = Math.min(0, vh - totalH);

    farmC.bounds = {
        minX: 0,
        minY: 0,
        maxX: maxOffsetX,
        maxY: maxOffsetY,
        viewportW: vw,
        viewportH: vh,
        totalW: totalW,
        totalH: totalH
    };
};

farmF.setOffset = (mx = NaN, my = NaN) => {
    if(!farmC.bounds) farmF.recalcBounds();
    let b = farmC.bounds;

    if(isNaN(mx)) mx = farmC.mx;if(isNaN(my)) my = farmC.my;
    mx = Math.max(b.maxX, Math.min(b.minX, mx));
    my = Math.max(b.maxY, Math.min(b.minY, my));
    
    farmC.mx = mx;
    farmC.my = my;

    let container = farmC.main.querySelector('.contain');
    container.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
};

farmF.moveBy = (dx = 0, dy = 0) => {
    farmF.setOffset(farmC.mx + dx, farmC.my + dy);
};

farmF.moveto = (id = NaN) => {
    if(isNaN(id)) return console.error('id が渡されてない...');
    let container = farmC.main.querySelector('.contain');
    if(!container) return console.error('container が無い');

    // 行数・列数を DOM から算出（load が作る構造に依存）
    let rowsEls = Array.from(container.children);
    let rowsCount = rowsEls.length || 1;
    let colsCount = rowsEls[0] ? rowsEls[0].children.length : farmC.row || 1;

    let blocks = colsCount * rowsCount;
    if(id < 0 || id >= blocks) return console.error('id が範囲外やで', id);

    let col = id % colsCount;
    let row = Math.floor(id / colsCount);

    let cellW = container.scrollWidth / colsCount;
    let cellH = container.scrollHeight / rowsCount;

    let tx = -Math.round(col * cellW);
    let ty = -Math.round(row * cellH);

    farmF.setOffset(tx, ty);
    console.log(`{debug} ${id} に移動しました (col:${col}, row:${row})`);
};

// 呼び出し: farmF.initJoystick(); を一度実行すること
farmF.initJoystick = () => {
    if(!farmC.main) return console.error('farmC.main が見つからない');
    if(farmC._joystickInited) return;
    farmC._joystickInited = true;

    let joyst = farmC.joyst;
    let base = joyst.querySelector('.base');
    let knob = base.querySelector('.knob');

    let radius = 48; // px, ノブ移動の最大半径（見た目）
    let maxPanSpeed = 800; // px/秒 の最大速度。好みで調整して。

    let active = false;
    let ptrId = null;
    let norm = {x:0, y:0};
    let lastTs = performance.now();
    let loopId = null;

    function clamp(v, a, b){ return Math.max(a, Math.min(b, v)); }

    function applyStep(now){
        let dt = Math.max(1, now - lastTs) / 1000; // 秒
        lastTs = now;
        // norm は -1..1
        let dx = -norm.x * maxPanSpeed * dt;
        let dy = -norm.y * maxPanSpeed * dt;
        farmF.moveBy(dx, dy);
        loopId = requestAnimationFrame(applyStep);
    }

    base.addEventListener('pointerdown', (e) => {
        base.setPointerCapture(e.pointerId);
        ptrId = e.pointerId;
        active = true;
        lastTs = performance.now();
        if(!loopId) loopId = requestAnimationFrame(applyStep);
    });

    base.addEventListener('pointermove', (e) => {
        if(!active || e.pointerId != ptrId) return;
        let r = base.getBoundingClientRect();
        let cx = r.left + r.width/2;
        let cy = r.top + r.height/2;
        let dx = e.clientX - cx;
        let dy = e.clientY - cy;
        let dist = Math.hypot(dx, dy) || 1;
        let mx = dx / dist * Math.min(dist, radius);
        let my = dy / dist * Math.min(dist, radius);
        knob.style.transform = `translate(${mx}px, ${my}px)`;
        norm.x = clamp(mx / radius, -1, 1);
        norm.y = clamp(my / radius, -1, 1);
    });

    base.addEventListener('pointerup', (e) => {
        if(e.pointerId != ptrId) return;
        base.releasePointerCapture(ptrId);
        ptrId = null;
        active = false;
        // 戻すアニメーション（即戻したければコメントアウト）
        knob.style.transition = 'transform 0.12s';
        knob.style.transform = 'translate(0, 0)';
        norm.x = 0; norm.y = 0;
        setTimeout(()=> knob.style.transition = '', 130);
        if(loopId){ cancelAnimationFrame(loopId); loopId = null; }
    });

    // --- キーボードサポート（WASD / 矢印） ---
    farmC._keyState = { up:false, down:false, left:false, right:false };
    let keyMap = {
        'ArrowUp':'up','w':'up','W':'up',
        'ArrowDown':'down','s':'down','S':'down',
        'ArrowLeft':'left','a':'left','A':'left',
        'ArrowRight':'right','d':'right','D':'right'
    };

    function updateNormFromKeys(){
        let k = farmC._keyState;
        let nx = (k.right?1:0) - (k.left?1:0);
        let ny = (k.down?1:0) - (k.up?1:0);
        if(nx == 0 && ny == 0) return norm.x = 0, norm.y = 0
        let mag = Math.hypot(nx, ny) ?? 1;
        norm.x = nx / mag;
        norm.y = ny / mag;
        knob.style.transform = `translate(${norm.x * radius}px, ${norm.y * radius}px)`;
    }

    window.addEventListener('keydown', (e) => {
        let k = keyMap[e.key];
        if(!k) return;
        farmC._keyState[k] = true;
        updateNormFromKeys();
        if(!loopId) lastTs = performance.now(), loopId = requestAnimationFrame(applyStep);
    });

    window.addEventListener('keyup', (e) => {
        let k = keyMap[e.key];
        if(!k) return;
        farmC._keyState[k] = false;
        updateNormFromKeys();
        if(norm.x == 0 && norm.y == 0 && loopId) cancelAnimationFrame(loopId), loopId = null;
        if(norm.x == 0 && norm.y == 0) knob.style.transform = 'translate(0,0)';
    });
};

//#endregion

//#region 画像と音声のロード
let images = {};
let Imgs = {
    systems:['error','star1','star2','star3'],
    farms:['apple','carrot','apple_gold','hoe','potato','wheat']
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

            // if(imageB == imageA) start();
            if(imageB == imageA) farmF.load();
        };
        img.onerror = () => {
            console.error(`Image ${belong}/${num} failed to load.`);
            img.src = `assets/systems/error.png`;
            imageB++;

            // if(imageB == imageA) start();
            if(imageB == imageA) farmF.load();
        };

        if(!images[belong]) images[belong] = {};
        images[belong][num] = img;
    };
};
// #endregion

