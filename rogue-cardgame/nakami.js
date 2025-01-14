//#region ステージ構成とか
let stagebar = [
    [1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0]
]
let floor = 0;
function SetStageBar(){
    const StageButton = document.getElementById('StageButton');
    StageButton.innerHTML = '';
    let high = stagebar[0][floor];
    let low = stagebar[1][floor];
    if(low == 0){
        StageButton.style = `
        margin: 0 auto;
        padding: 5px;
        display: block;
        overflow: auto;
        `
        let text = '';
        switch(high){
            case 1:
                text = '敵と交戦します';
                break;
            case 2:
                text = '少し強い敵と交戦します';
                break;
            case 3:
                text = '何か特別なことがあるかもしれない';
                break;
            case 4:
                text = 'キャンプで一時休憩します';
                break;
            case 5:
                text = 'ボスと対峙します';
                break;
        }
        StageButton.innerHTML = `
        <button class="button stagebar-big" onclick="LetsGoBattle(1,${high})">${text}</button>
        `;
    }else{
        StageButton.style = `
        margin: 0 auto;
        padding: 5px;
        display: flex;
        overflow: auto;
        justify-content: left;
        align-items: left;
        gap: 10px;
        `
        let text1 = '';
        let text2 = '';
        switch(high){
            case 1:
                text1 = '敵と交戦します';
                break;
            case 2:
                text1 = '少し強い敵と交戦します';
                break;
            case 3:
                text1 = '何か特別なことがあるかもしれない';
                break;
            case 4:
                text1 = 'キャンプで一時休憩します';
                break;
            case 5:
                text1 = 'ボスと対峙します';
                break;
        }
        switch(low){
            case 1:
                text2 = '敵と交戦します';
                break;
            case 2:
                text2 = '少し強い敵と交戦します';
                break;
            case 3:
                text2 = '何か特別なことがあるかもしれない';
                break;
            case 4:
                text2 = 'キャンプで一時休憩します';
                break;
            case 5:
                text2 = 'ボスと対峙します';
                break;
        }
        StageButton.innerHTML = `
        <button class="button stagebar-small" onclick="LetsGoBattle(1,${high})">${text1}</button><button class="button stagebar-small" onclick="LetsGoBattle(2,${low})">${text2}</button>
        `;
    }
}
SetStageBar();
function LetsGoBattle(num,code){
    let irankamo = num;
    irankamo += 1;//ちゃんと道順作るってなったら道程要員になりそう
    switch(code){
        case 1:
            EnemyAppear(0);
            break;
        case 2:
            EnemyAppear(1);
            break;
        case 3:
            RandomEvent();
            break;
        case 4:
            GoToCamp(0);
            break;
        case 5:
            BossEnemyAppear();
            break;
    }
    document.getElementById('StageButton').style.display = 'none';
}
async function EnemyAppear(num){
    document.getElementById('GameArea').style.display = 'block';
    EnemyNameDeside(num);
    addtext(enemyname+'が現れた！');
    PlaceNoteCard();BarCardCreate();
    await delay(1000);
    JustLook = 0;
}
function EnemyNameDeside(num){
    let enemynames = Object.keys(Enemies).filter(a => Enemies[a].elite == 0 && Enemies[a].appeable == 1).map(a => Enemies[a].name); //a.stage == stageとかもよろ
    enemyname = enemynames[Math.floor(Math.random() * enemynames.length)];
    if(num == 1){
        //エリートの場合
    }
    return enemyname;
}
//#endregion
//#region カード系統
let target = 1; //tabキーで狙う敵変れるようにしますか?いやいいや
const Cards = {
    //こっからA
    'slash':{
        id:'slash',
        name: 'スラッシュ',
        nume: 2,
        code: 'A',
        rare: 'N',
        cool: 2,
        explain: '軽い斬撃。',
        process:async function(cam,me,tcam,target){
            tcam = 'enemies';
            let atk = 2;
            atk += eleatk;
            let result = await damaged(cam,me,tcam,target,atk);
            return result;
        }
    },
    'sword':{
        id:'sword',
        name: 'ソード',
        nume: 3,
        code: 'A',
        rare: 'N',
        cool: 3,
        explain: '使うたびに攻撃力が上昇する。',
        process:async function(cam,me,tcam,target){
            let atk = 3;
            atk += ソードeleatk;
            atk += eleatk;
            let result = await damaged(cam,me,me,target,atk);
            if(nowturn == 'P'){ソードplayereleatk += 1}; 
            if(nowturn == 'E'){ソードenemyeleatk += 1};
            return result;
        }
    },
    'rushsword':{
        id:'rushsword',
        name: 'ラッシュソード',
        nume: '3+',
        code: 'A',
        rare: 'R',
        cool: 4,
        explain: '基本3ダメージ、次のカードが自分の攻撃カードの場合3回攻撃になる。',
        process:async function(cam,me,tcam,target){
            let atk = 3;
            if(nextcard.classList.contains('A') && nextcard.classList.contains('P')){atknum += 2;}else
            if(prevcard.classList.contains('A') && prevcard.classList.contains('P')){atknum += 2;};//3回攻撃に
            atk += eleatk;
            let result = await damaged(cam,me,me,target,atk);
            return result;
        }
    },
    'soulknife':{
        id:'soulknife',
        name: 'ソウルナイフ',
        nume: 4,
        code: 'A',
        rare: 'R',
        cool: 3,
        explain: '相手にダメージを与え、与えた分回復する。',
        process:async function(cam,me,tcam,target){
            let atk = 4;
            atk += eleatk;
            if(enemyhealth <= atk){let atk = enemyhealth;}
            repair = atk;
            let result = await damaged(cam,me,me,target,atk);
            return result;
        }
    },
    'leafsword':{
        id:'leafsword',
        name: 'リーフソード',
        nume: '5+',
        code: 'A',
        rare: 'R',
        cool: 5,
        explain: '基本5ダメージ、クール中カードが5枚以上なら10ダメージ。',
        process:async function(cam,me,tcam,target){
            let atk = 5;
            if(document.querySelectorAll('.cooldown').length >= 5){let atk = 10;}//こいつ廃止
            atk += eleatk;
            let result = await damaged(cam,me,me,target,atk);
            return result;
        }
    },
    'gamble':{
        id:'gamble',
        name: '博打',
        nume: 8,
        code: 'A',
        rare: 'R',
        cool: 4,
        explain: '3ダメージ、もしくは8ダメージを与える。',
        process:async function(cam,me,tcam,target){
            let atk = Math.floor(Math.random() * 2) == 0 ? 8 : 3; //3または8 50%
            atk += eleatk;
            let result = await damaged(cam,me,me,target,atk);
            return result;
        }
    },
    'dualcutter':{
        id:'dualcutter',
        name: 'デュアルカッター',
        nume: '4x2',
        code: 'A',
        rare: 'R',
        cool: 3,
        explain: '4ダメージで2回攻撃する。',
        process:async function(cam,me,tcam,target){
            let atk = 4;
            atk += eleatk;
            let result = await damaged(cam,me,me,target,atk);
            return result;
        }
    },
    'fevercutter':{
        id:'fevercutter',
        name: 'フィーバーカッター',
        nume: '4+',
        code: 'A',
        rare: 'R',
        cool: 3,
        explain: '4+相手のデバフの持続時間の合計で攻撃する。',
        process:async function(cam,me,tcam,target){
            let atk = 4;
            atk += enemydebuff.time;
            let result = await damaged(cam,me,me,target,atk);
            return result;
        }
    },
    'quadcutter':{
        id:'quadcutter',
        name: 'クアッドカッター',
        nume: '4x4',
        code: 'A',
        rare: 'SR',
        cool: 4,
        explain: '4ダメージで4回攻撃する。',
        process:async function(cam,me,tcam,target){
            let atk = 4;//ぶっ壊れになりそう..まあ名前かっこいいからいいよね！！
            atk += eleatk;
            atknum += 3;
            let result = await damaged(cam,me,me,target,atk);
            return result;
        }
    },
    'feverslash':{
        id:'feverslash',
        name: 'フィーバースラッシュ',
        nume: '4+x2',
        code: 'A',
        rare: 'SR',
        cool: 4,
        explain: '4+相手のデバフの持続時間の合計で2回攻撃する。',
        process:async function(cam,me,tcam,target){
            let atk = 4;
            atk += enemydebuff.time;
            atknum += 1;
            let result = await damaged(cam,me,me,target,atk);
            return result;
        }
    },
    'heartseeker':{
        id:'heartseeker', //ハートを盗むもの...?
        name: 'ハートシーカー',
        nume: 'X',
        code: 'A',
        rare: 'SR',
        cool: 5,
        explain: '自身のバリアを全て消費し、<br>相手に消費前のバリアの1.5倍のダメージを与える。',
        process:async function(cam,me,tcam,target){
            let atk = shield;
            let shl = -atk;
            atk += eleatk;
            atk = Math.floor(atk * 1.5);//元ネタはハートの合図です 今思ったけど名前似てる...
            let result = await damaged(cam,me,me,target,atk);
            return result;
        }
    },//1.5倍に強化とか、強化版武器追加してもいいかも
    'bloodknife':{
        id:'bloodknife',
        name: 'ブラッドナイフ',//これ好き(元:学マス-はじける水しぶき)
        nume: '16',
        code: 'A',
        rare: 'SR',
        cool: 5,
        explain: '自分のHPを7減らした後相手にダメージを与える。<br>自身にバリアがある場合、リカバリを2付与する'
    },
    'demondance':{//鬼踊....ww
        id:'demondance',
        name: '鬼神乱舞',//アークナイツモンハンコラボ、キリンRヤトウの2ndスキルより
        nume: '4x6',//ちょっとやばいか...?ww
        code: 'A',
        rare: 'SSR',
        cool: 6,
        explain: '4ダメージで6回攻撃する。<br>足掻こうが抗おうが無駄だ！',
        process:async function(cam,me,tcam,target){
            let atk = 4;
            atk += eleatk;
            atknum += 5;//ちょっとやばいかもよ？？ww
            let result = await damaged(cam,me,me,target,atk);
            return result;
        }
    },
    'feverchainsaw':{
        id:'feverchainsaw',
        name: 'フィーバーチェーンソー',//夢の塊 ...え名前としてありすぎない？？夢の塊
        nume: '4+x4',
        code: 'A',
        rare: 'UR',
        cool: 5,
        explain: '4+相手のデバフの持続時間の合計で4回攻撃する。',
        process:async function(cam,me,tcam,target){
            let atk = 4;
            atk += enemydebuff.time;
            atknum += 3;
        }
    },

    //こっからM

    'shield':{
        id:'shield',
        name: '盾',
        nume: 4,
        code: 'M',
        rare: 'N',
        cool: 3,
        explain: '軽く盾を構える。',
        process:async function(cam,me,tcam,target){
            let shl = 4;
            shl += eleshl; 
            let result = await shield(cam,me,cam,me,shl);
        }
    },
    'heal':{
        id:'heal',
        name: '回復',
        nume: 4,
        code: 'M',
        rare: 'N',
        cool: 2,
        explain: '自身のHPを4回復する。',
        process:async function(cam,me,tcam,target){
            let result = await heal(cam,me,me,4);
            return result;
        }
    },
    'attackup':{
        id:'attackup',
        name: '攻撃力上昇',
        nume: 1,
        code: 'M',
        rare: 'R',
        cool: 4,
        explain: '自身の攻撃力を上昇させる。',
        process:async function(cam,me,tcam,target){
            eleatk += 1;
            return 'alive';
        }
        
    },
    'greentrain':{
        id:'greentrain',//グリーン車ではないです
        name: 'グリーン・トレイン',
        nume: '',
        code: 'M',
        rare: 'R',
        cool: 5,
        explain: '使用されたフェーズの配置されたカードを全て無効化する。<br>簡単に言えばスキップである',
        process:async function(cam,me,tcam,target){
            //ないっすよ。だってこれ存在するだけで効果だし
            //逆に何を書けないいんですか？？
            return 'alive';
        }
    },
    'behard':{
        id:'behard', //die hardも作りたいね DBDのやつ
        name: '硬化',
        nume: '',
        code: 'M',
        rare: 'R',
        cool: 5,
        explain: '4硬化状態を得る',
        process:async function(cam,me,tcam,target){
            buffAdd(cam,me,'硬化',4);
            return 'alive';
        }
    },
    'dualcore':{
        id:'dualcore',
        name: 'デュアルコアシステム',//ダブルエントリーシステム的なやつができたらシステム消しといて
        nume: '',
        code: 'M',
        rare: 'R',
        cool: 5,
        explain: '次のターン、相手のカードを後ろに配置する。',
        process:async function(cam,me,tcam,target){
            if(cam == 'players'){nextcardactpat = '0011';}
            if(cam == 'enemies'){nextcardactpat = '1100';}
            return 'alive';
        }
    },
    'yellowtrain':{
        id:'yellowtrain', //黄色のドクターとかありじゃね？ だからあえてのそのまま
        name: 'ドクター・イエロー',
        nume: 'Px2',//P = Phase
        code: 'M',
        rare: 'SR',
        cool: 6,
        explain: '使用されたフェーズの配置されたカードを全て無効化する。<br>ついでに体力を現在のフェーズ数x2回復する。',
        process:async function(cam,me,tcam,target){
            let result = await heal(cam,me,me,me.phase*2);
            //これはあるんっすよ。ドクターイエローに感謝を
            return result;
        }

    },
    'thiefmask':{
        id:'thiefmask',
        name: 'シーフマスク',
        nume: '',
        code: 'M',
        rare: 'SR',
        cool: 5,
        explain: 'このカードの一つ前のカードを盗む。',
        process:async function(cam,me,tcam,target){
            if(prevcard){//敵が使った時
                if(prevcard.classList.contains('P')&&nowturn == 'E'){
                if(prevcard.classList.contains('A')){
                    havecardA.name.splice(havecardA.name.indexOf(prevcard.id),1);
                    console.log('多分盗まれたぜ!!Aの方ね')
                }
                if(prevcard.classList.contains('M')){
                    havecardM.name.splice(havecardM.name.indexOf(prevcard.id),1);
                    console.log('多分盗まれたぜ!!Mの方ね')
                }
                }
            }
            if(prevcard){//自分が使った時
                if(prevcard.classList.contains('E')&&nowturn == 'P'){
                if(prevcard.classList.contains('A')){
                    havecardA.name.push(prevcard.id);
                    console.log('多分盗んだぜ!Aを')
                }
                if(prevcard.classList.contains('M')){
                    havecardM.name.push(prevcard.id);
                    console.log('多分盗んだぜ!Mを')
                }
                }
            }
            return 'alive';
            //シーフマスクのエフェクト出しといて(画像がちょっと浮いて消えるだけでいい)
        }
    },
    'overdrive':{
        id:'overdrive',
        name: 'オーバードライブ',
        nume: '',
        code: 'M',
        rare: 'UR',//初URこれね？ww
        cool: 5,
        explain: '次のターン、相手のカードを無くす。<br>敵が使うことは絶対にない。',//まあ..使えたらかなりきっついからね とはいいつつ一人くらいあってもいいかも
        process:async function(cam,me,tcam,targat){
            playerhealth = document.querySelectorAll('.cooldown').length*2;
            nextcardactpat = '0000';
        }
    }
};

