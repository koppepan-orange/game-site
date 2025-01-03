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
    document.getElementById('log').textContent = enemyname.name+'が現れた！';
    PlaceNoteCard();BarCardCreate();
    await delay(1000);
    JustLook = 0;
}
function EnemyNameDeside(num){
    enemyname.num = enemynames.num[Math.floor(Math.random() * enemynames.name.length)];
    enemyname.name = enemynames.name[enemyname.num];
    if(num == 1){
        //エリートの場合
    }
    return enemyname;
}
//#endregion
//#region カード系統
let A = 'A', M = 'M', N = 'N', R = 'R', SR = 'SR', SSR = 'SSR', UR = 'UR';
const cards = [
    //こっからA
    {
        name: 'スラッシュ',
        nume: 2,
        code: 'A',
        rare: 'N',
        cool: 2,
        explain: '軽い斬撃。'
    },
    {
        name: 'ソード',
        nume: 3,
        code: 'A',
        rare: 'N',
        cool: 3,
        explain: '使うたびに攻撃力が上昇する。'
    },
    {
        name: 'ラッシュソード',
        nume: '3+',
        code: 'A',
        rare: 'R',
        cool: 4,
        explain: '基本3ダメージ、次のカードが自分の攻撃カードの場合3回攻撃になる。'
    },
    {
        name: 'ソウルナイフ',
        nume: 4,
        code: 'A',
        rare: 'R',
        cool: 3,
        explain: '相手にダメージを与え、与えた分回復する。',
    },
    {
        name: 'リーフソード',
        nume: '5+',
        code: 'A',
        rare: 'R',
        cool: 5,
        explain: '基本5ダメージ、クール中カードが5枚以上なら10ダメージ。'
    },
    {
        name: '博打',
        nume: 8,
        code: 'A',
        rare: 'R',
        cool: 4,
        explain: '3ダメージ、もしくは8ダメージを与える。'
    },
    {
        name: 'デュアルカッター',
        nume: '4x2',
        code: 'A',
        rare: 'R',
        cool: 3,
        explain: '4ダメージで2回攻撃する。'
    },
    {
        name: 'フィーバーカッター',
        nume: '4+',
        code: 'A',
        rare: 'R',
        cool: 3,
        explain: '4+相手のデバフの持続時間の合計で攻撃する。'

    },
    {
        name: 'クアッドカッター',
        nume: '4x4',
        code: 'A',
        rare: 'SR',
        cool: 4,
        explain: '4ダメージで4回攻撃する。'
    },
    {
        name: 'フィーバースラッシュ',
        nume: '4+x2',
        code: 'A',
        rare: 'SR',
        cool: 4,
        explain: '4+相手のデバフの持続時間の合計で2回攻撃する。'
        
    },
    {
        name: 'ハートシーカー',
        nume: 'X',
        code: 'A',
        rare: 'SR',
        cool: 5,
        explain: '自身のバリアを全て消費し、<br>相手に消費前のバリアの1.5倍のダメージを与える。'
    },//1.5倍に強化とか、強化版武器追加してもいいかも
    {
        name: 'ブラッドナイフ',//これ好き(元:学マス-はじける水しぶき)
        nume: '16',
        code: 'A',
        rare: 'SR',
        cool: 5,
        explain: '自分のHPを7減らした後相手にダメージを与える。<br>自身にバリアがある場合、リカバリを2付与する'
    },
    {
        name: '鬼神乱舞',//アークナイツモンハンコラボ、キリンRヤトウの2ndスキルより
        nume: '4x6',//ちょっとやばいか...?ww
        code: 'A',
        rare: 'SSR',
        cool: 6,
        explain: '4ダメージで6回攻撃する。<br>足掻こうが抗おうが無駄だ！'
    },
    {
        name: 'フィーバーチェーンソー',//夢の塊 ...え名前としてありすぎない？？夢の塊
        nume: '4+x4',
        code: 'A',
        rare: 'UR',
        cool: 5,
        explain: '4+相手のデバフの持続時間の合計で4回攻撃する。'
    },

    //こっからM

    {
        name: '盾',
        nume: 4,
        code: 'M',
        rare: 'N',
        cool: 3,
        explain: '軽く盾を構える。'
    },
    {
        name: '回復',
        nume: 4,
        code: 'M',
        rare: 'N',
        cool: 2,
        explain: '自身のHPを4回復する。'
    },
    {
        name: '攻撃力上昇',
        nume: 1,
        code: 'M',
        rare: 'R',
        cool: 4,
        explain: '自身の攻撃力を上昇させる。'
    },
    {
        name: 'グリーン・トレイン',
        nume: '',
        code: 'M',
        rare: 'R',
        cool: 5,
        explain: '使用されたフェーズの配置されたカードを全て無効化する。<br>簡単に言えばスキップである'
    },
    {
        name: '硬化',
        nume: '',
        code: 'M',
        rare: 'R',
        cool: 5,
        explain: '4硬化状態を得る'
    },
    {
        name: 'デュアルコアシステム',//ダブルエントリーシステム的なやつができたらシステム消しといて
        nume: '',
        code: 'M',
        rare: 'R',
        cool: 5,
        explain: '次のターン、相手のカードを後ろに配置する。'
    },
    {
        name: 'ドクター・イエロー',
        nume: 'Px2',//P = Phase
        code: 'M',
        rare: 'SR',
        cool: 6,
        explain: '使用されたフェーズの配置されたカードを全て無効化する。<br>ついでに体力を現在のフェーズ数x2回復する。'

    },
    {
        name: 'シーフマスク',
        nume: '',
        code: 'M',
        rare: 'SR',
        cool: 5,
        explain: 'このカードの一つ前のカードを盗む。'
    },
    {
        name: 'オーバードライブ',
        nume: '',
        code: 'M',
        rare: 'UR',//初URこれね？ww
        cool: 5,
        explain: '次のターン、相手のカードを無くす。<br>敵が使うことはない。'//まあ..使えたらかなりきっついからね とはいいつつ一人くらいあってもいいかも
    }
];
const SortCardA = cards.filter(card => card.code === 'A').map(card => card.name);
const SortCardM = cards.filter(card => card.code === 'M').map(card => card.name);
//#endregion
//#region 敵の動きのまとめ
let enemynames = {
    name:['古書館の魔術師', '船上のバニーチェイサー',],
    num: [0,1,]
};
let enemyname = {
    name:'古書館の魔術師',
    num: 0

};
let barcards = {
    name:['攻撃力上昇', 0, 0, 'ソード'],
    rare:['R',0,0,'N'],
    num:[0,1,2,3]
};
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
let actpat0011 = [
    [
        [0,0,'博打','攻撃力上昇'],
        [0,0,'ソード','ラッシュソード'],
    ],
    [
        [0,0,'ソード','ソード'],
        [0,0,'盾','盾'],
    ],
]
let actpat1100 = [
    [
        ['攻撃力上昇','博打',0,0],
        ['ソード','クアッドカッター',0,0],
    ],
    [
        ['盾','盾',0,0],
        ['盾','ハートシーカー',0,0],
    ],
]
//#endregion
//#region 変数s
let x, y, z; let JustLook = 0;

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
    if(nextcardactpat == 0){
        barcards.name = actpat[enemyname.num][Math.floor(Math.random() * actpat[enemyname.num].length)];
    }else if(nextcardactpat === '0000'){//初めて === 使ったわ '0'と'0000'は一緒になっちゃうらしいからね
        barcards.name = [0,0,0,0];//オーバードライブ専用やね
    }else if(nextcardactpat === '0011'){
        barcards.name = actpat0011[enemyname.num][Math.floor(Math.random() * actpat0011[enemyname.num].length)];
    }else if(nextcardactpat === '1100'){
        barcards.name = actpat1100[enemyname.num][Math.floor(Math.random() * actpat1100[enemyname.num].length)];
    }
    let i = 0
    for (let nanka of barcards.name) {
        i++
        const Zone = document.getElementById('PhaseBar');
        const messageElement = document.createElement('div');

        if(nanka !== 0) {
            const card = cards.find(c => c.name === nanka);
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
        const cardinfo = cards.find(c => c.name === card);
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
        const cardinfo = cards.find(c => c.name === card);
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
                const notecard = cards.find(c => c.name === x);//これははカードの詳細
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
                                havecardA.ct[index] = cards.find(c => c.name === x).cool;
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
                                havecardM.ct[index] = cards.find(c => c.name === x).cool;
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
    const card = cards.find(c => c.name === id);
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
        card.innerHTML = `<img src="assets/cards/${card.id}.png" class="notecard-img">${cards.find(c => c.name === card.id).nume}`;
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
                const notecard = cards.find(c => c.name === x);
                if(notecard) {
                    card.id = notecard.name;
                    card.className = `card ${notecard.code} ${notecard.rare} ${z}`;
                    card.innerHTML = `<img src="assets/cards/${notecard.name}.png" class="card-img">${notecard.nume}`;
                    changeBackgroundColor('#ddd');

                    if(document.querySelector('.holdcooldown')) {
                        x = document.querySelector('.holdcooldown');
                        x.classList.remove('holdcooldown');
                        x.classList.add('cooldown');
                        x.innerHTML = `<img src="assets/cards/${x.id}.png" class="notecard-img">${cards.find(c => c.name === x.id).cool}`;
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
async function Phasestart() {
    if(JustLook == 0) {
        JustLook = 1;
        document.getElementById('PhaseStart').style.display = 'none';
        document.getElementById('NoteCardArea').style.display = 'block';
        document.querySelectorAll('.card').forEach(function (card) {
            CardActNameList.push(card.id);
            CardActList.card.push(card);
            x = card.classList[card.classList.length - 2];
            CardActList.turn.push(x);
        });
        nextcardactpat = 0;

        //こっから攻撃とかの動き 割とシンプルめ

        let atk = 0;
        let atknum = 1;
        let shl = 0
        let repair = 0;//攻撃等で回復した時の回復
        let ZatuZatuNum = 0;
        let shield = 0;
        let eleshl = 0;
        let eleatk = 0;
        let ソードeleatk = 0;
        let addbuff = [0,0,0]

        if(CardActNameList.includes('グリーン・トレイン')||CardActNameList.includes('ドクター・イエロー')){
            document.getElementById('log').innerHTML = '電車が通ってカードは全て無効化された！！';//ほんとはこれ下に置きたかったです...
            await delay(800);
            document.getElementById('log').innerHTML = '';
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
            const cardname = cards.find(c => c.name === nanka);

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


            switch (cardname.name){
                //こっからA
                case 'スラッシュ':
                    atk = 2;
                    atk += eleatk;
                    if(enemyhealth <= atk){atk = enemyhealth;}
                    break;
                case 'ソード':
                    atk = 3;
                    atk += ソードeleatk;
                    atk += eleatk;
                    if(enemyhealth <= atk){atk = enemyhealth;}
                    if(nowturn == 'P'){ソードplayereleatk += 1}; if(nowturn == 'E'){ソードenemyeleatk += 1};
                    break;
                case 'ラッシュソード':
                    atk = 3;
                    if(nextcard.classList.contains('A') && nextcard.classList.contains('P')){atknum += 2;}else
                    if(prevcard.classList.contains('A') && prevcard.classList.contains('P')){atknum += 2;};//3回攻撃に
                    if(enemyhealth <= atk){atk = enemyhealth;}
                    atk += eleatk;
                    break;
                case 'ソウルナイフ':
                    atk = 4;
                    atk += eleatk;
                    if(enemyhealth <= atk){atk = enemyhealth;}
                    repair = atk;
                    break;
                case 'リーフソード':
                    atk = 5;
                    if(document.querySelectorAll('.cooldown').length >= 5){atk = 10;}
                    atk += eleatk;
                    if(enemyhealth <= atk){atk = enemyhealth;}
                    break;
                case '博打':
                    atk = 3;
                    atk += eleatk;
                    if(Math.floor(Math.random() * 2) == 0){atk += 5;}//3、確率で8
                    if(enemyhealth <= atk){atk = enemyhealth;}
                    break;
                case 'デュアルカッター':
                    atk = 4;
                    atk += eleatk;
                    atknum += 1;
                    if(enemyhealth <= atk){atk = enemyhealth;}
                    break;
                case 'フィーバーカッター':
                    atk = 4;
                    atk += enemydebuff.time;
                    if(enemyhealth <= atk){atk = enemyhealth;}
                    break;
                case 'クアッドカッター':
                    atk = 4;//ぶっ壊れになりそう..まあ名前かっこいいからいいよね！！
                    atk += eleatk;
                    atknum += 3;
                    if(enemyhealth <= atk){atk = enemyhealth;}
                    break;
                case 'フィーバースラッシュ':
                    atk = 4;
                    atk += enemydebuff.time;
                    atknum += 1;
                    if(enemyhealth <= atk){atk = enemyhealth;}
                case 'ハートシーカー':
                    atk = shield;
                    shl = -atk;
                    atk += eleatk;
                    atk = Math.floor(atk * 1.5);//元ネタはハートの合図です 今思ったけど名前似てる...
                    if(enemyhealth <= atk){atk = enemyhealth;}
                case '鬼神乱舞':
                    atk = 4,
                    atk += eleatk;
                    atknum += 5;//ちょっとやばいかもよ？？ww
                    if(enemyhealth <= atk){atk = enemyhealth;}
                    break;
                case 'フィーバーチェーンソー':
                    atk = 4;
                    atk += enemydebuff.time;
                    atknum += 3;
                    if(enemyhealth <= atk){atk = enemyhealth;}
                    break;


                //こっからM
                case '盾':
                    shl = 4;
                    shl += eleshl;                    
                    break;
                case '回復':
                    repair = 4;
                    break;
                case '攻撃力上昇':
                    if(nowturn == 'P'){playereleatk += 1;}
                    if(nowturn == 'E'){enemyeleatk += 1;}
                    break;
                case 'グリーン・トレイン':
                    //ないっすよ。だってこれ存在するだけで効果だし
                    //逆に何を書けないいんですか？？
                    break;
                case '硬化':
                    addbuff = ['playerbuff','硬化',4];
                    break;
                case 'ドクター・イエロー':
                    repair = phasenum * 2;
                    //これはあるんっすよ。ドクターイエローに感謝を
                    break;
                case 'デュアルコア':
                    if(nowturn == 'P'){nextcardactpat = '0011';}
                    if(nowturn == 'E'){prevcardactpat = '1100';}
                case 'シーフマスク':
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
                    //シーフマスクのエフェクト出しといて(画像がちょっと浮いて消えるだけでいい)
                    break;
                case 'オーバードライブ':
                    playerhealth = document.querySelectorAll('.cooldown').length*2;
                    nextcardactpat = '0000';
                    break;
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
            document.getElementById('log').innerHTML = 'デュアルコアシステム、始動！！';
            await delay(1000);
        }
        if(nextcardactpat === '0000'){
            document.getElementById('log').innerHTML = 'この時を待っていました...';//シュナさんのセリフやね まあ..これはコラボじゃないんで！SSRではないです！！！
            await delay(1000);
            document.getElementById('log').innerHTML = 'オーバードライブ！！！';
            await delay(1000);
            document.getElementById('log').innerHTML = '';
        }

        if(playerhealth <= 0){
            document.getElementById('log').innerHTML = '負けた！！！';
        }
        if(enemyhealth <= 0){
            document.getElementById('log').innerHTML = '勝ち！！！！';//いや適当か ←このツッコミ好き
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