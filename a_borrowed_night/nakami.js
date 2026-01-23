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

    requestAnimationFrame(() => newDiv.style.right = `${window.innerWidth + newDiv.offsetWidth}px`);
    
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

    let easeOutCubic = (t) => {return 1 - Math.pow(1 - t, 3)};

    function frame(now){
        let t = Math.min(1, (now - start) / duration);
        let e = easeOutCubic(t);
        let tsY = distance * e;
        let tsX = jitter * (1 - e);
        node.style.transform = `translate(-50%, -50%) translateY(${tsY}px) translateX(${tsX}px)`;
        node.style.opacity = String(1 - t);
        if(t < 1) requestAnimationFrame(frame);
        else node.remove();
    };

    requestAnimationFrame(frame);
};
function kaijou(num){
    if(num == 0) return 0;
    if(num == 1) return 1;
    return num * kaijou(num - 1);
};
function kaikyu(sta, end, row, val){
    if(typeof sta != 'number' || typeof end != 'number' || typeof row != 'number' || typeof val != 'number') return console.error('えっと、できれば..引数は全て数字にして欲しい...です......');
    if(row <= 0) return console.error(`row${row}でしたけど...大丈夫ですか？`);
    if(sta > end) return console.error('え、えっと...多分、逆です......');
    if(val < sta || val > end) return console.error('こ、この値..枠から外れてます....');

    let kari = Math.floor((val-sta) / row);
    let sta2 = sta + kari*row;
    let end2 = sta + row-1;
    if(end2 > end) end2 = end;

    let arr = [];
    for(let i = sta2; i <= end2; i++) arr.push(i);

    return arr;
};
function arraySelect(array){
    let select = Math.floor(Math.random()*array.length);
    return array[select];
};
function arrayShuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        let i2 = Math.floor(Math.random() * (i + 1));
        [array[i], array[i2]] = [array[i2], array[i]];
    };
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
    };
    return counts;
};
function arrayMult(array){
    return array.reduce((a, v) => a * v, 1);
};
function arrayGacha(array, prob){
    if(array.length != prob.length) throw new Error("長さがあってないっす！先輩、ちゃんとチェックした方がいいっすよ〜？");
    let total = prob.reduce((sum, p) => sum + p, 0);
    let random = Math.random() * total;
    for (let i = 0; i < array.length; i++){
        if(random < prob[i]) return array[i];
        random -= prob[i];
    };
};
function hask(obj, key){
    let res = obj.hasOwnProperty(key);
    res = res ? 1 : 0;
    return res;
};
function copy(moto) {
    if(Array.isArray(moto)){
        let arr = [];
        for(let i = 0; i < moto.length; i++){
            arr.push(copy(moto[i]));
        }
        return arr;
    }else if(moto != null && typeof moto == 'object'){
        let obj = {};
        for(let key in moto){
            if(moto.hasOwnProperty(key)){
                obj[key] = copy(moto[key]);
            }
        };
        return obj;
    }else{
        return moto;
    };
};
function probability(num){
    return Math.random()*100 <= num;
    //例:num == 20 → randomが20以内ならtrue,elseならfalseを返す
};
function random(min, max){
    if(max < min) [min, max] = [max, min];
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(num);
};
function fl(val, arr = [0, 1]){
    let res = val == arr[0] ? arr[1] : arr[0];
    return res;
};
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
    };
    let optmat = arrayMult(optvals);
    let cal = (kaijou(len) / optmat) - 1;

    let loopen = loop;
    // console.log(`総数:${cal} 回数:${loopen}`);
    if(cal < loopen) menjo = 1;
    
    let reses = [];
    while(loopen > 0){
        loopen -= 1;
        let res = arrayShuffle(optout).join(''); 
        if(reses.includes(res)){loopen += 1; continue};
        
        if(res == text && !menjo){loopen += 1; continue;}

        if(res == text && menjo && reses.length < cal){loopen += 1; continue}
        else if(res == text && menjo) res = '[重複エラー]';

        reses.push(res);
    };
    
    return reses.join(bet);
};
function anagramCan(mae, ato){
    if(mae.length != ato.length) return 0;

    let count = {};
    for(let ch of mae) count[ch] = (count[ch] || 0) + 1;

    for(let ch of ato){
        if(!count[ch]) return 0;
        count[ch] -= 1;
    };

    return 1;
};
function setLocalStorage(name, value){
    localStorage.setItem(name, value || "");
};
function getLocalStorage(name){
    return localStorage.getItem(name);
};
async function error(text = 'errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'){
    addtext(text);
    await delay(2000);
    // window.open('about:blank', '_self').close();
};
function hoshoku(color){
    color = color.replace(/^#/, '');

    if(color.length != 6) return console.log('カラーコードは6桁、ですよ〜？楽しないでくださいね♪');

    let r = parseInt(color.slice(0, 2), 16);
    let g = parseInt(color.slice(2, 4), 16);
    let b = parseInt(color.slice(4, 6), 16);

    let compR = (255 - r).toString(16).padStart(2, '0');
    let compG = (255 - g).toString(16).padStart(2, '0');
    let compB = (255 - b).toString(16).padStart(2, '0');

    let ato = `#${compR}${compG}${compB}`;

    return ato;
};
function mixshoku(c1, c2, ratio = 0.5){
    let toRGB = c => {
        c = c.replace('#', '');
        if (c.length === 3) c = c.split('').map(x => x + x).join('');
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
};
function ranshoku(){
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let ato = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    return ato;
};
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
    ];

    for(let i = 0; i < rawtext.length; i++){
        let sym = false;
        for(let c of colors){
            if(rawtext[i] == c.sym && rawtext[i + 1] == c.sym){
                console.log(`→${rawtext[i]}← 発見！ ${c.name}色です`);
                color = color ? null : c.col;
                i++;
                sym = true;
                break;
            }
        };

        if(sym) continue;
        if(color) console.log(color);
        text.push({
            char: rawtext[i],
            color: color
        });
    }
    return text;
};

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
};
async function addtext(raw){
    if(!raw) return console.log('「内容が？内容が〜〜？ないよ〜〜〜つってwwww直せ」');

    if(textShowing){
        queueAddtext.push(raw);

        if(!loopAddtext) waitforAddtext();
        return;
    };
    
    textShowing = 1;
    text = colorcheck(raw);
    textDiv.innerHTML = "";
    textDiv.style.display = "block";
    let index = 0;
    clearText = false;

    return new Promise((resolve) => {
        async function type(){
            if(index < text.length){
                if(skipText){
                    while (index < text.length) {
                        let span = document.createElement("span");
                        span.textContent = text[index].char;
                        if(text[index].color) span.classList.add(`color-${text[index].color}`);
                        textDiv.appendChild(span);

                        index++;
                    }
                    index = text.length;
                    skipText = false;
                    setTimeout(type, 10);
                }else{
                    let span = document.createElement("span");
                    span.textContent = text[index].char;
                    if(text[index].color) span.classList.add(`color-${text[index].color}`);
                    textDiv.appendChild(span);

                    index++;
                    setTimeout(type, 80); // 次の文字を表示する間隔
                }
            }else{
                addlog(textDiv.innerHTML);
                let waitTime = autoDelay * 1000;
                let timeout = new Promise(resolve => setTimeout(resolve, waitTime));
                let userAction = new Promise(resolve => {
                    function waitToClear(event) {
                        if(event.type === 'click' || event.key === 'z' || event.key === 'Enter'){
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
                    resolve('end');
                });
            }
        };
        type();
    });
};
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
let log_open = (code = NaN) => {
    jump:{
        if(!isNaN(code)) break jump;

        logOOmoto.classList.toggle('tog');
        logOpener.textContent = logOOmoto.classList.contains('tog') ? '<' : '>';
        return;
    };

    if(code == 1){
        logOOmoto.classList.add('tog');
        logOpener.textContent = '<';
    };
    if(code == 0){
        logOOmoto.classList.remove('tog');
        logOpener.textContent = '>';
    };

};
logOpener.addEventListener('click', log_open);

function addlog(text){
    log.innerHTML += text + '<br>';
    log.scrollTop = log.scrollHeight;
};
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
    
    function onMouseMove(e){
        div.style.left = `${e.clientX - offsetX}px`;
        div.style.top = `${e.clientY - offsetY}px`;
    };

    function onMouseUp(){
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

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
        };

        let tate = ['y', 'h'];
        for(let n of tate){
            if(typeof eval(n) != 'string' || typeof eval(n) == 'string' && !eval(n).endsWith('%')) continue;
            let num = eval(n).slice(0, -1);
            eval(n) = num * window.innerHeight / 100;
        };

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
        };

        if(typeof dict != 'object') return 1;

        for(let key in dict) this.youso.setAttribute(key, dict[key]);

        return 0;
    };

    styleAdd(dict){
        for(let key in dict) this.youso.style[key] = dict[key];
    };

    classAdd(name){this.youso.classList.add(name)};
    classRem(name){this.youso.classList.remove(name)};
    classTog(name){this.youso.classList.toggle(name)};
    classHas(name){
        let is = this.youso.classList.contains(name);
        return is;
    };

    evAdd(type, func){
        this.youso.addEventListener(type, func);
    };

    yousoAdd(youso){
        this.youso.appendChild(youso);
    };

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

    mono.evAdd('click', () => nicoText('clicked'));

    mono.append();
};