const SortCardA = Object.keys(Cards).filter(card => card.code === 'A').map(card => card.name);
const SortCardM = Object.keys(Cards).filter(card => card.code === 'M').map(card => card.name);
//#endregion
//#region 敵の動きのまとめ
let enemyname = '古書館の魔術師';
let Enemies = {
    '古書館の魔術師':{
        name:'古書館の魔術師',
        elite:0,
        appeable:1,
        actpat:{
            1:['attackup', 0, 0, 'ソード'],
            2:[0, 'シーフマスク', 0, '博打'],
            3:[0,'盾',0,'デュアルカッター'],
            // [0,0,'博打','攻撃力上昇'], [0,0,'ソード','ラッシュソード'],
            // ['攻撃力上昇','博打',0,0],['ソード','クアッドカッター',0,0],
        }
    },
    '船上のバニーチェイサー':{
        name:'船上のバニーチェイサー',
        elite:0,
        appeable:1,
        actpat:{
            1:['攻撃力上昇',0,'攻撃力上昇',0],
            2:[0,'盾','ソード',0],
            3:['盾',0,0,'ハートシーカー'],
            // [0,0,'ソード','ソード'], [0,0,'盾','盾'],
            // ['盾','盾',0,0],['盾','ハートシーカー',0,0],
        }
    },
}

