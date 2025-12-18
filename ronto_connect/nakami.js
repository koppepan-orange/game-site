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
function arrayGacha(array,probability){
    if(array.length != probability.length) throw new Error("長さがあってないっす！先輩、ちゃんとチェックした方がいいっすよ〜？");
    const total = probability.reduce((sum, p) => sum + p, 0);
    let random = Math.random() * total;
    for (let i = 0; i < array.length; i++) {
        if(random < probability[i]) return array[i];
        random -= probability[i];
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
async function error(text = 'errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'){
    addtext(text);
    await delay(2000);
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
        movableDescription.innerText = desc;
        movableDescription.style.display = 'block';
    }
});
document.addEventListener('mouseout', (e) => {
    const descTarget = e.target.closest('[data-description]');
    if (descTarget) {
        movableDescription.innerText = '';
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
let userData;
let loginD = document.querySelector('#loginArea');
let loginC = {
    nameD: loginD.querySelector('.username'),
    passD: loginD.querySelector('.password'),
    sendD: loginD.querySelector('.send'),
    XD: loginD.querySelector('.x'),

    dolD: loginD.querySelector('.dolphin'),
     dolDT: loginD.querySelector('.dolphin .text'),
     dolDI: loginD.querySelector('.dolphin img'),
    dolP: 0,
}
let loginTD = document.querySelector('#upper .login');

let messagesRef = database.ref(`rontoConnect/rooms/${chatroom}/messages`);
let usersRef = database.ref(`users/null/rontoConnect`);

loginTD.addEventListener('click', () => loginD.classList.add('tog'));
loginC.XD.addEventListener('click', () => loginD.classList.remove('tog'));
// loginC.XD.addEventListener('click', () => error('では！'));

loginC.sendD.addEventListener('click', async function(event){
    event.preventDefault();
    username = loginC.nameD.value;
    let password = loginC.passD.value;
    let kariusersRef = database.ref(`users/${username}/rontoConnect`);

    // データベースでユーザーが存在するか確認
    kariusersRef.once('value').then(async function(snapshot){
        if(snapshot.exists()){
            userData = snapshot.val();
            if(userData.password == password){
                console.log('success')
                login();
                setLocalStorage("username", username); // ログイン成功時
            } else {
                nicoText('パスワードが間違っています');
            }
        }else{
            usersRef.update({
                password: password,
            });
            
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
    loginD.classList.remove('tog');


    // データを取得する関数)
    userData = await load();
    await delay(50)

    valorimar = userData.valorimar??0;
    bankvalorimar = userData.bankvalorimar??0;
    rank = userData.rank??1;
    rpt = userData.rpt??0;
    maxrpt = rank*100;

    uppF.tekiou();
}

function save(){
    if(!usersRef) return 1;
    updateUI();

    const newData = {
        valorimar: valorimar,
        bankvalorimar: bankvalorimar,
        rank: rank,
        rpt: rpt,
    }

    usersRef.update(newData);
    
    return 0;
}

function load(){
    return usersRef.once('value').then(snapshot => {
        return snapshot.val();
    });
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
}
let uppF = {};

uppF.update = () => {
    // 名前とかレベルのあれを
}

uppF.tekiou = () => {
    // ダンジョン中はこっち。
}
//#endregion

async function start(){
    // resizeCanvas();
    // window.addEventListener('resize', resizeCanvas);

    //autoLogin
    username = getLocalStorage("username");
    if(username){
        console.log("自動ログインしました");
        usersRef = database.ref(`users/${username}/rontoConnect`);
        nicoText('wait for now...')
        login();
    }else{
        console.log("ログインしてください");
        loginTD.classList.add('appe')
    }
}

//#region 画像と音声のロード
let images = {};
let sounds = {};
let loaC = {
    imgT: 0,
    imgD: 0,
    souT: 0,
    souD: 0
}
let loaF = {};
loaC.imgL = {
    systems:['select','phone','star1','star1_pre','star2','star2_pre','star3','star3_pre'],
    // 草原:['蒼白の粘液','翡翠の風刃','顎剛なる草獣','茎槍の狩人','の茎針','攣縮する茎針','共鳴する茎赤黄','黄昏の穿影','燦爛する緑夢','紫苑の花姫','新緑なる剣士']
}

loaC.sonL = ['error', 'doom', 'money']
loaC.sonT = Object.values(loaC.sonL).map(a => a.length).reduce((a, b) => a + b);

loaF.load = async() => {
    if(await loaF.loadI()) return 'error';
    else '終わり'
}
let eed = 0;
let eee = 0;
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

        
        if(!loaC.imgL.enemies[sta]) loaC.imgL.enemies[sta] = [];
        // console.log(Enemies.filter(a => a.in == sta).map(a => a.name))
        Enemies.filter(a => a.in == sta).map(a => a.name).forEach(name => {
            loaC.imgT += 1;
            if(sta != 'すべて') loaC.imgL.enemies[sta].push(name);
            
            else for(let sta2 of stas0) loaC.imgL.enemies[sta2].push(name);
        });
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

    let loaloa = (arr, route) => {
        // console.log("Arrayでした lets 読み込み")
        let src = "assets/";
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
            };
            img.onerror = () => {
                console.error(`Image ${src}${mono}.png failed to load.`);
                eed += 1;
                if(eed > 20) return console.error('さすがにやりすぎbonus'), 1;
                img.src = `assets/systems/error.png`;
                loaC.imgD++;
            };
            
            tar[mono] = img;
            if(loaC.imgD >= loaC.imgT) loaF.loadS();
        }

        // console.log('読み込み完了 これよりユグドラシルに帰還する')
        return 0;
    }

    let skip = 0;
    // let gensho = Object.keys(loaC.imgL);
    let loaloa0 = async(mono, route = []) => {
        let sink = route.length ? 1 : 0
        // if(sink) console.log("not Arrayでした lets 再帰");
        
        // console.log("[loaloa0] route:[" + route + "]");
        // console.log('次:monoです')
        // console.log(mono)
        eee += 1;
        // console.error(`------lets ループ[${eee}]------`)
        for(let key in mono){
            // console.log(`ループ[${eee}]中.. route:[${route}]`)
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
        // console.error(`------終わり ループ[${eee}]------`)
    }
    

    loaloa0(loaC.imgL);
}

loaF.loadS = async() => {
    soundsNames.forEach(num => {
        let sound = new Audio();
        sound.preload = 'auto';
        sound.src = `assets/sounds/${num}.mp3`;
        sound.addEventListener('canplaythrough', () => {
            soundsLoaded++;
            if(imgC.imagesLoaded == imgC.imagesTotal && soundsLoaded == totalsounds) start();
        }, {once: true});
        sound.onerror = () => {
            console.error(`Sound ${num} failed to load.`);
            soundsLoaded++;
            sound.src = `assets/sounds/error.mp3`;
        };
        sounds[num] = sound;
    });
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
soundVolume(50);

//#endregion