//#endregion
//#region alertD
class alertD{
    constructor(text, elses = {}){
        this.text = text;
        for(let key in elses) this[key] = elses[key];
        /*
            back: 背景色
            barc: barの色
            time: 消えるまでの時間[s]
            data-...: data-...をそのままsetAttribute
        */

        this.datas = [];
        //data-を
        for(let key in elses){
            if(!key.startsWith('data-')) continue;
            this.datas.push({key: key, val: elses[key]});
        }
    };
    x(aru){
        this.x = aru;
    };
    appear(){
        let back = this.back || '#ffffff';
        let barc = this.barc || '#80ff80';

        let div = document.createElement('div');
        div.classList.add('alertD');
        div.style.background = back;
        div.style.boxShadow = `${hoshoku(back)} 5px 5px 20px`;

        let row = document.createElement('div');
        row.classList.add('row');
         let icon = document.createElement('div');
         icon.classList.add('icon');
         icon.style.background = barc;
         icon.style.color = back;
         icon.textContent = '！';
         row.appendChild(icon);

         let text = document.createElement('div');
         text.innerText = this.text;
         text.style.color = hoshoku(back);
         row.appendChild(text);
        div.appendChild(row);

        let x = document.createElement('div');
        x.className = 'x';
        x.innerText = '×';
        x.style.color = hoshoku(back);
        x.addEventListener('click', () => this.delete());
        div.appendChild(x);
        
        let bar = document.createElement('div');
        bar.classList.add('bar');
         let inner = document.createElement('div');
         inner.classList.add('inner');
         inner.style.background = barc;
         bar.appendChild(inner);
        div.appendChild(bar);

        //data
        for(let data of this.datas){
            div.setAttribute(data.key, data.val);
        }

        document.body.appendChild(div);
        this.div = div;

        setTimeout(() => {
            div.classList.add('show');
        }, 100);

        // pointerが乗ってる間はthis.loopを0にする
        div.addEventListener('pointerenter', () => this.loop = 0);
        div.addEventListener('pointerleave', () => this.loop = 1);

        let time = 0;
        let limit = 500;
         if(this.time) limit = this.time*100;
        this.loop = 1;
        this.interval = setInterval(() => {
            if(this.loop) time++;
            inner.style.width = `${time/limit*100}%`;
            
            if(time == limit) this.delete();
        }, 10);
    };
    delete(){
        clearInterval(this.interval);
        let div = this.div;
        div.classList.remove('show');
        setTimeout(() => div.remove(), 1000);
    };
};
//#endregion
//#region observer
let keys = {};
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
window.addEventListener('blur', () => {clicking = cricking = false});