let actpat = [
    [
        ['攻撃力上昇', 0, 0, 'ソード'],
        [0, 'シーフマスク', 0, '博打'],
        [0,'盾',0,'デュアルカッター'],
    ],
    [
        ['攻撃力上昇',0,'攻撃力上昇',0],
        [0,'盾','ソード',0],
        ['盾',0,0,'ハートシーカー'],
    ],
    [
        ['攻撃力上昇',0,0,0],
    ],
];

//#endregion
//#region 変数s
let x, y, z; let JustLook = 0;

let eleshl = 0;
let eleatk = 0;
let ソードeleatk = 0;

let havecardA = {
    name:['スラッシュ','スラッシュ', 'ソード', '博打', 'ラッシュソード', 'ソウルナイフ','ハートシーカー'],
    ct:[0,0,0,0,0,0,0],
    ob:[]
}
let havecardM = {
    name:['盾', '回復'],
    ct:[0,0],
}

havecardA.name = SortCardA;
havecardA.ct = [];
for(let i = 0; i < havecardA.name.length; i++){
    havecardA.ct.push(0);
}
havecardM.name = SortCardM;
havecardM.ct = [];
for(let i = 0; i < havecardM.name.length; i++){
    havecardM.ct.push(0);
}

let CardActList = {
    card: [],
    turn: []
};
let CardActNameList = [];

