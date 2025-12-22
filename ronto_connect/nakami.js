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
// let loginTD = document.querySelector('#upper .login');

let messagesRef = database.ref(`rontoConnect/rooms/${chatroom}/messages`);
let usersRef = database.ref(`users/null/rontoConnect`);

// loginTD.addEventListener('click', () => loginD.classList.add('appe'));
loginC.XD.addEventListener('click', () => loginD.classList.remove('appe'));
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
    loginD.classList.remove('appe');


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
    // title field bt
    {
        name:'title',
        rank:7,
        back:'#001748'
    },
    {
        name:'field',
        rank:3,
        back:'#87ceeb'
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
    AreC.now = area;
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

//#endregion

//#region ホーム

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

//#region アンダーニンジャ
let undD = document.getElementById('under');
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
    let p = canC.get();
    p.moving = 1;
    
    batD.classList.add('appe')
};
batF.clos = () => {
    let p = canC.get();
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
        for (let i = who.buffs.length - 1; i >= 0; i--) {
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
    
    draw()
    movable = 1;
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
        function handleClick(event) {
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
        if (buff.time <= 0) {
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
function ShallTargetSelect(who, code, both = 0) {
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
    else {
        const ids = list.map(c => c.me);
        const i = ids.indexOf(target.me);
        const adj = [];
        if (i > 0) adj.push(ids[i - 1]);
        adj.push(ids[i]);
        if (i < ids.length - 1) adj.push(ids[i + 1]);
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
        
        for (let i = 0; i < hyous.length; i++) {
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
            console.console('codeが違ったからとりあえず同名消したけど、よかった？');
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

    //あれ？みんな死んじゃった？
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
    console.log("=====Ronto Connect connecten=====")
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
                if(loaC.imgD == loaC.imgT) loaF.loadS();
            };
            img.onerror = () => {
                console.error(`Image ${src}${mono}.png failed to load.`);
                loaC.erd += 1;
                if(loaC.erd > 20) return console.error('さすがにやりすぎbonus'), 1;
                img.src = `assets/systems/error.png`;
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
        }, {once: true});
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
soundVolume(50);

//#endregion

document.addEventListener('DOMContentLoaded', async() => {
    await loaF.load();
})