let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
//#endregion
//#region fonts
const Fonts = [
    {src:'comicsans', type:'ttf'},
    {src:'hangyaku', type:'ttf'},
    {src:'kurobara', type:'ttf'},
    {src:'misaki', type:'ttf'},
];
function fontsLoad(){
    let id = "font_load_css";
    let existing = document.getElementById(id);
    if(existing) existing.remove();

    let css = Fonts.map(f => {
        let src = `url('assets/fonts/${f.src}.${f.type}')`;
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
//#region images & sounds
let images = {};
let sounds = {};
let loaC = {
    imgT: 0, imgD: 0,
    souT: 0, souD: 0,
    erd: 0,
    ended: 0
}
let loaF = {};
loaC.imgL = {
    systems:['error'],
    maps:['none', 'event', 'event_break', 'start', 'boss', 'enemy', 'enemy_gachi', 'enemy_metal', 'enemy_gold', 'enemy-high', 'fire_maki', 'chest_a', 'chest_b', 'chest_c', 'chest_d']
}
loaC.imgT = Object.values(loaC.imgL).length;

loaC.souL = {
    // se:['error'],
    // bgm:[],
}
loaC.souT = Object.values(loaC.souL).length;

loaF.load = async() => {
    if(await loaF.loadI()) return 1;

    return 0;
}
loaF.loadI = async() => {
    let kasan = () => {
        loaC.imgD++;
        if(loaC.imgD == loaC.imgT) loaF.loadS();
    }

    if(loaC.imgT == 0) return loaF.loadS();
    for(let belong in loaC.imgL){
        images[belong] = {};

        for(let name of loaC.imgL[belong]){
            let img = new Image();
            img.src = `assets/images/${belong}/${name}.png`;
            img.onload = kasan();
            img.onerror = () => {
                console.error(`Image assets/images/${belong}/${name}.png failed to load.`);
                loaC.erd += 1;
                 if(loaC.erd > 20) return console.error('さすがにやりすぎbonus'), 1;
                img.src = `assets/images/systems/error.png`;
                kasan();
            };
            
            images[belong][name] = img;
        }   
    }
}

loaF.loadS = async() => {
    let kasan = () => {
        loaC.souD += 1;
        if(loaC.souD == loaC.souT) loaF.end();
    }
    
    if(loaC.souT == 0) return loaF.end();
    for(let belong in loaC.souL){
        sounds[belong] = {};

        for(let name of loaC.souL[belong]){
            let sound = new Audio();
            sound.preload = 'auto';
            sound.src = `assets/sounds/${belong}/${name}.mp3`;
            if(belong == 'bgm'){
                sound.loop = true;
                sound.dataset.type = 'bgm';
                sound.volume = souC.bgm;
            }
            if(belong == 'se'){
                sound.dataset.type = 'se';
                sound.volume = souC.se;
            }
            sound.addEventListener('canplaythrough', () => {
                kasan();
            }, {once: 1});
            sound.onerror = () => {
                console.error(`Sound assets/sounds/${belong}/${name} failed to load.`);
                loaC.erd += 1;
                 if(loaC.erd > 20) return console.error('さすがにやりすぎbonus'), 1;
                sound.src = `assets/sounds/se/error.mp3`;
                kasan();
            };

            sounds[belong][name] = sound;
        }
    };

}
loaF.end = () => {
    console.log('images & sounds loaded!');
    console.log(`error件数: ${loaC.erd}`);
    start();
}

let souC = {
    se: 0.5,
    bgm: 0.5,
    nowBgm: null
}
function soundPlay(name){
    if(!sounds[name]) return soundPlay('error');
    let proto = sounds[name];

    if(proto.dataset.type == 'bgm'){
        if(souC.nowBgm == name && !proto.paused) return;
        if(souC.nowBgm && sounds[souC.nowBgm] && !sounds[souC.nowBgm].paused){
            sounds[souC.nowBgm].pause();
            sounds[souC.nowBgm].currentTime = 0;
        }
        proto.volume = souC.bgm;
        proto.play().catch(e => console.warn('BGM 再生エラー', e));
        souC.nowBgm = name;
    }else{
        let clone = proto.cloneNode(true);
        clone.volume = souC.se;
        clone.dataset.type = 'se';
        clone.addEventListener('ended', ()=> {
            try{clone.src = '';}catch(e){}
        });
        clone.play().catch(e => console.warn('SE 再生エラー', e));
    }
}
function soundStop(){
    Object.keys(sounds).forEach(k => {
        try{
            sounds[k].pause();
            sounds[k].currentTime = 0;
        }catch(e){}
    });
    souC.nowBgm = null;
    document.querySelectorAll('audio,video').forEach(el => { el.pause(); el.currentTime = 0; });
}
function soundVolume(code, val){
    if(typeof code == 'number' && typeof val == 'undefined') val = code, code = 'both';
    if(typeof val !== 'number') return console.error('val は数値にして');
    let v = val;
    if(v > 1) v = Math.max(0, Math.min(1, v/100)); // 0-100 指定を 0-1 に
    v = Math.max(0, Math.min(1, v));

    if(code == 'se' || code == 'both'){
        souC.se = v;
        for(k in sounds) if(sounds[k].dataset.type == 'se') sounds[k].volume = souC.se;
    }
    if(code == 'bgm' || code == 'both'){
        souC.bgm = v;
        for(k in sounds) if(sounds[k].dataset.type == 'bgm') sounds[k].volume = souC.bgm;
        if(souC.nowBgm && sounds[souC.nowBgm]) sounds[souC.nowBgm].volume = souC.bgm;
    }

    console.log(`[soundVolume] se:${souC.se} bgm:${souC.bgm}`);
}
soundVolume(50);

document.addEventListener('DOMContentLoaded', async() => await loaF.load());
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
                
                let img = images.maps[m.name].cloneNode(true);
                img.className = `img ${m.name}`;
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



//#region start
async function start(){
    Style.tekiou();
    await mapF.nextFloor();
}
//#endregion