let actpatnum = 1;//
let bar = 0;//バーの状態 0 == 特に条件なし
let barcard = [0,0,0,0];


let phasenum = 0;
let nextcardactpat = 0;//dualとかoverdriveとか

let playerhealth = 40;
let playermaxhealth = 40;
let playershield = 0;
let enemyhealth = 20;
let enemymaxhealth = 20;
let enemyshield = 0;

let playereleatk = 0;
let enemyeleatk = 0;
let ソードplayereleatk = 0;
let ソードenemyeleatk = 0;
let playereleshl = 0;
let enemyeleshl = 0;
//#endregion
//#region バフ/デバフのそれ
let playerbuff = {
    name:0,
    time:0
};
let playerdebuff = {
    name:0,
    time:0
}
let enemybuff = {
    name:0,
    time:0
}
let enemydebuff = {
    name:0,
    time:0
}
function buffadd(to,name,time){
    if(eval(to).name != 0){
        eval(to).time += time;
    }else{
        eval(to).name = name;
        eval(to).time = time;
    }
    bufftekiou();
}
function buffincrease(to,time){
    if(playerbuff.name == 0){return;}
    eval(to).time += time;
    bufftekiou();
}
function buffdecrease(to,time){
    if(eval(to).name == 0){return;}
    eval(to).time -= time;
    if(eval(to).time <= 0){eval(to).name = 0;}
    bufftekiou();
}
function buffclear(){
    playerbuff.name = 0;
    playerbuff.time = 0;
    playerdebuff.name = 0;
    playerdebuff.time = 0;
    enemybuff.name = 0;
    enemybuff.time = 0;
    enemydebuff.name = 0;
    enemydebuff.time = 0;
    bufftekiou();
}
function bufftekiou(){
    document.getElementById('PlayerBuff').textContent = playerbuff.name;
    document.getElementById('PlayerDebuff').textContent = playerdebuff.name;
    document.getElementById('EnemyBuff').textContent = enemybuff.name;
    document.getElementById('EnemyDebuff').textContent = enemydebuff.name;
    // innerHTML = <img class="buff-img" src="assets/buffs/${playerbuff.name}.png"/> ${playerbuff.time}
}
//#endregion
//#region 扱いやすい子達
function delay(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
function tekiou() {
    document.getElementById('PlayerHealth').textContent = playerhealth;
    document.getElementById('EnemyHealth').textContent = enemyhealth;
    document.getElementById('PlayerShield').textContent = playershield;
    document.getElementById('PlayerMaxHealth').textContent = playermaxhealth;
    document.getElementById('EnemyMaxHealth').textContent = enemymaxhealth;
    document.getElementById('EnemyShield').textContent = enemyshield;
}


//#endregion
//#region log&text
let textDiv = document.getElementById('text');
let autoDelay = 1;
let skipText = false; // スキップフラグ
let clearText = false; // テキスト消去フラグ

function colorcheck(rawtext) {
    const text = [];
    let isRed = false; // ** で囲まれた部分かどうか
    let isPink = false; // && で囲まれた部分かどうか
    let isBlue = false;

    for (let i = 0; i < rawtext.length; i++) {
        if(rawtext[i] === "*" && rawtext[i + 1] === "*"){
            isRed = !isRed; // 状態を切り替える
            i++; // 次の * をスキップ
        }else if(rawtext[i] === "&" && rawtext[i + 1] === "&"){
            isPink = !isPink;
            i++; // 次の & をスキップ
        }else if(rawtext[i] === "^" && rawtext[i + 1] === "^"){
            isBlue = !isBlue;
            i++;
        }else{
            text.push({ char: rawtext[i], color: isRed ? "red" : isPink ? "pink" : isBlue ? "blue" : null });
        }
    }
    return text;
}

async function addtext(text) {
    text = colorcheck(text);
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
                    resolve('end'); // Promiseを解決
                });
            }
        }
        type();
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'z' || event.key === 'Enter') {
        skipText = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'z' || event.key === 'Enter') {
        skipText = false;
    }
});

