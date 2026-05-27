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
async function tousa(moto, key, d, n, wait = 0, s = 0){
    // type:: kouならi<n madeならwhileでif抜け
	let a = moto[key]; //初項
	if(a != 0 && (!a || typeof a != "number")) return console.error("..それ数字じゃないです...."), 1;
	if(d == 0) return console.error("む、むむ無限が..見えますっ...."), 1;
	
	if(!wait) wait = 10;
	if(s) n = (s-a)/d; //うわがき ほんとは等差数列の和の公式を使いたかった
    if(n < 0) d = -d;
    n = Math.ceil(Math.abs(n));
	
    for(let i=0; i<n; i++){
        await delay(wait);
        moto[key] += d;
    }
}
async function touhi(moto, key, r, n, wait = 0, s = 0){
    // type:: kouならi<n madeならwhileでif抜け
	let a = moto[key]; //初項
	if(a != 0 && (!a || typeof a != "number")) return console.error("..それ数字じゃないです...."), 1;
    if(a == 0) return console.error("初項0の等比数列、、？"), 0;
	if(r == 0) return console.error("...これは何？"), 0;
    if(r == 1) return console.error("あ、あの...これも無限が見えます..."), 1;
	
	if(!wait) wait = 10;
	if(s) n = Math.log(s/a) / Math.log(r); //うわがき ほんとは等比数列の和の公式を使いたかった
    if(n < 0) r = 1/r;
    n = Math.ceil(Math.abs(n));
	
    for(let i=0; i<n; i++){
        await delay(wait);
        moto[key] *= r;
    }
}
function dogma(matu, shiki, k = 1){ //多分、sigma
    let res = 0;

    for(let i = k; i <= matu; i++){
        res += shiki(i);
        console.log(i, shiki(i));
    }

    return res;
}
function ketasu(num){
    if(num == 0) return 1;
    num = Math.abs(num);
    let res = Math.floor(Math.log10(num))+1;
    return res;
}
function whethPoint(num){
    let str = num.toString();
    if(0 <= str.indexOf('.')) return true;
    
    return false;
}

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
    if(!res) return null;
    try{
        res = JSON.parse(res);
        return res;
    }catch(e){
        return res;
    };
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

// irohaさんです。かわいいね
function irohaGet(color){
    if(color.length != 6) return console.log('カラーコードは6桁、ですよ〜？楽しないでくださいね♪');
    color = color.replace(/^#/, '');
    let r = parseInt(color.slice(0, 2), 16);
    let g = parseInt(color.slice(2, 4), 16);
    let b = parseInt(color.slice(4, 6), 16);
    return [r, g, b];
}
function irohaHo(color){
    let [r, g, b] = irohaGet(color);

    let edR = (255 - r).toString(16).padStart(2, '0');
    let edG = (255 - g).toString(16).padStart(2, '0');
    let edB = (255 - b).toString(16).padStart(2, '0');

    let ato = `#${edR}${edG}${edB}`;

    return ato;
};
function irohaMix(c1, c2, ratio = 0.5){let [r1, g1, b1] = irohaGet(c1);
    let [r2, g2, b2] = irohaGet(c2);

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
function irohaDark(color){
    let [r, g, b] = irohaGet(color);

    // 相対輝度の近似計算
    // 0.2126 * R + 0.7152 * G + 0.0722 * B
    let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    
    return luma < 128; // 暗い色ならtrue
}

// 時間の何か
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
        minute:Math.floor(diff / (1000*60)),
        hour:Math.floor(diff / (1000*60*60)),
        day:Math.floor(diff / (1000*60*60*24)),
        month:(now.getFullYear() - past.getFullYear()) * 12 + now.getMonth() - past.getMonth(),
        year:now.getFullYear() - past.getFullYear()
    };

    if(d.minute < 60) return `${d.minute}分前`;
    if(d.hour < 24) return `${d.hour}時間前`;
    if(d.day < 30) return `${d.day}日前`;
    if(d.month < 12) return `${d.month}ヶ月前`;
    return `${d.year}年前`;
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

// カーソル系
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

// 殺すぞ
async function error(text = 'errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'){
    await logText(text);
    await delay(2000);
    // window.open('about:blank', '_self').close();
};
//#endregion
