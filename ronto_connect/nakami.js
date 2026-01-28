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
    {src:'cube12', type:'ttf'},
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

//#region セクラテス
let secrates = [
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
        name:'darkness',
        arr:['d','a','r','k','n','e','s','s'],
        limit:'n',
        func: async function(){
            buffadd(cm(), cm(), 'pow', 2, 1);
            buffadd(cm(), cm(), 'she', 2, 1);
            buffadd(cm(), cm(), 'burn', 2, 1);
            buffadd(cm(), cm(), 'poison', 2, 1);
            buffadd(cm(), cm(), 'palsy', 2, 1);
            buffadd(cm(), cm(), 'freeze', 2, 1);
        }
    },
    {
        ind:0,
        name:'givememoney',
        arr:['g','i','v','e','m','e','m','o','n','e','y'],
        limit:'n',
        func: async function(){
            // if(probability(60)) nicoText('乞食成功！'), euroF.add(100);
            // else nicoText('乞食失敗');
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
            img.src = 'assets/images/systems/hakai[1].png'
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

            img.src = 'assets/images/systems/hakai[2].png'
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
]
document.addEventListener('keydown', async function(e){
    let key = e.key.toLowerCase();
    if(key == 'escape') loop = 0;


    //これ以降はinput内では機能しない
    if(document.activeElement.tagName == 'INPUT') return;
    if(document.activeElement.tagName == 'TEXTAREA') return;

    for(let sec of secrates){
        let nke = sec.arr[sec.ind];
        // console.log(`必要は${nke}、押されたは${key}！`);
        if(key == nke){
            sec.ind += 1;
            if(sec.ind == sec.arr.length && sec.limit){
                console.log(`ジャンゴ！ ${sec.name}発動！！`);
                sec.ind = 0;
                let res = await sec.func();
                if(!res && sec.limit != 'n') sec.limit -= 1;
            }
        }
        else sec.ind = 0;
    }
})
//#endregion


//#region ゲーム開始時ログインの動き\
const firebaseConfig = {
    apiKey: "AIzaSyBN5V_E6PzwlJn7IwVsluKIWNIyathhxj0",
    authDomain: "koppepan-orange.firebaseapp.com",
    databaseURL: "https://koppepan-orange-default-rtdb.firebaseio.com",
    projectId: "koppepan-orange",
    storageBucket: "koppepan-orange.appspot.com",
    messagingSenderId: "730150198097",
    appId: "1:730150198097:web:076a074a3d406053155170",
    measurementId: "G-MYKJWD203Z"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
let chatroom = 1;
let userDataGen;
let loginD = document.querySelector('#loginArea');
let loginC = {
    nameD: loginD.querySelector('.username input'),
    passD: loginD.querySelector('.password input'),
    sendD: loginD.querySelector('.send'),
    XD: loginD.querySelector('.x'),

    dolD: loginD.querySelector('.dolphin'),
     dolDT: loginD.querySelector('.dolphin .text'),
     dolDI: loginD.querySelector('.dolphin img'),
    dolP: 0,
}
// let loginTD = document.querySelector('#upper .login');

let messagesRef = database.ref(`rontoConnect/rooms/${chatroom}/messages`);
let usersRef = database.ref(`users/null`);
let rontoRef = database.ref(`users/null/rontoConnect`);

// loginTD.addEventListener('click', () => loginD.classList.add('appe'));
loginC.XD.addEventListener('click', () => loginD.classList.remove('appe'));
// loginC.XD.addEventListener('click', () => error('では！'));

loginC.sendD.addEventListener('click', async function(e){
    username = loginC.nameD.value;
    let password = loginC.passD.value;
    usersRef = database.ref(`users/${username}`);

    // データベースでユーザーが存在するか確認
    usersRef.once('value').then(async function(snapshot){
        if(snapshot.exists()){
            nicoText('オカエリナサイ マセ');
            userData = snapshot.val();
            if(userData.password == password){
                console.log('success')
                login();
                setLocalStorage("username", username); // ログイン成功時
            }else{
                nicoText('パスワードが間違っています');
            }
        }else{
            nicoText('初回起動 感謝シマス-- シバシ オ待チヲ  ガピッ');
            usersRef = database.ref(`users/${username}`);
            await delay(100);
            usersRef.update({
                password: password,
            });
            await delay(50);
            
            valorimar = 0;
            bankvalorimar = 0;
            rank = 1;
            rpt = 0;

            console.log('user maked!!');
            login();
            // if(username != 'dolphin') setLocalStorage("username", username);
            setLocalStorage("username", username);
        }
    });
    
});

loginC.dolDI.addEventListener('click', () => {
    switch(loginC.dolP){
        case 0:
            loginC.dolDT.innerHTML = '規約に同意する？\n→<a href="assets/txts/dolphin.html" target="_blank">イルカ:利用規約</a>';
            loginC.dolP = 1;
            break;
        
        case 1:
            loginC.nameD.value = 'dolphin';
            loginC.passD.value = 'Iloveirukaice';
            loginC.sendD.click();

            loginC.dolP = 0;
            loginC.dolDT.textContent = 'お前を消す方法';
            break;
    }
});

async function login(){
    usersRef.update({
        status: 'online'
    });
    loginD.classList.remove('appe');


    // データを取得する関数)
    userData = await load();
    await delay(50);


    uppF.tekiou();
}

function save(){
    if(!usersRef) return 1;
    updateUI();

    usersRef.update(newData);
    
    return 0;
}


async function load0(){
    let snapshot = await usersRef.once('value');
    if(snapshot.exists()){
        userDataGen = snapshot.child('rontoConnect').val();
        console.log('rontoConnect:', userDataGen);
    }else{
        nicoText('データガ ミツカリマセン デシタ');
    }

    return userDataGen;
}
async function load(){
    let data = await load0();
    // rank|rpt|valorimar|euro|bankeuro|
}

//#endregion


//#region アッパーエンジン
let uppD = document.getElementById('upper');
let uppC = {
    homeD: uppD.querySelector('.home'),
     HnameD: uppD.querySelector('.home .name'),
     HRankD: uppD.querySelector('.home .rank'),
      HRbarD: uppD.querySelector('.home .rank .bar'),
      HRD: uppD.querySelector('.home .rank .val'),
     HRimiD: uppD.querySelector('.home .rimi'),

    ueD: uppD.querySelector('.ue'),
    ue: 0,
}
let uppF = {};

uppF.ue = () => uppD.classList.toggle('agari');
uppC.ueD.addEventListener('click', uppF.ue);

uppF.update = () => {
    // 名前とかレベルのあれを

}

uppF.tekiou = () => {
    // ダンジョン中はこっち。
}
//#endregion

//#region アンダーニンジャ(没ed)

//没ed。別で使えるかも？
/*

let undD = document.getElementById('under');
let undC = {
    dragging: 0,
    kirock: 0,
    shote: 0,
    pointerId: null,
    openD: undD.querySelector('.opener'),
};
let undF = {};
undF.getBottom = (el) => parseFloat(getComputedStyle(el).bottom) || 0;
undF.clamp = (v, a, b) => Math.max(a, Math.min(b, v));

undC.openD.addEventListener('pointerdown', (e) => {
    if(e.button && e.pointerType === 'mouse') return;
    e.preventDefault();
    undD.setPointerCapture(e.pointerId);
    undC.drag = 1;
    undC.pointerId = e.pointerId;
    undC.kirock = e.clientY;
    undC.shote = undF.getBottom(undD);
});

document.addEventListener('pointermove', (e) => {
    if(!undC.drag || e.pointerId !== undC.pointerId) return;
    const dy = e.clientY - undC.kirock;
    // shote - dy で「上に引っ張ると open（bottom -> 0）」になる
    let newBottom = undC.shote - dy;
    let all = undD.offsetHeight;
    const min = -all; // 完全に隠れた状態
    const max = -all*0.2; // 完全に表示されている状態
    newBottom = undF.clamp(newBottom, min, max);
    undD.style.bottom = `${newBottom}px`;
});

document.addEventListener('pointerup', (e) => {
    if(!undC.drag || e.pointerId !== undC.pointerId) return;
    undC.drag = 0;
    try{undD.releasePointerCapture(e.pointerId);}catch{}
    undD.classList.remove('no-transition');

    undC.pointerId = null;
});

*/

//#endregion

//#region Friendについて
let FriC = {
    
}
let FriF = {};
FriF.narabe = () => {
    const collator = new Intl.Collator('ja', { usage: 'sort', sensitivity: 'variant' });

    const sorted = [...Friends].sort((a, b) => {
        const ra = (a.ruby || '').normalize('NFKC').replace(/[\u3000\s]+/g, '');
        const rb = (b.ruby || '').normalize('NFKC').replace(/[\u3000\s]+/g, '');
        return collator.compare(ra, rb);
    });

    return sorted;
}
FriF.find = (name) => {
    let fri = Friends.find(a => a.name == name);

    //なかったぽよ...あ、rubyだったのかな？
    if(!fri) fri = Friends.find(a => a.ruby == name);

    //なかったぽよ...
    if(!fri) return null;

    return fri;
}

FriF.num = (name) => {
    let fri = FriF.find(name);
    if(!fri) return -1;

    let narabe = FriF.narabe();
    let num = narabe.findIndex(a => a.name == fri.name);

    return num;
}

FriF.numold = (num) => {
    let keta = 2;
    // toStringでketaに合うようにする 例:01 13
    let str = num.toString().padStart(keta, '0');
}
//#endregion


//#region areaについて
let AreC = {
    now:null,
}
let AreF = {};

AreC.list = [
    {
        name:'login',
        rank:5,
        back:'#865e00'
    },
    {
        name:'home',
        rank:2,
        back:'#e3e7eb'
    },
    {
        name:'farm',
        rank:2,
        back:'#ffc744'
    },
    {
        name:'title',
        rank:7,
        back:'#001748'
    },
    {
        name:'loby',
        rank:2,
        back:'#87ceeb'
    },
    {
        name:'field',
        rank:3,
        back:'#8feb87'
    },
    {
        name:'bt',
        rank:4,
        back:'#001748'
    }
]

AreF.move = (to) => {
    console.log(`[area移動] ${AreC.now} => ${to}`);
    let area = AreC.list.find(a => a.name == to);
    if(!area) return console.log('そんなエリアないっすよ〜？');
    AreC.now = area.name;
    Style.area.back = area.back;
    Style.area.rank = area.rank;
    Style.tekiou();

    for(let n of AreC.list){
        let div = document.getElementById(`${n.name}Area`);
        if(n.name == to) div.classList.add('appe');
        else div.classList.remove('appe');
    }
}
AreF.move('home');


let movlis = document.getElementById('movlis');
let movlising = 0;
for(let n of AreC.list){
    let li = document.createElement('div');
    li.textContent = n.name;
    li.className = 'item';

    li.addEventListener('click', () => AreF.move(n.name));

    movlis.querySelector('.list').appendChild(li);
}
document.addEventListener('keydown', (e) => {
    if(e.key != 'm' || movlising) return;
    movlis.style.left = `${mouseX - movlis.offsetWidth/2}px`;
    movlis.style.top = `${mouseY}px`;
    movlis.classList.add('tog');
    movlising = 1;
})
document.addEventListener('keyup',e => {
    if(e.key != 'm') return;
    movlis.classList.remove('tog');
    movlising = 0;
})

//#endregion


//#region ホーム
let homD = document.getElementById('homeArea');
let homC = {
    roZ:homD.querySelector('.col.c1'),
     goLobyD:homD.querySelector('.launch'),
     endD:homD.querySelector('.close'),
    fiZ:homD.querySelector('.col.c2'),
     goFarmD:homD.querySelector('.farm'),
}
let homF = {};
homF.owarune = () => {
    error('終わるね。')
}
homC.endD.addEventListener('click', homF.owarune);

homF.goLoby = async() => {
    AreF.move('title');
    await delay(1500);
    AreF.move('loby');
}
homC.goLobyD.addEventListener('click', homF.goLoby);

homC.goFarmD.addEventListener('click', () => AreF.move('farm'));

//#endregion

//#region ロント・コネクト
//#endregion

//#region 農業しようぜ！
let farmD = document.getElementById('farmArea');
let farmC = {
    c: farmD.querySelector('.farm'),
    ctx: farmD.querySelector('.farm').getContext('2d'),
}
let farmF = {};

farmF.resize = () => {
    let widrey = window.innerWidth;
    widrey *= 0.8;
    farmC.c.width = widrey;
    farmC.c.height = widrey;
}
farmF.resize();
window.addEventListener('resize', farmF.resize);

//#endregion

//#region field
let fieD = document.getElementById('fieldArea');
let fieC = {
    can: fieD.querySelector('.field'),
    ctx: fieD.querySelector('.field').getContext('2d'),
    row:8, //1列にある数
    mas:null, //1マスの大きさ(asp:1/1)
    // mases:[],
    backM:[],
    objs:[],
}
let fieF = {};
fieF.load = () => {
    fieF.resize();
}

let stage = "草原";
let floor = 0;

fieF.resize = () => { 
    let wid = window.innerWidth * 0.8;
    fieC.can.width = wid;
    fieC.can.height = wid;
    fieC.mas = wid / fieC.row;
}
document.addEventListener('resize', fieF.resize);

async function pUpdate(){
    let p = fieF.get();
    if(p.moving) return;
    
    let moved = 0;
    let mv = 1;
    {
        if((keys.w || keys.arrowup) && !p.moving){
            if(p.dir == 0) await fieF.move(p, 'add', 0, -mv);
            else p.dir = 0;
        }
        if((keys.s || keys.arrowdown) && !p.moving){
            if(p.dir == 180) await fieF.move(p, 'add', 0, mv);
            else p.dir = 180;
        };
        if((keys.a || keys.arrowleft) && !p.moving){
            if(p.dir == 270) await fieF.move(p, 'add', -mv, 0);
            else p.dir = 270;
        };
        if((keys.d || keys.arrowright) && !p.moving){
            if(p.dir == 90) await fieF.move(p, 'add', mv, 0);
            else p.dir = 90;
        };
    }

    if((keys.z || keys.enter) && textShowing == 0 && !p.moving){
        // 今乗ってる（on == true かつ 座標が同じ） => obon認定

        let obon = fieC.objs.filter(a => a.x == p.x && a.y == p.y && a.on);
        if(obon.length > 1) return console.log(obon,'←onのやつらが重なってるみたいっす！');
        if(obon.length == 1){
            obon = obon[0];
            let data = Objectdatas.find(a => a.id == obon.id)
            if(!data) return console.error(obon,'←これのidの処理、書いてないっすよ〜？(ニヤっ)');

            let res = data.process();
            fieF.draw();

            if(res) return 1;
        }

        // 目の前にあるやつ（on == false かつ 向いてる方向）
        let karix = 0, kariy = 0;
        switch (p.dir) {
            case 0: kariy -= 1; break;
            case 90: karix += 1; break;
            case 180: kariy += 1; break;
            case 270: karix -= 1; break;
        }
        
        //onしてない => nobon認定
        let nobon = fieC.objs.filter(a => a.x == p.x + karix && a.y == p.y + kariy && !a.on)
        if(nobon.length > 1) return console.log(nobon,'←not onのやつらが重なってるみたいっす！');
        if(nobon.length == 1){
            nobon = nobon[0];
            let data = Objectdatas.find(a => a.id == nobon.id);
            console.log(nobon, data)
            if(!data) return console.error(nobon,'←これのidの処理、書いてないっすよ〜？(ニヤっ)');

            let res = data.process();
            fieF.draw();

            if(res) return 1;
        }
    }

    if(p.x < 0 || fieC.row < p.x || p.y < 0 || fieC.row < p.y) error();
    
};

fieF.draw = async() => {
    fieC.ctx.clearRect(0, 0, fieC.can.width, fieC.can.height); // 画面をクリア

    //background、そのまま背景
    for(let y=0; y<fieC.row; y++){
        for(let x=0; x<fieC.row; x++){
            let img = images['maps'][stage][fieC.backM[y][x]];
            // console.log  (img)
            fieC.ctx.drawImage(img, x*fieC.mas, y * fieC.mas, fieC.mas, fieC.mas);
        }
    }

    /*
        for(let y = 0; y < fieC.objM.length; y++) {
        for(let x = 0; x < fieC.objM[y].length; x++) {
        let obs = fieC.objM[y][x];
        if(obs.id == 0) continue;

        let belong = stage;
        let src = obs.id;
        if(obs.id == 'enemy') belong = 'enemies', src = obs.data.name;
        if('used' in obs.data) src += obs.data.used ? '_off' : '_on';

        let img = images[belong][src];
        if(!img) console.log(`assets/${belong}/${src}.png not found.`), img = images['systems']['error'];

        if(img) fieC.ctx.drawImage(img, x * fieC.mas, y * fieC.mas, fieC.mas, fieC.mas);
      }
     }
    */

    //object、仕掛けとか
    for(let obs of fieC.objs){
        if(obs.id == 0) continue;
        // console.log(`id:: ${obs.id}, stage:: ${obs.stage}`)
        
        
        let sta = obs.stage;
        let src = obs.id;
        let bel = "maps";
        
        if(obs.id == 'player') bel = 'charas', src = obs.data.img;
        if(obs.id == 'enemy') bel = 'enemies', src = obs.data.name, console.log(obs.data.name);
        if('type' in obs.data) src += `_${obs.data.type}`;
        if('used' in obs.data) src += obs.data.used ? '_off' : '_on';

        let img;
        if(bel == 'maps' || bel == 'enemies') img = images[bel][sta][src].cloneNode();
        else img = images[bel][src].cloneNode();
         if(!img) console.log(`assets/${sta}/${src}.png is not found.`), img = images['systems']['error'];
        if(img) fieC.ctx.drawImage(img, obs.ox, obs.oy, obs.w, obs.h);

        // await delay(2)
    }
}

fieF.get = (me = '指定なし') => {
    if(me == '指定なし') me = 0; //特別扱い, player
    
    let who = fieC.objs[me];

    return who;
}
fieF.able = (who, type) => {
    return who.ables.some(a => a == type);
}
fieF.prop = (who, type) => {
    return who.prop && who.prop.some(a => a == type);
}

fieF.move = async(who, code, mx, my, force = 0) => {
    // let who = fieF.get(cam, me);

    // console.log(`想定: x|${who.x.toString().padStart(2, '0')}, y|${who.y.toString().padStart(2, '0')} => x|${(who.x + mx).toString().padStart(2, '0')}, y|${(who.y + my).toString().padStart(2, '0')}`)

    if(who.x + mx < 0 || 11 < who.x + mx) mx = 0;
    if(who.y + my < 0 || 11 < who.y + my) my = 0;
    
    if(mx == 0 && my == 0) return //console.log(`${who.name}「移動量が0ですわ〜〜！！」`);

    if(!fieF.able(who, 'move') && !force) return //console.log(`${who.name}「動けないっっ...!!」`);

    let addx, addy;
    let ssx = who.sx, ssy = who.sy; //save sxの略
    if(code == 'add'){
        who.sx += mx*fieC.mas;
        who.sy += my*fieC.mas;
        addx = mx*fieC.mas/who.spd;
        addy = my*fieC.mas/who.spd;
    }
    if(code == 'set'){
        who.sx = mx*fieC.mas;
        who.sy = my*fieC.mas;
        addx = Math.abs(who.x - mx) / who.spd;
        addy = Math.abs(who.y - my) / who.spd;
    }
    if(code == 'drive'){
        let rad = (who.dir - 90) * Math.PI / 180;
        
        my = 0; //これ無視した方がいいかも。使い所isない
        let noise = random(-my, my);

        let dx = mx * fieC.mas * Math.cos(rad) - noise * Math.sin(rad);
        let dy = mx * fieC.mas * Math.sin(rad) + noise * Math.cos(rad);

        who.sx += dx;
        who.sy += dy;

        addx = dx / who.spd;
        addy = dy / who.spd;
    }

    let list = Object.values(fieC.objs).flat();
    // console.log(`(${looped})${who.name}「${fieF.able(who, 'pass')}, ${list.some(t => fieF.over(who, t))}, ${list.some(t => fieF.able(t, 'bepass'))}」`);
    if(list.some(t => fieF.over(who, t))){
        list.forEach(t => {
            if(fieF.over(who, t) && !fieF.able(t, 'bepass')){
                // console.log(`(${looped})${who.name}[${who.x},${who.y}]「${t.name}[${t.x},${t.y}]とぶつかる〜〜〜〜！！」`)
                // console.log(`(${looped})自分: ${who.name} x:${who.x} y:${who.y} sx:${who.sx} sy:${who.sy} w:${who.w} h:${who.h} dir:${who.dir} spd:${who.spd}`);
                // console.log(`(${looped})相手: ${t.name}) x:${t.x} y:${t.y} sx:${t.sx} sy:${t.sy} w:${t.w} h:${t.h} dir:${t.dir} spd:${t.spd}`);
            };
        })
    }
    if(!fieF.able(who, 'pass') && list.some(t => fieF.over(who, t) && !fieF.able(t, 'bepass'))) return who.sx = ssx, who.sy = ssy, fieF.draw()//, console.log(`(${looped})${who.name}「この先に何かあるっぽい？」`);

    // console.log(`(${looped})想定: x|${who.x.toString().padStart(2, '0')}, y|${who.y.toString().padStart(2, '0')} => x|${(who.x + mx).toString().padStart(2, '0')}, y|${(who.y + my).toString().padStart(2, '0')} || 実行: x|${addx.toString().padStart(5, ' ')}, y|${addy.toString().padStart(5, ' ')} 計${who.spd}回反復`)

    who.moving = 1;
    for(let i = 0; i < who.spd; i++){
        who.ox += addx;
        who.oy += addy;
        await delay(10);
        fieF.draw();
    }

    who.x = Math.round(who.ox / fieC.mas);
    who.y = Math.round(who.oy / fieC.mas);
    who.ox = who.sx
    who.oy = who.sy;

    fieF.draw();

    who.moving = 0;
}
fieF.over = (a, b) => {
    if (a.cam == b.cam && a.me == b.me) return false;

    let sx1 = a.sx, sy1 = a.sy, ex1 = a.sx + a.w, ey1 = a.sy + a.h;
    let sx2 = b.sx, sy2 = b.sy, ex2 = b.sx + b.w, ey2 = b.sy + b.h;

    const EPSILON = 0.01; //許容値？
    let overlapX = (sx1 < ex2 - EPSILON) && (ex1 > sx2 + EPSILON);
    let overlapY = (sy1 < ey2 - EPSILON) && (ey1 > sy2 + EPSILON);

    return overlapX && overlapY;
}

function nextFloor(){
    floor += 1;

    mapMake();
    fieF.draw()
}

function mapMake(code){
    //stage
    for(let i = 0; i < fieC.row; i++){
        fieC.backM[i] = [];

        for(let j = 0; j < fieC.row; j++){
            let basescore = 10, bonus = 40; //2種の場合
            let scores = {};

            // 各タイルの初期スコアをセット
            let dataS = Stages.find(a => a.name == stage);
            dataS.tiles.forEach(type => scores[type] = basescore);

            // 左と上のマスに同じタイルがあったらスコア加算
            if (j > 0) scores[fieC.backM[i][j-1]] += bonus;
            if (i > 0) scores[fieC.backM[i-1][j]] += bonus;

            function weightedRandom(weightMap){
                // 重み付きランダム選択
                let total = Object.values(weightMap).reduce((a, b) => a + b, 0);
                let r = Math.random() * total;
                for (let key in weightMap) {
                    r -= weightMap[key];
                    if (r < 0) return key;
                }
            }

            let chosen = weightedRandom(scores);
            fieC.backM[i][j] = chosen;
            //fieC.ctx.drawImage(images.maps[chosen], j * fieC.mas, i * fieC.mas, fieC.mas, fieC.mas);
        }
    }

    fieC.objs = [];

    let mas = fieC.mas;
    let max = random(fieC.row*2, fieC.row**2-fieC.row); //この数字だけどうにかしよう。
    // let obsList = JSON.parse(JSON.stringify(obsAll[stage])); //copy
    let obsList = copy(Objects.filter(a => (a.in == stage || a.in == 'すべて') && !a.no));
    // console.log(obsList);
    for(let i=0; i<max; i++){
        let data = {};
        
        let obs = arrayGacha(obsList, obsList.map(a => a.p));
        if(!obs) console.log(obsList, obs);
        let obsInd = obsList.indexOf(obs);

        // console.log(obs);
        console.log(obs.name, obs.n)
        let sude = fieC.objs.filter(a => a.id == obs.name);
         console.log(sude.length, obs.n)
        if(obs.n != 0 && sude.length+1 >= obs.n) obsList.splice(obsInd, 1); // 重複できない子なら消し去る

        if(obs.name == 'enemy'){
            let arr = Enemies.filter(a => a.ins.includes(stage) || a.ins == 'すべて');
            // let data0 = arrayGacha(arr, arr.map(a => a.p))
            let data0 = arraySelect(arr);
            //  console.log(data0)
             if(!data0) console.error(arr, data0);
            data.name = data0.name;
        }

        let obx = 0, oby = 0;
        let ok = () => {return fieC.objs.filter(a => a.x == obx && a.y == oby && a.id != 0)};
        let ran = () => {obx = random(0, fieC.row-1), oby = random(0, fieC.row-1)};

        ran();
        let douBasyo = ok();
        while(douBasyo.length > 0){
            // console.log(`あるか:${douBasyo.length}, 乗れるか:${!obs.on}`)
            // console.log(`(${obx}, ${oby})はすでに何かがあるっぽい？`);
            ran();
            douBasyo = ok();
        };

        // console.log(obs)
        // console.log(obs.id, obs.data.name)
        addob(obs.name, obx, oby, mas, mas, obs.s, 90, obs.ables, data);
    }

    // MAPx = fieC.objMnum[stage-1].split('.');
    // MAPy = +MAPx[1]+1
    // MAPx = +MAPx[0]
    // fieC.objM = fieC.objMs[Math.floor(Math.random() *    MAPy)+MAPx];
    // fieC.objM = JSON.parse(JSON.stringify(fieC.objMs[Math.floor(Math.random() * MAPy) + MAPx]));

    // if(stage == 1){
    //     if(fun == 23 && probability(10)){
    //         fieC.backM = fieC.backMs[4];
    //         fieC.objM = fieC.objMs[6];
    //     }else if(fun <= 50 && probability(10)){
    //         fieC.backM = fieC.backMs[5];
    //         fieC.objM = fieC.objMs[7];
    //     };
    // }else if(stage == 2){
    //     if(fun == 68 && probability(10)){
    //         fieC.backM = fieC.backMs[11];
    //         fieC.objM = fieC.objMs[14];
    //         fieC.objM = JSON.parse(JSON.stringify(fieC.objMs[Math.floor(Math.random() * MAPy) + MAPx]));
    //     }else if(fun <= 50 && probability(10)){
    //         fieC.backM = fieC.backMs[19];
    //         fieC.objM = fieC.objMs[23];
    //         fieC.objM = JSON.parse(JSON.stringify(fieC.objMs[Math.floor(Math.random() * MAPy) + MAPx]));
    //     };
    // }else if(stage == 3){
    //     if(fun == 68 && probability(10)){
    //         fieC.backM = fieC.backMs[18];
    //         fieC.objM = fieC.objMs[22];
    //         fieC.objM = JSON.parse(JSON.stringify(fieC.objMs[Math.floor(Math.random() * MAPy) + MAPx]));
    //     }else if(fun <= 50 && probability(10)){
    //         fieC.backM = fieC.backMs[19];
    //         fieC.objM = fieC.objMs[23];
    //         fieC.objM = JSON.parse(JSON.stringify(fieC.objMs[Math.floor(Math.random() * MAPy) + MAPx]));
    //     };
    // }
    // if(stage == 1 && floor >= 10){SELECTx = 150;SELECTy = 525;fieC.backM = fieC.backMs[6];fieC.objM = fieC.objMs[8]}; //創生黎明の原野
    // if(stage == 2 && floor >= 7 ){SELECTx = 150;SELECTy = 525;fieC.backM = fieC.backMs[13];fieC.objM = fieC.objMs[16]}; //ガチェンレイゲスドゥールラート(昼)
    // if(stage == 3 && floor >= 3 ){SELECTx = 150;SELECTy = 525;fieC.backM = fieC.backMs[20];fieC.objM = fieC.objMs[24]}; //ガチェンレイゲスドゥールラート(夜)
}

function addob(id, mx, my, w, h, spd, dir, ables, data){
    //idは0なら何もしない
    if(id == 0) return;

    

    let ob = {
        id: id,
        //cam: cam,
        me: fieC.objs.length,
        stage: stage,
        x: mx,
        y: my,
        sx: mx*fieC.mas,
        sy: my*fieC.mas,
        ox: mx*fieC.mas,
        oy: my*fieC.mas,
        w: fieC.mas,
        h: fieC.mas,
        moving: 0,
        spd: spd || 5,
        dir: dir || 90,
        ables: ables || [],
        data: data || {},
    }

    fieC.objs.push(ob);
}

function nextStage(){
    let mts = stage; //moto stage

    let arr = Stages.map(a => a.name);
    while(mts == stage){
        // 1~3の間でランダムにステージを決定
        let arr = Stages.map(a => a.name);
        stage = arraySelect(arr);
    }
    console.log(`れっつら ${stage}`);

    floor = 0;
    nextFloor();
}
//#endregion

//#region inventory
let invD = document.querySelector('#inventory');
let invC = {}
let invF = {}
document.addEventListener('keydown', (event) => {
    if(fieD.style.display != 'block') return;
    
    let key = event.key.toLowerCase();

    if(key == 'e'){
        let p = fieF.get();
        switch(p.moving){
            case 0:
            p.moving = 1;
            //window.setTimeout(inventoryOpen,200)
            break;
            
            case 1:
            p.moving = 0
            break;
            // window.setTimeout(inventoryClose,200)
        }
    }
    
    if(event.key == 'g') testEnemyAppear();
});

//#endregion


//#region battle-DOM
let batD = document.getElementById('btArea');
let batC = {
    now: 0,
    pD: batD.querySelector('.players'),
    eD: batD.querySelector('.enemies'),
    seleD: batD.querySelector('.sele'),
    s1B: batD.querySelector('.sele .s1'),
    s2B: batD.querySelector('.sele .s2'),
    s3B: batD.querySelector('.sele .s3'),
    s4B: batD.querySelector('.sele .s4')
}
let batF = {} //tyotto yokunai kamo

batF.open = () => {
    let p = fieF.get();
    p.moving = 1;
    
    batD.classList.add('appe')
};
batF.clos = () => {
    let p = fieF.get();
    p.moving = 0;
    
    batD.classList.remove('appe')
};
//#endregion

let humans = [];
let turn = 0;
let phase = 0;
let bar = {me:[], cam:[]};
let acted = 0;



function cm(cam = '指定なし', me = '指定なし'){
    let who = 0;
    if(cam == '指定なし' && me == '指定なし') return humans.find(a => a.cam == 'players' && a.me == 0);
    
    if(me == '指定なし') return humans.filter(a => a.cam == cam);

    who = humans.find(a => a.cam == cam && a.me == me);
    if(Array.isArray(who)){
        console.log('↓findなのにarrayになってるバカがこいつですwww')
        console.log(who)
    }
    

    return who;
}

//#region tekiou
function tekiou(){
    for(let human of humans){
        let cam = human.cam;
        let chokkin = cam.substring(0,1);
        let div0 = batC[`${chokkin}D`];
        let div = div0.querySelector(`.${cam}${human.me}`);

        let hd = 0;
        if(cam == 'enemies') hd = Enemies.find(a => a.name == human.name);
        if(cam == 'players'){
            hd = Charas.find(a => a.name == human.name);
            if(!hd) hd = Friends.find(a => a.name == human.name);
        }


        // console.log(`${cam}${human.me}`)
        // console.log(human)
        // console.log(hd)

        div.querySelector('.name').textContent = human.name;
        div.querySelector('.lv').textContent = `Lv.${human.lv}`;
        div.querySelector('.img').src = `assets/images/charas/${hd.img}.png`;
        div.querySelector('.skill .liquid').style.height = `${human.ep/human.maxep*100}%`;

        let hpZ = div.querySelector('.hp');
        hpZ.querySelector('.text').textContent = `${human.hp}/${human.maxhp}`;
        hpZ.querySelector('.bar .inner').style.width = `${human.hp/human.maxhp*100}%`;

        let mpZ = div.querySelector('.mp');
        mpZ.querySelector('.text').textContent = `${human.mp}/${human.maxmp}`;
        mpZ.querySelector('.bar .inner').style.width = `${human.mp/human.maxmp*100}%`;
    }   
}
//#endregion

//#region どむさんのようそづくり～
function makeHuman(cam, me){
    let hD = document.createElement('div');
    hD.className = `human ${cam}${me}`;

    let img = document.createElement('img');
    img.className = 'img';
    img.src = `assets/images/systems/error.png`;
    hD.appendChild(img);

    let skill = document.createElement('div');
    skill.className = 'skill';
     let back = document.createElement('img');
     back.className = 'back';
     back.src = `assets/images/systems/error.png`;
     skill.appendChild(back);
     let liquid = document.createElement('div');
     liquid.className = 'liquid';
     skill.appendChild(liquid);
    hD.appendChild(skill);

    let waku = document.createElement('div');
    waku.className = 'waku';

    let plate = document.createElement('div');
    plate.className = 'plate';

    let name = document.createElement('div');
    name.className = 'name';
    plate.appendChild(name);
    let lv = document.createElement('div');
    lv.className = 'lv';
    plate.appendChild(lv);

    waku.appendChild(plate);

    let hpZ = document.createElement('div');
    hpZ.className = 'hp status';
    
    let hpt = document.createElement('div');
    hpt.className = 'text';
    hpZ.appendChild(hpt);
    let hpb = document.createElement('div');
    hpb.className = 'bar';
     let hpbi = document.createElement('div');
     hpbi.className = 'inner';
     hpb.appendChild(hpbi);
    hpZ.appendChild(hpb);
    
    waku.appendChild(hpZ);
    
    let mpZ = document.createElement('div');
    mpZ.className = 'mp status';
    
    let mpt = document.createElement('div');
    mpt.className = 'text';
    mpZ.appendChild(mpt);
    let mpb = document.createElement('div');
    mpb.className = 'bar';
     let mpbi = document.createElement('div');
     mpbi.className = 'inner';
     mpb.appendChild(mpbi);
    mpZ.appendChild(mpb);

    waku.appendChild(mpZ);

    hD.appendChild(waku);

    return hD;
}
//#endregion

//#region きゃらのせんたく〜
async function sele(){
    let id = 'errored!!'
    id = await new Promise((mis) => {
        function clicked(ev){
            let div = ev.target;
            // console.log(div)
            
            let name = div.classList[1];
            console.log(name);
            
            batC.seleD.replaceChildren();

            mis(name)
        }
        
        let chas = Charas.filter(a => a.able);
        // console.log(chas)
        for(let data of chas){
            // console.log(data)
            let div0 = document.createElement('div');
            div0.className = `slsl ${data.id}`;
            
            let span = document.createElement('span');
            span.textContent = data.name;
            div0.appendChild(span);

            let img = document.createElement('img');
            img.src = `assets/images/charas/${data.img}.png`;
            div0.appendChild(img);
            
            div0.addEventListener('click', clicked);
            batC.seleD.appendChild(div0);
        }
    })
    
    let p = makePlayer(0, id);
    humans.push(p);

    batC.now = 1;
}
//#endregion

//#region ピのせーぞー
function makePlayer(code, id){
    //code 0 == Charas, 1 == Friends
    let pd = 0;
    if(!code) pd = Charas.find(a => a.id == id);
    else pd = Friends.find(a => a.name == id);

    if(!pd) return logadd(`codeが[${code}]の${id}はいないらしい`);

    let p = {};
    let statuses = Object.keys(eneBas);
    statuses.forEach(statu => p[statu] = pd[statu]); //変更点だけ、らしい。
    p.hp = p.maxhp;
    p.mp = p.maxmp;
    p.ep = 0;

    p.status = 1;
    p.cam = 'players';
    p.me = humans.filter(a => a.cam == 'players').length;
    p.id  = id;
    p.name = pd.name;
    p.lv = 1;
    p.exp = 0;
    p.sp = 0;

    p.slash = p.slash??['slash','double slash', 'slash of light'];
    p.magic = p.magic??['heal', 'power', 'shell'];
    p.tool = p.tool??['aspirin','throw knife','redcard'];

    p.buffs = [];
    p.attr = [];
    
    p.weapon = 'none';
    p.shield = 'none';

    if(!code){
        p.ex = pd.ex;
        p.ns = pd.ns;
        p.ps = pd.ps;
        p.ts = pd.ts;
        
        Style.button.solid = pd.buttonsolid;
        Style.button.back = pd.buttonback;
        Style.button.aima = mixshoku(pd.buttonsolid, pd.buttonback);
        Style.tekiou();
    }
    else{
        p.e = pd.e;
        p.s = pd.s;
        p.n = pd.p;
        p.p = pd.p;
        p.t = pd.t;
    }


    let div = makeHuman('players', p.me);
    batC.pD.appendChild(div);
    
    return p;
}

function makeEnemy(){
    let e = {} //うつわ
    let statuses = Object.keys(eneBas);
    statuses.forEach(statu => e[statu] = eneBas[statu]);

    let ed = arraySelect(Enemies);
    // console.log(ed)
    statuses.forEach(statu => {
        if(ed[statu].startsWith('+') || ed[statu].startsWith('-')){
            let num = +(ed[statu].slice(1));
            if(ed[statu].startsWith('-')) num *= -1;
            e[statu] += num;
        }
        if(ed[statu].startsWith('=')){
            let num = +(ed[statu].slice(1));
            e[statu] = num;
        }
    })

    e.hp = e.maxhp;
    e.mp = e.maxmp;
    e.ep = 0;

    e.status = 1;
    e.name = ed.name;
    e.cam = 'enemies';
    e.me = humans.filter(a => a.cam == 'enemies').length;
    e.status = 1; // 1:生存 0:死亡
    e.lv = random(1,3); //一旦
    
    e.attr = ed.attr??[];
    e.buffs = [];
    e.lasts = [];

    e.weapon = ed.shield ?? 'none';
    e.shield = ed.shield ?? 'none';

    let div = makeHuman('enemies', e.me);
    batC.eD.appendChild(div);

    return e;
}
//#endregion

//#region みちとのそーぐー
async function encount(){
    let enemiesen = random(1,1);

    for(let i = 0; i < enemiesen; i++){
        let e = makeEnemy();
        humans.push(e);
    }

    batF.open();

    let iran = ['うわっ！', '嗚呼、'];
    let iran2= ['きた！なんだって～？！', '来たり']
    let ran = random(0, iran.length-1);
    await addtext(`${iran[ran]}${enemiesen}人飛び出して${iran2[ran]}`);

    await nextTurn();
}

//#endregion

//#region たーんのまねーじめんと～
async function nextTurn(who = 0){
    // console.log(`${turn}たーんめ`);

    phase = 0;
    if(who){
        for(let buff of who.buffs){
            let data = Buffs.find(a => a.name == buff.name);
            //アンコールの動き
            if(hask(data, 'luck')){//luck
                if(isCrit(data.luck)){
                    addlog('当たりが出たらもう一本！');
                    return playerturn();
                }
            }
        }
        
        /*
        for(let key in who.buffs){
            who.buffs[key].time -= 1; // -1する
            if(who.buffs[key].time <= 0){
                let index = who.buffs.indexOf(key);
                who.buffs.splice(index, 1)
            }
        }
        */
        for (let i = who.buffs.length - 1; i >= 0; i--){
            who.buffs[i].time -= 1;
            if(who.buffs[i].time <= 0) who.buffs.splice(i, 1);
    }

        tekiou();
    }

    /*
    //強制スキルの動き
    while(skillQueue.length > 0){
        const nanka = skillQueue.shift(); // 先頭を消してその消したやつを処理する的な機構".shift()"
        let cam = nanka.cam;
        let me = nanka.me;
        let dare = cm(cam,me);
        let skill = nanka.skill;
        let data = Skills.find(a => a.id == skill);
        console.log(`${dare.name}のスキル:"${skill}"を発動!`);
        await addtext(`${dare.name}は"${data.name}"を発動した！！`);
        let result = await skillAct(dare, skill);
        if(result) return 1;
    }
    */

    //ーーーーーーーこっから次のターン行く動き　ここでこの人のターンは終わるって感じだねーーーーーーー

    acted += 1;
    if(acted >= bar.me.length){
        turn += 1;
        const combined = humans.filter(a => a.status && a.hp > 0)// オブジェクトをリストに変換して合体
        .sort((a, b) => {// 降順でソート
            if(b.spd == a.spd){
                if(a.cam == b.cam){
                    return a.me - b.me;  // 同じcamならmeの小さい方が優先
                }
                return a.cam == 'players' ? -1 : 1;  // camが'p'なら優先
            }
            return b.spd - a.spd;  // 速度の高い順に並べる
        });
        bar = {
            cam: combined.map(c => c.cam),
            me: combined.map(c => c.me)
        };
        // console.log(bar)
        acted = 0;
    } 

    let tcam = bar.cam[acted]
    let tme = bar.me[acted]
    are = cm(tcam, tme);
    // console.log(are)

    let dots = {}; //DamegeOverTimeのdot
    for(let buff of are.buffs){
        let data = Buffs.find(a => a.name == buff.name)
        console.log(`「${buff.name}」(${Object.keys(buff.value).length})[${Object.keys(buff.value)}]`);

        if(hask(data, 'dot')){
            // これは hp:'-10'みたいにならなくて、hp:10 で10減る感じ
            let dot = data.dot;

            let val = 0;
            val = buff.value[dot];
            if(typeof val == 'string' && val.endsWith('%')) val = Math.round(are.maxhp * val.slice(0,-1) / 100);

            //出血の処理はここへ
            
            if(!dots[dot]) dots[dot] = 0;
            dots[dot] += val;
            console.log(`>> ${are.cam}${are.me}に${buff.name}があるって！ | ${dot}に${val}追加`);
        }
        
        if(buff.name == 'onslime'){
            if(isCrit(buff.value)){
                buffremove(are, 'onslime');
                addlog('なんとかスライムを取り払った!!');
            }else{
                addlog('スライムが邪魔して動けない!!');
                nextTurn(are);
                return;
            }; 
        }
        if(buffhas(are,'skip')){
            await addtext(`>> はい${are.name}、お前スキップ〜〜`);
            nextTurn(are); return;
        }
        if(hask(buff.value, 'palsy')){
            let val = buff.value.palsy;
            console.log(`>> palsy:: ${val}%`);
            
            if(!isCrit(val)) continue;

            data.name != 'stan'
            ? addlog(`${are.cam}${are.me}は麻痺している..`)
            : addlog(`${are.cam}${are.me}はスタンしている....`);
            nextTurn(are);
            return 1;
        }
        if(hask(buff.value, 'freeze')){
            let val = buff.value.freeze;
            if(!isCrit(val)){
                addlog(`${are.name}は凍っている...`);
                nextTurn(are);
                return;
            }
            
            await addtext(`氷が溶けた！`);
            buffremove(are,'freeze');    
        }
    }    
    Object.keys(dots).forEach( key => {
        let val = dots[key];
        
        console.log(`(${turn})${are.cam}${are.me}に${key}のダメージ！(val: ${val})`);
        are.hp -= val;

        if(are.hp <= 0) return dead(0, are);
    })


    console.log(`(${turn}) 現在、[${tcam}]${are.name}さんのターンですわ〜！`);

    switch(tcam){
        case 'players':
            playerturn(are);
            break;
        case 'enemies': 
            enemyturn(are);
            break;
    }
}
//#endregion

//#region ピのたーん
async function playerturn(who = 0){
    //back目的なら空欄、そうでなければwhoが必須
    jump:{
        if(!who) break jump;
        let nss = Skills.filter(a => a.type == 'ns');
        let datans = nss.find(a => a.id == who.ns);
        if(who.ns.process != undefined && (turncount % datans.cool) == 0){
            await data.process(who);
            await delay(1000)
        };

        tekiou();
    
        addtext('あなたのターンです！');
        playerturn();

        return;
    }

    phase = 1;
    batC.s1B.textContent = 'act';
    batC.s2B.textContent = 'magic';
    batC.s3B.textContent = 'tools';
    batC.s4B.textContent = 'run';
};
//#endregion
//#region ピのせんたく
batC.s1B.addEventListener('click', async function(){
    let who = humans.find(a => a.cam == 'players' && a.me == 0);
    switch(phase){
        case 1:
            phase = 2;
            batC.s1B.classList.add('ed');

            batC.s1B.textContent = who.slash[0];
            batC.s2B.textContent = who.slash[1];
            batC.s3B.textContent = who.slash[2];
            batC.s4B.textContent = 'back';
            break;
        case 2:
            Slash(who, 0)
            break;
        case 3:
            Magic(who, 0)
            break;
        case 4:
            Tool(who, 0)
            break;
    }
})

batC.s2B.addEventListener('click', async function(){
    let who = humans.find(a => a.cam == 'players' && a.me == 0);
    switch(phase){
        case 1:
            phase = 3;
            batC.s2B.classList.add('ed');

            batC.s1B.textContent = who.magic[0];
            batC.s2B.textContent = who.magic[1];
            batC.s3B.textContent = who.magic[2];
            batC.s4B.textContent = 'back';
            break;
        case 2:
            Slash(who, 1);
            break;
        case 3:
            Magic(who, 1);
            break;
        case 4:
            Tool(who, 1);
            break;
    }
})

batC.s3B.addEventListener('click', async function(){
    let who = humans.find(a => a.cam == 'players' && a.me == 0);
    switch(phase){
        case 1:
            phase = 4;
            batC.s3B.classList.add('ed');

            batC.s1B.textContent = who.tool[0];
            batC.s2B.textContent = who.tool[1];
            batC.s3B.textContent = who.tool[2];
            batC.s4B.textContent = 'back';
            break;
        case 2:
            Slash(who, 2);
            break;
        case 3:
            Magic(who, 2);
            break;
        case 4:
            Tool(who, 2);
            break;
    }
})

batC.s4B.addEventListener('click', async function(){
    let who = humans.find(a => a.cam == 'players' && a.me == 0);
    switch(phase){
        case 1:
            dassyutsu();
            break;
        case 2:
        case 3:
        case 4:
            batC.s1B.classList.remove('ed');
            batC.s2B.classList.remove('ed');
            batC.s3B.classList.remove('ed');
            playerturn();
            break;
    } 
})

async function takusiSen(s1, s2, s3){
    for(let i = 0; i < 3; i++){
        batC.s1B.textContent = s1[i];
        batC.s2B.textContent = s2[i];
        batC.s3B.textContent = s3[i];

        await delay(300)
    }
}

function disappear(){
    phase = 0;
    batC.s1B.textContent = ' ';
    batC.s2B.textContent = ' ';
    batC.s3B.textContent = ' ';
    batC.s4B.textContent = ' ';
}

async function dassyutsu(){

    disappear();
    batD.classList.remove('appe');
    
    fieF.draw()
    
    fieF.get().moving = 0;
    await addtext('うまく逃げ切れた！');
}

function LetsTargetSelect(code = 1){
    //1:通常(1人) 2:選んだところと左右 3:選んだところと左右2人ずつ 4:選んだ陣営全員 5:全員
    return new Promise((resolve) => {
        let color = '#fff450';
        let pcolor= '#f7f7f7';

        let arrs = [
            ...humans.filter(a => a.cam == 'players').map(a => `players${a.me}`),
            ...humans.filter(a => a.cam == 'enemies').map(a => `enemies${a.me}`),
        ];

        let target = [];
        function handleClick(event){
            let div = event.target;

            let lis = div.classList;

            let tcam = lis[1].substring(0, 7);
            let tme = +lis[1].substring(7);

            if(div && !arrs.includes(`${tcam}${tme}`)) div = div.parentElement;
            if(!div) return;

            console.log(div)

            console.log(tcam, tme)

            arrs.forEach(a => {
                console.log(a)
                let div0 = batC[`${a.substring(0, 1)}D`];
                console.log(div0)
                let div = div0.querySelector(`.${a}`);
                
                div.removeEventListener('click', handleClick);
                div.classList.remove('sl')
            });

            target = [
                tme,
                tcam
            ]

            console.log(target);

            if(code == 2){ //拡散-3
                let zin = humans.filter(a => a.cam == tcam && a.status);
                let pnum = (zin[tme-1]?.status??0) ? tme - 1 : null;
                let nnum = (zin[tme+1]?.status??0) ? tme + 1 : null;
                
                let cn = 1;
                if(pnum) cn += 1;
                if(nnum) cn += 1;
                
                let cams = Array(cn).fill(tcam);
                
                target = [
                    [tme-1,tme,tme+1],
                    cams
                ];
            }
            if(code == 3){// 拡散-5
                let zin = humans.filter(a => a.cam == tcam && a.status);
                let p2num = (zin[tme-2]?.status??0 == 1) ? tme - 2 : null;
                let pnum = (zin[tme-1]?.status??0 == 1) ? tme - 1 : null;
                let nnum = (zin[tme+1]?.status??0 == 1) ? tme + 1 : null;
                let n2num = (zin[tme+2]?.status??0 == 1) ? tme + 2 : null;
                
                let cn = 1;
                if(pnum) cn += 1;
                if(p2num) cn += 1;
                if(nnum) cn += 1;
                if(n2num) cn += 1;
                
                let cams = Array(cn).fill(tcam);
                
                target = [
                    [tme-2,tme-1,tme,tme+1,tme+2],
                    cams
                ];
            }
            if(code == 4){ //相手陣営全員
                let nums = cm(tcam).filter(a => a.cam == tcam && a.status);
                let cams = Array(nums.length).fill(tcam); //fillは全ての値を同じ値にするやつ。同数にするために使用されがち
                target = [
                    nums,
                    cams
                ];
            }
            if(code == 5){ //全員
                let tnums = cm(tcam).filter(a => a.status);
                let gyaku = tcam == 'players' ? 'enemies' : 'players';
                let nums = cm(gyaku).filter(a => a.status);

                let awase = [...tnums, ...nums];
                
                // let cn = tnums.length + nums.length;

                let cams = [...Array(tnums.length).fill(tcam), ...Array(nums.length).fill(gyaku)];

                target = [
                    awase,
                    cams
                ];
            }

            console.log(target);

            let cs = target[1];
             if(typeof cs == 'string') cs = [cs]
            let ns = target[0];
             if(typeof ns == 'string' || typeof ns == 'number') ns = [ns]
            // console.log(cs, ns)
            let whoes = [];
            for(let i = 0; i < cs.length; i++){
                let c = cs[i];
                let n = ns[i];
                console.log(`humans[${c}][${n}]を狙います！`);
                let cn = cm(c, n);
                // console.log(cn);
                whoes.push(cn);
            }

            // console.log(whoes);

            resolve(whoes);
        }

        arrs.forEach(a => {
            let div = document.querySelector(`.${a}`);
            div.addEventListener('click', handleClick);
            div.classList.add('sl')
        });
    });
}

//#endregion
//#region ピのざんげき
async function Slash(who, num){
    disappear();
    let name = who.slash[num]
    if(!name){
        await addtext('you dont have slash...');
        return playerturn()
    }

    let data = Slashs.find(a => a.id == name)
    if(who.mp >= data.mp){
        let are = await LetsTargetSelect();

        who.mp -= data.mp;
        tekiou();

        await addtext(`${who.name}の${name}！`);

        let result = await data.process(who, are);
        if(result) return 1;
        nextTurn(who);
    }else{
        await addtext('not enough mp...');
        playerturn();
    }
}
//#endregion
//#region ピのまほー
async function Magic(who, num){    
    disappear();
    let name = who.magic[num]
    if(!name){
        await addtext('you dont have magic...');
        return playerturn()
    }

    let data = Magics.find(a => a.id == name)
    
    console.log(name, data);
    if(who.mp >= data.mp){
        let are = await LetsTargetSelect();

        who.mp -= data.mp;
        tekiou();

        await addtext(`${who.name}の${name}！`);
        let result = await data.process(who, are);
        if(result) return 1;
        nextTurn(who);
    }else{
        await addtext('not enough mp...');
        playerturn();
    }
}

//#endregion
//#region ピのどーぐ
async function Tool(who, num){
    disappear();
    let name = who.tool[num]
    if(!name){
        await addtext('you dont have tool...');
        return playerturn()
    }

    //今はいいけど、inven(tory)に全部詰め込むことになるならdata.jsのnumじゃなくて簡単関数でinven内の数を求めて、で〜って形にした方がいいかも
    let data = Tools.find(a => a.id == name)
    console.log(name, data)
    if(data.num > 0){
        data.num -= 1;

        let are = await LetsTargetSelect();
        await addtext(`${who.name}は${name}を使用した!`);
        
        let result = await data.process(who, are);
        if(result) return 1;
        nextTurn(who);
    }else{
        await addtext('not enough tool...');
        playerturn();
    }
}
//#endregion
//#region ピのすきる

/*
let Splithp = 0;
let Splitmaxhp = 0;
let clowngambling = ['0','0','2','2','2','4'];

// スキル予約関数
let skillQueue = [];
async function skillReserve(cam,me){
    if(cm(cam, me).ep == 100){
        x = cm(cam, me).ex;
        skillQueue.push({cam:cam,me:me,skill:x});
        skillReset(cam,me);
        console.log(`スキル予約済み: ${cam} ${me} -> ${x}  現在キューは次に表示します;`);
        console.log(skillQueue);

        if(phase > 0){
            let result = await skillAct(cam,me,x);
            skillQueue.shift();
            if(result == 'end'){return 'end';}
        }
    }else{
        nicoText('まだクールダウン中ですわ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜');
    }
}
async function skillAct(cam,me,skill){
    let dataex = Skills.filter(a => a.type == 'ex').find(a => a.id == skill);
    let result = await dataex.process(cam, me);
    await delay(1000);
    return result;
}
function skillReset(who){
    who.ep = 0;
    tekiou();
}
function turretPlace(cam){
    if(!document.querySelector(`#${cam}t`)){
        let newDiv = makeNewPlayer('t')
        cm(cam).t.kazu = 0;
        cm(cam).t.maxhp = 0;
        cm(cam).t.hp = 0;
        document.querySelector(`#${cam}`).appendChild(newDiv);
    }
    cm(cam).t.status = 1;
    cm(cam).t.kazu += 1;
    cm(cam).t.maxhp += 15;
    cm(cam).t.hp += 15;
    cm(cam).t.name = `Turret x${cm(cam).t.kazu}`;
    tekiou()
    document.querySelector(`#${cam}t`).style.display = 'block'
    document.querySelector(`#${cam}t`).style.backgroundColor = '#f7f7f7'
}
function turretBreak(cam){
    cm(cam).t.status = 0;
    cm(cam).t.kazu -= 1;
    if(cm(cam).t.kazu <= 0){
        cm(cam).t.kazu = 0;
        cm(cam).t.maxhp = 0;
        cm(cam).t.hp = 0;
        document.querySelector(`#${cam}t`).remove();
    }
}
function turretAllClear(){
    if(document.querySelector('#playerst')){
        document.querySelector('#playerst').remove();
        humans.players.t.kazu = 0;
        humans.players.t.status = 0;
    };
    if(document.querySelector('#enemiest')){
        document.querySelector('#enemiest').remove();
        humans.enemies.t.kazu = 0;
        humans.enemies.t.status = 0
    }
}

*/

//#endregion

//#region てきさんのた～ん
async function enemyturn(who){
    let data = Enemies.find(a => a.name == who.name);
    // console.log(who)

    for(let buff in who.buffs){
        buff.time -= 1;
        if(buff.time <= 0){
            delete who.buffs[buff]; //0以下なら消し去る
        }
    }
    tekiou();

    let are;
    if(data){
        let act = enemySelectAction(who)
        let res = await act.process(who);
        if(res) return 1;
    }else{
        await addtext(`${who.name}は何かで攻撃した！`)
        are = ShallTargetSelect(who, 'phpl');
        let res = await damage(who, are, 1, 'sh'); //areの後、1の前に"何の倍率か"を入れるべき。基本atkかもだけどfixで固定、とかできそう
        if(res) return 1;
    }

    nextTurn(who);
}
function enemySelectAction(who){
    let data = Enemies.find(a => a.name == who.name);
    let acts = [];
    let pros = [];

    if(who.lasts.length != 0){
        //直前にreを実行していたならば、対応するabを確定実行するやつ
        who.lasts.forEach(last => {
            data.acts.forEach(a => {
                let props = a.prop;
                props.filter(p => p.startsWith('ab') && p.endsWith(last)).forEach(p => {
                    console.log(a, p)
                    acts.push(a);
                    pros.push(a.probable);
                });
            })
        })
        who.lasts = [];
    }else{
        data.acts.forEach(a => {
            acts.push(a);
            pros.push(a.probable);
        })
    }
    // console.log(acts);
    // console.log(pros);

    //reをするとlastを記録
    let act = arrayGacha(acts, pros);
    // console.log(act);
    console.log(`act: 「${act.name}」(${act.probable}%)`);
    let props = act.prop ?? [];
    props.forEach(p => {
        if(p.startsWith('re')){
            let item = p.slice(2);
            who.lasts.push(item);
            console.log(`ノア「${item}を記録しました」`);
        }
    })

    return act;
}
function ShallTargetSelect(who, code, both = 0){
    console.log(`ShallTarget::: ${code}(both:${both})`)
    
    const side = code[0] == 'p' ? 'players' : 'enemies';
    const stat = code.includes('hp') ? 'hp' : code.includes('atk') ? 'atk' : 'def';
    const mode = code.endsWith('l') ? 'low' : code.endsWith('h') ? 'high' : 'random';
    console.log(`>> ${side}, ${stat}, ${mode}]`);

    const list = cm(side).filter(c => c.status).sort((a, b) => a[stat] - b[stat]);
    // console.log(list);

    if(list.length == 0) return `errored! ${side} is inai desuwa!!`;

    let target;
    if(mode == 'low')  target = list[0];
    else if(mode == 'high') target = list[list.length - 1];
    else target = arraySelect(list);

    const ret = [];
    if(both == 0) ret.push(target.me);
    else{
        const ids = list.map(c => c.me);
        const i = ids.indexOf(target.me);
        const adj = [];
        if(i > 0) adj.push(ids[i - 1]);
        adj.push(ids[i]);
        if(i < ids.length - 1) adj.push(ids[i + 1]);
        ret.push(adj);
    }
    // console.log(ret)

    let ares = [];
    for(let num of ret){
        let are = cm(side, num);
        ares.push(are);
    }
    // console.log(ares)

    return ares;
}
//#endregion

//#region だめーじとかぎゃくだめーじとか
function isCrit(crl, crr = 0){
    if(typeof crl == 'string' && isNaN(+crl)) return logadd(`isCritのcrlが →${crl}← 。さすがにおかしい。直せや〜〜`);
    if(typeof crr == 'string' && isNaN(+crr)) return logadd(`isCritのcrrが →${crr}← 。さすがにおかしい。直せや〜〜2`);

    crl = +crl;
    crr = +crr;

    //crl, crrはそれぞれ整数。
    if(crr == 'ab') return logadd('確定抵抗！'), 0;
    if(crl == 'ab') return logadd('確定！'), 1;
    
    let kei = crl - crr;
    if(kei < 0) kei = 0;

    let is = Math.floor(Math.random() * 100) < kei;
    console.log(`率は${crl}%, 抵抗率は${crr}%... 結果は${is}！`);

    if(is) return 1;
    
    return 0;
}

async function damage(who, ares, val, type0, props = []){
    let hasp = (name) => {return props.includes(name)}
    if(!Array.isArray(ares)) ares = [ares];

    // console.log(`${who.cam}${who.me}`, ares.map(c => `${c.cam}${c.me}`), val, type0, props);

    if(typeof val == 'string' && val.endsWith('%')){
        let key = props.find(a => a.startsWith("%!"));
        if(key) key = key.substring(2);
        else key = "hp";

        let roka = +val.substring(0, val.length - 1);
        if(isNaN(roka)) roka = 0;
        val = who[key] * roka/100;
    }
    
    for(let are of ares){
        let atker = {...who};
        atker.pow = 1;

        let defer = {...are};
        defer.she = 1;
        defer.cut = 0;
        
        let W = {
            atk:0,
            matk:0,
            pow:1,
            crl:0,
            crd:0,
            aim:0
        };
        let Wk = Object.keys(W);
        let A = {
            def:0,
            mdef:0,
            she:1,
            cut:0,
            crr:0,
            dod:0
        };
        let Ak = Object.keys(A);
        
        
        // [human, keysArray, targetObj]
        const hyous = [
            [who, Wk, atker],
            [are, Ak, defer]
        ];
        
        for (let i = 0; i < hyous.length; i++){
            const [human, keys, target] = hyous[i];
            // console.log(human, keys, target);
            for(let buff of human.buffs){
                let buffk = Object.keys(buff.value);
                for(let k of keys){
                    if(!buffk.includes(k)) continue;
                    
                    let v = buff.value[k];
                    if(typeof v !== 'string') continue; // 安全策
                    
                    if(v.startsWith('+') || v.startsWith('-')) target[k] = (target[k] ?? 0) + +v.substring(1);
                    if(v.startsWith('=')){
                        target[k] = +v.substring(1);
                        break;
                    }
                }
            }
        }
        
        for(let prop of props){
            if(prop.startsWith('ig!')) defer[prop.substring(3)] = 0;
            if(prop == 'fixed') atker.pow = 1;
        }

        let wep = atker.weapon;
        let weped = Equips['weapon'].find(a => a.id == wep);

        let shi = defer.shield;
        let shied = Equips['shield'].find(a => a.id == shi);

        //計算
        let type, type2;
        if(type0 == 'sh') type = 'atk', type2 = 'def';
        if(type0 == 'mg') type = 'matk', type2 = 'mdef';
        
        console.log(`(damage) ${type0} ::`);

        // (攻撃力+武器攻撃力) * 攻撃倍率
        let dmg = ((atker[type]+weped.atk) * (atker.pow));
        console.log(`dmg:: (${atker[type]} + ${weped[type]}) * (${atker.pow}) = ${dmg}`);
        
        // (防御力+盾防御力) * 防御倍率 + ダメージカット
        let rer = ((defer[type2]+shied.def)*(defer.she)) + defer.cut;
        console.log(`rer:: (${defer[type2]} + ${shied[type2]}) * (${defer.she}) + (${defer.cut}) = ${rer}`);
        
        //crit
        let crit = isCrit((atker.crl + weped.crl), (defer.crr + shied.crr));
        if(crit){
            dmg *= (atker.crd + weped.crd);
            console.log(`(会心ed！) dmg x (${atker.crd} + ${weped.crd})`);
        }

        //実装
        let dmg2 = Math.floor(dmg - rer);
        if(hasp('fixed')) dmg2 = val;

        if(dmg2 < 0){
            console.log(`(負のダメージ) damage = 0`);
            dmg2 = 0;
        }
        if(dmg2 > are.hp){
            let sa = dmg2 - are.hp;
            dmg2 = are.hp;
            console.log(`(体力超過) damage - ${sa}`);
        }
        console.log(`==> damage: ${dmg2}`);
        if(type0 == 'sh') await eFf.slash(are);
        are.hp -= dmg2;
        tekiou();
        let criten = crit ? '！' : '';
        addlog(`(${turn}) [${who.cam}]${who.name} => [${are.cam}]${are.name} (${dmg2}ダメージ${criten})`);
        
        await delay(1000)

        if(are.hp < 0) are.hp = 0;
        if(are.hp == 0 && hasp('mine')) are.hp = 1;

        if(are.hp == 0) return dead(who, are);

        return 0;
    }
}

async function heal(who, ares, val, props = []){
    let hasp = (name) => {return props.includes(name)}
    let hasa = (whi, name) => whi.attr.includes(name);
    if(!Array.isArray(ares)) ares = [ares];

    if(val.endsWith('%')){
        let key = props.find(a => a.startsWith("%!"));
        if(key) key = key.substring(2);
        else key = "maxhp";

        let roka = +val.substring(0, val.length - 1);
        if(isNaN(roka)) roka = 0;
        val = who[key] * roka/100;
    }
    
    for(let are of ares){
        if(are.attr.includes('undead')){
            // console.log('アンデッドなので逆回復 =>')
            console.log('undead 死んじゃいない =>')
            let res = await damage(who, are, val, props);
            if(res) return 1;
            continue;
        }
        
        if(are.attr.includes('musha')) continue; //武者は回復を受けつけない

        addlog(`(${turn}) [${who.cam}]${who.name} ==> [${are.cam}]${are.name} (${val}回復)`);
        
        await delay(1000)

        are.hp += val;
        if(are.hp > are.maxhp) are.hp = are.maxhp;
        tekiou();
    }
}
//#endregion

//#region じょーたいいじょ〜
async function buffadd(who, ares, buff, time, val){ //誰のバフ/デバフか,バフ/デバフの名前,効果時間,効果量
    console.log(`buffadd:: ${buff}, ${time}, ${val}`);
    let newbuff = buffMold(buff, time, val);
    let data = Buffs.find(e => e.name == buff);
    let kind = data.kind;

    // console.log(ares)

    let hasa = (dare, name) => dare.ables.includes(name);

    if(!Array.isArray(ares)) ares = [ares];

    for(let are of ares){

        switch(kind){
            case 'turn':{
                //すでにある場合の処理
                let sore = are.buffs.find(b => b.name == buff && b.value == val);
                if(sore) sore.time += time;
            };
            break;

            case 'stack':{
                let sore = are.buffs.findIndex(e => e.name == buff);
                if(sore){
                    sore.time += time;
                    sore.value = data.lv[sore.time];
                }
            };
            break;
        }
        
        //whoがデバフ延長を持っているなら〜的な処理をここで。

        if(kind == 'turn') are.buffs.push(newbuff);

        tekiou();
    }
}
function buffMold(buff, time, val){
    if(!buff || !time || !val) console.error('要素が足りないぜ！！！', buff, kind, time, val);
    let data = Buffs.find(e => e.name == buff);

    if(!data) console.error(`${buff} ←これ存在しないらしいっすよ〜？`);
    let kind = data.kind;

    if(kind == 'fixe' && !data.lvs[val]){
        console.error(`${buff} ←これ最大レベルが${data.max}なのに、今${val}指定されてますよ〜？`);
        console.error(`私が調整しておきますから... 感謝してくださいね〜？`);
        val = data.max;
    }

    if(data.mode == 'free') val = {[data.agemono]: val};
    if(data.mode == 'fixe') val = data.lvs[val-1]??null;
    console.log(`[${data.mode}] ${buff} time:${time} val↓`);
    console.log(val);

    let newbuff = {};

    switch(kind){
        case 'turn':{
            newbuff = {
                type: data.type,
                kind: kind,
                name: buff,
                time: time,
                value: val,
                data: data,
            };
            break;
        }

        case 'stack':{
            newbuff = {
                type: data.type,
                kind: kind,
                name: buff,
                time: time,
                value: data.lv[time],
                data: data,
            };
            break;
        }
    }
    // console.log(newbuff)

    return newbuff;
}
function buffremove(who, buff){
    //誰のバフ/デバフか,バフ/デバフの名前
    if(!buffhas(who, buff)) return 0;

    let i = who.buffs.findIndex(e => e.name == buff)
    who.buffs.splice(i,1);
    tekiou();
    return 1;
}
function buffclear(who, code){
    switch(code){
        case 'all':
            who.buffs = [];
            break;
        case 'turn':
            who.buffs = who.buffs.filter(e => e.kind != 'turn');
            break;
        case 'stack':
            who.buffs = who.buffs.filter(e => e.kind != 'stack');
            break;
        case 'buffs':
            who.buffs = who.buffs.filter(e => e.type == 'buffs');
            break;
        case 'debuffs':
            who.buffs = who.buffs.filter(e => e.type == 'debuffs');
            break;
        case 'handles':
            who.buffs = who.buffs.filter(e => e.type == 'handles');
            break;
        case 'uniques':
            who.buffs = who.buffs.filter(e => e.type == 'uniques');
            break;
        default:
            console.log('codeが違ったからとりあえず同名消したけど、よかった？');
            who.buffs = who.buffs.filter(e => e.name == code);
    }
    tekiou();
}
function buffhas(who, buff){
    if(who.buffs.find(b => b.name === buff)) return 1;

    return 0;
}
function buffKeisan(dare, buff, code){
    console.log(`Keisan:: [${code}]${buff.name} val:${buff.value} time:${buff.time}`);
    let data = Buffs.find(a => a.name == buff.name);
    
    let val = 0;
    if(data.mode == 'free'){
        if(!hask(buff.value, code)) return 0;
        val = buff.value[code];
    }
    if(data.mode == 'fixe'){
        if(!hask(data.lvs[buff.value], code)) return 0;
        val = data.lv[buff.value][code];
    }

    // =+1 =-14 +24% -50%
    let dochi = val.slice(0,1); // =
    if(dochi != '=') dochi = '+';
    else val = val.slice(1);
    let puma = val.slice(0,1); // + -
    if(puma != '+' && puma != '-') puma = '+';
    val = val.slice(1);
    if(val.endsWith('%')){
        val = val.slice(0,-1);
        val = +dare[code]*(val/100);
    }
    else val = +val;

    if(!val) return 1;
    
    if(puma == '-') val = -val;

    switch(dochi){
        case '=': dare[code]  = val; break;
        case '+': dare[code] += val; break;
    }

    return 0
}
//#endregion

//#region ヒョギフ大統領の貴重なエヒフ
let eFf = {};
eFf.slash = async function(are, props = []){
    let hasp = (name) => {return props.includes(name)};

    let tcam = are.cam, tme = are.me;
    let div0 = batC[`${tcam.substring(0,1)}D`];
    let div = div0.querySelector(`.${tcam}${tme}`);

    let ef = document.createElement('div');
    ef.className = 'ef slash';

    let img = document.createElement('img');
    img.src = 'assets/images/elses/slash.gif';
    ef.appendChild(img);
    div.appendChild(ef);

    await delay(300);
    ef.remove();
}
//#endregion

//#region みんなふっとんじゃった〜？
async function dead(who, are){
    let hasa = (whi, name) => whi.attr.includes(name);

    let cam = who.cam;
    let tcam = are.cam;
    let tcams = humans.filter(a => a.cam == tcam);

    if(hasa(are, 'sinan')) return are.hp = are.maxhp*0.5, 0;

    //死
    are.hp = 0;
    are.stt = 0; //通常-1, 死-0
    let dom = batC[`${tcam.substring(0,1)}D`];
    let dom2 = dom.querySelector(`.${tcam}${are.me}`);
    dom2.classList.add('dead');

    //あれ？みんな死んじゃった？笑
    let res = tcams.every(a => a.stt == 0);
    if(!res) return 0;

    //勝敗を
    return await finale(cam);
}
//#endregion

//#region けっか～
async function finale(cam){
    nicoText(`${cam}の勝ち`)
    
    for(let i=0; i < humans.length; i++){
        let human = humans[i];
        if(human.cam == 'players') continue;

        let tcam = human.cam, tme = human.me;

        let dom = batC[`${tcam.substring(0,1)}D`];
        let dom2 = dom.querySelector(`.${tcam}${tme}`);
        dom2.remove();
        humans.splice(i,1);
    }

    batF.clos();

    return 1;
}
//#endregion


async function start(){
    //console.log("=====Ronto Connect connecten=====")
    soundVolume(50);
    fieF.load();

    //autoLogin
    username = getLocalStorage("username");
    if(username){
        console.log("自動ログインしました");
        usersRef = database.ref(`users/${username}`);
        rontoRef = database.ref(`users/${username}/rontoConnect`);
        nicoText('wait for now...')
        login();
    }else{
        console.log("ログインしてください");
        loginD.classList.add('appe')
    }
}


//#region 画像と音声のロード
let images = {};
let sounds = {};
let loaC = {
    imgT: 0,
    imgD: 0,
    souT: 0,
    souD: 0,
    erd: 0
}
let loaF = {};
loaC.imgL = {
    systems:['select','phone','star1','star1_pre','star2','star2_pre','star3','star3_pre'],
    // 草原:['蒼白の粘液','翡翠の風刃','顎剛なる草獣','茎槍の狩人','の茎針','攣縮する茎針','共鳴する茎赤黄','黄昏の穿影','燦爛する緑夢','紫苑の花姫','新緑なる剣士']
}

loaC.souL = ['error', 'doom', 'money']
loaC.souT = Object.values(loaC.souL).length;

loaF.load = async() => {
    if(await loaF.loadI()) return 'error';
    else '終わり'
}
loaF.loadI = async() => {
    let stas0 = Stages.map(a => a.name);
    let stas = stas0.concat(['すべて']);
    
    loaC.imgL.maps = {};
    loaC.imgL.enemies = {};
    for(let sta of stas){
        if(!loaC.imgL.maps[sta]) loaC.imgL.maps[sta] = [];
        Objects.filter(a => a.in == sta).map(a => a.name).forEach(name => {
            loaC.imgT += 1;
            if(sta != 'すべて') loaC.imgL.maps[sta].push(name);
            
            else for(let sta2 of stas0) loaC.imgL.maps[sta2].push(name);
        });

        if(sta == 'すべて') continue;

        Stages.find(a => a.name == sta).tiles.forEach(name => {
            loaC.imgT += 1;
            loaC.imgL.maps[sta].push(name);
        })

        if(!loaC.imgL.enemies[sta]) loaC.imgL.enemies[sta] = [];
        Enemies.filter(a => a.ins.includes(sta) || a.ins == 'すべて').map(a => a.name).forEach(name => {
            loaC.imgT += 1;
            // loaC.imgL.enemies.push(name);
            
            if(sta != 'すべて') loaC.imgL.enemies[sta].push(name);
            else for(let sta2 of stas0) loaC.imgL.enemies[sta2].push(name);
    });

    }
    // loaC.imgL.enemies = [];
    
    // console.log('LETS GOOOOOOOOOOO!!')
    let T1 = (Tk) => {
        let Tv = loaC.imgL[Tk];
        if(Array.isArray(Tv)) return loaC.imgT += Tv.length;
        
        T0(Tv);
    }
    let T0 = (moto) => {
        for(let key in moto){
            T1(key);
        }
    }

    let loaloa = (arr, route) => {
        // console.log("Arrayでした lets 読み込み")
        let src = "assets/images/";
        for(let r of route) src += `${r}/`;
        // console.log(src)

        let tar = images;
        for(let r of route){
            // console.log(r, tar)
            if(!tar[r]) tar[r] = {};
            tar = tar[r];
        }
        // console.log("終わり", tar)
        // console.log(images)
        // console.log(arr);
        // console.log(route);
        // console.log(images);

        // return console.log('強制終了'), '強制終了'

        for(let mono of arr){
            let img = new Image();
            img.src = `${src}${mono}.png`;
            img.onload = () => {
                loaC.imgD++;
                if(loaC.imgD == loaC.imgT) loaF.loadS();
            };
            img.onerror = () => {
                console.error(`Image ${src}${mono}.png failed to load.`);
                loaC.erd += 1;
                 if(loaC.erd > 20) return console.error('さすがにやりすぎbonus'), 1;
                img.src = `assets/images/systems/error.png`;
                loaC.imgD++;
                if(loaC.imgD == loaC.imgT) loaF.loadS();
            };
            
            tar[mono] = img;
            if(loaC.imgD >= loaC.imgT) loaF.loadS();
        }

        // console.log('読み込み完了 これよりユグドラシルに帰還する')
        return 0;
    }

    // let gensho = Object.keys(loaC.imgL);
    let loaloa0 = async(mono, route = []) => {
        let sink = route.length ? 1 : 0
        // if(sink) console.log("not Arrayでした lets 再帰");
        
        // console.log("[loaloa0] route:[" + route + "]");
        // console.log('次:monoです')
        // console.log(mono)
        for(let key in mono){
            // console.log(`key:${key} (all:[${Object.keys(mono)}])`)
            if(key == 'すべて'){
                // console.error('"すべて"だったのでスキップ');
                route.pop()
                continue;
            }

            route.push(key);
            // console.log("[loaloa0ed] route:[" + route + "]");
            
            let val = mono[key]??null;
            if(!val) return console.error('↓↓null↓↓'), console.log(tar), console.log(mono), console.log(key), console.error('↑↑null↑↑');
            // console.log("次、valです");
            // console.log(val);
            // console.log("↑Arrayかな? 結果 => "+Array.isArray(val));
            if(Array.isArray(val)){
                if(await loaloa(val, route)) return console.error('南ノ南');
                route.pop()
                // console.log(`帰還成功、${route.pop()}を排除`)
            }//arrayなら => ロードへ
            else await loaloa0(val, route); //まだオブジェクトなら => もっかい
        }

    }
    

    loaloa0(loaC.imgL);

}

loaF.loadS = async() => {
    loaC.souL.forEach(num => {
        let sound = new Audio();
        sound.preload = 'auto';
        sound.src = `assets/sounds/${num}.mp3`;
        sound.addEventListener('canplaythrough', () => {
            // console.log(`Sound ${num} loaded.`);
            loaC.souD += 1;
            if(loaC.souD == loaC.souT) start();
        }, {once: 1});
        sound.onerror = () => {
            console.error(`Sound ${num} failed to load.`);
            loaC.erd += 1;
            if(loaC.erd > 20) return console.error('さすがにやりすぎbonus'), 1;
            sound.src = `assets/sounds/error.mp3`;
            loaC.souD += 1;
            if(loaC.souD == loaC.souT) start();
        };
        sounds[num] = sound;
    });
}

let souC = {
    volume: 0.5
}

function soundPlay(name){
    let sound = sounds[name];
    if(!sound) return soundPlay("error");

    sound.currentTime = 0;
    sound.volume = souC.volume;
    sound.play();
}

function soundStop(){
    document.querySelectorAll('audio,video').forEach(el => {
        el.pause();
        el.currentTime = 0;
    });
}

function soundVolume(val){
    const v = Math.max(0, Math.min(1, val/100));
    console.log(`[soundVolume] ${souC.volume??null} => ${v}`);
    souC.volume = v;
    document.querySelectorAll('audio,video').forEach(el => {
        el.volume = v
    });
}
//#endregion

document.addEventListener('DOMContentLoaded', async() => await loaF.load())