document.addEventListener('click', () => {
    skipText = true;
    setTimeout(() => skipText = false, 50); // 一時的にスキップを有効化
});

let logDiv = document.getElementById('log');
let logOpener = document.getElementById('log-opener');
logOpener.addEventListener('click', function(){
    if(logDiv.style.right == '-300px'){
        logDiv.style.right = '0px';
        logOpener.style.right = '300px';
    }else{
        logDiv.style.right = '-300px';
        logOpener.style.right = '0px';
    }
});

function addlog(text){
    logDiv.innerHTML += text + '<br>';
    logDiv.scrollTop = logDiv.scrollHeight;
}

// 実行例
let Examples = {
    1:async function(){
        await addtext('コッペ「こんにちは、**コッペ・パン**です！」')
        await addtext('コッペ「あ、気づきました？」')  
        await addtext('コッペ「&&色が&&**変えれるんですよ**^^！！^^」')
        await addtext('それに感心しながらも、一つ違和感を覚える')
        await addtext('コッペパン「誰だお前」')
    },
    2:async function(){
        await addtext('battle start');
        await addtext('飛花レイルが現れた！');
        await addtext('飛花レイルに1のダメージ！');
        await addtext('飛花レイル「も、もう戦うのやめてもいいんじゃないかな?!」');
        await addtext('飛花レイル「ほら、花もこんなに咲いてるし..」');
        await addtext('飛花レイル「小鳥も鳴いてるし..さ？」');
        await delay(1000);
        await addtext('飛花レイルに9999のダメージ！');
        await addtext('飛花レイル「むぅ..」');
        await addtext('battle end');
        await addtext('1のexpを獲得!');
    }
}
document.addEventListener('keyup', (event) => {
    if(event.key == '1'){
        Examples[1]();
    }else if(event.key == '2'){
        Examples[2]();
    }
})
//#endregion

//#region Notice
let noticenow = 0;
function OpenNotice(){
   if(noticenow == 0){
      noticenow = 1;
      document.getElementById('Notice-page').style.display = 'block';
      document.getElementById('Notice-page').innerHTML = '<iframe src="resources/notice.html" width="100%" height="100%" frameborder="0"></iframe>';
   }else{
      noticenow = 0;
      document.getElementById('Notice-page').style.display = 'none';
      document.getElementById('Notice-page').innerHTML = '';
   }
}
//#endregion
//#region make bar, place notecard
function BarCardCreate() {
    document.getElementById('PhaseBar').innerHTML = '';

    let barCards= Enemies[enemyname].actpat[actpatnum];
    barcard = [0,0,0,0]

    let bars = Array.from(bar).map((val, index) => (val === '1' ? index + 1 : null)) .filter((val) => val !== null);
    bars.forEach(nanka =>{
        let card = barCards[nanka]
        barcard[nanka] = Cards[card]
    })
    if(bar === '1111'){//埋め合わせの動き
        nextActpat();
        let barCards= Enemies.actpat[actpatnum];
        [3,4].forEach(nanka => {
            let card = barCards[nanka]
            barcard[nanka] = Cards[card]
        })
    }

    let i = 0
    for (let nanka of barcard) {
        i++
        const Zone = document.getElementById('PhaseBar');
        const messageElement = document.createElement('div');

        if(nanka !== 0) {
            const card = Object.keys(Cards).find(c => c.name === nanka);
            if(card) {
                messageElement.id = card.name;
                messageElement.className = `card ${card.code} G E ${i}`;
                messageElement.innerHTML = `<img src="assets/cards/${card.name}.png" class="card-img">${card.nume}`;
                Zone.appendChild(messageElement);
            }
        } else {
            messageElement.className = 'card none ' + i;
            messageElement.innerHTML = '<img src="assets/cards/none.png" class="card-img">';
            Zone.appendChild(messageElement);
        }
    }
}
function PlaceNoteCard() {
    havecardA.name.sort((a, b) => {
        const order = SortCardA; 
        return order.indexOf(a) - order.indexOf(b);
    });
    havecardM.name.sort((a, b) => {
        const order = SortCardM; 
        return order.indexOf(a) - order.indexOf(b);
    });
    let ZatuZatuNum

    Area = document.getElementById('NoteCardA')
    Area.innerHTML = '';
    ZatuZatuNum = 0;
    for (let card of havecardA.name) {
        const messageElement = document.createElement('div');
        const cardinfo = Object.keys(Cards).find(c => c.name === card);
        if(cardinfo) {
            messageElement.id = cardinfo.name;
            if(havecardA.ct[ZatuZatuNum] == 0) {
                messageElement.className = `notecard ${cardinfo.code} ${cardinfo.rare}`;
                messageElement.innerHTML = `<img src="assets/cards/${cardinfo.name}.png" class="notecard-img">${cardinfo.nume}`;
            }else{
                messageElement.className = `notecard ${cardinfo.code} ${cardinfo.rare} cooldown`;
                messageElement.innerHTML = `<img src="assets/cards/${cardinfo.name}.png" class="notecard-img">${havecardA.ct[ZatuZatuNum]}`;
            }
            Area.appendChild(messageElement);
        }
        ZatuZatuNum++;
    }
    Area = document.getElementById('NoteCardM')
    Area.innerHTML = '';
    ZatuZatuNum = 0;
    for (let card of havecardM.name) {
        const messageElement = document.createElement('div');
        const cardinfo = Object.keys(Cards).find(c => c.name === card);
        if(cardinfo){
            messageElement.id = cardinfo.name;
            if(havecardM.ct[ZatuZatuNum] == 0) {
                messageElement.className = `notecard ${cardinfo.code} ${cardinfo.rare}`;
                messageElement.innerHTML = `<img src="assets/cards/${cardinfo.name}.png" class="notecard-img">${cardinfo.nume}`;
            }else{
                messageElement.className = `notecard ${cardinfo.code} ${cardinfo.rare} cooldown`;
                messageElement.innerHTML = `<img src="assets/cards/${cardinfo.name}.png" class="notecard-img">${havecardM.ct[ZatuZatuNum]}`;
            }
            Area.appendChild(messageElement);
        }
        ZatuZatuNum++;
    }

}

