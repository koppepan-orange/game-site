//#region komagome
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
};

async function nicoText(mes){
    console.log(`[nico] ${mes}`);
    let div = document.createElement('div');
    div.textContent = mes;
    div.className = 'nicotext';
    document.querySelector('body').appendChild(div);

    let wid = div.offsetWidth;
    div.style.top = `calc(${random(0, 100)}vh - 20px)`;
    div.style.right = `-${wid}px`;

    requestAnimationFrame(() => div.style.right = `${window.innerWidth + wid}px`);
    
    await delay(5000); 
    div.remove();
};
function tobiText(youso, mes){
    let el = youso;
    if(typeof el == 'string') el = document.querySelector(youso);
    if(!el) return console.error('せんぱ〜い？この要素壊れてますよ〜〜？');

    console.log(`[tobi] ${mes}`);

    let rect = el.getBoundingClientRect();
    let left = rect.left + window.scrollX + rect.width / 2;
    let top = rect.top + window.scrollY + rect.height / 2;

    let node = document.createElement('div');
    node.className = 'tobitext';
    node.innerText = mes;
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
function copytext(text){
    console.log(`[copy] ${text}`);
    navigator.clipboard.writeText(text)
}
async function kirameki(div0, zukey = 'star', n = 20, time = 2000, col){
    let taioued = ['star', 'heart'];
    if(!taioued.includes(zukey)) return console.log(`図形が対応していません。現在対応しているのは[${taioued.join(', ')}]だけであります。`);
    let rect = div0.getBoundingClientRect();
    let cenX = rect.left + rect.width / 2 + window.scrollX;
    let cenY = rect.top + rect.height / 2 + window.scrollY;

    let divs = [];
    for(let i=0; i<n; i++){
        let div = document.createElement('div');
        div.className = `kirameki p_${zukey}`;
        // 初期は中央にpxで置く（CSS側で position:absolute を想定）
        div.style.left = `${cenX}px`;
        div.style.top = `${cenY}px`;
        if(zukey == 'star') div.style.transform = `rotate(${Math.random() * 360}deg)`;
        if(col) div.style.background = col;
        document.body.appendChild(div);
        divs.push(div);
    }

    divs.forEach(div => {
        let angle = Math.random() * 2 * Math.PI;
        let speed = Math.random() * 2 + 1;
        let velocityX = Math.cos(angle) * speed;
        let velocityY = Math.sin(angle) * speed;

        let start = performance.now();
        function animate(now){
            let elapsed = now - start;
            if(elapsed >= time){
                div.remove();
                return;
            }
            // 滑らかなイージング
            let t = elapsed / time;
            let e = 1 - Math.pow(1 - t, 3);
            // 少し拡散するように速度を掛ける
            div.style.left = `${cenX + velocityX * (elapsed / 16)}px`;
            div.style.top = `${cenY + velocityY * (elapsed / 16)}px`;
            div.style.opacity = String(1 - t);
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    });
}
function El(tag, cls, children = []){
    let e = document.createElement(tag);
    if(cls) e.className = cls;
    children.forEach(c => e.appendChild(c));
    return e;
}
function awase(div, max = 28, code = "innerText"){
    if(max == 0) max = 28; //skipと仮定する
    if(!code) return console.error(`せんぱ〜い..? ${code}なんていうよくわからないものは使わないでくださ〜い笑`);

    let wid = div.clientWidth;
    let len = div[code].length;
     if(len == 0) return;
    let px = wid/len;
     if(max < px) px = max;
    div.style.fontSize = `${px}px`;
}
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
    let end2 = sta2 + row - 1;
    if(end2 > end) end2 = end;

    let arr = [];
    for(let i = sta2; i <= end2; i++) arr.push(i);

    return arr;
};
function arraySelect(array){
    let select = Math.floor(Math.random()*array.length);
    return array[select];
};
function arrayToggle(array, name){
    let array2 = copy(array);
    let index = array2.indexOf(name);
    if(index == -1) array2.push(name);
    else array2.splice(index, 1);
    
    return array2;
}
function arrayShuffle(array){
    let ato = copy(array);
    for(let i=(ato.length-1); i>0; i--){
        let i2 = Math.floor(Math.random() * (i + 1));
        [ato[i], ato[i2]] = [ato[i2], ato[i]];
    };
    return ato;
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
    let res = Object.prototype.hasOwnProperty.call(obj, key)
    if(res) return 1;
    return 0;
};
function copy(moto){
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
function hit(num){
    return +(Math.random()*100 <= num);
    //例:num == 20 → randomが20以内なら1, elseなら0を返す
};
function roll(n, m){
    let res = 0;
    for(let i=0; i<n; i++) res += random(1, m);

    if(3 < m && res == n*m) console.log('ファンブル！');
    if(3 < m && res == n) console.log('クリティカル！');
    return res;
    //例:n = 1, m = 100 => 100面ダイスを1回振った出目の合計を返す
}
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
    for(let a of Object.keys(optcou)){
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
// LocalStorage(Data) => lsd
function lsdSet(name, value){
    if(Array.isArray(value) ||
       typeof value == 'object') value = JSON.stringify(value);
    localStorage.setItem(name, value || "");
};
function lsdGet(name){
    let res = localStorage.getItem(name);
    
    // データが存在しない場合は null を返す
    if(res == null) return null;
    if(res == undefined) return null;

    try{
        return JSON.parse(res);
    }catch(e){
        return res;
    }
};
function lsdRem(name){
    localStorage.removeItem(name);
}
function lsdShow(){
    let itemCount = localStorage.length;
    console.error(`-- LocalStorageのアイテム数: ${itemCount} --`);
    for(let i = 0; i < itemCount; i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        // nicoText(`キー: ${key}, 値: ${value}`);
        console.log(`キー: ${key}, 値: ${value}`);
    }
    console.error(`-- 以上 --`);
}

function irohaHo(color){
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
function irohaMix(c1, c2, ratio = 0.5){
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
function irohaRan(){
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let ato = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    return ato;
};
function irohaDark(color) {
    color = color.replace('#', '');
    if (color.length === 3) color = color.split('').map(x => x + x).join('');
    
    let r = parseInt(color.slice(0, 2), 16);
    let g = parseInt(color.slice(2, 4), 16);
    let b = parseInt(color.slice(4, 6), 16);

    // 相対輝度の近似計算
    // 0.2126 * R + 0.7152 * G + 0.0722 * B
    let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    
    return luma < 128; // 暗い色ならtrue
}

function timeDiff(kako){
    if(typeof kako == 'number') kako = kako.toString();
    let now = new Date();
    let past = new Date(
        kako.slice(0, 4),
        kako.slice(4, 6) - 1,
        kako.slice(6, 8),
        kako.slice(8, 10),
        kako.slice(10, 12)
    );

    let diff = now - past;
    let d = {
        minute:Math.floor(diff / (1000 * 60)),
        hour:Math.floor(diff / (1000 * 60 * 60)),
        day:Math.floor(diff / (1000 * 60 * 60 * 24)),
        month:(now.getFullYear() - past.getFullYear()) * 12 + now.getMonth() - past.getMonth(),
        year:now.getFullYear() - past.getFullYear()
    };

    if(d.minute < 60){
        return `${d.minute}分前`;
    }else if(d.hour < 24){
        return `${d.hour}時間前`;
    }else if(d.day < 30){
        return `${d.day}日前`; //30日未満なら「日」
    }else if(d.month < 12){
        return `${d.month}ヶ月前`; //12ヶ月未満なら「月」
    }else{
        return `${d.year}年前`; //それ以上なら「年」
    }
}
function timeToshow(date){ //見る用
    if(!date) console.error('日付がありませんぜ旦那！');
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}
function timeTodata(date = new Date()){ //データ保存用
    if(!date) date = new Date(), console.warn('あなた、日付を入れ忘れてるわよ');
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let time = `${year}${month}${day}${hours}${minutes}`;
    return +time;
}

function cursorSelect(){
    let selected = window.getSelection();
    let res = '';
    if(0 >= selected.rangeCount) return '';

    res = selected.toString();
    return res;
}
function cursorEnd(){
    let selected = window.getSelection();
    if(0 >= selected.rangeCount) return 1;
    selected.collapseToEnd();
    return 0;
}
function cursorActive(){
    let el = document.activeElement;
    let res = 0;
    if(el.tagName == 'INPUT') res = 1;
    if(el.tagName == 'TEXTAREA') res = 2; //改行可
    if(el.isContentEditable) res = 1;
    return res;
}
function cursorHas(){
    let selected = window.getSelection();
    let text = selected.toString();
    if(text.length <= 0) return 0;
    return text;
}
function cursorRect(){
    let selection = window.getSelection();
    if(selection.rangeCount == 0) return 0;
    
    let range = selection.getRangeAt(0);
    return range.getBoundingClientRect();
}

function scrlEnd(div){
    div.scrollTop = div.scrollHeight;
};

async function error(text = 'errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'){
    await logText(text);
    await delay(2000);
    // window.open('about:blank', '_self').close();
};
//#endregion
//#region log&text
let logD = document.getElementById('log');
let logC = {
    mainD: logD.querySelector('.main'),
    togD: logD.querySelector('.opener'),
    textD: logD.querySelector('.text'),
    autoDelay: 1,
    skipText: 0,
    clearText: 0,
    loopText: 0,
    ing: 0,
    queue: []
}
logC.colors = [
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
let logF = {};

logF.cc = (raw) => {
    let text = [];
    let color = null;

    for(let i = 0; i < raw.length; i++){
        let sym = 0;
        for(let c of logC.colors){
            if(raw[i] == c.sym && raw[i + 1] == c.sym){
                console.log(`→${raw[i]}← 発見！ ${c.name}色です`);
                color = color ? null : c.col;
                i++;
                sym = 1;
                break;
            }
        };
        if(sym) continue;

        text.push({
            char: raw[i],
            color: color
        });
    }
    return text;
};

logF.waitfor = async() => {
    let len = logC.queue.length;

    if(len == 0) logC.loopText = 0;
    else logC.loopText = 1;

    if(!logC.loopText) return;
    requestAnimationFrame(logF.waitfor);

    if(logC.ing) return;
    let raw = logC.queue.shift();
    // console.log(`${raw}を送信します`);
    // console.log(`残り: (${len - 1})[${logC.queue}]`);
    await logText(raw);
};
async function logText(raw){
    if(!raw) return console.log('「内容が？内容が〜〜？ないよ〜〜〜つってwwww直せ」');
    if(typeof raw != 'string') raw = String(raw);

    if(logC.ing){
        logC.queue.push(raw);

        if(!logC.loopText) logF.waitfor();
        return;
    };
    
    logC.ing = 1;
    text = logF.cc(raw);
    logC.textD.innerHTML = "";
    logC.textD.style.display = "block";
    logC.clearT = 0;

    let index = 0;
    return new Promise((resolve) => {
        async function type(){
            if(index < text.length){
                if(logC.skipT){
                    while(index < text.length){
                        let span = document.createElement("span");
                        span.textContent = text[index].char;
                        if(text[index].color) span.style.color = text[index].color;
                        logC.textD.appendChild(span);

                        index++;
                    }
                    index = text.length;
                    logC.skipT = 0;
                    setTimeout(type, 10);
                }else{
                    let span = document.createElement("span");
                    span.textContent = text[index].char;
                    if(text[index].color) span.style.color = text[index].color;
                    logC.textD.appendChild(span);

                    index++;
                    setTimeout(type, 80); // 次の文字を表示する間隔
                }
            }else{
                logText_log(logC.textD.innerHTML);
                let waitTime = logC.autoDelay * 1000;
                let timeout = new Promise(resolve => setTimeout(resolve, waitTime));
                let userAction = new Promise(resolve => {

                    function waitToClear(event){
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
                    logC.textD.textContent = "";
                    logC.textD.style.display = "none";
                    logC.clearT = 1;
                    logC.skipT = 0
                    logC.ing = 0;
                    resolve('end');
                });
            }
        };
        type();
    });
};
document.addEventListener('keydown', (e) => {
    if(e.key === 'z' || e.key === 'Enter') logC.skipT = 1;
});
document.addEventListener('keyup', (e) => {
    if(e.key === 'z' || e.key === 'Enter') logC.skipT = 0;
});
document.addEventListener('click', () => {
    logC.skipT = 1;
    setTimeout(() => logC.skipT = 0, 50); // 一時的にスキップを有効化
});

logF.tog = (code = NaN) => {
    if(isNaN(code)){
        logD.classList.toggle('tog');
        logC.togD.textContent = logD.classList.contains('tog') ? '<' : '>';
    }
    else{
        if(code == 1){
            logD.classList.add('tog');
            logC.togD.textContent = '<';
        };
        if(code == 0){
            logD.classList.remove('tog');
            logC.togD.textContent = '>';
        };
    }

    let isTog = logD.classList.contains('tog');
    let isHid = logD.classList.contains('hid');
    if(isTog && isHid) logF.woah(0);
};
logC.togD.addEventListener('click', logF.tog);

logF.woah = (code = NaN) => {
    if(isNaN(code)){
        logD.classList.toggle('hid');
    }
    else{
        if(code == 1) logD.classList.add('hid');
        if(code == 0) logD.classList.remove('hid');
    }

    let isTog = logD.classList.contains('tog');
    let isHid = logD.classList.contains('hid');
    if(isTog && isHid) logF.tog(0);
};

function logText_log(text){
    logC.mainD.innerHTML += text + '<br>';
    logC.mainD.scrollTop = logC.mainD.scrollHeight;
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
    
    while(div && !div.classList.contains('draggable')){
        if(div.tagName == 'BODY') return; //戻りすぎね
        div = div.parentElement;
    }

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

        let contex = {x, y, w, h};

        let yoko = ['x', 'w'];
        for(let n of yoko){
            console.log(n), console.log(eval(n));
            if(typeof contex[n] != 'string' || typeof contex[n] == 'string' && !contex[n].endsWith('%')) continue;
            let num = contex[n].slice(0, -1);
            contex[n] = num * window.innerWidth / 100;
        }

        let tate = ['y', 'h'];
        for(let n of tate){
            if(typeof contex[n] != 'string' || typeof contex[n] == 'string' && !contex[n].endsWith('%')) continue;
            let num = contex[n].slice(0, -1);
            contex[n] = num * window.innerHeight / 100;
        }

        console.log(contex);

        youso.style.width = `${contex.x}px`;
        youso.style.height = `${contex.h}px`;

        youso.style.left = `${contex.x}px`;
        youso.style.top = `${contex.y}px`;
        
        if(contex.x == 'half' && contex.y == 'half') youso.classList.add('cenXY');
         else if(x == 'half') youso.classList.add('cenX');
         else if(y == 'half') youso.classList.add('cenY');

        this.youso = youso;
    };

    attrAdd(dict = 'none'){
        if(dict == 'none') return;
        
        if(typeof dict == 'string'){
            // attr: nanka
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
//#region alertD
class alertD{
    letructor(text, elses = {}){
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
//#region OBS
let OBS = {
    keys: {},
    cling: 0,
    cring: 0,
    mx: 0,
    my: 0
}

OBS.KeysA = (e) => {
    let key = e.key.toLowerCase();
    if(e.key == ' ') key = 'space';
    OBS.keys[key] = 1;
};
OBS.KeysR = (e) => {
    let key = e.key.toLowerCase();
    if(e.key == ' ') key = 'space';
    OBS.keys[key] = 0;
};

OBS.PonD = (e) => {
    if(e.button == 0) OBS.cling = 1;
    if(e.button == 2) OBS.cring = 1;
};
OBS.PonU = (e) => {
    if(e.button == 0) OBS.cling = 0;
    if(e.button == 2) OBS.cring = 0;
};
OBS.ponC = (e) => {
    if(e.button == 0) OBS.cling = 0;
    if(e.button == 2) OBS.cring = 0;
};
OBS.PonB = () => {
    OBS.cling = 0;
    OBS.cring = 0;
}

OBS.Mouse = (e) => {
    OBS.mx = e.clientX;
    OBS.my = e.clientY;
};

OBS.Paste = (e) => {
    // プレーンペーストに強制的にするやつ？
    e.preventDefault();
    let text = e.clipboardData.getData("text/plain");

    let div = e.target;

    if(div.tagName == "INPUT" || div.tagName == "TEXTAREA"){
        let start = div.selectionStart;
        let end = div.selectionEnd;

        div.value = div.value.slice(0, start) + text + div.value.slice(end);
        div.selectionStart = div.selectionEnd = start+text;
        return;
    }

    let selection = window.getSelection();
    if(!selection.rangeCount) return;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(text));
    selection.collapseToEnd();
};

OBS.load = () => {
    let sts = {
        "Keys": 1,
        "Mouse": 1,
        "Click": 1,
        "Paste": 0,
    }

    if(sts["Keys"]){
        window.addEventListener('keydown', OBS.KeysA);
        window.addEventListener('keyup', OBS.KeysR);
    }

    if(sts["Mouse"]){
        window.addEventListener('mousemove', OBS.Mouse);
    }

    if(sts["Click"]){
        window.addEventListener('pointerdown', OBS.PonD);
        window.addEventListener('pointerup', OBS.PonU);
        window.addEventListener('pointercancel', OBS.ponC);
        window.addEventListener('blur', OBS.PonB);
    }

    if(sts["Paste"]){
        window.addEventListener('paste', OBS.Paste);
    }
}
//#endregion
//#region fonts
let Fonts = [
    // {src:'comicsans', type:'ttf'},
];
function fontsLoad(){
    let id = "font_load_css";
    let existing = document.getElementById(id);
    if(existing) existing.remove();

    let css = Fonts.map(f => {
        let src = `url('${Pathes[1]}assets/fonts/${f.src}.${f.type}')`;
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
//#region 画像と音声のロード
let images = {};
let sounds = {};
let loaC = {
    imgT: 0,
    imgD: 0,
    souT: 0,
    souD: 0,
    erd: 0,
    deep:0
}
let loaF = {};
loaC.imgL = {
    systems:['select','circle','phone','star1','star1_pre','star2','star2_pre','star3','star3_pre','dungeon'],
    // 草原:['蒼白の粘液','翡翠の風刃','顎剛なる草獣','茎槍の狩人','の茎針','攣縮する茎針','共鳴する茎赤黄','黄昏の穿影','燦爛する緑夢','紫苑の花姫','新緑なる剣士']
}

loaC.souL = ['error', 'doom', 'money']
loaC.souT = Object.values(loaC.souL).length;

loaF.load = async() => {
    if(await loaF.loadI()) return 'error';
    else '終わり'
}
loaF.loadI = async() => {
    let stas0 = Stages.filter(a => !a.no).map(a => a.name);
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
        Enemies.filter(a => !a.no && (a.ins.includes(sta) || a.ins == 'すべて')).map(a => a.name).forEach(name => {
            loaC.imgT += 1;
            // loaC.imgL.enemies.push(name);
            
            if(sta != 'すべて') loaC.imgL.enemies[sta].push(name);
            else for(let sta2 of stas0) loaC.imgL.enemies[sta2].push(name);
        });
    }

    loaC.imgL.charas = [];
    for(let ch of Charas){
        let toku = 0;
        if(ch.name == "color_slime") toku = 1;
        if(toku == 0){
            let img = `${ch.img}`;
            loaC.imgL.charas.push(img);
        }
        else{
            switch(ch.name){
                case "color_slime":
                    for(let c of ch.data.colors){
                        let img = `${ch.data.colorp}${c}`;
                        loaC.imgL.charas.push(img);
                    }
            }
        }
    }
    

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

    let loaloa = async(arr, route) => {
        // console.log("Arrayでした lets 読み込み")
        let src = "assets/images/";
        for(let r of route) src += `${r}/`;
        // console.log(src)

        let yomi = (mono, img) => {
            loaC.imgD += 1;
            tar[mono] = img;
            if(loaC.imgD == loaC.imgT) return loaF.loadS(), 4;
        }

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

        let all = arr.length;
        // console.error(`--- ${route.join('/')}:${all} ---`)
        for(let mono of arr){
            // console.log(mono);
            let img = new Image();
            img.src = `${src}${mono}.png`;
            img.onload = () => {
                yomi(mono, img);
            }

            img.onerror = () => {
                console.error(`Image ${src}${mono}.png failed to load.`);
                loaC.erd += 1;
                 if(loaC.erd > 50) return console.error('さすがにやりすぎbonus'), loaC.kokokomai = 32
                img.src = `assets/images/systems/error.png`;
                yomi(mono, img);
                erd = 1
            };
        }

        // console.log('読み込み完了 これよりユグドラシルに帰還する')
        return 0;
    }

    // let gensho = Object.keys(loaC.imgL);
    let loaloa0 = async(mono, route = []) => {
        let sink = route.length ? 1 : 0
        // if(sink) console.log("not Arrayでした lets 再帰");
        let hzd = loaC.deep;
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
            loaC.deep += 1;
            // console.log(`[loaloa0ed] route:[${route}]`);
            
            let val = mono[key]??null;
            if(!val) return console.error('↓↓null↓↓'), console.log(tar), console.log(mono), console.log(key), console.error('↑↑null↑↑');
            // console.log("次、valです");
            // console.log(val);
            // console.log("↑Arrayかな? 結果 => "+Array.isArray(val));
            if(Array.isArray(val)){
                if(await loaloa(val, route)) return console.error('南ノ南');
                let pop = route.pop()
                // console.log(`帰還成功、${pop}を排除`)
                loaC.deep -= 1;
            }//arrayなら => ロードへ
            else await loaloa0(val, route); //まだオブジェクトなら => もっかい
        }
        route.pop();
        loaC.deep -= 1;
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
    let v = Math.max(0, Math.min(1, val/100));
    console.log(`[soundVolume] ${souC.volume??null} => ${v}`);
    souC.volume = v;
    document.querySelectorAll('audio,video').forEach(el => {
        el.volume = v
    });
}


document.addEventListener('DOMContentLoaded', async() => await loaF.load())
//#endregion
//#region 幸せになれる隠しコマンドがあるらしい
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
            // console.log(img.dataset.phase);
            if(img.dataset.phase != '2') return 1;
            location.reload();
        }
    },
]
document.addEventListener('keydown', async function(e){
    let key = e.key.toLowerCase();
    if(key == 'escape') loop = 0;

    if(document.activeElement.tagName == 'INPUT') return;
    if(document.activeElement.tagName == 'TEXTAREA') return;

    for(let sec of secrates){
        let nke = sec.arr[sec.ind];
        // console.log(`必要は${nke}、押されたは${key}！`);
        if(key == nke){
            sec.ind += 1;
            if(sec.ind == sec.arr.length && sec.limit){
                console.log(`${sec.name}発動！！[${sec.arr.join(' ')}]`);
                sec.ind = 0;
                let res = await sec.func();
                if(!res && sec.limit != 'n') sec.limit -= 1;
            }
        }
        else sec.ind = 0;
    }
})
//#endregion


const context = {};

//#region Login
let firebaseConfig = {
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
let database = firebase.database();
let noname = 'no name';
let User = {
    truth: noname,
    idora: noname,
    ref: null,
    data: null,
    ronC: {
        ref: database.ref(`users/null/rontoConnect`),
        data: null,
    }
}

let logiD = document.getElementById('login');
let logiC = {
    nameI: logiD.querySelector('.username'),
    passI: logiD.querySelector('.password'),
    senD: logiD.querySelector('.send'),
	tog:1,

    acsD: logiD.querySelector('.acs'),
     acsBD: logiD.querySelector('.acs .tog'),
     acsLD: logiD.querySelector('.acs .list'),
    acsC: {
        tog: 0,
    },
    acsF: {},

    dolD: logiD.querySelector('.dolphin'),
     dolDT: logiD.querySelector('.dolphin .text'),
     dolDI: logiD.querySelector('.dolphin img'),
    dolP: 0,
}
let logiF = {};


logiF.auto = () => {
    let name = lsdGet("username");
    // console.log(name)
    if(name){
        nicoText('オカエリナサイ マセ');
        // nicoText("自動ログインしました");
        login(name);
    }
    else{
        nicoText("ログインしてください");
        areF.move('login');
    }
}

logiF.lsdHozon = (name, pass) => {
    console.log(`${name}をlsdに保存しま〜す`)
    lsdSet("username", name);

    let arr = logiF.lsdList();
    arr = arr.filter(a => a.name != name);

    arr.push({
        name:name,
        pass:pass
    });
    lsdSet('accounts', arr);
}
logiF.lsdRHozon = (name) => {
    lsdRem("username");
    let arr = logiF.lsdList();
    arr = arr.filter(a => a.name != name);
    lsdSet('accounts', arr);
}
logiF.lsdList = () => {
    let arr = lsdGet('accounts');
    if(!arr) arr = [];
    return arr;
}

async function login(name){
    User.truth = name;
    User.idora = name;
    User.ref = database.ref(`users/${name}`);
    User.ronC.ref = database.ref(`users/${name}/rontoConnect`);
    User.data = (await User.ref.get()).val();
    User.ronC.data = (await User.ronC.ref.get()).val();
    await delay(10);
    // update();

    areF.move('home');
}
function logout(){
    User.truth = noname;
    User.idora = noname;
    User.ref = null;
    User.data = null;
    User.ronC.ref = null;
    User.ronC.data = null;

    lsdRem("username");
    logiC.nameI.value = '';
    logiC.passI.value = '';
    
    areF.move('login');
}

logiF.going = () => {
    let name = logiC.nameI.value;
    let pass = logiC.passI.value;
    if(name == '' || pass == '') return;
    console.log(`username => ${name}`)
    console.log(`password => ${pass}`)
    
    let success = () => {
        nicoText('ようこそ');
        logiF.lsdHozon(name, pass);
        login(name);
    }

    let kariRef = database.ref(`users/${name}`);
    kariRef.once('value', function(snapshot){
        if(snapshot.exists()){
            if(snapshot.val().password == pass) success();
            else tobiText(logiC.senD, "パスワードまたはユーザー名が間違っています"); //ふぅぅわかりにくいねぇ！
        }else{
            nicoText('初回起動 感謝シマス-- シバシ オ待チヲ  ガピッ');
            let usersRef = database.ref(`users/${name}`);
            usersRef.update({
                password:pass,
                blocked: ['null'],
            })

            valorimar = 0;
            bankvalorimar = 0;
            rank = 1;
            rpt = 0;
            
            success();
        }
    })
}
logiC.senD.addEventListener('click', logiF.going);


logiC.acsF.tog = (co = NaN) => {
    if(logiC.acsLD.innerHTML == '') return;

    if(typeof co != 'number') co = fl(logiC.acsC.tog);

    if(co == 1) logiC.acsD.classList.add('tog');
    if(co == 0) logiC.acsD.classList.remove('tog');
    logiC.acsC.tog = co;
}
logiC.acsBD.addEventListener('click', logiC.acsF.tog);

logiC.acsF.load = async() => {
    logiC.acsLD.innerHTML = '';
    
    let arr = logiF.lsdList();
    if(!arr.length) return;

    for(let ac of arr){
        let warn = 0;
        //今のpassと、ac.pass(過去ログイン時のpass)が違えばcontinue
        let acRef = database.ref(`users/${ac.name}`);
        let snash = await acRef.once('value'); 
        if(!snash.exists() || snash.val().password != ac.pass) warn = 1;

        let div = El('div', 'item');
    
        let name = El('div', 'name');
        name.textContent = ac.name;
        name.addEventListener('click', () => {
            if(warn) tobiText(name, "パスワードが変更されています。\n再度ログインしてください");

            logiC.nameI.value = ac.name;
            if(!warn) logiC.passI.value = ac.pass;
            logiC.acsF.tog(0);
        })
        div.appendChild(name);

        let del = El('div', 'del');
        del.textContent = "×";
        del.addEventListener('click', () => {
            logiF.lsdRHozon(ac.name);
            logiC.acsF.load();
        })
        div.appendChild(del);

        let warnD = El('div', 'warn');
        warnD.textContent = "！";
        if(warn) div.appendChild(warnD);


        logiC.acsLD.appendChild(div);
    }   
}


logiC.dolDI.addEventListener('click', () => {
    switch(logiC.dolP){
        case 0:
            logiC.dolDT.innerHTML = '規約に同意する？\n→<a href="assets/txts/dolphin.html" target="_blank">イルカ:利用規約</a>';
            logiC.dolP = 1;
            break;
        
        case 1:
            logiC.nameD.value = 'dolphin';
            logiC.passD.value = 'Iloveirukaice';
            logiC.sendD.click();

            logiC.dolP = 0;
            logiC.dolDT.textContent = 'お前を消す方法';
            break;
    }
});
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
    if(e.button && e.pointerType == 'mouse') return;
    e.preventDefault();
    undD.setPointerCapture(e.pointerId);
    undC.drag = 1;
    undC.pointerId = e.pointerId;
    undC.kirock = e.clientY;
    undC.shote = undF.getBottom(undD);
});

document.addEventListener('pointermove', (e) => {
    if(!undC.drag || e.pointerId !== undC.pointerId) return;
    let dy = e.clientY - undC.kirock;
    // shote - dy で「上に引っ張ると open（bottom -> 0）」になる
    let newBottom = undC.shote - dy;
    let all = undD.offsetHeight;
    let min = -all; // 完全に隠れた状態
    let max = -all*0.2; // 完全に表示されている状態
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
    let collator = new Intl.Collator('ja', {usage:'sort', sensitivity:'variant'});

    let sorted = [...Friends].sort((a, b) => {
        let ra = (a.ruby || '').normalize('NFKC').replace(/[\u3000\s]+/g, '');
        let rb = (b.ruby || '').normalize('NFKC').replace(/[\u3000\s]+/g, '');
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
let areC = {
    now:null,
}
let areF = {};

areC.list = [
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
        name:'dungeon',
        rank:3,
        back:'#8feb87'
    },
    {
        name:'battle',
        rank:4,
        back:'#001748'
    }
]

areF.move = (to) => {
    if(areC.now == to) return console.log('どういうわけか もう そこにいる');
    console.log(`[area移動] ${areC.now} => ${to}`);

    let area = areC.list.find(a => a.name == to);
    if(!area) return console.log('そんなエリアないっすよ〜？');
    
    areC.now = area.name;
    Style.area.back = area.back;
    Style.area.rank = area.rank;
    Style.tekiou();

    for(let n of areC.list){
        let div = document.getElementById(`${n.name}`);
        if(n.name == to) div.classList.add('appe');
        else div.classList.remove('appe');
    }
}
areF.move('home');


let movlis = document.getElementById('movlis');
let movlising = 0;
for(let n of areC.list){
    let li = document.createElement('div');
    li.textContent = n.name;
    li.className = 'item';

    li.addEventListener('click', () => areF.move(n.name));

    movlis.querySelector('.list').appendChild(li);
}
document.addEventListener('keydown', (e) => {
    if(e.key != 'm' || movlising) return;
    movlis.style.left = `${OBS.mx - movlis.offsetWidth/2}px`;
    movlis.style.top = `${OBS.my}px`;
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
let homD = document.getElementById('home');
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
    areF.move('title');
    await delay(1500);
    areF.move('loby');
}
homC.goLobyD.addEventListener('click', homF.goLoby);

homC.goFarmD.addEventListener('click', () => areF.move('farm'));

//#endregion

//#region 農業しようぜ！
let farmD = document.getElementById('farm');
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

//#region ロント・コネクト(loby)
let lobD = document.getElementById('loby');
let lobC = {
    main:lobD.querySelector('.main'),
}
let lobF = {};
lobF.load = () => {
    for(let fac of Facilities){
        if(fac.no) continue;

        let div = document.createElement('div');
        div.className = `icon ${fac.name}`;
        div.dataset.description = fac.desc;
        div.addEventListener('click', () => fac.func());

        let img = images.systems[fac.name].cloneNode();
        div.appendChild(img);

        let text = document.createElement('div');
        text.className = 'text';
        text.textContent = fac.name;
        div.appendChild(text);

        lobC.main.appendChild(div);
    }
}
//#endregion

//#region dungeon
let dunD = document.getElementById('dungeon');
let dunC = {
    can: dunD.querySelector('.field'),
    ctx: dunD.querySelector('.field').getContext('2d'),
    row:8, //1列にある数
    mas:null, //1マスの大きさ(asp:1/1)
    // mases:[],
    backM:[],
    objs:[],
    loop:0,
    stage: "草原",
    floor:0
}
let dunF = {};
dunF.load = () => {
    dunF.resize();
}

dunF.resize = () => { 
    let wid = window.innerWidth * 0.8;
    dunC.can.width = wid;
    dunC.can.height = wid;
    dunC.mas = wid / dunC.row;
}
document.addEventListener('resize', dunF.resize);

dunF.select = async() => {
    let div0 = document.createElement('div');
    div0.className = 'dun_select stage';
    document.body.appendChild(div0);
    
    let stage0 = await new Promise(solve => {
        function clicked(e){
            let div = e.target;
            let name = div.classList[1];
            div0.remove();
            solve(name);
        }

        for(let ma of Stages.filter(a => !a.no)){
            let div = document.createElement('div');
            div.className = `item ${ma.name}`;
            div.textContent = ma.name;

            let img = document.createElement('img');
            img.src = `assets/images/systems/${ma.name}.png`;
            div.appendChild(img);
            
            div.addEventListener('click', clicked);
            div0.appendChild(div);
        }
    })
    
    if(!stage0) return console.log(`stageが "${stage0}" でした。なにこれ`);
    dunC.stage = stage0;
    
    let chara = await new Promise(solve => {
        let div0 = document.createElement('div');
        div0.className = 'dun_select chara';
        document.body.appendChild(div0);
        
        function clicked(ev){
            let div = ev.target;
            let name = div.classList[1];
            console.log(name);
            if(!name) console.log(div)
            div0.remove();
            solve(name);
        }
        
        let chas = Charas.filter(a => !a.no);
        for(let data of chas){
            let div = document.createElement('div');
            div.className = `item ${data.name}`;
            
            let span = document.createElement('span');
            span.textContent = data.jpnm;
            div.appendChild(span);

            let img = document.createElement('img');
            img.src = `assets/images/charas/${data.img}.png`;
            div.appendChild(img);
            
            div.addEventListener('click', clicked);
            div0.appendChild(div);
        }
    })
    if(!chara) return console.log(`charaが "${chara}" でした。なんですか？これ`);
    let p = makePlayer(0, chara);
    humans.push(p);

    batC.now = 1;

    areF.move('dungeon');

    //はじまりはじまり～
    let cd = Charas.find(a => a.name == chara);
    addob("player", 0, 0, 1, 1, 20, 90, ["move"], {img:cd.img});
    dunC.loop = 1;

    await nextStage(dunC.stage);
    dunF.gameloop();
}

dunF.update = async() => {
    let p = dunF.get();
    if(p.moving) return;
    
    let moved = 0;
    let mv = 1;
    if((OBS.keys.w || OBS.keys.arrowup)){
        if(p.dir == 0) await dunF.move(p, 'add', 0, -mv);
        else p.dir = 0;
    }
    if((OBS.keys.s || OBS.keys.arrowdown)){
        if(p.dir == 180) await dunF.move(p, 'add', 0, mv);
        else p.dir = 180;
    };
    if((OBS.keys.a || OBS.keys.arrowleft)){
        if(p.dir == 270) await dunF.move(p, 'add', -mv, 0);
        else p.dir = 270;
    };
    if((OBS.keys.d || OBS.keys.arrowright)){
        if(p.dir == 90) await dunF.move(p, 'add', mv, 0);
        else p.dir = 90;
    };

    if((OBS.keys.z || OBS.keys.enter) && logC.ing == 0){
        // 今乗ってる（on == true かつ 座標が同じ） => obon認定
        let obon = dunC.objs.filter(a => a.x == p.x && a.y == p.y && a.on);
        if(obon.length > 1) return console.log(obon,'←onのやつらが重なってるみたいっす！');
        if(obon.length == 1){
            obon = obon[0];
            let data = Objects.find(a => a.name == obon.id)
            if(!data) return console.error(obon,'←これのidの処理、書いてないっすよ〜？(ニヤっ)');

            let res = await data.func();
            dunF.draw();

            if(res) return 1;
        }

        // 目の前にあるやつ（on == false かつ 向いてる方向）
        let karix = 0, kariy = 0;
        switch (p.dir){
            case 0: kariy -= 1; break;
            case 90: karix += 1; break;
            case 180: kariy += 1; break;
            case 270: karix -= 1; break;
        }
        
        //onしてない => nobon認定
        let nobon = dunC.objs.filter(a => a.x == p.x + karix && a.y == p.y + kariy && !a.on)
        if(nobon.length > 1) return console.log(nobon,'←not onのやつらが重なってるみたいっす！');
        if(nobon.length == 1){
            nobon = nobon[0];
            let data = Objects.find(a => a.name == nobon.id);
            if(!data) return console.error(nobon,'←これのidの処理、書いてないっすよ〜？(ニヤっ)');
            // console.log(data)

            let res = await data.func();
            dunF.draw();

            if(res) return 1;
        }
    }

    if(p.x < 0 || dunC.row < p.x || p.y < 0 || dunC.row < p.y) error();
    
};

dunF.draw = async() => {
    dunC.ctx.clearRect(0, 0, dunC.can.width, dunC.can.height); // 画面をクリア

    //background、そのまま背景
    for(let y=0; y<dunC.row; y++){
        for(let x=0; x<dunC.row; x++){
            let img = images['maps'][dunC.stage][dunC.backM[y][x]];
            // console.log  (img)
            dunC.ctx.drawImage(img, x*dunC.mas, y * dunC.mas, dunC.mas, dunC.mas);
        }
    }

    /*
        for(let y = 0; y < dunC.objM.length; y++){
        for(let x = 0; x < dunC.objM[y].length; x++){
        let obs = dunC.objM[y][x];
        if(obs.id == 0) continue;

        let belong = dunC.stage;
        let src = obs.id;
        if(obs.id == 'enemy') belong = 'enemies', src = obs.data.name;
        if('used' in obs.data) src += obs.data.used ? '_off' : '_on';

        let img = images[belong][src];
        if(!img) console.log(`assets/${belong}/${src}.png not found.`), img = images['systems']['error'];

        if(img) dunC.ctx.drawImage(img, x * dunC.mas, y * dunC.mas, dunC.mas, dunC.mas);
      }
     }
    */

    //object、仕掛けとか
    for(let obs of dunC.objs){
        if(obs.id == 0) continue;
        // console.log(`id:: ${obs.id}, stage:: ${obs.stage}`)
        
        let sta = obs.stage;
        let src = obs.id;
        let bel = "maps";
        
        if(obs.id == 'player') bel = 'charas', src = obs.data.img;
        if(obs.id == 'enemy') bel = 'enemies', src = obs.data.name;
        if('type' in obs.data) src += `_${obs.data.type}`;
        if('used' in obs.data) src += obs.data.used ? '_off' : '_on';

        // console.log(`assets/${bel}/${src}.png`);
        let img;
        if(bel == 'maps' || bel == 'enemies') img = images[bel][sta][src].cloneNode();
        else img = images[bel][src].cloneNode();
         if(!img) console.log(`assets/${bel}/(${sta}/)${src}.png is not found.`), img = images['systems']['error'];

        
        if(img) dunC.ctx.drawImage(img, obs.ox, obs.oy, obs.w, obs.h);


        if(obs.id == 'player'){
            let circle = images['systems']['circle'].cloneNode();
            
            let cirX = obs.ox + obs.w/2;
            let cirY = obs.oy + obs.h/2;
            let cirS = Math.min(obs.w, obs.h) * 0.75;
            let rot = obs.dir * Math.PI / 180;
            
            
            dunC.ctx.save();
            dunC.ctx.translate(cirX, cirY);
            dunC.ctx.rotate(rot);
            dunC.ctx.globalAlpha = 0.3;
            dunC.ctx.drawImage(circle, -cirS, -cirS, cirS * 2, cirS * 2);
            dunC.ctx.globalAlpha = 1;
            dunC.ctx.restore();
        }

        // await delay(2)
    }
    
}

dunF.get = (me = '指定なし') => {
    if(me == '指定なし') me = 0; //特別扱い, player
    
    let who = dunC.objs[me];

    return who;
}
dunF.able = (who, type) => {
    return who.ables.some(a => a == type);
}
dunF.prop = (who, type) => {
    return who.prop && who.prop.some(a => a == type);
}

dunF.move = async(who, code, mx, my, force = 0) => {
    // let who = dunF.get(cam, me);

    // console.log(`想定: x|${who.x.toString().padStart(2, '0')}, y|${who.y.toString().padStart(2, '0')} => x|${(who.x + mx).toString().padStart(2, '0')}, y|${(who.y + my).toString().padStart(2, '0')}`)


    if(who.x + mx < 0 || dunC.row < who.x + mx) mx = 0;
    if(who.y + my < 0 || dunC.row < who.y + my) my = 0;
    
    if(mx == 0 && my == 0) return console.log(`${who.id}「移動量が0ですわ〜〜！！」`);

    if(!dunF.able(who, 'move') && !force) return //console.log(`${who.name}「動けないっっ...!!」`);

    let addx, addy;
    let ssx = who.sx, ssy = who.sy; //save sxの略
    if(code == 'add'){
        who.sx += mx*dunC.mas;
        who.sy += my*dunC.mas;
        addx = mx*dunC.mas/who.spd;
        addy = my*dunC.mas/who.spd;
    }
    if(code == 'set'){
        who.sx = mx*dunC.mas;
        who.sy = my*dunC.mas;
        addx = Math.abs(who.x - mx) / who.spd;
        addy = Math.abs(who.y - my) / who.spd;
    }
    if(code == 'drive'){
        let rad = (who.dir - 90) * Math.PI / 180;
        
        my = 0; //これ無視した方がいいかも。使い所isない
        let noise = random(-my, my);

        let dx = mx * dunC.mas * Math.cos(rad) - noise * Math.sin(rad);
        let dy = mx * dunC.mas * Math.sin(rad) + noise * Math.cos(rad);

        who.sx += dx;
        who.sy += dy;

        addx = dx / who.spd;
        addy = dy / who.spd;
    }

    let list = Object.values(dunC.objs).flat();
    // console.log(`(${looped})${who.name}「${dunF.able(who, 'pass')}, ${list.some(t => dunF.over(who, t))}, ${list.some(t => dunF.able(t, 'bepass'))}」`);
    if(list.some(t => dunF.over(who, t))){
        list.forEach(t => {
            if(dunF.over(who, t) && !dunF.able(t, 'bepass')){
                // console.log(`(${looped})${who.name}[${who.x},${who.y}]「${t.name}[${t.x},${t.y}]とぶつかる〜〜〜〜！！」`)
                // console.log(`(${looped})自分: ${who.name} x:${who.x} y:${who.y} sx:${who.sx} sy:${who.sy} w:${who.w} h:${who.h} dir:${who.dir} spd:${who.spd}`);
                // console.log(`(${looped})相手: ${t.name}) x:${t.x} y:${t.y} sx:${t.sx} sy:${t.sy} w:${t.w} h:${t.h} dir:${t.dir} spd:${t.spd}`);
            };
        })
    }
    if(!dunF.able(who, 'pass') && list.some(t => dunF.over(who, t) && !dunF.able(t, 'bepass'))) return who.sx = ssx, who.sy = ssy, dunF.draw()//, console.log(`(${looped})${who.name}「この先に何かあるっぽい？」`);

    // console.log(`(${looped})想定: x|${who.x.toString().padStart(2, '0')}, y|${who.y.toString().padStart(2, '0')} => x|${(who.x + mx).toString().padStart(2, '0')}, y|${(who.y + my).toString().padStart(2, '0')} || 実行: x|${addx.toString().padStart(5, ' ')}, y|${addy.toString().padStart(5, ' ')} 計${who.spd}回反復`)

    who.moving = 1;
    for(let i = 0; i < who.spd; i++){
        who.ox += addx;
        who.oy += addy;
        await delay(10);
        dunF.draw();
    }

    who.x = Math.round(who.ox / dunC.mas);
    who.y = Math.round(who.oy / dunC.mas);
    who.ox = who.sx
    who.oy = who.sy;

    dunF.draw();

    who.moving = 0;
}
dunF.over = (a, b) => {
    if(a.cam == b.cam && a.me == b.me) return false;

    let sx1 = a.sx, sy1 = a.sy, ex1 = a.sx + a.w, ey1 = a.sy + a.h;
    let sx2 = b.sx, sy2 = b.sy, ex2 = b.sx + b.w, ey2 = b.sy + b.h;

    let EPSILON = 0.01; //許容値？
    let overlapX = (sx1 < ex2 - EPSILON) && (ex1 > sx2 + EPSILON);
    let overlapY = (sy1 < ey2 - EPSILON) && (ey1 > sy2 + EPSILON);

    return overlapX && overlapY;
}

dunF.gameloop = async() => {
    dunF.update();
    dunF.draw();
    if(dunC.loop) requestAnimationFrame(dunF.gameloop);
}
document.addEventListener('keydown', (e) => {
    if(areC.now != 'dungeon') return;
    if(e.key == 'p'){
        dunC.loop = fl(dunC.loop);
        if(dunC.loop) dunF.gameloop();
    }
})

function nextFloor(){
    dunC.floor += 1;

    mapMake();
    dunF.draw()
}

function mapMake(code){
    //stage
    for(let i = 0; i < dunC.row; i++){
        dunC.backM[i] = [];

        for(let j = 0; j < dunC.row; j++){
            let basescore = 10, bonus = 40; //2種の場合
            let scores = {};

            // 各タイルの初期スコアをセット
            let dataS = Stages.find(a => a.name == dunC.stage);
            dataS.tiles.forEach(type => scores[type] = basescore);

            // 左と上のマスに同じタイルがあったらスコア加算
            if(j > 0) scores[dunC.backM[i][j-1]] += bonus;
            if(i > 0) scores[dunC.backM[i-1][j]] += bonus;

            function weightedRandom(weightMap){
                // 重み付きランダム選択
                let total = Object.values(weightMap).reduce((a, b) => a + b, 0);
                let r = Math.random() * total;
                for (let key in weightMap){
                    r -= weightMap[key];
                    if(r < 0) return key;
                }
            }

            let chosen = weightedRandom(scores);
            dunC.backM[i][j] = chosen;
            //dunC.ctx.drawImage(images.maps[chosen], j * dunC.mas, i * dunC.mas, dunC.mas, dunC.mas);
        }
    }

    // dunC.objs = [];
    dunC.objs.length = 1; //playerだけのこす

    let mas = dunC.mas;
    let max = random(5, 10)
    // let max = random(dunC.row*2, dunC.row**2-dunC.row); //この数字だけどうにかしよう。
    // let obsList = JSON.parse(JSON.stringify(obsAll[stage])); //copy
    let obsList = copy(Objects.filter(a => (a.in == dunC.stage || a.in == 'すべて') && !a.no));
    // console.log(obsList);
    for(let i=0; i<max; i++){
        let data = {};
        
        let obs = arrayGacha(obsList, obsList.map(a => a.p));
        if(!obs) console.log(obsList, obs);
        let obsInd = obsList.indexOf(obs);

        // console.log(obs);
        // console.log(obs.name, obs.n)
        let sude = dunC.objs.filter(a => a.name == obs.name);
        //  console.log(sude.length, obs.n)
        if(obs.n != 0 && sude.length+1 >= obs.n) obsList.splice(obsInd, 1); // 重複できない子なら消し去る

        if(obs.name == 'enemy'){
            let arr = Enemies.filter(a => !a.no && (a.ins.includes(dunC.stage) || a.ins == 'すべて'));
            // let data0 = arrayGacha(arr, arr.map(a => a.p))
            let data0 = arraySelect(arr);
            //  console.log(data0)
             if(!data0) console.error(arr, data0);
            data.name = data0.name;
        }

        let obx = 0, oby = 0;
        let ok = () => {return dunC.objs.filter(a => a.x == obx && a.y == oby && a.name != 0)};
        let ran = () => {obx = random(0, dunC.row-1), oby = random(0, dunC.row-1)};

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

    // MAPx = dunC.objMnum[dunC.stage-1].split('.');
    // MAPy = +MAPx[1]+1
    // MAPx = +MAPx[0]
    // dunC.objM = dunC.objMs[Math.floor(Math.random() *    MAPy)+MAPx];
    // dunC.objM = JSON.parse(JSON.stringify(dunC.objMs[Math.floor(Math.random() * MAPy) + MAPx]));

    // if(dunC.stage == 1){
    //     if(fun == 23 && hit(10)){
    //         dunC.backM = dunC.backMs[4];
    //         dunC.objM = dunC.objMs[6];
    //     }else if(fun <= 50 && hit(10)){
    //         dunC.backM = dunC.backMs[5];
    //         dunC.objM = dunC.objMs[7];
    //     };
    // }else if(dunC.stage == 2){
    //     if(fun == 68 && hit(10)){
    //         dunC.backM = dunC.backMs[11];
    //         dunC.objM = dunC.objMs[14];
    //         dunC.objM = JSON.parse(JSON.stringify(dunC.objMs[Math.floor(Math.random() * MAPy) + MAPx]));
    //     }else if(fun <= 50 && hit(10)){
    //         dunC.backM = dunC.backMs[19];
    //         dunC.objM = dunC.objMs[23];
    //         dunC.objM = JSON.parse(JSON.stringify(dunC.objMs[Math.floor(Math.random() * MAPy) + MAPx]));
    //     };
    // }else if(dunC.stage == 3){
    //     if(fun == 68 && hit(10)){
    //         dunC.backM = dunC.backMs[18];
    //         dunC.objM = dunC.objMs[22];
    //         dunC.objM = JSON.parse(JSON.stringify(dunC.objMs[Math.floor(Math.random() * MAPy) + MAPx]));
    //     }else if(fun <= 50 && hit(10)){
    //         dunC.backM = dunC.backMs[19];
    //         dunC.objM = dunC.objMs[23];
    //         dunC.objM = JSON.parse(JSON.stringify(dunC.objMs[Math.floor(Math.random() * MAPy) + MAPx]));
    //     };
    // }
    // if(dunC.stage == 1 && dunC.floor >= 10){SELECTx = 150;SELECTy = 525;dunC.backM = dunC.backMs[6];dunC.objM = dunC.objMs[8]}; //創生黎明の原野
    // if(dunC.stage == 2 && dunC.floor >= 7 ){SELECTx = 150;SELECTy = 525;dunC.backM = dunC.backMs[13];dunC.objM = dunC.objMs[16]}; //ガチェンレイゲスドゥールラート(昼)
    // if(dunC.stage == 3 && dunC.floor >= 3 ){SELECTx = 150;SELECTy = 525;dunC.backM = dunC.backMs[20];dunC.objM = dunC.objMs[24]}; //ガチェンレイゲスドゥールラート(夜)
}

function addob(id, mx, my, w, h, spd, dir, ables, data){
    //idは0なら何もしない
    if(id == 0) return;

    

    let ob = {
        id: id,
        //cam: cam,
        me: dunC.objs.length,
        stage: dunC.stage,
        x: mx,
        y: my,
        sx: mx*dunC.mas,
        sy: my*dunC.mas,
        ox: mx*dunC.mas,
        oy: my*dunC.mas,
        w: dunC.mas,
        h: dunC.mas,
        moving: 0,
        spd: spd || 5,
        dir: dir || 90,
        ables: ables || [],
        data: data || {},
    }

    dunC.objs.push(ob);
}

function nextStage(kakutey = null){
    let mts = dunC.stage; //moto stage

    let arr = Stages.filter(a => !a.no).map(a => a.name);
    while(mts == dunC.stage || !kakutey){
        // ランダムにステージを決定
        dunC.stage = arraySelect(arr);
        if(arr.length == 1) break;
    }
    if(kakutey) dunC.stage = kakutey;
    console.log(`れっつら ${dunC.stage}`);

    dunC.floor = 0;
    nextFloor();
}
//#endregion

//#region inventory
let invD = document.getElementById('inventory');
let invC = {}
let invF = {}
document.addEventListener('keydown', (event) => {
    if(dunD.style.display != 'block') return;
    
    let key = event.key.toLowerCase();

    if(key == 'e'){
        let p = dunF.get();
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
let batD = document.getElementById('battle');
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
    let p = dunF.get();
    p.moving = 1;
    
    batD.classList.add('appe')
};
batF.clos = () => {
    let p = dunF.get();
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
        console.log('↓findなのにarrayになってるふぉーぜ')
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
        let srca = null;
        if(cam == 'enemies'){
            hd = Enemies.find(a => a.name == human.name);
            srca = `enemies/${dunC.stage}/${hd.img ?? hd.name}.png`;
        }
        if(cam == 'players'){
            hd = Charas.find(a => a.name == human.name);
            if(hd) srca = `charas/${hd.img}.png`;
            if(!hd){
                hd = Friends.find(a => a.name == human.name);
                srca = `friends/${hd.img}.png`;
            }
        }



        // console.log(`${cam}${human.me}`)
        // console.log(human)
        // console.log(hd)

        div.querySelector('.name').textContent = human.name;
        div.querySelector('.lv').textContent = `Lv.${human.lv}`;
        div.querySelector('.img').src = `assets/images/${srca}`;
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

//#region 今日は何ーーーー
function whatdo(who, are, shu, name){
    console.log(`${who.name}が${are.name}に${shu}[${name}]をします`)
    let [cam, me] = [who.cam, who.me];
    
    let ares= copy(are);
    if(typeof ares == "object") ares = [ares];
    let ts = [];
    for(let ar of ares){
        let [tcam, tme] = [ar.cam, ar.me];
        ts.push([tcam, tme]);
    }
    
    let res = {
        cam,me,
        ts,
        shu,
        name
    }
    return res;
}
//#endregion どちらかと言うと youは何しに日本へ

//#region どむさんのようそづくり～
function makeHuman(cam, me){
    let sd = Stages.find(a => a.name == dunC.stage);

    let name = El('div', 'name');
    name.style.color = irohaMix('#cecece', sd.color);

    let img = El('img', 'img');
    img.src = 'assets/images/systems/error.png';

    let back = El('img', 'back');
    back.src = 'assets/images/systems/error.png';
    
    let skill = El('div', 'skill', [back, El('div', 'liquid')])
    skill.style.borderColor = irohaMix('#2b2b2b', sd.color);

    const baa = (type) => El('div', `${type} status`, [
        El('div', 'text'),
        El('div', 'bar', [El('div', 'inner')])
    ]);

    return El('div', `human ${cam}${me}`, [
        name,
        img,
        skill,
        El('div', 'lv'),
        El('div', 'bars', [
            baa('hp'),
            baa('mp')
        ]),
    ]);
}
//#endregion
//#region せーぞーマシーン（統合版）
function makeUnit(type, code, name){
    let data, unit = {};

    // ── データ取得 ──
    if(type == 'player'){
        data = (!code ? Charas : Friends).find(a => a.name == name);
        if(!data) return console.log(`codeが[${code}]の${name}はいないらしい`);
    }else{
        data = arraySelect(Enemies.filter(a => !a.no));
    }

    console.log(data);

    // ── ステータス計算 ──
    if(type == 'player'){
        // プレイヤー: データそのままコピー
        Status.map(a => a.name).forEach(s => unit[s] = data[s]);
    }else{
        // 敵: ベース値 → 補正値で加工
        Status.map(a => a.name).forEach(s => {
            let vd = Status.find(a => a.name == s);
            unit[s] = vd.bas; //vis0.top/ftp

            let v = data[s];
            if(!v || typeof v != 'string') v = "+0"
            if(v.startsWith('+') || v.startsWith('-')){
                let num = +v.slice(1);
                if(v.startsWith('-')) num *= -1;
                unit[s] += num;
            }
            if(v.startsWith('=')){
                unit[s] = +v.slice(1);
            }
        });
    }

    // ── 共通の初期化 ──
    unit.hp = unit.maxhp;
    unit.mp = unit.maxmp;
    unit.ep = 0;
    unit.jotie = 1;
    unit.buffs = [];
    unit.cam = (type == 'player') ? 'players' : 'enemies';
    unit.me = humans.filter(a => a.cam == unit.cam).length;

    // ── タイプ別の初期化 ──
    if(type == 'player'){
        unit.name   = name;
        unit.lv     = 1;
        unit.exp    = 0;
        unit.sp     = 0;
        unit.attr   = [];
        unit.equips = {}
        
        unit.slash = unit.slash ?? ['slash', 'double slash', 'slash of light'];
        unit.magic = unit.magic ?? ['heal', 'power', 'shell'];
        unit.tool  = unit.tool  ?? ['aspirin', 'throw knife', 'redcard'];

        if(!code){
            unit.ex = data.ex;  unit.ns = data.ns;
            unit.ps = data.ps;  unit.ts = data.ts;

            Style.button.solid = data.buttonsolid;
            Style.button.back = data.buttonback;
            Style.button.aima = irohaMix(data.buttonsolid, data.buttonback);
            Style.tekiou();
        }else{
            unit.e = data.e;  unit.s = data.s;
            unit.n = data.p;  unit.p = data.p;  unit.t = data.t;
        }
    }else{
        unit.name   = data.name;
        unit.lv     = random(1, 3);
        unit.attr   = data.attr ?? [];
        unit.lasts  = [];
        unit.equips = {};
    }

    let container = (type == 'player') ? batC.pD : batC.eD;
    container.appendChild(makeHuman(unit.cam, unit.me));

    return unit;
}

const makePlayer = (code, name) => makeUnit('player', code, name);
const makeEnemy  = () => makeUnit('enemy');
//#endregion

//#region そーびひん
function eq_find(type, name){
    let eqs = Equips[type];
    let eq = eqs.find(a => a.name == name);
    if(!eq) return console.error(`あ、あの...${type}に${name}なんていう名前の装備はないです......`);
    
    return eq;
}
function eq_get(who, type){
    let eq = who.equips[type];
    if(!eq) eq = eq_find(type, 'none');

    return eq;
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
    await logText(`${iran[ran]}${enemiesen}人飛び出して${iran2[ran]}`);

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
                    logText_log('当たりが出たらもう一本！');
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
        let nanka = skillQueue.shift(); // 先頭を消してその消したやつを処理する的な機構".shift()"
        let cam = nanka.cam;
        let me = nanka.me;
        let dare = cm(cam,me);
        let skill = nanka.skill;
        let data = Skills.find(a => a.name == skill);
        console.log(`${dare.name}のスキル:"${skill}"を発動!`);
        await logText(`${dare.name}は"${data.name}"を発動した！！`);
        let result = await skillAct(dare, skill);
        if(result) return 1;
    }
    */

    //ーーーーーーーこっから次のターン行く動き　ここでこの人のターンは終わるって感じだねーーーーーーー

    acted += 1;
    if(acted >= bar.me.length){
        turn += 1;
        let combined = humans.filter(a => a.jotie && a.hp > 0)// オブジェクトをリストに変換して合体
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
                logText_log('なんとかスライムを取り払った!!');
            }else{
                logText_log('スライムが邪魔して動けない!!');
                nextTurn(are);
                return;
            }; 
        }
        if(buffhas(are,'skip')){
            await logText(`>> はい${are.name}、お前スキップ〜〜`);
            nextTurn(are); return;
        }
        if(hask(buff.value, 'palsy')){
            let val = buff.value.palsy;
            console.log(`>> palsy:: ${val}%`);
            
            if(!isCrit(val)) continue;

            data.name != 'stan'
            ? logText_log(`${are.cam}${are.me}は麻痺している..`)
            : logText_log(`${are.cam}${are.me}はスタンしている....`);
            nextTurn(are);
            return 1;
        }
        if(hask(buff.value, 'freeze')){
            let val = buff.value.freeze;
            if(!isCrit(val)){
                logText_log(`${are.name}は凍っている...`);
                nextTurn(are);
                return;
            }
            
            await logText(`氷が溶けた！`);
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
        let datans = nss.find(a => a.name == who.ns);
        if(who.ns.func != undefined && (turncount % datans.cool) == 0){
            await data.func(who);
            await delay(1000)
        };

        tekiou();
    
        logText('あなたのターンです！');
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
    let who = cm();
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
            Attack(who, 0)
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
    let who = cm();
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
            Attack(who, 1);
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
    let who = cm();
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
            Attack(who, 2);
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
    let who = cm();
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
    
    dunF.draw()
    
    dunF.get().moving = 0;
    await logText('うまく逃げ切れた！');
}

function selectSyudou(code = 1){
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

            // ↓ 天才です   天 天 天才
            while(!div.classList.contains('human')) div = div.parentElement;
            let lis = div.classList;

            let tcam = lis[1].substring(0, 7); //前半7文字(player / enemies)
            let tme = +lis[1].substring(7); //数字。数字です。

            arrs.forEach(a => {
                // console.log(a)
                let div0 = batC[`${a.substring(0, 1)}D`];
                let div = div0.querySelector(`.${a}`);
                
                div.removeEventListener('click', handleClick);
                div.classList.remove('sl')
            });

            target = [
                tme,
                tcam
            ]

            // console.log(target);

            if(code == 2){ //拡散-3
                let zin = humans.filter(a => a.cam == tcam && a.jotie);
                let pnum = (zin[tme-1]?.jotie??0) ? tme - 1 : null;
                let nnum = (zin[tme+1]?.jotie??0) ? tme + 1 : null;
                
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
                let zin = humans.filter(a => a.cam == tcam && a.jotie);
                let p2num = (zin[tme-2]?.jotie??0 == 1) ? tme - 2 : null;
                let pnum = (zin[tme-1]?.jotie??0 == 1) ? tme - 1 : null;
                let nnum = (zin[tme+1]?.jotie??0 == 1) ? tme + 1 : null;
                let n2num = (zin[tme+2]?.jotie??0 == 1) ? tme + 2 : null;
                
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
                let nums = cm(tcam).filter(a => a.cam == tcam && a.jotie);
                let cams = Array(nums.length).fill(tcam); //fillは全ての値を同じ値にするやつ。同数にするために使用されがち
                target = [
                    nums,
                    cams
                ];
            }
            if(code == 5){ //全員
                let tnums = cm(tcam).filter(a => a.jotie);
                let gyaku = fl(tcam, ['players','enemies']);
                let nums = cm(gyaku).filter(a => a.jotie);

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
async function Attack(who, num){
    disappear();
    let name = who.slash[num]
    if(!name){
        await logText('you dont have slash...');
        return playerturn()
    }

    let data = Attacks.find(a => a.name == name)
    if(!data) return console.error(`せんぱ～い？なんか${name}とか言う変なものが紛れ込んでますよ～？`)
    if(who.mp >= data.mp){
        let are = await selectSyudou();

        who.mp -= data.mp;
        tekiou();

        await logText(`${who.name}の${name}！`);

        whatdo(who, are, "Tools", name)
        let res = await data.func(who, are);
        if(res) return 1;
        nextTurn(who);
    }else{
        await logText('not enough mp...');
        playerturn();
    }
}
//#endregion
//#region ピのまほー
async function Magic(who, num){    
    disappear();
    let name = who.magic[num]
    if(!name){
        await logText('you dont have magic...');
        return playerturn()
    }

    let data = Magics.find(a => a.name == name)
    
    console.log(name, data);
    if(who.mp >= data.mp){
        let are = await selectSyudou();

        who.mp -= data.mp;
        tekiou();

        await logText(`${who.name}の${name}！`);
        
        whatdo(who, are, "Tools", name);
        let res = await data.func(who, are);
        if(res) return 1;
        nextTurn(who);
    }else{
        await logText('not enough mp...');
        playerturn();
    }
}

//#endregion
//#region ピのどーぐ
async function Tool(who, num){
    disappear();
    let name = who.tool[num]
    if(!name){
        await logText('you dont have sono tool...');
        return playerturn()
    }

    //今はいいけど、inventory()に全部詰め込むことになるならdata.jsのnumじゃなくて簡単関数でinventory内の数を求めて、で〜って形にした方がいいかも
    let data = Tools.find(a => a.name == name)
    console.log(name, data)
    if(data.num > 0){
        data.num -= 1;

        let are = await selectSyudou();
        await logText(`${who.name}は${name}を使用した!`);
        
        whatdo(who, are, "Tools", name)
        let res = await data.func(who, are);
        if(res) return 1;
        
        nextTurn(who);
    }else{
        await logText('not enough tool...');
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
    let dataex = Skills.filter(a => a.type == 'ex').find(a => a.name == skill);
    let result = await dataex.func(cam, me);
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
    cm(cam).t.jotie = 1;
    cm(cam).t.kazu += 1;
    cm(cam).t.maxhp += 15;
    cm(cam).t.hp += 15;
    cm(cam).t.name = `Turret x${cm(cam).t.kazu}`;
    tekiou()
    document.querySelector(`#${cam}t`).style.display = 'block'
    document.querySelector(`#${cam}t`).style.backgroundColor = '#f7f7f7'
}
function turretBreak(cam){
    cm(cam).t.jotie = 0;
    cm(cam).t.kazu -= 1;
    if(cm(cam).t.kazu <= 0){
        cm(cam).t.kazu = 0;
        cm(cam).t.maxhp = 0;
        cm(cam).t.hp = 0;
        document.querySelector(`#${cam}t`).remove();
    }
}
function turretAllClear(){
    if(document.getElementById('playerst')){
        document.getElementById('playerst').remove();
        humans.players.t.kazu = 0;
        humans.players.t.jotie = 0;
    };
    if(document.getElementById('enemiest')){
        document.getElementById('enemiest').remove();
        humans.enemies.t.kazu = 0;
        humans.enemies.t.jotie = 0
    }
}

*/

//#endregion

//#region Q-T-E
async function qte(who){
    let are = await selectSyudou();
    let res = await damage(who, are, 100, 'qte');
    if(res) return 1;
}
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
        let res = await act.func(who); //いやこいつの場合areどうすんの???
        if(res) return 1;
    }else{
        await logText(`${who.name}は何かで攻撃した！`)
        are = selectJodou(who);
        let res = await damage(who, are, 100, 'ph'); //areの後、1の前に"何の倍率か"を入れるべき。基本atkかもだけどfixで固定、とかできそう
        if(res) return 1;
    }

    nextTurn(who, are);
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
                props.filter(b => b.startsWith('ab') && b.endsWith(last)).forEach(b => {
                    console.log(`ノア「re${last}が記録されていますので、ab${last}である${a.name}を実行しますね♪」`)
                    acts.push(a);
                    pros.push(a.p);
                });
            })
        })
        who.lasts = [];
    }else{
        data.acts.forEach(a => {
            acts.push(a);
            pros.push(a.p);
        })
    }
    // console.log(acts);
    // console.log(pros);

    //reをするとlastを記録
    let act = arrayGacha(acts, pros);
    // console.log(act);
    console.log(`act: 「${act.name}」(${act.p}%)`);
    let props = act.prop ?? [];
    props.forEach(p => {
        if(p.startsWith('re')){ // reInvisi
            console.log(`ノア「${item}を記録しました」`);
            let item = p.slice(2);
            who.lasts.push(item);
        }
    })

    return act;
}
//受動的な選択
function selectJodou(who, tar = "are", stat = "hp", hl = "low", spread = 1){
    let cam = who.cam;
    if(tar == "who") tar = cam;
    if(tar == "are") tar = fl(cam, ['players', 'enemies']);

    console.log(`[selectJodou] ${cam}${who.me} => ${tar}の${stat}順で${hl}なやつ！ (spread: ${spread})`)
    if(spread != 0 && spread % 2 == 0) return console.error('エラー発生 エラー発生 rangeに偶数を発見しました rangeに偶数を発見しました');

    /*
    who: それを実行した者
    tar: 標的軍団。基本whoかareで、whoなら自軍、areなら相手軍。players/enemiesも可。allで全体も可。
    stat: どのステータスで選ぶか。hpとかatkとか。
    hl: [high/low/cen/random]のどれかで、statの高い方を選ぶか低い方を選ぶか自分の正面を選ぶかランダムで選ぶか。
    spread: 1ならその一体だけ、3なら両隣も(いるなら)対象にする。5なら両隣2体も(いるなら)対象にする。2,4は存在しないぜ。0は何？全体？

    spreadを0にするならば、stat,hlは0にして省略してもおk
    つまり「敵全体」を表すならば selectJodou(who, 'are', 0, 0, 0); 無駄になげぇ まあいいけれども
    一応0の場合の処理もおいてはおきますけどね 私は優しいので
    */

    let list0 = null;
    if(tar != 'all') list0 = cm(tar);
    else list0 = [...cm('players'), ...cm('enemies')];
    let list = list0.filter(c => c.jotie); //not ソート
     if(list.length == 0) return console.error(`errored! ${tar} is inai desu war!!`);

    if(spread == 0) return list; //0は全体、そう決めたのです

    let listed;
    if(stat != 0) listed = copy(list).sort((a, b) => a[stat] - b[stat]); //ソートされたってことでed sortは元の子を破壊するらしい
    else listed = copy(list);
    // console.log(list);
    

    let zero;
    if(hl == 'low') zero = listed[0];
    if(hl == 'high') zero = listed[listed.length - 1];
    if(hl == 'random' || hl == 0) zero = arraySelect(listed);
    if(hl == 'cen'){
        let whol = cm(who.cam).filter(c => c.jotie);
        let whoi = whol.findIndex(c => c.me == who.me); //whoiが-1はまずありえん
        zero = list[whoi]; //これは正面に無いと失敗。拡散でも同じく。
    }
    if(!zero) return console.error('errored! な、なんかzeroが無かったッス！これはバグの発生ッス！');

    let tme = zero.me;
    let i = list.findIndex(c => c.me == tme);
    let range = (spread-1)/2;
     if(range < 0) range = 0;
    
    let ares = [];
    for(let i2 = i-range; i2 <= i+range; i2++){
        let are = list[i2];
        if(are) ares.push(are);
    }

    return ares; // [{...},{...},{...}]
}
//#endregion

//#region だめーじとかぎゃくだめーじとか
function isCrit(crla, crrs = 0){
    if(typeof crla == 'string' && isNaN(+crla)) return console.log(`isCritのcrlが →${crla}← 。さすがにおかしい。直せや〜〜`);
    if(typeof crrs == 'string' && isNaN(+crrs)) return console.log(`isCritのcrrが →${crrs}← 。さすがにおかしい。直せや〜〜2`);

    crla = +crla;
    crrs = +crrs;

    //crla, crrはそれぞれ整数。
    if(crrs == 'ab') return console.log('確定抵抗！'), 0;
    if(crla == 'ab') return console.log('確定！'), 1;
    
    let kei = crla - crrs;
    if(kei < 0) kei = 0;

    let is = Math.floor(Math.random() * 100) < kei;
    console.log(`率は${crla}%, 抵抗率は${crrs}%... 結果は${is}！`);

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
        if(hasp("set") && val > are.maxhp) return await heal(who, are, val, props);

        let atker = {...who};
        atker.pow = 1;

        let defer = {...are};
        defer.she = 1;
        defer.cut = 0;
        
        let W = {
            atk:0,
            matk:0,
            pow:1,
            crla:0,
            crdm:0,
            aim:0
        };
        let Wk = Object.keys(W);
        let A = {
            def:0,
            mdef:0,
            she:1,
            cut:0,
            crrs:0,
            dod:0
        };
        let Ak = Object.keys(A);
        
        
        // [human, keysArray, targetObj]
        let hyous = [
            [who, Wk, atker],
            [are, Ak, defer]
        ];
        
        for (let i = 0; i < hyous.length; i++){
            let [human, keys, target] = hyous[i];
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

        let wep = eq_get(atker, 'weapon');
        let wepd = eq_find('weapon', wep.name);
        
        let shi = eq_get(defer, 'shield');
        let shied = eq_find('shield', shi.name);
        console.log(`装備品: 武器:${wep.name}, 防具:${shi.name}`);

        //計算
        let type, type2;
        if(type0 == 'ph') type = 'atk', type2 = 'def'; //筋力、筋肉
        if(type0 == 'mg') type = 'matk', type2 = 'mdef'; //なんかそういうやつ、それの2
        if(type0 == 'cn') type = 'atk', type2 = 'def'; //銃の攻撃力....?武器依存では？、防御力かな

        console.log(`[damage] ${who.cam}${who.me} => ${are.cam}${are.me}(${type0})::`);

        // (攻撃力+武器攻撃力) * 攻撃倍率
        let dmg = ((atker[type]+wepd.atk) * (atker.pow));
        console.log(`与え:: (${atker[type]} + ${wepd[type]}) * (${atker.pow}) = ${dmg}`);
        
        // (防御力+盾防御力) * 防御倍率 + ダメージカット
        let rer = ((defer[type2]+shied.def)*(defer.she)) + defer.cut;
        console.log(`守り:: (${defer[type2]} + ${shied[type2]}) * (${defer.she}) + (${defer.cut}) = ${rer}`);
        
        //crit
        let crit = isCrit((atker.crla + wepd.crla), (defer.crrs + shied.crrs));
        if(crit){
            dmg *= (atker.crdm + wepd.crdm);
            console.log(`(会心ed！) dmg x (${atker.crdm} + ${wepd.crdm})`);
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
        logText_log(`(${turn}) [${who.cam}]${who.name} => [${are.cam}]${are.name} (${dmg2}ダメージ${criten})`);
        
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

    if(typeof val == 'string' && val.endsWith('%')){
        let key = props.find(a => a.startsWith("%!"));
        if(key) key = key.substring(2);
        else key = "maxhp";

        let roka = +val.substring(0, val.length - 1);
        if(isNaN(roka)) roka = 0;
        val = who[key] * roka/100;
    }
    
    for(let are of ares){
        if(hasp("set") && (val < are.maxhp || hasa(are, 'undead'))) return await damage(who, are, val, "mg", props);
        
        if(hasa(are, 'undead')){
            
            // console.log('アンデッドなので逆回復 =>')
            console.log('undead 死んじゃいない =>')
            let res = await damage(who, are, val, "mg", props);
            if(res) return 1;
            continue;
        }
        
        if(are.attr.includes('musha')) continue; //武者は回復を受けつけない

        logText_log(`(${turn}) [${who.cam}]${who.name} ==> [${are.cam}]${are.name} (${val}回復)`);
        
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

    if(data.mode == 'fixe' && !data.lvs[val]){
        console.error(`${buff} ←これ最大レベルが${data.max}なのに、今${val}指定されてますよ〜？`);
        console.error(`私が調整しておきますから... 感謝してくださいね〜？`);
        val = data.max;
    }

    if(data.mode == 'free') val = {[data.agemono]: val};
    if(data.mode == 'fixe'){
        if(data.lvs) val = data.lvs[val-1]??null;
        else val = {}; //多分、値が要らないものなのでしょう
    }
    console.log(`[${data.mode}] ${buff} time:${time} val↓`);
    console.log(val);

    let newbuff = {};

    switch(data.kind){
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
    if(who.buffs.find(b => b.name == buff)) return 1;

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
    console.log("====Ronto Connect connecten====")
    soundVolume(50);
    Style.tekiou();
    OBS.load();

    dunF.load();
    lobF.load();

    logiF.auto();
}