document.addEventListener('DOMContentLoaded', () => {
    //havecardA.name = SortCardA;
    //havecardM.name = SortCardM;
    NextPhase();//これらそのうち消してね

});
let indices
let NoteCard
function NextPhase(){
    phasenum += 1;
    document.getElementById('ShowPhase').innerHTML = phasenum;
    tekiou();
    for (let i = 0; i < havecardA.ct.length; i++) {
        havecardA.ct[i] -= 1;
        if(havecardA.ct[i] < 0) {
            havecardA.ct[i] = 0;
        }
    }
    for (let i = 0; i < havecardM.ct.length; i++) {
        havecardM.ct[i] -= 1;
        if(havecardM.ct[i] < 0) {
            havecardM.ct[i] = 0;
        }
    }
    PlaceNoteCard();
    BarCardCreate();

    // カード説明表示の設定
    document.getElementById('PhaseBar').addEventListener('contextmenu', (event) => {
        if(event.target.closest('.card')) {
            event.preventDefault();  // ブラウザのデフォルトのコンテキストメニューを無効化
            ShowCardInfoEdit(event.target.closest('.card').id);
            const showCardInfo = document.getElementById('ShowCardInfo');
            showCardInfo.classList.toggle('visible');
            showCardInfo.classList.toggle('hidden');
            event.stopPropagation();
        }
    });

    document.addEventListener('click', (event) => {
        const showCardInfo = document.getElementById('ShowCardInfo');
        if(!event.target.closest('.card') && showCardInfo.classList.contains('visible')) {
            showCardInfo.classList.remove('visible');
            showCardInfo.classList.add('hidden');// const notecard = classList[classList.length - 1]; // 一番右のクラス名を取得
        }
    });

    // カードクリック時の背景色変更とクリックイベント設定
    document.querySelectorAll('.notecard').forEach(function (notecard) {
        notecard.addEventListener('click', function (event) {
            if(notecard.classList.contains('cooldown')){return;}
            event.stopPropagation();
            changeBackgroundColor('yellow');
            x = notecard.id;
            NoteCard = notecard;//これは要素の方のnotecard

            notecard.classList.add('holdcooldown');
            notecard.classList.add('usedbefore');
        });
    });
    document.querySelectorAll('.card.none').forEach(function (card) {
        card.addEventListener('click', function (event) {
            event.stopPropagation();
            if(getBackgroundColor(card) == 'rgb(255, 255, 0)') {
                const classList = card.classList;
                z = classList[classList.length - 1];
                const notecard = Object.keys(Cards).find(c => c.name === x);//これははカードの詳細
                if (notecard) {
                    card.id = notecard.name;
                    card.className = `card ${notecard.code} ${notecard.rare} P ${z}`;
                    card.innerHTML = `<img src="assets/cards/${notecard.name}.png" class="card-img">${notecard.nume}`;
                    changeBackgroundColor('#ddd');
                    //console.log("Card ID:", x);

                    if(document.querySelector('.holdcooldown')) {
                        let ittannoyatu = document.querySelector('.holdcooldown');
                        ittannoyatu.classList.remove('holdcooldown');
                        ittannoyatu.classList.add('cooldown');
                        ittannoyatu.innerHTML = `<img src="assets/cards/${x}.png" class="notecard-img">${notecard.cool}`;
                    }

                    if (havecardA.name.includes(x)) {
                        indices = havecardA.name.map((name, idx) => name === x ? idx : -1).filter(index => index !== -1);
                        //console.log("Indices in havecardA:", indices); // 取得されたインデックスを確認

                        for (let index of indices) {
                            //console.log("Checking havecardA.ct[index]:", havecardA.ct[index]); // ここでクールダウン値を確認
                            if (havecardA.ct[index] === 0) { // クールダウンがない場合のみ更新
                                havecardA.ct[index] = Object.keys(Cards).find(c => c.name === x).cool;
                                //console.log("Updated havecardA.ct[index]:", havecardA.ct[index]); // 更新後の値を確認
                                break; // 更新したらループ終了
                            }
                        }
                    } else if (havecardM.name.includes(x)) {
                        indices = havecardM.name.map((name, idx) => name === x ? idx : -1).filter(index => index !== -1);
                        console.log("Indices in havecardM:", indices);

                        for (let index of indices) {
                            console.log("Checking havecardM.ct[index]:", havecardM.ct[index]);
                            if (havecardM.ct[index] === 0) { // クールダウンがない場合のみ更新
                                havecardM.ct[index] = Object.keys(Cards).find(c => c.name === x).cool;
                                console.log("Updated havecardM.ct[index]:", havecardM.ct[index]);
                                break; // 更新したらループ終了
                            }
                        }
                    }
                }

                if(!document.querySelector('.card.none')) {
                    document.getElementById('NoteCardArea').style.display = 'none';
                    document.getElementById('PhaseStart').style.display = 'block';
                    document.getElementById('PhaseStart').innerHTML = '<button onclick="Phasestart()">行動を開始する</button><br><br><button onclick="Phasereset()">やり直す</button>';
                }
            }
        });
    });

    document.addEventListener('click', function () {
        changeBackgroundColor('#ddd');
        if(document.querySelector('.holdcooldown')) {
            const Ittan = document.querySelector('.holdcooldown');
            Ittan.classList.remove('holdcooldown');
            Ittan.classList.remove('usedbefore');
        }
    });
}

function ShowCardInfoEdit(id) {
    const card = Object.keys(Cards).find(c => c.name === id);
    document.getElementById('ShowCardInfo').innerHTML = card ? card.explain : 'this card is not found...';
}

function changeBackgroundColor(color) {
    document.querySelectorAll('.card.none').forEach(function (card) {
        card.style.backgroundColor = color;
    });
}
function getBackgroundColor(element) {
    return window.getComputedStyle(element).backgroundColor;
}
//#endregion
//#region Phasereset
function Phasereset() {
    BarCardCreate();
    document.getElementById('PhaseStart').style.display = 'none';
    document.getElementById('NoteCardArea').style.display = 'block';
    document.querySelectorAll('.usedbefore').forEach(function (card) {
        card.classList.remove('usedbefore');
        card.classList.remove('cooldown');
        card.innerHTML = `<img src="assets/cards/${card.id}.png" class="notecard-img">${Object.keys(Cards).find(c => c.name === card.id).nume}`;
    });

    document.querySelectorAll('.notecard').forEach(function (notecard) {
        notecard.addEventListener('click', function (event) {
            event.stopPropagation();
            changeBackgroundColor('yellow');
            x = notecard.id;
            notecard.classList.add('holdcooldown');
            notecard.classList.add('usedbefore');
        });
    });

    document.querySelectorAll('.card.none').forEach(function (card) {
        card.addEventListener('click', function (event) {
            event.stopPropagation();
            if(getBackgroundColor(card) == 'rgb(255, 255, 0)') {
                const classList = card.classList;
                z = classList[classList.length - 1]; // 一番右のクラス名を取得
                const notecard = Object.keys(Cards).find(c => c.name === x);
                if(notecard) {
                    card.id = notecard.name;
                    card.className = `card ${notecard.code} ${notecard.rare} ${z}`;
                    card.innerHTML = `<img src="assets/cards/${notecard.name}.png" class="card-img">${notecard.nume}`;
                    changeBackgroundColor('#ddd');

                    if(document.querySelector('.holdcooldown')) {
                        x = document.querySelector('.holdcooldown');
                        x.classList.remove('holdcooldown');
                        x.classList.add('cooldown');
                        x.innerHTML = `<img src="assets/cards/${x.id}.png" class="notecard-img">${Object.keys(Cards).find(c => c.name === x.id).cool}`;
                    }
                }
                if(!document.querySelector('.card.none')) {
                    document.getElementById('NoteCardArea').style.display = 'none';
                    document.getElementById('PhaseStart').style.display = 'block';
                    document.getElementById('PhaseStart').innerHTML = '<button onclick="Phasestart()">行動を開始する</button><br><br><button onclick="Phasereset()">やり直す</button>';
                }
            }
        });
    });
}
//#endregion
//#region エフェクトの動き
const canvas = document.getElementById('ZentaiMiruo');
const ctx = canvas.getContext('2d');
const EffectImagesKorehaMemoDesu = [
    'thief',''
]

function EffectAppear(side,name){
    const img = new Image();
    //img.src = name+'.png';
    img.src = 'assets/cards/盾.png';

    let yPos ;
    let xPos;
    if(side == 'p'){
        yPos = canvas.height - 20;
        xPos = canvas.width - 20;
    }else{
        yPos = 20;
        xPos = 20;
    }
    let opacity = 1;
    function animate() {
    console.log(img.src, xPos, yPos, 50, 50);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = opacity;
      ctx.drawImage(img, xPos, yPos, 50, 50);

      yPos -= 2;
      opacity -= 0.02;

      if (opacity > 0) {requestAnimationFrame(animate);}
    }
    animate();
  };


//#endregion
//#region PhaseStart
let actCards = [];
async function Phasestart() {
    if(JustLook == 0) {
        JustLook = 1;
        
        document.getElementById('PhaseStart').style.display = 'none';
        document.getElementById('NoteCardArea').style.display = 'none';

        actCards = [];
        let i1 = 0;
        document.querySelectorAll('.card').forEach(function (card){
            i1 += 1;
            x = Cards[card.id];
            x.order = i1;
            actCards.push(x);
        });
        nextcardactpat = 0;//resetにﾖﾛ
        
        //こっから攻撃とかの動き 割とシンプルめ

        let ZatuZatuNum = 0;

        if(CardActNameList.includes('グリーン・トレイン')||CardActNameList.includes('ドクター・イエロー')){
            await addtext('電車が通ってカードは全て無効化された！！');//ほんとはこれ下に置きたかったです...
            if(CardActNameList.includes('ドクター・イエロー')){
                playerhealth += (phasenum*2);
                tekiou();
            }   
        }else{
        for (let nanka of CardActNameList) {
            ZatuZatuNum += 1;
            console.log('〜〜'+ZatuZatuNum+'枚目('+nanka+')〜〜');
            const nowturn = CardActList.turn[ZatuZatuNum - 1];
            if(nowturn == 'P'){shield = playershield};if(nowturn == 'E'){shield = enemyshield};
            if(nowturn == 'P') {eleatk = playereleatk}; if(nowturn == 'E') {eleatk = enemyeleatk};
            if(nowturn == 'P') {ソードeleatk = ソードplayereleatk}; if(nowturn == 'E') {ソードeleatk = ソードenemyeleatk};
            const cardclass = CardActList.card[ZatuZatuNum - 1];
            const cardname = Object.keys(Cards).find(c => c.name === nanka);

            let nextcard = 0;
            let prevcard = 0;//謎にバグ。また前と後がおかしくなってる　4枚目の手続きの時に、prevが博打になってた。博打俺3枚目においてないのに。これ多分気分によって変わってるからどうにかしといて
            x = cardclass.classList[cardclass.classList.length - 1];//このカード
            y = +x; z = +x-1;
            if(document.querySelector('.\\3' + y)){
                nextcard = CardActList.card[y]
            };
            if(document.querySelector('.\\3' + z)) {
                prevcard = CardActList.card[z-1];
            }
            
            if(nowturn == 'P') { eleatk = playereleatk }; if(nowturn == 'E') { eleatk = enemyeleatk };

            if(prevcard){console.log('prev:'+prevcard.id)};
            console.log('カード名:' + nanka + ' atk:' + atk + ' atknum:' + atknum + ' shl:' + shl + ' repair:' + repair + ' eleatk:' + eleatk+' eleshl:'+eleshl);
            if(nextcard){console.log('next:'+nextcard.id)};

            //こっから行動
            switch (nowturn) {
                case 'P':
                    if(shl < 0){playershield += shl;}
                    for (let i = 0; i < atknum; i++) {
                        if(enemyhealth <= 0){break;}
                        if(enemyshield > 0){
                            x = enemyshield - atk;
                            if(x < 0) {
                                enemyshield = 0;
                                enemyhealth -= (x * -1);
                            } else {
                                enemyshield -= atk;
                            }
                        }else{
                            if(enemyhealth <= atk){atk = enemyhealth;}
                            enemyhealth -= atk;
                        }
                        tekiou();
                        await delay(100);
                    }
                    playerhealth += repair;
                    if(shl > 0){playershield += shl;}
                    tekiou();
                    if(!addbuff[0] == 0){
                        await delay(1000);
                        buffincrease(addbuff[0],addbuff[1],addbuff[2]);
                    }
                    break;
                case 'E':
                    enemyshield += shl;
                    for (let i = 0; i < atknum; i++) {
                        if(!playershield > 0) {
                            x = playershield - atk;
                            if(x < 0) {
                                playershield = 0;
                                playerhealth -= (x * -1);
                            } else {
                                playershield -= atk;
                            }
                        } else {
                            playerhealth -= atk;
                        }
                        tekiou();
                        await delay(250);
                    }
                    enemyhealth += repair;
                    tekiou();
                    if(!addbuff[0] == 0){
                        await delay(1000);
                        buffincrease(addbuff[0],addbuff[1],addbuff[2]);
                    }
                    break;
            }

            //セリフ入れるならここ

            atk = 0;
            shl = 0;
            repair = 0;
            atknum = 1;
            shield = 0;
            eleshl = 0;
            eleatk = 0;
            ソードeleatk = 0;
            await delay(800);
            if(playerhealth <= 0||enemyhealth <= 0){break;}//強制脱出プロンプト(???)
        }
        }

        //セリフ入れるならここ2
        if(nextcardactpat === '0011'){
            await addtext( 'デュアルコアシステム、始動！！');
        }
        if(nextcardactpat === '0000'){
            await addtext( 'この時を待っていました...');//シュナさんのセリフやね まあ..これはコラボじゃないんで！SSRではないです！！！
            await addtext('オーバードライブ！！！');
        }

        if(playerhealth <= 0){
            await addtext( '負けた！！！');
        }
        if(enemyhealth <= 0){
            await addtext('勝ち！！！！');//いや適当か ←このツッコミ好き
        }
        CardActList.card = [];
        CardActList.turn = [];
        CardActNameList = [];
        JustLook = 0;
        await delay(800);
        NextPhase();
    }
}
//#endregion